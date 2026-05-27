import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import PolicyModal from './PolicyModal'

const year = new Date().getFullYear()

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Website Design & Development', href: '#services' },
      { label: 'Web App Development', href: '#services' },
      { label: 'Google Business Promotion', href: '#services' },
      { label: 'Local SEO Strategy', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Portfolio', href: '#work' },
      { label: 'Client Reviews', href: '#testimonials' },
    ],
  },
]

const socials = [
  {
    name: 'Facebook', href: '#',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  },
  {
    name: 'Instagram', href: '#',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  },
  {
    name: 'LinkedIn', href: '#',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  },
]

export default function Footer() {
  const [modal, setModal] = useState(null)

  return (
    <>
      {modal && <PolicyModal policyKey={modal} onClose={() => setModal(null)} />}

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div>
              <div className="footer__brand-name">WeWebU</div>
              <p className="footer__brand-desc">
                Australian digital agency building high-performance websites, web apps, and Google Business
                promotions that drive real growth for businesses across Australia.
              </p>

              {/* Contact Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <a href="tel:0421688186" style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'var(--muted)', fontSize:'0.85rem', transition:'color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--primary)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>
                  <Phone size={13} style={{ flexShrink: 0 }} /> 0421 688 186
                </a>
                <a href="mailto:contact@wewebu.com.au" style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'var(--muted)', fontSize:'0.85rem', transition:'color 0.2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--primary)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--muted)'}>
                  <Mail size={13} style={{ flexShrink: 0 }} /> contact@wewebu.com.au
                </a>
                <span style={{ display:'flex', alignItems:'center', gap:'0.5rem', color:'var(--muted)', fontSize:'0.85rem' }}>
                  <MapPin size={13} style={{ flexShrink: 0 }} /> 5 Eve Ct, Springvale VIC 3171
                </span>
              </div>

              <div className="footer__social">
                {socials.map(s => (
                  <a key={s.name} href={s.href} className="footer__social-link" aria-label={s.name}>
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {cols.map(col => (
              <div key={col.title}>
                <div className="footer__col-title">{col.title}</div>
                <div className="footer__links">
                  {col.links.map(l => (
                    <a key={l.label} href={l.href}>{l.label}</a>
                  ))}
                </div>
              </div>
            ))}

            {/* Legal / Info */}
            <div>
              <div className="footer__col-title">Legal</div>
              <div className="footer__links">
                <button onClick={() => setModal('privacy')}>Privacy Policy</button>
                <button onClick={() => setModal('refund')}>Refund Policy</button>
                <button onClick={() => setModal('terms')}>Terms of Service</button>
                <button onClick={() => setModal('faq')}>FAQ</button>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <div className="footer__col-title">Hours</div>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  Mon – Fri: 9am – 5pm AEST<br/>
                  Sat – Sun: By appointment
                </p>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              © {year} WeWebU · ABN available on request · All rights reserved · Australia-wide service
            </p>
            <div className="footer__legal">
              <button onClick={() => setModal('privacy')}>Privacy</button>
              <button onClick={() => setModal('refund')}>Refunds</button>
              <button onClick={() => setModal('terms')}>Terms</button>
              <button onClick={() => setModal('faq')}>FAQ</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
