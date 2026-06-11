import { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const dotRef = useRef(null)
  const trailRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
      }
    }

    let raf
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12
      trail.current.y += (pos.current.y - trail.current.y) * 0.12
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x - 20}px, ${trail.current.y - 20}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        dotRef.current?.classList.add('scale-150')
        trailRef.current?.classList.add('scale-150')
      }
    }
    const onLeave = () => {
      dotRef.current?.classList.remove('scale-150')
      trailRef.current?.classList.remove('scale-150')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-glow" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  )
}

export default CursorGlow
