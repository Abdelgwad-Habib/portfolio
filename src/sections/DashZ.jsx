import { motion } from 'framer-motion'
import Reveal from '../components/reactbits/Reveal'
import Magnet from '../components/reactbits/Magnet'
import DotGrid from '../components/reactbits/DotGrid'
import { ArrowUpRight, Mail, Route, Target, Upload } from 'lucide-react'
import { profile } from '../data'

const steps = [
  {
    icon: Upload,
    title: 'Upload Your CV',
    text: 'Instant AI analysis reveals hidden skill gaps and scores your ATS compatibility.',
  },
  {
    icon: Route,
    title: 'Get Your Roadmap',
    text: 'A personalized plan of the exact courses, skills and projects to master.',
  },
  {
    icon: Target,
    title: 'Match With Jobs',
    text: 'Smart-recruiter tech matches you to high-probability live openings.',
  },
  {
    icon: Mail,
    title: 'Apply In One Click',
    text: 'Tailored cover letters generated for every role, instantly.',
  },
]

function GenerateWords({ text, className = '' }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          className="mr-[0.3em] inline-block"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.09 }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}

export default function DashZ() {
  return (
    <section id="dashz" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]">
        <div className="h-full w-full opacity-70 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_35%,transparent_85%)]">
          <DotGrid
            dotSize={3}
            gap={22}
            baseColor="#3b2116"
            activeColor="#ff6b35"
            proximity={120}
            shockRadius={200}
            shockStrength={4}
            inertia
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(50%_70%_at_50%_0%,rgba(255,107,53,0.16),transparent_75%)]" />
        <div className="absolute left-1/2 top-10 h-px w-[min(42rem,85%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#ff8c42]/60 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />

      <div className="relative mx-auto max-w-5xl px-5 pt-10 text-center sm:px-8">
        <p className="relative z-10 font-mono text-sm text-[#ff6b35] sm:text-base">
          <span className="text-mist">[</span> 02 <span className="text-mist">]—</span> ./launch --startup{' '}
          <span className="font-semibold text-[#ffb59d]">--as=co-founder</span>
        </p>

        <Reveal className="relative z-10 mt-8 inline-block">
          <div className="group relative text-left">
            {/* Stacked offset layers echoing DashZ's layered UI */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2.5 translate-y-2 rotate-[3deg] rounded-2xl border border-[#ff6b35]/35 bg-[#ff6b35]/15 transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:translate-y-2.5 group-hover:rotate-[5deg]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-2 translate-y-1.5 -rotate-[2.5deg] rounded-2xl border border-[#ff8c42]/40 bg-gradient-to-br from-[#ff6b35]/20 to-[#ff8c42]/10 transition-transform duration-500 ease-out group-hover:-translate-x-3.5 group-hover:translate-y-2 group-hover:-rotate-[4.5deg]"
            />

            {/* Main Founding Pass card */}
            <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/15 bg-[#17181b] py-3.5 pl-3.5 pr-5 shadow-[0_24px_70px_-20px_rgba(0,0,0,0.9)] sm:gap-5">
              <span
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c42]"
              />

              <img
                src={profile.photo}
                alt="AbdElgwad Habib"
                className="h-16 w-16 shrink-0 rounded-xl object-cover ring-1 ring-white/15 sm:h-20 sm:w-20"
              />

              <div>
                <p className="font-display text-2xl font-bold leading-none tracking-tight sm:text-[26px]">
                  <span className="text-white">Co-</span>
                  <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">
                    Founder
                  </span>
                </p>
                <p className="mt-1.5 font-display text-sm font-semibold text-slate-200 sm:text-base">
                  AbdElgwad Habib
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-mist">
                  DashZ · AI career mentor
                </p>
              </div>

              {/* Perforated ticket stub */}
              <div className="relative ml-1 hidden shrink-0 flex-col items-center justify-center self-stretch border-l border-dashed border-white/15 pl-4 text-center sm:flex">
                <span
                  aria-hidden="true"
                  className="absolute -left-[6.5px] -top-[20px] h-3 w-3 rounded-full border border-white/15 bg-ink"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-[20px] -left-[6.5px] h-3 w-3 rounded-full border border-white/15 bg-ink"
                />
                <span className="font-display text-lg font-extrabold leading-none tracking-tight text-[#ff6b35]">
                  DZ
                </span>
                <span className="mt-1 font-mono text-[9px] tracking-[0.22em] text-[#ffb59d]/80">
                  01/CORE
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <h2 className="relative z-10 mt-9 font-display text-6xl font-bold tracking-tight text-white sm:text-8xl">
          Dash<span className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] bg-clip-text text-transparent">Z</span>
        </h2>

        <p className="relative z-10 mt-4 font-mono text-sm tracking-wide text-mist sm:text-base">
          <GenerateWords text="your personal, AI-powered career mentor" />
        </p>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="circuit-dash pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px lg:block" />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 0.09}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#17181b]/85 p-5 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b35]/45">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/70 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#ff8c42]/75">
                      node_0{i + 1}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#ff6b35]/30 bg-[#261814] text-[#ff6b35] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{s.text}</p>

                  <span className="mt-4 block h-px w-full bg-gradient-to-r from-[#ff6b35]/60 to-transparent transition-all duration-500 group-hover:from-[#ff8c42]" />
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row">
          <p className="font-mono text-xs text-mist">
            by <span className="font-medium text-[#ffb59d]">DashZ team</span>
          </p>

          <Magnet strength={0.3}>
            <a
              href="https://dashz.dev/"
              target="_blank"
              rel="noreferrer"
              className="beam-border group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#ff8c42]/45 bg-[#17181b] px-8 py-4 font-mono text-sm font-bold text-white transition-shadow hover:shadow-[0_0_55px_-8px_rgba(255,107,53,0.85)] sm:text-base"
              style={{ '--beam-color': '#ff6b35' }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#ff8c42]/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative">visit_dashz.dev</span>
              <ArrowUpRight
                size={18}
                className="relative transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  )
}
