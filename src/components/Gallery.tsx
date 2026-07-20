import { useState, MouseEvent } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { ZoomIn, Eye, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'storefront' | 'medicines' | 'products' | 'equipment'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const filters: { label: string; value: typeof activeFilter }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Storefront', value: 'storefront' },
    { label: 'Medicine Shelves', value: 'medicines' },
    { label: 'Healthcare Products', value: 'products' },
    { label: 'Medical Equipment', value: 'equipment' },
  ];

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIdx = lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIdx);
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Visual Transparency
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Store & Product Gallery
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            A visual overview of our sterile, organized inventory racks, specialized medical testing devices, and premium baby products at Tekari Road.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid Masonry Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 aspect-square cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="p-1 rounded-md bg-teal-600 text-white">
                      <ZoomIn className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-teal-400">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-white text-base leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-xs mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Subtle static icon indicator */}
                <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 flex items-center justify-center opacity-70 group-hover:opacity-0 transition-opacity">
                  <Eye className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if any */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">No images available for this filter.</p>
          </div>
        )}
      </div>

      {/* Lightbox Pop-up Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Left Trigger */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Stage Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl w-full flex flex-col items-center gap-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 max-h-[70vh] flex items-center justify-center shadow-2xl">
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain pointer-events-none rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Meta info */}
              <div className="text-center max-w-2xl px-4">
                <span className="text-[10px] text-teal-400 uppercase tracking-widest font-extrabold">
                  Category: {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>

            {/* Right Trigger */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
