import { useRef } from 'react'

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 255, 157, 0.10)',
}) {
  const ref = useRef(null)

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      style={{ '--spotlight-color': spotlightColor }}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  )
}
