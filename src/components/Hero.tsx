import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Award, Shield, Users } from 'lucide-react';
import GoldParticlesCanvas from './GoldParticlesCanvas';

interface HeroProps {
  onOpenModal: (type: 'nominate' | 'sponsor' | 'delegate') => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date: October 28, 2027
  useEffect(() => {
    const targetDate = new Date('2026-08-09T10:30:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#02040f] pt-28 pb-16 px-6 md:px-12"
    >
      {/* Background Stage Image Overlay & Spotlights */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('awards_stage.png')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(2,4,15,1)_90%)] z-0 pointer-events-none" />
      
      {/* Animated Spotlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle, #c5a059 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* High-End Constellation Particles */}
      <GoldParticlesCanvas />

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto z-20 text-center flex flex-col items-center">
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(197,160,89,0.05)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-luxury-gold font-bold">
            Honoring Visionary Excellence & Innovation
          </span>
        </motion.div>

        {/* Cinematic Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide leading-tight text-white mb-6"
        >
          Global Excellence & <br />
          <span className="gold-text-gradient italic">Leadership Awards 2.0</span>
          <span className="text-xl md:text-2xl font-serif text-white align-super ml-2 font-normal">2026</span>
        </motion.h1>

        {/* Premium Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 font-sans text-sm sm:text-base md:text-xl max-w-3xl leading-relaxed tracking-wide mb-10"
        >
          Where Visionaries, Innovators & Industry Leaders are Celebrated Globally
        </motion.p>

        {/* Date, Venue and Countries Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mb-12 text-sm text-gray-300 border-y border-gold-500/10 py-5 w-full max-w-3xl justify-center font-sans tracking-wide"
        >
          <div className="flex items-center gap-3">
            <Calendar className="text-luxury-gold" size={18} />
            <span>August 9, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-luxury-gold" size={18} />
            <span>DoubleTree by Hilton, Cape Town</span>
          </div>
          <div className="flex items-center gap-1.5 opacity-80">
            {/* Country flags represented via text/emojis beautifully or as visual blocks */}
            <span className="text-base" title="South Africa">🇿🇦</span>
            <span className="text-base" title="Nigeria">🇳🇬</span>
            <span className="text-base" title="Uganda">🇺🇬</span>
            <span className="text-base" title="Kenya">🇰🇪</span>
            <span className="text-base" title="United Kingdom">🇬🇧</span>
            <span className="text-base" title="United Arab Emirates">🇦🇪</span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-4 gap-3 md:gap-6 max-w-xl w-full mb-12"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Mins', value: timeLeft.minutes },
            { label: 'Secs', value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 md:p-5 rounded-xl border border-gold-500/10 bg-[#121212]/50 backdrop-blur-md relative overflow-hidden shadow-lg group hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="font-serif text-2xl md:text-4xl font-bold text-white tracking-widest leading-none mb-1">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-luxury-gold transition-colors duration-300 font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-2xl justify-center"
        >
          <button
            onClick={() => onOpenModal('nominate')}
            className="flex items-center justify-center gap-2 py-4 px-8 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-luxury-dark font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-[0_4px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_40px_rgba(197,160,89,0.55)] w-full sm:w-auto"
          >
            <Award size={16} />
            Nominate Now
          </button>

          <button
            onClick={() => onOpenModal('sponsor')}
            className="flex items-center justify-center gap-2 py-4 px-8 bg-[#121212] border border-gold-500/30 hover:border-gold-500/70 text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 hover:bg-gold-500/5 w-full sm:w-auto"
          >
            <Shield size={16} />
            Become a Sponsor
          </button>

          <button
            onClick={() => onOpenModal('delegate')}
            className="flex items-center justify-center gap-2 py-4 px-8 bg-transparent text-luxury-gold hover:text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 group w-full sm:w-auto"
          >
            <Users size={16} />
            Register as Delegate
            <ChevronRight className="transform group-hover:translate-x-1 transition-transform" size={16} />
          </button>
        </motion.div>
      </div>

      {/* Downward scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-3.5 rounded-full border border-gray-500 flex justify-center p-[1px]"
        >
          <div className="w-0.5 h-1 rounded-full bg-luxury-gold" />
        </motion.div>
      </div>
    </section>
  );
}
