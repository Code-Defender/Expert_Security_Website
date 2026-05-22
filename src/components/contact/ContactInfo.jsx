import { Building2, Shield } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
      {/* Head Office */}
      <div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-4">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          <Building2 size={22} />
        </div>
        <div>
          <h3 className="font-headline text-lg font-bold mb-1 text-on-surface">
            Head Office
          </h3>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Suite 400, Global Security Plaza
            <br />
            Financial District, London
            <br />
            EC2V 7HQ, United Kingdom
          </p>
        </div>
      </div>

      {/* 24/7 Control Room */}
      <div className="bg-tertiary-container/10 p-8 rounded-xl flex flex-col gap-4 border border-tertiary-container/20">
        <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center text-tertiary">
          <Shield size={22} className="fill-tertiary/20" />
        </div>
        <div>
          <h3 className="font-headline text-lg font-bold text-on-tertiary-container mb-1">
            24/7 Control Room
          </h3>
          <p className="text-on-tertiary-container font-body text-sm font-semibold mb-2">
            Emergency Response Line
          </p>
          <p className="text-tertiary font-headline text-xl font-bold">
            +44 (0) 20 7946 0101
          </p>
        </div>
      </div>
    </div>
  )
}
