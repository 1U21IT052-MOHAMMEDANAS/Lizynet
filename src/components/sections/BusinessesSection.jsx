import { businesses } from '../../data/businesses.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import BusinessCard from '../cards/BusinessCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import './BusinessesSection.css'

export default function BusinessesSection() {
  return (
    <section className="section businesses-section" id="businesses">
      <div className="container">
        <SectionHeading
          eyebrow="The Ecosystem"
          title="Businesses across the network"
          description="Every Lizy business, discoverable in one place — from marketplaces to services, real estate to energy."
        />
        <div className="businesses-section__grid">
          {businesses.map((business, i) => (
            <Reveal key={business.id} delay={(i % 4) * 80}>
              <BusinessCard business={business} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
