import { motion } from 'framer-motion'
import { Zap, Shield, Headphones, TrendingUp, Clock, Award } from 'lucide-react'

const items = [
  { icon: <Zap size={20} />,          title: 'Lightning Fast',     text: 'We build with performance baked in. 95+ Lighthouse scores, sub-2s loads.' },
  { icon: <Shield size={20} />,        title: 'Secure by Default',  text: 'SSL, WAF, regular audits — your site is protected from day one.' },
  { icon: <Headphones size={20} />,    title: 'Ongoing Support',    text: '24/7 support, monthly maintenance, and a dedicated account manager.' },
  { icon: <TrendingUp size={20} />,    title: 'Growth Focused',     text: 'Every decision is guided by your business goals and conversion data.' },
  { icon: <Clock size={20} />,         title: 'On-Time Delivery',   text: 'We respect deadlines. Transparent timelines with milestone updates.' },
  { icon: <Award size={20} />,         title: 'Australian Quality', text: 'Local team, local knowledge — no outsourcing, no surprises.' },
]

const miniCards = [
  { icon: '⚡', text: '95+ Lighthouse Score', bg: 'rgba(99,102,241,0.1)', color: '#6366f1' },
  { icon: '🏆', text: 'Top-Rated Agency',      bg: 'rgba(139,92,246,0.1)', color: '#8b5cf6' },
  { icon: '🚀', text: 'Fast Delivery',         bg: 'rgba(6,182,212,0.1)',  color: '#06b6d4' },
]

export default function WhyUs() {
  return (
    <section className="why" id="about">
      <div className="container">
        <div className="why__grid">
          {/* Visual side */}
          <motion.div
            className="why__visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="why__orb why__orb--1" />
            <div className="why__orb why__orb--2" />
            <div className="why__orb why__orb--3" />
            <div className="why__card-stack">
              {miniCards.map((c, i) => (
                <motion.div
                  key={i}
                  className={`why__mini-card why__mini-card--${i + 1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="why__mini-icon" style={{ background: c.bg, color: c.color }}>
                    {c.icon}
                  </div>
                  {c.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              style={{ marginBottom: '2.5rem' }}
            >
              <span className="section-tag">✦ Why Choose Us</span>
              <h2 className="section-heading">
                Built different, <span className="gradient-text">designed to win</span>
              </h2>
              <p className="section-subheading">
                We're not just another agency. We're your growth partners — obsessed with results.
              </p>
            </motion.div>

            <div className="why__items">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  className="why__item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <div className="why__item-icon">{item.icon}</div>
                  <div>
                    <div className="why__item-title">{item.title}</div>
                    <div className="why__item-text">{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
