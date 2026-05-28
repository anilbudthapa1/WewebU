import {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, ShadingType, PageBreak, Footer, Header,
  PageNumber, convertInchesToTwip,
} from 'docx'
import { saveAs } from 'file-saver'

const PRIMARY  = '16A34A'
const DARK     = '0F172A'
const MUTED    = '64748B'
const LIGHT_BG = 'F0FDF4'
const WHITE    = 'FFFFFF'
const BORDER_C = 'E2E8F0'

function heading(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 26, color: WHITE, font: 'Calibri' })],
    shading: { type: ShadingType.SOLID, color: PRIMARY },
    spacing: { before: 280, after: 120 },
    indent: { left: convertInchesToTwip(0.15), right: convertInchesToTwip(0.15) },
  })
}

function subLabel(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 20, color: DARK, font: 'Calibri' })],
    spacing: { before: 160, after: 60 },
  })
}

function answerLine(label) {
  return new Paragraph({
    children: [
      new TextRun({ text: label ? `${label}:  ` : '', bold: true, size: 19, color: MUTED, font: 'Calibri' }),
      new TextRun({ text: '_'.repeat(60), size: 19, color: 'CBD5E1', font: 'Calibri' }),
    ],
    spacing: { before: 60, after: 60 },
  })
}

function checkRow(items) {
  return new Paragraph({
    children: items.flatMap(item => [
      new TextRun({ text: '☐  ', size: 19, font: 'Calibri' }),
      new TextRun({ text: item + '     ', size: 19, color: DARK, font: 'Calibri' }),
    ]),
    spacing: { before: 60, after: 60 },
  })
}

function divider() {
  return new Paragraph({
    border: { bottom: { color: BORDER_C, space: 1, value: BorderStyle.SINGLE, size: 6 } },
    spacing: { before: 200, after: 200 },
  })
}

function note(text) {
  return new Paragraph({
    children: [new TextRun({ text, italics: true, size: 17, color: MUTED, font: 'Calibri' })],
    shading: { type: ShadingType.SOLID, color: LIGHT_BG },
    spacing: { before: 80, after: 80 },
    indent: { left: convertInchesToTwip(0.2), right: convertInchesToTwip(0.2) },
  })
}

