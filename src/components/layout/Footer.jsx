import { Link } from 'react-router-dom'
import { Network } from 'lucide-react'
import { footerLinks } from '../../data/nav.js'
import SocialIcon from '../ui/SocialIcon.jsx'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand">
            <span className="footer__logo">
              <Network size={20} strokeWidth={2.2} />
            </span>
            LizyNet
          </Link>
          <p className="footer__tagline">One network. Everything Lizy.</p>
          <p className="footer__desc">
            The central discovery platform connecting businesses, products, services and
            partners across the complete Lizy digital ecosystem.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><SocialIcon name="instagram" /></a>
            <a href="#" aria-label="LinkedIn"><SocialIcon name="linkedin" /></a>
            <a href="#" aria-label="X (Twitter)"><SocialIcon name="x" /></a>
            <a href="#" aria-label="Facebook"><SocialIcon name="facebook" /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul>
            {footerLinks.explore.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Programs</h4>
          <ul>
            {footerLinks.programs.map((link) => (
              <li key={link.label}><Link to={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Businesses</h4>
          <ul>
            {footerLinks.businesses.map((link) => (
              <li key={link.label}><Link to={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <ul>
            <li><a href="/#how-it-works">About LizyNet</a></li>
            <li><Link to="/join">Join the Ecosystem</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} LizyNet. All rights reserved.</span>
        <span className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </footer>
  )
}
