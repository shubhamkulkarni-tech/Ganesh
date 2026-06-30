import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const images = [
    {
      url: '/awards_stage.jpg',
      title: 'Grand Awards Stage',
      desc: 'The official GILS main stage setup with cinematic gold lighting effects.'
    },
    {
      url: '/gold_trophy.jpg',
      title: 'GILS Excellence Trophy',
      desc: 'The solid gold-plated GILS trophy designed by luxury artisans.'
    },
    {
      url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&h=800&fit=crop',
      title: 'Skyline Networking Toast',
      desc: 'Sponsors and delegates celebrating during the Sunset Cocktail session.'
    },
    {
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
      title: 'Summit Panel Debate',
      desc: 'Global technology executives discussing generative AI governance models.'
    },
    {
      url: '/gala_dinner.jpg',
      title: 'Gala Dinner Banquet',
      desc: 'VIP dining setup inside the DoubleTree Ballroom with custom table florals.'
    },
    {
      url: '/award_winner.jpg',
      title: 'Award Laureates Group',
      desc: 'Winners of the GILS 2026 summit celebrating their category trophies.'
    },
    {
      url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop',
      title: 'Executive B2B Speed Dating',
      desc: 'Venture capitalists and tech startup founders discussing joint partnerships.'
    },
    {
      url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop',
      title: 'Classical Orchestra Performance',
      desc: 'The Grand Symphonic Orchestra performing during the dinner opening.'
    }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-luxury-darker overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker/95 via-luxury-dark/98 to-luxury-darker/95 z-0 pointer-events-none" />
      {/* Geometric Camera Viewfinder outlines */}
      <div 
        className="absolute inset-0 opacity-[0.10] z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(135deg, #c5a059 10%, transparent 10%, transparent 50%, #c5a059 50%, #c5a059 60%, transparent 60%, transparent 100%)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-10 left-10 w-20 h-20 opacity-[0.25] pointer-events-none z-0 border-l border-t border-luxury-gold" />
      <div className="absolute bottom-10 right-10 w-20 h-20 opacity-[0.25] pointer-events-none z-0 border-r border-b border-luxury-gold" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            Summit Visuals
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            GILS Event <span className="gold-text-gradient">Gallery Highlights</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Relive the high-profile moments, prestigious dinners, panel debates, and celebration stages of our past leadership award summits.
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setActiveImageIdx(index)}
              className="relative overflow-hidden rounded-2xl glass-card border border-gold-500/10 group cursor-pointer break-inside-avoid"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              
              {/* Gold Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Text Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-sans uppercase tracking-widest text-luxury-gold font-bold mb-1">
                  <Camera size={10} />
                  GILS Event Photo
                </span>
                <h4 className="font-serif text-base font-bold text-white tracking-wide">
                  {img.title}
                </h4>
                <p className="text-gray-400 text-[10px] leading-relaxed mt-1 hidden sm:block">
                  {img.desc}
                </p>
              </div>

              {/* Action scale button */}
              <div className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Maximize2 size={12} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Pop-up */}
        <AnimatePresence>
          {activeImageIdx !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImageIdx(null)}
                className="absolute inset-0 bg-[#02040f]/95 backdrop-blur-md"
              />

              {/* Close controls */}
              <button
                onClick={() => setActiveImageIdx(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-luxury-gold text-gray-400 hover:text-white transition-all z-10"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>

              {/* Next/Prev Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-3 rounded-full border border-white/10 hover:border-luxury-gold text-gray-400 hover:text-white transition-all z-10 hidden md:block"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-6 p-3 rounded-full border border-white/10 hover:border-luxury-gold text-gray-400 hover:text-white transition-all z-10 hidden md:block"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>

              {/* Main Lightbox Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden glass-card border border-gold-500/20 bg-luxury-dark shadow-2xl flex flex-col"
              >
                <div className="relative aspect-video max-h-[60vh] bg-[#050505] overflow-hidden flex items-center justify-center">
                  <img 
                    src={images[activeImageIdx].url} 
                    alt={images[activeImageIdx].title} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>

                <div className="p-6 bg-[#080808]/90 border-t border-gold-500/10 text-left">
                  <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-1">
                    Image {activeImageIdx + 1} of {images.length}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">
                    {images[activeImageIdx].title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 max-w-2xl leading-relaxed">
                    {images[activeImageIdx].desc}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
