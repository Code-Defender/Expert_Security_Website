import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      '"The level of professionalism and technical proficiency shown by the Expert Security team during our HQ move was exceptional."',
    name: 'Operations Director',
    company: 'Global Logistics Firm',
  },
  {
    quote:
      '"Their 24/7 monitoring and rapid alarm response have become integral to our site\'s safety protocol."',
    name: 'Estate Manager',
    company: 'Premier Residential Development',
  },
  {
    quote:
      '"Clear reporting, disciplined personnel, and transparent communication. Expert Security is our preferred partner."',
    name: 'Compliance Head',
    company: 'Industrial Manufacturing Corp',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1 text-tertiary mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10"
            >
              <StarRating />
              <p className="text-on-surface font-body italic mb-6 leading-relaxed">
                {t.quote}
              </p>
              <div>
                <div className="font-bold text-on-surface font-label">
                  {t.name}
                </div>
                <div className="text-on-surface-variant text-sm font-label">
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
