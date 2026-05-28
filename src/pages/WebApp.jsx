import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Check, ShoppingCart, Download, CheckCircle,
  Code2, Users, Database, Cloud, Lock, Zap, BarChart2,
  Smartphone, RefreshCw, Globe, HelpCircle, X, Phone,
} from 'lucide-react'
import { generateWebAppIntakeForm } from '../utils/generateWebAppIntakeForm'

const COLOR = '#f59e0b'
const GRAD  = 'linear-gradient(135deg,#f59e0b,#d97706)'

const FEATURES = [
  { icon: Code2,      title: 'React + Node.js Stack',       desc: 'Built with the same technology used by the world\'s most scalable products — fast, maintainable, and battle-tested.' },
  { icon: Users,      title: 'User Authentication & Roles', desc: 'Secure login, role-based access control, and SSO (Google/Microsoft) — configured from day one.' },
  { icon: Database,   title: 'Custom Database Design',       desc: 'Structured schema designed around your data, whether that\'s PostgreSQL, MongoDB, or a hybrid approach.' },
  { icon: Cloud,      title: 'Cloud Deployment',             desc: 'Deployed to AWS, Google Cloud, or DigitalOcean with automatic backups, uptime monitoring, and scalability.' },
  { icon: BarChart2,  title: 'Admin Dashboard',              desc: 'Full admin panel to manage users, view reports, and control settings — no code required to operate it.' },
  { icon: RefreshCw,  title: 'Third-Party API Integration',  desc: 'Connect to Stripe, Xero, Mailchimp, Google Workspace, Twilio — or any API you already use.' },
  { icon: Smartphone, title: 'Mobile-Responsive Web App',    desc: 'Every screen works perfectly on desktop, tablet, and phone — no separate mobile app needed.' },
  { icon: Lock,       title: 'Security Built In',            desc: 'HTTPS, input validation, SQL injection protection, rate limiting, and encrypted data at rest.' },
  { icon: Zap,        title: 'Real-Time Capabilities',       desc: 'Live dashboards, instant notifications, and collaborative features — powered by WebSockets.' },
  { icon: Globe,      title: 'REST or GraphQL API',          desc: 'A clean API layer so mobile apps, partners, or future features can plug in without rebuilding.' },
]

const INCLUDES = [
  'Free discovery call to scope requirements',
  'Technical architecture document',
  'UI/UX design (wireframes to final screens)',
  'Staging environment for review before go-live',
  'CI/CD pipeline (auto-deploy on push)',
  'User documentation / admin guide',
  '1-hour handover & training session',
  'Source code — you own it completely',
  '30-day post-launch bug fix warranty',
  'Ongoing support & maintenance available',
]

const STEPS = [
  { n: '01', title: 'Download & Fill Form',   desc: 'Tell us about your project, users, features, and budget using the intake form.' },
  { n: '02', title: 'Discovery Call',          desc: 'Free 60-min call to review your requirements, clarify scope, and answer every question.' },
  { n: '03', title: 'Proposal & Kickoff',      desc: 'We send a fixed-price proposal. Once approved, we start designing and building.' },
  { n: '04', title: 'Build & Iterate',         desc: 'Weekly demos at every milestone. You review, give feedback, and we refine until it\'s right.' },
  { n: '05', title: 'Test & Deploy',           desc: 'Thorough QA across all browsers and devices, then we deploy to your cloud environment.' },
  { n: '06', title: 'Handover & Support',      desc: 'Full handover with training, documentation, and 30 days of post-launch warranty support.' },
]

const FAQ = [
  { q: 'What kinds of web apps do you build?',
    a: 'SaaS platforms, internal tools, client portals, booking systems, dashboards, CRMs, marketplaces, inventory systems — if it runs in a browser and has a database behind it, we can build it.' },
  { q: 'How long does it take to build a web app?',
    a: 'A focused MVP typically takes 6–12 weeks. A full-featured product is 3–6 months depending on complexity. We set clear milestones and demo weekly so you\'re never in the dark.' },
  { q: 'Do I own the code?',
    a: 'Yes — completely. On handover you receive the full source code, repository access, and all credentials. We retain no rights.' },
  { q: 'What if my requirements change mid-project?',
    a: 'We build with agile sprints, so changes are expected. Minor adjustments are absorbed. Significant scope changes are quoted separately with your approval before we proceed.' },
  { q: 'Can you build a mobile app too?',
    a: 'Our React Native capability means one codebase can serve web, iOS, and Android. Ask about this during the discovery call and we\'ll include it in the proposal if needed.' },
  { q: 'What does "starting from $5,000" mean?',
    a: 'Simple internal tools or MVPs can be scoped at $5,000. Complex multi-role platforms with integrations, real-time features, and custom design are quoted after the discovery call — with a full breakdown and no hidden fees.' },
]

