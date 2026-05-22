import Navbar from '../components/Navbar'
import PrivacyHero from '../components/privacy/PrivacyHero'
import PrivacyBento from '../components/privacy/PrivacyBento'
import PolicyContent from '../components/privacy/PolicyContent'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <Navbar activePage="Privacy Policy" />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex-grow">
        <PrivacyHero />
        <PrivacyBento />
        <PolicyContent />
      </main>
      <Footer />
    </div>
  )
}
