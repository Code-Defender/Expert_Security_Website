import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Services from './pages/Services'

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      setCurrentHash(hash)
      if (hash === '#proposal') {
        setTimeout(() => {
          const element = document.getElementById('proposal')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    // Handle initial load with #proposal hash
    if (window.location.hash === '#proposal') {
      setTimeout(() => {
        const element = document.getElementById('proposal')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (currentHash === '#about') {
    return <About />
  } else if (currentHash === '#contact') {
    return <Contact />
  } else if (currentHash === '#privacy-policy') {
    return <PrivacyPolicy />
  } else if (currentHash === '#services') {
    return <Services />
  }

  return <Home />
}
