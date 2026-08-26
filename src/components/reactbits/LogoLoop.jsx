export default function LogoLoop({ items, className = '' }) {
  const doubled = [...items, ...items]
  return (
    <div
      className={`relative overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center gap-4">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-sm text-mist transition-colors hover:border-neon/40 hover:text-neon"
          >
            {item}
            <span className="text-neon/50">//</span>
          </span>
        ))}
      </div>
    </div>
  )
}
