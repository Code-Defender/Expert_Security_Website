import { ShieldCheck, Radio, CheckCircle } from 'lucide-react'

const serviceCards = [
  {
    icon: ShieldCheck,
    title: 'Manned Security Operations',
    items: [
      ['Static Guarding', 'Alarm Response'],
      ['Mobile Patrol', 'Dog Units'],
    ],
  },
  {
    icon: Radio,
    title: 'Technical Security Systems',
    items: [
      ['CCTV Surveillance', 'Access Control', 'Security Lighting'],
      ['Intrusion Detection', 'Remote Monitoring'],
    ],
  },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="py-24 px-8 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-on-surface mb-4">
            Strategic Security Solutions
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body">
            Integrated protection strategies tailored to corporate environments
            and critical infrastructure.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {serviceCards.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.title}
                className="bg-surface-container-lowest p-10 rounded-2xl group hover:bg-white transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <IconComponent className="text-primary" size={36} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {card.items.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-4">
                      {column.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle className="text-tertiary mt-0.5 shrink-0" size={16} strokeWidth={2} />
                          <p className="text-on-surface-variant text-sm font-label">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
