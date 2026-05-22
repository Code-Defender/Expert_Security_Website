import { Cctv, IdCard, Radar, Activity, Lightbulb } from 'lucide-react'

export default function TechnicalSecurity() {
  const cards = [
    {
      title: 'Access Control',
      description: 'Biometric, RFID, and mobile-credential systems designed to regulate movement throughout your facility with precision.',
      icon: IdCard,
    },
    {
      title: 'Intrusion Detection',
      description: 'Multi-point sensor arrays and vibration detectors that identify breach attempts before entry occurs.',
      icon: Radar,
    },
    {
      title: 'Alarm Monitoring',
      description: 'Dedicated monitoring center providing real-time data analysis and emergency escalation protocols 24/7/365.',
      icon: Activity,
    },
    {
      title: 'Security Lighting',
      description: 'Automated, high-intensity lighting systems synchronized with sensors to illuminate potential threats and support visual capture.',
      icon: Lightbulb,
    },
  ]

  return (
    <section className="py-16 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl text-on-surface mb-4 font-bold tracking-tight">
              Technical Security Division
            </h2>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              Integration of cutting-edge hardware and software to create a digital fortress around your infrastructure.
            </p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/15 mx-8 mb-4 hidden md:block"></div>
          <span className="font-label text-tertiary font-bold tracking-widest uppercase text-sm">
            Division 02
          </span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* CCTV Bento Card */}
          <div className="lg:col-span-2 group relative overflow-hidden bg-surface-container-low p-6 rounded-2xl border border-outline-variant/15 hover:border-primary/10 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-on-primary">
                <Cctv size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-2xl text-on-surface mb-2 font-bold">
                High-Definition CCTV
              </h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-4 text-xs md:text-sm">
                Advanced surveillance with AI-driven analytics, motion tracking, and ultra-low light capabilities for comprehensive visual records.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant text-[9px] font-bold font-label uppercase rounded-md tracking-wider">
                  4K Resolution
                </span>
                <span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant text-[9px] font-bold font-label uppercase rounded-md tracking-wider">
                  Cloud Archiving
                </span>
                <span className="px-2.5 py-1 bg-surface-container-high text-on-surface-variant text-[9px] font-bold font-label uppercase rounded-md tracking-wider">
                  Object Recognition
                </span>
              </div>
            </div>
            <img
              className="w-full h-36 object-cover rounded-xl opacity-75 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              alt="A macro shot of a sleek, modern security camera lens with a minimalist white housing."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9EpcERFCZoxIXV980T15hy7Wk_fU8_W73xUn8xZnPdXfHGiNvbB1gzPIz-hErS18bwlH7gmCc8Osb-0UkrNOHddarPOOItAfxpQKqM0382WVNoUkYEjD7H05p_UWMOtjY6fW0p2pA0RqDdsiRwPO5jD7bAggfh53kjLrIrzGFyO485jYIMXP7_XCZLplCWfK796URcNWZovQCS09ILBJDPkmzWj6G2eMzII9SZ6KGEbgvjSPKgVMA6N-QZjsuDZUE756MVcLX2kdv"
            />
          </div>

          {/* 4 smaller Bento Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="bg-surface-container-low p-8 rounded-2xl flex flex-col justify-between hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/15 hover:border-primary/20 hover:shadow-sm"
                >
                  <div>
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-fixed text-primary">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-headline text-xl text-on-surface mb-2 font-bold">
                      {card.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
