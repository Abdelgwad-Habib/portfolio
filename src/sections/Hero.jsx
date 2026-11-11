import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Aurora from '../components/reactbits/Aurora'
import MatrixRain from '../components/reactbits/MatrixRain'
import SplitText from '../components/reactbits/SplitText'
import RotatingText from '../components/reactbits/RotatingText'
import Magnet from '../components/reactbits/Magnet'
import TiltedCard from '../components/reactbits/TiltedCard'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile, roles } from '../data'

function ProfileCard() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <div className="group/card relative mx-auto w-full max-w-[21rem] select-none">

      {/* ── floating sticker badges at playful angles ── */}
      <div
        aria-hidden="true"
        className="absolute -left-8 top-8 z-30 rotate-[-14deg] rounded-xl bg-neon px-3 py-1.5 font-display text-xs font-bold tracking-wide text-ink shadow-lg transition-transform duration-500 group-hover/card:rotate-[-8deg] group-hover/card:scale-110"
      >
        Open to work
      </div>
      <div
        aria-hidden="true"
        className="absolute -right-6 top-20 z-30 rotate-[11deg] rounded-xl bg-fuchsia-500 px-3 py-1.5 font-display text-xs font-bold tracking-wide text-white shadow-lg transition-transform duration-500 group-hover/card:rotate-[5deg] group-hover/card:scale-110"
      >
        Pentester
      </div>
      <div
        aria-hidden="true"
        className="absolute -right-4 bottom-24 z-30 rotate-[7deg] rounded-xl bg-glow px-3 py-1.5 font-display text-xs font-bold tracking-wide text-ink shadow-lg transition-transform duration-500 group-hover/card:rotate-[2deg] group-hover/card:scale-110"
      >
        CTF Player
      </div>

      {/* ── washi tape strips ── */}
      <div
        aria-hidden="true"
        className="absolute -left-3 top-5 z-20 h-6 w-20 rotate-[-28deg] rounded-sm bg-yellow-300/80 mix-blend-screen shadow-sm"
        style={{ maskImage: 'linear-gradient(90deg, transparent 2%, black 8%, black 92%, transparent 98%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-2 top-3 z-20 h-6 w-16 rotate-[22deg] rounded-sm bg-rose-400/80 mix-blend-screen shadow-sm"
        style={{ maskImage: 'linear-gradient(90deg, transparent 2%, black 8%, black 92%, transparent 98%)' }}
      />

      {/* ── handwritten annotation with arrow ── */}
      <div aria-hidden="true" className="absolute -left-24 bottom-36 z-30 hidden lg:block">
        <p className="handwriting rotate-[-6deg] text-xl text-neon">
          that's me! →
        </p>
      </div>

      <TiltedCard maxTilt={6} scale={1.02}>
        {/* Polaroid-style frame */}
        <div className="relative z-10 rotate-[2.5deg] rounded-md bg-white/[0.92] p-2.5 pb-16 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7),0_8px_24px_-8px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover/card:rotate-[0deg]">
          {/* photo */}
          <div className="relative overflow-hidden rounded-sm">
            {imgOk ? (
              <img
                src={profile.photo}
                alt="AbdElgwad Habib"
                onError={() => setImgOk(false)}
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-slate-800 to-slate-900">
                <span className="font-display text-8xl font-bold text-slate-500">AH</span>
                <span className="font-mono text-xs text-slate-500">&lt; save your photo as /profile.jpg &gt;</span>
              </div>
            )}

            {/* subtle warm vignette */}
            <div className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_0_60px_rgba(0,0,0,0.25)]" />
          </div>

          {/* polaroid bottom text area — handwritten feel */}
          <div className="absolute inset-x-0 bottom-0 px-4 py-3 text-center">
            <p className="handwriting text-lg text-slate-800">
              {profile.name}
            </p>
            <p className="handwriting mt-0.5 text-xs text-slate-500">
              {profile.role} · {profile.location}
            </p>
          </div>

          {/* little doodle star */}
          <svg
            aria-hidden="true"
            className="absolute bottom-12 right-5 h-5 w-5 text-yellow-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <svg
            aria-hidden="true"
            className="absolute bottom-14 right-10 h-3 w-3 text-yellow-300/70"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
          </svg>
        </div>
      </TiltedCard>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <Aurora />
      <MatrixRain className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_78%)]" opacity={0.13} />
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-36">
        <div>
          <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl [perspective:800px]">
            <SplitText text="ABDELGWAD" delay={0.45} />
            <br />
            <SplitText text="HABIB" delay={0.85} charClassName="gradient-text" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="mt-6 font-mono text-lg text-slate-300 sm:text-xl"
          >
            <span className="text-neon">$</span> I{' '}
            <RotatingText
              texts={roles}
              className="font-semibold text-neon"
              staggerFrom="last"
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-5 max-w-xl leading-relaxed text-mist"
          >
            CS student at Tanta University specializing in offensive security.
            OWASP Top 10, Linux internals and 120+ algorithm problems deep —
            turning curiosity into exploits and defenses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnet strength={0.28}>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-neon px-6 py-3.5 font-mono text-sm font-bold text-ink transition-shadow hover:shadow-[0_0_44px_-8px_rgba(0,255,157,0.75)]"
              >
                view_projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnet>
            <Magnet strength={0.22}>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-mono text-sm text-slate-200 backdrop-blur transition-colors hover:border-neon/40 hover:text-neon"
              >
                <Download size={16} />
                download_cv.pdf
              </a>
            </Magnet>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2.5 text-mist transition-all hover:bg-white/5 hover:text-white"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2.5 text-mist transition-all hover:bg-white/5 hover:text-glow"
              >
                <LinkedinIcon size={19} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  )
}
