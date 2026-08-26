import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'darb', href: '#darb' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'activities', href: '#activities' },
  { label: 'certs', href: '#certificates' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-38% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{ scaleX: progress }}
        className="relative h-[2px] origin-left bg-gradient-to-r from-neon via-glow to-fuchsia-400"
      />

      <nav
        className={`border-b backdrop-blur-xl transition-colors duration-300 ${
          scrolled ? 'border-white/[0.08] bg-ink/85' : 'border-transparent bg-ink/40'
        }`}
      >
        <div className="mx-auto flex h-11 max-w-6xl items-center px-4 font-mono text-[12px] sm:px-6">
          <a href="#top" className="mr-5 flex shrink-0 items-center gap-1">
            <span className="bg-neon px-1.5 py-0.5 font-bold leading-none text-ink">AGH</span>
            <span className="hidden text-mist sm:inline">~/portfolio</span>
            <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-px animate-blink bg-neon" />
          </a>

          <div className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
            {links.map((l, i) => {
              const isActive = active === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`group rounded px-2 py-1 transition-colors duration-200 ${
                    isActive ? 'text-neon' : 'text-mist hover:text-slate-100'
                  }`}
                >
                  {isActive && <span className="text-neon/60">[</span>}
                  {!isActive && <span className="text-white/15 group-hover:text-glow/50">[</span>}
                  <span className={isActive ? '' : 'mx-0'}>0{i + 1}:</span>
                  {l.label}
                  {isActive ? (
                    <span className="text-neon/60">]</span>
                  ) : (
                    <span className="text-white/15 group-hover:text-glow/50">]</span>
                  )}
                </a>
              )
            })}
          </div>

          <div className="ml-auto flex items-center gap-3 md:ml-0">
            <a
              href="#contact"
              className={`hidden transition-colors md:inline-block ${
                active === 'contact' ? 'text-neon' : 'text-mist hover:text-neon'
              }`}
            >
              ./hire_me<span className="animate-blink text-neon">_</span>
            </a>
            <button
              className="text-mist transition-colors hover:text-white md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="overflow-hidden border-t border-white/[0.07] bg-ink/95 md:hidden"
            >
              <div className="flex flex-col gap-0.5 px-5 py-3 font-mono text-[13px]">
                {links.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded px-2 py-2 transition-colors ${
                      active === l.href.slice(1)
                        ? 'bg-neon/10 text-neon'
                        : 'text-mist hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-danger">$</span>
                    <span className="text-neon/50">cd 0{i + 1}:</span>
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded px-2 py-2 text-neon"
                >
                  $ ./hire_me<span className="animate-blink">_</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
