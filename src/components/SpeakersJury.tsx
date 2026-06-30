import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Star } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function SpeakersJury() {
  const [activeTab, setActiveTab] = useState<'speakers' | 'panelists'>('speakers');

  const speakers = [
    {
      name: 'Stanley Grau',
      role: 'Managing Director',
      company: 'MSCT BEE Services',
      bio: 'Expert in B-BBEE verification, enterprise development strategy, and compliance consulting across South Africa.',
      image: '/assets/Stanley_Grau.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ornica Mukhavhuli',
      role: 'CEO',
      company: 'African Global Skills Academy',
      bio: 'Pioneering skills development, workspace transformation, and corporate vocational training programs.',
      image: '/assets/Ornica_Mukhavhuli.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Mark Jaffe',
      role: 'CEO & Founder',
      company: 'Sunstone Logistic Systems',
      bio: 'Specialist in logistics optimization, supply chain automation, and corporate transportation infrastructure.',
      image: '/assets/Mark_Jaffe.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Josephine Okui Ossiya',
      role: 'Chief Executive Officer',
      company: 'Capital Markets Authority Uganda',
      bio: 'Directing capital markets growth, corporate finance frameworks, and investor regulations in East Africa.',
      image: '/assets/Josephine_Okui_Ossiya.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dave Van Niekerk',
      role: 'CEO',
      company: 'Numeral Group',
      bio: 'Innovator in banking technology solutions, sub-Saharan finance systems, and mobile transaction networks.',
      image: '/assets/Dave_Van_Niekerk_3.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Barry Buck',
      role: 'Chief Technology Officer',
      company: 'Saucecode',
      bio: 'Pioneering software engineering frameworks, cloud migration strategy, and secure microservices development.',
      image: '/assets/Barry_Buck.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Thoko Tshabalala-Shandu',
      role: 'Managing Director',
      company: 'VEA Road Maintenance & Civils',
      bio: 'Directing large-scale civil engineering, road infrastructure strategy, and municipal transport management.',
      image: '/assets/Thoko_Tshabalala_Shandu.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Hywel George',
      role: 'Director',
      company: 'Griot',
      bio: 'Strategic investment director specializing in asset allocation, cross-border partnerships, and sub-Saharan growth.',
      image: '/assets/Hywel_George.jpeg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const panelists = [
    {
      name: 'Lyn Tukei',
      role: 'Moderator / Communications & PR Manager',
      company: 'Capital Markets Authority Uganda',
      bio: 'Directing corporate communications, stakeholder relations, and moderating executive roundtable panels.',
      image: '/assets/Lyn_Tukei.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Rakiya Opemi Yusuf',
      role: 'Director, Payment System Supervision',
      company: 'Central Bank of Nigeria',
      bio: 'Overseeing retail payments supervision, central bank digital currencies, and payment systems safety.',
      image: '/assets/Rakiya_Opemi_Yusuf.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Pyoka Mfuni',
      role: 'CFO',
      company: 'Maloto',
      bio: 'Leading financial strategies, capital structures, treasury management, and regional corporate investments.',
      image: '/assets/Pyoka_Mfuni.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Vanessa Haripersad',
      role: 'CEO & Founder',
      company: 'Shankara People Solutions',
      bio: 'Pioneering organizational psychology, leadership advisory, and human capital transformation frameworks.',
      image: '/assets/Vanessa_Haripersad.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Kershini Govender',
      role: 'Programme Executive',
      company: 'Nedbank',
      bio: 'Directing banking transformation, social development programmes, and corporate empowerment partnerships.',
      image: '/assets/Kershini_Govender.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dave Van Niekerk',
      role: 'CEO',
      company: 'Numeral Group',
      bio: 'Specialist in mobile banking frameworks, microfinance consulting, and regional fintech networks.',
      image: '/assets/Dave_Van_Niekerk_2.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Frans Stander',
      role: 'CEO Payvolution & MEA Head',
      company: 'Iliad Solution Ltd',
      bio: 'Directing transaction processing technology, software validation, and payments business growth.',
      image: '/assets/Frans_Stander.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const activeList = activeTab === 'speakers' ? speakers : panelists;

  return (
    <section id="speakers" className="relative py-24 bg-luxury-dark overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/summit_hall.jpg')" }}
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
            Meet the global thought leaders delivering keynotes, directing panel discussions, and moderating the GILS 2026 Cape Town summit.
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
