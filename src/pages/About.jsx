import Navbar from '../components/Navbar'
import AboutHero from '../components/about/AboutHero'
import LegacyValues from '../components/about/LegacyValues'
import Divisions from '../components/about/Divisions'
import SectorExpertise from '../components/about/SectorExpertise'
import AboutCTA from '../components/about/AboutCTA'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-background text-on-background">
      <Navbar activePage="About Us" />
      <main className="pt-24">
        <AboutHero />
        <LegacyValues />
        <Divisions />
        <SectorExpertise />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
