import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ activePage = 'Home' }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#', active: activePage === 'Home' },
    { label: 'Services', href: '#services', active: activePage === 'Services' },
    { label: 'About Us', href: '#about', active: activePage === 'About Us' },
    { label: 'Privacy Policy', href: '#privacy-policy', active: activePage === 'Privacy Policy' },
    { label: 'Contact Us', href: '#contact', active: activePage === 'Contact Us' },
  ]

  const handleProposalClick = (e) => {
    const isHome = activePage === 'Home'
    if (isHome) {
      e.preventDefault()
      window.history.pushState(null, null, '#proposal')
      const element = document.getElementById('proposal')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg">

      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <span className="font-headline text-2xl font-bold text-on-surface">
          Expert Security
        </span>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'text-primary font-bold border-b-2 border-primary pb-1 font-label'
                  : 'text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <a
          href="#proposal"
          onClick={handleProposalClick}
          className="hidden md:block bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-label font-bold text-sm hover:opacity-80 transition-all text-center"
        >
          Request Security Proposal
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-lg border-t border-outline-variant/15 px-8 pb-6 pt-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'block text-primary font-bold font-label'
                  : 'block text-on-surface-variant font-medium font-label hover:text-primary transition-colors'
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#proposal"
            onClick={(e) => {
              setMobileOpen(false)
              handleProposalClick(e)
            }}
            className="block text-center w-full bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-3 rounded-lg font-label font-bold text-sm mt-2"
          >
            Request Security Proposal
          </a>
        </div>
      )}
    </nav>
  )
}
