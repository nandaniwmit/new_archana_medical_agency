import { useState } from 'react';
import { OFFERS } from '../data';
import { Sparkles, CheckCircle, Copy, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Offers() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code?: string) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Loyalty Discounts
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Special Offers & Promotions
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            We provide stable pricing with specialized cost concessions on generic, recurring therapeutic packs. Check our active vouchers below.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="relative p-6.5 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300"
            >
              {/* Top Accent corner badge */}
              <div className="absolute top-0 right-0 h-16 w-16 bg-teal-500/10 dark:bg-teal-500/5 group-hover:bg-teal-500/20 rounded-bl-3xl flex items-center justify-center transition-colors">
                <Award className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              </div>

              <div className="space-y-4">
                {/* Discount Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-teal-100/70 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 rounded-full text-xs font-extrabold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{offer.discount}</span>
                </div>

                <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg leading-tight mt-1">
                  {offer.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Code Box */}
              {offer.code && (
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between gap-3">
                  <div className="p-2 px-3 rounded-lg bg-teal-50/50 dark:bg-slate-900 border border-teal-100/50 dark:border-slate-800 font-mono text-xs text-teal-700 dark:text-teal-400 font-bold tracking-wider">
                    CODE: {offer.code}
                  </div>
                  <button
                    onClick={() => handleCopyCode(offer.id, offer.code)}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer"
                  >
                    {copiedId === offer.id ? (
                      <>
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                        <span className="text-emerald-500">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Loyalty reminder */}
        <p className="text-[11px] text-slate-400 max-w-lg mx-auto leading-relaxed mt-4">
          * Offers cannot be stacked together.Concessions are applicable only on standard non-restricted pharmacological classifications and must comply with maximum retail price rules of National Pharmaceutical Pricing Authority.
        </p>

      </div>
    </section>
  );
}
