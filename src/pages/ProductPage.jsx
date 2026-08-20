import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Star, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'
import { getProductBySlug } from '../services/productService.js'
import DynamicIcon from '../components/ui/DynamicIcon.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import NotFound from './NotFound.jsx'
import { formatPrice } from '../utils/format.js'
import { openWhatsApp, productInquiryMessage } from '../utils/whatsapp.js'
import './DetailPage.css'
import './ProductPage.css'

export default function ProductPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState(undefined)

  useEffect(() => {
    let active = true
    setProduct(undefined)
    getProductBySlug(slug).then((data) => {
      if (active) setProduct(data)
    })
    return () => {
      active = false
    }
  }, [slug])

  if (product === undefined) return null
  if (product === null) return <NotFound />

  function handleContactSupplier() {
    openWhatsApp(product.contactNumber, productInquiryMessage(product.name, product.businessName))
  }

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <div className="detail-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <span>{product.name}</span>
          </div>

          <div className="detail-hero__row">
            <div className="detail-hero__icon">
              <DynamicIcon name={product.icon} size={30} strokeWidth={1.6} />
            </div>
            <div>
              <h1 className="detail-hero__title">{product.name}</h1>
              <p className="detail-hero__subtitle">{product.category}</p>
            </div>
            {product.badge && <Badge tone="brand">{product.badge}</Badge>}
          </div>
        </div>
      </section>

      <section className="detail-page__body">
        <div className="container detail-page__grid">
          <div>
            <div className="product-page__rating">
              <Star size={16} strokeWidth={0} fill="#F59E0B" />
              <strong>{product.rating}</strong>
              <span>({product.reviews} reviews)</span>
            </div>

            <p className="detail-page__desc" style={{ marginTop: 18 }}>{product.description}</p>

            <div className="detail-page__stats">
              <div className="detail-page__stat">
                <strong>{formatPrice(product.price, product.unit)}</strong>
                <span>Price</span>
              </div>
              <div className="detail-page__stat">
                <strong>{product.businessName}</strong>
                <span>Sold by</span>
              </div>
              <div className="detail-page__stat">
                <strong style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={16} strokeWidth={2} />
                  {product.location}
                </strong>
                <span>Location</span>
              </div>
            </div>
          </div>

          <aside className="detail-page__sidebar">
            <h3>{formatPrice(product.price, product.unit)}</h3>
            <ul>
              <li><ShieldCheck size={16} strokeWidth={2.2} /> Verified seller on LizyMart</li>
              <li><ShieldCheck size={16} strokeWidth={2.2} /> Direct supplier contact</li>
            </ul>
            <Button variant="primary" size="md" className="product-page__cta">
              Get Best Price
            </Button>
            <Button
              onClick={handleContactSupplier}
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              iconPosition="left"
              className="product-page__cta"
            >
              Contact Supplier
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}
