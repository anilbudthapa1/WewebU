import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Paintbrush, Code2, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  { icon: <MessageSquare size={24} />, title: 'Discovery',     desc: 'We dive deep into your goals, audience, and competitive landscape to shape a winning strategy.' },
  { icon: <Lightbulb size={24} />,     title: 'Strategy',      desc: 'Crafting a tailored roadmap — architecture, tech stack, timeline, and KPIs aligned to your vision.' },
  { icon: <Paintbrush size={24} />,    title: 'Design',        desc: 'Pixel-perfect UI/UX designs that delight users and reflect your brand identity.' },
  { icon: <Code2 size={24} />,         title: 'Development',   desc: 'Clean, scalable code. Every feature built with performance and accessibility in mind.' },
  { icon: <Rocket size={24} />,        title: 'Launch',        desc: 'Rigorous QA, staging review, then a smooth deployment. Zero downtime, maximum impact.' },
  { icon: <BarChart3 size={24} />,     title: 'Grow & Optimise', desc: 'Post-launch analytics, A/B testing, and iterative improvements to keep you ahead.' },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <span className="section-tag">✦ How We Work</span>
          <h2 className="section-heading">
            Our <span className="gradient-text">proven process</span>
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto' }}>
            A clear, collaborative 6-step framework that takes your idea from concept to a live, high-performing digital product.
          </p>
        </motion.div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="process__step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="process__num">Step {String(i + 1).padStart(2, '0')}</div>
              <div className="process__icon">{step.icon}</div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
