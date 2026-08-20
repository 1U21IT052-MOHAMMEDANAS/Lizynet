import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import './CTASection.css'

export default function CTASection() {
  return (
    <section className="cta-section">
      <Reveal as="div" className="container cta-section__inner">
        <h2 className="cta-section__title">Ready to become part of the ecosystem?</h2>
        <p className="cta-section__desc">
          Explore every business in the network, or join LizyNet as a partner today.
        </p>
        <div className="cta-section__actions">
          <Button href="/#businesses" variant="primary" size="lg" icon={ArrowRight}>
            Explore Businesses
          </Button>
          <Button to="/join" variant="secondary" size="lg">
            Join LizyNet
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
