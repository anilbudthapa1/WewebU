import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Check, ShoppingCart, Download, CheckCircle,
  ShoppingBag, CreditCard, Truck, BarChart2, RefreshCw,
  Smartphone, Search, Shield, Users, Settings, HelpCircle, X, Phone,
} from 'lucide-react'
import { generateEcommerceIntakeForm } from '../utils/generateEcommerceIntakeForm'

const FEATURES = [
  { icon: ShoppingBag,  title: 'Shopify or WooCommerce',       desc: 'We build on the platform that suits your business — Shopify for simplicity, WooCommerce for flexibility.' },
  { icon: CreditCard,   title: 'Secure Payment Gateway',        desc: 'Stripe, PayPal, Apple Pay, Google Pay — all configured and tested before launch.' },
  { icon: RefreshCw,    title: 'Afterpay Integration',           desc: 'Increase average order value by letting customers buy now and pay in 4 instalments.' },
  { icon: Truck,        title: 'Australia Post Shipping',        desc: 'Live shipping rates from Australia Post integrated directly at checkout.' },
  { icon: BarChart2,    title: 'Inventory Management',           desc: 'Track stock levels, set low-stock alerts, and manage variants (size, colour, etc.).' },
  { icon: Smartphone,   title: 'Mobile-Optimised Checkout',     desc: 'Frictionless checkout on any device — tested on iOS and Android before launch.' },
  { icon: Search,       title: 'Product SEO Setup',             desc: 'Every product page gets optimised titles, meta descriptions, and schema markup.' },
  { icon: Users,        title: 'Customer Account System',       desc: 'Order history, saved addresses, and wishlists — keeps customers coming back.' },
  { icon: Shield,       title: 'SSL + PCI Compliance',          desc: 'Enterprise-grade security so customers trust you with their payment details.' },
  { icon: Settings,     title: 'Admin Dashboard Training',      desc: '1-hour walkthrough so you can manage products, orders, and discounts yourself.' },
]

const INCLUDES = [
  'Up to 50 products loaded at launch',
  'Discount codes & coupon system',
  'Abandoned cart recovery emails',
  'Google Analytics 4 + Google Shopping feed',
  'Facebook / Instagram shop connection',
  'Custom thank-you / order confirmation page',
  'Returns & refund policy page',
  'GST / tax configuration',
  'Domain + hosting setup consultation',
  '30-day post-launch support',
]

const STEPS = [
  { n: '01', title: 'Download & Fill Form',    desc: 'Fill in the e-commerce intake form with your products, payment, and shipping details.' },
  { n: '02', title: 'Discovery Call',           desc: 'Free 30-min call to review your form, choose the right platform, and scope the build.' },
  { n: '03', title: 'Design & Build',           desc: 'We design your store, load your products, and configure payments and shipping.' },
  { n: '04', title: 'Test & Go Live',           desc: 'Full checkout testing across devices, then we flip the switch and your store is live.' },
]

const FAQ = [
  { q: 'Shopify or WooCommerce — which is better?',   a: 'Shopify is easier to manage day-to-day and ideal for most product businesses. WooCommerce gives more flexibility but needs hosting and maintenance. We\'ll recommend the right one on your discovery call.' },
  { q: 'What products can I sell?',                   a: 'Physical products, digital downloads, services, subscriptions — almost anything. We\'ll set up your catalogue based on your intake form.' },
  { q: 'Do I need Afterpay?',                         a: 'Afterpay significantly increases conversions for Australian stores. Studies show it increases average order value by 20–30%. We strongly recommend it.' },
  { q: 'How do I manage my store after launch?',      a: 'We include a 1-hour training session so you can add products, process orders, and run discounts yourself. The dashboards are beginner-friendly.' },
  { q: 'Can I add more products later?',              a: 'Yes — unlimited products on both Shopify and WooCommerce. We load up to 50 at launch, and you can add more yourself any time.' },
  { q: 'What does "$2,500 starting from" mean?',      a: 'The base package covers everything listed here. Larger catalogues (500+ products), custom integrations, or additional platforms may cost more. We\'ll quote exactly after your discovery call — no surprises.' },
]

