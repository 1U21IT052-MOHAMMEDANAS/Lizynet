import Reveal from './Reveal.jsx'
import './SectionHeading.css'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  onDark = false,
  action,
}) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${onDark ? 'section-heading--dark' : ''}`}>
      <div className="section-heading__text">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="section-heading__title">{title}</h2>
        {description && <p className="section-heading__desc">{description}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </Reveal>
  )
}
