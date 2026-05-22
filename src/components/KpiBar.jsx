const stats = [
  { value: '2008', label: 'Established' },
  { value: '24/7', label: 'Control Room' },
  { value: 'UK-Wide', label: 'Coverage' },
  { value: 'ICO', label: 'Registered' },
  { value: '15+ yrs', label: 'Experience' },
]

export default function KpiBar() {
  return (
    <section className="bg-surface-container-low py-16 px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center md:text-left ${
                index > 0
                  ? 'border-l border-outline-variant/20 md:pl-8'
                  : ''
              }`}
            >
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-tighter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
