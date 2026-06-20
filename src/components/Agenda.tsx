import { motion } from 'framer-motion';
import { Clock, MapPin, Coffee, Users, Award, GlassWater, Landmark } from 'lucide-react';

export default function Agenda() {
  const agendaItems = [
    {
      time: '10:30 AM – 11:30 AM',
      title: 'Red Carpet Welcome & Guest Arrival',
      description: 'Welcome of VIP delegates, media photo sessions, and red carpet interviews at the DoubleTree by Hilton Cape Town.',
      location: 'Red Carpet Foyer',
      icon: Coffee
    },
    {
      time: '11:30 AM – 01:00 PM',
      title: 'Opening Ceremony & Keynote Speeches',
      description: 'Official inaugural addresses, keynote speeches by global pioneers focusing on strategic leadership, B-BBEE transformation, and organizational impact.',
      location: 'Grand Ballroom',
      icon: Landmark
    },
    {
      time: '01:00 PM – 01:30 PM',
      title: 'Networking & Transition Break',
      description: 'B2B speed networking session and executive tea/coffee transition break.',
      location: 'Networking Lounge',
      icon: Users
    },
    {
      time: '01:30 PM – 02:30 PM',
      title: 'Awards Felicitation by Celebrity Chief Guest',
      description: 'The main awards felicitation ceremony presenting GELA 2.0 excellence trophies to corporate leaders and organisations.',
      location: 'Grand Ballroom',
      icon: Award
    },
    {
      time: '02:30 PM Onwards',
      title: 'Gala Lunch & B2B Networking',
      description: 'Indulge in a curated gourmet lunch, champagne celebration, and final B2B partnership deals.',
      location: 'Hilton Dining Room',
      icon: GlassWater
    }
  ];

  return (
    <section id="agenda" className="relative py-24 bg-luxury-darker overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-8 pointer-events-none"
        style={{ backgroundImage: "url('summit_hall.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/90 via-luxury-darker/95 to-luxury-dark/90 z-0 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            Event Schedule
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            Event <span className="gold-text-gradient">Timeline & Agenda</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Plan your presence. Below is the structured itinerary detailing the day's leadership summits, panel debates, networking sessions, and the evening gala dinner.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical gold center line (hidden on mobile, left aligned on small, centered on lg) */}
          <div className="absolute left-4 lg:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-gold-600 via-gold-500/40 to-transparent transform lg:-translate-x-1/2 pointer-events-none" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-stretch relative ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 lg:left-1/2 top-6 w-7 h-7 rounded-full bg-black border-2 border-luxury-gold flex items-center justify-center transform -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(197,160,89,0.3)]">
                    <Icon size={12} className="text-luxury-gold" />
                  </div>

                  {/* Empty Spacer Column for layout */}
                  <div className="hidden lg:block w-1/2" />

                  {/* Content Card Column */}
                  <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="glass-card rounded-2xl p-6 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 relative group overflow-hidden bg-gradient-to-r from-[#121212] to-[#0A0A0A]"
                    >
                      {/* Glow block */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold-500/5 blur-xl group-hover:bg-gold-500/10 transition-all pointer-events-none" />

                      {/* Header Info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gold-500/10 pb-4 mb-4">
                        <div className="flex items-center gap-2 text-luxury-gold">
                          <Clock size={14} />
                          <span className="text-xs font-bold uppercase tracking-widest">{item.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-400 transition-colors">
                          <MapPin size={13} />
                          <span className="text-[10px] uppercase tracking-wider font-semibold">{item.location}</span>
                        </div>
                      </div>

                      {/* Timeline Details */}
                      <h4 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.description}
                      </p>

                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
