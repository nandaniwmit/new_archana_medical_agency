import { useState } from 'react';
import { SERVICES, FEATURED_CATEGORIES } from '../data';
import { Check, ArrowRight, Eye, Phone, MessageSquare } from 'lucide-react';
import LucideIcon from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const activeService = SERVICES.find(s => s.id === selectedService);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Comprehensive Inventory
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Healthcare Services
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            From pediatric baby formulas to critical cardiovascular capsules and clinical surgical gear, we provide a structured range of medical supplies.
          </p>
        </div>

        {/* Main Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((srv) => (
            <motion.div
              key={srv.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl overflow-hidden flex flex-col h-full group"
            >
              {/* Card Image */}
              <div className="h-44 overflow-hidden relative bg-teal-50">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/90 dark:bg-slate-900/95 text-teal-600 flex items-center justify-center shadow-md">
                  <LucideIcon name={srv.iconName} className="h-5 w-5" />
                </div>
              </div>

              {/* Card Copy */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-900 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(srv.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Inventory details</span>
                  </button>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Categories (Mini Grid) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white">
              Explore Featured Product Categories
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Our inventory lists over 10,000 pharmaceutical items sorted across dynamic anatomical therapeutic classes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {FEATURED_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 mb-3 font-semibold">
                  +
                </div>
                <h4 className="font-bold text-sm text-slate-800 dark:text-white line-clamp-1">{cat.name}</h4>
                <p className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold mt-1">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Expanded Service Detail Modal */}
      <AnimatePresence>
        {selectedService && activeService && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl relative"
            >
              {/* Modal Banner */}
              <div className="h-48 relative bg-teal-50">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
                    +
                  </div>
                  <h3 className="font-extrabold text-xl text-white">{activeService.title}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-1.5">Service Overview</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-3">Key Sub-Categories Available</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Check className="h-4.5 w-4.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="font-bold text-xs text-slate-800 dark:text-white">Interested in these?</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Send a snapshot of your list directly.</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        const text = `Hello New Archana Medical Agency, I am looking to purchase medicines/equipment related to: *${activeService.title}*. Could you please assist me with availability?`;
                        window.open(`https://api.whatsapp.com/send?phone=919934423919&text=${encodeURIComponent(text)}`, '_blank');
                      }}
                      className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 font-bold rounded-xl text-sm cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
