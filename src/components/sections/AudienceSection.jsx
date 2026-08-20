import { Users, Handshake, Link2, Store, Wrench, Building2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import './AudienceSection.css'

const audiences = [
  { icon: Users, name: 'Customers', desc: 'Discover trusted businesses, products and services in one place.' },
  { icon: Handshake, name: 'Partners', desc: 'Plug your brand into the ecosystem and reach new audiences.' },
  { icon: Link2, name: 'Affiliates', desc: 'Earn by referring the Lizy ecosystem to your network.' },
  { icon: Store, name: 'Sellers', desc: 'List products on LizyMart and grow your customer base.' },
  { icon: Wrench, name: 'Service Providers', desc: 'Get discovered and contacted directly over WhatsApp.' },
  { icon: Building2, name: 'Businesses', desc: 'Join the network and become part of Everything Lizy.' },
]

export default function AudienceSection() {
  return (
    <section className="section audience-section" id="audience">
      <div className="container">
        <SectionHeading
          eyebrow="Built For Everyone"
          title="One ecosystem, every role"
          align="center"
        />
        <div className="audience-section__grid">
          {audiences.map(({ icon: Icon, name, desc }, i) => (
            <Reveal as="div" className="audience-tile" key={name} delay={(i % 3) * 90}>
              <div className="audience-tile__icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="audience-tile__name">{name}</h3>
              <p className="audience-tile__desc">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
