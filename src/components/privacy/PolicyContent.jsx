import { User, Mail, Laptop, Scale, AtSign, MapPin } from 'lucide-react'

export default function PolicyContent() {
  return (
    <article className="space-y-24 text-left">
      {/* 01: Data Collection */}
      <section className="scroll-mt-32" id="data-collection">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-40">
              <span className="font-label text-primary font-bold text-sm">01</span>
              <h2 className="text-3xl font-bold mt-2 font-headline text-on-surface">
                Data Collection
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-on-surface-variant font-body leading-relaxed mb-6">
              Expert Security collects personal identification information that you voluntarily provide when requesting a proposal, subscribing to our security bulletins, or engaging our consulting services.
            </p>
            <ul className="space-y-4 list-none p-0">
              <li className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
                <User className="text-primary mt-0.5 shrink-0" size={20} />
                <div>
                  <span className="block font-bold text-on-surface">Identity Data</span>
                  <span className="text-sm text-on-surface-variant font-body">
                    Includes first name, last name, title, and corporate affiliation.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
                <Mail className="text-primary mt-0.5 shrink-0" size={20} />
                <div>
                  <span className="block font-bold text-on-surface">Contact Data</span>
                  <span className="text-sm text-on-surface-variant font-body">
                    Billing address, email address, and verified telephone numbers.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
                <Laptop className="text-primary mt-0.5 shrink-0" size={20} />
                <div>
                  <span className="block font-bold text-on-surface">Technical Data</span>
                  <span className="text-sm text-on-surface-variant font-body">
                    IP address, login data, browser type and version, and operating system.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 02: Use of Information */}
      <section className="scroll-mt-32" id="use-of-information">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-40">
              <span className="font-label text-primary font-bold text-sm">02</span>
              <h2 className="text-3xl font-bold mt-2 font-headline text-on-surface">
                Use of Information
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="bg-surface-container-high/50 p-8 rounded-xl border-l-4 border-primary">
              <p className="text-on-surface font-medium mb-6 italic font-headline">
                "We utilize data only to the extent necessary to fulfill our contractual obligations and maintain site security."
              </p>
              <div className="space-y-6 text-on-surface-variant font-body leading-relaxed">
                <p>
                  <strong className="text-on-surface">Service Provision:</strong> To register you as a new client and manage our ongoing professional relationship.
                </p>
                <p>
                  <strong className="text-on-surface">Threat Analysis:</strong> We aggregate anonymized data to improve our global security advisory algorithms and threat detection patterns.
                </p>
                <p>
                  <strong className="text-on-surface">Legal Compliance:</strong> To notify you about changes to our terms or privacy policy as mandated by law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: ICO Compliance */}
      <section className="scroll-mt-32" id="ico-compliance">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-40">
              <span className="font-label text-primary font-bold text-sm">03</span>
              <h2 className="text-3xl font-bold mt-2 font-headline text-on-surface">
                ICO Compliance
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="mb-8">
              <img
                className="w-full h-64 object-cover rounded-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBBj4rnR1MHa9wxXmpsfcOg205oFDQGrDRk0b7u3NCZkSBzs7KGah1w0V6goNiXxHC-vMK5hCRhJzm9GyH_LYcQngB5AEs7zohJ-ta2ghaVUyhMxJiV1_yaQE6hI432FGF6_jZxrLXgktTA9AUMQlHMzruwH1MwZMdtjNdbv-TeH8Y3QoNhB3fSfh6-S_PpiT34SrhNo66TJaQ-cTXcjmEcwYQf_k3jk0sAkcORdF1MgEwseyJN5gr1u3ekL0m9CVIZ3_ZDas0vTVU"
                alt="Intricate server rack lights representing Peak digital security"
              />
            </div>
            <p className="text-on-surface-variant font-body leading-relaxed mb-6">
              Expert Security is fully registered with the Information Commissioner's Office (ICO). We comply with all statutory requirements regarding the processing and handling of private data within the UK and European Union.
            </p>
            <div className="bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/10">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-on-surface font-headline">
                <Scale className="text-primary" size={20} />
                Your Statutory Rights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-on-surface-variant font-body">
                <ul className="space-y-2 list-none p-0">
                  <li>• The right to be informed</li>
                  <li>• The right of access</li>
                  <li>• The right to rectification</li>
                </ul>
                <ul className="space-y-2 list-none p-0">
                  <li>• The right to erasure</li>
                  <li>• The right to restrict processing</li>
                  <li>• The right to data portability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04: Data Retention */}
      <section className="scroll-mt-32" id="data-retention">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-40">
              <span className="font-label text-primary font-bold text-sm">04</span>
              <h2 className="text-3xl font-bold mt-2 font-headline text-on-surface">
                Data Retention
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-on-surface-variant font-body leading-relaxed mb-8">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>
            <div className="grid grid-cols-1 gap-4 font-body">
              <div className="bg-surface-container p-6 rounded-lg flex justify-between items-center">
                <span className="font-bold text-on-surface">Transaction Records</span>
                <span className="label-text text-sm bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  7 Years
                </span>
              </div>
              <div className="bg-surface-container p-6 rounded-lg flex justify-between items-center">
                <span className="font-bold text-on-surface">Marketing Consent</span>
                <span className="label-text text-sm bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  2 Years / Until Revoked
                </span>
              </div>
              <div className="bg-surface-container p-6 rounded-lg flex justify-between items-center">
                <span className="font-bold text-on-surface">Technical Logs</span>
                <span className="label-text text-sm bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  90 Days
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05: Privacy Contact */}
      <section className="scroll-mt-32" id="privacy-contact">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-40">
              <span className="font-label text-primary font-bold text-sm">05</span>
              <h2 className="text-3xl font-bold mt-2 font-headline text-on-surface">
                Privacy Contact
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="bg-primary text-on-primary p-10 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline text-2xl font-bold mb-6">
                  Data Protection Officer
                </h3>
                <p className="mb-8 opacity-90 font-body">
                  For all inquiries regarding your personal data, data erasure requests, or compliance questions, please contact our dedicated privacy desk.
                </p>
                <div className="space-y-4 font-body">
                  <div className="flex items-center gap-4">
                    <AtSign size={20} />
                    <span className="font-bold">rana.waqas@expertsecurity.online</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin size={20} />
                    <span>Corporate HQ: 39 The Shires, Old Bedford Road, Luton, LU2 7QA</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-10 bg-surface-container-lowest text-primary px-8 py-3 rounded-lg font-bold font-label hover:bg-white transition-colors text-center inline-block"
                >
                  Submit Formal Data Request
                </a>
              </div>
              {/* Abstract decorative bg circle */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}
