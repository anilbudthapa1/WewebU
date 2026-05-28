import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Check, ShoppingCart, Download, CheckCircle,
  TrendingUp, MapPin, Shield, RefreshCw, BarChart2,
  FileText, Search, Bell, Link, Zap, HelpCircle, X, Phone,
} from 'lucide-react'
import { generateSeoMaintenanceIntakeForm } from '../utils/generateSeoMaintenanceIntakeForm'

const COLOR = '#6366f1'
const GRAD  = 'linear-gradient(135deg,#6366f1,#4f46e5)'

const FEATURES = [
  { icon: Search,     title: 'Local SEO Management',          desc: 'Ongoing keyword optimisation, on-page updates, and technical SEO to push your site up Google\'s rankings month after month.' },
  { icon: MapPin,     title: 'Google Business Posts',          desc: 'Weekly posts published to your Google Business Profile — keeping your listing active and appearing in more local searches.' },
  { icon: RefreshCw,  title: 'Website Maintenance & Updates',  desc: 'Content changes, price updates, image swaps, team updates — handled for you within 24 hours of request.' },
  { icon: Shield,     title: 'Security Monitoring & Updates',  desc: 'WordPress core, plugin, and theme updates applied and tested. Malware scanning and SSL monitoring included.' },
  { icon: BarChart2,  title: 'Monthly Performance Reports',    desc: 'A clear, plain-English report every month: rankings, traffic, Google Maps impressions, and what we\'re doing next.' },
  { icon: TrendingUp, title: 'Keyword Rank Tracking',          desc: 'We monitor your position for every target keyword weekly — so you always know exactly where you stand on Google.' },
  { icon: Link,       title: 'Backlink Monitoring',            desc: 'Track your link profile for new backlinks and toxic links that could hurt your rankings — and disavow them if needed.' },
  { icon: FileText,   title: 'SEO Blog Content',               desc: 'One keyword-targeted blog post per month written, optimised, and published to build your topical authority.' },
  { icon: Bell,       title: 'Uptime Monitoring & Alerts',     desc: 'If your website goes down, we know before you do — and we\'re already fixing it.' },
  { icon: Zap,        title: 'Page Speed Optimisation',        desc: 'Image compression, caching, and code cleanup to keep your Core Web Vitals green — a key Google ranking signal.' },
]

const INCLUDES = [
  'Onboarding audit (SEO health check)',
  'Google Analytics 4 + Search Console setup',
  'Competitor tracking (up to 5 rivals)',
  'Google review response management',
  'Review request link setup & management',
  'Broken link detection & repair',
  'Schema markup maintenance',
  'Directory listing consistency checks',
  'Cancel any time — no lock-in contracts',
  'Dedicated account manager',
]

const STEPS = [
  { n: '01', title: 'Download & Fill Form',    desc: 'Share your website details, target keywords, competitors, and goals.' },
  { n: '02', title: 'Onboarding Audit',         desc: 'We run a full SEO health check, set up tracking tools, and identify the highest-impact quick wins.' },
  { n: '03', title: 'Month 1 — Foundation',     desc: 'Technical fixes, keyword strategy, Google Business optimisation, and baseline reporting set up.' },
  { n: '04', title: 'Ongoing Monthly Work',     desc: 'SEO updates, maintenance tasks, content, Google posts, and reporting every single month.' },
]

const FAQ = [
  { q: 'How long before I see SEO results?',
    a: 'Most clients see measurable ranking improvements within 60–90 days. Page 1 results for competitive keywords typically take 3–6 months. We report progress monthly so you always know what\'s moving.' },
  { q: 'What does "no lock-in" actually mean?',
    a: 'You can cancel any time with 30 days\' written notice — no penalty, no minimum term. We keep clients by delivering results, not by trapping them in contracts.' },
  { q: 'Do I need to have a website for this plan?',
    a: 'Yes — the maintenance and SEO components require a website. If you don\'t have one yet, check out our Starter Business Website ($500) or E-commerce Store ($2,500) packages first.' },
  { q: 'What\'s included in "website maintenance"?',
    a: 'Content changes (text, prices, photos, team), WordPress/plugin security updates, uptime monitoring, broken link fixes, and performance optimisation. Up to 2 hours of content changes per month is included.' },
  { q: 'Will you manage my Google reviews?',
    a: 'Yes — we monitor new reviews, draft responses for your approval (or post directly if you prefer), and set up a review request link to help grow your star rating over time.' },
  { q: 'What if I want to pause or upgrade?',
    a: 'You can pause for up to 2 months per year (useful for seasonal businesses). You can also upgrade to include more content, additional locations, or paid Google Ads management — just ask.' },
]

