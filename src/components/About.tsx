import { BUSINESS_INFO } from '../data';
import { Target, Eye, ShieldCheck, HeartPulse, Sparkles, Building, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      title: "Authenticity First",
      desc: "We strictly forbid parallel or secondary sourcing. 100% of our pharmaceuticals are verified and traceable.",
      icon: ShieldCheck
    },
    {
      title: "Patient-First Care",
      desc: "Medicines are not commodities. We guide and explain dosage frequencies and side-effect precautions meticulously.",
      icon: HeartPulse
    },
    {
      title: "Ethical Sourcing",
      desc: "Our business values trust over immediate margin profits. We offer clear billing with honest discounts.",
      icon: Sparkles
    },
    {
      title: "Community Growth",
      desc: "Providing stability in Gaya's healthcare supplies during critical epidemics or local monsoon challenges.",
      icon: Building
    }
  ];

  const timeline = [
    { year: "1998", title: "Establishment", desc: "Shree Prakash Chandra laid the foundation of Archana Medical on Tekari Road with a vision to supply genuine medicines." },
    { year: "2008", title: "Corporate Partnerships", desc: "Acquired direct distributorship partnerships with leading brands (Cipla, Abbott, Sun Pharma, GlaxoSmithKline)." },
    { year: "2015", title: "Diabetic Specialization", desc: "Installed continuous power-back insulated refrigeration units to preserve sensitive items like Insulin." },
    { year: "2021", title: "Digital Order Integration", desc: "Began accepting digital prescription snapshots and integrated WhatsApp ordering to reduce waiting times." },
    { year: "2026", title: "Modern Hub Redesign", desc: "Expanded with a responsive medical equipment corner and digital stock indexers for faster search." }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Our Foundation
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Journey & core Values
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Learn more about the trust, quality, and legacy behind New Archana Medical Agency—your neighborhood pharmacy since 1998.
          </p>
        </div>

        {/* Business Story Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Sustaining Health in Gaya For Over {new Date().getFullYear() - 1998} Years
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              New Archana Medical Agency was founded in 1998 by Shree Prakash Chandra with a simple, robust objective: to ensure that the residents of Gaya have easy, reliable, and affordable access to genuine lifesaving medications.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              At a time when counterfeit or substandard medications pose a grave risk to public health, we committed ourselves to ethical sourcing. We operate as a licensed medical agency, working exclusively with authorized distribution networks of leading pharmaceutical companies.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you require long-term chronic management medicines, everyday first aid kits, or critical surgical dressings, our organized pharmacy on Tekari Road is stocked and ready to serve you.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 bg-teal-50">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Pharmacist dispensing medicines"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <Quote className="h-6 w-6 text-teal-300 mb-2" />
              <p className="text-xs italic text-teal-55 font-medium">
                "Our store prioritizes your recovery. We do not sell alternative brands unless explicitly authorized by the prescribing doctor."
              </p>
              <p className="text-[10px] uppercase font-bold tracking-wider mt-3 text-right text-teal-200">
                — Prakash Chandra, Owner
              </p>
            </div>
          </div>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-teal-100/80 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex-shrink-0">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">Our Mission</h4>
              <p className="mt-2.5 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                To safeguard the health of our community by strictly supplying 100% genuine medications, maximizing patient convenience through modern digital ordering workflows, and providing ethical drug counseling.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-teal-100/80 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex-shrink-0">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-lg">Our Vision</h4>
              <p className="mt-2.5 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                To remain Gaya's premier, gold-standard pharmaceutical retailer. We envision a community where every family can buy necessary and high-precision medication without fear of false stock, artificial price hikes, or expired products.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white">Our Core Pillars</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Every customer transaction at New Archana Medical Agency is anchored in four unwavering ethical rules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, vIdx) => {
              const ValueIcon = v.icon;
              return (
                <div key={vIdx} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm text-center">
                  <div className="h-11 w-11 bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ValueIcon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{v.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Store Timeline */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white">Our Historical Timeline</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Tracing our key progress logs, technology inclusions, and community milestones.
            </p>
          </div>

          <div className="relative border-l-2 border-teal-100 dark:border-teal-900 max-w-2xl mx-auto pl-6 sm:pl-8 space-y-8">
            {timeline.map((item, tIdx) => (
              <div key={tIdx} className="relative group">
                {/* Node circle */}
                <div className="absolute -left-[31px] sm:-left-[39px] h-6 w-6 rounded-full bg-white dark:bg-slate-900 border-4 border-teal-500 flex-shrink-0 group-hover:bg-teal-500 transition-colors" />
                
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-extrabold text-xs">
                    {item.year}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mt-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Message Callout */}
        <div className="p-8 rounded-3xl bg-teal-50 dark:bg-teal-950/20 border border-teal-100/60 dark:border-teal-900 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-3 text-center">
              <div className="h-20 w-20 rounded-full bg-teal-600 text-white flex items-center justify-center text-3xl font-extrabold mx-auto border-4 border-white shadow-md">
                SPC
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-sm mt-3">{BUSINESS_INFO.ownerName}</p>
              <p className="text-[10px] text-teal-700 dark:text-teal-400 font-extrabold uppercase mt-0.5">Proprietor & Founder</p>
            </div>

            <div className="md:col-span-9 space-y-3">
              <h4 className="font-bold text-lg text-slate-900 dark:text-white">A Message to Our Gaya Patrons</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "We founded New Archana Medical Agency with the understanding that when someone enters a pharmacy, they are seeking more than merchandise; they are trusting us with their health, their family’s comfort, and their peace of mind. We have kept that trust since 1998 by strictly avoiding double markets, expired inventories, or unverified generic batches. We promise to continue serving Gaya with the same transparency and prompt support in the years to come."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
