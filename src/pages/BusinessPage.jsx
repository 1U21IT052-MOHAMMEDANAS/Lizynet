import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'
import { getBusinessBySlug } from '../services/businessService.js'
import DynamicIcon from '../components/ui/DynamicIcon.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import NotFound from './NotFound.jsx'
import './DetailPage.css'

export default function BusinessPage() {
  const { slug } = useParams()
  const [business, setBusiness] = useState(undefined)

  useEffect(() => {
    let active = true
    setBusiness(undefined)
    getBusinessBySlug(slug).then((data) => {
      if (active) setBusiness(data)
    })
    return () => {
      active = false
    }
  }, [slug])

  if (business === undefined) return null
  if (business === null) return <NotFound />

  const statEntries = Object.entries(business.stats || {})

  return (
    <>
      <section className="detail-hero">
        <div className="container">
          <div className="detail-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/#businesses">Businesses</Link>
            <ChevronRight size={14} />
            <span>{business.name}</span>
          </div>

          <div className="detail-hero__row">
            <div className="detail-hero__icon">
              <DynamicIcon name={business.icon} size={30} strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="detail-hero__title">{business.name}</h1>
              <p className="detail-hero__subtitle">{business.tagline}</p>
            </div>
            {business.comingSoon && <Badge tone="soon">Coming Soon</Badge>}
          </div>
        </div>
      </section>

      <section className="detail-page__body">
        <div className="container detail-page__grid">
          <div>
            <Badge tone="brand">{business.category}</Badge>
            <p className="detail-page__desc" style={{ marginTop: 18 }}>{business.description}</p>

            {statEntries.length > 0 && (
              <div className="detail-page__stats">
                {statEntries.map(([key, value]) => (
                  <div className="detail-page__stat" key={key}>
                    <strong>{value}</strong>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="detail-page__sidebar">
            <h3>Why {business.name}?</h3>
            <ul>
              <li><CheckCircle2 size={16} strokeWidth={2.4} /> Verified across the Lizy network</li>
              <li><CheckCircle2 size={16} strokeWidth={2.4} /> Direct access from LizyNet</li>
              <li><CheckCircle2 size={16} strokeWidth={2.4} /> Backed by ecosystem-wide trust</li>
            </ul>
            <Button to="/join" variant="primary" size="md" icon={ArrowRight}>
              Partner with {business.name}
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}
