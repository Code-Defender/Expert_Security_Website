const sectors = [
  {
    name: 'Retail',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWK7tAMnLP_cwGPWgj-QRrJ2gDf0xzkMK1scVIcnQEx5-0keL0brN3g64oXsppSXfw-nxuTsRXdTrR8xPdImho1MXPcOi-hUFkRX9clUwcmlis6QJvTWceBgTfARcMlyqN6rrVH8uKQujxqgpvHNTQYuN35rP4HAyos1vHycjxc34w6NmiqIDWCa7043sRos_llzmf-6fY34zK9l_8yDCNVSXEL1m9S5J6y229qiovKDfK5gi5oganuFFOXEUaN0AQP0XYwmRLlfa0',
    alt: 'High-end luxury retail store interior',
  },
  {
    name: 'Corporate',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1Ah8aMtCgjyQyqBmPLZ1ZZJrS6nHpfX903Bm6vM6V-on82n00RLbiQxq85yVhoCoYVeTIkwwE-bM3owO6IEzeT5e6EGF1oMb-Nh8caDMUSYPxkrGwV3PYvROiMsf2cQFwON2KUzDOkLOrh00Bn0S99L1CwAbBPca8juS0e-5e23aCn_dgHXlkbkTo0ZuVGd6EID3Q6TV3ET2j4LGX3O5gJ8jtGcuiicWUNMFiWiBXzM-S5TuBEOutRKSxF_Rrj6UdiF_vXyl6qrr9',
    alt: 'Minimalist modern corporate lobby',
  },
  {
    name: 'Construction',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZJcDM1R375_bAf99ybfOyciGyT85GZ8Q-4Q1fC-nddkRCLoSPUT3FfAfLCk8qKSCIvbPWnHaLv4n1Q5TqBiwfznIACLKaWaSnxYeCgm1tG3Z7czSMWaiEpwPSBUVKxCSbPANvsiT65Ldg_kA8o1xlnfECydaaE1C12BdpQqzEg9F_gfgavWfDjKajkqc5G4Tp8705t4hwy78ZkwzJA6soLq3zyGf6gGrV3-c6IbyP5nZ3CmF2SYOtKET-7XaXbolltut5frC-LEIJ',
    alt: 'Active construction site at dawn with cranes',
  },
  {
    name: 'Film & TV',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxpOfkAdtBPg-08ZUWotjM8FKZAxGPaeSq4opWnjUL2poepjgmSxrqShOCbN39H9BKpcXXWMxRIYyQctdwa4b20arU56O0RMd3VvzgH9C_p3ihm79tyNJ_VWlx2g60jfHTspUM193dt7rEFc0J1PHhQUXl2i-HKYIwdtaVGxgl9qM5EnX2fUpTrGU4kO6DdOpJwXN_bjynPVDaUFCmSJFT4g7yFhBqckYzvhzSp04NOHYP6aCw6xth5Cz4xvMmetP8E3FQUfmyThdK',
    alt: 'Professional film set with lighting rigs',
  },
  {
    name: 'Residential',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI1HvUexjzrkHX8NZ9ebQTrQoWSOoLiRgc9uGU2rCkeeTh0PlIdO6I7_Xvi_B_vLRA57DPA2a7ELX4vxBTyfKWOpJDzsCotMBTgElwJ3SLdnU81ZMr_qyA42EXD7cuHaWonrxNOyT061VRaBqo7bladZNZ0zX9FtOSELkiniH28ykkKVOmZROck3hCUynm3zCDvX4R_MZfpKHKDQyep9IUYFcQkZo6TGKhkn-SfforYL_9O40dgyMx0HiWTuy1lRKfT18hLvJJqTNq',
    alt: 'Modern high-end residential estate at evening',
  },
  {
    name: 'Events',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIY6n4QAe_O9yqbeTDbd4YT787lFNZCBQsVx3hB2XmXgEEGG7ab6CeYNxHNGfMI3kXltIEDINwc1ESTeCQktu9IzL1cJhMoMpfMQZtLGR-4YDNIVO5vAvA56Grb7brHBxzm62CaVyDHjmDzdgHyMgKBS7a7KOBelvrTEGqLCd2N5yHWmwkk7Ejt2hdwjV5vMQOxxuZ_vVTgkSSePwzvGBvLdzmiIOi9zAdYlkUTxRyO2KOaH-vUG2B4eF6dkbhBYSrXkaDxy-0OHnf',
    alt: 'Formal gala event at a grand venue',
  },
]

export default function SectorExpertise() {
  return (
    <section className="py-24 bg-surface-container-highest">
      <div className="max-w-screen-2xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-on-surface mb-4">
              Unrivalled Sector Expertise
            </h2>
            <p className="text-on-surface-variant">
              Our bespoke security protocols are tailored to the unique demands
              of Britain's most critical industries.
            </p>
          </div>
        </div>

        {/* Sector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="relative h-[300px] group overflow-hidden bg-surface-container-low"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                src={sector.image}
                alt={sector.alt}
              />
              <div className="absolute inset-0 bg-on-surface/40 flex items-end p-8">
                <h4 className="text-2xl font-bold text-surface-container-lowest">
                  {sector.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
