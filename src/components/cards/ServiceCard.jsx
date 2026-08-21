import { MessageCircle } from 'lucide-react'
import DynamicIcon from '../ui/DynamicIcon.jsx'
import Button from '../ui/Button.jsx'
import { openWhatsApp, serviceInquiryMessage } from '../../utils/whatsapp.js'
import './ServiceCard.css'

export default function ServiceCard({ service }) {
  const { name, description, category, icon, image, providerName, whatsappNumber } = service

  function handleExplore() {
    openWhatsApp(whatsappNumber, serviceInquiryMessage(name))
  }

  return (
    <div className="service-card">
      {image && (
        <div className="service-card__image">
          <img src={image} alt="" loading="lazy" />
          <span className="service-card__icon">
            <DynamicIcon name={icon} size={20} strokeWidth={1.8} />
          </span>
        </div>
      )}

      <div className="service-card__body">
        <span className="service-card__category">{category}</span>
        <h3 className="service-card__name">{name}</h3>
        <p className="service-card__desc">{description}</p>

        {providerName && <span className="service-card__provider">by {providerName}</span>}

        <Button
          onClick={handleExplore}
          variant="whatsapp"
          size="sm"
          icon={MessageCircle}
          iconPosition="left"
          className="service-card__cta"
        >
          Explore Service
        </Button>
      </div>
    </div>
  )
}
