import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/reactbits/Reveal'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import { experience } from '../data'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="cv-auto relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="03" kicker="./history --traverse" title="Experience" />

        <div className="relative">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-neon/60 via-neon/20 to-transparent sm:left-[9px]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
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
                        <span className="hidden text-white/20 sm:inline">|</span>
                        <span>{job.location}</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
