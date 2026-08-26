import { lazy, Suspense } from 'react'
import ClickSpark from './components/reactbits/ClickSpark'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

const About = lazy(() => import('./sections/About'))
const Darb = lazy(() => import('./sections/Darb'))
const Experience = lazy(() => import('./sections/Experience'))
const Activities = lazy(() => import('./sections/Activities'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Certificates = lazy(() => import('./sections/Certificates'))
const Contact = lazy(() => import('./sections/Contact'))

function SectionFallback() {
  return <div className="min-h-[60vh]" aria-hidden="true" />
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-display text-slate-200 antialiased">
      <ClickSpark />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Darb />
          <Experience />
          <Activities />
          <Projects />
          <Skills />
          <Certificates />
          <Contact />
        </Suspense>
      </main>
    </div>
  )
}
