import { Link } from 'react-router-dom'
import { Star, MapPin, MessageCircle } from 'lucide-react'
import DynamicIcon from '../ui/DynamicIcon.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import { formatPrice } from '../../utils/format.js'
import { openWhatsApp, productInquiryMessage } from '../../utils/whatsapp.js'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const {
    slug,
    name,
    category,
    rating,
    reviews,
    price,
    unit,
    businessName,
    location,
    badge,
    icon,
    description,
    contactNumber,
  } = product

  function handleContactSupplier(e) {
    e.preventDefault()
    openWhatsApp(contactNumber, productInquiryMessage(name, businessName))
  }

  return (
    <div className="product-card">
      <Link to={`/product/${slug}`} className="product-card__media">
        <DynamicIcon name={icon} size={34} strokeWidth={1.6} />
        {badge && <Badge tone={badge === 'Best Seller' ? 'brand' : 'accent'} className="product-card__badge">{badge}</Badge>}
      </Link>

      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <Link to={`/product/${slug}`} className="product-card__name">{name}</Link>

        <div className="product-card__rating">
          <Star size={14} strokeWidth={0} fill="#F59E0B" />
          <span className="product-card__rating-value">{rating}</span>
          <span className="product-card__reviews">({reviews} reviews)</span>
        </div>

        <p className="product-card__desc">{description}</p>

        <div className="product-card__seller">
          <span className="product-card__business">{businessName}</span>
          <span className="product-card__location">
            <MapPin size={13} strokeWidth={2} />
            {location}
          </span>
        </div>

        <div className="product-card__price-row">
          <span className="product-card__price">{formatPrice(price, unit)}</span>
        </div>

        <div className="product-card__actions">
          <Button to={`/product/${slug}`} variant="outline" size="sm" className="product-card__cta">
            Get Best Price
          </Button>
          <Button
            onClick={handleContactSupplier}
            variant="whatsapp"
            size="sm"
            icon={MessageCircle}
            iconPosition="left"
            className="product-card__cta"
          >
            Contact Supplier
          </Button>
        </div>
      </div>
    </div>
  )
}
