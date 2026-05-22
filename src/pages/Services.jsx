import Navbar from '../components/Navbar'
import ServicesHero from '../components/services/ServicesHero'
import MannedSecurity from '../components/services/MannedSecurity'
import TechnicalSecurity from '../components/services/TechnicalSecurity'
import ServicesCTA from '../components/services/ServicesCTA'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <Navbar activePage="Services" />
      <main className="flex-grow">
        <ServicesHero />
        <MannedSecurity />
        <TechnicalSecurity />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
