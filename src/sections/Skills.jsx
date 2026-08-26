import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/reactbits/Reveal'
import LogoLoop from '../components/reactbits/LogoLoop'
import { GlassIcon } from '../components/reactbits/GlassIcons'
import { marqueeItems, skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="cv-auto relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-glow/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="06" kicker="--toolkit --list-all" title="Skills & Arsenal" />

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <p className="mb-4 font-mono text-sm text-mist">
                <span className="text-neon">›</span> {group.title}
                <span className="ml-3 inline-block h-px w-24 translate-y-[-4px] bg-gradient-to-r from-neon/50 to-transparent" />
              </p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6">
                {group.items.map((item) => (
                  <GlassIcon key={item.label} icon={item.icon} label={item.label} color={item.color} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y border-white/[0.06] bg-panel/40">
        <LogoLoop items={marqueeItems} />
      </div>
    </section>
  )
}
