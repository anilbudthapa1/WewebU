import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [done, setDone]   = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with fetch() to Formspree / your API
    await new Promise(r => setTimeout(r, 1600))
    setLoading(false)
    setDone(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact__grid">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">✦ Contact Us</span>
            <h2 className="contact__info-title">
              Ready to <span className="gradient-text">build something great?</span>
            </h2>
            <p className="contact__info-text">
              Tell us about your project and we'll get back to you within 24 hours with a free, no-obligation quote.
            </p>
            <div className="contact__detail">
              <div className="contact__detail-icon"><Mail size={16} /></div>
              hello@wewebu.com.au
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><Phone size={16} /></div>
              +61 XXX XXX XXX
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><MapPin size={16} /></div>
              Australia-wide · Remote-first
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              {['Free Quote', '24h Response', 'No Contracts', 'Aussie Team'].map(b => (
                <span key={b} style={{
                  fontSize: '0.78rem', fontWeight: 600, padding: '0.35rem 0.85rem',
                  background: 'rgba(99,102,241,0.08)', border: '1px solid var(--border)',
                  borderRadius: '100px', color: 'var(--primary)'
                }}>{b}</span>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="contact__form">
              {done ? (
                <div className="form-success">
                  <div className="form-success-icon"><CheckCircle size={28} /></div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input className="form-input" name="name" value={form.name}
                        onChange={handle} required placeholder="John Smith" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input className="form-input" name="email" type="email" value={form.email}
                        onChange={handle} required placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Interested In</label>
                    <select className="form-select" name="service" value={form.service} onChange={handle}>
                      <option value="">Select a service…</option>
                      <option value="website">Website Design & Development</option>
                      <option value="webapp">Web Application Development</option>
                      <option value="google">Google Business Promotion</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tell us about your project</label>
                    <textarea className="form-textarea" name="message" value={form.message}
                      onChange={handle} required
                      placeholder="What are you trying to achieve? Timeline? Budget range?" />
                  </div>
                  <button className="form-submit" type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}>
                          <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
                          <path d="M9 2a7 7 0 0 1 7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}
