import { ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            className="rounded-2xl w-full h-[400px] object-cover shadow-xl grayscale-[40%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNk7Oe4vJfIfYksOR2_bigBlYDzYbGaRiQA52-5--LB_G6AcYHZjFs3Tiws3x1oTreJm8tPBPp6pDtemxi7M6TJbvYHm1IJSIMyubHidHTbBSGd_NWwJbFrxjd53ycA245zH4kdfRBUEdq0Pn-gl4zWaGqSTP-9bqhaZ0ENcHe9q7vTZ1FKrTsELR695v-yfromlFwaWtgXAqcldFnwehOq-doZxGnJS1LXMmTWtzVzGl5uYq7mVlBcdhHrECMSFek9V571In-ssG7"
            alt="Modern glass skyscraper reflecting a bright blue sky with steel blue tones"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-on-surface mb-6">
            Global Standards, Local Expertise
          </h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed font-body">
            Founded in 2008, Expert Security has evolved from a specialist
            regional provider to a nationwide leader in high-end security
            operations. Our approach combines rigorous military-grade discipline
            with cutting-edge technical innovation to protect your most valuable
            assets.
          </p>
          <button className="text-primary font-bold font-label flex items-center gap-2 group">
            Read Corporate Profile
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
