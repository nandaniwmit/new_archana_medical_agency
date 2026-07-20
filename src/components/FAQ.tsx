import { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1"); // pre-open first FAQ
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Ordering' | 'Safety & Quality' | 'Pricing' | 'Payments'>('all');

  const categories: { label: string; value: typeof selectedCategory }[] = [
    { label: 'All FAQs', value: 'all' },
    { label: 'Ordering & Delivery', value: 'Ordering' },
    { label: 'Safety & Quality', value: 'Safety & Quality' },
    { label: 'Pricing & Discounts', value: 'Pricing' },
    { label: 'Payments', value: 'Payments' }
  ];

  // Filter FAQS
  const filteredFaqs = FAQS.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Support Center
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Have a question regarding prescription regulations, cold-chain storage guarantees, payment structures, or WhatsApp deliveries? Find immediate answers below.
          </p>
        </div>

        {/* Dynamic Controls: Search & Category Filter */}
        <div className="space-y-4 mb-8">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-teal-50 text-teal-700 border border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-900'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 overflow-hidden shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left font-semibold text-slate-800 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5.5 w-5.5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{faq.question}</span>
                  </div>
                  <span className="flex-shrink-0 p-1 bg-slate-50 dark:bg-slate-800 rounded-md">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-500 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 leading-relaxed">
                        {faq.answer}
                        
                        <div className="mt-3 text-[11px] text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">
                          Tag: {faq.category}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 p-6">
            <HelpCircle className="h-10 w-10 text-slate-400 mx-auto mb-3" />
            <p className="font-bold text-slate-700 dark:text-white">No questions matched your search</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
              Please clear your search filter or call our store directly on {BUSINESS_INFO.phoneFormatted} to get immediate support.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
