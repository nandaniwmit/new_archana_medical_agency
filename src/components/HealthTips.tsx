import { useState } from 'react';
import { HEALTH_TIPS } from '../data';
import { HealthTip } from '../types';
import { BookOpen, Calendar, Clock, ChevronRight, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HealthTips() {
  const [activeTip, setActiveTip] = useState<HealthTip | null>(null);

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Community Wellness
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latest Health Tips & Blog
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Our responsibility doesn't end at selling drugs. Read clinical advice and guidelines vetted by Shree Prakash Chandra on storing medicines, monitoring vitals, and sugar safety.
          </p>
        </div>

        {/* Blog Post List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {HEALTH_TIPS.map((tip) => (
            <div
              key={tip.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col justify-between group h-full hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="h-48 relative overflow-hidden bg-teal-50">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-[10px] font-extrabold text-teal-700 dark:text-teal-400 uppercase tracking-wider shadow-sm">
                    {tip.category}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3.5 text-slate-400 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-teal-600" />
                      {tip.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-teal-600" />
                      {tip.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg leading-tight group-hover:text-teal-600 transition-colors">
                    {tip.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {tip.excerpt}
                  </p>
                </div>
              </div>

              {/* View details */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-50 dark:border-slate-800/40">
                <button
                  onClick={() => setActiveTip(tip)}
                  className="w-full flex items-center justify-center gap-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Read Full Article</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Expanded Article Modal */}
      <AnimatePresence>
        {activeTip && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl relative"
            >
              {/* Image banner */}
              <div className="h-48 sm:h-56 relative bg-teal-50">
                <img
                  src={activeTip.imageUrl}
                  alt={activeTip.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <button
                  onClick={() => setActiveTip(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-600 text-[10px] font-extrabold text-white uppercase tracking-wider">
                    {activeTip.category}
                  </span>
                  <h3 className="font-extrabold text-lg sm:text-xl text-white mt-2 leading-tight">{activeTip.title}</h3>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto text-left">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-teal-600" />
                    Published: {activeTip.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-teal-600" />
                    {activeTip.readTime}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {activeTip.excerpt}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
                  {activeTip.content}
                </p>

                <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-2xl flex items-start gap-3 mt-4 border border-teal-100/50 dark:border-teal-900">
                  <Heart className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-xs text-teal-800 dark:text-teal-400 uppercase tracking-widest">Wellness Reminder</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">If you have any doubts about your medication storage or readouts, consult Shree Prakash Chandra or our experienced pharmacists directly on your next store visit.</p>
                  </div>
                </div>
              </div>

              {/* Close Row */}
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800/60 flex justify-end">
                <button
                  onClick={() => setActiveTip(null)}
                  className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 font-bold rounded-xl text-xs cursor-pointer"
                >
                  Close Article
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
