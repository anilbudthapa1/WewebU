import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EJS_SERVICE        = 'service_2uddodr'
const EJS_AUTOREPLY      = 'template_9j1zjtu'   // → auto-reply to customer
const EJS_NOTIFY         = 'template_bwr8kyj'   // → notification to contact@wewebu.com.au
const EJS_PUBLIC_KEY     = 'aDjVTgIVu0OH41C9Z'

const SERVICE_OPTIONS = [
  'Website Design & Development',
  'Web Application Development',
  'Google Business Promotion',
  'Logo & Brand Identity',
  'Monthly SEO & Maintenance',
  'Other / Not Sure Yet',
]

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus]     = useState('idle')
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef                 = useRef(null)

  useEffect(() => {
    const handler = e => { if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async e => {
    e.preventDefault()
    setStatus('loading')

    const vars = {
      // notification template variables ({{name}}, {{email}}, {{service}}, {{message}})
      name:     form.name,
      email:    form.email,
      service:  form.service || 'Not specified',
      message:  form.message,
      // auto-reply template variables ({{to_name}}, {{to_email}})
      to_name:  form.name,
      to_email: form.email,
      reply_to: form.email,
    }

    try {
      // Fire both in parallel — auto-reply to customer + notification to WeWebU
      await Promise.all([
        emailjs.send(EJS_SERVICE, EJS_AUTOREPLY, vars, EJS_PUBLIC_KEY),
        emailjs.send(EJS_SERVICE, EJS_NOTIFY,    vars, EJS_PUBLIC_KEY),
      ])
      setStatus('success')
    } catch {
      setStatus('error')
    }
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
              {status === 'success' ? (
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
                    Thanks {form.name ? form.name.split(' ')[0] : ''}! A confirmation email has been sent to <strong>{form.email}</strong>. We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  {status === 'error' && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.75rem 1rem', marginBottom: '1rem',
                      background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: 'var(--radius)', color: '#ef4444', fontSize: '0.85rem',
                    }}>
                      <AlertCircle size={15} />
                      Something went wrong. Please email us at{' '}
                      <a href="mailto:contact@wewebu.com.au" style={{ color: '#ef4444' }}>contact@wewebu.com.au</a>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" name="name" value={form.name}
                        onChange={handle} required placeholder="e.g. John Smith" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" name="email" type="email" value={form.email}
                        onChange={handle} required placeholder="john@company.com.au" />
                    </div>
                  </div>

                  <div className="form-group" ref={dropRef} style={{ position: 'relative' }}>
                    <label className="form-label">Service Interested In</label>
                    <div
                      className="form-select"
                      onClick={() => setDropOpen(o => !o)}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}
                    >
                      <span style={{ color: form.service ? 'var(--text)' : 'var(--muted)' }}>
                        {form.service || 'Select a service…'}
                      </span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: 'transform 0.2s', transform: dropOpen ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>
                        <path d="M2 4.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {dropOpen && (
                      <div style={{
                        position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
                        background: 'var(--card)', border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)', zIndex: 500, overflow: 'hidden',
                        boxShadow: '0 8px 24px var(--shadow)',
                      }}>
                        {SERVICE_OPTIONS.map(opt => (
                          <div
                            key={opt}
                            onClick={() => { setForm(f => ({ ...f, service: opt })); setDropOpen(false) }}
                            style={{
                              padding: '0.75rem 1rem', fontSize: '0.9rem',
                              color: form.service === opt ? 'var(--primary)' : 'var(--text)',
                              background: form.service === opt ? 'rgba(99,102,241,0.06)' : 'transparent',
                              transition: 'background 0.15s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
                            onMouseLeave={e => e.currentTarget.style.background = form.service === opt ? 'rgba(99,102,241,0.06)' : 'transparent'}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tell us about your project *</label>
                    <textarea className="form-textarea" name="message" value={form.message}
                      onChange={handle} required
                      placeholder="What do you need? What's your timeline and budget range?" />
                  </div>

                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                    By submitting this form you agree to our{' '}
                    <span style={{ color: 'var(--primary)' }}>Privacy Policy</span>.
                    Your information is collected under the Privacy Act 1988 (Cth) and used only to respond to your enquiry.
                  </p>

                  <button className="form-submit" type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? (
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
