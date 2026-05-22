import { Phone, Mail, ShieldCheck, MapPin } from 'lucide-react'

export default function OfficeLocations() {
  return (
    <div className="flex flex-col gap-8 text-left h-full">
      {/* Reach Us Detail List */}
      <div className="bg-surface-container-lowest p-8 rounded-xl">
        <h3 className="font-headline text-xl font-bold mb-6 text-on-surface">
          Direct Channels
        </h3>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="text-outline shrink-0" size={20} />
            <div>
              <p className="font-label text-xs font-bold uppercase tracking-wider text-outline">
                General Inquiries
              </p>
              <p className="font-body text-on-surface">+44 (0) 20 7946 0500</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-outline shrink-0" size={20} />
            <div>
              <p className="font-label text-xs font-bold uppercase tracking-wider text-outline">
                Secure Email
              </p>
              <p className="font-body text-on-surface">ops@expert-security.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-outline shrink-0" size={20} />
            <div>
              <p className="font-label text-xs font-bold uppercase tracking-wider text-outline">
                Compliance &amp; Legal
              </p>
              <p className="font-body text-on-surface">compliance@expert-security.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="flex-grow rounded-xl overflow-hidden relative min-h-[300px]">
        <img
          className="w-full h-full object-cover grayscale opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGpKxeemcrU5jbp4L1fCthjxLCl12DnZTRzx5km40KZ8ahfriwBUBDHDDwSY_kpb4KDg438wmuU2f4Yp4Zidd5n1BDpZksH5c32i3RljNMVLt2d5PyYuNjBBWj7v8KNgx_IEkyMAPHhGO755pnAtmV1r_z6eUKtxHzVMefAUHLpnMbljoLgdK-1dJXXT3jHixeozf66Hj-DNsepNbWBEDCYtkAbZWI3Uy26_5mrEOcWb5ssl5D-LkG9mfaUtLkBxQg0dH0e5xb8HWC"
          alt="High-contrast digital map of London's financial district with HQ marked"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-surface/90 backdrop-blur-md p-4 rounded-lg shadow-xl flex items-center gap-3 border border-outline-variant/20">
            <MapPin className="text-primary fill-primary/20" size={20} />
            <span className="font-label font-bold text-on-surface">Global HQ</span>
          </div>
        </div>
      </div>
    </div>
  )
}
