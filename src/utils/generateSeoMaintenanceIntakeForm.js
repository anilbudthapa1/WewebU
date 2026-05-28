import {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, ShadingType, PageBreak, Footer, Header,
  PageNumber, convertInchesToTwip,
} from 'docx'
import { saveAs } from 'file-saver'

const PRIMARY  = '4F46E5'
const DARK     = '0F172A'
const MUTED    = '64748B'
const LIGHT_BG = 'F0F4FF'
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

export async function generateSeoMaintenanceIntakeForm() {
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
                new TextRun({ text: '  |  Monthly SEO & Maintenance Intake Form', size: 20, color: MUTED, font: 'Calibri' }),
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
          children: [new TextRun({ text: 'SEO & Digital Marketing', size: 28, color: MUTED, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'www.wewebu.com.au', size: 22, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'MONTHLY SEO & MAINTENANCE', bold: true, size: 44, color: DARK, font: 'Calibri' })],
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
          children: [new TextRun({ text: 'This document contains confidential business and website information shared between the client and WeWebU for the purpose of ongoing SEO and website maintenance services. All information will be kept strictly confidential.', size: 18, color: MUTED, font: 'Calibri', italics: true })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 300, after: 300 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Monthly SEO & Maintenance Plan — $499/month · No lock-in contract', bold: true, size: 24, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Date Submitted:  ___________________', size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'WeWebU Reference:  WW-SEO-' + Date.now().toString().slice(-6), size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 800 },
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 1: BUSINESS INFO ──
        heading('SECTION 1 — BUSINESS INFORMATION'),
        note('Accurate business details ensure your SEO strategy targets the right location and audience.'),
        answerLine('Business / Company Name'),
        answerLine('Trading Name (if different)'),
        answerLine('ABN / ACN'),
        answerLine('Industry / Sector'),
        answerLine('Business Address'),
        answerLine('Suburb / State / Postcode'),
        answerLine('Year Established'),
        subLabel('Business type:'),
        checkRow(['Brick-and-mortar (customers visit your location)', 'Service-area business (you go to customers)', 'Online only', 'Both physical + online']),
        subLabel('Describe your business and what makes you different from competitors (3–4 sentences):'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── SECTION 2: CONTACT DETAILS ──
        heading('SECTION 2 — PRIMARY CONTACT DETAILS'),
        answerLine('Full Name'),
        answerLine('Job Title / Role'),
        answerLine('Mobile Number'),
        answerLine('Email Address (for monthly reports)'),
        answerLine('Alternative Email (CC for reports)'),
        subLabel('Preferred contact method:'),
        checkRow(['Phone Call', 'SMS', 'Email', 'WhatsApp']),
        answerLine('Best time to contact'),
        subLabel('Who approves content changes and SEO strategy?'),
        checkRow(['Me (the contact above)', 'Business owner / director — name below', 'Marketing manager — name below']),
        answerLine('Approver name and contact (if different)'),

        divider(),

        // ── SECTION 3: WEBSITE DETAILS ──
        heading('SECTION 3 — WEBSITE DETAILS & ACCESS'),
        note('We need access to your website and analytics to begin work. All credentials are stored securely.'),
        answerLine('Website URL'),
        subLabel('Website platform:'),
        checkRow(['WordPress', 'Shopify', 'Wix', 'Squarespace', 'Webflow', 'Custom / other']),
        answerLine('If other — platform name'),
        subLabel('Do you have Google Analytics (GA4) installed?'),
        checkRow(['Yes — fully set up', 'Yes — but not sure if correct', 'No — please set it up', 'Not sure']),
        answerLine('GA4 Property ID (format: G-XXXXXXXXXX, if known)'),
        subLabel('Do you have Google Search Console set up?'),
        checkRow(['Yes — verified and active', 'No — please set it up', 'Not sure']),
        answerLine('Search Console email / account (if known)'),
        subLabel('Website hosting provider:'),
        answerLine('Hosting provider name'),
        answerLine('Hosting account email (for coordination)'),
        subLabel('Do you currently have website backups running?'),
        checkRow(['Yes — automatic backups', 'Yes — manual backups only', 'No — no backups', 'Not sure']),
        subLabel('CMS / admin access for content updates:'),
        checkRow(['We will provide WeWebU with admin login', 'We prefer to approve all changes before they go live', 'WeWebU can publish changes directly']),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 4: CURRENT SEO STATUS ──
        heading('SECTION 4 — CURRENT SEO STATUS'),
        note('Honest answers here let us build a realistic strategy. There is no wrong answer.'),
        subLabel('How would you describe your current Google ranking?'),
        checkRow(['Top 3 results for main keywords', 'Page 1 (positions 4–10)', 'Page 2 or lower', 'Not ranking at all', 'Never checked']),
        subLabel('Have you done any SEO work before?'),
        checkRow(['Yes — with an agency (name below)', 'Yes — done it ourselves', 'Yes — used a freelancer', 'No — starting from scratch']),
        answerLine('Previous SEO agency / freelancer name (if applicable)'),
        answerLine('What SEO work was done previously?'),
        subLabel('Have you ever received a Google penalty or manual action?'),
        checkRow(['Yes', 'No', 'Not sure']),
        subLabel('Have you purchased backlinks or used "black-hat" SEO in the past?'),
        checkRow(['Yes', 'No', 'Not sure']),
        subLabel('Does your website currently have:'),
        checkRow(['An XML sitemap', 'A robots.txt file', 'Schema markup', 'Meta titles & descriptions on all pages']),
        checkRow(['Alt text on images', 'HTTPS / SSL certificate', 'Fast page load speed (under 3 seconds)']),
        answerLine('Anything specific about your site\'s current SEO that we should know?'),
        answerLine(''),

        divider(),

        // ── SECTION 5: TARGET KEYWORDS ──
        heading('SECTION 5 — TARGET KEYWORDS & LOCATIONS'),
        note('List the search terms your ideal customers use. Include location if you want local results (e.g. "plumber Dandenong").'),
        subLabel('Primary keywords (the most important search terms — up to 5):'),
        answerLine('Keyword 1'),
        answerLine('Keyword 2'),
        answerLine('Keyword 3'),
        answerLine('Keyword 4'),
        answerLine('Keyword 5'),
        subLabel('Secondary keywords (supporting terms — up to 10):'),
        answerLine(''), answerLine(''), answerLine(''), answerLine(''),
        answerLine(''), answerLine(''), answerLine(''), answerLine(''),
        subLabel('Geographic targeting:'),
        checkRow(['Hyper-local (single suburb / postcode)', 'City-wide (e.g. all of Melbourne)', 'State-wide (e.g. all of Victoria)']),
        checkRow(['National (all of Australia)', 'International']),
        answerLine('Primary target suburb / city'),
        answerLine('Secondary target areas (if applicable)'),
        subLabel('Are there any keywords or search terms you want to AVOID?'),
        answerLine(''),

        divider(),

        // ── SECTION 6: COMPETITORS ──
        heading('SECTION 6 — COMPETITOR ANALYSIS'),
        note('We analyse your top competitors\' SEO strategy to find gaps and opportunities for your site.'),
        subLabel('List your top 5 online competitors (business name + website URL):'),
        answerLine('Competitor 1  |  URL'),
        answerLine('Competitor 2  |  URL'),
        answerLine('Competitor 3  |  URL'),
        answerLine('Competitor 4  |  URL'),
        answerLine('Competitor 5  |  URL'),
        subLabel('Which competitors rank higher than you on Google?'),
        answerLine(''),
        subLabel('What do your competitors do better than you online?'),
        answerLine(''),
        subLabel('What do YOU do better than your competitors?'),
        answerLine(''),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 7: GOOGLE BUSINESS PROFILE ──
        heading('SECTION 7 — GOOGLE BUSINESS PROFILE'),
        note('Google Business management is included in your monthly plan. We need profile access to manage posts and updates.'),
        subLabel('Do you have a Google Business Profile?'),
        checkRow(['Yes — verified and live', 'Yes — unverified', 'No — please set one up', 'Not sure']),
        answerLine('Google Business Profile URL (search your name on Google Maps and paste the URL)'),
        answerLine('Current Google Maps star rating'),
        answerLine('Number of existing Google reviews'),
        subLabel('How often do you currently post on your Google Business Profile?'),
        checkRow(['Weekly', 'Monthly', 'Rarely / never', 'Never knew you could post']),
        subLabel('Do you want WeWebU to:'),
        checkRow(['Write and publish weekly Google Business posts', 'Respond to new Google reviews on your behalf', 'Update business hours and info as needed']),
        checkRow(['Monitor and flag suspicious / fake reviews', 'Set up and manage a review request link']),
        subLabel('Do you have Google Business Profile admin access to share with WeWebU?'),
        checkRow(['Yes — will add WeWebU as manager', 'No — I\'ve lost access (need help recovering)', 'Not sure how to do this']),

        divider(),

        // ── SECTION 8: WEBSITE CONTENT & MAINTENANCE ──
        heading('SECTION 8 — WEBSITE CONTENT & MAINTENANCE'),
        note('Content updates and maintenance tasks are included in your monthly plan — list everything you typically need.'),
        subLabel('How often does your website content need updating?'),
        checkRow(['Weekly (prices, promotions, availability)', 'Monthly (news, team, services)', 'Quarterly (major updates only)', 'Rarely — just security updates']),
        subLabel('Types of content updates you need monthly (tick all that apply):'),
        checkRow(['Price updates', 'Service / product updates', 'Team / staff changes', 'Photo updates']),
        checkRow(['Blog / news articles', 'Testimonials / reviews section', 'Promotions / specials banner', 'Opening hours changes']),
        subLabel('Do you want WeWebU to write blog content for SEO?'),
        checkRow(['Yes — 1 blog post per month', 'Yes — 2 blog posts per month', 'No — I\'ll write content myself', 'Not sure']),
        subLabel('Security & technical maintenance tasks needed (tick all that apply):'),
        checkRow(['WordPress / plugin updates', 'Security monitoring & malware scanning', 'Uptime monitoring (alerts if site goes down)']),
        checkRow(['Broken link checking', 'Page speed optimisation', 'Database cleanup']),
        subLabel('Do you have a staging environment for testing updates before going live?'),
        checkRow(['Yes', 'No — all updates go live directly', 'Not sure']),
        answerLine('Any recurring tasks or content changes not listed above?'),
        answerLine(''),

        divider(),

        // ── SECTION 9: REPORTING & COMMUNICATION ──
        heading('SECTION 9 — REPORTING & COMMUNICATION'),
        subLabel('How would you like to receive monthly reports?'),
        checkRow(['PDF report emailed monthly', 'Live dashboard link (Google Looker Studio)', 'Both PDF + dashboard', 'Brief summary email is fine']),
        subLabel('What metrics matter most to you? (tick your top 3)'),
        checkRow(['Google keyword rankings', 'Website traffic (sessions, users)', 'Google Maps impressions & clicks']),
        checkRow(['Phone calls from Google', 'Contact form submissions', 'Revenue / conversions']),
        subLabel('How often would you like a check-in call with WeWebU?'),
        checkRow(['Monthly (30-min call to review report)', 'Quarterly (deep-dive strategy review)', 'Only when there\'s something to discuss', 'Email updates only']),
        subLabel('How do you prefer to receive urgent notifications? (e.g. site down, penalty detected)'),
        checkRow(['SMS immediately', 'Phone call', 'Email', 'WhatsApp']),
        answerLine('Any specific KPIs or targets we should track?'),
        answerLine(''),

        divider(),

        // ── SECTION 10: SOCIAL MEDIA ──
        heading('SECTION 10 — SOCIAL MEDIA & ONLINE PRESENCE'),
        note('We monitor and align your social media presence with your SEO strategy for consistent brand signals.'),
        answerLine('Facebook Page URL'),
        answerLine('Instagram Profile URL'),
        answerLine('LinkedIn Company Page URL'),
        answerLine('YouTube Channel URL'),
        answerLine('Other platforms (TikTok, Pinterest, etc.)'),
        subLabel('Are you currently active on social media?'),
        checkRow(['Yes — posting regularly', 'Yes — but inconsistently', 'No — inactive accounts', 'No accounts yet']),
        subLabel('Do you want WeWebU to create social media content as part of this plan?'),
        checkRow(['Yes — include social posts in monthly plan', 'No — I manage social media separately', 'Maybe — discuss on onboarding call']),
        subLabel('Are you listed in any online directories? (tick all that apply)'),
        checkRow(['Yellow Pages', 'True Local', 'Yelp', 'Hotfrog', 'StartLocal', 'Industry-specific directories']),
        answerLine('Industry directories (if applicable)'),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 11: GOALS & ONBOARDING ──
        heading('SECTION 11 — GOALS, TIMELINE & ONBOARDING'),
        subLabel('What is your primary goal from this monthly plan? (tick your top 3)'),
        checkRow(['Rank on page 1 for main keywords', 'Appear in Google Maps 3-pack', 'Increase website traffic']),
        checkRow(['Generate more phone enquiries', 'Get more contact form submissions', 'Increase online sales']),
        checkRow(['Build domain authority over time', 'Keep the website secure and running smoothly', 'Outrank a specific competitor']),
        subLabel('What is a realistic monthly lead / traffic target for your business?'),
        answerLine('Monthly visitors goal'),
        answerLine('Monthly enquiries / leads goal'),
        subLabel('Requested start date:'),
        answerLine('Preferred start date'),
        subLabel('How did you hear about WeWebU?'),
        checkRow(['Google Search', 'Google Maps', 'Instagram', 'Facebook', 'Referred by someone', 'Other']),
        subLabel('Have you used a monthly SEO retainer service before?'),
        checkRow(['Yes — what worked:', 'Yes — what didn\'t work:', 'No — this is our first time']),
        answerLine('What worked / didn\'t work (if applicable)'),
        subLabel('Anything else we should know before we start?'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── DECLARATION ──
        heading('DECLARATION & SIGNATURE'),
        new Paragraph({
          children: [new TextRun({ text: 'I confirm that the information provided is accurate and complete. I understand that WeWebU will use this information to deliver monthly SEO and website maintenance services. I acknowledge that SEO results take time (typically 3–6 months for meaningful ranking improvements) and that WeWebU does not guarantee specific ranking positions. I agree to WeWebU\'s Terms of Service at www.wewebu.com.au. I understand this is a month-to-month arrangement with no lock-in contract — I may cancel with 30 days\' written notice.', size: 18, color: DARK, font: 'Calibri' })],
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
  saveAs(blob, 'WeWebU-SEOMaintenance-Intake-Form.docx')
}
