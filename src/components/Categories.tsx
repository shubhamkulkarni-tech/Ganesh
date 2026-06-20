import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, Brain, Leaf, Trophy, Crown, Rocket, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface CategoriesProps {
  onOpenModal: (type: 'nominate') => void;
}

export default function Categories({ onOpenModal }: CategoriesProps) {
  const categoriesList = [
    {
      title: 'Business Leadership & Excellence',
      description: 'Honoring visionary CEOs and founders who are driving strategic growth, business transformation, and global scale.',
      criteria: 'Strategic leadership, B-BBEE impact, and sustainable market expansion.',
      icon: Briefcase,
      color: 'from-amber-600 to-yellow-400'
    },
    {
      title: 'Technology & Innovation',
      description: 'Celebrating companies and startup leaders pioneering cutting-edge digital solutions, AI, and IT infrastructure.',
      criteria: 'Tech disruption, scalability, and digital ROI.',
      icon: Zap,
      color: 'from-blue-600 to-purple-400'
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'Recognizing outstanding organisations and professionals driving medical advancements, healthcare access, and quality.',
      criteria: 'Impact on patient care, scientific innovation, and community health.',
      icon: Trophy,
      color: 'from-red-600 to-amber-500'
    },
    {
      title: 'Finance & Banking',
      description: 'Commending banking institutions, fintechs, and microfinance leaders championing financial inclusion and stability.',
      criteria: 'Financial stability, tech integration, and inclusion channels.',
      icon: Award,
      color: 'from-yellow-600 to-gold-400'
    },
    {
      title: 'Manufacturing & Industrial',
      description: 'Applauding manufacturers setting benchmarks in industrial efficiency, resource management, and safety standards.',
      criteria: 'Operational efficiency, sustainable supply chain, and local job creation.',
      icon: Brain,
      color: 'from-pink-600 to-gold-400'
    },
    {
      title: 'Real Estate & Infrastructure',
      description: 'For property developers and infrastructure firms designing green buildings, smart cities, and public utilities.',
      criteria: 'Eco-friendly materials, architecture aesthetics, and civic utilities.',
      icon: Crown,
      color: 'from-emerald-600 to-teal-400'
    },
    {
      title: 'Retail & E-Commerce',
      description: 'Saluting retail leaders and e-commerce platforms redefining consumer experiences and digital sales.',
      criteria: 'Omnichannel customer retention, supply chain agility, and scale.',
      icon: Leaf,
      color: 'from-cyan-600 to-blue-400'
    },
    {
      title: 'Education & EdTech',
      description: 'Honoring academic institutions and educational technologies empowering future generations and talent.',
      criteria: 'Quality of education, digital learning tool adoption, and research papers.',
      icon: Rocket,
      color: 'from-violet-600 to-indigo-400'
    }
  ];

  return (
    <section id="categories" className="relative py-24 bg-luxury-darker overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-8 pointer-events-none"
        style={{ backgroundImage: "url('awards_stage.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/90 via-luxury-darker/95 to-luxury-dark/90 z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            Recognition Paths
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            Distinguished <span className="gold-text-gradient">Award Categories</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Nominate yourself or an industry peer for the prestigious GELA 2027 awards. Our jury evaluates entries based on rigorous criteria, global relevance, and industry disruption.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="h-full"
              >
                <SpotlightCard className="p-6 h-full">
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-luxury-gold mb-6 group-hover:scale-110 group-hover:bg-luxury-gold group-hover:text-luxury-dark transition-all duration-300">
                      <Icon size={22} className="stroke-[1.5]" />
                    </div>

                    {/* Category Title */}
                    <h3 className="font-serif text-lg font-bold text-white mb-3 tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Evaluation Criteria */}
                    <div className="border-t border-gold-500/10 pt-4 mb-6">
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-1">Key Evaluation Metrics</span>
                      <p className="text-gray-300 text-[11px] leading-relaxed">
                        {category.criteria}
                      </p>
                    </div>
                  </div>

                  {/* Nominate Action */}
                  <button
                    onClick={() => onOpenModal('nominate')}
                    className="w-full py-2.5 rounded-lg border border-gold-500/10 group-hover:border-luxury-gold bg-transparent group-hover:bg-gold-500/5 text-gray-400 group-hover:text-luxury-gold text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all duration-300 mt-2 z-10 relative"
                  >
                    Submit Nomination
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
