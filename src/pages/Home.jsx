import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import KpiBar from '../components/KpiBar'
import ServicesPreview from '../components/ServicesPreview'
import AboutPreview from '../components/AboutPreview'
import Testimonials from '../components/Testimonials'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-background text-on-background">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <KpiBar />
        <ServicesPreview />
        <AboutPreview />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
