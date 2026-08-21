import { MessageCircle } from 'lucide-react'
import DynamicIcon from '../ui/DynamicIcon.jsx'
import Button from '../ui/Button.jsx'
import './ServiceCard.css'

export default function ServiceCard({ service, onEnquire }) {
  const { name, description, category, icon, image, providerName } = service

  return (
    <div className="service-card">
      {image && (
        <div className="service-card__image">
          <img src={image} alt="" loading="lazy" />
        </div>
      )}

      <div className="service-card__body">
        <div className="service-card__icon">
          <DynamicIcon name={icon} size={22} strokeWidth={1.8} />
        </div>

        <span className="service-card__category">{category}</span>
        <h3 className="service-card__name">{name}</h3>
        <p className="service-card__desc">{description}</p>

        {providerName && <span className="service-card__provider">by {providerName}</span>}

        <Button
          onClick={() => onEnquire?.(service)}
          variant="primary"
          size="sm"
          icon={MessageCircle}
          iconPosition="left"
          className="service-card__cta"
        >
          Enquiry Now
        </Button>
      </div>
    </div>
  )
}
