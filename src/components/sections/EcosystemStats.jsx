import { ecosystemStats } from '../../data/stats.js'
import StatCard from '../cards/StatCard.jsx'
import Reveal from '../ui/Reveal.jsx'
import './EcosystemStats.css'

export default function EcosystemStats() {
  return (
    <section className="stats-section">
      <div className="stars-sm" aria-hidden="true" />
      <div className="container stats-section__grid">
        {ecosystemStats.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 90}>
            <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
