import { ActiveTab } from '../types';
import { BUSINESS_INFO } from '../data';
import { MapPin, Phone, MessageSquare, Clock, Heart, ShieldAlert } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleLinkClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2" onClick={() => handleLinkClick('home')}>
              <div className="h-9 w-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-extrabold text-lg cursor-pointer">
                +
              </div>
              <h4 className="text-white font-extrabold text-base sm:text-lg cursor-pointer hover:text-teal-400 transition-colors">
                {BUSINESS_INFO.name}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Serving the community of Gaya with 100% genuine pharmaceutical drugs, cold-chain stored diabetic care items, pediatric food supplies, and medical testing devices.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
              <span>Licensed Pharmacy</span>
              <span>•</span>
              <span>Bihar State Registry</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h5>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-teal-400 transition-colors cursor-pointer">Home</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-teal-400 transition-colors cursor-pointer">About Us</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-teal-400 transition-colors cursor-pointer">Services</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('gallery')} className="hover:text-teal-400 transition-colors cursor-pointer">Store Gallery</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('whatsapp-order')} className="hover:text-teal-400 transition-colors cursor-pointer">WhatsApp Order</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-teal-400 transition-colors cursor-pointer">Contact</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Healthcare Items */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">Medicines & Gear</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Cardiac & Blood Pressure Drugs</li>
              <li>Anti-Diabetic Formulations & Insulin</li>
              <li>Vitamins, Minerals & Health Drinks</li>
              <li>Digital Monitors & Testing Kits</li>
              <li>Infant Food & Pediatric Baby Skincare</li>
              <li>Orthopedic Knee Supports & Sprain Bandages</li>
            </ul>
          </div>

          {/* Column 4: Location Info */}
          <div className="lg:col-span-3 space-y-4 text-xs sm:text-sm">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider">Store Hours</h5>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <Clock className="h-4.5 w-4.5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-xs">Mon - Sat: 09:00 AM - 09:30 PM</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Sunday: 10:00 AM - 04:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4.5 w-4.5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold text-xs">Tekari Road, Gaya, Bihar</p>
                  <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noreferrer" className="text-[10px] text-teal-400 underline block mt-0.5">
                    Open in Google Maps App
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact CTAs */}
            <div className="flex gap-2 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call Store</span>
              </a>
              <button
                onClick={() => handleLinkClick('whatsapp-order')}
                className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Block (MANDATORY for medical sites) */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-500 space-y-2 text-[10px] sm:text-xs text-left">
          <div className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-wider">
            <ShieldAlert className="h-4 w-4 text-amber-500" />
            <span>Important Medical Disclaimer</span>
          </div>
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> The contents, pharmaceutical descriptions, dosage, and medical tips hosted on this website are compiled strictly for patient awareness, general health previews, and quick communication purposes. They do not constitute official clinical advice or prescription substitution. Patients must consult licensed healthcare practitioners before starting, stopping, or altering any pharmacological regimen. New Archana Medical Agency does not endorse self-medication, and Schedule H / psychiatric prescription medicines will strictly not be dispensed without a valid registered physician's physically stamped prescription form.
          </p>
        </div>

        {/* Copyright and Legal policies */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-500">
          <p className="flex flex-wrap items-center gap-1.5 justify-center md:justify-start">
            <span>© {currentYear} New Archana Medical Agency. All Rights Reserved.</span>
            <span>|</span>
            <span>Developed by <a href="https://main.webmakerit.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">WMIT</a></span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart className="h-3 w-3 text-red-500 fill-red-500" />
              <span>for community wellness.</span>
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="hover:text-teal-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-teal-400 cursor-pointer transition-colors">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-teal-400 cursor-pointer transition-colors">Disclaimer Note</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
