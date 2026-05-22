function Instagram({ size = 24, strokeWidth = 2, className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function Linkedin({ size = 24, strokeWidth = 2, className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function Facebook({ size = 24, strokeWidth = 2, className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


const quickLinks = [
  { label: 'Privacy Policy', href: '#privacy-policy' },
  { label: 'Terms of Service', href: '#services' },
  { label: 'Compliance', href: '#privacy-policy' },
  { label: 'Security Certifications', href: '#privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-dim w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-4">
          <span className="font-headline text-xl font-bold text-on-surface">
            Expert Security
          </span>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Setting the gold standard in physical and technical security
            operations across the United Kingdom since 2008.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-label font-bold text-sm uppercase tracking-wider text-on-surface">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-on-surface-variant text-sm font-label hover:underline hover:text-on-surface transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Operations */}
        <div className="space-y-4">
          <h4 className="font-label font-bold text-sm uppercase tracking-wider text-on-surface">
            Operations
          </h4>
          <p className="text-on-surface-variant text-sm font-label">
            UK National Control Room
            <br />
            Available 24/7/365
            <br />
            Licensed &amp; Insured
          </p>
        </div>

        {/* Follow Us */}
        <div className="space-y-4">
          <h4 className="font-label font-bold text-sm uppercase tracking-wider text-on-surface">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <Instagram className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={22} strokeWidth={1.5} />
            <Linkedin className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={22} strokeWidth={1.5} />
            <Facebook className="text-on-surface-variant cursor-pointer hover:text-primary transition-colors" size={22} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-2xl mx-auto mt-12 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs font-label">
          © 2024 Expert Security. All rights reserved. Global Protection &amp;
          Advisory.
        </p>
        <div className="flex gap-6">
          <span className="text-xs font-label text-on-surface-variant">
            SIA Approved Contractor
          </span>
          <span className="text-xs font-label text-on-surface-variant">
            ICO Certified
          </span>
        </div>
      </div>
    </footer>
  )
}
