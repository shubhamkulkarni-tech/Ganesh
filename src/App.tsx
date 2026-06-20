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
  const [modalType, setModalType] = useState<'nominate' | 'sponsor' | 'delegate' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Premium loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
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
                animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-20 h-20 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold mb-6 shadow-[0_0_30px_rgba(197,160,89,0.3)] bg-luxury-dark relative"
              >
                <div className="absolute inset-0.5 rounded-full border border-dashed border-luxury-gold/30 animate-spin-slow" />
                <Award size={36} className="relative z-10" />
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-2xl md:text-3xl font-extrabold tracking-[0.2em] text-white uppercase text-center"
              >
                GLOBAL EXCELLENCE
              </motion.h1>

              <motion.span
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[10px] md:text-xs tracking-[0.4em] text-luxury-gold uppercase mt-2 font-bold"
              >
                & Leadership Summit • 2027
              </motion.span>

              {/* Loader Loading Bar */}
              <div className="w-48 h-[1px] bg-white/10 rounded-full mt-10 overflow-hidden relative">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
                />
              </div>
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
