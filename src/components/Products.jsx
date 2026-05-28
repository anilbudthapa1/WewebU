import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    name: 'Free Website Audit',
    category: 'Website Design',
    price: 'FREE',
    priceNote: 'No obligation',
    badge: '⭐ Most Popular',
    highlight: true,
    desc: 'Free 20-minute website audit for Australian businesses. We analyse your site for speed issues, SEO problems, mobile errors, security vulnerabilities, and conversion blockers — with a detailed report at no cost.',
    features: ['Speed & performance check', 'SEO analysis', 'Mobile responsiveness', 'Security scan', 'Conversion report'],
    cta: 'Book Free Audit',
    color: 'var(--accent)',
    bg: 'rgba(6,182,212,0.06)',
    href: '#contact',
  },
  {
    name: 'Starter Business Website',
    category: 'Website Design',
    price: '$500',
    priceNote: 'One-time · GST inclusive',
    badge: '🔥 Best Value',
    highlight: false,
    desc: 'Professional 5-page business website — mobile-first, SEO-optimised, fast loading. Includes contact form, Google Maps, SSL security, and 30-day support. Perfect for small businesses and startups.',
    features: ['5-page responsive design', 'SEO optimised', 'Contact form', 'Google Maps', '30-day free support'],
    cta: 'View Details & Get Started',
    color: 'var(--primary)',
    bg: 'rgba(99,102,241,0.06)',
    href: '/products/starter-website',
    isRoute: true,
  },
  {
    name: 'E-commerce Store',
    category: 'Website Development',
    price: '$2,500',
    priceNote: 'Starting from',
    badge: null,
    highlight: false,
    desc: 'Custom online store on Shopify or WooCommerce. Includes product catalogue, secure payments, inventory management, and conversion-optimised design. Integrated with Afterpay and Australia Post.',
    features: ['Shopify / WooCommerce', 'Secure payment gateway', 'Inventory management', 'Afterpay integration', 'Australia Post shipping'],
    cta: 'Get Quote',
    color: 'var(--secondary)',
    bg: 'rgba(139,92,246,0.06)',
    href: '#contact',
  },
  {
    name: 'Web Application Development',
    category: 'Web App Development',
    price: '$5,000',
    priceNote: 'Starting from',
    badge: null,
    highlight: false,
    desc: 'Scalable custom web apps — SaaS platforms, client portals, dashboards, booking systems, and business tools. Built with React, Node.js, and cloud infrastructure. Free discovery call included.',
    features: ['React / Node.js stack', 'User authentication', 'Database design', 'API integration', 'Cloud deployment'],
    cta: 'Book Discovery Call',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.06)',
    href: '#contact',
  },
  {
    name: 'Google Business Optimisation',
    category: 'Google Business Promotion',
    price: '$299',
    priceNote: 'One-time setup',
    badge: null,
    highlight: false,
    desc: 'Complete Google Business Profile setup and optimisation. Rank higher on Google Maps and local search. Includes keyword strategy, photo plan, service listings, and review management guidance.',
    features: ['Full profile setup', 'Keyword optimisation', 'Service listings', 'Photo strategy', 'Review management'],
    cta: 'Get Started',
    color: '#22c55e',
    bg: 'rgba(34,197,94,0.06)',
    href: '#contact',
  },
  {
    name: 'Logo & Brand Identity',
    category: 'Graphic Design',
    price: '$299',
    priceNote: 'Starting from',
    badge: null,
    highlight: false,
    desc: 'Professional logo and brand identity design. Includes custom logo, colour palette, typography, and brand guidelines. Delivered in all formats. Multiple concepts, unlimited revisions.',
    features: ['Custom logo design', 'Colour palette', 'Brand guidelines', 'All file formats', 'Unlimited revisions'],
    cta: 'Get Quote',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.06)',
    href: '#contact',
  },
  {
    name: 'Monthly SEO & Maintenance',
    category: 'SEO & Marketing',
    price: '$499',
    priceNote: 'Per month · No lock-in',
    badge: '🔥 Best Value',
    highlight: false,
    desc: 'Ongoing monthly SEO, Google Business management, website maintenance, security updates, content changes, and monthly performance reports. Cancel anytime — no lock-in contracts.',
    features: ['Local SEO management', 'Google Business posts', 'Website maintenance', 'Security updates', 'Monthly reports'],
    cta: 'Start Growing',
    color: 'var(--primary)',
    bg: 'rgba(99,102,241,0.06)',
    href: '#contact',
  },
]

