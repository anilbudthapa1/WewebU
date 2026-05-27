import { motion } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    text: '"WeWebU completely transformed our online presence. Our new website has already tripled our lead volume in the first month!"',
    name: 'Sarah Mitchell',
    role: "Owner, Mitchell's Interiors",
    initials: 'SM',
  },
  {
    stars: 5,
    text: '"The Google Business work they did was incredible. We went from page 3 to the top of local search in less than 3 months."',
    name: 'James Nguyen',
    role: 'Director, Nguyen Plumbing Services',
    initials: 'JN',
  },
  {
    stars: 5,
    text: '"Incredibly professional team. They delivered our SaaS dashboard on time, on budget, and it looks stunning. Highly recommend."',
    name: 'Emma Lawson',
    role: 'CEO, Lawson Analytics',
    initials: 'EL',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <span className="section-tag">✦ Testimonials</span>
          <h2 className="section-heading">
            Clients who <span className="gradient-text">love us</span>
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto' }}>
            Don't just take our word for it — here's what our clients say.
          </p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
