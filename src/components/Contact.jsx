import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('xeedvrqz')

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
              <div className="contact__detail-icon"><Phone size={16} /></div>
              <a href="tel:0421688186">0421 688 186</a>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><Mail size={16} /></div>
              <a href="mailto:contact@wewebu.com.au">contact@wewebu.com.au</a>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><MapPin size={16} /></div>
              5 Eve Ct, Springvale VIC 3171, Australia
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              {['Free Quote', '24h Response', 'No Lock-in Contracts', 'Australian Owned'].map(b => (
                <span key={b} style={{
                  fontSize: '0.78rem', fontWeight: 600, padding: '0.35rem 0.85rem',
                  background: 'rgba(99,102,241,0.07)', border: '1px solid var(--border)',
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
              {state.succeeded ? (
                <div className="form-success">
                  <motion.div
                    className="form-success-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle size={28} />
                  </motion.div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                    Thanks for reaching out. We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Hidden Formspree fields */}
                  <input type="hidden" name="_subject" value="New enquiry from WeWebU website" />
                  {state.errors && state.errors.length > 0 && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.75rem 1rem', marginBottom: '1rem',
                      background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: 'var(--radius)', color: '#ef4444', fontSize: '0.85rem',
                    }}>
                      <AlertCircle size={15} />
                      Something went wrong. Please email us at contact@wewebu.com.au
                    </div>
                  )}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" name="name"
                        required placeholder="e.g. John Smith" />
                      <ValidationError field="name" errors={state.errors}
                        style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem' }} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" name="email" type="email"
                        required placeholder="john@company.com.au" />
                      <ValidationError field="email" errors={state.errors}
                        style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem' }} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service Interested In</label>
                    <select className="form-select" name="service">
                      <option value="">Select a service…</option>
                      <option value="website">Website Design &amp; Development</option>
                      <option value="webapp">Web Application Development</option>
                      <option value="google">Google Business Promotion</option>
                      <option value="logo">Logo &amp; Brand Identity</option>
                      <option value="seo">Monthly SEO &amp; Maintenance</option>
                      <option value="other">Other / Not Sure Yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tell us about your project *</label>
                    <textarea className="form-textarea" name="message"
                      required
                      placeholder="What do you need? What's your timeline and budget range?" />
                    <ValidationError field="message" errors={state.errors}
                      style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem' }} />
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    By submitting this form you agree to our{' '}
                    <span style={{ color: 'var(--primary)' }}>Privacy Policy</span>.
                    Your information is collected under the Privacy Act 1988 (Cth) and used only to respond to your enquiry.
                  </p>
                  <button className="form-submit" type="submit" disabled={state.submitting}>
                    {state.submitting ? (
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
    </section>
  )
}
