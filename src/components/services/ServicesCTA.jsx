export default function ServicesCTA() {
  return (
    <section className="py-24 px-8 max-w-screen-2xl mx-auto text-center border-t border-outline-variant/10">
      <h2 className="font-headline text-4xl text-on-surface mb-6">
        Need a custom security audit?
      </h2>
      <p className="text-on-surface-variant font-body max-w-2xl mx-auto mb-10 leading-relaxed">
        Our expert consultants provide comprehensive risk assessments for global corporations. We analyze vulnerabilities across your physical and digital footprint.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#proposal"
          className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-label font-bold tracking-wide hover:shadow-lg transition-all text-center"
        >
          BOOK A CONSULTATION
        </a>
        <button className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-label font-bold tracking-wide hover:bg-surface-container-highest transition-all">
          DOWNLOAD SERVICES BROCHURE
        </button>
      </div>
    </section>
  )
}
