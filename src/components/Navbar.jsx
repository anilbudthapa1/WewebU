import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Services', 'About', 'Process', 'Work', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = id => {
    setOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="container">
          <div className="navbar__inner">
            <a className="navbar__logo" href="/">WeWebU</a>

            <div className="navbar__links">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l) }}>
                  {l}
                </a>
              ))}
            </div>

            <a className="navbar__cta btn-primary" href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>
              Get a Quote
            </a>

            <button className="navbar__hamburger" onClick={() => setOpen(v => !v)} aria-label="menu">
              <span style={{ transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <div className={`navbar__mobile${open ? ' open' : ''}`}>
        {links.map((l, i) => (
          <motion.a
            key={l}
            href={`#${l.toLowerCase()}`}
            initial={{ opacity: 0, x: 40 }}
            animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: i * 0.07 }}
            onClick={e => { e.preventDefault(); scrollTo(l) }}
          >
            {l}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          className="btn-primary"
          initial={{ opacity: 0 }}
          animate={open ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: links.length * 0.07 }}
          onClick={e => { e.preventDefault(); scrollTo('contact') }}
          style={{ borderRadius: '100px', padding: '0.7rem 2rem' }}
        >
          Get a Quote
        </motion.a>
      </div>
    </>
  )
}
