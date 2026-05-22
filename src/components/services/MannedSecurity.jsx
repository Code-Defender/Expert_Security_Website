import { Shield, Car, Bell, PawPrint, ArrowRight } from 'lucide-react'

export default function MannedSecurity() {
  const cards = [
    {
      title: 'Static Guarding',
      description: 'Permanent on-site presence for commercial, industrial, and high-value residential assets. Continuous vigilance and access management.',
      icon: Shield,
      actionText: 'EXPLORE CAPABILITIES',
    },
    {
      title: 'Mobile Patrol',
      description: 'Scheduled and random vehicular inspections of perimeters and multiple locations, providing a flexible and cost-effective deterrent.',
      icon: Car,
      actionText: 'LOGISTICS OVERVIEW',
    },
    {
      title: 'Alarm Response',
      description: 'Rapid deployment units responding to alarm activations 24/7. Immediate site investigation and threat neutralization.',
      icon: Bell,
      actionText: 'RESPONSE PROTOCOLS',
    },
    {
      title: 'Dog Units',
      description: 'Specialized K9 handling for high-risk sites and large open spaces where visual deterrents and olfactory detection are paramount.',
      icon: PawPrint,
      actionText: 'HANDLER CERTIFICATION',
    },
  ]

  return (
    <section className="py-16 px-8 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="max-w-xl">
          <h2 className="font-headline text-3xl text-on-surface mb-4">
            Manned Security Division
          </h2>
          <p className="text-on-surface-variant font-body">
            Human intelligence and physical presence are the foundations of effective deterrence. Our personnel are trained to the highest international standards.
          </p>
        </div>
        <div className="h-px flex-grow bg-outline-variant/15 mx-8 mb-4 hidden md:block"></div>
        <span className="font-label text-tertiary font-bold tracking-widest uppercase">
          Division 01
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.title}
              className="group bg-surface-container-low p-8 rounded-lg transition-all duration-300 hover:bg-surface-container-high"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded bg-primary-fixed text-primary">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-xl text-on-surface mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {card.description}
              </p>
              <a
                href="#proposal"
                className="flex items-center text-primary font-label text-xs font-bold cursor-pointer group-hover:underline"
              >
                {card.actionText}
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
