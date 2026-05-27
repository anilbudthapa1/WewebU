import { motion } from 'framer-motion'

const year = new Date().getFullYear()

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Website Design', href: '#services' },
      { label: 'Web App Development', href: '#services' },
      { label: 'Google Business', href: '#services' },
      { label: 'SEO & Marketing', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Portfolio', href: '#work' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
  },
  {
    title: 'Get In Touch',
    links: [
      { label: 'hello@wewebu.com.au', href: 'mailto:hello@wewebu.com.au' },
      { label: '+61 XXX XXX XXX', href: 'tel:+61' },
      { label: 'Free Quote', href: '#contact' },
      { label: 'Support', href: '#contact' },
    ],
  },
]

const socials = [
  { name: 'Facebook', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { name: 'Instagram', href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { name: 'LinkedIn', href: '#', svg: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand-name">WeWebU</div>
            <p className="footer__brand-desc">
              Australian digital agency building websites, web apps, and Google Business promotions that drive real growth.
            </p>
            <div className="footer__social">
              {socials.map(s => (
                <a key={s.name} href={s.href} className="footer__social-link" aria-label={s.name}>
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
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
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {year} WeWebU Pty Ltd · All rights reserved</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
