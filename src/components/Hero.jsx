import heroImage from '../assets/Hero.jpg'
export default function Hero() {
  const handleProposalClick = (e) => {
    e.preventDefault()
    window.history.pushState(null, null, '#proposal')
    const element = document.getElementById('proposal')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative px-8 py-16 md:py-10 overflow-hidden bg-surface-container-lowest">

      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="relative z-10">
          <span className="text-tertiary font-label font-bold tracking-widest text-xs uppercase mb-4 block">
            Professional Protection Since 2008
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-on-surface leading-tight mb-6">
            Expert Security
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
            UK-based security operations delivering manned guarding and
            technical security systems across corporate, industrial, and
            residential sectors since 2008.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#proposal"
              onClick={handleProposalClick}
              className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-label font-bold hover:opacity-90 transition-all text-center"
            >
              Request Security Proposal
            </a>
            <a href="#services"
              className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-label font-bold hover:bg-surface-container-highest transition-all">
              View Services
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] lg:h-[420px] rounded-2xl overflow-hidden bg-surface-container">
          <img
            className="w-full h-full object-cover grayscale-[20%]"
            src={heroImage}
            alt="A professional security officer in a high-end corporate lobby with polished marble floors and glass walls"
          />
        </div>
      </div>
    </section>
  )
}
