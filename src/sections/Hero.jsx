import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Flag, ShieldCheck } from 'lucide-react'
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
    <div className="relative">
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.06, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-6 rounded-[2.5rem] bg-neon/15 blur-3xl"
        aria-hidden="true"
      />

      <TiltedCard maxTilt={9}>
        <div className="beam-border relative overflow-hidden rounded-3xl border border-white/10 bg-panel">
          {imgOk ? (
            <img
              src={profile.photo}
              alt="AbdElgwad Habib"
              onError={() => setImgOk(false)}
              className="aspect-[4/5] w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-panel2 to-ink">
              <span className="font-display text-8xl font-bold gradient-text">AH</span>
              <span className="font-mono text-xs text-mist">&lt; save your photo as /profile.jpg &gt;</span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 h-16 animate-scanline bg-gradient-to-b from-transparent via-neon/15 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/20" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-xs text-neon">$ whoami</p>
            <p className="mt-1 font-display text-xl font-bold text-white">
              {profile.name}
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-danger align-middle" />
            </p>
          </div>
        </div>
      </TiltedCard>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-8 flex items-center gap-2 rounded-xl border border-danger/30 bg-ink/85 px-3 py-2 font-mono text-[11px] text-slate-200 backdrop-blur-md sm:-left-8"
      >
        <Flag size={13} className="text-danger" />
        ECPC → ACPC Competitor
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-3 bottom-24 flex items-center gap-2 rounded-xl border border-neon/30 bg-ink/85 px-3 py-2 font-mono text-[11px] text-slate-200 backdrop-blur-md sm:-right-7"
      >
        <ShieldCheck size={13} className="text-neon" />
        THM · CyberShield
      </motion.div>
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
