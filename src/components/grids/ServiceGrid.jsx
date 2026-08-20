import ServiceCard from '../cards/ServiceCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import './ServiceGrid.css'

export default function ServiceGrid({ services }) {
  if (!services?.length) {
    return <p className="service-grid__empty">No services available right now.</p>
  }

  return (
    <div className="service-grid">
      {services.map((service, i) => (
        <Reveal key={service.id} delay={(i % 4) * 80}>
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  )
}
