import { ArrowRight, ChevronDown, Handshake, ShoppingBag, Wrench, Building2, Sparkles } from 'lucide-react'
import Button from '../ui/Button.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="stars-sm" aria-hidden="true" />
      <div className="stars-lg" aria-hidden="true" />
      <div className="hero__nebula hero__nebula--1" aria-hidden="true" />
      <div className="hero__nebula hero__nebula--2" aria-hidden="true" />

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
            <Button to="/join" variant="ghost" size="lg">
              Become a Partner
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <svg className="hero__orbit hero__orbit--1" viewBox="0 0 420 420">
            <circle cx="210" cy="210" r="204" stroke="rgba(249,115,22,0.28)" strokeWidth="1" strokeDasharray="2 9" />
            <circle cx="414" cy="210" r="3.4" fill="#FDBA74" />
          </svg>
          <svg className="hero__orbit hero__orbit--2" viewBox="0 0 420 420">
            <circle cx="210" cy="210" r="168" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="1 7" />
            <circle cx="42" cy="210" r="2.6" fill="#fff" />
          </svg>

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

      <a href="#businesses" className="hero__scroll-cue" aria-label="Scroll to explore">
        <ChevronDown size={20} strokeWidth={2} />
      </a>
    </section>
  )
}
