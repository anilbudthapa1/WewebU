import { useEffect, useRef, useState, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import WhatsAppButton from './components/WhatsAppButton'
import StarterWebsite from './pages/StarterWebsite'
import EcommerceStore from './pages/EcommerceStore'
import WebApp from './pages/WebApp'
import GoogleBusiness from './pages/GoogleBusiness'
import LogoBranding from './pages/LogoBranding'

gsap.registerPlugin(ScrollTrigger)

// ── Theme Context ─────────────────────────────────────
export const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

function HomePage({ loaded, setLoaded, glowRef }) {
  return (
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
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [theme, setTheme]   = useState(() => localStorage.getItem('ww-theme') || 'dark')
  const lenisRef   = useRef(null)
  const glowRef    = useRef(null)
  const mousePos   = useRef({ x: 0, y: 0 })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ww-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

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

  useEffect(() => {
    document.body.style.overflow = loaded ? '' : 'hidden'
  }, [loaded])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader onComplete={() => setLoaded(true)} key="preloader" />}
      </AnimatePresence>

      {loaded && (
        <Routes>
          <Route path="/" element={<HomePage loaded={loaded} setLoaded={setLoaded} glowRef={glowRef} />} />
          <Route path="/products/starter-website" element={<StarterWebsite />} />
          <Route path="/products/ecommerce" element={<EcommerceStore />} />
          <Route path="/products/web-app" element={<WebApp />} />
          <Route path="/products/google-business" element={<GoogleBusiness />} />
          <Route path="/products/logo-branding" element={<LogoBranding />} />
        </Routes>
      )}
    </ThemeContext.Provider>
  )
}
