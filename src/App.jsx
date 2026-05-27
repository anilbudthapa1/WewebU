import { useEffect, useRef, useState } from 'react'
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

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useRef(null)

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

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  // Unlock scroll after preloader
  useEffect(() => {
    if (loaded) {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [loaded])

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Preloader onComplete={() => setLoaded(true)} key="preloader" />}
      </AnimatePresence>

      {loaded && (
        <>
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
    </>
  )
}
