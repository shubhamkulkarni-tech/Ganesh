import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Shield, User, Mail, Briefcase, Calendar, CheckCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'nominate' | 'sponsor' | 'delegate' | null;
}

export default function Modals({ isOpen, onClose, type }: ModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: 'CEO of the Year',
    package: 'Platinum',
    message: '',
    designation: '',
    tickets: '1',
    reason: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      category: 'CEO of the Year',
      package: 'Platinum',
      message: '',
      designation: '',
      tickets: '1',
      reason: ''
    });
    onClose();
  };

  if (!isOpen || !type) return null;

  const getTitle = () => {
    switch (type) {
      case 'nominate':
        return 'Nominate for Excellence';
      case 'sponsor':
        return 'Partner with Leaders';
      case 'delegate':
        return 'Register as a Delegate';
      default:
        return '';
    }
  };

  const getSubTitle = () => {
    switch (type) {
      case 'nominate':
        return 'Submit nominations for the Global Excellence & Leadership Awards 2027';
      case 'sponsor':
        return 'Showcase your brand before the world\'s most influential visionaries';
      case 'delegate':
        return 'Secure your access to the leadership summit and gala evening';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="absolute inset-0 bg-[#02040f]/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl glass-card border border-gold-500/20 bg-luxury-dark/95 shadow-2xl"
        >
          {/* Accent spotlight */}
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none" />

          {/* Close button */}
          <button
            onClick={resetModal}
            className="absolute top-4 right-4 p-2 rounded-full border border-gold-500/10 hover:border-gold-500/30 text-gray-400 hover:text-white transition-all duration-300 z-10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-8 max-h-[85vh] overflow-y-auto no-scrollbar">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 text-xs text-luxury-gold uppercase tracking-widest font-medium mb-3">
                  {type === 'nominate' && <Award size={13} />}
                  {type === 'sponsor' && <Shield size={13} />}
                  {type === 'delegate' && <User size={13} />}
                  {type}
                </div>
                <h3 className="font-serif text-3xl font-semibold text-white tracking-wide">
                  {getTitle()}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{getSubTitle()}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 text-gold-500/40" size={16} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Corporate Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-gold-500/40" size={16} />
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Company Name</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3.5 text-gold-500/40" size={16} />
                    <input
                      type="text"
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                {type === 'delegate' ? (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Corporate Designation</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3.5 text-gold-500/40" size={16} />
                      <input
                        type="text"
                        required
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                        placeholder="Chief Innovation Officer"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Phone Number</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gold-500/40 text-sm font-medium">+1</span>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>
                )}

                {type === 'nominate' && (
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Award Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300"
                    >
                      <option value="Business Leadership & Excellence">Business Leadership & Excellence</option>
                      <option value="Technology & Innovation">Technology & Innovation</option>
                      <option value="Healthcare & Life Sciences">Healthcare & Life Sciences</option>
                      <option value="Finance & Banking">Finance & Banking</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Real Estate & Infrastructure">Real Estate & Infrastructure</option>
                      <option value="Retail & E-Commerce">Retail & E-Commerce</option>
                      <option value="Education & EdTech">Education & EdTech</option>
                    </select>
                  </div>
                )}

                {type === 'sponsor' && (
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Sponsorship Package</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300"
                    >
                      <option value="Platinum">Platinum Partner ($50,000)</option>
                      <option value="Gold">Gold Sponsor ($30,000)</option>
                      <option value="Silver">Silver Sponsor ($15,000)</option>
                      <option value="Media">Media Partner (Custom)</option>
                    </select>
                  </div>
                )}

                {type === 'delegate' && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Passes Quantity</label>
                    <select
                      name="tickets"
                      value={formData.tickets}
                      onChange={handleInputChange}
                      className="w-full bg-[#121212] border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300"
                    >
                      <option value="1">1 Pass ($1,500)</option>
                      <option value="2">2 Passes ($2,800)</option>
                      <option value="5">5 Passes (VIP Group - $6,500)</option>
                      <option value="10">Corporate Table (10 Passes - $12,000)</option>
                    </select>
                  </div>
                )}
              </div>

              {type === 'nominate' && (
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Nominee's Achievements & Core Pitch</label>
                  <textarea
                    name="reason"
                    required
                    rows={4}
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                    placeholder="Highlight core business metrics, innovative projects, leadership qualities and global impacts achieved in the past year..."
                  />
                </div>
              )}

              {type === 'sponsor' && (
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">Partnership Objective</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-gold-500/10 rounded-lg py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-300 placeholder-gray-600"
                    placeholder="Tell us about your company objectives and how you seek to partner with the Global Excellence Awards..."
                  />
                </div>
              )}

              {type === 'delegate' && (
                <div className="mb-6 bg-gold-500/5 border border-gold-500/20 rounded-lg p-4 flex gap-3">
                  <Calendar className="text-luxury-gold shrink-0 mt-0.5" size={16} />
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-white font-semibold mb-1">Inclusions</h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Access to all Leadership Summit keynotes, panel debates, premium business luncheon, evening VIP cocktails reception, awards ceremony, and grand gala champagne dinner.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-gold-500/10 pt-6 mt-2">
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-6 py-3 border border-gray-800 hover:border-gray-600 text-gray-400 hover:text-white rounded-lg text-sm font-semibold tracking-wider uppercase transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-luxury-dark rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(197,160,89,0.3)] hover:shadow-[0_4px_30px_rgba(197,160,89,0.6)]"
                >
                  Submit Application
                </button>
              </div>
            </form>
          ) : (
            <div className="p-12 text-center flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-full bg-gold-500/10 border-2 border-luxury-gold flex items-center justify-center text-luxury-gold mb-6"
              >
                <CheckCircle size={40} />
              </motion.div>

              <h3 className="font-serif text-3xl font-semibold text-white tracking-wide mb-2">
                Application Received
              </h3>
              <p className="text-gray-400 text-sm max-w-md mb-8">
                Thank you, <span className="text-luxury-gold font-medium">{formData.name}</span>. Your {type} application has been successfully logged. Our global events executive committee will review your submission details and contact you within 48 business hours.
              </p>

              <button
                onClick={resetModal}
                className="px-8 py-3 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-300"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
