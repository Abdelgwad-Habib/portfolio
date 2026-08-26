import ScrambleText from './reactbits/ScrambleText'
import Reveal from './reactbits/Reveal'

export default function SectionHeading({ index, kicker, title, className = '' }) {
  return (
    <Reveal className={`mb-12 sm:mb-16 ${className}`}>
      <p className="mb-3 font-mono text-sm text-neon">
        <span className="text-mist">[</span> {index} <span className="text-mist">]—</span> {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
        <ScrambleText text={title} />
      </h2>
    </Reveal>
  )
}
