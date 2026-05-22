import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactCTA() {
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
        <div className="md:w-3/5 p-8">
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                  Company
                </label>
                <input
                  className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                Email
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary"
                type="email"
              />
            </div>
            <div>
              <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                Phone
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary"
                type="tel"
              />
            </div>
            <div>
              <label className="block text-xs font-bold font-label uppercase text-on-surface-variant mb-2">
                Message
              </label>
              <textarea
                className="w-full bg-surface-container border-none rounded-lg p-3 focus:ring-2 focus:ring-primary"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-bold font-label tracking-wide uppercase text-sm hover:opacity-90 transition-all"
            >
              Submit Assessment Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
