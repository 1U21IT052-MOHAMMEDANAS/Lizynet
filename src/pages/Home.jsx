import Hero from '../components/sections/Hero.jsx'
import EcosystemStats from '../components/sections/EcosystemStats.jsx'
import LogoMarquee from '../components/sections/LogoMarquee.jsx'
import BusinessesSection from '../components/sections/BusinessesSection.jsx'
import ServicesSection from '../components/sections/ServicesSection.jsx'
import ProgramsSection from '../components/sections/ProgramsSection.jsx'
import AudienceSection from '../components/sections/AudienceSection.jsx'
import HowItWorks from '../components/sections/HowItWorks.jsx'
import CTASection from '../components/sections/CTASection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <EcosystemStats />
      <LogoMarquee />
      <BusinessesSection />
      <ServicesSection />
      <ProgramsSection />
      <AudienceSection />
      <HowItWorks />
      <CTASection />
    </>
  )
}
