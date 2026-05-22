import { Calendar, ShieldCheck } from 'lucide-react'

export default function PrivacyHero() {
  return (
    <header className="mb-20 border-b border-outline-variant/15 pb-12 text-left">
      <div className="label-text text-tertiary font-bold uppercase tracking-widest text-xs mb-4">
        Legal Framework v.2024.1
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-6 leading-tight font-headline">
        Privacy Policy
      </h1>
      <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl font-body">
        Our commitment to global protection extends to your personal data. This document outlines the rigorous protocols Expert Security employs to ensure the confidentiality and integrity of information under our stewardship.
      </p>
      <div className="mt-8 flex items-center gap-6 text-sm font-label text-outline">
        <span className="flex items-center gap-2">
          <Calendar size={16} />
          Last Updated: October 24, 2023
        </span>
        <span className="flex items-center gap-2">
          <ShieldCheck size={16} />
          ICO Registered
        </span>
      </div>
    </header>
  )
}
