export default function ContactHero() {
  return (
    <div className="relative min-h-[250px] md:h-[300px] flex items-end rounded-xl overflow-hidden mb-12">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsgqnF_ErNzNUPqhtxNVjLexHvOq-7QTAQa1gHHCqSiuVsZ2oCRBZHIrgR4WF7PD7IhcVhCqxG3UpWZBVBIlQgiRmtE2MnfNhZyUa-wSX4tdYAKsP1ctAbekyKom-lvvEYbMFapi8fPbjr4TT04GKmcMN0VFSjq6uSR5atGa2Hij2AI3LtrfAEnFFD2fL0znbageI3laOH6HrfkcM2WvucTUXc3rzdk2wj5C1SV7yg042NnCZKJWCIp9iLqoUmAqN_iP2ez33buF7B"
        alt="Professional security operations center with blurred monitors and high-tech equipment"
      />
      <div className="relative z-10 w-full bg-gradient-to-t from-on-background/80 via-on-background/40 to-transparent p-6 sm:p-10 md:p-12">
        <div className="max-w-2xl text-left">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Secure Your Assets
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg font-body leading-relaxed">
            Connecting you with world-class security advisory and protection services.
            Our operational response teams are available 24/7/365.
          </p>
        </div>
      </div>
    </div>
  )
}

