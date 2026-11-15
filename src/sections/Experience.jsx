import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/reactbits/Reveal'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import { experience } from '../data'
import { ArrowUpRight, Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="cv-auto relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="03" kicker="./history --traverse" title="Experience" />

        <div className="relative">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-[#ff6b35]/70 via-neon/30 to-transparent sm:left-[9px]" />

          <div className="space-y-10">
            {experience.map((job, i) => {
              const isDashZ = job.isDashZ || job.org.includes('DashZ')

              if (isDashZ) {
                return (
                  <Reveal key={job.title} delay={i * 0.1}>
                    <div className="relative pl-10 sm:pl-14">
                      {/* Fiery DashZ Timeline Marker */}
                      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                        <span className="absolute h-full w-full animate-ping rounded-full bg-[#ff6b35]/40 [animation-duration:2.4s]" />
                        <span className="h-2 w-2 rounded-full bg-[#ff6b35] shadow-[0_0_14px_rgba(255,107,53,0.95)]" />
                      </span>

                      <SpotlightCard className="group relative overflow-hidden rounded-2xl border border-[#ff6b35]/30 bg-gradient-to-br from-[#17181b]/95 via-panel/85 to-[#261814]/40 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b35]/60 hover:shadow-[0_0_50px_-12px_rgba(255,107,53,0.35)] sm:p-7">
                        {/* Top Radiant Flame Accent Line */}
                        <span className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent shadow-[0_0_14px_#ff6b35]" />
                        {/* Ambient Flame Glow in Corner */}
                        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#ff6b35]/15 blur-3xl transition-opacity duration-500 group-hover:bg-[#ff6b35]/25" />

                        <div className="relative z-10">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="font-mono text-xs font-semibold tracking-wider text-[#ff8c42]">
                              {job.period}
                            </p>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ff6b35]/40 bg-[#ff6b35]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#ff8c42] shadow-[0_0_12px_-3px_rgba(255,107,53,0.6)]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
                              Co-Founder Startup
                            </span>
                          </div>

                          <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                            {job.title}
                          </h3>

                          <div className="mt-1 flex flex-wrap items-center justify-between gap-y-2">
                            <p className="flex items-center gap-2 font-mono text-sm text-[#ffb59d]/90">
                              <Briefcase size={14} className="text-[#ff6b35]" />
                              <span>
                                Dash<span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text font-bold text-transparent">Z</span> — AI Career Tech
                              </span>
                            </p>

                            <a
                              href="#dashz"
                              className="group/link inline-flex items-center gap-1 font-mono text-xs font-medium text-[#ff8c42] transition-colors hover:text-[#ffb59d]"
                            >
                              <span>explore section</span>
                              <ArrowUpRight size={13} className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </a>
                          </div>

                          <ul className="mt-4 space-y-2.5">
                            {job.points.map((pt) => (
                              <li key={pt} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                                <span className="mt-1 font-mono text-xs text-[#ff6b35]">▸</span>
                                {pt}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {job.tags.map((t) => (
                              <span
                                key={t}
                                className="chip !border-[#ff6b35]/25 !bg-[#ff6b35]/[0.08] !text-[#ffb59d] transition-colors hover:!border-[#ff6b35]/50 hover:!bg-[#ff6b35]/15"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </SpotlightCard>
                    </div>
                  </Reveal>
                )
              }

              return (
                <Reveal key={job.title} delay={i * 0.1}>
                  <div className="relative pl-10 sm:pl-14">
                    <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-neon/30 [animation-duration:2.5s]" />
                      <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_12px_rgba(0,255,157,0.9)]" />
                    </span>

                    <SpotlightCard className="rounded-2xl border border-white/[0.07] bg-panel/70 p-6 backdrop-blur transition-colors hover:border-neon/25 sm:p-7">
                      <div className="relative z-10">
                        <p className="font-mono text-xs tracking-wider text-neon">{job.period}</p>
                        <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                          {job.title}
                        </h3>
                        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-mist">
                          <Briefcase size={13} className="text-glow" />
                          {job.org}
                          {job.location && (
                            <>
                              <span className="hidden text-white/20 sm:inline">|</span>
                              <span>{job.location}</span>
                            </>
                          )}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {job.points.map((pt) => (
                            <li key={pt} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                              <span className="mt-1 font-mono text-danger">▸</span>
                              {pt}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {job.tags.map((t) => (
                            <span key={t} className="chip !border-white/10 !bg-white/[0.04] !text-mist">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
