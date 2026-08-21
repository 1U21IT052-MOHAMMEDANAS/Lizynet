import { programs } from '../../data/programs.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProgramCard from '../cards/ProgramCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import './ProgramsSection.css'

export default function ProgramsSection() {
  return (
    <section className="section programs-section" id="programs">
      <div className="programs-section__glow" aria-hidden="true" />
      <div className="stars-sm" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Grow With Us"
          title="Programs built for every kind of partner"
          description="Whatever role you play in the ecosystem, there's a program designed for you."
          onDark
        />
        <div className="programs-section__grid">
          {programs.map((program, i) => (
            <Reveal key={program.id} delay={(i % 3) * 90}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
