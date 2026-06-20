import { Shield, Sparkles, Gem, Radio } from 'lucide-react';

export default function Sponsors() {
  const sponsors = [
    { name: 'AURELIUS GROUP', tier: 'platinum', type: 'Investment Fund' },
    { name: 'VANGUARD SYSTEMS', tier: 'platinum', type: 'SaaS & Enterprise' },
    { name: 'NEXUS AUTOMATION', tier: 'platinum', type: 'Robotics & AI' },
    { name: 'STERLING CAPITAL', tier: 'gold', type: 'Venture Capital' },
    { name: 'VERTEX ANALYTICS', tier: 'gold', type: 'Data Intelligence' },
    { name: 'HORIZON DYNAMICS', tier: 'gold', type: 'Green Energy' },
    { name: 'ORION PHARMA', tier: 'silver', type: 'Biotech' },
    { name: 'ELEVATE INSIGHTS', tier: 'silver', type: 'Management Consulting' },
    { name: 'FORBES COUNCIL', tier: 'media', type: 'Publishing Partner' },
    { name: 'INSIGHTS SUCCESS', tier: 'media', type: 'Media Partner' },
  ];

  // Separate list for marquee to create continuous loop
  const marqueeItems = [...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="relative py-24 bg-luxury-dark overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('networking_lounge.png')" }}
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
            Supported by global conglomerates, financial institutions, venture funds, and media conglomerates dedicated to driving international leadership and innovation.
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
                <div className="text-[11px] font-sans tracking-widest text-gray-500 uppercase font-bold mr-2">
                  {item.tier}
                </div>
                <div className="font-serif text-sm font-semibold text-white tracking-widest">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tiered Sponsor Grid */}
        <div className="space-y-16">
          {/* Platinum */}
          <div>
            <div className="flex items-center gap-2 justify-center mb-8">
              <Gem className="text-white animate-pulse" size={16} />
              <h4 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-white">
                Platinum Partners
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {sponsors.filter(s => s.tier === 'platinum').map((sponsor, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-8 border border-white/10 hover:border-white/30 text-center flex flex-col justify-center items-center h-32 hover:scale-102 transition-all duration-300"
                >
                  <span className="font-serif text-lg font-extrabold tracking-widest text-white">
                    {sponsor.name}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider mt-1">
                    {sponsor.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gold & Silver Group */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto pt-6">
            
            {/* Gold */}
            <div>
              <div className="flex items-center gap-2 justify-center mb-6">
                <Sparkles className="text-luxury-gold animate-pulse" size={15} />
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-luxury-gold">
                  Gold Sponsors
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sponsors.filter(s => s.tier === 'gold').map((sponsor, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-xl p-5 border border-gold-500/10 hover:border-luxury-gold/40 text-center flex flex-col justify-center items-center h-24 hover:scale-102 transition-all duration-300"
                  >
                    <span className="font-serif text-sm font-bold tracking-widest text-gray-200">
                      {sponsor.name.replace(' DYNAMICS', '').replace(' CAPITAL', '').replace(' ANALYTICS', '')}
                    </span>
                    <span className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">
                      {sponsor.name.split(' ').pop()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver */}
            <div>
              <div className="flex items-center gap-2 justify-center mb-6">
                <Shield className="text-gray-400" size={15} />
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-gray-400">
                  Silver Sponsors
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sponsors.filter(s => s.tier === 'silver').map((sponsor, index) => (
                  <div 
                    key={index}
                    className="glass-card rounded-xl p-5 border border-gold-500/5 hover:border-gold-500/20 text-center flex flex-col justify-center items-center h-24 hover:scale-102 transition-all duration-300"
                  >
                    <span className="font-serif text-sm font-bold tracking-widest text-gray-300">
                      {sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Media Partners */}
          <div className="pt-6">
            <div className="flex items-center gap-2 justify-center mb-6">
              <Radio className="text-luxury-gold/60" size={15} />
              <h4 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-gray-500">
                Media & Press Partners
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {sponsors.filter(s => s.tier === 'media').map((sponsor, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl p-4 border border-gold-500/5 hover:border-gold-500/20 text-center flex items-center justify-center h-16 hover:scale-102 transition-all duration-300"
                >
                  <span className="font-serif text-xs font-bold tracking-widest text-gray-400 group-hover:text-white">
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
