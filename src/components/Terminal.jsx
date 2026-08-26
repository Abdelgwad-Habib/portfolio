import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const SCRIPT = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'abdelgwad-habib — penetration tester' },
  { type: 'cmd', text: 'cat mission.txt' },
  { type: 'out', text: 'break it. report it. secure it. repeat.' },
  { type: 'cmd', text: 'nmap -sV --top-ports 100 target.thm' },
  { type: 'out', text: '22/tcp   open  ssh     OpenSSH 8.9\n80/tcp   open  http    nginx\n443/tcp  open  https   nginx' },
  { type: 'cmd', text: './phoenix --enum --zonexfer lab.local' },
  { type: 'out', text: '[+] forward lookup ......... OK\n[+] reverse lookup ......... OK\n[!] zone transfer .......... denied' },
  { type: 'cmd', text: 'sudo ./explore --owasp top-10' },
  { type: 'out', text: 'access granted — scroll down, visitor_ ' },
]

export default function Terminal({ className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [done, setDone] = useState([])
  const [current, setCurrent] = useState('')
  const [entry, setEntry] = useState(0)

  useEffect(() => {
    if (!inView || entry >= SCRIPT.length) return
    const line = SCRIPT[entry]

    if (line.type === 'cmd') {
      if (current.length < line.text.length) {
        const t = setTimeout(
          () => setCurrent(line.text.slice(0, current.length + 1)),
          26 + Math.random() * 46
        )
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setDone((d) => [...d, { type: 'cmd', text: current }])
        setCurrent('')
        setEntry((i) => i + 1)
      }, 320)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDone((d) => [...d, line])
      setEntry((i) => i + 1)
    }, 260)
    return () => clearTimeout(t)
  }, [inView, current, entry])

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#070b10]/90 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-mist">abdelgwad@kali: ~/portfolio</span>
        <span className="ml-auto font-mono text-[10px] text-neon/60">bash — 80×24</span>
      </div>
      <div className="min-h-[320px] p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {done.map((line, i) =>
          line.type === 'cmd' ? (
            <p key={i} className="whitespace-pre-wrap">
              <span className="text-danger">~</span> <span className="text-neon">$</span>{' '}
              <span className="text-slate-100">{line.text}</span>
            </p>
          ) : (
            <p key={i} className="mb-2 whitespace-pre-line text-mist">
              {line.text}
            </p>
          )
        )}
        {entry < SCRIPT.length && (
          <p className="whitespace-pre-wrap">
            {SCRIPT[entry].type === 'cmd' && (
              <>
                <span className="text-danger">~</span> <span className="text-neon">$</span>{' '}
              </>
            )}
            <span className="text-slate-100">{current}</span>
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-neon" />
          </p>
        )}
      </div>
    </div>
  )
}
