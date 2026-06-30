import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Target, Landmark } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const stats = [
    { label: 'Participating Countries', value: 50, suffix: '+', icon: Globe },
    { label: 'Awardees Honored', value: 100, suffix: '+', icon: Award },
    { label: 'Elite Guests', value: 300, suffix: '+', icon: Target },
    { label: 'Keynote Speakers', value: 30, suffix: '+', icon: Landmark },
  ];

  return (
    <section id="about" className="relative py-24 bg-luxury-dark overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker/95 via-luxury-dark/98 to-luxury-darker/95 z-0 pointer-events-none" />
      {/* Geometric Diamond Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15] z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #c5a059 25%, transparent 25%), 
            linear-gradient(-45deg, #c5a059 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #c5a059 75%), 
            linear-gradient(-45deg, transparent 75%, #c5a059 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        }}
      />
      
      {/* Light glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            About the Summit
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            An International Beacon of <br />
            <span className="gold-text-gradient">Leadership & Distinction</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            A new generation of global pioneers is rewriting the narrative of excellence, innovation, and strategic leadership across international borders. Global Impact Leaders Summit & Awards 2026 – Africa is a premium initiative that honors exceptional leadership, innovative disruption, and transformative impact on the global stage, bringing together the bold, the driven, and the changemakers across sectors.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 text-center glass-card-hover group border border-gold-500/10"
              >
                <div className="w-12 h-12 rounded-full border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-luxury-gold mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(197,160,89,0.05)]">
                  <Icon size={20} />
                </div>
                <h4 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-wider mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold group-hover:text-luxury-gold transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
