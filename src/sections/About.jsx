import Terminal from '../components/Terminal'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/reactbits/Reveal'
import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="cv-auto relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" kicker="whoami" title="About Me" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <p className="mb-5 leading-relaxed text-mist">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.25} className="mt-8">
              <div className="overflow-hidden rounded-xl border border-white/[0.07]">
                {about.facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`flex flex-col gap-0.5 px-4 py-3 font-mono text-sm sm:flex-row sm:items-center sm:gap-4 ${
                      i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'
                    }`}
                  >
                    <span className="w-24 shrink-0 text-neon">{f.label}:</span>
                    <span className="text-slate-300">{f.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
