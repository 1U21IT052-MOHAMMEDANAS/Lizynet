import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react'
import { getProgramBySlug } from '../services/programService.js'
import DynamicIcon from '../components/ui/DynamicIcon.jsx'
import Button from '../components/ui/Button.jsx'
import NotFound from './NotFound.jsx'
import './DetailPage.css'

export default function ProgramPage() {
  const { slug } = useParams()
  const [program, setProgram] = useState(undefined)

  useEffect(() => {
    let active = true
    setProgram(undefined)
    getProgramBySlug(slug).then((data) => {
      if (active) setProgram(data)
    })
    return () => {
      active = false
    }
  }, [slug])

  if (program === undefined) return null
  if (program === null) return <NotFound />

  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero__glow" />
        <div className="container">
          <div className="detail-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/#programs">Programs</Link>
            <ChevronRight size={14} />
            <span>{program.name}</span>
          </div>

          <div className="detail-hero__row">
            <div className="detail-hero__icon">
              <DynamicIcon name={program.icon} size={30} strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="detail-hero__title">{program.name}</h1>
              <p className="detail-hero__subtitle">{program.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-page__body">
        <div className="container detail-page__grid">
          <div>
            <p className="detail-page__desc">{program.description}</p>
          </div>

          <aside className="detail-page__sidebar">
            <h3>What you get</h3>
            <ul>
              {program.benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 size={16} strokeWidth={2.4} />
                  {benefit}
                </li>
              ))}
            </ul>
            <Button to="/join" variant="primary" size="md" icon={ArrowRight}>
              Apply to {program.name}
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}
