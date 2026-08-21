import { useEffect, useState } from 'react'
import { getServices } from '../../services/serviceService.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceGrid from '../grids/ServiceGrid.jsx'
import EnquiryModal from '../ui/EnquiryModal.jsx'
import './ServicesSection.css'

export default function ServicesSection() {
  const [services, setServices] = useState([])
  const [activeService, setActiveService] = useState(null)

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
          description="Send an enquiry and we'll connect you with the right provider over WhatsApp."
        />
        <ServiceGrid services={services} onEnquire={setActiveService} />
      </div>

      <EnquiryModal
        service={activeService}
        services={services}
        onClose={() => setActiveService(null)}
      />
    </section>
  )
}
