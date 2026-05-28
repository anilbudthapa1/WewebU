#!/usr/bin/env node
/**
 * WeWebU Lead Finder
 * Finds local businesses on Google Maps that have no website
 *
 * Usage:
 *   node tools/find-leads.js "cafes" "Springvale VIC"
 *   node tools/find-leads.js "restaurants" "Clayton VIC"
 *   node tools/find-leads.js "hair salon" "Dandenong VIC"
 *
 * Set your API key:
 *   export GOOGLE_PLACES_API_KEY=your_key_here
 *   or pass inline: GOOGLE_PLACES_API_KEY=your_key node tools/find-leads.js ...
 */

import { writeFileSync } from 'fs'
import { resolve } from 'path'

const API_KEY = process.env.GOOGLE_PLACES_API_KEY

if (!API_KEY) {
  console.error('\n❌  Missing API key.')
  console.error('    Set it first:  export GOOGLE_PLACES_API_KEY=your_key_here\n')
  process.exit(1)
}

const [,, businessType, location] = process.argv
if (!businessType || !location) {
  console.log('\nUsage: node tools/find-leads.js "business type" "suburb STATE"')
  console.log('Example: node tools/find-leads.js "restaurants" "Springvale VIC"\n')
  process.exit(1)
}

const sleep = ms => new Promise(r => setTimeout(r, ms))

async function textSearch(query, pageToken = null) {
  let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${API_KEY}`
  if (pageToken) url += `&pagetoken=${pageToken}`
  const res = await fetch(url)
  return res.json()
}

async function getDetails(placeId) {
  const fields = 'name,website,formatted_phone_number,formatted_address,rating,user_ratings_total,business_status'
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${API_KEY}`
  const res = await fetch(url)
  const data = await res.json()
  return data.result
}

async function findLeads(type, loc) {
  const query = `${type} in ${loc}`

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`  WeWebU Lead Finder`)
  console.log(`  Searching: ${query}`)
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`)

  const leads   = []
  const skipped = []
  let pageToken = null
  let page      = 1
  let total     = 0

  do {
    if (pageToken) {
      process.stdout.write('  ⏳ Loading next page...\r')
      await sleep(2200) // Google requires ~2s delay between page tokens
    }

    const data = await textSearch(query, pageToken)

    if (data.status === 'REQUEST_DENIED') {
      console.error(`\n❌  API key error: ${data.error_message}`)
      console.error('    Make sure Places API is enabled in Google Cloud Console.\n')
      process.exit(1)
    }

    if (data.status === 'ZERO_RESULTS') {
      console.log('  No results found. Try a different business type or location.')
      break
    }

    if (data.status !== 'OK') {
      console.error(`\n❌  API error: ${data.status}`)
      break
    }

    const results = data.results || []
    total += results.length
    console.log(`  Page ${page} — ${results.length} businesses found. Checking each...\n`)

    for (let i = 0; i < results.length; i++) {
      const place   = results[i]
      const details = await getDetails(place.place_id)

      if (!details) continue

      // Skip permanently closed
      if (details.business_status === 'PERMANENTLY_CLOSED') {
        process.stdout.write('  ✗ ')
        console.log(`[closed] ${details.name || place.name}`)
        continue
      }

      if (!details.website) {
        leads.push({
          name:    details.name    || place.name    || '—',
          phone:   details.formatted_phone_number  || 'Not listed',
          address: details.formatted_address       || 'Not listed',
          rating:  details.rating
            ? `${details.rating} (${details.user_ratings_total ?? 0} reviews)`
            : 'No rating',
        })
        process.stdout.write('  ✅ ')
        console.log(`[LEAD] ${details.name || place.name}`)
      } else {
        process.stdout.write('  · ')
        console.log(`[has website] ${details.name || place.name}`)
        skipped.push(details.name || place.name)
      }

      await sleep(120) // Be polite to the API
    }

    pageToken = data.next_page_token
    page++

    if (page > 3) {
      console.log('\n  (Stopped at 3 pages / ~60 results to stay within free tier)')
      break
    }
  } while (pageToken)

  // ── Summary ──────────────────────────────────────────────
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  console.log(`  Results: ${total} businesses scanned → ${leads.length} leads found`)
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`)

  if (leads.length === 0) {
    console.log('  No leads found this time. Try a broader search term.\n')
    return
  }

  leads.forEach((l, i) => {
    console.log(`  ${i + 1}. ${l.name}`)
    console.log(`     📞 ${l.phone}`)
    console.log(`     📍 ${l.address}`)
    console.log(`     ⭐ ${l.rating}`)
    console.log()
  })

  // ── Save CSV ──────────────────────────────────────────────
  const slug     = `${type}-${loc}`.replace(/\s+/g, '-').replace(/[^a-z0-9\-]/gi, '').toLowerCase()
  const filename = `leads-${slug}-${Date.now()}.csv`
  const outPath  = resolve(process.cwd(), filename)

  const csvRows = [
    'Name,Phone,Address,Rating',
    ...leads.map(l =>
      [l.name, l.phone, l.address, l.rating]
        .map(v => `"${String(v).replace(/"/g, '""')}"`)
        .join(',')
    ),
  ]

  writeFileSync(outPath, csvRows.join('\n'), 'utf8')
  console.log(`  💾 Saved to: ${filename}`)
  console.log(`  📊 ${leads.length} leads ready for outreach.\n`)
}

findLeads(businessType, location).catch(err => {
  console.error('\n❌ ', err.message)
  process.exit(1)
})
