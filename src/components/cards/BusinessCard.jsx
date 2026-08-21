import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import DynamicIcon from '../ui/DynamicIcon.jsx'
import Badge from '../ui/Badge.jsx'
import { businessLogos } from '../../data/businessLogos.js'
import './BusinessCard.css'

export default function BusinessCard({ business }) {
  const { slug, name, tagline, category, icon, description, comingSoon, accent } = business
  const logo = businessLogos[slug]

  const CardInner = (
    <>
      <div className="business-card__top">
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="business-card__logo" />
        ) : (
          <div className={`business-card__icon business-card__icon--${accent}`}>
            <DynamicIcon name={icon} size={22} strokeWidth={2} />
          </div>
        )}
        {comingSoon ? (
          <Badge tone="soon">Coming Soon</Badge>
        ) : (
          <ArrowUpRight className="business-card__arrow" size={19} strokeWidth={2.25} />
        )}
      </div>

      <div className="business-card__body">
        <h3 className="business-card__name">{name}</h3>
        <p className="business-card__tagline">{tagline}</p>
        <p className="business-card__desc">{description}</p>
      </div>

      <div className="business-card__foot">
        <span className="business-card__category">{category}</span>
      </div>
    </>
  )

  if (comingSoon) {
    return <div className="business-card business-card--soon">{CardInner}</div>
  }

  return (
    <Link to={`/business/${slug}`} className="business-card">
      {CardInner}
    </Link>
  )
}
