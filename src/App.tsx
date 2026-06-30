import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import SpeakersJury from './components/SpeakersJury';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [modalType, setModalType] = useState<'nominate' | 'sponsor' | 'delegate' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Premium loading simulation with count-up
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openModal = (type: 'nominate' | 'sponsor' | 'delegate') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setModalType(null), 300); // delay to let transition finish
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#02040f] text-gray-200 font-sans min-h-screen relative selection:bg-luxury-gold selection:text-luxury-dark">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Intro Loader Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="fixed inset-0 bg-[#02040f] z-50 flex flex-col items-center justify-center"
          >
            {/* Glowing spot background */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-[100px] animate-pulse pointer-events-none" />

            <div className="flex flex-col items-center z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-24 h-24 rounded-full border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6 shadow-[0_0_50px_rgba(197,160,89,0.15)] bg-luxury-dark relative"
              >
                {/* Rotating dashes or rings */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-luxury-gold border-r-luxury-gold animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-2 rounded-full border border-dashed border-luxury-gold/20 animate-spin-slow" />
                <Award size={40} className="relative z-10 text-luxury-gold" />
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-white uppercase text-center"
              >
                GLOBAL IMPACT LEADERS
              </motion.h1>

              <motion.span
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[10px] md:text-xs tracking-[0.4em] text-luxury-gold uppercase mt-2 font-bold"
              >
                Summit & Awards 2026 • Africa
              </motion.span>

              {/* Loader Loading Bar */}
              <div className="w-64 h-[1.5px] bg-white/10 rounded-full mt-8 overflow-hidden relative">
                <div 
                  className="h-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Percentage */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-xs font-serif text-luxury-gold tracking-widest font-semibold"
              >
                {String(progress).padStart(2, '0')}%
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* Main Layout Shell */
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col min-h-screen"
          >
            {/* Nav */}
            <Navbar onOpenModal={openModal} />

            {/* Sections */}
            <main className="flex-1">
              <Hero onOpenModal={openModal} />
              <About />
              <Categories onOpenModal={openModal} />
              <SpeakersJury />
              <Agenda />
              <Sponsors />
              <Gallery />
              <Testimonials />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Interactive Modals Dialog */}
            <Modals
              isOpen={isModalOpen}
              onClose={closeModal}
              type={modalType}
            />

            {/* Scroll to top button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 p-3 rounded-full bg-luxury-dark/80 backdrop-blur-md border border-gold-500/20 hover:border-luxury-gold text-luxury-gold hover:text-luxury-dark hover:bg-luxury-gold z-30 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)] cursor-pointer"
                  aria-label="Scroll to top"
                >
                  <ChevronUp size={18} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
