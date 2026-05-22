import img from "../../assets/about_image.png";

export default function LegacyValues() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-on-surface leading-snug">
            A Legacy of Trust &amp; Family Values
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p>
              Since our inception in 2008, Expert Security has remained a
              family-owned and operated entity. This heritage defines our
              commitment to personal service, accountability, and the long-term
              protection of our clients' assets.
            </p>
            <p>
              Unlike global conglomerates, we maintain a boutique focus on
              quality, ensuring that every contract receives direct oversight
              from our senior leadership team. We don't just provide security;
              we provide peace of mind through rigorous standards and a deeply
              ingrained culture of vigilance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="font-label text-sm font-semibold text-outline tracking-wider uppercase">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="font-label text-sm font-semibold text-outline tracking-wider uppercase">
                UK Owned
              </div>
            </div>
          </div>
        </div>

        {/* Image with tilted card effect */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-surface-container rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
          <img
            className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
            src={img}
            alt="Security executives collaborating in a modern boardroom"
          />
        </div>
      </div>
    </section>
  )
}
