import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ArrowUpRight, Check, Copy, Download, X } from 'lucide-react'
import { profile } from '../data'

const links = [
  { id: 'about', num: '01', label: 'About', href: '#about' },
  { id: 'dashz', num: '02', label: 'DashZ', href: '#dashz' },
  { id: 'experience', num: '03', label: 'Experience', href: '#experience' },
  { id: 'projects', num: '04', label: 'Projects', href: '#projects' },
  { id: 'skills', num: '05', label: 'Skills', href: '#skills' },
  { id: 'activities', num: '06', label: 'Activities', href: '#activities' },
  { id: 'certificates', num: '07', label: 'Certs', href: '#certificates' },
]

const allSections = [
  ...links,
  { id: 'contact', num: '08', label: 'Contact', href: '#contact' },
]

function BrandMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <path
        d="M4 18L11.5 4H14L6.5 18H4Z"
        fill="currentColor"
        className="text-white"
      />
      <path
        d="M12.5 18L17 9.5L20 18H17.2L16.3 15.2H13.9L12.5 18Z"
        fill="currentColor"
        className="text-neon"
      />
    </svg>
  )
}

function KineticLabel({ label, isActive }) {
  return (
    <span className="relative block h-[1.15em] overflow-hidden leading-[1.15]">
      <span
        className={`block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full ${
          isActive ? 'text-white' : 'text-slate-300'
        }`}
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className="block text-neon transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full"
      >
        {label}
      </span>
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [active, setActive] = useState('')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.25,
  })
  const needleLeft = useTransform(progress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (window.scrollY < 160) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observed = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-38% 0px -55% 0px' }
    )

    const attachSections = () => {
      for (const s of allSections) {
        if (observed.has(s.id)) continue
        const el = document.getElementById(s.id)
        if (el) {
          observer.observe(el)
          observed.add(s.id)
        }
      }
      return observed.size === allSections.length
    }

    let mutObserver
    if (!attachSections()) {
      mutObserver = new MutationObserver(() => {
        if (attachSections()) mutObserver.disconnect()
      })
      mutObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
      mutObserver?.disconnect()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const activeSection = allSections.find((s) => s.id === active)
  const chapterText = activeSection
    ? `${activeSection.num} · ${activeSection.label.toLowerCase()}`
    : '00 · intro'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between gap-4"
        >
          {/* ── Left: Brand Mark + Live Chapter Telemetry ── */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Back to top"
            >
              <BrandMark />
              <span className="font-display text-sm font-bold tracking-tight text-white">
                AGH
              </span>
            </a>

            <span className="hidden h-3.5 w-px bg-white/15 sm:inline-block" />

            <div className="hidden h-5 items-center overflow-hidden sm:flex">
              <AnimatePresence mode="wait">
                <motion.span
                  key={chapterText}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="font-mono text-[11px] tracking-wider text-neon/90"
                >
                  {chapterText}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* ── Center: Kinetic Indexed Links ── */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative flex items-baseline gap-1.5 px-2.5 py-2 font-display text-[13px] font-medium transition-colors"
                >
                  <span
                    className={`font-mono text-[9px] transition-colors duration-200 ${
                      isActive
                        ? 'text-neon'
                        : 'text-mist/45 group-hover:text-neon'
                    }`}
                  >
                    {item.num}
                  </span>
                  <KineticLabel label={item.label} isActive={isActive} />

                  {isActive && (
                    <motion.span
                      layoutId="nav-ruler-active"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-x-2 -bottom-[11px] z-20 h-[2px] bg-neon"
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* ── Right: Contact CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className={`group hidden items-center gap-1.5 rounded-md border px-3.5 py-1.5 font-mono text-[12px] font-medium transition-all duration-200 sm:inline-flex ${
                active === 'contact'
                  ? 'border-neon bg-neon text-ink'
                  : 'border-white/15 bg-white/[0.02] text-slate-100 hover:border-neon hover:bg-neon hover:text-ink'
              }`}
            >
              <span>let&apos;s talk</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 font-mono text-[11px] text-slate-200 transition-colors hover:border-white/25 lg:hidden"
            >
              {mobileOpen ? (
                <>
                  <X size={13} className="text-neon" />
                  <span>close</span>
                </>
              ) : (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                  <span>index</span>
                </>
              )}
            </button>
          </div>
        </nav>

        {/* ── Bottom Drafting Ruler + Gliding Scroll Needle ── */}
        <div
          aria-hidden="true"
          className="relative h-2.5 w-full select-none border-t border-white/[0.08]"
        >
          {/* Fine millimeter tick pattern */}
          <div
            className="absolute inset-x-0 top-0 h-1.5 opacity-35"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(148,163,184,0.45) 0 1px, transparent 1px 14px)',
            }}
          />
          {/* Major centimeter tick pattern */}
          <div
            className="absolute inset-x-0 top-0 h-2.5 opacity-45"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(255,255,255,0.45) 0 1px, transparent 1px 70px)',
            }}
          />
          {/* Active scroll progress trace */}
          <motion.div
            style={{ scaleX: progress }}
            className="absolute left-0 top-0 h-[1.5px] w-full origin-left bg-gradient-to-r from-neon/60 via-neon to-glow"
          />
          {/* Gliding needle playhead */}
          <motion.div
            style={{ left: needleLeft }}
            className="absolute -top-[3px] h-2.5 w-[2px] -translate-x-1/2 bg-neon shadow-[0_0_8px_rgba(0,255,157,0.9)]"
          />
        </div>
      </div>

      {/* ── Mobile / Tablet Editorial Index Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-white/10 bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {allSections.map((item) => {
                  const isActive = active === item.id
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                        isActive
                          ? 'bg-neon/10 text-white'
                          : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-neon">
                          {item.num}
                        </span>
                        <span className="font-display text-lg font-semibold">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={15}
                        className={isActive ? 'text-neon' : 'text-mist/50'}
                      />
                    </a>
                  )
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/[0.08] pt-4 font-mono text-xs">
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-slate-200 hover:border-neon/50 hover:text-neon"
                >
                  <Download size={13} />
                  cv.pdf
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-slate-200 hover:border-neon/50 hover:text-neon"
                >
                  {copied ? <Check size={13} className="text-neon" /> : <Copy size={13} />}
                  {copied ? 'copied' : 'copy email'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
