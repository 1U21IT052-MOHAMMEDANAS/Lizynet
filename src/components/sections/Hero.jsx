import { ArrowRight, Handshake, ShoppingBag, Wrench, Building2, Sparkles } from 'lucide-react'
import Button from '../ui/Button.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <Sparkles size={14} strokeWidth={2.4} />
            The Lizy Digital Ecosystem
          </span>

          <h1 className="hero__title">
            One Network.
            <br />
            <span className="hero__title-accent">Everything Lizy.</span>
          </h1>

          <p className="hero__desc">
            LizyNet is the central entry point to the complete ecosystem — businesses,
            products, services, and partners, all discoverable in one place.
          </p>

          <div className="hero__actions">
            <Button href="/#businesses" variant="primary" size="lg" icon={ArrowRight}>
              Explore Lizy
            </Button>
            <Button to="/join" variant="secondary" size="lg">
              Become a Partner
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel">
            <div className="hero__panel-head">
              <span className="hero__panel-dot" />
              <span className="hero__panel-dot" />
              <span className="hero__panel-dot" />
              <span className="hero__panel-label">LizyNet</span>
            </div>
            <div className="hero__panel-grid">
              <div className="hero__tile">
                <span className="hero__tile-icon hero__tile-icon--indigo">
                  <ShoppingBag size={18} strokeWidth={1.8} />
                </span>
                <strong>LizyMart</strong>
                <small>Marketplace</small>
              </div>
              <div className="hero__tile">
                <span className="hero__tile-icon hero__tile-icon--teal">
                  <Wrench size={18} strokeWidth={1.8} />
                </span>
                <strong>LizyServe</strong>
                <small>Services</small>
              </div>
              <div className="hero__tile">
                <span className="hero__tile-icon hero__tile-icon--blue">
                  <Building2 size={18} strokeWidth={1.8} />
                </span>
                <strong>LizyRealty</strong>
                <small>Real Estate</small>
              </div>
              <div className="hero__tile">
                <span className="hero__tile-icon hero__tile-icon--violet">
                  <Handshake size={18} strokeWidth={1.8} />
                </span>
                <strong>Partners</strong>
                <small>1000+ Network</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
