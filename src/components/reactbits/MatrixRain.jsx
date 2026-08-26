import { useEffect, useRef } from 'react'

const CHARS = 'アカサタナハマヤラワ0123456789ABCDEF<>/{}[]$#*+=;:'

export default function MatrixRain({ className = '', opacity = 0.14 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    const fontSize = 16
    let drops = []
    let raf
    let last = 0
    let running = true

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const cols = Math.ceil(canvas.width / fontSize)
      drops = Array.from({ length: cols }, () => Math.random() * -60)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = (t) => {
      raf = requestAnimationFrame(draw)
      if (!running) return
      if (t - last < 55) return
      last = t
      ctx.fillStyle = 'rgba(5, 7, 11, 0.14)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`
      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillStyle = Math.random() > 0.976 ? 'rgba(230, 255, 244, 0.95)' : 'rgba(0, 255, 157, 0.6)'
        ctx.fillText(ch, x, y)
        if (y > canvas.height && Math.random() > 0.976) drops[i] = 0
        drops[i]++
      }
    }
    raf = requestAnimationFrame(draw)

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
    })
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return <canvas ref={ref} className={className} style={{ opacity }} aria-hidden="true" />
}
