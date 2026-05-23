import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { CONFIG } from '../config'

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
          formType: 'Assessment Request',
          ...formData
        })
      })
      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      setErrorMessage('Transmission failed. Please check your network and try again.')
    }
  }

  return (
    <section id="proposal" className="py-14 px-8 bg-surface-container-highest">
      <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Info Panel */}
        <div className="md:w-2/5 bg-primary p-10 text-on-primary">
          <h2 className="text-3xl font-bold mb-6">
            Request a Security Assessment
          </h2>
          <p className="mb-8 opacity-90">
            Discuss your requirements with our lead consultants today.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone size={20} />
              <span className="font-label">+44 (0) 800 123 4567</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={20} />
              <span className="font-label">info@expertsecurity.co.uk</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={20} />
              <span className="font-label">London &amp; Manchester, UK</span>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        {status === 'success' ? (
          <div className="md:w-3/5 p-8 flex flex-col justify-center items-center text-center min-h-[400px]">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 animate-bounce">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-2 text-on-surface">
              Assessment Request Sent
            </h3>
            <p className="text-on-surface-variant font-body max-w-sm mb-6 leading-relaxed text-sm">
              Thank you for requesting a security assessment. Our team will perform a preliminary verification and reach out within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label font-bold text-sm hover:opacity-90 transition-all"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="md:w-3/5 p-8">
            {status === 'error' && (
              <div className="bg-error/10 text-error p-4 rounded-lg mb-6 text-sm font-body border border-error/20">
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary disabled:opacity-50"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                    Company
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    required
                    className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary disabled:opacity-50"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary disabled:opacity-50"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary disabled:opacity-50"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary disabled:opacity-50"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold font-label tracking-wide uppercase text-sm hover:opacity-90 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Transmitting Request...' : 'Submit Assessment Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
