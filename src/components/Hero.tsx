import { useState, FormEvent } from 'react';
import { ActiveTab, Medicine } from '../types';
import { BUSINESS_INFO, MEDICINES_DATABASE } from '../data';
import { Phone, MessageSquare, MapPin, Search, CheckCircle, AlertCircle, HelpCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
  setSearchQueryState: (q: string) => void;
}

export default function Hero({ setActiveTab, setSearchQueryState }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Medicine[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    const filtered = MEDICINES_DATABASE.filter(m =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
    setHasSearched(true);
  };

  const handleMedicineSelect = (med: Medicine) => {
    setSelectedMedicine(med);
    setInquirySuccess(false);
  };

  const triggerWhatsAppInquiry = (med: Medicine) => {
    const text = `Hello New Archana Medical Agency, I am looking for the medicine: *${med.name}* (${med.form}). Is it currently available for purchase? Please let me know the price and packaging size. Thank you!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=${BUSINESS_INFO.whatsappNumber}&text=${encoded}`, '_blank');
  };

  const sendCustomInquiry = (e: FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setSearchQuery('');
      setSearchResults([]);
      setHasSearched(false);
    }, 4000);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-slate-950 dark:to-teal-950/10 py-12 md:py-20 overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/80 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-teal-600 animate-pulse" />
              Serving Gaya faithfully since 1998
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
                <span className="block text-teal-600 dark:text-teal-400 font-medium text-lg sm:text-xl tracking-wider uppercase mb-2">
                  New Archana Medical Agency
                </span>
                Your Trusted Pharmacy in Tekari, Gaya
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Providing 100% genuine medicines, specialized healthcare products, surgical supplies, baby care, personal care, and daily medical essentials at highly affordable prices.
              </p>
            </motion.div>

            {/* Main Hero Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-lg shadow-teal-600/15 hover:shadow-teal-700/25 transition-all text-sm sm:text-base"
              >
                <Phone className="h-5 w-5" />
                <span>Call Store Now</span>
              </a>

              <button
                onClick={() => setActiveTab('whatsapp-order')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/15 hover:shadow-emerald-700/25 transition-all text-sm sm:text-base cursor-pointer"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href={BUSINESS_INFO.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-800 dark:hover:bg-slate-800 font-semibold transition-all text-sm sm:text-base"
              >
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Get Directions</span>
              </a>
            </motion.div>

            {/* Quick Live Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-lg mx-auto lg:mx-0 pt-4"
            >
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search medicines (e.g., Paracetamol, Metformin...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-24 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm shadow-md"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-4 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Search
                </button>
              </form>

              {/* Medicine Search Results dropdown inside Hero */}
              <AnimatePresence>
                {hasSearched && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute z-20 left-4 right-4 sm:left-auto lg:w-[480px] mt-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl p-4 overflow-y-auto max-h-[300px]"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 mb-3">
                      <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                        Search Results ({searchResults.length})
                      </h4>
                      <button
                        type="button"
                        onClick={() => { setHasSearched(false); setSearchQuery(''); }}
                        className="text-slate-400 hover:text-slate-600 p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    {searchResults.length > 0 ? (
                      <div className="space-y-3">
                        {searchResults.map((med) => (
                          <div
                            key={med.id}
                            className="p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 flex items-center justify-between cursor-pointer"
                            onClick={() => handleMedicineSelect(med)}
                          >
                            <div>
                              <span className="font-semibold text-sm text-slate-800 dark:text-white block">
                                {med.name}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">
                                {med.category} • {med.form}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                                <CheckCircle className="h-3 w-3" /> In Stock
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <HelpCircle className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                          Medicine not in our instant catalog list
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                          But we have over 10,000+ stock medicines at our Gaya store! Send a quick WhatsApp request to verify.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            const text = `Hello New Archana Medical Agency, I am looking for the medicine: *${searchQuery}*. Is it currently in stock at your Tekari Road, Gaya branch? Thank you!`;
                            window.open(`https://api.whatsapp.com/send?phone=${BUSINESS_INFO.whatsappNumber}&text=${encodeURIComponent(text)}`, '_blank');
                          }}
                          className="mt-3.5 inline-flex items-center gap-1 text-xs font-bold px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                        >
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>Ask on WhatsApp</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Healthcare Banner Display */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-[420px] lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 aspect-[4/3] bg-teal-100"
            >
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
                alt="New Archana Medical Agency Storefront Gaya"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-left">
                  <p className="text-teal-400 text-xs font-bold uppercase tracking-widest">Storefront</p>
                  <p className="font-bold text-lg">Tekari Road, Gaya, Bihar</p>
                  <p className="text-xs text-slate-300 mt-1">Visit us for secure dispensing & massive discounts on genuine drugs.</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Overlap Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-2 sm:right-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hidden sm:flex items-center gap-3"
            >
              <div className="h-10 w-10 bg-teal-100 dark:bg-teal-950/50 rounded-full flex items-center justify-center text-teal-600 font-bold">
                25+
              </div>
              <div className="text-left">
                <p className="font-bold text-sm text-slate-800 dark:text-white leading-none">Years of Trust</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">In Gaya Pharmacy Sector</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-6 -left-2 sm:left-4 bg-white dark:bg-slate-900 p-3.5 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hidden sm:flex items-center gap-3"
            >
              <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
              <div className="text-left">
                <p className="font-bold text-xs text-slate-800 dark:text-white">100% Genuine</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Direct distributor sourcing</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Selected Medicine Detail Modal (Stock look up modal) */}
      <AnimatePresence>
        {selectedMedicine && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-100 dark:border-slate-800 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedMedicine(null)}
                className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-teal-100 dark:bg-teal-950 text-teal-600 rounded-full flex items-center justify-center font-bold text-xl">
                  +
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{selectedMedicine.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{selectedMedicine.category} • {selectedMedicine.form}</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm">
                <p>{selectedMedicine.description}</p>
                
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Availability:</span>
                  <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
                    <CheckCircle className="h-3.5 w-3.5" /> In Stock at Gaya Store
                  </span>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 border-l-4 border-teal-500 pl-3">
                  Our pharmacists will verify your physical doctor's prescription upon collection at Tekari Road.
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => triggerWhatsAppInquiry(selectedMedicine)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Inquire Price</span>
                  </button>
                  <button
                    onClick={() => setSelectedMedicine(null)}
                    className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
