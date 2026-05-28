import {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, BorderStyle, Table, TableRow, TableCell,
  WidthType, ShadingType, PageBreak, Footer, Header,
  PageNumber, NumberFormat, convertInchesToTwip,
} from 'docx'
import { saveAs } from 'file-saver'

const PRIMARY   = '4F46E5'
const DARK      = '0F172A'
const MUTED     = '64748B'
const LIGHT_BG  = 'F0F4FF'
const WHITE     = 'FFFFFF'
const BORDER_C  = 'E2E8F0'

function heading(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        size: 26,
        color: WHITE,
        font: 'Calibri',
      }),
    ],
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

export async function generateIntakeForm() {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(1),
            right: convertInchesToTwip(1),
            bottom: convertInchesToTwip(1),
            left: convertInchesToTwip(1),
          },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: 'WeWebU', bold: true, size: 20, color: PRIMARY, font: 'Calibri' }),
                new TextRun({ text: '  |  Website Project Intake Form', size: 20, color: MUTED, font: 'Calibri' }),
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

        // ── COVER ──────────────────────────────────────────
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
          children: [new TextRun({ text: 'CLIENT WEBSITE PROJECT', bold: true, size: 44, color: DARK, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'INTAKE FORM', bold: true, size: 44, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),

        new Paragraph({
          children: [
            new TextRun({ text: '🔒  CONFIDENTIAL DOCUMENT', bold: true, size: 22, color: 'EF4444', font: 'Calibri' }),
          ],
          alignment: AlignmentType.CENTER,
          shading: { type: ShadingType.SOLID, color: 'FEF2F2' },
          border: {
            top: { color: 'FECACA', space: 1, value: BorderStyle.SINGLE, size: 6 },
            bottom: { color: 'FECACA', space: 1, value: BorderStyle.SINGLE, size: 6 },
          },
          spacing: { before: 80, after: 80 },
        }),

        new Paragraph({
          children: [
            new TextRun({
              text: 'This document contains confidential information shared between the client and WeWebU for the purpose of website project scoping. All information provided will be kept strictly confidential and used solely to deliver your website project.',
              size: 18, color: MUTED, font: 'Calibri', italics: true,
            }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { before: 300, after: 300 },
        }),

        new Paragraph({
          children: [new TextRun({ text: 'Starter Business Website Package — $500 AUD', bold: true, size: 24, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),

        new Paragraph({
          children: [new TextRun({ text: 'Date Submitted:  ___________________', size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'WeWebU Reference:  WW-' + Date.now().toString().slice(-6), size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 800 },
        }),

        // Page break
        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 1: BUSINESS INFO ───────────────────────
        heading('SECTION 1 — BUSINESS INFORMATION'),
        note('Please fill in all fields. This information will be used on your website.'),
        answerLine('Business / Company Name'),
        answerLine('Trading Name (if different)'),
        answerLine('ABN / ACN'),
        answerLine('Industry / Sector'),
        answerLine('Business Address'),
        answerLine('Suburb / State / Postcode'),
        answerLine('Year Established'),
        subLabel('Brief description of your business (2–3 sentences):'),
        answerLine(''),
        answerLine(''),
        answerLine(''),

        divider(),

        // ── SECTION 2: CONTACT DETAILS ─────────────────────
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

        // ── SECTION 3: WEBSITE GOALS ───────────────────────
        heading('SECTION 3 — WEBSITE GOALS & AUDIENCE'),
        subLabel('Primary goal of your website:'),
        checkRow(['Generate leads/enquiries', 'Showcase portfolio/services', 'Sell products online']),
        checkRow(['Provide information', 'Build brand awareness', 'Other']),
        answerLine('Describe your target audience'),
        answerLine('Age range of target audience'),
        answerLine('Geographic focus (local / national / international)'),
        subLabel('What action do you want visitors to take?'),
        checkRow(['Call you', 'Fill out contact form', 'Visit your location', 'Buy a product']),

        divider(),

        // ── SECTION 4: PAGES & FEATURES ────────────────────
        heading('SECTION 4 — PAGES & FEATURES REQUIRED'),
        note('Your Starter Package includes up to 5 pages. List the pages you need below.'),
        answerLine('Page 1 (e.g. Home)'),
        answerLine('Page 2 (e.g. About)'),
        answerLine('Page 3 (e.g. Services)'),
        answerLine('Page 4 (e.g. Gallery / Portfolio)'),
        answerLine('Page 5 (e.g. Contact)'),
        subLabel('Additional features required (tick all that apply):'),
        checkRow(['Contact Form', 'Google Maps embed', 'Photo Gallery', 'Video embed']),
        checkRow(['Social media links', 'Newsletter signup', 'Online booking', 'Live chat']),
        checkRow(['FAQ section', 'Blog / News', 'Testimonials section', 'Certificate/Awards display']),
        subLabel('Any specific functionality not listed above?'),
        answerLine(''),
        answerLine(''),

        divider(),

        // Page break
        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 5: DESIGN ──────────────────────────────
        heading('SECTION 5 — DESIGN PREFERENCES'),
        subLabel('Preferred design style (tick one):'),
        checkRow(['Modern & minimal', 'Bold & vibrant', 'Classic & professional']),
        checkRow(['Elegant & luxury', 'Friendly & approachable', 'Not sure — trust your team']),
        subLabel('Brand colours (provide hex codes if you have them):'),
        answerLine('Primary Colour'),
        answerLine('Secondary Colour'),
        answerLine('Accent Colour'),
        subLabel('Websites you like (provide URLs and what you like about them):'),
        answerLine('URL 1  |  What I like'),
        answerLine('URL 2  |  What I like'),
        subLabel('Websites you dislike (and why):'),
        answerLine('URL  |  What I dislike'),
        answerLine('Any other design notes or inspiration?'),
        answerLine(''),

        divider(),

        // ── SECTION 6: EXISTING ASSETS ─────────────────────
        heading('SECTION 6 — EXISTING ASSETS & CONTENT'),
        subLabel('Logo:'),
        checkRow(['I have a logo — will provide file', 'I need a logo designed (additional cost)', 'No logo needed']),
        answerLine('Logo file format available (e.g. PNG, AI, SVG)'),
        subLabel('Photos / Images:'),
        checkRow(['I have professional photos', 'I have some phone photos', 'Need stock images', 'Will provide later']),
        subLabel('Written content (text for pages):'),
        checkRow(['I will write all content', 'Please help write content', 'Mix of both']),
        subLabel('Do you have an existing website?'),
        checkRow(['Yes', 'No']),
        answerLine('If yes — existing URL'),
        answerLine('What do you want to keep from it?'),
        answerLine('What do you want to change?'),
        subLabel('Social media accounts to link:'),
        answerLine('Facebook'),
        answerLine('Instagram'),
        answerLine('LinkedIn'),
        answerLine('Other'),

        divider(),

        // ── SECTION 7: DOMAIN & HOSTING ────────────────────
        heading('SECTION 7 — DOMAIN & HOSTING'),
        subLabel('Domain name:'),
        checkRow(['I already own a domain', 'I need a domain registered', 'Not sure']),
        answerLine('Preferred domain name (e.g. mybusiness.com.au)'),
        answerLine('Domain registrar / provider (if you own one)'),
        subLabel('Hosting:'),
        checkRow(['I have existing hosting', 'Please set up hosting for me', 'Not sure']),
        answerLine('Hosting provider (if applicable)'),
        subLabel('Business email:'),
        checkRow(['I have a business email (e.g. info@business.com.au)', 'I need one set up', 'Using Gmail is fine']),

        divider(),

        // ── SECTION 8: TIMELINE ────────────────────────────
        heading('SECTION 8 — TIMELINE & ADDITIONAL NOTES'),
        answerLine('Desired launch date'),
        subLabel('Is this a hard deadline?'),
        checkRow(['Yes — must launch by that date', 'Preferred but flexible', 'No deadline']),
        answerLine('Reason for deadline (if applicable)'),
        subLabel('How did you hear about WeWebU?'),
        checkRow(['Google Search', 'Google Maps', 'Instagram', 'Facebook']),
        checkRow(['Referred by someone', 'Flyer / brochure', 'Other']),
        subLabel('Anything else we should know about your project?'),
        answerLine(''),
        answerLine(''),
        answerLine(''),

        divider(),

        // ── DECLARATION ────────────────────────────────────
        heading('DECLARATION & SIGNATURE'),
        new Paragraph({
          children: [
            new TextRun({
              text: 'I confirm that the information provided in this form is accurate and complete to the best of my knowledge. I understand that WeWebU will use this information solely to plan and deliver my website project. I agree to WeWebU\'s Terms of Service and Privacy Policy available at www.wewebu.com.au.',
              size: 18, color: DARK, font: 'Calibri',
            }),
          ],
          spacing: { before: 120, after: 240 },
        }),
        answerLine('Full Name'),
        answerLine('Signature'),
        answerLine('Date'),
        answerLine('Company Name'),

        new Paragraph({ spacing: { before: 400 } }),
        new Paragraph({
          children: [
            new TextRun({ text: '📧 ', size: 18, font: 'Calibri' }),
            new TextRun({ text: 'Return this completed form to: ', size: 18, color: MUTED, font: 'Calibri' }),
            new TextRun({ text: 'contact@wewebu.com.au', bold: true, size: 18, color: PRIMARY, font: 'Calibri' }),
          ],
          shading: { type: ShadingType.SOLID, color: LIGHT_BG },
          spacing: { before: 80, after: 80 },
          indent: { left: convertInchesToTwip(0.2) },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: '📞 ', size: 18, font: 'Calibri' }),
            new TextRun({ text: 'Or call us: ', size: 18, color: MUTED, font: 'Calibri' }),
            new TextRun({ text: '0421 688 186', bold: true, size: 18, color: PRIMARY, font: 'Calibri' }),
          ],
          shading: { type: ShadingType.SOLID, color: LIGHT_BG },
          spacing: { before: 0, after: 80 },
          indent: { left: convertInchesToTwip(0.2) },
        }),

        new Paragraph({
          children: [
            new TextRun({
              text: '© 2025 WeWebU Pty Ltd  ·  ABN  ·  5 Eve Ct, Springvale VIC 3171  ·  All rights reserved. This document is confidential and intended solely for the named client.',
              size: 16, color: MUTED, italics: true, font: 'Calibri',
            }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { before: 400 },
        }),
      ],
    }],
  })

  const blob = await Packer.toBlob(doc)
  saveAs(blob, 'WeWebU-Website-Intake-Form.docx')
}
