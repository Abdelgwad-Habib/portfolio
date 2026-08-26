import { useEffect, useRef } from 'react'

export default function ClickSpark({
  sparkColor = '#00ff9d',
  sparkSize = 10,
  sparkRadius = 26,
  sparkCount = 8,
  duration = 450,
}) {
  const canvasRef = useRef(null)
  const sparksRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const easeOut = (t) => t * (2 - t)

    const loop = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      sparksRef.current = sparksRef.current.filter((s) => t - s.startTime < duration)
      for (const s of sparksRef.current) {
        const prog = (t - s.startTime) / duration
        const eased = easeOut(prog)
        const dist = eased * sparkRadius
        const len = sparkSize * (1 - eased)
        ctx.strokeStyle = sparkColor
        ctx.lineWidth = 2
        ctx.globalAlpha = 1 - prog
        ctx.beginPath()
        ctx.moveTo(s.x + Math.cos(s.angle) * dist, s.y + Math.sin(s.angle) * dist)
        ctx.lineTo(s.x + Math.cos(s.angle) * (dist + len), s.y + Math.sin(s.angle) * (dist + len))
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      if (sparksRef.current.length) {
        rafRef.current = requestAnimationFrame(loop)
      } else {
        rafRef.current = null
      }
    }

    const onClick = (e) => {
      sparksRef.current.push(
        ...Array.from({ length: sparkCount }, (_, i) => ({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / sparkCount,
          startTime: performance.now(),
        }))
      )
      if (!rafRef.current) rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true" />
}
