import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data';
import { ActiveTab } from '../types';
import { MessageSquare, Phone, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWidgetsProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function FloatingWidgets({ setActiveTab }: FloatingWidgetsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleWhatsAppClick = () => {
    setActiveTab('whatsapp-order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3.5 items-end">
      
      {/* Floating Action Buttons */}
      <div className="flex flex-col gap-3">
        {/* Floating Call Button */}
        <motion.a
          href={`tel:${BUSINESS_INFO.phone}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="h-12 w-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg hover:bg-teal-700 transition-colors"
          title="Call New Archana Medical Agency"
          aria-label="Call store"
        >
          <Phone className="h-5.5 w-5.5" />
        </motion.a>

        {/* Floating WhatsApp Form Link */}
        <motion.button
          onClick={handleWhatsAppClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="h-12 w-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer"
          title="Upload Prescription & Order"
          aria-label="WhatsApp Order Form"
        >
          <MessageSquare className="h-5.5 w-5.5" />
        </motion.button>
      </div>

      {/* Back to Top button (Conditional) */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            whileHover={{ scale: 1.05 }}
            className="h-10 w-10 rounded-xl bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white flex items-center justify-center shadow-md cursor-pointer"
            title="Back to Top"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
