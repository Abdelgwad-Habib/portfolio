import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/reactbits/Reveal'
import Dock from '../components/reactbits/Dock'
import Magnet from '../components/reactbits/Magnet'
import SplitText from '../components/reactbits/SplitText'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data'

export default function Contact() {
  const dockItems = [
    { label: 'GitHub', href: profile.github, icon: <GithubIcon size={22} /> },
    { label: 'LinkedIn', href: profile.linkedin, icon: <LinkedinIcon size={22} /> },
    {
      label: 'Email',
      href: `mailto:${profile.email}`,
      icon: <Mail size={22} />,
    },
    {
      label: 'Phone',
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      icon: <Phone size={22} />,
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[36rem] bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,157,0.09),transparent_65%)]" />

      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <SectionHeading index="08" kicker="./handshake --establish" title="Open a Connection" className="mb-8" />

        <p className="mx-auto max-w-xl leading-relaxed text-mist">
          Looking for a motivated junior pentester who ships tools, solves CTFs
          and never stops learning? My inbox is monitored — let's talk.
        </p>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Magnet strength={0.3}>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-2xl bg-neon px-8 py-4 font-mono text-base font-bold text-ink transition-shadow hover:shadow-[0_0_60px_-10px_rgba(0,255,157,0.9)]"
            >
              say_hello@sec
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnet>
        </Reveal>

        <Reveal delay={0.25} className="mt-12 flex justify-center">
          <Dock items={dockItems} />
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-sm text-mist">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-danger" />
            {profile.location}
          </span>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition-colors hover:text-neon">
            <Mail size={14} className="text-neon" />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-neon">
            <Phone size={14} className="text-neon" />
            {profile.phone}
          </a>
        </Reveal>
      </div>

      <Reveal className="relative mt-24 px-5 pb-10 sm:px-8">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 1200 260"
            className="w-full select-none"
            style={{ overflow: 'visible' }}
            aria-hidden="true"
          >
            <text
              x="600"
              y="185"
              textAnchor="middle"
              textLength="1180"
              lengthAdjust="spacingAndGlyphs"
              fontSize="175"
              fontWeight="700"
              fontFamily="Space Grotesk, sans-serif"
              fill="#ffffff"
              fillOpacity="0.045"
            >
              PLUS ULTRA
            </text>
          </svg>
        </div>
        <h2 className="relative text-center font-display text-[clamp(2.4rem,6.5vw,5.75rem)] font-bold leading-[1.08] tracking-tight">
          <span className="inline-block">
            <SplitText text="Go beyond...." charClassName="gradient-text" />
          </span>{' '}
          <span className="inline-block">
            <SplitText
              text="Plus Ultra"
              delay={0.55}
              className="neon-glow text-neon"
            />
          </span>
        </h2>
      </Reveal>

      <footer className="relative mt-20 border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 font-mono text-xs text-white/35 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name} — built with React, caffeine & curiosity.
          </p>
          <p className="shiny-text">no systems were harmed in the making of this site_</p>
        </div>
      </footer>
    </section>
  )
}
