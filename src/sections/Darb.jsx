import { motion } from 'framer-motion'
import Reveal from '../components/reactbits/Reveal'
import Magnet from '../components/reactbits/Magnet'
import DotGrid from '../components/reactbits/DotGrid'
import { ArrowUpRight, Mail, Rocket, Route, Target, Upload } from 'lucide-react'
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

export default function Darb() {
  return (
    <section id="darb" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]">
        <div className="h-full w-full opacity-70 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_35%,transparent_85%)]">
          <DotGrid
            dotSize={3}
            gap={22}
            baseColor="#332b55"
            activeColor="#a78bfa"
            proximity={120}
            shockRadius={200}
            shockStrength={4}
            inertia
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[radial-gradient(50%_70%_at_50%_0%,rgba(139,92,246,0.15),transparent_75%)]" />
        <div className="absolute left-1/2 top-10 h-px w-[min(42rem,85%)] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />

      <div className="relative mx-auto max-w-5xl px-5 pt-10 text-center sm:px-8">
        <p className="relative z-10 font-mono text-sm text-violet-300">
          <span className="text-mist">[</span> 02 <span className="text-mist">]—</span> ./launch --startup{' '}
          <span className="text-violet-200">--as=co-founder</span>
        </p>

        <Reveal className="relative z-10 mt-7 inline-block">
          <div className="flex items-center gap-4 rounded-xl border border-violet-400/25 bg-[#0c0916]/90 py-3 pl-4 pr-6 text-left shadow-[0_20px_60px_-20px_rgba(167,139,250,0.45)] backdrop-blur sm:gap-5">
            <img
              src={profile.photo}
              alt="AbdElgwad Habib"
              className="h-16 w-16 shrink-0 rounded-lg object-cover ring-1 ring-violet-400/50 sm:h-20 sm:w-20"
            />
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-violet-300 sm:text-[11px]">
                Co-Founder
              </p>
              <p className="mt-1 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                AbdElgwad Habib
              </p>
              <p className="mt-1 font-mono text-[11px] text-mist">of Darb-AI — AI-powered career mentor</p>
            </div>
            <Rocket size={26} className="ml-2 hidden shrink-0 animate-float text-violet-300 sm:block" />
          </div>
        </Reveal>

        <h2 className="relative z-10 mt-9 font-display text-6xl font-bold tracking-tight text-white sm:text-8xl">
          DARB<span className="text-violet-400">-AI</span>
        </h2>

        <p className="relative z-10 mt-4 font-mono text-sm tracking-wide text-mist sm:text-base">
          <GenerateWords text="your personal, AI-powered career mentor" />
        </p>

        <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <span className="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
            AI · Career Tech
          </span>
          <span className="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
            Product · AI Pipeline
          </span>
        </div>

        <div className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="circuit-dash pointer-events-none absolute left-[12%] right-[12%] top-1/2 hidden h-px lg:block" />

          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 0.09}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b0817]/85 p-5 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-violet-300/60">
                      node_0{i + 1}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/25 bg-[#151027] text-violet-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mist">{s.text}</p>

                  <span className="mt-4 block h-px w-full bg-gradient-to-r from-violet-400/50 to-transparent transition-all duration-500 group-hover:from-fuchsia-400/80" />
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row">
          <p className="font-mono text-xs text-mist">
            <span className="text-violet-300">co-founded by AbdElgwad Habib</span> — built end-to-end, from product vision to AI pipeline
          </p>

          <Magnet strength={0.3}>
            <a
              href="https://darb-ai.app/"
              target="_blank"
              rel="noreferrer"
              className="beam-border group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-violet-300/40 bg-[#0d0a18] px-8 py-4 font-mono text-sm font-bold text-white transition-shadow hover:shadow-[0_0_55px_-8px_rgba(192,132,252,0.9)] sm:text-base"
              style={{ '--beam-color': '#e9d5ff' }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-400/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative">visit_darb-ai.app</span>
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
