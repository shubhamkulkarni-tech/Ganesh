import { Award, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Event', href: '#about' },
    { label: 'Award Categories', href: '#categories' },
    { label: 'Speakers & Jury', href: '#speakers' },
    { label: 'Event Agenda', href: '#agenda' }
  ];

  return (
    <footer className="relative bg-[#02040f] text-gray-400 text-xs py-16 border-t border-gold-500/15">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/networking_lounge.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker/95 via-luxury-dark/98 to-luxury-darker/95 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1: Brand (Col 8) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-luxury-dark shadow-[0_0_10px_rgba(197,160,89,0.2)]">
                <Award size={16} />
              </div>
              <div>
                <span className="font-serif text-base font-bold tracking-widest text-white block leading-none">
                  GILS 2026
                </span>
                <span className="text-[7.5px] font-sans uppercase tracking-[0.2em] text-luxury-gold block mt-0.5 font-bold">
                  GLOBAL IMPACT LEADERS
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed max-w-sm">
              The Global Impact Leaders Summit & Awards is the premier global platform celebrating benchmark accomplishments in business strategy, technological innovation, sustainability, and C-suite distinction.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-semibold uppercase tracking-wider bg-white/5 border border-gold-500/10 rounded-lg py-2 px-3 w-fit">
              <ShieldCheck className="text-luxury-gold" size={12} />
              Official SEC Registry: GILS-2026
            </div>
          </div>

          {/* Col 2: Navigation (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans font-medium text-[11px] uppercase tracking-wider">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="hover:text-luxury-gold transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/20 group-hover:bg-luxury-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-500/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-[10px] uppercase tracking-wider font-semibold">
          <div>
            © 2026 Global Impact Leaders Summit & Awards. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Delegate Entrance</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">Anti-Trust Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
