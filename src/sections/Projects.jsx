import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/reactbits/Reveal'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import { ArrowUpRight, Braces, Database, Network, Radar } from 'lucide-react'
import { projects } from '../data'

const icons = {
  radar: Radar,
  network: Network,
  database: Database,
  braces: Braces,
}

export default function Projects() {
  return (
    <section id="projects" className="cv-auto relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="05" kicker="ls ~/projects --featured" title="Projects" />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const Icon = icons[p.icon] || Radar
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.1} className={p.featured ? 'md:col-span-2' : ''}>
                <SpotlightCard
                  className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-panel/70 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/30 ${
                    p.featured ? 'p-8 sm:p-10' : 'p-7'
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon/[0.07] blur-3xl transition-opacity duration-500 group-hover:bg-neon/[0.12] ${
                      p.featured ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neon transition-all duration-300 group-hover:border-neon/40 group-hover:shadow-[0_0_28px_-6px_rgba(0,255,157,0.6)]">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neon"
                    />
                  </div>

                  <h3
                    className={`relative z-10 mt-5 font-display font-bold text-white ${
                      p.featured ? 'text-2xl sm:text-3xl' : 'text-xl'
                    }`}
                  >
                    {p.title}
                    {p.featured && (
                      <span className="ml-3 inline-block rounded-full border border-danger/40 bg-danger/10 px-2.5 py-1 align-middle font-mono text-[10px] uppercase tracking-widest text-danger">
                        flagship
                      </span>
                    )}
                  </h3>

                  <p className="relative z-10 mt-3 max-w-2xl leading-relaxed text-mist">{p.description}</p>

                  <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip !border-glow/25 !bg-glow/[0.06] !text-cyan-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
