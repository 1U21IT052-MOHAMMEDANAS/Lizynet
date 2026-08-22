import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/nav.js'
import Button from '../ui/Button.jsx'
import Logo from '../ui/Logo.jsx'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand">
          <Logo size={32} className="header__logo" />
          LizyNet
        </Link>

        <nav className="header__nav">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <a key={link.label} href={link.href} className="header__nav-link">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.href} className="header__nav-link">
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="header__actions">
          <Button to="/login" variant="secondary" size="sm">
            Login
          </Button>
          <Button to="/join" variant="primary" size="sm">
            Join LizyNet
          </Button>
        </div>

        <button
          className="header__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <a key={link.label} href={link.href} className="header__mobile-link">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.href} className="header__mobile-link">
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="header__mobile-actions">
          <Button to="/login" variant="secondary" size="md" className="header__mobile-btn">
            Login
          </Button>
          <Button to="/join" variant="primary" size="md" className="header__mobile-btn">
            Join LizyNet
          </Button>
        </div>
      </div>
    </header>
  )
}
