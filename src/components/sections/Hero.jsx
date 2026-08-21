import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import slider1 from '../../../images/slider-1.png'
import slider3 from '../../../images/slider-3.jpg'
import './Hero.css'

const AUTOPLAY_MS = 7000

// Content, structure and behavior adapted from a supplied reference
// carousel. Slides 1 and 3 use local photography from /images; slide 2
// still uses its original background. Every class is namespaced under
// lz-hero-carousel so nothing here can collide with the rest of the site's CSS.
const SLIDES = [
  {
    tabLabel: 'Ecosystem',
    eyebrow: 'The Lizy Ecosystem',
    headingLines: ['Everything Lizy.', 'One Starting Point.'],
    desc: 'Discover businesses, products, services, programs and opportunities across the complete Lizy digital ecosystem.',
    ctaText: 'Explore LizyNet',
    ctaHref: '/#businesses',
    image: slider1,
    tint: 1,
  },
  {
    tabLabel: 'Solutions',
    eyebrow: 'Connected Solutions',
    headingLines: ['One Network.', 'Everything You Need.'],
    desc: 'Explore Lizy businesses, products and professional services — from commerce and technology to real estate, logistics and everyday solutions.',
    ctaText: 'Explore Lizy',
    ctaHref: '/#businesses',
    image: 'https://images.unsplash.com/photo-1457974947974-1d290928d5c7?auto=format&fit=crop&w=1920&q=75',
    tint: 2,
  },
  {
    tabLabel: 'Partners',
    eyebrow: 'Built to Connect',
    headingLines: ['Discover More.', 'Be Part of It.'],
    desc: 'Connect with the right platform, business or opportunity as a customer, partner, seller, affiliate or service provider.',
    ctaText: 'Join the Network',
    ctaTo: '/join',
    image: slider3,
    tint: 3,
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const touchStartX = useRef(null)

  useEffect(() => {
    if (reducedMotion || paused) return undefined
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [current, paused, reducedMotion])

  // Arrow-key navigation only while the carousel itself is hovered/focused,
  // so it never hijacks arrow keys used elsewhere on the page.
  useEffect(() => {
    if (!paused) return undefined
    function handleKey(e) {
      if (e.key === 'ArrowRight') goTo(current + 1)
      if (e.key === 'ArrowLeft') goTo(current - 1)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [paused, current])

  function goTo(index) {
    setCurrent((index + SLIDES.length) % SLIDES.length)
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      goTo(current + (delta < 0 ? 1 : -1))
    }
    touchStartX.current = null
  }

  const slide = SLIDES[current]

  return (
    <section
      className="lz-hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="LizyNet ecosystem highlights"
    >
      <div className="lz-hero-carousel__slides" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div key={s.tabLabel} className={`lz-hero-carousel__slide ${i === current ? 'lz-hero-carousel__slide--active' : ''}`}>
            <div
              className={`lz-hero-carousel__slide-bg lz-hero-carousel__slide-bg--tint-${s.tint}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
          </div>
        ))}
      </div>

      <nav className="lz-hero-carousel__tabs" role="tablist" aria-label="Choose a highlight">
        {SLIDES.map((s, i) => (
          <button
            key={s.tabLabel}
            type="button"
            role="tab"
            aria-selected={i === current}
            className={`lz-hero-carousel__tab ${i === current ? 'lz-hero-carousel__tab--active' : ''}`}
            onClick={() => goTo(i)}
          >
            {s.tabLabel}
            <span className="lz-hero-carousel__tab-track">
              {i === current ? (
                // Keyed by `current` so the fill remounts — and its animation
                // restarts from 0% — every time this tab becomes active.
                <span
                  key={current}
                  className="lz-hero-carousel__tab-fill lz-hero-carousel__tab-fill--run"
                  style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                />
              ) : (
                <span className="lz-hero-carousel__tab-fill" style={{ width: i < current ? '100%' : '0%' }} />
              )}
            </span>
          </button>
        ))}
      </nav>

      <div className="lz-hero-carousel__arrows">
        <span className="lz-hero-carousel__counter">
          <b>{String(current + 1).padStart(2, '0')}</b> / {String(SLIDES.length).padStart(2, '0')}
        </span>
        <button type="button" className="lz-hero-carousel__arrow-btn" aria-label="Previous slide" onClick={() => goTo(current - 1)}>
          <ArrowLeft size={16} strokeWidth={2} />
        </button>
        <button type="button" className="lz-hero-carousel__arrow-btn" aria-label="Next slide" onClick={() => goTo(current + 1)}>
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>

      <div className="lz-hero-carousel__content">
        <div className="lz-hero-carousel__row">
          <div className="lz-hero-carousel__copy" key={current}>
            <div className="lz-hero-carousel__eyebrow">{slide.eyebrow}</div>
            <h1 className="lz-hero-carousel__headline">
              {slide.headingLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < slide.headingLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="lz-hero-carousel__desc">{slide.desc}</p>
          </div>

          {slide.ctaTo ? (
            <Link className="lz-hero-carousel__cta" to={slide.ctaTo}>
              <span>{slide.ctaText}</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          ) : (
            <a className="lz-hero-carousel__cta" href={slide.ctaHref}>
              <span>{slide.ctaText}</span>
              <ArrowRight size={16} strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
