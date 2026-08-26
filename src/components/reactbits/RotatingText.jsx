import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function RotatingText({
  texts,
  interval = 2600,
  className = '',
  staggerFrom = 'last',
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % texts.length), interval)
    return () => clearInterval(id)
  }, [texts, interval])

  const chars = texts[index].split('')
  const order = staggerFrom === 'first' ? chars.map((_, i) => i) : chars.map((_, i) => chars.length - 1 - i)

  return (
    <span
      className={`relative inline-grid overflow-hidden align-bottom ${className}`}
      style={{ gridTemplateAreas: '"overlap"' }}
      aria-live="polite"
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          style={{ gridArea: 'overlap' }}
          className="inline-flex"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
            hidden: {},
          }}
        >
          {chars.map((ch, i) => (
            <motion.span
              key={`${index}-${i}`}
              className="inline-block"
              custom={order[i]}
              variants={{
                hidden: { y: '110%', opacity: 0, transition: { duration: 0.25 } },
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
