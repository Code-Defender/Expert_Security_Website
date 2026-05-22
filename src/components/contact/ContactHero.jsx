export default function ContactHero() {
  return (
    <div className="relative h-[300px] rounded-xl overflow-hidden mb-12">
      <img
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsgqnF_ErNzNUPqhtxNVjLexHvOq-7QTAQa1gHHCqSiuVsZ2oCRBZHIrgR4WF7PD7IhcVhCqxG3UpWZBVBIlQgiRmtE2MnfNhZyUa-wSX4tdYAKsP1ctAbekyKom-lvvEYbMFapi8fPbjr4TT04GKmcMN0VFSjq6uSR5atGa2Hij2AI3LtrfAEnFFD2fL0znbageI3laOH6HrfkcM2WvucTUXc3rzdk2wj5C1SV7yg042NnCZKJWCIp9iLqoUmAqN_iP2ez33buF7B"
        alt="Professional security operations center with blurred monitors and high-tech equipment"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent flex items-end p-12">
        <div className="max-w-2xl text-left">
          <h1 className="font-headline text-5xl font-bold text-white mb-4">
            Secure Your Assets
          </h1>
          <p className="text-white/90 text-lg font-body leading-relaxed">
            Connecting you with world-class security advisory and protection services.
            Our operational response teams are available 24/7/365.
          </p>
        </div>
      </div>
    </div>
  )
}
