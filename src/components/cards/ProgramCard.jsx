import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import DynamicIcon from '../ui/DynamicIcon.jsx'
import './ProgramCard.css'

export default function ProgramCard({ program }) {
  const { slug, name, tagline, description, icon } = program

  return (
    <Link to={`/program/${slug}`} className="program-card">
      <div className="program-card__icon">
        <DynamicIcon name={icon} size={22} strokeWidth={1.8} />
      </div>
      <div className="program-card__body">
        <span className="program-card__tagline">{tagline}</span>
        <h3 className="program-card__name">{name}</h3>
        <p className="program-card__desc">{description}</p>
      </div>
      <span className="program-card__link">
        Learn more <ArrowRight size={15} strokeWidth={2.4} />
      </span>
    </Link>
  )
}
