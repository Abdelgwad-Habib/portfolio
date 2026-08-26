import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Dock({ items, className = '' }) {
  const [hovered, setHovered] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-end gap-2 rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-[0_20px_60px_-15px_rgba(0,255,157,0.15)] backdrop-blur-xl sm:gap-3 sm:px-5 ${className}`}
    >
      {items.map((item, i) => (
        <div key={i} className="relative flex flex-col items-center">
          <AnimatePresence>
            {hovered === i && (
              <motion.span
                initial={{ opacity: 0, y: 6, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.85 }}
                transition={{ duration: 0.18 }}
                className="pointer-events-none absolute -top-11 whitespace-nowrap rounded-lg border border-neon/25 bg-ink/95 px-2.5 py-1 font-mono text-[11px] text-neon"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
          <motion.a
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={item.label}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              scale: hovered === null ? 1 : hovered === i ? 1.32 : 0.92,
              y: hovered === i ? -10 : 0,
            }}
            transition={{ type: 'spring', stiffness: 320, damping: 17 }}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors duration-300 sm:h-14 sm:w-14 ${
              hovered === i
                ? 'border-neon/40 bg-neon/10 text-neon'
                : 'border-white/10 bg-white/[0.03] text-mist'
            }`}
          >
            {item.icon}
          </motion.a>
        </div>
      ))}
    </motion.div>
  )
}