export default function Products() {
  const secRef   = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: '.products__grid', start: 'top 80%' }
        }
      )
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="products" id="products" ref={secRef}
      style={{ padding: '8rem 0', position: 'relative' }}>

      <div className="bg-grid" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">✦ Pricing & Products</span>
          <h2 className="section-heading">
            Transparent pricing, <span className="gradient-text">real results</span>
          </h2>
          <p className="section-subheading">
            No hidden fees. No lock-in contracts. Just clear pricing and quality work for Australian businesses.
          </p>
        </motion.div>

        <div className="products__grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginTop: '3.5rem',
        }}>
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="product-card"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                background: p.highlight
                  ? 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(99,102,241,0.08))'
                  : 'var(--card)',
                border: p.highlight
                  ? '1.5px solid var(--accent)'
                  : '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: p.highlight ? '0 0 32px rgba(6,182,212,0.15)' : '0 2px 12px var(--shadow)',
                transition: 'box-shadow var(--transition)',
              }}
            >
              {/* Badge */}
              {p.badge && (
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  fontSize: '0.72rem', fontWeight: 700,
                  padding: '0.25rem 0.7rem',
                  background: p.highlight ? 'var(--accent)' : 'rgba(239,68,68,0.1)',
                  color: p.highlight ? '#fff' : '#ef4444',
                  borderRadius: '100px',
                  border: p.highlight ? 'none' : '1px solid rgba(239,68,68,0.2)',
                }}>
                  {p.badge}
                </div>
              )}

              {/* Category tag */}
              <span style={{
                fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: p.color, opacity: 0.9,
              }}>
                {p.category}
              </span>

              {/* Name */}
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: '1.15rem',
                paddingRight: p.badge ? '5rem' : 0,
              }}>
                {p.name}
              </h3>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: p.price === 'FREE' ? '2rem' : '1.75rem',
                  fontWeight: 800,
                  color: p.price === 'FREE' ? 'var(--accent)' : p.color,
                }}>
                  {p.price}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                  {p.priceNote}
                </span>
              </div>

              {/* Description */}
              <p style={{
                color: 'var(--muted)', fontSize: '0.88rem',
                lineHeight: 1.7, flex: 1,
              }}>
                {p.desc}
              </p>

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    fontSize: '0.85rem', color: 'var(--muted)',
                  }}>
                    <span style={{
                      width: '16px', height: '16px', borderRadius: '50%',
                      background: p.bg, border: `1px solid ${p.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, fontSize: '9px', color: p.color,
                    }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={p.href}
                onClick={e => {
                  e.preventDefault()
                  if (p.isRoute) { navigate(p.href) }
                  else { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
                }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '0.5rem', marginTop: '0.5rem',
                  padding: '0.8rem 1.5rem', borderRadius: 'var(--radius)',
                  fontWeight: 700, fontSize: '0.9rem',
                  background: p.highlight
                    ? 'linear-gradient(135deg, var(--accent), var(--primary))'
                    : p.bg,
                  color: p.highlight ? '#fff' : p.color,
                  border: p.highlight ? 'none' : `1px solid ${p.color}30`,
                  transition: 'opacity 0.2s, transform 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {p.cta} <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            textAlign: 'center', color: 'var(--muted)',
            fontSize: '0.85rem', marginTop: '2.5rem',
          }}
        >
          All prices in AUD · GST inclusive where applicable ·{' '}
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>
            Not sure what you need?
          </span>{' '}
          Book a free 30-min consultation — no obligation.
        </motion.p>
      </div>
    </section>
  )
}