export default function WebApp() {
  const navigate = useNavigate()
  const [cart, setCart]       = useState(false)
  const [success, setSuccess] = useState(false)
  const [generating, setGen]  = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleDownload = async () => {
    setGen(true)
    await generateWebAppIntakeForm()
    setGen(false)
    setCart(false)
    setSuccess(true)
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>

      {/* Sticky header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--navbar-bg)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.88rem', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Back to WeWebU
          </button>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.2rem', background: 'linear-gradient(135deg,var(--primary),var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>WeWebU</div>
          <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.4rem', background: GRAD }} onClick={() => setCart(true)}>
            <ShoppingCart size={15} /> Get Started — $5,000+
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '5rem 0 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ marginBottom: '1.5rem', color: COLOR, borderColor: 'rgba(245,158,11,0.25)' }}>✦ Web App Development</span>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              Web Application Development
            </h1>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3rem', fontWeight: 800, color: COLOR }}>$5,000</span>
              <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>AUD · starting from · GST inclusive</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Custom web apps built to solve real business problems — SaaS platforms, client portals, dashboards, booking systems, and internal tools. React + Node.js, deployed to the cloud.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, padding: '0.9rem 2.2rem', borderRadius: '100px', background: GRAD, color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
                <ShoppingCart size={18} /> Book Discovery Call — $0 now
              </button>
              <a href="tel:0421688186" className="btn-ghost" style={{ padding: '0.9rem 2.2rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> Call to Discuss
              </a>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '1rem' }}>No payment now · Fixed-price proposal sent after discovery call</p>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0', background: 'var(--card)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {['React + Node.js', 'You Own the Code', 'Fixed-Price Quote', 'Cloud Deployed', '30-Day Warranty'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
                <Check size={14} color={COLOR} /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
            Everything that's <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>included</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1rem' }}>Production-ready applications — not prototypes or templates.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: COLOR }}>
                  <f.icon size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{f.title}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Also includes */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem' }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.5rem' }}>Also included at no extra cost:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
              {INCLUDES.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={11} color={COLOR} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, transparent, rgba(245,158,11,0.03), transparent)' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '3rem' }}>
            How it <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>works</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 800, color: COLOR, opacity: 0.3, marginBottom: '0.75rem' }}>{s.n}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
            Frequently asked <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>questions</span>
          </h2>
          {FAQ.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', textAlign: 'left', color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem' }}>
                {f.q}
                <HelpCircle size={16} color={COLOR} style={{ flexShrink: 0, marginLeft: '1rem', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, paddingBottom: '1.25rem' }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '5rem 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>Ready to build your idea?</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1rem' }}>Download the intake form — we'll scope it, quote it, and build it.</p>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 600, padding: '1rem 2.5rem', borderRadius: '100px', background: GRAD, color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
            <ShoppingCart size={18} /> Book Discovery Call — Get Started
          </button>
        </div>
      </section>

      {/* Cart Modal */}
      <AnimatePresence>
        {cart && !success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
            onClick={e => e.target === e.currentTarget && setCart(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', maxWidth: '480px', width: '100%', position: 'relative' }}>
              <button onClick={() => setCart(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--muted)', display: 'flex' }}><X size={20} /></button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <ShoppingCart size={20} color={COLOR} />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>Your Cart</h3>
              </div>
              <div style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Web Application Development</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>React + Node.js · Cloud Deployed · You Own the Code</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: COLOR }}>$0</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>now</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <span>Subtotal</span><span>$0.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', marginBottom: '1.5rem', fontWeight: 700 }}>
                <span>Due today</span>
                <span style={{ color: COLOR, fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem' }}>$0.00</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', background: 'rgba(245,158,11,0.04)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                💡 <strong>How this works:</strong> No payment now. Download the intake form, fill in your project details, and email it back. We'll book a free 60-min discovery call, then send a fixed-price proposal — no obligation.
              </p>
              <button
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', background: GRAD, color: '#fff', border: 'none', cursor: generating ? 'not-allowed' : 'pointer', opacity: generating ? 0.7 : 1, fontWeight: 700 }}
                onClick={handleDownload}
                disabled={generating}
              >
                {generating ? (
                  <><svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}><circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/><path d="M9 2a7 7 0 0 1 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg> Generating…</>
                ) : (
                  <><Download size={18} /> Download Intake Form & Confirm</>
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '3rem 2.5rem', maxWidth: '480px', width: '100%', textAlign: 'center' }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#22c55e' }}>
                <CheckCircle size={36} />
              </motion.div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.75rem' }}>Form Downloaded!</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                <strong>WeWebU-WebApp-Intake-Form.docx</strong> has been saved to your device. Fill it in and email it to:
              </p>
              <a href="mailto:contact@wewebu.com.au?subject=WeWebU Web App Intake Form"
                style={{ display: 'block', background: 'rgba(245,158,11,0.07)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.9rem', marginBottom: '1.5rem', fontWeight: 700, color: COLOR, fontSize: '0.95rem' }}>
                contact@wewebu.com.au
              </a>
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>We'll reply within 24 hours to book your free discovery call.</p>
              <button style={{ padding: '0.8rem 2rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: GRAD, color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/')}>
                <ArrowLeft size={16} /> Back to WeWebU
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
