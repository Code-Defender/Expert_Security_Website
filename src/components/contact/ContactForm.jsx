import { useState } from 'react'
import { CONFIG } from '../../config'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
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
      // Send the request as text/plain to avoid CORS preflight options blocks in Google Apps Script.
      // e.postData.contents will contain the JSON string.
      await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS blocks
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
          formType: 'Inquiry',
          ...formData
        })
      })

      // With mode: 'no-cors', the response is opaque, so we assume success if it resolves.
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      setErrorMessage('Secure transmission failed. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-xl text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-headline text-3xl font-bold mb-3 text-on-surface">
          Transmission Secure
        </h2>
        <p className="text-on-surface-variant font-body max-w-sm mb-8 leading-relaxed text-sm">
          Your inquiry has been successfully encrypted and sent. A lead operations coordinator will contact you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label font-bold text-sm hover:opacity-90 transition-all"
        >
          Send New Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-xl text-left">
      <h2 className="font-headline text-3xl font-bold mb-2 text-on-surface">
        Inquiry Form
      </h2>
      <p className="text-on-surface-variant mb-8 font-body text-sm">
        Submit your details for a confidential security assessment.
      </p>
      
      {status === 'error' && (
        <div className="bg-error/10 text-error p-4 rounded-lg mb-6 text-sm font-body border border-error/20">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant disabled:opacity-50"
              placeholder="Johnathan Doe"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
              className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant disabled:opacity-50"
              placeholder="j.doe@example.com"
              type="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
            Phone Number
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant disabled:opacity-50"
            placeholder="+1 (555) 000-0000"
            type="tel"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant resize-none disabled:opacity-50"
            placeholder="How can our elite security team assist you?"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-label font-bold text-lg transition-all active:scale-[0.98] shadow-lg shadow-primary/20 disabled:opacity-75 disabled:cursor-not-allowed"
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Encrypting & Sending...' : 'Send Secure Transmission'}
        </button>
      </form>
    </div>
  )
}
