import { useState, useEffect } from 'react';
import { Menu, X, Award } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (type: 'delegate') => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Categories', id: 'categories' },
    { label: 'Speakers', id: 'speakers' },
    { label: 'Agenda', id: 'agenda' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link calculation
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-luxury-dark shadow-[0_0_15px_rgba(197,160,89,0.3)] group-hover:scale-105 transition-all duration-300">
            <Award size={20} />
          </div>
          <div>
            <span className="font-serif text-lg font-bold tracking-widest text-white block leading-none">
              GELA
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-luxury-gold block mt-0.5 font-semibold">
              EXCELLENCE AWARDS
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs uppercase tracking-widest font-semibold hover:text-luxury-gold transition-colors duration-300 relative py-1 ${
                activeSection === item.id ? 'text-luxury-gold' : 'text-gray-400'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
              )}
            </button>
          ))}
        </div>

        {/* Register Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => onOpenModal('delegate')}
            className="px-6 py-2.5 bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark text-xs font-bold tracking-widest uppercase rounded-lg transition-all duration-300"
          >
            Register Pass
          </button>
        </div>

        {/* Hamburger Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg border border-gold-500/10 hover:border-gold-500/30 text-gray-300 hover:text-white transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#02040f]/95 backdrop-blur-md z-30 border-t border-gold-500/10">
          <div className="flex flex-col items-center justify-center h-[70vh] gap-6 px-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-widest font-semibold py-2 hover:text-luxury-gold transition-colors duration-300 ${
                  activeSection === item.id ? 'text-luxury-gold' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenModal('delegate');
              }}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-400 text-luxury-dark text-xs font-bold tracking-widest uppercase rounded-lg shadow-lg hover:from-gold-500 hover:to-gold-300 transition-all duration-300 w-full max-w-xs text-center"
            >
              Register Pass
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
