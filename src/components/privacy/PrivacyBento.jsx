import { ShieldAlert, Lock } from 'lucide-react'

export default function PrivacyBento() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
      {/* Executive Summary Card (2/3 width) */}
      <div className="col-span-1 md:col-span-2 bg-surface-container-low p-8 rounded-xl">
        <h3 className="font-headline text-xl font-bold mb-4 text-on-surface">
          Executive Summary
        </h3>
        <p className="text-on-surface-variant leading-relaxed font-body mb-4">
          Expert Security operates on the principle of data minimization. We only collect what is strictly necessary for service delivery, maintain high-level encryption, and never monetize client information.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-start gap-3">
            <ShieldAlert className="text-primary mt-0.5 shrink-0" size={20} />
            <div>
              <span className="block font-bold text-sm text-on-surface">
                No Third-Party Sales
              </span>
              <span className="text-xs text-outline font-label">
                Information is never sold.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Lock className="text-primary mt-0.5 shrink-0" size={20} />
            <div>
              <span className="block font-bold text-sm text-on-surface">
                AES-256 Encryption
              </span>
              <span className="text-xs text-outline font-label">
                Industry-leading standards.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Card (1/3 width) */}
      <div className="bg-tertiary-container/10 border border-tertiary/10 p-8 rounded-xl flex flex-col justify-between">
        <div>
          <h3 className="font-headline text-xl font-bold text-on-tertiary-container mb-2">
            Compliance
          </h3>
          <p className="text-sm text-on-tertiary-container/80 font-body">
            Adhering to GDPR, CCPA, and ISO/IEC 27001 standards.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="bg-tertiary text-on-tertiary px-3 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider font-label">
            GDPR
          </span>
          <span className="bg-tertiary text-on-tertiary px-3 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider font-label">
            ICO
          </span>
          <span className="bg-tertiary text-on-tertiary px-3 py-1 text-[10px] font-bold uppercase rounded-full tracking-wider font-label">
            ISO 27001
          </span>
        </div>
      </div>
    </section>
  )
}
