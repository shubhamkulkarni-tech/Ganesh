import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Sparkles, X, Award } from 'lucide-react';

export default function Testimonials() {
  const [playingVideoIdx, setPlayingVideoIdx] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Dame Evelyn Sterling',
      role: 'CEO',
      company: 'Vanguard Holdings',
      award: 'Women Leadership Award 2026',
      quote: 'Winning this distinction at GILS elevated our executive credibility on a global scale. Within three months of the ceremony, we closed our Series C funding round at $45M.',
      story: 'Evelyn\'s leadership has scaled Vanguard to operate in 14 countries. Her key focus on diverse boardrooms and ESG investments secured her the committee\'s unanimous vote.',
      duration: '2:15',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Chief AI Scientist',
      company: 'Synthetix Global',
      award: 'AI Innovation Excellence 2026',
      quote: 'Being recognized on the grand stage in Cape Town was a defining moment for our research group. GILS is truly the Oscars of corporate leadership and tech pioneering.',
      story: 'Marcus led the deployment of deep learning models that saved Synthetix over $12M in server optimization, defining a new blueprint for sustainable computing.',
      duration: '1:48',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop'
    },
    {
      name: 'Kenji Takahashi',
      role: 'Co-Founder',
      company: 'Quantum Leap Labs',
      award: 'Emerging Entrepreneur 2025',
      quote: 'The B2B networking lounges connected our leadership team to sovereign wealth funds we had been seeking to reach for years. A premium corporate summit in every aspect.',
      story: 'Kenji founded Quantum Labs in his garage. Today it secures digital transaction layers for 5 of the top 10 retail banks in APAC, growing 250% year-on-year.',
      duration: '3:05',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-luxury-dark overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker/90 via-luxury-dark/95 to-luxury-darker/90 z-0 pointer-events-none" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-25 pointer-events-none"
        style={{ backgroundImage: "url('/summit_hall.jpg')" }}
      />
      
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            Laureate Success Stories
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            Laureates <span className="gold-text-gradient">Testimonials</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Discover how GILS accolades and networking connections have empowered executive brands, unlocked seed/venture capital, and facilitated global partnerships.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-gold-500/10 flex flex-col justify-between hover:border-gold-500/35 hover:shadow-[0_10px_30px_rgba(197,160,89,0.15)] transition-all duration-500 group bg-gradient-to-b from-[#121212] to-[#0A0A0A]"
            >
              <div>
                {/* Video Mock Cover */}
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <img 
                    src={test.image} 
                    alt={test.name} 
                    className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Glowing Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <button
                      onClick={() => setPlayingVideoIdx(index)}
                      className="w-14 h-14 rounded-full border border-luxury-gold bg-luxury-dark/80 text-luxury-gold flex items-center justify-center hover:scale-110 hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                      aria-label={`Play testimonial from ${test.name}`}
                    >
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </button>
                  </div>

                  {/* Video Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/75 border border-gold-500/20 text-[9px] font-sans text-gray-300 font-bold uppercase tracking-widest">
                    Duration: {test.duration}
                  </div>

                  {/* Award badge overlay */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gold-500/10 backdrop-blur-md border border-gold-500/30 text-[9px] font-sans text-luxury-gold font-bold flex items-center gap-1 uppercase tracking-wider">
                    <Award size={10} />
                    {test.award.split(' 20')[0]}
                  </div>
                </div>

                {/* Text Area */}
                <div className="p-6">
                  {/* Stars indicators */}
                  <div className="flex gap-1 text-luxury-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed italic mb-6">
                    "{test.quote}"
                  </p>

                  <div className="border-t border-gold-500/10 pt-4">
                    <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold block mb-1">Impact Story</span>
                    <p className="text-gray-400 text-[10px] leading-relaxed">
                      {test.story}
                    </p>
                  </div>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 bg-black/40 border-t border-gold-500/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-500/20">
                  <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    {test.role}, <span className="text-luxury-gold">{test.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Play Modal Mock */}
        <AnimatePresence>
          {playingVideoIdx !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPlayingVideoIdx(null)}
                className="absolute inset-0 bg-[#02040f]/95 backdrop-blur-md"
              />

              {/* Lightbox Frame */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-3xl w-full aspect-video rounded-2xl overflow-hidden glass-card border border-gold-500/20 bg-black shadow-2xl flex flex-col justify-center items-center p-8 text-center"
              >
                {/* Close controls */}
                <button
                  onClick={() => setPlayingVideoIdx(null)}
                  className="absolute top-4 right-4 p-2 rounded-full border border-white/10 hover:border-luxury-gold text-gray-400 hover:text-white transition-all z-10"
                  aria-label="Close video player"
                >
                  <X size={18} />
                </button>

                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold mb-6 bg-gold-500/5 shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                  >
                    <Sparkles size={24} className="animate-spin-slow" />
                  </motion.div>
                  <h4 className="font-serif text-2xl font-bold text-white tracking-wide mb-2">
                    Playing Testimonial: {testimonials[playingVideoIdx].name}
                  </h4>
                  <p className="text-gray-400 text-xs max-w-md mb-6 leading-relaxed">
                    Streaming raw footage from GILS 2026 summit archives. High-definition playback and panel sessions streaming are available on the delegate portal.
                  </p>
                  <div className="w-full max-w-sm h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: 'easeOut' }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-600 to-gold-400"
                    />
                  </div>
                  <span className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold mt-3">Connecting to media server...</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
