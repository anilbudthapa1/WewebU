import {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, ShadingType, PageBreak, Footer, Header,
  PageNumber, convertInchesToTwip,
} from 'docx'
import { saveAs } from 'file-saver'

const PRIMARY  = 'BE185D'
const DARK     = '0F172A'
const MUTED    = '64748B'
const LIGHT_BG = 'FDF2F8'
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

export async function generateLogoBrandingIntakeForm() {
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
                new TextRun({ text: '  |  Logo & Brand Identity Intake Form', size: 20, color: MUTED, font: 'Calibri' }),
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
          children: [new TextRun({ text: 'Graphic Design & Brand Identity', size: 28, color: MUTED, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'www.wewebu.com.au', size: 22, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'LOGO & BRAND IDENTITY', bold: true, size: 44, color: DARK, font: 'Calibri' })],
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
          children: [new TextRun({ text: 'This document contains confidential business and creative information shared between the client and WeWebU for the purpose of logo and brand identity design. All information will be kept strictly confidential and used solely to deliver your project.', size: 18, color: MUTED, font: 'Calibri', italics: true })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 300, after: 300 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Logo & Brand Identity Package — from $299 AUD', bold: true, size: 24, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Date Submitted:  ___________________', size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'WeWebU Reference:  WW-BRAND-' + Date.now().toString().slice(-6), size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 800 },
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 1: BUSINESS INFO ──
        heading('SECTION 1 — BUSINESS INFORMATION'),
        note('The more detail you provide here, the better we can design a brand that truly represents your business.'),
        answerLine('Business / Company Name'),
        answerLine('Trading Name (if different)'),
        answerLine('ABN / ACN'),
        answerLine('Industry / Sector'),
        answerLine('Business Website (if you have one)'),
        answerLine('Business Address / Location'),
        answerLine('Year Established (or "New Business")'),
        subLabel('Business type:'),
        checkRow(['Sole trader / freelancer', 'Small business (2–10 staff)', 'Medium business (11–50 staff)', 'Startup / new venture']),
        subLabel('Describe your business — what you do, who you serve, and what makes you different (3–5 sentences):'),
        answerLine(''), answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── SECTION 2: CONTACT DETAILS ──
        heading('SECTION 2 — PRIMARY CONTACT DETAILS'),
        answerLine('Full Name'),
        answerLine('Job Title / Role'),
        answerLine('Mobile Number'),
        answerLine('Email Address'),
        subLabel('Preferred contact method:'),
        checkRow(['Phone Call', 'SMS', 'Email', 'WhatsApp']),
        answerLine('Best time to contact'),
        subLabel('Who will have final approval on the design?'),
        checkRow(['Me (the contact above)', 'Business owner / director', 'Marketing manager', 'Other — name below']),
        answerLine('Final approver name and role (if different)'),

        divider(),

        // ── SECTION 3: PROJECT SCOPE ──
        heading('SECTION 3 — PROJECT SCOPE'),
        note('Tick everything you need — we will quote for any items not included in the base package.'),
        subLabel('Deliverables required (tick all that apply):'),
        checkRow(['Primary logo (main version)', 'Secondary / alternate logo layout', 'Icon / symbol / monogram (standalone mark)']),
        checkRow(['Colour palette (primary + secondary + accent)', 'Typography selection (heading + body fonts)']),
        checkRow(['Brand guidelines document (PDF)', 'Business card design', 'Letterhead / email signature template']),
        checkRow(['Social media profile & cover images', 'Social media post templates (Canva)', 'Email newsletter header']),
        checkRow(['Packaging / label design', 'Signage / banner design', 'Uniform / workwear logo placement guide']),
        subLabel('Do you need the brand applied to a website as well?'),
        checkRow(['Yes — see our Website Design packages', 'No — logo/brand files only', 'Maybe later']),
        subLabel('Is this a new brand or a rebrand?'),
        checkRow(['New business — no existing brand', 'Rebrand — we have an existing logo to replace', 'Refresh — keep the essence, modernise the look']),
        answerLine('If rebrand/refresh — what do you want to keep from the existing brand?'),
        answerLine('If rebrand/refresh — what must change and why?'),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 4: TARGET AUDIENCE ──
        heading('SECTION 4 — TARGET AUDIENCE & BRAND PERSONALITY'),
        note('Your logo needs to resonate with your customers first — this section shapes every design decision.'),
        subLabel('Who is your ideal customer? (describe in detail)'),
        answerLine('Age range'),
        answerLine('Gender (if relevant)'),
        answerLine('Location / region'),
        answerLine('Income level / lifestyle'),
        answerLine('Pain points / what they care about'),
        subLabel('How should your brand make customers feel? (tick up to 4)'),
        checkRow(['Trustworthy & reliable', 'Professional & corporate', 'Friendly & approachable', 'Luxurious & premium']),
        checkRow(['Bold & energetic', 'Calm & minimal', 'Playful & fun', 'Innovative & tech-forward']),
        checkRow(['Natural & eco-friendly', 'Traditional & established', 'Young & trendy', 'Authoritative & expert']),
        subLabel('If your brand were a person, describe their personality:'),
        answerLine(''),
        answerLine(''),
        subLabel('What do you want customers to say about your brand after seeing your logo?'),
        answerLine(''),

        divider(),

        // ── SECTION 5: DESIGN STYLE ──
        heading('SECTION 5 — DESIGN STYLE & DIRECTION'),
        subLabel('Logo style preference (tick up to 2):'),
        checkRow(['Wordmark (business name as logo, styled typography)', 'Lettermark (initials only, e.g. IBM)']),
        checkRow(['Icon / symbol only (graphic mark without text)', 'Combination mark (icon + name together)']),
        checkRow(['Emblem / badge (text inside a shape or crest)', 'No preference — designer\'s choice']),
        subLabel('Overall visual style (tick up to 3):'),
        checkRow(['Modern & minimal (clean lines, lots of white space)', 'Bold & geometric (strong shapes, high contrast)']),
        checkRow(['Elegant & luxury (refined, premium feel)', 'Playful & quirky (fun, rounded, expressive)']),
        checkRow(['Classic & traditional (timeless, serif, formal)', 'Hand-crafted / artisan (brushwork, texture, organic)']),
        checkRow(['Tech / digital (sharp, futuristic, precise)', 'Natural / organic (earthy, flowing, soft)']),
        subLabel('Logos / brands you love (provide names or URLs and what you like about each):'),
        answerLine('Brand 1  |  What I love about it'),
        answerLine('Brand 2  |  What I love about it'),
        answerLine('Brand 3  |  What I love about it'),
        subLabel('Logos / brands you dislike (and why):'),
        answerLine('Brand 1  |  What I dislike'),
        answerLine('Brand 2  |  What I dislike'),
        subLabel('Are there any design elements, icons, or imagery you definitely want included?'),
        answerLine(''),
        subLabel('Are there any elements, styles, or imagery you want to AVOID?'),
        answerLine(''),

        divider(),

        // ── SECTION 6: COLOUR ──
        heading('SECTION 6 — COLOUR PREFERENCES'),
        note('Colour is the most immediate signal your brand sends. The right palette builds recognition and trust.'),
        subLabel('Do you have existing brand colours?'),
        checkRow(['Yes — must use these exact colours (provide hex codes below)', 'Yes — but open to refinement', 'No — starting fresh']),
        answerLine('Existing Primary Colour (hex code, e.g. #4F46E5)'),
        answerLine('Existing Secondary Colour'),
        answerLine('Existing Accent Colour'),
        subLabel('Colour direction you prefer (tick up to 3):'),
        checkRow(['Blues & teals (trust, calm, professionalism)', 'Greens (nature, health, growth)', 'Reds & oranges (energy, passion, urgency)']),
        checkRow(['Purples & pinks (creativity, luxury, femininity)', 'Yellows & golds (optimism, warmth, premium)']),
        checkRow(['Blacks & greys (sophistication, minimal, luxury)', 'Earthy / neutrals (natural, warm, artisan)']),
        checkRow(['Bright / vibrant palette', 'Muted / pastel palette', 'Dark / moody palette', 'Light / airy palette']),
        subLabel('Are there any colours you absolutely do NOT want?'),
        answerLine(''),
        subLabel('Industry colour norms — are you happy to follow them or do you want to stand out?'),
        checkRow(['Follow industry norms (blend in with competitors)', 'Stand out with something different', 'No strong preference']),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 7: TYPOGRAPHY ──
        heading('SECTION 7 — TYPOGRAPHY PREFERENCES'),
        subLabel('Font style preference (tick up to 2):'),
        checkRow(['Serif (traditional, trustworthy — like Times New Roman)', 'Sans-serif (modern, clean — like Helvetica)']),
        checkRow(['Script / handwritten (personal, elegant, creative)', 'Display / decorative (unique, bold, eye-catching)']),
        checkRow(['No preference — designer\'s choice']),
        subLabel('Font weight preference:'),
        checkRow(['Light / thin (minimal, airy)', 'Regular / medium (balanced, versatile)', 'Bold / heavy (strong, confident)']),
        subLabel('Any existing fonts you use and want to keep?'),
        answerLine('Font name(s)'),
        subLabel('Any fonts you love and want us to consider?'),
        answerLine('Font name(s)'),
        subLabel('Does your business name include any special characters, accents, or symbols?'),
        checkRow(['Yes — specify below', 'No']),
        answerLine('Special characters / details'),
        subLabel('Do you have a tagline or slogan to include in the logo?'),
        checkRow(['Yes', 'No', 'Not yet — but open to suggestions']),
        answerLine('Tagline / slogan (if applicable)'),

        divider(),

        // ── SECTION 8: COMPETITORS ──
        heading('SECTION 8 — COMPETITORS & MARKET POSITIONING'),
        note('We need to know who you\'re up against so we can design a brand that stands out from the crowd.'),
        subLabel('List your top 5 competitors (business name + website if known):'),
        answerLine('Competitor 1'),
        answerLine('Competitor 2'),
        answerLine('Competitor 3'),
        answerLine('Competitor 4'),
        answerLine('Competitor 5'),
        subLabel('How do you want to be positioned relative to competitors?'),
        checkRow(['Premium / high-end (more expensive, more exclusive)', 'Mid-market (quality at a fair price)', 'Budget / accessible (best value)']),
        checkRow(['Specialist / niche expert', 'Broadest range / most variety', 'Most personal / best service']),
        subLabel('What is your single biggest competitive advantage?'),
        answerLine(''),
        subLabel('What do competitors do better than you currently?'),
        answerLine(''),

        divider(),

        // ── SECTION 9: USAGE & APPLICATIONS ──
        heading('SECTION 9 — LOGO USAGE & APPLICATIONS'),
        note('Knowing where the logo will be used ensures it is designed to look great in all contexts.'),
        subLabel('Where will the logo be used? (tick all that apply)'),
        checkRow(['Website / web applications', 'Business cards', 'Letterhead / documents', 'Email signature']),
        checkRow(['Social media profiles (Facebook, Instagram, LinkedIn)', 'Social media posts', 'Vehicle signage / car wrap']),
        checkRow(['Shopfront / window / outdoor signage', 'Uniform / workwear / embroidery', 'Merchandise / promotional items']),
        checkRow(['Product packaging / labels', 'Printed brochures / flyers', 'Exhibition / trade show displays']),
        checkRow(['Invoice / quote templates', 'Presentations / pitch decks', 'Video / YouTube channel art']),
        subLabel('Will the logo be used on dark backgrounds?'),
        checkRow(['Yes — need a white/light version for dark backgrounds', 'No — light background only', 'Both — need multiple versions']),
        subLabel('Will the logo need to be embroidered or screen-printed?'),
        checkRow(['Yes — keep it simple (fewer colours, no gradients)', 'No', 'Not sure']),
        subLabel('Smallest size the logo must be legible at (e.g. favicon 16x16px, business card, app icon):'),
        answerLine(''),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 10: EXISTING ASSETS ──
        heading('SECTION 10 — EXISTING ASSETS & FILES'),
        subLabel('Do you have an existing logo?'),
        checkRow(['Yes — will provide original file (AI, EPS, SVG preferred)', 'Yes — only have JPG/PNG (low quality)', 'No existing logo']),
        answerLine('Logo file format available'),
        subLabel('Do you have existing brand materials we should reference or align with?'),
        checkRow(['Brand guidelines document', 'Printed materials (brochures, business cards)', 'Website with existing styles']),
        checkRow(['Social media with established colours / look', 'No existing materials']),
        subLabel('Do you have photos or imagery you want incorporated?'),
        checkRow(['Yes — will provide high-res photos', 'No — use illustration / icons only', 'Not applicable']),
        subLabel('File formats required for delivery (tick all you need):'),
        checkRow(['PNG (transparent background — for web & digital)', 'SVG (vector — scalable for any size)', 'PDF (vector — for print)']),
        checkRow(['JPG (solid background — for photos/documents)', 'AI or EPS (editable vector for future designers)', 'Favicon (.ico or 512px PNG)']),
        subLabel('Colour modes required:'),
        checkRow(['RGB (digital / screen use)', 'CMYK (professional print use)', 'Pantone / spot colour (specialty printing)']),
        checkRow(['Black & white version (for stamps, fax, single-colour print)']),

        divider(),

        // ── SECTION 11: TIMELINE & BUDGET ──
        heading('SECTION 11 — TIMELINE & BUDGET'),
        answerLine('Desired completion date'),
        subLabel('Is this deadline hard or flexible?'),
        checkRow(['Hard — must be done by that date (e.g. launch event, trade show)', 'Preferred but flexible', 'No deadline — take the time to get it right']),
        answerLine('Reason for deadline (if applicable)'),
        subLabel('Budget range:'),
        checkRow(['$299 — logo + colour palette + all file formats', '$299–$500 — logo + brand guidelines + social media kit']),
        checkRow(['$500–$1,000 — full brand identity (logo, guidelines, business cards, letterhead, templates)', 'Custom quote required — describe scope below']),
        answerLine('Additional scope or budget notes'),
        subLabel('How did you hear about WeWebU?'),
        checkRow(['Google Search', 'Google Maps', 'Instagram', 'Facebook', 'Referred by someone', 'Other']),
        subLabel('Anything else we should know about your brand project?'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── DECLARATION ──
        heading('DECLARATION & SIGNATURE'),
        new Paragraph({
          children: [new TextRun({ text: 'I confirm that the information provided is accurate and complete. I understand that WeWebU will use this information solely to design my logo and brand identity. I confirm I have the right to use any materials (names, images, concepts) I have provided. I agree to WeWebU\'s Terms of Service and Privacy Policy at www.wewebu.com.au.', size: 18, color: DARK, font: 'Calibri' })],
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
  saveAs(blob, 'WeWebU-LogoBranding-Intake-Form.docx')
}
