import Navbar from '../components/Navbar'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import OfficeLocations from '../components/contact/OfficeLocations'
import ContactCTA from '../components/contact/ContactCTA'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <Navbar activePage="Contact Us" />
      <main className="pt-24 pb-16 flex-grow">
        {/* Main Section wrapping Hero and Grid */}
        <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mb-16">
          <ContactHero />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Inquiry Form */}
            <ContactForm />
            
            {/* Right: Info Cards, Direct Channels & Map */}
            <div className="flex flex-col gap-8">
              <ContactInfo />
              <OfficeLocations />
            </div>
          </div>
        </section>
        
        {/* Availability Banner */}
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
