import {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, ShadingType, PageBreak, Footer, Header,
  PageNumber, convertInchesToTwip,
} from 'docx'
import { saveAs } from 'file-saver'

const PRIMARY  = 'D97706'
const DARK     = '0F172A'
const MUTED    = '64748B'
const LIGHT_BG = 'FFFBEB'
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

export async function generateWebAppIntakeForm() {
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
                new TextRun({ text: '  |  Web Application Development Intake Form', size: 20, color: MUTED, font: 'Calibri' }),
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
          children: [new TextRun({ text: 'Web Application Development', size: 28, color: MUTED, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'www.wewebu.com.au', size: 22, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'WEB APPLICATION PROJECT', bold: true, size: 44, color: DARK, font: 'Calibri' })],
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
          children: [new TextRun({ text: 'This document contains confidential business and technical information shared between the client and WeWebU for the purpose of web application development. All information will be kept strictly confidential and used solely to scope and deliver your project.', size: 18, color: MUTED, font: 'Calibri', italics: true })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 300, after: 300 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Web Application Development — from $5,000 AUD', bold: true, size: 24, color: PRIMARY, font: 'Calibri' })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Date Submitted:  ___________________', size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'WeWebU Reference:  WW-APP-' + Date.now().toString().slice(-6), size: 20, font: 'Calibri', color: MUTED })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 800 },
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 1: BUSINESS INFO ──
        heading('SECTION 1 — BUSINESS INFORMATION'),
        note('This helps us understand your organisation and tailor the solution appropriately.'),
        answerLine('Business / Company Name'),
        answerLine('Trading Name (if different)'),
        answerLine('ABN / ACN'),
        answerLine('Industry / Sector'),
        answerLine('Business Address'),
        answerLine('Suburb / State / Postcode'),
        answerLine('Year Established'),
        subLabel('Brief description of your business and what it does (2–3 sentences):'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── SECTION 2: CONTACT DETAILS ──
        heading('SECTION 2 — PRIMARY CONTACT DETAILS'),
        answerLine('Full Name'),
        answerLine('Job Title / Role'),
        answerLine('Mobile Number'),
        answerLine('Email Address'),
        answerLine('Alternative Email'),
        subLabel('Technical contact (if different from above):'),
        answerLine('Full Name'),
        answerLine('Role'),
        answerLine('Email'),
        subLabel('Preferred contact method:'),
        checkRow(['Phone Call', 'SMS', 'Email', 'WhatsApp', 'Video call (Zoom/Teams)']),
        answerLine('Best time to contact'),

        divider(),

        // ── SECTION 3: PROJECT OVERVIEW ──
        heading('SECTION 3 — PROJECT OVERVIEW & GOALS'),
        note('Describe your idea in plain language — no technical jargon needed. We will translate it into a solution.'),
        subLabel('What type of application do you need? (tick all that apply)'),
        checkRow(['SaaS platform / subscription tool', 'Client / customer portal', 'Internal business dashboard']),
        checkRow(['Booking / scheduling system', 'Job or project management tool', 'Inventory / warehouse system']),
        checkRow(['CRM (customer relationship management)', 'Reporting / analytics platform', 'Marketplace / directory']),
        checkRow(['E-learning / LMS platform', 'API / backend service only', 'Other — describe below']),
        subLabel('Describe your application in detail — what problem does it solve and who uses it?'),
        answerLine(''), answerLine(''), answerLine(''), answerLine(''),
        subLabel('Primary goal of the application:'),
        checkRow(['Automate a manual process', 'Replace spreadsheets / paper-based systems', 'Launch a new product / service']),
        checkRow(['Improve team efficiency', 'Serve customers directly', 'Collect and analyse data']),
        answerLine('What does success look like for this project?'),
        answerLine(''), answerLine(''),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 4: USERS & ROLES ──
        heading('SECTION 4 — USERS & ACCESS ROLES'),
        note('Defining who uses the app and what they can do is essential for scoping authentication and permissions.'),
        subLabel('Who will use this application? (tick all that apply)'),
        checkRow(['Your internal staff / team', 'Paying customers / clients', 'Suppliers / vendors', 'Admin / management only']),
        subLabel('Estimated number of users at launch:'),
        checkRow(['1–10 users', '11–50 users', '51–200 users', '200+ users']),
        answerLine('Expected user growth over the next 12 months'),
        subLabel('User role types needed (describe each role and what they can access):'),
        answerLine('Role 1 (e.g. Admin)  |  Permissions'),
        answerLine('Role 2 (e.g. Staff)  |  Permissions'),
        answerLine('Role 3 (e.g. Customer)  |  Permissions'),
        answerLine('Role 4 (e.g. Viewer)  |  Permissions'),
        subLabel('How will users log in?'),
        checkRow(['Email + password', 'Google / Microsoft SSO', 'Magic link (email)', 'Two-factor authentication (2FA)']),
        subLabel('Do you need a public-facing area AND a logged-in private area?'),
        checkRow(['Yes — both public and private sections', 'No — fully private (login required)', 'No — fully public (no login)']),

        divider(),

        // ── SECTION 5: FEATURES ──
        heading('SECTION 5 — CORE FEATURES & FUNCTIONALITY'),
        note('List every feature that the application must have. Be specific — more detail leads to a more accurate quote.'),
        subLabel('Core features (tick all that apply):'),
        checkRow(['User registration & login', 'User profile management', 'Dashboard with charts / stats']),
        checkRow(['Data entry forms', 'File / document upload', 'PDF generation / export']),
        checkRow(['Search & filtering', 'Notifications (in-app)', 'Email notifications (automated)']),
        checkRow(['SMS notifications', 'Approval / workflow system', 'Calendar / scheduling']),
        checkRow(['Messaging / chat between users', 'Audit log / activity history', 'Drag-and-drop interface']),
        checkRow(['Map / geolocation features', 'Real-time updates (live data)', 'Reporting & data export (CSV/Excel)']),
        checkRow(['Payment / billing (invoices, subscriptions)', 'Multi-language support', 'Dark / light mode toggle']),
        subLabel('Describe each core feature in detail (add more rows as needed):'),
        answerLine('Feature 1'),
        answerLine('Feature 2'),
        answerLine('Feature 3'),
        answerLine('Feature 4'),
        answerLine('Feature 5'),
        answerLine('Feature 6'),
        subLabel('Are there any features that are nice-to-have but not essential at launch?'),
        answerLine(''), answerLine(''),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 6: DATA & DATABASE ──
        heading('SECTION 6 — DATA & DATABASE REQUIREMENTS'),
        note('Understanding your data helps us design the right database structure from the start.'),
        subLabel('What data will your application store? (tick all that apply)'),
        checkRow(['User / customer records', 'Orders / transactions', 'Products / inventory', 'Documents / files']),
        checkRow(['Appointments / bookings', 'Financial / accounting data', 'Communications / messages', 'Reports / analytics']),
        subLabel('Do you have existing data to migrate into the new system?'),
        checkRow(['Yes — from a spreadsheet (Excel/CSV)', 'Yes — from another database / software', 'No — starting fresh']),
        answerLine('If yes — describe the existing data and format'),
        answerLine(''),
        subLabel('Estimated data volume at launch:'),
        checkRow(['Small (hundreds of records)', 'Medium (thousands of records)', 'Large (100,000+ records)']),
        subLabel('Do you need data backups and disaster recovery?'),
        checkRow(['Yes — daily backups required', 'Yes — real-time replication', 'Standard backups are fine', 'Not sure']),
        subLabel('Data sensitivity:'),
        checkRow(['Contains personal data (Privacy Act compliance required)', 'Contains financial data', 'General business data only']),
        answerLine('Any specific data retention or deletion requirements?'),

        divider(),

        // ── SECTION 7: INTEGRATIONS ──
        heading('SECTION 7 — INTEGRATIONS & THIRD-PARTY SERVICES'),
        note('List any external systems, APIs, or tools the app must connect with.'),
        subLabel('Accounting & finance:'),
        checkRow(['Xero', 'MYOB', 'QuickBooks', 'Stripe (billing)', 'None']),
        subLabel('Communication & notifications:'),
        checkRow(['SendGrid / Mailgun (email)', 'Twilio (SMS)', 'Slack', 'Microsoft Teams']),
        subLabel('Productivity & collaboration:'),
        checkRow(['Google Workspace (Docs, Drive, Calendar)', 'Microsoft 365', 'Zapier / Make (automation)', 'None']),
        subLabel('Other integrations needed:'),
        answerLine('Integration 1  |  Purpose'),
        answerLine('Integration 2  |  Purpose'),
        answerLine('Integration 3  |  Purpose'),
        subLabel('Do you need to connect to any existing internal systems or APIs?'),
        checkRow(['Yes', 'No']),
        answerLine('If yes — describe the system and any available documentation'),
        answerLine(''),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 8: DESIGN & UX ──
        heading('SECTION 8 — DESIGN & USER EXPERIENCE'),
        subLabel('Do you have an existing brand?'),
        checkRow(['Yes — logo + full brand guidelines', 'Yes — logo and colours only', 'No — need design from scratch']),
        answerLine('Logo file format available (e.g. PNG, SVG, AI)'),
        subLabel('Brand colours (provide hex codes if available):'),
        answerLine('Primary Colour'), answerLine('Secondary Colour'), answerLine('Accent Colour'),
        subLabel('Preferred UI style:'),
        checkRow(['Clean / minimal (like Notion, Linear)', 'Bold / corporate (like Salesforce)', 'Friendly / modern (like Canva)']),
        checkRow(['Dark mode first', 'Light mode first', 'Both dark and light mode']),
        subLabel('Do you have wireframes, mockups, or Figma designs?'),
        checkRow(['Yes — fully designed Figma files', 'Yes — rough sketches / wireframes', 'No — need full UI/UX design']),
        subLabel('Applications you like the look/feel of (provide URLs and what you like):'),
        answerLine('URL / App 1  |  What I like'),
        answerLine('URL / App 2  |  What I like'),
        subLabel('Device requirements:'),
        checkRow(['Desktop browser only', 'Mobile responsive web app', 'iOS mobile app (native)', 'Android mobile app (native)']),
        answerLine('Any accessibility requirements (e.g. WCAG compliance)?'),

        divider(),

        // ── SECTION 9: TECHNICAL ──
        heading('SECTION 9 — TECHNICAL REQUIREMENTS'),
        note('If you are not technical, skip anything you are unsure about — we will advise on the call.'),
        subLabel('Do you have a technology preference?'),
        checkRow(['React + Node.js (our default stack)', 'Specific framework required — see below', 'No preference — use what is best']),
        answerLine('If specific tech required — specify stack / language'),
        subLabel('Do you need an API for mobile apps or third parties to connect to?'),
        checkRow(['Yes — REST API', 'Yes — GraphQL API', 'No', 'Not sure']),
        subLabel('Performance requirements:'),
        checkRow(['Standard (most business tools)', 'High performance (real-time, 1000+ concurrent users)', 'Enterprise grade']),
        subLabel('Do you need offline functionality (works without internet)?'),
        checkRow(['Yes', 'No', 'Partially — some offline support']),
        subLabel('Do you have existing code or a codebase to build on?'),
        checkRow(['Yes — we have existing code (will share repo)', 'No — greenfield project']),
        answerLine('If yes — programming language / framework of existing code'),

        divider(),

        new Paragraph({ children: [new PageBreak()] }),

        // ── SECTION 10: INFRASTRUCTURE ──
        heading('SECTION 10 — INFRASTRUCTURE, HOSTING & SECURITY'),
        subLabel('Hosting preference:'),
        checkRow(['AWS (Amazon Web Services)', 'Google Cloud Platform', 'Microsoft Azure', 'DigitalOcean / Linode']),
        checkRow(['Vercel / Railway (simpler hosting)', 'On-premise / self-hosted', 'No preference — you decide']),
        subLabel('Do you need multiple environments?'),
        checkRow(['Production only', 'Staging + Production', 'Dev + Staging + Production']),
        subLabel('CI/CD (automated deployments):'),
        checkRow(['Yes — auto-deploy on code push', 'Manual deployments are fine', 'Not sure']),
        subLabel('Security requirements:'),
        checkRow(['Standard web security (HTTPS, input sanitisation)', 'Data encryption at rest', 'Penetration testing required']),
        checkRow(['SOC 2 / ISO 27001 compliance required', 'Australian data sovereignty (data must stay in AU)']),
        subLabel('Domain name:'),
        checkRow(['I already own a domain', 'I need a domain registered', 'Not sure']),
        answerLine('Preferred / existing domain name'),
        subLabel('SSL certificate:'),
        checkRow(['Set up by WeWebU', 'Already managed by us', 'Part of hosting']),

        divider(),

        // ── SECTION 11: TIMELINE & BUDGET ──
        heading('SECTION 11 — TIMELINE & BUDGET'),
        answerLine('Desired launch date'),
        subLabel('Is this a hard deadline?'),
        checkRow(['Yes — must launch by that date', 'Preferred but flexible', 'No deadline']),
        answerLine('Reason for deadline (if applicable, e.g. product launch, event, funding round)'),
        subLabel('Do you need a phased delivery (MVP first, then full product)?'),
        checkRow(['Yes — MVP first, then iterate', 'No — full product from day one', 'Not sure — advise me']),
        answerLine('Describe what must be in the MVP (minimum viable product)'),
        answerLine(''),
        subLabel('Approved budget range:'),
        checkRow(['$5,000 – $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000+']),
        answerLine('Is there an ongoing maintenance / hosting budget per month? ($)'),
        subLabel('How did you hear about WeWebU?'),
        checkRow(['Google Search', 'Google Maps', 'Instagram', 'Referred by someone', 'Other']),
        subLabel('Anything else we should know about your project?'),
        answerLine(''), answerLine(''), answerLine(''),

        divider(),

        // ── DECLARATION ──
        heading('DECLARATION & SIGNATURE'),
        new Paragraph({
          children: [new TextRun({ text: 'I confirm that the information provided is accurate and complete to the best of my knowledge. I understand that WeWebU will use this information solely to scope and deliver my web application project. I agree to WeWebU\'s Terms of Service and Privacy Policy at www.wewebu.com.au.', size: 18, color: DARK, font: 'Calibri' })],
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
  saveAs(blob, 'WeWebU-WebApp-Intake-Form.docx')
}
