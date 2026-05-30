import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Play } from 'lucide-react'
import Scene3D from './Scene3D'

const titleLines = ['We Build', 'Digital', 'Excellence']

export default function Hero() {
  const mouse   = useRef([0, 0])
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // GSAP hero title reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tinner',
        { y: '110%' },
        { y: '0%', duration: 1, ease: 'power4.out', stagger: 0.12, delay: 0.1 }
      )
      gsap.fromTo('.hero__sub',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.55 }
      )
      gsap.fromTo('.hero__buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.75 }
      )
      gsap.fromTo('.hero__trust',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.95 }
      )
      gsap.fromTo('.hero__badge',
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)', delay: 0 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // Mouse tracking for 3D
  useEffect(() => {
    const onMove = e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouse.current = [x, y]
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="bg-grid" />

      {/* 3D Scene */}
      <div className="hero__canvas" style={{ opacity: 0.75 }}>
        <Scene3D mouse={mouse} />
      </div>

      <div className="hero__noise" />

      {/* Radial gradient center glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 60% 50% at 65% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <motion.div className="container" style={{ y: yContent, opacity }}>
        <div className="hero__content">
          <div className="hero__badge" style={{ opacity: 0 }}>
            <span className="hero__badge-dot" />
            Australian Digital Agency
          </div>

          <h1 className="hero__title">
            {titleLines.map((line, i) => (
              <span className="tline" key={i}>
                <span className="tinner">
                  {i === 1
                    ? <><span className="gradient-text">{line}</span></>
                    : line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero__sub" style={{ opacity: 0 }}>
            We craft stunning websites, powerful web apps, and boost your Google Business presence
            — helping Australian businesses stand out and grow online.
          </p>

          <div className="hero__buttons" style={{ opacity: 0 }}>
            <a className="btn-primary magnetic" href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Start Your Project <ArrowRight size={16} />
            </a>
            <a className="btn-ghost magnetic" href="#work"
              onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <Play size={14} /> View Our Work
            </a>
          </div>

          <div className="hero__trust" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '3rem', opacity: 0 }}>
            {['No lock-in contracts', 'Australian owned', '24h response', 'Free quote'].map(t => (
              <span key={t} style={{ fontSize: '0.8rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block', flexShrink: 0 }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="hero__scroll-hint">
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <circle cx="10" cy="9" r="2" fill="currentColor" stroke="none">
            <animate attributeName="cy" from="9" to="20" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
        Scroll
      </div>
    </section>
  )
}
