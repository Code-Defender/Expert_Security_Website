export default function ServicesHero() {
  return (
    <header className="pt-32 pb-16 px-4 sm:px-8 max-w-screen-2xl mx-auto">
      <div className="bg-surface-container-lowest rounded-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
        <div className="max-w-2xl relative z-10">
          <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold font-label tracking-widest uppercase mb-4">
            Elite Protection
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl text-on-surface leading-tight mb-6">
            Comprehensive Protection for Global Interests.
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base md:text-lg font-body max-w-xl leading-relaxed">
            A multi-layered approach to security, combining high-authority manned guarding with state-of-the-art technical surveillance systems.
          </p>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-10">
          <div 
            className="h-full w-full bg-[url('https://images.unsplash.com/photo-1557597774-9d2739f85a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"
            aria-label="A sophisticated architectural detail of a high-security modern building facade with clean lines and reinforced glass."
          ></div>
        </div>
      </div>
    </header>
  )
}
