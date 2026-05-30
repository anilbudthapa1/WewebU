import { motion } from 'framer-motion'

const testimonials = [
  {
    stars: 5,
    text: '"WeWebU completely transformed our online presence. Our new website is stunning, loads incredibly fast, and has already tripled our inbound leads in the first month!"',
    name: 'Sarah Mitchell',
    role: 'Director, Mitchell Interiors — Melbourne VIC',
    initials: 'SM',
    grad: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  {
    stars: 5,
    text: '"The Google Business work they did was phenomenal. We went from page 3 to the top 3 local results in under 90 days. Our phone hasn\'t stopped ringing since!"',
    name: 'James Nguyen',
    role: 'Owner, Nguyen Plumbing & Gas — Springvale VIC',
    initials: 'JN',
    grad: 'linear-gradient(135deg, #06b6d4, #6366f1)',
  },
  {
    stars: 5,
    text: '"Incredibly professional and delivered exactly what they promised — on time and on budget. Our SaaS dashboard looks world-class. I recommend WeWebU to every business owner I meet."',
    name: 'Emma Lawson',
    role: 'CEO, Lawson Analytics — Sydney NSW',
    initials: 'EL',
    grad: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
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
          <h2 className="section-heading">
            Businesses that <span className="gradient-text">trust us</span>
          </h2>
          <p className="section-subheading" style={{ margin: '0 auto' }}>
            Real results for real Australian businesses.
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
              <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: t.grad }}>
                  {t.initials}
                </div>
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
