import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Star } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function SpeakersJury() {
  const [activeTab, setActiveTab] = useState<'speakers' | 'panelists'>('speakers');

  const speakers = [
    {
      name: 'Dr. Rakiya Opemi Yusuf',
      role: 'Director of Payments System Supervision',
      company: 'Central Bank of Nigeria (CBN)',
      bio: 'Leading Payments System Vision strategy to support digital financial inclusion and payments infrastructure growth.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Josephine Okui Ossiya',
      role: 'CEO',
      company: 'Capital Markets Authority Uganda',
      bio: 'President of ICPAU with extensive leadership in corporate governance, risk management, and capital markets growth.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Pyoka Mfuni',
      role: 'CFO',
      company: 'Maloto & CGMA',
      bio: 'Leading financial management expert driving regional organizational stability and corporate advisory.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Kershini Govender',
      role: 'Executive Head of Transformation & Strategy',
      company: 'Nedbank Group',
      bio: 'Specialist in B-BBEE transformation, corporate growth strategy, and executive coaching in banking.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const panelists = [
    {
      name: 'Vanessa Haripersad',
      role: 'Founder & CEO',
      company: 'Shankara People Solutions',
      bio: 'Pioneering transformational leadership coaching and resilience training across corporate Africa.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Stanley Grau',
      role: 'Founder & Managing Director',
      company: 'MSCT BEE Services',
      bio: 'Deputy Chairperson of the Association of B-BBEE Professionals leading verification frameworks.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ornica Mukhavhuli',
      role: 'Founder & CEO',
      company: 'African Global Skills Academy (AGSA)',
      bio: 'Driving business incubation, regional skills development, and executive talent acceleration.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ms. Lyn Tukei',
      role: 'Moderator & Communications Expert',
      company: 'IEA Summit Panelist',
      bio: 'Corporate communications specialist and moderator directing executive panel roundtables.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const activeList = activeTab === 'speakers' ? speakers : panelists;

  return (
    <section id="speakers" className="relative py-24 bg-luxury-dark overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('summit_hall.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker/90 via-luxury-dark/95 to-luxury-darker/90 z-0 pointer-events-none" />
      
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            Summit Leaders
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            Speakers & <span className="gold-text-gradient">Panelists</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Meet the global thought leaders delivering keynotes, directing panel discussions, and moderating the GELA 2.0 Cape Town summit.
          </p>

          {/* Toggle Switch Tabs */}
          <div className="flex items-center justify-center mt-10">
            <div className="flex p-1 rounded-xl bg-black border border-gold-500/15 max-w-xs w-full shadow-lg relative">
              <button
                onClick={() => setActiveTab('speakers')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 relative z-10 ${
                  activeTab === 'speakers' ? 'text-luxury-dark' : 'text-gray-400 hover:text-white'
                }`}
              >
                Keynote Speakers
              </button>
              <button
                onClick={() => setActiveTab('panelists')}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 relative z-10 ${
                  activeTab === 'panelists' ? 'text-luxury-dark' : 'text-gray-400 hover:text-white'
                }`}
              >
                Panelists & Moderators
              </button>
              
              {/* Highlight background slider */}
              <motion.div
                layoutId="activeTabBg"
                className="absolute top-1 bottom-1 rounded-lg bg-gradient-to-r from-gold-600 to-gold-400"
                style={{
                  width: 'calc(50% - 4px)',
                  left: activeTab === 'speakers' ? '4px' : 'calc(50%)'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {activeList.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <SpotlightCard className="p-6 text-center items-center h-full">
                  <div className="flex flex-col items-center w-full h-full">
                    {/* Circular Profile Rings */}
                    <div className="relative w-36 h-36 mb-6 mx-auto shrink-0">
                      {/* Outer Gold Ring */}
                      <div className="absolute inset-0 rounded-full border border-luxury-gold/30 group-hover:border-luxury-gold group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all duration-500 pointer-events-none" />
                      {/* Inner Rotating Pattern (subtle) */}
                      <div className="absolute inset-1.5 rounded-full border border-dashed border-luxury-gold/20 group-hover:rotate-45 transition-all duration-[2000ms] pointer-events-none" />
                      
                      {/* Portrait */}
                      <div className="absolute inset-3 rounded-full overflow-hidden bg-[#121212]">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                        />
                      </div>
                      
                      {/* Honor Badge for Panelists */}
                      {activeTab === 'panelists' && (
                        <div className="absolute bottom-1 right-1 bg-gold-500 text-luxury-dark w-6 h-6 rounded-full flex items-center justify-center border border-black shadow-lg">
                          <Star size={11} fill="currentColor" />
                        </div>
                      )}
                    </div>

                    {/* Speaker Info */}
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-luxury-gold text-xs uppercase tracking-widest font-semibold mt-1">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-[10px] tracking-wider uppercase font-bold mt-0.5 mb-4">
                      {member.company}
                    </p>
                    
                    <p className="text-gray-400 text-xs leading-relaxed mb-6 italic max-w-xs flex-1">
                      "{member.bio}"
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-4 mt-auto z-10 relative">
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-lg border border-gold-500/10 hover:border-luxury-gold/50 text-gray-400 hover:text-white transition-all duration-300"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin size={14} />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 rounded-lg border border-gold-500/10 hover:border-luxury-gold/50 text-gray-400 hover:text-white transition-all duration-300"
                        aria-label={`${member.name} Twitter Profile`}
                      >
                        <Twitter size={14} />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
