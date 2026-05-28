import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Check, ShoppingCart, Download, CheckCircle,
  Globe, Shield, Zap, Search, MapPin, Phone, Mail,
  Clock, Star, HelpCircle, X,
} from 'lucide-react'
import { generateIntakeForm } from '../utils/generateIntakeForm'

const FEATURES = [
  { icon: Globe,  title: '5-Page Responsive Website',   desc: 'Home, About, Services, Gallery, Contact — all beautifully designed and mobile-first.' },
  { icon: Search, title: 'SEO Optimised',               desc: 'On-page SEO, meta tags, structured data, and Google-friendly page speed.' },
  { icon: Mail,   title: 'Contact Form',                desc: 'Professional contact form that sends enquiries directly to your inbox.' },
  { icon: MapPin, title: 'Google Maps Embed',           desc: 'Interactive map so customers can find your business location easily.' },
  { icon: Shield, title: 'SSL Security Certificate',   desc: 'HTTPS padlock on every page — trusted by visitors and ranked higher by Google.' },
  { icon: Zap,    title: '95+ Lighthouse Score',        desc: 'Fast loading, accessible, and best-practice rated by Google PageSpeed.' },
  { icon: Phone,  title: 'Click-to-Call & WhatsApp',   desc: 'One-tap mobile calling and WhatsApp button — never miss a lead.' },
  { icon: Star,   title: 'Social Media Integration',   desc: 'Link all your social profiles and feed displayed on your site.' },
  { icon: Clock,  title: '30-Day Free Support',         desc: 'One full month of post-launch support included — no extra charge.' },
]

const INCLUDES = [
  'Professional domain consultation',
  'Custom colour palette matching your brand',
  'Up to 3 rounds of design revisions',
  'Mobile, tablet & desktop testing',
  'Google Analytics setup',
  'Google Search Console submission',
  'Sitemap & robots.txt',
  'Basic on-page SEO for all pages',
  '30-day post-launch support',
]

const STEPS = [
  { n: '01', title: 'Download & Fill Form',   desc: 'Download the intake form, fill in your business details, and email it to us.' },
  { n: '02', title: 'Discovery Call',          desc: 'We\'ll book a free 30-minute call to review your form and ask any questions.' },
  { n: '03', title: 'Design & Build',          desc: 'We design your site and send you a preview link within 5–7 business days.' },
  { n: '04', title: 'Review & Launch',         desc: 'You review, request changes, approve, and we go live. Simple.' },
]

const FAQ = [
  { q: 'What do I need to provide?',          a: 'Your logo (if you have one), business photos, written content for each page, and any colour preferences. We\'ll help with anything you\'re missing.' },
  { q: 'How long does it take?',               a: 'Typically 5–10 business days from receiving your completed intake form. Rush delivery available on request.' },
  { q: 'Do I own the website?',                a: 'Yes — 100%. Once payment is made and the site is live, everything belongs to you including all files and source code.' },
  { q: 'What about hosting and domain?',       a: 'We can set up hosting and register a domain for you (additional cost) or work with your existing provider.' },
  { q: 'Can I upgrade later?',                 a: 'Absolutely. Many clients start with the Starter package and add e-commerce, booking systems, or SEO management later.' },
  { q: 'What\'s the $0 at checkout mean?',    a: 'No payment is collected online. After you download the intake form and we review it together, we\'ll send a formal invoice. Payment is due before the project starts.' },
]

