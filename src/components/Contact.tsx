import { useState, FormEvent, ChangeEvent } from 'react';
import { BUSINESS_INFO } from '../data';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number so we can reach you.');
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            Store Locator & Query
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect With Our Store
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            Have a bulk inquiry, custom medicine request, or business proposal? Reach us instantly through our store coordinates or submit the contact query.
          </p>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Address */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-xl">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Our Address</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {BUSINESS_INFO.location}
              </p>
              <p className="text-[10px] text-teal-600 font-semibold mt-1">
                📍 {BUSINESS_INFO.landmark}
              </p>
            </div>
          </div>

          {/* Card: Contact No */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-teal-50 dark:bg-teal-950/20 text-teal-600 rounded-xl">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Phone Number</h4>
              <p className="text-sm font-bold text-slate-800 dark:text-white mt-1.5">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:underline">{BUSINESS_INFO.phoneFormatted}</a>
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                Call for stock lookups and urgent support.
              </p>
            </div>
          </div>

          {/* Card: Email Address */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-600 rounded-xl">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Email Support</h4>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-2 truncate max-w-[170px]">
                {BUSINESS_INFO.email}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                Official queries & agency communications.
              </p>
            </div>
          </div>

          {/* Card: Hours */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-amber-600 rounded-xl">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Working Hours</h4>
              <div className="space-y-1 mt-2">
                {BUSINESS_INFO.workingHours.map((wh, whIdx) => (
                  <p key={whIdx} className="text-[10px] text-slate-600 dark:text-slate-400">
                    <strong>{wh.days}:</strong> {wh.timings}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map & Form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Map Embed */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-4">Store Location Map</h3>
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[400px] w-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                <iframe
                  title="New Archana Medical Agency Gaya Google Maps"
                  src={BUSINESS_INFO.mapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="flex items-center gap-2.5 mt-4 p-3 bg-red-50/50 dark:bg-red-950/10 text-red-800 dark:text-red-400 rounded-xl text-xs">
                <ShieldAlert className="h-4.5 w-4.5 flex-shrink-0" />
                <span>Need navigation? Open directly in external <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noreferrer" className="underline font-bold">Google Maps Navigation App</a>.</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Quick Inquiry Form</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Send us a direct message and our Tekari Road team will revert back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Singh"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 09934423919"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. customer@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message or Query *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Describe your medicine requirements, bulk inquiries, or equipment needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Inquiry Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-emerald-800 dark:text-emerald-400">Inquiry Received Successfully!</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Thank you. Prakash Chandra and the core customer response team will reach you on {formData.phone || 'your phone'} shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
