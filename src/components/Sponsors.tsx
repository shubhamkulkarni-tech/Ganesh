import { Shield, Radio } from 'lucide-react';

interface Sponsor {
  name: string;
  tier: 'co-sponsor' | 'media';
  type: string;
  logo?: string;
}

export default function Sponsors() {
  const sponsors: Sponsor[] = [
    {
      name: 'MSCT BEE Services',
      tier: 'co-sponsor',
      type: 'BEE Verification Partner',
      logo: '/assets/msct.jpeg'
    },
    {
      name: 'African Global Skills Academy',
      tier: 'co-sponsor',
      type: 'Skills Development Partner',
      logo: '/assets/african.jpg'
    },
    {
      name: 'Capital Markets Authority',
      tier: 'co-sponsor',
      type: 'Regulatory Partner',
      logo: '/assets/cma.jpg'
    },
    {
      name: 'Nedbank',
      tier: 'co-sponsor',
      type: 'Banking Partner',
      logo: '/assets/nedbank.jpg'
    },
    {
      name: 'Numeral Group',
      tier: 'co-sponsor',
      type: 'Fintech Partner',
      logo: ''
    },
    {
      name: 'Saucecode',
      tier: 'co-sponsor',
      type: 'Technology Partner',
      logo: ''
    },
    {
      name: 'Sunstone Logistic Systems',
      tier: 'co-sponsor',
      type: 'Logistics Partner',
      logo: ''
    },
    {
      name: 'VEA Road Maintenance & Civils',
      tier: 'co-sponsor',
      type: 'Infrastructure Partner',
      logo: ''
    },
    {
      name: 'Griot',
      tier: 'co-sponsor',
      type: 'Investment Partner',
      logo: ''
    },
    {
      name: 'Central Bank of Nigeria',
      tier: 'co-sponsor',
      type: 'Central Banking Partner',
      logo: ''
    },
    {
      name: 'Maloto',
      tier: 'co-sponsor',
      type: 'Financial Services Partner',
      logo: ''
    },
    {
      name: 'Shankara People Solutions',
      tier: 'co-sponsor',
      type: 'Human Capital Partner',
      logo: ''
    },
    {
      name: 'Iliad Solution Ltd',
      tier: 'co-sponsor',
      type: 'Payment Validation Partner',
      logo: ''
    },
    {
      name: 'Insights Success',
      tier: 'media',
      type: 'Media Partner',
      logo: '/assets/is.jpg'
    },
    {
      name: 'CIO Look',
      tier: 'media',
      type: 'Media Partner',
      logo: '/assets/ciolook.jpg'
    },
    {
      name: 'CIO World',
      tier: 'media',
      type: 'Media Partner',
      logo: '/assets/cioworld.jpg'
    },
    {
      name: 'Women World',
      tier: 'media',
      type: 'Media Partner',
      logo: '/assets/women_world.jpg'
    }
  ];

  // Separate list for marquee to create continuous loop
  const marqueeItems = [...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="relative py-24 bg-luxury-dark overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/networking_lounge.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker/95 via-luxury-dark/98 to-luxury-darker/95 z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            Elite Corporate Partners
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            Event <span className="gold-text-gradient">Sponsors & Partners</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Supported by global conglomerates, financial institutions, and media conglomerates dedicated to driving leadership, development, and international innovation.
          </p>
        </div>

        {/* Continuous Animated Marquee */}
        <div className="relative w-full overflow-hidden py-10 mb-20 bg-black/40 border-y border-gold-500/10 glass-card">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-luxury-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-luxury-dark to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex w-max animate-marquee gap-12 items-center">
            {marqueeItems.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 border border-gold-500/10 bg-[#121212]/30 px-6 py-3 rounded-lg hover:border-luxury-gold transition-colors duration-300 pointer-events-none"
              >
                <div className="text-[11px] font-sans tracking-widest text-gold-500/85 uppercase font-bold mr-2">
                  {item.tier === 'media' ? 'Media Partner' : 'Co-Sponsor'}
                </div>
                <div className="font-serif text-sm font-semibold text-white tracking-widest">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tiered Sponsor Grid */}
        <div className="space-y-20">
          {/* Co-Sponsors */}
          <div>
            <div className="flex items-center gap-2 justify-center mb-10">
              <Shield className="text-white animate-pulse" size={16} />
              <h4 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-white">
                Official Co-Sponsors
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {sponsors.filter(s => s.tier === 'co-sponsor').map((sponsor, index) => (
                <div 
                  key={index}
                  className="group glass-card rounded-xl p-6 border border-white/10 hover:border-white/30 text-center flex flex-col justify-center items-center h-40 hover:scale-105 transition-all duration-300"
                >
                  {sponsor.logo ? (
                    <div className="w-full h-16 bg-white/95 group-hover:bg-white rounded-lg p-2.5 flex items-center justify-center mb-3 transition-all duration-300">
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                      />
                    </div>
                  ) : (
                    <div className="h-16 flex items-center justify-center mb-3">
                      <span className="font-serif text-sm font-extrabold tracking-widest text-white group-hover:text-luxury-gold transition-colors duration-300">
                        {sponsor.name}
                      </span>
                    </div>
                  )}
                  <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider group-hover:text-luxury-gold transition-colors duration-300">
                    {sponsor.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Media Partners */}
          <div className="pt-6">
            <div className="flex items-center gap-2 justify-center mb-8">
              <Radio className="text-luxury-gold/60" size={15} />
              <h4 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-gray-500">
                Media & Press Partners
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {sponsors.filter(s => s.tier === 'media').map((sponsor, index) => (
                <div 
                  key={index}
                  className="group glass-card rounded-xl p-4 border border-gold-500/5 hover:border-gold-500/20 text-center flex flex-col justify-center items-center h-32 hover:scale-105 transition-all duration-300"
                >
                  <div className="w-full h-12 bg-white/95 group-hover:bg-white rounded-lg p-1.5 flex items-center justify-center mb-2 transition-all duration-300">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold group-hover:text-luxury-gold transition-colors duration-300">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

