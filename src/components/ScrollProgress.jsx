import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? scrollTop / docHeight : 0
      bar.style.width = `${pct * 100}%`
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      style={{ width: '0%', height: '2px', position: 'fixed', top: 0, left: 0, zIndex: 9997,
        background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)' }}
    />
  )
}