export default function SeoMaintenance() {
  const navigate = useNavigate()
  const [cart, setCart]       = useState(false)
  const [success, setSuccess] = useState(false)
  const [generating, setGen]  = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleDownload = async () => {
    setGen(true)
    await generateSeoMaintenanceIntakeForm()
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
            <ShoppingCart size={15} /> Start Growing — $499/mo
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '5rem 0 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ marginBottom: '1.5rem', color: COLOR, borderColor: 'rgba(99,102,241,0.25)' }}>✦ SEO & Marketing · 🔥 Best Value</span>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              Monthly SEO & Maintenance
            </h1>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3rem', fontWeight: 800, color: COLOR }}>$499</span>
              <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>AUD / month · No lock-in · GST inclusive</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Everything your website needs to rank higher, stay secure, and keep growing — done for you every month. Local SEO, Google Business posts, maintenance, and clear monthly reports.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, padding: '0.9rem 2.2rem', borderRadius: '100px', background: GRAD, color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
                <ShoppingCart size={18} /> Start Growing — $0 now
              </button>
              <a href="tel:0421688186" className="btn-ghost" style={{ padding: '0.9rem 2.2rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> Call to Ask a Question
              </a>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '1rem' }}>No payment now · First invoice after onboarding · Cancel anytime</p>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0', background: 'var(--card)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {['No Lock-In Contract', 'Monthly Reports', 'Google Maps Posts', 'Security Updates', 'Cancel Anytime'].map(t => (
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
            What we do <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>every month</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1rem' }}>Ten ongoing activities — running in the background so you can focus on your business.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: COLOR }}>
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
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.04), transparent)' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '3rem' }}>
            How we <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>get started</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
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
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>Ready to start growing?</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '0.5rem', fontSize: '1rem' }}>Download the intake form and we'll have your SEO plan ready within 3 business days.</p>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>No contracts. No lock-in. Just results.</p>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 600, padding: '1rem 2.5rem', borderRadius: '100px', background: GRAD, color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
            <ShoppingCart size={18} /> Start Growing — $499/month
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
              <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Monthly SEO & Maintenance</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Local SEO · Google Posts · Maintenance · Reports</div>
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
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', background: 'rgba(99,102,241,0.04)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                💡 <strong>How this works:</strong> No payment now. Download the intake form, fill in your website and SEO details, and email it back. We'll run your onboarding audit and send your first $499 invoice — work starts immediately after payment.
              </p>
              <button
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', background: GRAD, color: '#fff', border: 'none', cursor: generating ? 'not-allowed' : 'pointer', opacity: generating ? 0.7 : 1, fontWeight: 700 }}
                onClick={handleDownload}
                disabled={generating}
              >
                {generating ? (
                  <><svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}><circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/><path d="M9 2a7 7 0 0 1 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg> Generating…</>
                ) : (
                  <><Download size={18} /> Download Intake Form & Start Growing</>
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
                <strong>WeWebU-SEOMaintenance-Intake-Form.docx</strong> has been saved to your device. Fill it in and email it to:
              </p>
              <a href="mailto:contact@wewebu.com.au?subject=WeWebU Monthly SEO & Maintenance Intake Form"
                style={{ display: 'block', background: 'rgba(99,102,241,0.07)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.9rem', marginBottom: '1.5rem', fontWeight: 700, color: COLOR, fontSize: '0.95rem' }}>
                contact@wewebu.com.au
              </a>
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>We'll reply within 24 hours with your onboarding audit and first invoice.</p>
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
