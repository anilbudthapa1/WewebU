import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let raf

    const move = e => { pos.current = { x: e.clientX, y: e.clientY } }

    const loop = () => {
      ring.current = {
        x: ring.current.x + (pos.current.x - ring.current.x) * 0.14,
        y: ring.current.y + (pos.current.y - ring.current.y) * 0.14,
      }
      dot.style.transform  = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%,-50%)`
      ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const over = () => { dot.classList.add('hovered'); ringRef.current.classList.add('hovered') }
    const out  = () => { dot.classList.remove('hovered'); ringRef.current.classList.remove('hovered') }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
