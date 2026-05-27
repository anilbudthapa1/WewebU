import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    tag: 'E-commerce',
    title: 'Boutique Fashion Store',
    desc: 'Custom Shopify store with AR try-on, 3× conversion boost post-launch.',
    bg: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    dots: ['#f43f5e', '#fbbf24', '#22c55e'],
  },
  {
    tag: 'Web App',
    title: 'SaaS Dashboard',
    desc: 'Real-time analytics platform for 10k+ daily active users.',
    bg: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
    dots: ['#f43f5e', '#fbbf24', '#22c55e'],
  },
  {
    tag: 'Local Business',
    title: 'Plumbing Co. Website',
    desc: '#1 Google ranking achieved in 90 days with GMB optimisation.',
    bg: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    dots: ['#f43f5e', '#fbbf24', '#22c55e'],
  },
  {
    tag: 'Corporate',
    title: 'Legal Firm Rebrand',
    desc: 'Full brand identity + website delivering 5× more qualified leads.',
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
                  <div className="work__browser-url" />
                </div>
                <div className="work__screen" style={{ flex: 1 }}>
                  <div className="work__screen-content" style={{ background: p.bg, height: '100%', borderRadius: '6px' }}>
                    {p.title.slice(0, 1)}
                  </div>
                </div>
              </div>
              <div className="work__card-body">
                <div className="work__card-tag">{p.tag}</div>
                <div className="work__card-title">{p.title}</div>
                <p className="work__card-desc">{p.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem',
                  color: 'var(--primary)', fontSize: '0.82rem', fontWeight: 600 }}>
                  View Case Study <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
