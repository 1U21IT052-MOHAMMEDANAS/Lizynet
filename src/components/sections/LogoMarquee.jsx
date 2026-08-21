import lizynetLogo from '../../assets/logos/lizynet.webp'
import lizymartLogo from '../../assets/logos/lizymart.webp'
import lizyrealtyLogo from '../../assets/logos/lizyrealty.png'
import lizywebLogo from '../../assets/logos/lizyweb.webp'
import lizypumpsLogo from '../../assets/logos/lizypumps.webp'
import './LogoMarquee.css'

const logos = [
  { name: 'LizyNet', src: lizynetLogo },
  { name: 'LizyMart', src: lizymartLogo },
  { name: 'LizyRealty', src: lizyrealtyLogo },
  { name: 'LizyWeb', src: lizywebLogo },
  { name: 'LizyPumps', src: lizypumpsLogo },
]

export default function LogoMarquee() {
  const track = [...logos, ...logos]

  return (
    <section className="logo-marquee">
      <p className="logo-marquee__label">Part of the Lizy Ecosystem</p>
      <div className="logo-marquee__viewport">
        <div className="logo-marquee__track">
          {track.map((logo, i) => (
            <div className="logo-marquee__item" key={`${logo.name}-${i}`}>
              <img src={logo.src} alt={logo.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