export default function EcommerceStore() {
  const navigate = useNavigate()
  const [cart, setCart]       = useState(false)
  const [success, setSuccess] = useState(false)
  const [generating, setGen]  = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleDownload = async () => {
    setGen(true)
    await generateEcommerceIntakeForm()
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
          <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'linear-gradient(135deg,#7c3aed,#6366f1)' }} onClick={() => setCart(true)}>
            <ShoppingCart size={15} /> Get Started — $2,500
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '5rem 0 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ marginBottom: '1.5rem', color: '#7c3aed', borderColor: 'rgba(124,58,237,0.25)' }}>✦ Website Development</span>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
              E-commerce Store
            </h1>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#7c3aed' }}>$2,500</span>
              <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>AUD · starting from · GST inclusive</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              A fully functional online store on Shopify or WooCommerce — with payments, shipping, inventory, and Afterpay configured and ready to sell.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, padding: '0.9rem 2.2rem', borderRadius: '100px', background: 'linear-gradient(135deg,#7c3aed,#6366f1)', color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
                <ShoppingCart size={18} /> Add to Cart — $0 now
              </button>
              <a href="tel:0421688186" className="btn-ghost" style={{ padding: '0.9rem 2.2rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> Call to Ask a Question
              </a>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '1rem' }}>No payment collected now · Invoice sent after discovery call</p>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0', background: 'var(--card)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {['Shopify & WooCommerce', 'Afterpay Ready', 'Australia Post Integrated', 'GST Configured', '30-Day Support'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
                <Check size={14} color="#7c3aed" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
            Everything that's <span style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>included</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1rem' }}>A fully-built, payment-ready store — not just a template.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {FEATURES.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#7c3aed' }}>
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
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={11} color="#7c3aed" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.03), transparent)' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 700, marginBottom: '3rem' }}>
            How it <span style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>works</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 800, color: '#7c3aed', opacity: 0.3, marginBottom: '0.75rem' }}>{s.n}</div>
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
            Frequently asked <span style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>questions</span>
          </h2>
          {FAQ.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', textAlign: 'left', color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem' }}>
                {f.q}
                <HelpCircle size={16} color="#7c3aed" style={{ flexShrink: 0, marginLeft: '1rem', transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
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
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, marginBottom: '1rem' }}>Ready to launch your store?</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1rem' }}>Download the intake form and we'll have your store live in 2–3 weeks.</p>
          <button style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 600, padding: '1rem 2.5rem', borderRadius: '100px', background: 'linear-gradient(135deg,#7c3aed,#6366f1)', color: '#fff', cursor: 'pointer', border: 'none' }} onClick={() => setCart(true)}>
            <ShoppingCart size={18} /> Add to Cart — Get Started Today
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
                <ShoppingCart size={20} color="#7c3aed" />
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.2rem' }}>Your Cart</h3>
              </div>
              <div style={{ background: 'rgba(124,58,237,0.05)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>E-commerce Store</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Shopify / WooCommerce · Payments · Shipping · Afterpay</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.2rem', color: '#7c3aed' }}>$0</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>now</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                <span>Subtotal</span><span>$0.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', marginBottom: '1.5rem', fontWeight: 700 }}>
                <span>Due today</span>
                <span style={{ color: '#7c3aed', fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem' }}>$0.00</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.5rem', background: 'rgba(124,58,237,0.04)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                💡 <strong>How this works:</strong> No payment now. Download the intake form, fill in your store details, and email it back. We'll book a free discovery call to confirm scope, then invoice from $2,500.
              </p>
              <button
                style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius)', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', background: 'linear-gradient(135deg,#7c3aed,#6366f1)', color: '#fff', border: 'none', cursor: generating ? 'not-allowed' : 'pointer', opacity: generating ? 0.7 : 1, fontWeight: 700 }}
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
                <strong>WeWebU-Ecommerce-Intake-Form.docx</strong> has been saved to your device. Fill it in and email it to:
              </p>
              <a href="mailto:contact@wewebu.com.au?subject=WeWebU E-commerce Intake Form"
                style={{ display: 'block', background: 'rgba(124,58,237,0.07)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.9rem', marginBottom: '1.5rem', fontWeight: 700, color: '#7c3aed', fontSize: '0.95rem' }}>
                contact@wewebu.com.au
              </a>
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginBottom: '2rem' }}>We'll reply within 24 hours to book your free discovery call.</p>
              <button style={{ padding: '0.8rem 2rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg,#7c3aed,#6366f1)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/')}>
                <ArrowLeft size={16} /> Back to WeWebU
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
