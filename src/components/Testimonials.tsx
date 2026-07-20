import { TESTIMONIALS } from '../data';
import { Star, ShieldCheck, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const averageRating = (
    TESTIMONIALS.reduce((acc, current) => acc + current.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

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
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
              Customer Satisfaction
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
              Why Customers Trust Us
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Read real feedback from local residents, doctors, and chronic patients in Gaya who rely on New Archana Medical Agency for their daily healthcare needs.
            </p>
          </div>

          {/* Quick Rating Badge */}
          <div className="p-5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100/60 dark:border-teal-900 flex items-center gap-4 flex-shrink-0">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">{averageRating}</p>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1.5">
                Gaya Google Rating
              </p>
            </div>
            <div className="h-12 w-px bg-teal-200/50 dark:bg-teal-900" />
            <div className="text-left">
              <p className="font-bold text-sm text-slate-800 dark:text-white">100% Genuine Reviews</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[150px]">
                Collected directly from our physical visitor diary & digital suggestions book.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300"
            >
              {/* Star and Verified Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`h-4 w-4 ${
                          idx < review.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-200 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Verification Status */}
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-teal-700 bg-teal-50 dark:text-teal-400 dark:bg-teal-950/40 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="h-3 w-3" />
                      <span>Verified Patient</span>
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{review.author}</h4>
                  {review.location && (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold block mt-0.5">
                      📍 {review.location}
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-slate-400 font-semibold">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Suggestion Box Callout */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200/50 p-6">
          <MessageSquare className="h-8 w-8 text-teal-600 mx-auto mb-3" />
          <h4 className="font-bold text-slate-800 dark:text-white">Are You a Satisfied Customer?</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Your valuable suggestions and ratings help us improve medicine stocks. Share your positive review or feedback directly on your next visit or write to us on WhatsApp!
          </p>
        </div>

      </div>
    </section>
  );
}
