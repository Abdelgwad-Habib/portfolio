import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const GLYPHS = '!<>-_\\/[]{}=+*^?#$01'

export default function ScrambleText({ text, className = '', speed = 26 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [out, setOut] = useState(() => text.replace(/\S/g, '·'))

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const id = setInterval(() => {
      frame++
      const settled = Math.floor(frame / 2)
      setOut(
        text
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            if (i < settled) return ch
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
      )
      if (settled >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [inView, text, speed])

  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  )
}
