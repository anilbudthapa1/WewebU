import { useEffect, useRef, useState, createContext, useContext } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { AnimatePresence } from 'framer-motion'

import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

gsap.registerPlugin(ScrollTrigger)

// ── Theme Context ─────────────────────────────────────
export const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [theme, setTheme]   = useState(() => localStorage.getItem('ww-theme') || 'dark')
  const lenisRef   = useRef(null)
  const glowRef    = useRef(null)
  const mousePos   = useRef({ x: 0, y: 0 })

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ww-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const raf = time => { lenis.raf(time); requestAnimationFrame(raf) }
    const rafId = requestAnimationFrame(raf)
    gsap.ticker.lagSmoothing(0)
    return () => { cancelAnimationFrame(rafId); lenis.destroy() }
  }, [])

  // Mouse glow follower
  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return
    let raf
    const move = e => { mousePos.current = { x: e.clientX, y: e.clientY } }
    const loop = () => {
      glow.style.left = mousePos.current.x + 'px'
      glow.style.top  = mousePos.current.y + 'px'
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    window.addEventListener('mousemove', move, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', move) }
  }, [loaded])

  // Lock scroll during preloader
  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
  }, [loaded])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader onComplete={() => setLoaded(true)} key="preloader" />}
      </AnimatePresence>

      {loaded && (
        <>
          <div className="mouse-glow" ref={glowRef} />
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Services />
            <WhyUs />
            <Process />
            <Work />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ThemeContext.Provider>
  )
}
