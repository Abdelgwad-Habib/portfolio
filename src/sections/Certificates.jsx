import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/reactbits/Reveal'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import CertModal from '../components/CertModal'
import { BadgeCheck, Eye } from 'lucide-react'
import { certificates } from '../data'

export default function Certificates() {
  const [viewing, setViewing] = useState(null)
  const featured = certificates.find((c) => c.featured)
  const rest = certificates.filter((c) => !c.featured)

  return (
    <section id="certificates" className="cv-auto relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="07" kicker="--verify --chain-of-trust" title="Certificates" />

        <Reveal>
          <div
            className="beam-border relative mb-6 overflow-hidden rounded-2xl border border-neon/25 bg-gradient-to-br from-neon/[0.08] via-panel to-panel p-7 sm:p-9"
            style={{ '--beam-color': '#00ff9d' }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon/15 blur-3xl animate-pulse-glow" />
            <div className="relative z-10 flex flex-wrap items-center gap-5">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neon text-ink shadow-[0_0_40px_-6px_rgba(0,255,157,0.8)]">
                <BadgeCheck size={26} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">{featured.title}</h3>
                  <span className="rounded-full bg-danger px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                    Distinction
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-mist">
                  {featured.issuer} · {featured.meta}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-neon">{featured.date}</span>
                {featured.file && (
                  <button
                    onClick={() => setViewing(featured)}
                    className="group inline-flex items-center gap-2 rounded-lg border border-neon/40 bg-neon/10 px-4 py-2 font-mono text-xs font-bold text-neon transition-all hover:bg-neon hover:text-ink"
                  >
                    View Certificate
                    <Eye size={13} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.07}>
              <SpotlightCard className="group h-full rounded-xl border border-white/[0.07] bg-panel/60 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-glow/30">
                <div className="relative z-10 flex h-full flex-col">
                  <BadgeCheck size={18} className="text-glow transition-transform duration-300 group-hover:scale-125" />
                  <h4 className="mt-3 font-display text-[15px] font-bold leading-snug text-white">{c.title}</h4>
                  <p className="mt-1.5 font-mono text-xs text-mist">{c.issuer}</p>
                  <p className="mt-2 font-mono text-[11px] text-neon/80">{c.meta}</p>
                  {c.date && <p className="mt-1 font-mono text-[11px] text-white/30">{c.date}</p>}
                  {c.file && (
                    <div className="mt-auto pt-4">
                      <button
                        onClick={() => setViewing(c)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-mist transition-all hover:border-glow/40 hover:text-glow"
                      >
                        View Certificate
                        <Eye size={11} />
                      </button>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>

      <CertModal cert={viewing} onClose={() => setViewing(null)} />
    </section>
  )
}
