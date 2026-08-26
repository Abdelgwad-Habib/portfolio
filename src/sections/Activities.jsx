import Reveal from '../components/reactbits/Reveal'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import CountUp from '../components/reactbits/CountUp'
import SectionHeading from '../components/SectionHeading'
import { Mic, Timer, Trophy, Zap } from 'lucide-react'

export default function Activities() {
  return (
    <section id="activities" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="06" kicker="./compete --extracurricular" title="Extracurricular Activities & Competitions" />

        <Reveal>
          <SpotlightCard className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-panel/70 backdrop-blur transition-colors hover:border-neon/25">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/70 to-transparent" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon/[0.07] blur-3xl" />

            <div className="relative z-10 p-7 sm:p-10">
              <div className="mt-10 space-y-8">
                <div>
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-neon/30 bg-white/[0.04] text-neon shadow-[0_0_36px_-8px_rgba(0,255,157,0.6)]">
                        <Trophy size={26} strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="font-mono text-xs tracking-wider text-mist">hackathon</p>
                        <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                          AppOut
                          <span className="ml-3 inline-block rounded-full border border-neon/40 bg-neon/10 px-3 py-1 align-middle font-mono text-[11px] font-bold uppercase tracking-widest text-neon">
                            Top 10 Finalist
                          </span>
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 lg:text-right">
                      <p className="font-mono text-xs text-mist">result</p>
                      <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                        <CountUp to={10} prefix="" className="text-neon neon-glow" />
                        <span className="text-[0.5em] text-mist"> / 120+</span>
                      </p>
                      <p className="font-mono text-xs text-mist">finalist ranking</p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    <li className="flex gap-3 leading-relaxed text-slate-300">
                      <Trophy size={15} className="mt-1 shrink-0 text-neon" />
                      <span>
                        Secured a <strong className="text-white">Top 10 Finalist</strong> spot out of{' '}
                        <strong className="text-white">120+ competing teams</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3 leading-relaxed text-slate-300">
                      <Zap size={15} className="mt-1 shrink-0 text-glow" />
                      <span>
                        Prototyped and delivered a{' '}
                        <strong className="text-white">functional MVP within 24 hours</strong> using agile rapid
                        development methodologies.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-dashed border-white/[0.08] pt-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-glow/30 bg-white/[0.04] text-glow shadow-[0_0_36px_-8px_rgba(34,211,238,0.5)]">
                        <Mic size={26} strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="font-mono text-xs tracking-wider text-mist">competition · festival</p>
                        <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                          Ibda’a Festival Competition
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 lg:text-right">
                      <p className="font-mono text-xs text-mist">build window</p>
                      <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                        <CountUp to={48} suffix="h" className="text-glow" />
                      </p>
                      <p className="font-mono text-xs text-mist">hackathon environment</p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    <li className="flex gap-3 leading-relaxed text-slate-300">
                      <Timer size={15} className="mt-1 shrink-0 text-glow" />
                      <span>
                        Built a <strong className="text-white">working system under a 48-hour hackathon environment</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3 leading-relaxed text-slate-300">
                      <Mic size={15} className="mt-1 shrink-0 text-glow" />
                      <span>
                        Presented the <strong className="text-white">technical architecture</strong> directly to the judging panel.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}
