import { useEffect, useState } from 'react'
import { getServices } from '../../services/serviceService.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceGrid from '../grids/ServiceGrid.jsx'
import './ServicesSection.css'

export default function ServicesSection() {
  const [services, setServices] = useState([])

  useEffect(() => {
    let active = true
    getServices().then((data) => {
      if (active) setServices(data)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Get things done, instantly"
          description="Connect directly with providers over WhatsApp — no forms, no waiting."
        />
        <ServiceGrid services={services} />
      </div>
    </section>
  )
}
