import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-luxury-darker overflow-hidden px-6 md:px-12 border-t border-gold-500/10">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-8 pointer-events-none"
        style={{ backgroundImage: "url('networking_lounge.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/90 via-luxury-darker/95 to-luxury-dark/90 z-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold block mb-3">
            Inquiries & Bookings
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            Get in Touch with the <span className="gold-text-gradient">Secretariat</span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mb-6" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Have questions regarding nominations, corporate tables pricing, or sponsorship options? Submit your inquiry, and our event committee will assist you.
          </p>
        </div>

        {/* Form and Location Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details & Stylized Map (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Details Card */}
            <div className="glass-card rounded-2xl p-8 border border-gold-500/10 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
              <h4 className="font-serif text-xl font-bold text-white tracking-wide mb-6">
                Secretariat Headquarters
              </h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-luxury-gold shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Venue Address</h5>
                    <p className="text-white text-sm leading-relaxed">
                      DoubleTree by Hilton, Cape Town, <br />
                      31 Brickfield Rd, Woodstock, Cape Town, 7925
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-luxury-gold shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Executive Email</h5>
                    <p className="text-white text-sm hover:text-luxury-gold transition-colors">
                      secretariat@gela-awards.org
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg border border-gold-500/20 bg-gold-500/5 flex items-center justify-center text-luxury-gold shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Secretariat Helpline</h5>
                    <p className="text-white text-sm">
                      +971 50 184 3870 <span className="text-[10px] text-gray-500 block mt-0.5">(Mon - Fri, 9:00 AM - 6:00 PM GMT+4)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="border-t border-gold-500/10 pt-6 mt-8">
                <h5 className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-4">Official Media Channels</h5>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Linkedin, url: '#', label: 'LinkedIn' },
                    { icon: Twitter, url: '#', label: 'Twitter' },
                    { icon: Youtube, url: '#', label: 'YouTube' },
                    { icon: Instagram, url: '#', label: 'Instagram' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 rounded-lg border border-gold-500/10 hover:border-luxury-gold/50 bg-[#121212] hover:bg-gold-500/5 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stylized Marina Bay Sands Map SVG */}
            <div className="glass-card rounded-2xl p-4 border border-gold-500/10 bg-black/60 relative overflow-hidden h-[180px] flex items-center justify-center">
              <div className="absolute top-3 left-4 z-10">
                <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping" />
                  MBS Convention Hall Node
                </span>
              </div>

              {/* High-end vector mockup map */}
              <svg viewBox="0 0 400 150" className="w-full h-full stroke-[0.5] stroke-gold-500/25 fill-none opacity-60">
                {/* Coastal line */}
                <path d="M 0 90 Q 150 110, 250 50 T 400 80" strokeWidth="1" stroke="#c5a059" opacity="0.4" />
                {/* Grid roads */}
                <line x1="50" y1="0" x2="100" y2="150" strokeDasharray="3 3" />
                <line x1="180" y1="0" x2="220" y2="150" />
                <line x1="320" y1="0" x2="350" y2="150" strokeDasharray="2 2" />
                <path d="M 20 20 Q 150 40, 380 10" />
                <path d="M 10 130 Q 180 110, 390 140" />

                {/* Marina Bay sands curves block */}
                <path d="M 230 70 C 235 60, 245 60, 250 70 M 245 70 C 250 60, 260 60, 265 70 M 260 70 C 265 60, 275 60, 280 70" strokeWidth="2" stroke="#c5a059" />
                <line x1="230" y1="70" x2="280" y2="70" strokeWidth="1" stroke="#c5a059" />

                {/* Location Pulse Node */}
                <g className="cursor-pointer">
                  <circle cx="255" cy="65" r="8" fill="url(#mapGlow)" className="animate-ping origin-center" style={{ animationDuration: '2.5s' }} />
                  <circle cx="255" cy="65" r="3" fill="#fff" stroke="#c5a059" strokeWidth="1" />
                </g>

                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#c5a059" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Mini tag */}
              <div className="absolute bottom-3 right-4 text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                GPS: 1.2829° N, 103.8586° E
              </div>
            </div>

          </div>

          {/* Contact Form Card (Col 7) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 border border-gold-500/10 bg-gradient-to-b from-[#121212] to-[#0A0A0A] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h4 className="font-serif text-2xl font-bold text-white tracking-wide mb-2">
                    Send Secretariat Message
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Corporate Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300"
                    >
                      <option value="General Inquiry">General Summit Inquiry</option>
                      <option value="Corporate Table Bookings">Corporate Table Booking</option>
                      <option value="Sponsorship Partnership">Sponsorship Opportunity</option>
                      <option value="Press Accreditations">Media Accreditation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">Detailed Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Write your details inquiry regarding delegation sizes, invoicing options, or custom award guidelines..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-luxury-dark font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.2)] hover:shadow-[0_4px_30px_rgba(197,160,89,0.5)]"
                  >
                    <Send size={14} />
                    Send Secure Message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center p-8 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-luxury-gold flex items-center justify-center text-luxury-gold mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">Message Dispatched</h4>
                  <p className="text-gray-400 text-xs max-w-sm mb-8 leading-relaxed">
                    Thank you for contacting the GELA Secretariat. Your ticket has been logged. An officer from the Singapore organizing team will reply to <span className="text-luxury-gold font-semibold">{formData.email}</span> within 24 business hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
