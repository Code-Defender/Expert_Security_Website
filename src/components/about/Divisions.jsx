import { ShieldCheck, Camera, CircleCheck } from 'lucide-react'

const securityFeatures = [
  'Licensed Manned Guarding',
  'Front of House & Concierge',
  'Rapid Response Teams',
]

const alarmFeatures = [
  'AI-Driven CCTV Systems',
  'Remote 24/7 Monitoring',
  'Smart Access Control',
]

export default function Divisions() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-on-surface mb-4">
            Specialized Protection
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Expert Security operates through two distinct divisions, each
            offering specialized expertise to cover the full spectrum of modern
            safety requirements.
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Expert Security */}
          <div className="bg-surface-container-lowest p-12 rounded-xl group hover:bg-surface-bright transition-colors duration-500 flex flex-col justify-between border-b-4 border-primary">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <ShieldCheck className="text-primary" size={36} strokeWidth={1.5} />
                <h3 className="text-3xl font-bold text-on-surface">
                  Expert Security
                </h3>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Our premier manned guarding division providing highly trained
                personnel for physical presence and immediate response. We
                specialize in human-centric security that combines
                professionalism with approachability.
              </p>
              <ul className="space-y-4 font-label text-sm font-semibold text-on-surface-variant">
                {securityFeatures.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CircleCheck className="text-primary flex-shrink-0" size={20} strokeWidth={1.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Expert Alarms */}
          <div className="bg-surface-container-lowest p-12 rounded-xl group hover:bg-surface-bright transition-colors duration-500 flex flex-col justify-between border-b-4 border-tertiary">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <Camera className="text-tertiary" size={36} strokeWidth={1.5} />
                <h3 className="text-3xl font-bold text-on-surface">
                  Expert Alarms
                </h3>
              </div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                The technical heartbeat of our operation. Expert Alarms
                specializes in the design, installation, and monitoring of
                advanced surveillance and intrusion detection systems.
              </p>
              <ul className="space-y-4 font-label text-sm font-semibold text-on-surface-variant">
                {alarmFeatures.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <CircleCheck className="text-tertiary flex-shrink-0" size={20} strokeWidth={1.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
