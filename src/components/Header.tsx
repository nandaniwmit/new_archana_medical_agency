import { useState, useEffect } from 'react';
import { ActiveTab } from '../types';
import { BUSINESS_INFO } from '../data';
import { Menu, X, Phone, MessageSquare, Sun, Moon, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scycled, setScycled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScycled(true);
      } else {
        setScycled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; tab: ActiveTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Services', tab: 'services' },
    { label: 'Gallery', tab: 'gallery' },
    { label: 'WhatsApp Order', tab: 'whatsapp-order' },
    { label: 'Contact', tab: 'contact' },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Emergency Contact Banner */}
      <div className="bg-red-600 dark:bg-red-700 text-white py-2 px-4 text-xs sm:text-sm font-medium flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <ShieldAlert className="h-4 w-4 animate-pulse flex-shrink-0" />
          <span><strong>Emergency Contact:</strong> For immediate assistance, call us directly at {BUSINESS_INFO.phoneFormatted}</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>Open Today: 09:00 AM - 09:30 PM</span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scycled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white dark:bg-slate-900 shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-md relative transition-transform group-hover:scale-105">
                <div className="w-5 h-1.5 bg-white rounded-full"></div>
                <div className="w-1.5 h-5 bg-white rounded-full absolute"></div>
              </div>
              <div>
                <h1 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-800 dark:text-white leading-none tracking-tight uppercase">
                  New Archana <span className="text-teal-600 dark:text-teal-400">Medical</span>
                </h1>
                <p className="text-[9px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold tracking-widest uppercase mt-1">
                  Pharmacy & Agency • Gaya
                </p>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    activeTab === item.tab
                      ? 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400'
                      : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Action Menu: Theme Toggle + Contact CTA */}
            <div className="hidden sm:flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Call Now Button */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 text-sm font-bold transition-all"
              >
                <Phone className="h-4 w-4 text-teal-600" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Order Button */}
              <button
                onClick={() => handleNavClick('whatsapp-order')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp Order</span>
              </button>
            </div>

            {/* Mobile Actions block (Only Theme, Call, Menu) */}
            <div className="flex sm:hidden items-center gap-1">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-1.5 rounded-lg text-teal-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                aria-label="Call Business"
              >
                <Phone className="h-5 w-5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Open menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop-only hamburger for medium screen sizes (Tablet navigation fallback) */}
            <div className="hidden lg:hidden sm:flex items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Open menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.tab}
                    onClick={() => handleNavClick(item.tab)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      activeTab === item.tab
                        ? 'bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 pl-6'
                        : 'text-slate-700 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Extra Drawer CTAs */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                  <button
                    onClick={() => handleNavClick('whatsapp-order')}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm transition-all"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Upload Prescription & Order</span>
                  </button>
                  <div className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">
                    📍 Tekari Road, Gaya, Bihar | 📞 {BUSINESS_INFO.phoneFormatted}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
