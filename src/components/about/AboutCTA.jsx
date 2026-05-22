export default function AboutCTA() {
  return (
    <section className="py-24 bg-primary text-on-primary">
      <div className="max-w-screen-2xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Discuss Your Security Requirements
        </h2>
        <p className="text-primary-fixed text-lg mb-12 max-w-2xl mx-auto">
          Our consultants are ready to conduct a comprehensive risk assessment for your business or property.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-lg font-label font-bold text-lg hover:bg-surface-bright transition-colors">
            Contact Our Directors
          </button>
          <button className="border-2 border-surface-container-lowest text-surface-container-lowest px-8 py-4 rounded-lg font-label font-bold text-lg hover:bg-white/10 transition-colors">
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  )
}
