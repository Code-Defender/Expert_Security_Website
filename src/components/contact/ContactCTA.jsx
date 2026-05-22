import { Clock } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="bg-primary-container text-on-primary-container py-12 text-left">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-on-primary-container/10 flex items-center justify-center text-on-primary-container shrink-0">
            <Clock size={36} />
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold">
              Uninterrupted Global Vigilance
            </h2>
            <p className="font-body opacity-90 text-sm md:text-base mt-1">
              Our advisory and tactical teams maintain a state of perpetual readiness across all time zones.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-label font-bold text-sm uppercase tracking-widest bg-on-primary-container/20 px-4 py-2 rounded-full">
            EST. 2004
          </span>
          <span className="font-label font-bold text-sm uppercase tracking-widest bg-on-primary-container/20 px-4 py-2 rounded-full">
            ISO 27001
          </span>
        </div>
      </div>
    </section>
  )
}
