import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Check, ShoppingCart, Download, CheckCircle,
  MapPin, Star, Search, Image, MessageSquare, TrendingUp,
  Clock, Phone, Shield, BarChart2, HelpCircle, X,
} from 'lucide-react'
import { generateGoogleBusinessIntakeForm } from '../utils/generateGoogleBusinessIntakeForm'

const COLOR = '#22c55e'
const GRAD  = 'linear-gradient(135deg,#22c55e,#16a34a)'

const FEATURES = [
  { icon: MapPin,        title: 'Full Profile Setup & Verification',  desc: 'We create or claim your Google Business Profile, verify your listing, and ensure every field is correctly filled in.' },
  { icon: Search,        title: 'Keyword Strategy for Local Search',   desc: 'Research into the exact search terms your customers use — then we optimise every part of your profile around them.' },
  { icon: Star,          title: 'Business Category Optimisation',      desc: 'Choosing the right primary and secondary categories is one of the biggest ranking factors on Google Maps. We get it right.' },
  { icon: BarChart2,     title: 'Service & Product Listings',          desc: 'Every service and product you offer added to your profile with keyword-rich descriptions to appear in more searches.' },
  { icon: Image,         title: 'Photo Strategy & Upload',             desc: 'We guide your photo selection, optimise file names and metadata, and upload images that build trust and engagement.' },
  { icon: MessageSquare, title: 'Review Management Setup',             desc: 'Response templates for positive and negative reviews, plus a custom review-request link to send to happy customers.' },
  { icon: TrendingUp,    title: 'Google Maps Ranking Boost',           desc: 'Profile signals, citation consistency, and Q&A setup — all tuned to push you toward the local 3-pack.' },
  { icon: Clock,         title: 'Business Hours & Attributes',         desc: 'Accurate hours including public holidays, plus attributes (wheelchair access, parking, EFTPOS) that filter into search.' },
  { icon: Shield,        title: 'NAP Consistency Audit',               desc: 'Your Name, Address, and Phone number checked and corrected across major Australian directories.' },
  { icon: Phone,         title: 'Booking Link & CTA Setup',            desc: 'Connect your booking system, phone number, and website so every visit converts into a customer action.' },
]

const INCLUDES = [
  'Google Business Profile audit report',
  'Competitor analysis (top 5 local rivals)',
  'Keyword research report',
  'Optimised 750-character business description',
  'Q&A section pre-populated with common questions',
  'First Google Post written and published',
  'Review request link (shareable short URL)',
  'Review response templates (positive + negative)',
  'Photo upload and metadata optimisation',
  '30-day post-optimisation check-in call',
]

const STEPS = [
  { n: '01', title: 'Download & Fill Form',   desc: 'Complete the intake form with your business details, services, and Google account access.' },
  { n: '02', title: 'Audit & Research',        desc: 'We audit your current profile (or competitors\') and research the keywords your customers use.' },
  { n: '03', title: 'Optimise & Upload',       desc: 'Every section of your profile is updated — categories, description, photos, services, and more.' },
  { n: '04', title: 'Check-In & Maintain',     desc: '30-day follow-up to review early ranking improvements and guide your ongoing review strategy.' },
]

const FAQ = [
  { q: 'How long until I see results on Google Maps?',
    a: 'Most clients see improved rankings within 2–4 weeks of optimisation. Google Maps ranking depends on relevance, distance, and prominence — we maximise all three. Ongoing review growth accelerates results further.' },
  { q: 'Do I need a Google account?',
    a: 'Yes — you need a Google account (Gmail) to own your Business Profile. If you don\'t have one, we\'ll walk you through creating one. You retain full ownership and control at all times.' },
  { q: 'What if someone else has claimed my business on Google?',
    a: 'This happens more often than you\'d think. We\'ll guide you through the Google verification process to reclaim your listing — it can take a few days but is completely resolvable.' },
  { q: 'I already have a profile — why does it need optimising?',
    a: 'Most profiles are only 20–40% complete. Missing categories, incomplete hours, no photos, and no service listings all hurt your ranking. A fully optimised profile can move you from page 2 to the Maps 3-pack.' },
  { q: 'What\'s the difference between this and SEO?',
    a: 'Google Business Optimisation specifically targets Google Maps and local search (the map results at the top of Google). Website SEO targets the blue-link organic results below. Both matter — this service handles Maps specifically.' },
  { q: 'Is the $299 a one-time cost?',
    a: 'Yes — $299 is a one-time setup and optimisation fee. Ongoing management (monthly posts, review responses, and updates) is included in our Monthly SEO & Maintenance plan at $499/month.' },
]

export default function GoogleBusiness() {
  const navigate = useNavigate()
  const [cart, setCart]       = useState(false)
  const [success, setSuccess] = useState(false)
  const [generating, setGen]  = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleDownload = async () => {
    setGen(true)
    await generateGoogleBusinessIntakeForm()
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
            <ShoppingCart size={15} /> Get Started — $299
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '5rem 0 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ marginBottom: '1.5rem', color: COLOR, borderColor: 'rgba(34,197,94,0.25)' }}>✦ Google Business Promotion</span>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              Google Business Optimisation
            </h1>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3rem', fontWeight: 800, color: COLOR }}>$299</span>
              <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>AUD · one-time setup · GST inclusive</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Rank higher on Google Maps and local search. We set up and optimise your Google Business Profile so customers in your area find you first — not your competitors.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, padding: '0.9rem 2.2rem', borderRadius: '100px', background: GRAD, color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
                <ShoppingCart size={18} /> Add to Cart — $0 now
              </button>
              <a href="tel:0421688186" className="btn-ghost" style={{ padding: '0.9rem 2.2rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> Call to Ask a Question
              </a>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '1rem' }}>No payment collected now · Invoice sent after we receive your completed form</p>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0', background: 'var(--card)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {['Google Maps 3-Pack', 'Keyword Optimised', 'Review Strategy', 'Citation Audit', '30-Day Check-In'].map(t => (
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
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1rem' }}>A complete, done-for-you Google Maps presence — not a checklist you do yourself.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: COLOR }}>
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
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, transparent, rgba(34,197,94,0.03), transparent)' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '3rem' }}>
            How it <span style={{ background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>works</span>
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
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>Ready to dominate Google Maps?</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1rem' }}>Download the intake form and we'll have your profile optimised within 5 business days.</p>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 600, padding: '1rem 2.5rem', borderRadius: '100px', background: GRAD, color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
            <ShoppingCart size={18} /> Get Started — $299
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
              <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Google Business Optimisation</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Full setup · Keyword optimised · Review strategy</div>
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
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', background: 'rgba(34,197,94,0.04)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                💡 <strong>How this works:</strong> No payment now. Download the intake form, fill in your business details, and email it back. We'll send a $299 invoice and begin your optimisation within 1 business day of payment.
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
                <strong>WeWebU-GoogleBusiness-Intake-Form.docx</strong> has been saved to your device. Fill it in and email it to:
              </p>
              <a href="mailto:contact@wewebu.com.au?subject=WeWebU Google Business Intake Form"
                style={{ display: 'block', background: 'rgba(34,197,94,0.07)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.9rem', marginBottom: '1.5rem', fontWeight: 700, color: COLOR, fontSize: '0.95rem' }}>
                contact@wewebu.com.au
              </a>
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>We'll reply within 24 hours with your invoice and get started straight away.</p>
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
