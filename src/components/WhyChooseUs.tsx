import { WHY_CHOOSE_US } from '../data';
import LucideIcon from './LucideIcon';
import { ActiveTab } from '../types';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function WhyChooseUs({ setActiveTab }: WhyChooseUsProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Uncompromised Standards
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Our Pharmacy?
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            For over two decades, Gaya residents have trusted us for healthcare essentials. Here is what sets us apart from regular medicine stores.
          </p>
        </div>

        {/* Features Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 bg-slate-50 hover:bg-white dark:bg-slate-800/40 dark:hover:bg-slate-800 rounded-2xl border border-slate-100 hover:border-teal-500/20 dark:border-slate-800 dark:hover:border-teal-500/20 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="h-12 w-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                <LucideIcon name={item.icon} className="h-6 w-6" />
              </div>

              {/* Title & Description */}
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner with brief prompt */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-teal-700/10">
          <div className="text-center md:text-left space-y-2">
            <h4 className="font-bold text-xl">Need Immediate Stock Verification?</h4>
            <p className="text-teal-100 text-sm max-w-xl">Send us your physical doctor prescription. Our Gaya pharmacists will verify pricing, alternative generics, and package availability on WhatsApp in 5 minutes.</p>
          </div>
          <button
            onClick={() => {
              setActiveTab('whatsapp-order');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-white hover:bg-slate-50 text-teal-700 font-bold rounded-xl shadow-md transition-colors flex-shrink-0 cursor-pointer"
          >
            Send Prescription Now
          </button>
        </div>

      </div>
    </section>
  );
}
