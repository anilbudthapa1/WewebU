import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const UPDATED = 'Last updated: 27 May 2026'
const COMPANY  = 'WeWebU'
const ADDRESS  = '5 Eve Ct, Springvale VIC 3171, Australia'
const EMAIL    = 'contact@wewebu.com.au'
const PHONE    = '0421 688 186'
const WEBSITE  = 'www.wewebu.com.au'
const ABN      = '' // Add ABN when available

// ── Policy Content ───────────────────────────────────
const policies = {
  privacy: {
    title: 'Privacy Policy',
    content: (
      <>
        <p className="modal__updated">{UPDATED}</p>
        <p>
          {COMPANY} ("<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>") is committed to
          protecting your personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the
          13 <strong>Australian Privacy Principles (APPs)</strong>. This policy explains how we collect, use,
          disclose, and safeguard your personal information.
        </p>

        <h2>1. Who We Are</h2>
        <p>
          {COMPANY} is an Australian digital agency providing website design, web application development, and
          Google Business promotion services. We are based at {ADDRESS}.<br />
          Contact: <a href={`mailto:${EMAIL}`} style={{color:'var(--primary)'}}>{EMAIL}</a> · {PHONE}
        </p>

        <h2>2. What Personal Information We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        <ul>
          <li>Name, email address, phone number, and business name (from contact forms and enquiries)</li>
          <li>Billing and payment information (processed securely through third-party payment providers)</li>
          <li>Project-related details you share with us</li>
          <li>Website usage data (via cookies, analytics tools — see Section 7)</li>
          <li>Communications you send us (emails, messages)</li>
        </ul>
        <p>We only collect personal information that is necessary for our business functions. We do not collect sensitive information (e.g. health, racial, or biometric data) unless specifically required and consented to.</p>

        <h2>3. How We Collect Your Information</h2>
        <ul>
          <li>Directly from you via our contact forms, email, phone, or in-person meetings</li>
          <li>Automatically when you visit our website (IP address, browser type, pages visited)</li>
          <li>From publicly available sources (e.g. Google Business profiles you manage)</li>
        </ul>

        <h2>4. Why We Collect and Use Your Information</h2>
        <p>We use your personal information to:</p>
        <ul>
          <li>Respond to your enquiries and provide quotes</li>
          <li>Deliver the services you have engaged us for</li>
          <li>Process invoices and payments</li>
          <li>Improve our website and services</li>
          <li>Send service updates and, with your consent, marketing communications</li>
          <li>Comply with our legal obligations under Australian law</li>
        </ul>

        <h2>5. Disclosure of Your Information</h2>
        <p>We do not sell your personal information. We may share it with:</p>
        <ul>
          <li><strong>Service providers</strong>: hosting providers, payment processors, analytics tools (bound by confidentiality obligations)</li>
          <li><strong>Professional advisers</strong>: accountants, lawyers, where necessary</li>
          <li><strong>Authorities</strong>: if required by law, court order, or to protect safety</li>
        </ul>
        <p>If we disclose your information to overseas recipients (e.g. cloud services hosted outside Australia), we take reasonable steps to ensure they comply with privacy standards comparable to the APPs.</p>

        <h2>6. Data Security</h2>
        <p>
          We take reasonable steps to protect your personal information from misuse, interference, loss,
          and unauthorised access using physical, electronic, and procedural safeguards. Our website uses
          HTTPS/SSL encryption. However, no internet transmission is 100% secure.
        </p>

        <h2>7. Cookies & Analytics</h2>
        <p>
          Our website may use cookies and analytics tools (such as Google Analytics) to understand how
          visitors use our site. You can disable cookies in your browser settings; however, some features
          may not function properly. We do not use cookies to track you across other websites for advertising.
        </p>

        <h2>8. Access and Correction</h2>
        <p>
          Under APP 12 and 13, you have the right to request access to, and correction of, your personal
          information held by us. To make a request, contact us at{' '}
          <a href={`mailto:${EMAIL}`} style={{color:'var(--primary)'}}>{EMAIL}</a>. We will respond within
          30 days. We may charge a reasonable fee for access requests.
        </p>

        <h2>9. Complaints</h2>
        <p>
          If you believe we have breached the APPs, please contact us first at{' '}
          <a href={`mailto:${EMAIL}`} style={{color:'var(--primary)'}}>{EMAIL}</a>. If you are not satisfied
          with our response, you may lodge a complaint with the{' '}
          <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{' '}
          <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={{color:'var(--primary)'}}>www.oaic.gov.au</a>.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with the updated date.
          Continued use of our services after changes constitutes your acceptance of the updated policy.
        </p>
      </>
    ),
  },

  refund: {
    title: 'Refund & Cancellation Policy',
    content: (
      <>
        <p className="modal__updated">{UPDATED}</p>
        <p>
          {COMPANY} operates in accordance with the <strong>Australian Consumer Law (ACL)</strong>, Schedule 2 of
          the <em>Competition and Consumer Act 2010 (Cth)</em>. Your statutory rights as a consumer cannot be
          excluded, restricted, or modified by this policy.
        </p>

        <h2>1. Your Statutory Rights Under Australian Consumer Law</h2>
        <p>Our services come with consumer guarantees that cannot be excluded under the ACL. You are entitled to a remedy if:</p>
        <ul>
          <li>A service is not provided with <strong>due care and skill</strong></li>
          <li>A service is not <strong>fit for the purpose</strong> you communicated to us</li>
          <li>A service is not <strong>completed within a reasonable time</strong> (where no time was agreed)</li>
        </ul>
        <p>For major failures, you are entitled to a full refund or repeat performance. For minor failures, we may choose to re-perform the service or provide compensation for the difference in value.</p>

        <h2>2. Project Deposit Policy</h2>
        <ul>
          <li>A <strong>50% deposit</strong> is required to commence any project. This deposit is non-refundable once work has commenced, as it covers our time, planning, and initial resources allocated.</li>
          <li>The deposit may be refunded in full if we have not yet commenced work and you cancel within <strong>48 hours</strong> of payment.</li>
        </ul>

        <h2>3. Milestone-Based Projects</h2>
        <p>For larger projects structured around milestones:</p>
        <ul>
          <li>Each milestone payment covers the work completed in that phase</li>
          <li>Completed and approved milestone work is non-refundable</li>
          <li>If you cancel mid-project, you are liable for work completed up to the cancellation date</li>
          <li>Any unused funds paid in advance for future milestones will be refunded within 14 business days</li>
        </ul>

        <h2>4. Monthly Services (SEO, Google Business, Maintenance)</h2>
        <ul>
          <li>Monthly services may be cancelled with <strong>30 days written notice</strong> to {EMAIL}</li>
          <li>The current month's fee is non-refundable after work for that month has commenced</li>
          <li>No refunds are provided for partial months unless we are in breach of our obligations</li>
        </ul>

        <h2>5. Requesting a Refund</h2>
        <p>To request a refund or raise a dispute, please:</p>
        <ul>
          <li>Email <a href={`mailto:${EMAIL}`} style={{color:'var(--primary)'}}>{EMAIL}</a> with your project details and reason for the request</li>
          <li>Call us on {PHONE} during business hours (Mon–Fri, 9am–5pm AEST)</li>
          <li>We will acknowledge your request within <strong>2 business days</strong> and aim to resolve it within <strong>10 business days</strong></li>
        </ul>

        <h2>6. Chargebacks</h2>
        <p>
          We encourage clients to contact us before initiating a chargeback. Unauthorized chargebacks may result
          in suspension of services and recovery of funds through appropriate legal channels. This does not affect
          your rights under the ACL.
        </p>

        <h2>7. Disputes</h2>
        <p>
          If a dispute cannot be resolved directly, parties agree to attempt mediation before pursuing legal action.
          Australian Consumer Law complaints can also be lodged with the{' '}
          <strong>Australian Competition &amp; Consumer Commission (ACCC)</strong> at{' '}
          <a href="https://www.accc.gov.au" target="_blank" rel="noopener noreferrer" style={{color:'var(--primary)'}}>www.accc.gov.au</a>{' '}
          or Consumer Affairs Victoria at{' '}
          <a href="https://www.consumer.vic.gov.au" target="_blank" rel="noopener noreferrer" style={{color:'var(--primary)'}}>www.consumer.vic.gov.au</a>.
        </p>
      </>
    ),
  },

  terms: {
    title: 'Terms of Service',
    content: (
      <>
        <p className="modal__updated">{UPDATED}</p>
        <p>
          These Terms of Service ("<strong>Terms</strong>") govern your use of {COMPANY}'s services and website at{' '}
          <a href={`https://${WEBSITE}`} style={{color:'var(--primary)'}}>{WEBSITE}</a>. By engaging our services
          or using our website, you agree to these Terms.
        </p>

        <h2>1. Services</h2>
        <p>
          {COMPANY} provides website design and development, web application development, and Google Business
          promotion services. All services are subject to a separate written quote or agreement that, together
          with these Terms, forms the entire agreement between you and {COMPANY}.
        </p>

        <h2>2. Client Responsibilities</h2>
        <ul>
          <li>Provide timely feedback, content, and approvals as reasonably requested</li>
          <li>Ensure all content you provide does not infringe third-party intellectual property rights</li>
          <li>Ensure all content complies with Australian law (including the Spam Act 2003 and Privacy Act 1988)</li>
          <li>Pay invoices by the due date stated on each invoice</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <ul>
          <li><strong>Your content</strong>: You retain ownership of all content, logos, and materials you provide to us</li>
          <li><strong>Deliverables</strong>: On full payment, you own the final deliverables created specifically for you</li>
          <li><strong>Our tools &amp; frameworks</strong>: We retain ownership of proprietary tools, code libraries, and methodologies we use; we grant you a licence to use them as part of your deliverables</li>
          <li>We reserve the right to display completed work in our portfolio unless you request otherwise in writing</li>
        </ul>

        <h2>4. Payment Terms</h2>
        <ul>
          <li>Invoices are due within <strong>14 days</strong> of issue unless otherwise agreed</li>
          <li>Late payments attract interest at <strong>2% per month</strong> on the outstanding balance</li>
          <li>We reserve the right to suspend work if payment is more than 14 days overdue</li>
          <li>All prices are in <strong>Australian Dollars (AUD)</strong> and are GST-inclusive where applicable</li>
        </ul>

        <h2>5. GST</h2>
        <p>
          {COMPANY} is (or will be upon registration) registered for GST in Australia. All prices include GST
          where applicable under the <em>A New Tax System (Goods and Services Tax) Act 1999 (Cth)</em>.
          Tax invoices will be provided on request.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by Australian law, {COMPANY}'s liability for any claim arising from
          our services is limited to the amount paid for the specific service giving rise to the claim in the
          3 months preceding the claim. We are not liable for indirect, consequential, or special damages.
          Nothing in these Terms excludes consumer guarantees under the ACL.
        </p>

        <h2>7. Warranty</h2>
        <p>
          We warrant that services will be provided with due care and skill as required by the ACL. We provide
          a <strong>30-day bug-fix warranty</strong> on all websites and applications after launch for defects
          caused by our code (excluding changes made by you or third parties after handover).
        </p>

        <h2>8. Confidentiality</h2>
        <p>
          Both parties agree to keep confidential any proprietary or sensitive information shared during the
          engagement and not to disclose it to third parties without written consent.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Victoria, Australia. Any disputes are subject to the
          exclusive jurisdiction of the courts of Victoria.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about these Terms? Contact us at{' '}
          <a href={`mailto:${EMAIL}`} style={{color:'var(--primary)'}}>{EMAIL}</a> or {PHONE}.
        </p>
      </>
    ),
  },

  faq: {
    title: 'Frequently Asked Questions',
    content: (
      <>
        <p className="modal__updated">Helping Australian businesses grow online.</p>

        {[
          {
            q: 'How much does a website cost?',
            a: 'Website costs vary depending on complexity. A professional 5-page business website typically starts from $1,500–$3,500 AUD. E-commerce stores and custom web apps are priced on scope. We always provide a free, detailed quote before any work begins — no hidden fees.',
          },
          {
            q: 'How long does it take to build a website?',
            a: 'A standard business website typically takes 2–4 weeks from approval to launch. Complex projects with custom features may take 6–12 weeks. We provide a clear timeline in every proposal.',
          },
          {
            q: 'Do you work with businesses outside Victoria?',
            a: 'Absolutely. We work with businesses Australia-wide — Sydney, Melbourne, Brisbane, Perth, Adelaide, and everywhere in between. All communication and project management is handled remotely via video calls, email, and our project tools.',
          },
          {
            q: 'Will my website be mobile-friendly?',
            a: 'Yes — every website we build is fully responsive and tested on mobile, tablet, and desktop. Mobile-first design is our standard, not an add-on.',
          },
          {
            q: 'What is Google Business Promotion and how does it help?',
            a: 'Google Business Promotion (Google My Business optimisation) helps your business appear in local Google searches and on Google Maps. We set up and optimise your profile, help you gather reviews, and run targeted local campaigns so customers in your area find you first.',
          },
          {
            q: 'Will I be able to update my website myself?',
            a: 'Yes. We build websites with user-friendly content management systems (CMS) and provide training so you can update text, images, and content without technical knowledge. We also offer ongoing maintenance packages if you prefer us to handle it.',
          },
          {
            q: 'Do you offer hosting?',
            a: 'We can recommend and set up reliable Australian-based hosting for your site, or deploy on your existing hosting. Ongoing hosting and maintenance packages are available.',
          },
          {
            q: 'What happens if I\'m not happy with the design?',
            a: 'We include revision rounds in every project and work closely with you throughout the design process. Your satisfaction is guaranteed — we won\'t launch until you\'re happy. If there\'s an issue, our 30-day bug-fix warranty has you covered.',
          },
          {
            q: 'Do you sign NDAs or confidentiality agreements?',
            a: 'Yes. We are happy to sign an NDA before discussing sensitive project details. Contact us to arrange this before your first call.',
          },
          {
            q: 'How do I get started?',
            a: 'Simply fill in the contact form on this page, email us at contact@wewebu.com.au, or call 0421 688 186. We\'ll schedule a free 30-minute discovery call to understand your goals and provide a no-obligation quote.',
          },
        ].map(({ q, a }, i) => (
          <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h2>{q}</h2>
            <p>{a}</p>
          </div>
        ))}
      </>
    ),
  },
}

// ── Modal Component ──────────────────────────────────
export default function PolicyModal({ policyKey, onClose }) {
  const policy = policies[policyKey]

  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!policy) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={e => { if (e.target === e.currentTarget) onClose() }}
      >
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="modal__header">
            <h2 className="modal__title">{policy.title}</h2>
            <button className="modal__close" onClick={onClose} aria-label="Close">
              <X size={16} />
            </button>
          </div>
          <div className="modal__body">
            {policy.content}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export { policies }
