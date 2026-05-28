import { useEffect, useRef } from 'react'

export default function Cursor() {
  const innerRef = useRef(null)
  const outerRef = useRef(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const outerPos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const inner = innerRef.current
    const outer = outerRef.current
    if (!inner || !outer) return

    document.documentElement.style.setProperty('cursor', 'none', 'important')
    document.body.style.setProperty('cursor', 'none', 'important')

    let raf

    const onMove = e => { mousePos.current = { x: e.clientX, y: e.clientY } }

    const onClick = e => {
      const ripple = document.createElement('div')
      ripple.className = 'cursor-ripple'
      ripple.style.left = e.clientX + 'px'
      ripple.style.top  = e.clientY + 'px'
      document.body.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove())
    }

    const loop = () => {
      outerPos.current = {
        x: outerPos.current.x + (mousePos.current.x - outerPos.current.x) * 0.28,
        y: outerPos.current.y + (mousePos.current.y - outerPos.current.y) * 0.28,
      }
      inner.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%,-50%)`
      outer.style.transform = `translate(${outerPos.current.x}px, ${outerPos.current.y}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onOver = () => { inner.classList.add('hovered'); outer.classList.add('hovered') }
    const onOut  = () => { inner.classList.remove('hovered'); outer.classList.remove('hovered') }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('click', onClick)
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onOver)
      el.addEventListener('mouseleave', onOut)
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <>
      <div className="cursor-inner" ref={innerRef} />
      <div className="cursor-outer" ref={outerRef} />
    </>
  )
}
