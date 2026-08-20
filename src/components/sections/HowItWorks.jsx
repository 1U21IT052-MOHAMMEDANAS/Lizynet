import { User, Network, Building2, Zap, Repeat, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import './HowItWorks.css'

const steps = [
  { icon: User, label: 'Customer', desc: 'Looking for a business, product or service' },
  { icon: Network, label: 'LizyNet', desc: 'Discovers the right match instantly' },
  { icon: Building2, label: 'Business', desc: 'Connects directly with the customer' },
  { icon: Zap, label: 'Action', desc: 'Purchase, booking or inquiry happens' },
  { icon: Repeat, label: 'Retention', desc: 'Customer returns across the ecosystem' },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <SectionHeading
          eyebrow="About LizyNet"
          title="How the ecosystem works"
          description="A simple, connected flow that turns discovery into lasting relationships."
          align="center"
        />
        <div className="how-it-works__flow">
          {steps.map((step, i) => (
            <Reveal as="div" className="how-it-works__step" key={step.label} delay={i * 100}>
              <div className="how-it-works__node">
                <step.icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="how-it-works__label">{step.label}</h3>
              <p className="how-it-works__desc">{step.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="how-it-works__arrow" size={20} strokeWidth={2} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
