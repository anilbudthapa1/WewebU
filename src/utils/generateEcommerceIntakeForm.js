import {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, WidthType, ShadingType, PageBreak, Footer, Header,
  PageNumber, convertInchesToTwip,
} from 'docx'
import { saveAs } from 'file-saver'

const PRIMARY  = '7C3AED'
const DARK     = '0F172A'
const MUTED    = '64748B'
const LIGHT_BG = 'F5F3FF'
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

export async function generateEcommerceIntakeForm() {
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
                new TextRun({ text: '  |  E-commerce Store Intake Form', size: 20, color: MUTED, font: 'Calibri' }),
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
          children: [new TextRun({ text: 'Website Design & Development', size: 28, color: MUTED, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'www.wewebu.com.au', size: 22, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'E-COMMERCE STORE PROJECT', bold: true, size: 44, color: DARK, font: 'Calibri' })],
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
          children: [new TextRun({ text: 'This document contains confidential business and product information shared between the client and WeWebU for the purpose of e-commerce store development. All information will be kept strictly confidential.', size: 18, color: MUTED, font: 'Calibri', italics: true })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 300, after: 300 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'E-commerce Store Package — from $2,500 AUD', bold: true, size: 24, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Date Submitted:  ___________________', size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'WeWebU Reference:  WW-EC-' + Date.now().toString().slice(-6), size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 800 },
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 1: BUSINESS INFO ──
        heading('SECTION 1 — BUSINESS INFORMATION'),
        note('This information will appear on your store — ABN is required for Australian businesses.'),
        answerLine('Business / Company Name'),
        answerLine('Trading Name (if different)'),
        answerLine('ABN / ACN'),
        answerLine('Industry / Product Category'),
        answerLine('Business Address'),
        answerLine('Suburb / State / Postcode'),
        answerLine('Year Established'),
        subLabel('Brief description of your business and what you sell:'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── SECTION 2: CONTACT DETAILS ──
        heading('SECTION 2 — PRIMARY CONTACT DETAILS'),
        answerLine('Full Name'),
        answerLine('Job Title / Role'),
        answerLine('Mobile Number'),
        answerLine('Email Address'),
        answerLine('Alternative Email'),
        subLabel('Preferred contact method:'),
        checkRow(['Phone Call', 'SMS', 'Email', 'WhatsApp']),
        answerLine('Best time to contact'),

        divider(),

        // ── SECTION 3: PLATFORM ──
        heading('SECTION 3 — PLATFORM & STORE TYPE'),
        subLabel('Preferred platform:'),
        checkRow(['Shopify', 'WooCommerce (WordPress)', 'Not sure — advise me']),
        subLabel('Type of store:'),
        checkRow(['Physical products', 'Digital products / downloads', 'Services', 'Mix of physical & digital']),
        subLabel('Do you have an existing online store?'),
        checkRow(['Yes — migrating from another platform', 'Yes — rebuilding existing store', 'No — brand new store']),
        answerLine('If yes — existing store URL'),
        answerLine('Current platform (e.g. Wix, Squarespace, BigCommerce)'),
        subLabel('Estimated number of products at launch:'),
        checkRow(['1–20 products', '21–100 products', '101–500 products', '500+ products']),
        answerLine('Number of product categories / collections'),

        divider(),

        // ── SECTION 4: PRODUCTS ──
        heading('SECTION 4 — PRODUCT DETAILS'),
        note('Accurate product info helps us set up your catalogue correctly from day one.'),
        subLabel('Product types (tick all that apply):'),
        checkRow(['Single variant (one size/colour)', 'Multiple variants (size, colour, etc.)', 'Bundles / sets']),
        checkRow(['Subscription products', 'Pre-order products', 'Made-to-order / custom products']),
        subLabel('Do your products have variants (size, colour, material, etc.)?'),
        checkRow(['Yes', 'No']),
        answerLine('Describe the variants (e.g. S/M/L/XL, Red/Blue/Green)'),
        subLabel('Product images:'),
        checkRow(['I have professional product photos', 'I have phone photos only', 'Need product photography advice', 'Will provide later']),
        subLabel('Product descriptions:'),
        checkRow(['I will write them', 'Please help write them', 'Already written — will provide']),
        answerLine('Will you have sale/discount pricing?'),
        subLabel('Do you sell wholesale or bulk pricing?'),
        checkRow(['Yes', 'No']),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 5: PAYMENTS ──
        heading('SECTION 5 — PAYMENTS & CHECKOUT'),
        subLabel('Payment methods to accept (tick all that apply):'),
        checkRow(['Credit / Debit Card (Visa, Mastercard)', 'PayPal', 'Apple Pay / Google Pay']),
        checkRow(['Afterpay / Klarna (Buy Now Pay Later)', 'Bank transfer', 'Zip Pay']),
        subLabel('Do you already have a payment gateway account?'),
        checkRow(['Yes — Stripe', 'Yes — PayPal', 'Yes — Square', 'No — please set up for me']),
        answerLine('If yes — payment gateway provider'),
        subLabel('Currency:'),
        checkRow(['AUD only', 'Multi-currency (AUD + others)']),
        subLabel('Do you charge GST?'),
        checkRow(['Yes — 10% GST on all products', 'Some products are GST-free', 'No — not registered for GST']),
        subLabel('Do you need tax invoices generated automatically?'),
        checkRow(['Yes', 'No', 'Not sure']),

        divider(),

        // ── SECTION 6: SHIPPING ──
        heading('SECTION 6 — SHIPPING & FULFILMENT'),
        subLabel('Do you ship within Australia?'),
        checkRow(['Yes', 'No']),
        subLabel('Do you ship internationally?'),
        checkRow(['Yes', 'No', 'Maybe in the future']),
        subLabel('Shipping method:'),
        checkRow(['Australia Post (integration required)', 'StarTrack / Courier', 'In-store pickup only', 'Free shipping on all orders']),
        checkRow(['Flat rate shipping', 'Weight-based shipping', 'Free shipping over a threshold']),
        answerLine('If flat rate — shipping fee ($)'),
        answerLine('If free shipping threshold — minimum order ($)'),
        subLabel('Do you have a warehouse / fulfilment address?'),
        checkRow(['Yes — same as business address', 'Yes — different address', 'No — dropshipping']),
        answerLine('Warehouse / dispatch address (if different)'),
        subLabel('Do you need click-and-collect / local pickup?'),
        checkRow(['Yes', 'No']),
        answerLine('Estimated dispatch time (e.g. 1–3 business days)'),

        divider(),

        // ── SECTION 7: DESIGN ──
        heading('SECTION 7 — DESIGN & BRANDING'),
        subLabel('Do you have an existing brand?'),
        checkRow(['Yes — logo + brand guidelines available', 'Yes — logo only', 'No — need branding help (additional cost)']),
        answerLine('Logo file format available (e.g. PNG, SVG, AI)'),
        subLabel('Brand colours (provide hex codes if available):'),
        answerLine('Primary Colour'), answerLine('Secondary Colour'), answerLine('Accent Colour'),
        subLabel('Preferred store style:'),
        checkRow(['Minimalist / clean', 'Bold / colourful', 'Luxury / premium', 'Friendly / playful']),
        subLabel('Online stores you like (provide URLs and what you like):'),
        answerLine('URL 1  |  What I like'),
        answerLine('URL 2  |  What I like'),
        answerLine('Any design notes or must-haves?'),
        answerLine(''),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 8: FEATURES ──
        heading('SECTION 8 — STORE FEATURES REQUIRED'),
        subLabel('Customer accounts:'),
        checkRow(['Guest checkout only', 'Optional account creation', 'Required account creation']),
        subLabel('Additional features needed (tick all that apply):'),
        checkRow(['Wishlist / Save for later', 'Product reviews & ratings', 'Recently viewed products']),
        checkRow(['Recommended / related products', 'Stock countdown / urgency timer', 'Gift cards']),
        checkRow(['Loyalty / rewards program', 'Discount codes / coupon system', 'Abandoned cart recovery']),
        checkRow(['Newsletter popup / email capture', 'Live chat widget', 'Social proof notifications']),
        checkRow(['Product comparison', 'Age verification gate', 'Wholesale / trade login area']),
        subLabel('SEO requirements:'),
        checkRow(['Basic on-page SEO for all products', 'Full SEO setup + Google Shopping feed', 'Not needed right now']),
        subLabel('Analytics & tracking:'),
        checkRow(['Google Analytics 4', 'Facebook Pixel', 'TikTok Pixel', 'Google Ads conversion tracking']),

        divider(),

        // ── SECTION 9: INVENTORY ──
        heading('SECTION 9 — INVENTORY & MANAGEMENT'),
        subLabel('How will you manage stock?'),
        checkRow(['Manually update in the store dashboard', 'Sync with POS (point of sale) system', 'Dropshipping — supplier manages stock']),
        answerLine('POS system name (if applicable)'),
        subLabel('Do you need low-stock alerts?'),
        checkRow(['Yes — email me when stock is low', 'No']),
        answerLine('Low stock threshold (e.g. alert me when under 5 units)'),
        subLabel('Do products go out of stock?'),
        checkRow(['Show "Out of stock" and hide buy button', 'Allow backorders', 'Continue selling regardless']),
        subLabel('Will you need staff access to manage inventory?'),
        checkRow(['Yes — multiple staff logins needed', 'No — just me']),
        answerLine('How many staff members need access?'),

        divider(),

        // ── SECTION 10: DOMAIN & HOSTING ──
        heading('SECTION 10 — DOMAIN, HOSTING & EXISTING SYSTEMS'),
        subLabel('Domain name:'),
        checkRow(['I already own a domain', 'I need a domain registered', 'Not sure']),
        answerLine('Preferred / existing domain name'),
        answerLine('Domain registrar (if you own one)'),
        subLabel('Hosting:'),
        checkRow(['Shopify hosted (recommended for Shopify)', 'Self-hosted WordPress/WooCommerce', 'Please advise']),
        subLabel('Do you use any of the following that need integration?'),
        checkRow(['Xero / MYOB (accounting)', 'Mailchimp / Klaviyo (email marketing)', 'Facebook / Instagram Shop']),
        checkRow(['Google Shopping', 'eBay / Amazon', 'Cin7 / Dear Inventory']),
        answerLine('Other systems or tools to integrate'),

        divider(),

        // ── SECTION 11: TIMELINE ──
        heading('SECTION 11 — TIMELINE & BUDGET'),
        answerLine('Desired launch date'),
        subLabel('Is this a hard deadline?'),
        checkRow(['Yes — must launch by that date', 'Preferred but flexible', 'No deadline']),
        answerLine('Reason for deadline (if applicable)'),
        subLabel('Approved package:'),
        checkRow(['E-commerce Store — $2,500 base', 'Custom quote required']),
        answerLine('Budget for additional features or integrations ($)'),
        subLabel('How did you hear about WeWebU?'),
        checkRow(['Google Search', 'Google Maps', 'Instagram', 'Referred by someone', 'Other']),
        subLabel('Anything else we should know?'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── DECLARATION ──
        heading('DECLARATION & SIGNATURE'),
        new Paragraph({
          children: [new TextRun({ text: 'I confirm that the information provided is accurate and complete. I understand that WeWebU will use this information solely to plan and deliver my e-commerce store project. I agree to WeWebU\'s Terms of Service and Privacy Policy at www.wewebu.com.au.', size: 18, color: DARK, font: 'Calibri' })],
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
  saveAs(blob, 'WeWebU-Ecommerce-Intake-Form.docx')
}
