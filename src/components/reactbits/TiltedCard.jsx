import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltedCard({ children, className = '', maxTilt = 10, scale = 1.02 }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [maxTilt, -maxTilt]), { stiffness: 220, damping: 22 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-maxTilt, maxTilt]), { stiffness: 220, damping: 22 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const onLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`[perspective:1100px] ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
