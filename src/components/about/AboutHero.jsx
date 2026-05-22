export default function AboutHero() {
  return (
    <section className="relative h-[400px] md:h-[614px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover grayscale-[20%]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLsBv01rhrW-vx9ObPh1rvzS5pwkyBOyILGNtqMXlQqzWC2e65efTWhMflwMiAKghVw3kTtV2x7szeIfD4BhB-i9BqfkYBRpiYDQfKGUKd6mLV6PfAfgvtyc4JadTyRy_jtxAPUz2ne8WjtdhDcnXKarDEvUCh-3FHzkA4mMLZoMkY4dm7wWpUYYAtrF6kEW-NkMMHVst5I2HQpnyis_tiRb-3al4t83DkkakBiMMGwaDSTi9sKe9opgP61Cb0vcQab8MkmT9iYwvy"
          alt="Modern glass skyscraper in London's financial district during golden hour"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/60 to-transparent" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span className="font-label text-tertiary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Established 2008
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-on-surface leading-tight mb-6">
            Securing the UK's Finest Interests.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            A family-owned UK provider dedicated to professional excellence in
            manned guarding and technical security solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