export async function generateGoogleBusinessIntakeForm() {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(1), right: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1), left: convertInchesToTwip(1),
          },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'WeWebU', bold: true, size: 20, color: PRIMARY, font: 'Calibri' }),
                new TextRun({ text: '  |  Google Business Optimisation Intake Form', size: 20, color: MUTED, font: 'Calibri' }),
                new TextRun({ text: '  ·  CONFIDENTIAL', bold: true, size: 18, color: 'EF4444', font: 'Calibri' }),
              ],
              border: { bottom: { color: BORDER_C, space: 1, value: BorderStyle.SINGLE, size: 4 } },
              spacing: { after: 80 },
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: '© 2025 WeWebU — www.wewebu.com.au  |  contact@wewebu.com.au  |  0421 688 186', size: 16, color: MUTED, font: 'Calibri' }),
                new TextRun({ text: '  |  Page ', size: 16, color: MUTED, font: 'Calibri' }),
                new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: 'Calibri' }),
              ],
              border: { top: { color: BORDER_C, space: 1, value: BorderStyle.SINGLE, size: 4 } },
              spacing: { before: 80 },
              alignment: AlignmentType.CENTER,
            }),
          ],
        }),
      },
      children: [

        // ── COVER ──
        new Paragraph({
          children: [new TextRun({ text: 'WeWebU', bold: true, size: 72, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 800, after: 120 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Google Business Promotion', size: 28, color: MUTED, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'www.wewebu.com.au', size: 22, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'GOOGLE BUSINESS OPTIMISATION', bold: true, size: 44, color: DARK, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'INTAKE FORM', bold: true, size: 44, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),
        new Paragraph({
          children: [new TextRun({ text: '🔒  CONFIDENTIAL DOCUMENT', bold: true, size: 22, color: 'EF4444', font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.SOLID, color: 'FEF2F2' },
          border: {
            top: { color: 'FECACA', space: 1, value: BorderStyle.SINGLE, size: 6 },
            bottom: { color: 'FECACA', space: 1, value: BorderStyle.SINGLE, size: 6 },
          },
          spacing: { before: 80, after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'This document contains confidential business information shared between the client and WeWebU for the purpose of Google Business Profile optimisation. All information will be kept strictly confidential and used solely to deliver your project.', size: 18, color: MUTED, font: 'Calibri', italics: true })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 300, after: 300 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Google Business Optimisation Package — $299 AUD (one-time)', bold: true, size: 24, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Date Submitted:  ___________________', size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'WeWebU Reference:  WW-GBP-' + Date.now().toString().slice(-6), size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 800 },
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 1: BUSINESS INFO ──
        heading('SECTION 1 — BUSINESS INFORMATION'),
        note('This information will be entered directly into your Google Business Profile — accuracy is critical.'),
        answerLine('Business / Company Name (exactly as you want it on Google)'),
        answerLine('Trading Name (if different from registered name)'),
        answerLine('ABN / ACN'),
        answerLine('Business Phone Number (to display on Google)'),
        answerLine('Business Email Address'),
        answerLine('Website URL (e.g. www.yourbusiness.com.au)'),
        answerLine('Business Physical Address (street number and name)'),
        answerLine('Suburb'),
        answerLine('State'),
        answerLine('Postcode'),
        subLabel('Is your address visible to customers? (do you have a shopfront / office customers visit?)'),
        checkRow(['Yes — show full address on Google', 'No — I\'m home-based, hide my address', 'I serve customers at their location']),
        subLabel('Do you serve customers at their location (e.g. mobile business, tradesperson)?'),
        checkRow(['Yes — I travel to customers', 'No — customers come to me', 'Both']),
        answerLine('If you travel to customers — service area (e.g. Melbourne metro, Eastern suburbs VIC)'),

        divider(),

        // ── SECTION 2: CONTACT DETAILS ──
        heading('SECTION 2 — PRIMARY CONTACT DETAILS'),
        note('The person WeWebU will liaise with to set up and verify the profile.'),
        answerLine('Full Name'),
        answerLine('Job Title / Role'),
        answerLine('Mobile Number'),
        answerLine('Email Address'),
        subLabel('Preferred contact method:'),
        checkRow(['Phone Call', 'SMS', 'Email', 'WhatsApp']),
        answerLine('Best time to contact'),
        subLabel('Do you have access to the Google account used for the business?'),
        checkRow(['Yes — I have the Google account login', 'No — I need to create one', 'Not sure']),
        answerLine('Google account email (if known)'),

        divider(),

        // ── SECTION 3: CURRENT PROFILE STATUS ──
        heading('SECTION 3 — CURRENT GOOGLE BUSINESS PROFILE STATUS'),
        subLabel('Do you already have a Google Business Profile?'),
        checkRow(['Yes — it\'s verified and live', 'Yes — it exists but is unverified', 'Yes — but I\'ve lost access to it', 'No — no profile exists yet']),
        answerLine('If yes — Google Business Profile URL (search your business name on Google Maps and paste the URL)'),
        subLabel('Has your profile ever been suspended or flagged by Google?'),
        checkRow(['Yes', 'No', 'Not sure']),
        subLabel('Have you ever run Google Ads for this business?'),
        checkRow(['Yes — currently running', 'Yes — in the past', 'No']),
        subLabel('Current Google Maps / local search ranking (if you know it):'),
        checkRow(['Top 3 results', 'Page 1 (positions 4–10)', 'Page 2 or lower', 'Not ranking at all', 'Never checked']),
        answerLine('Search term you want to rank for (e.g. "plumber Dandenong")'),
        answerLine(''),

        divider(),

        // ── SECTION 4: BUSINESS CATEGORY & DETAILS ──
        heading('SECTION 4 — BUSINESS CATEGORY & PROFILE DETAILS'),
        note('Choosing the right category is one of the most important ranking factors on Google Maps.'),
        answerLine('Primary business category (e.g. "Plumber", "Café", "Accountant")'),
        answerLine('Secondary categories (if applicable — up to 3)'),
        answerLine(''),
        answerLine(''),
        subLabel('Business type:'),
        checkRow(['Local business (single location)', 'Business with multiple locations', 'Online / service-area business only']),
        subLabel('Business hours — please fill in your regular opening hours:'),
        answerLine('Monday'),
        answerLine('Tuesday'),
        answerLine('Wednesday'),
        answerLine('Thursday'),
        answerLine('Friday'),
        answerLine('Saturday'),
        answerLine('Sunday'),
        subLabel('Do you have special hours for public holidays?'),
        checkRow(['Yes — I\'ll update these myself', 'Yes — please advise how to update', 'No — same as regular hours', 'Closed on public holidays']),
        answerLine('Year the business was established'),
        subLabel('Does your business offer any of the following? (tick all that apply)'),
        checkRow(['Online appointments / bookings', 'Online orders / delivery', 'In-store shopping', 'Takeaway']),
        checkRow(['Dine-in', 'Drive-through', 'Kerbside pickup', 'Home delivery']),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 5: SERVICES & PRODUCTS ──
        heading('SECTION 5 — SERVICES & PRODUCTS'),
        note('List every service or product you offer — these will be added to your profile to appear in relevant searches.'),
        subLabel('List your main services / products (be specific — include price if applicable):'),
        answerLine('Service / Product 1'),
        answerLine('Service / Product 2'),
        answerLine('Service / Product 3'),
        answerLine('Service / Product 4'),
        answerLine('Service / Product 5'),
        answerLine('Service / Product 6'),
        answerLine('Service / Product 7'),
        answerLine('Service / Product 8'),
        answerLine('Any other services or products not listed?'),
        answerLine(''),
        subLabel('Do you have a menu or service list document you can share?'),
        checkRow(['Yes — will email it', 'No — the list above is complete', 'I\'ll provide it later']),
        subLabel('Do you offer any promotions, deals, or special offers?'),
        checkRow(['Yes — describe below', 'No']),
        answerLine('Current promotions or offers'),

        divider(),

        // ── SECTION 6: BUSINESS DESCRIPTION ──
        heading('SECTION 6 — BUSINESS DESCRIPTION & KEYWORDS'),
        note('Your Google Business description is limited to 750 characters. We will write it for you based on your answers below.'),
        subLabel('Describe your business in your own words — what do you do, who do you serve, and what makes you different?'),
        answerLine(''), answerLine(''), answerLine(''), answerLine(''),
        subLabel('What are the main keywords / search terms your customers use to find you?'),
        answerLine('Keyword 1 (e.g. "emergency plumber Melbourne")'),
        answerLine('Keyword 2'),
        answerLine('Keyword 3'),
        answerLine('Keyword 4'),
        answerLine('Keyword 5'),
        subLabel('What sets your business apart from competitors? (your unique selling points)'),
        answerLine(''),
        answerLine(''),
        subLabel('Special attributes (tick all that apply):'),
        checkRow(['Women-owned', 'Veteran-owned', 'Locally owned', 'Family-owned', 'LGBTQ+ friendly']),
        checkRow(['Wheelchair accessible', 'Free parking', 'Air-conditioned', 'Accepts EFTPOS', 'Accepts cash']),

        divider(),

        // ── SECTION 7: PHOTOS & MEDIA ──
        heading('SECTION 7 — PHOTOS & MEDIA'),
        note('Profiles with photos receive 42% more requests for directions and 35% more website clicks. Quality photos are essential.'),
        subLabel('Do you have a business logo?'),
        checkRow(['Yes — will provide high-res file (PNG or SVG preferred)', 'No — I need one designed (see our Logo package)', 'Using a text-based name']),
        subLabel('Do you have a cover photo (banner image for your profile)?'),
        checkRow(['Yes — will provide', 'No — please advise what to use', 'Not sure what this is']),
        subLabel('Do you have photos of your business? (tick all that apply)'),
        checkRow(['Exterior / shopfront photos', 'Interior / workspace photos', 'Team / staff photos']),
        checkRow(['Product photos', 'Work / project photos (before & after)', 'Food / menu photos']),
        answerLine('Total number of photos available to upload'),
        subLabel('Photo quality:'),
        checkRow(['Professional photographer', 'High-quality phone photos', 'Mixed quality — need guidance']),
        subLabel('Do you have any video content?'),
        checkRow(['Yes — business overview video (30 sec or less)', 'Yes — product demos or testimonials', 'No video yet']),
        answerLine('Any photos or media you specifically do NOT want displayed?'),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 8: REVIEWS & REPUTATION ──
        heading('SECTION 8 — REVIEWS & REPUTATION MANAGEMENT'),
        subLabel('How many Google reviews do you currently have?'),
        checkRow(['0 reviews', '1–10 reviews', '11–50 reviews', '51–100 reviews', '100+ reviews']),
        answerLine('Current average star rating (if known)'),
        subLabel('Have you responded to any reviews in the past?'),
        checkRow(['Yes — regularly', 'Yes — occasionally', 'No — I\'ve never responded', 'I didn\'t know I could']),
        subLabel('Do you have any negative reviews that need a response?'),
        checkRow(['Yes', 'No', 'Not sure']),
        answerLine('If yes — describe the situation briefly (optional)'),
        subLabel('Do you have reviews on other platforms?'),
        checkRow(['Facebook', 'Yelp', 'True Local', 'Hipages', 'Houzz', 'TripAdvisor', 'Other']),
        subLabel('How do you currently ask customers for reviews?'),
        checkRow(['I ask in person', 'I send a follow-up email or SMS', 'I don\'t ask — I need a strategy', 'My customers leave them without prompting']),
        subLabel('Would you like us to set up a review request link for you?'),
        checkRow(['Yes — I\'ll use it to send to customers', 'No — I already have one', 'Not sure']),
        answerLine('Any specific review-related concerns or situations to be aware of?'),
        answerLine(''),

        divider(),

        // ── SECTION 9: LOCAL SEO & COMPETITORS ──
        heading('SECTION 9 — LOCAL SEO & COMPETITORS'),
        note('Understanding your competitive landscape helps us position your profile for maximum local search visibility.'),
        subLabel('Main geographic area you want to dominate on Google Maps:'),
        answerLine('Primary suburb / area'),
        answerLine('Secondary suburbs / areas (if applicable)'),
        answerLine(''),
        subLabel('Who are your main competitors? (list 3–5 competitors you want to outrank)'),
        answerLine('Competitor 1  |  Business Name'),
        answerLine('Competitor 2  |  Business Name'),
        answerLine('Competitor 3  |  Business Name'),
        answerLine('Competitor 4  |  Business Name'),
        answerLine('Competitor 5  |  Business Name'),
        subLabel('Are you listed in any local business directories?'),
        checkRow(['Yellow Pages / Yellowpages.com.au', 'True Local', 'Yelp', 'Hotfrog', 'StartLocal']),
        checkRow(['Industry-specific directories (describe below)', 'None — not listed anywhere yet']),
        answerLine('Industry-specific directories (if applicable)'),
        subLabel('Do you have a website? (important for Google Maps ranking)'),
        checkRow(['Yes — URL above is current and working', 'Yes — but it needs updating', 'No — I need one (see our Website packages)']),
        subLabel('Is your business address consistent across all online platforms?'),
        checkRow(['Yes — same address everywhere', 'No — it varies (we\'ll fix this)', 'Not sure']),

        divider(),

        // ── SECTION 10: SOCIAL MEDIA & LINKS ──
        heading('SECTION 10 — SOCIAL MEDIA & ADDITIONAL LINKS'),
        note('These will be added to your profile where supported and included in your local citation strategy.'),
        answerLine('Facebook Page URL'),
        answerLine('Instagram Profile URL'),
        answerLine('LinkedIn Company Page URL'),
        answerLine('YouTube Channel URL'),
        answerLine('TikTok Profile URL'),
        answerLine('Other social media platform + URL'),
        subLabel('Do you have an online booking system?'),
        checkRow(['Yes — provide booking URL below', 'No — I take bookings by phone/email', 'I want to set one up']),
        answerLine('Booking / appointment URL'),
        subLabel('Do you have a menu URL (for cafés, restaurants, food businesses)?'),
        checkRow(['Yes — will provide URL', 'No']),
        answerLine('Menu URL'),

        divider(),

        // ── SECTION 11: TIMELINE & GOALS ──
        heading('SECTION 11 — GOALS & ADDITIONAL NOTES'),
        subLabel('What is your main goal from this optimisation? (tick your top 3)'),
        checkRow(['Appear in the Google Maps "3-pack" for my main search term', 'Get more phone calls from Google', 'Get more website visits from Google']),
        checkRow(['Get more walk-in customers', 'Improve my star rating / reputation', 'Beat a specific competitor on Google Maps']),
        checkRow(['Increase direction requests', 'Get more Google reviews', 'Look more professional / credible']),
        answerLine('Desired timeline for completion'),
        subLabel('How did you hear about WeWebU?'),
        checkRow(['Google Search', 'Google Maps', 'Instagram', 'Facebook', 'Referred by someone', 'Other']),
        subLabel('Anything else we should know about your business or your Google presence?'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── DECLARATION ──
        heading('DECLARATION & SIGNATURE'),
        new Paragraph({
          children: [new TextRun({ text: 'I confirm that I am authorised to manage the Google Business Profile for the above business. I confirm that all information provided is accurate and complete. I understand that WeWebU will use this information solely to optimise my Google Business Profile. I agree to WeWebU\'s Terms of Service and Privacy Policy at www.wewebu.com.au.', size: 18, color: DARK, font: 'Calibri' })],
          spacing: { before: 120, after: 240 },
        }),
        answerLine('Full Name'),
        answerLine('Signature'),
        answerLine('Date'),
        answerLine('Company Name'),

        new Paragraph({ spacing: { before: 400 } }),
        new Paragraph({
          children: [
            new TextRun({ text: '📧  Return to: ', size: 18, color: MUTED, font: 'Calibri' }),
            new TextRun({ text: 'contact@wewebu.com.au', bold: true, size: 18, color: PRIMARY, font: 'Calibri' }),
            new TextRun({ text: '  |  📞  ', size: 18, color: MUTED, font: 'Calibri' }),
            new TextRun({ text: '0421 688 186', bold: true, size: 18, color: PRIMARY, font: 'Calibri' }),
          ],
          shading: { type: ShadingType.SOLID, color: LIGHT_BG },
          spacing: { before: 80, after: 80 },
          indent: { left: convertInchesToTwip(0.2) },
        }),
        new Paragraph({
          children: [new TextRun({ text: '© 2025 WeWebU Pty Ltd  ·  5 Eve Ct, Springvale VIC 3171  ·  All rights reserved. Confidential — for named client only.', size: 16, color: MUTED, italics: true, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 400 },
        }),
      ],
    }],
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, 'WeWebU-GoogleBusiness-Intake-Form.docx')
}
