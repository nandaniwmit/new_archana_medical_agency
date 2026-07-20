import { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { BUSINESS_INFO } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import HealthTips from './components/HealthTips';
import Offers from './components/Offers';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { useTracker } from './hooks/useTracker';
import { ChevronRight, Home, Phone, MessageSquare, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [darkMode, setDarkMode] = useState(false);

  // Globally track SPA page views and interactions
  useTracker(activeTab);

  // 1. Dark Mode Class Toggler
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // 2. SEO Meta Data & Schema Markup Injections
  useEffect(() => {
    // Dynamic Title Update
    const titleMap: Record<ActiveTab, string> = {
      home: "New Archana Medical Agency | Genuine Pharmacy in Gaya, Bihar",
      about: "About Shree Prakash Chandra & Legacy - New Archana Medical Agency",
      services: "Prescription Drugs, Baby Care & Surgical Supplies - Our Services",
      gallery: "Racks & Storefront Photos - New Archana Medical Agency",
      'whatsapp-order': "Prescription Upload & WhatsApp Medicine Order - Gaya",
      contact: "Find Store Location on Tekari Road, Gaya - Contact Us"
    };
    document.title = titleMap[activeTab] || "New Archana Medical Agency";

    // Dynamic Meta Description Update
    let description = "Your trusted Tekari Road medical store for genuine prescription drugs, diabetic monitoring devices, baby skincare, and surgical packs. Order via WhatsApp.";
    if (activeTab === 'whatsapp-order') {
      description = "Upload your medical prescriptions or list required items to place instant orders via our styled WhatsApp ordering system. Get prompt service in Gaya town.";
    } else if (activeTab === 'contact') {
      description = "Visit New Archana Medical Agency at Tekari Road, Gaya, Bihar 823001. Find Google Map coordinates, direct click-to-call, and custom business working hours.";
    }
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', document.title);

    // Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

  }, [activeTab]);

  // 3. Dynamic JSON-LD Schema Marks Injection
  useEffect(() => {
    // Remove existing structured schema script tags to avoid multiple blocks
    const existingScripts = document.querySelectorAll('script[data-schema="archana-seo"]');
    existingScripts.forEach(script => script.remove());

    // Schemas
    const schemas = [
      // A. Pharmacy & Local Business Schema
      {
        "@context": "https://schema.org",
        "@type": "Pharmacy",
        "name": "New Archana Medical Agency",
        "alternateName": "Archana Medical Gaya",
        "description": "Your trusted medical store for 100% genuine medicines, baby care products, health supplements, surgical supplies, and home diagnostic monitors.",
        "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
        "logo": "https://ais-dev-bjo4ylo3oug3owgjpdfz2o-457061730116.asia-southeast1.run.app/assets/logo.png",
        "@id": "https://maps.google.com/?q=New+Archana+Medical+Agency+Tekari+Road+Gaya+Bihar",
        "url": window.location.origin,
        "telephone": "09934423919",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tekari Road",
          "addressLocality": "Gaya",
          "addressRegion": "Bihar",
          "postalCode": "823001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.792444",
          "longitude": "84.996174"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "21:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00",
            "closes": "16:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/ArchanaMedicalGaya",
          "https://twitter.com/ArchanaMedGaya"
        ]
      },
      // B. Breadcrumb List Schema
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": window.location.origin
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": activeTab.toUpperCase(),
            "item": `${window.location.origin}/#${activeTab}`
          }
        ]
      }
    ];

    // Inject tags
    schemas.forEach(schemaObj => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema', 'archana-seo');
      script.text = JSON.stringify(schemaObj);
      document.body.appendChild(script);
    });

  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300 font-sans">
      
      {/* 1. Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* 2. Breadcrumbs Nav (Renders conditionally for non-home views) */}
      <AnimatePresence mode="wait">
        {activeTab !== 'home' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="bg-slate-100 dark:bg-slate-900/60 border-b border-slate-200/50 dark:border-slate-800 py-3.5"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </button>
                <ChevronRight className="h-4.5 w-4.5 text-slate-300" />
                <span className="text-slate-800 dark:text-white capitalize font-bold">
                  {activeTab.replace('-', ' ')}
                </span>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Views Container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && (
              <>
                <Hero setActiveTab={setActiveTab} setSearchQueryState={() => {}} />
                <WhyChooseUs setActiveTab={setActiveTab} />
                <Services />
                <Offers />
                <HealthTips />
                <Testimonials />
                <FAQ />
                
                {/* Embedded Map Brief */}
                <div className="py-12 bg-slate-50 dark:bg-slate-950/40">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white">Our Gaya Store Storefront</h3>
                    <div className="h-80 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                      <iframe
                        title="New Archana Medical Agency Gaya Google Maps"
                        src={BUSINESS_INFO.mapsEmbedUrl}
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Contact CTA */}
                <section className="bg-gradient-to-r from-teal-600 to-teal-800 py-16 text-white text-center">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Need Medicines Urgently?</h2>
                    <p className="text-base sm:text-lg text-teal-100 max-w-xl mx-auto">
                      Do not delay your dose schedules. Settle order requests via our structured WhatsApp portal or call us directly.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="flex items-center gap-2 px-6 py-3.5 bg-white text-teal-700 hover:bg-slate-50 font-bold rounded-xl shadow-lg transition-colors text-sm sm:text-base"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Call Store Now</span>
                      </a>
                      <button
                        onClick={() => { setActiveTab('whatsapp-order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-700/15 transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        <MessageSquare className="h-5 w-5" />
                        <span>Order via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeTab === 'about' && (
              <>
                <About />
                <Offers />
              </>
            )}

            {activeTab === 'services' && (
              <>
                <Services />
                <Offers />
              </>
            )}

            {activeTab === 'gallery' && (
              <Gallery />
            )}

            {activeTab === 'whatsapp-order' && (
              <WhatsAppOrderForm />
            )}

            {activeTab === 'contact' && (
              <Contact />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* 5. Floating Widgets */}
      <FloatingWidgets setActiveTab={setActiveTab} />

    </div>
  );
}
