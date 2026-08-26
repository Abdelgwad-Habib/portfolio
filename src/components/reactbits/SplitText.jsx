import { motion } from 'framer-motion'

export default function SplitText({
  text,
  className = '',
  charClassName = '',
  delay = 0,
  stagger = 0.028,
  as: Tag = 'span',
}) {
  const words = text.split(' ')
  let index = 0

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((ch, ci) => {
            const i = index++
            return (
              <motion.span
                key={ci}
                className={`inline-block will-change-transform ${charClassName}`}
                initial={{ y: '115%', opacity: 0, rotateX: -75 }}
                animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.75, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch}
              </motion.span>
            )
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}
