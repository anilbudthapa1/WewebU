import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function MoonlightPreview() {
  return (
    <div style={{
      background: '#0f172a', height: '100%', borderRadius: '6px',
      padding: '10px', fontFamily: 'system-ui, sans-serif', overflow: 'hidden',
    }}>
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div>
          <div style={{ fontSize: '8px', fontWeight: 700, color: '#e2e8f0' }}>Good day, Manager 👋</div>
          <div style={{ fontSize: '6px', color: '#64748b' }}>Thursday 28 May 2026</div>
        </div>
        <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', color: '#fff', fontWeight: 700 }}>MA</div>
      </div>
      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '6px' }}>
        {[
          { label: 'Inventory Health', val: '92%', sub: 'In Stock', color: '#22c55e' },
          { label: 'Total Products', val: '10,068', sub: '+4.2% this week', color: '#6366f1' },
          { label: 'Active Suppliers', val: '66', sub: 'Verified', color: '#06b6d4' },
          { label: 'Inventory Value', val: '$13M', sub: '+1.8% this month', color: '#8b5cf6' },
        ].map((s, i) => (
          <div key={i} style={{
            background: '#1e293b', borderRadius: '4px', padding: '5px',
            border: '1px solid #334155',
          }}>
            <div style={{ fontSize: '5px', color: '#94a3b8', marginBottom: '2px' }}>{s.label}</div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: s.color }}>{s.val}</div>
            <div style={{ fontSize: '5px', color: '#64748b' }}>{s.sub}</div>
          </div>
        ))}
      </div>
      {/* Nav bar */}
      <div style={{ display: 'flex', gap: '4px' }}>
        {['Dashboard', 'Inventory', 'Movements', 'Alerts'].map((n, i) => (
          <div key={i} style={{
            fontSize: '5px', padding: '2px 5px', borderRadius: '3px',
            background: i === 0 ? '#6366f1' : '#1e293b',
            color: i === 0 ? '#fff' : '#94a3b8',
            border: i === 0 ? 'none' : '1px solid #334155',
          }}>{n}</div>
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    tag: 'Web App · Live',
    title: 'Moonlight Inventory System',
    desc: 'Full-stack warehouse management SaaS — 10,000+ products, real-time stock alerts, multi-role access (Admin / Manager / Staff), and supplier tracking.',
    href: 'https://moonlight.defencexinso.com',
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    dots: ['#ef4444', '#fbbf24', '#22c55e'],
    custom: true,
  },
  {
    tag: 'E-commerce',
    title: 'Boutique Fashion Store',
    desc: 'Custom Shopify store with AR try-on, 3× conversion boost post-launch.',
    href: '#contact',
    bg: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    dots: ['#f43f5e', '#fbbf24', '#22c55e'],
  },
  {
    tag: 'Local Business',
    title: 'Plumbing Co. Website',
    desc: '#1 Google ranking achieved in 90 days with GMB optimisation.',
    href: '#contact',
    bg: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    dots: ['#f43f5e', '#fbbf24', '#22c55e'],
  },
  {
    tag: 'Corporate',
    title: 'Legal Firm Rebrand',
    desc: 'Full brand identity + website delivering 5× more qualified leads.',
    href: '#contact',
    bg: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    dots: ['#f43f5e', '#fbbf24', '#22c55e'],
  },
]

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">✦ Our Work</span>
          <h2 className="section-heading">
            Projects that <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="section-subheading">
            Real results for real businesses across Australia.
          </p>
        </motion.div>

        <div className="work__grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="work__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.65 }}
              whileHover={{ y: -6 }}
            >
              <div className="work__card-img" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="work__browser-bar">
                  {p.dots.map((c, j) => (
                    <div key={j} className="work__browser-dot" style={{ background: c }} />
                  ))}
                  <div className="work__browser-url" style={{ fontSize: '9px', color: '#94a3b8', paddingLeft: '6px' }}>
                    {p.custom ? 'moonlight.defencexinso.com' : ''}
                  </div>
                </div>
                <div className="work__screen" style={{ flex: 1 }}>
                  {p.custom ? (
                    <MoonlightPreview />
                  ) : (
                    <div className="work__screen-content" style={{ background: p.bg, height: '100%', borderRadius: '6px' }}>
                      {p.title.slice(0, 1)}
                    </div>
                  )}
                </div>
              </div>
              <div className="work__card-body">
                <div className="work__card-tag">{p.tag}</div>
                <div className="work__card-title">{p.title}</div>
                <p className="work__card-desc">{p.desc}</p>
                <a
                  href={p.href}
                  target={p.custom ? '_blank' : undefined}
                  rel={p.custom ? 'noopener noreferrer' : undefined}
                  onClick={!p.custom ? e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) } : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem',
                    color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  {p.custom ? 'View Live Project' : 'View Case Study'} <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