export default function StarterWebsite() {
  const navigate  = useNavigate()
  const [cart, setCart]         = useState(false)
  const [success, setSuccess]   = useState(false)
  const [generating, setGen]    = useState(false)
  const [openFaq, setOpenFaq]   = useState(null)

  const handleDownload = async () => {
    setGen(true)
    await generateIntakeForm()
    setGen(false)
    setCart(false)
    setSuccess(true)
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>

      {/* ── Sticky Header ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'var(--navbar-bg)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={() => navigate('/')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)', fontSize: '0.88rem', fontWeight: 600 }}
          >
            <ArrowLeft size={16} /> Back to WeWebU
          </button>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.2rem', background: 'linear-gradient(135deg,var(--primary),var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            WeWebU
          </div>
          <button
            className="btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            onClick={() => setCart(true)}
          >
            <ShoppingCart size={15} /> Get Started — $500
          </button>
        </div>
      </div>

      {/* ── Hero ── */}
      <div style={{ padding: '5rem 0 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ marginBottom: '1.5rem' }}>✦ Website Design &amp; Development</span>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              Starter Business Website
            </h1>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3rem', fontWeight: 800, color: 'var(--primary)' }}>$500</span>
              <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>AUD · one-time · GST inclusive</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              A professional 5-page website for your Australian business — mobile-first, SEO-optimised, and live within 10 business days.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary" style={{ padding: '0.9rem 2.2rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setCart(true)}>
                <ShoppingCart size={18} /> Add to Cart — $0 now
              </button>
              <a href="tel:0421688186" className="btn-ghost" style={{ padding: '0.9rem 2.2rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> Call to Ask a Question
              </a>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '1rem' }}>No payment collected now · Invoice sent after project review</p>
          </motion.div>
        </div>
      </div>

      {/* ── Trust bar ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0', background: 'var(--card)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {['Australian Owned', '5★ Google Reviews', '10 Business Days', 'No Lock-in Contracts', '30-Day Support Included'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
                <Check size={14} color="var(--primary)" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
            Everything that's <span className="gradient-text">included</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1rem' }}>No hidden extras. No surprise invoices. Here's exactly what you get.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(99,102,241,0.08)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)' }}>
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

      {/* ── Also includes ── */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem' }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.5rem' }}>Also included at no extra cost:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
              {INCLUDES.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={11} color="#22c55e" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.03), transparent)' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '3rem' }}>
            How it <span className="gradient-text">works</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', opacity: 0.3, marginBottom: '0.75rem' }}>{s.n}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          {FAQ.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', textAlign: 'left', color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem' }}
              >
                {f.q}
                <HelpCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginLeft: '1rem', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, paddingBottom: '1.25rem' }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: '5rem 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Ready to get your website?
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1rem' }}>Click below, download the intake form, and we'll do the rest.</p>
          <button className="btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '100px', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setCart(true)}>
            <ShoppingCart size={18} /> Add to Cart — Get Started Today
          </button>
        </div>
      </section>

      {/* ── Cart Modal ── */}
      <AnimatePresence>
        {cart && !success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
            onClick={e => e.target === e.currentTarget && setCart(false)}
          >
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', maxWidth: '480px', width: '100%', position: 'relative' }}>
              <button onClick={() => setCart(false)} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--muted)', display: 'flex' }}>
                <X size={20} />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <ShoppingCart size={20} color="var(--primary)" />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>Your Cart</h3>
              </div>

              {/* Cart item */}
              <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Starter Business Website</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>5-page responsive website · 30-day support</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)' }}>$0</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>now</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <span>Subtotal</span><span>$0.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', marginBottom: '1.5rem', fontWeight: 700 }}>
                <span>Due today</span>
                <span style={{ color: 'var(--primary)', fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem' }}>$0.00</span>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', background: 'rgba(99,102,241,0.04)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                💡 <strong>How this works:</strong> No payment now. Download the intake form, fill in your business details, and email it back. We'll review it together on a free call, then send a formal $500 invoice before work begins.
              </p>

              <button
                className="btn-primary"
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', opacity: generating ? 0.7 : 1 }}
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

      {/* ── Success Modal ── */}
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
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                Form Downloaded!
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Your intake form <strong>WeWebU-Website-Intake-Form.docx</strong> has been saved to your device. Fill it in and email it to:
              </p>
              <a href="mailto:contact@wewebu.com.au?subject=WeWebU Website Intake Form — Starter Package"
                style={{ display: 'block', background: 'rgba(99,102,241,0.07)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.9rem', marginBottom: '1.5rem', fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>
                contact@wewebu.com.au
              </a>
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>
                We'll reply within 24 hours to book your free discovery call.
              </p>
              <button className="btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => navigate('/')}>
                <ArrowLeft size={16} /> Back to WeWebU
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
