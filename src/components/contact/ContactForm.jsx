export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl text-left">
      <h2 className="font-headline text-3xl font-bold mb-2 text-on-surface">
        Inquiry Form
      </h2>
      <p className="text-on-surface-variant mb-8 font-body">
        Submit your details for a confidential security assessment.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
              Full Name
            </label>
            <input
              className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant"
              placeholder="Johnathan Doe"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
              Email Address
            </label>
            <input
              className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant"
              placeholder="j.doe@example.com"
              type="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
            Phone Number
          </label>
          <input
            className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant"
            placeholder="+1 (555) 000-0000"
            type="tel"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label text-xs font-bold uppercase tracking-wider text-outline">
            Message
          </label>
          <textarea
            className="bg-surface border-0 focus:ring-1 focus:ring-primary rounded-lg py-3 px-4 font-body text-on-surface placeholder:text-outline-variant resize-none"
            placeholder="How can our elite security team assist you?"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-label font-bold text-lg transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
          type="submit"
        >
          Send Secure Transmission
        </button>
      </form>
    </div>
  )
}
