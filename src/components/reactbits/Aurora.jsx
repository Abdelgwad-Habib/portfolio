import { motion } from 'framer-motion'

export default function Aurora({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute -top-48 left-1/3 h-[44rem] w-[44rem] rounded-full bg-neon/15 blur-[140px]"
        animate={{ x: ['-18%', '6%', '-24%', '-18%'], opacity: [0.5, 0.9, 0.6, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 -left-48 h-[34rem] w-[34rem] rounded-full bg-glow/10 blur-[130px]"
        animate={{ y: [0, 70, -20, 0], opacity: [0.4, 0.75, 0.5, 0.4] }}
        transition={{ duration: 21, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-48 bottom-[-10%] h-[38rem] w-[38rem] rounded-full bg-danger/10 blur-[140px]"
        animate={{ y: [0, -60, 30, 0], opacity: [0.35, 0.6, 0.45, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
