import { useState, useRef, ChangeEvent, DragEvent, FormEvent } from 'react';
import { BUSINESS_INFO } from '../data';
import { WhatsAppOrder } from '../types';
import { MessageSquare, Phone, Upload, CheckCircle2, FileText, AlertCircle, Trash2, Calendar, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppOrderForm() {
  const [formData, setFormData] = useState<WhatsAppOrder>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicinesRequired: '',
    hasPrescription: false,
    uploadedPrescriptionName: '',
    prescriptionImage: '',
    additionalMessage: '',
    preferredDeliveryTime: 'Afternoon (12:00 PM - 04:00 PM)'
  });

  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isFormValidated, setIsFormValidated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData(prev => ({ ...prev, hasPrescription: checked }));
  };

  // Drag and drop handlers
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    // Validate is image or pdf
    const isValidType = file.type.startsWith('image/') || file.type === 'application/pdf';
    if (!isValidType) {
      alert('Invalid file format. Please upload an image (PNG, JPG, JPEG) or a PDF copy of your prescription.');
      return;
    }

    setUploadProgress(10);
    // Simulate upload speed
    const timer = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(timer);
          setFormData(prevData => ({
            ...prevData,
            hasPrescription: true,
            uploadedPrescriptionName: file.name,
            prescriptionImage: file.type.startsWith('image/') ? URL.createObjectURL(file) : ''
          }));
          return null;
        }
        return prev + 30;
      });
    }, 150);
  };

  const removePrescription = () => {
    setFormData(prev => ({
      ...prev,
      hasPrescription: false,
      uploadedPrescriptionName: '',
      prescriptionImage: ''
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const sendOrderViaWhatsApp = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.customerName.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!formData.mobileNumber.trim()) {
      alert('Please enter your mobile number.');
      return;
    }
    if (!formData.medicinesRequired.trim()) {
      alert('Please state the names of the medicines you require.');
      return;
    }

    // Build Formatted Text Message exactly as specified in prompt schema
    const prescriptionStatusText = formData.hasPrescription ? "Yes (Prescription attached in WhatsApp chat)" : "No";
    
    const textMessage = 
`Hello New Archana Medical Agency,

Customer Name:
${formData.customerName.trim()}

Phone:
${formData.mobileNumber.trim()}

Medicine Required:
${formData.medicinesRequired.trim()}

Address:
${formData.address.trim() || 'Not Provided (Will pick up at Tekari Road Store)'}

Prescription:
${prescriptionStatusText}

Message:
${formData.additionalMessage.trim() || 'N/A'}

Preferred Delivery Time:
${formData.preferredDeliveryTime}

---
Sent via New Archana Medical Agency Portal`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${BUSINESS_INFO.whatsappNumber}&text=${encodedText}`;
    
    // Open WhatsApp
    window.open(whatsappApiUrl, '_blank');
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base text-teal-600 dark:text-teal-400 font-bold tracking-widest uppercase">
            WhatsApp Direct Order
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Prescription Upload & Ordering
          </p>
          <div className="mt-4 h-1 w-16 bg-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Skip long retail queues! Fill in your delivery coordinates, drop a clear photo of your prescription list, and hit submit to open our instant WhatsApp agent.
          </p>
        </div>

        {/* Form and Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Order Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/40 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-sm">
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-6">WhatsApp Order Form</h3>
            
            <form onSubmit={sendOrderViaWhatsApp} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Customer Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Customer Name *</label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    placeholder="e.g. Rajiv Ranjan"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    placeholder="e.g. 09934423919"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email Address (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. customer@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm"
                  />
                </div>

                {/* Preferred Delivery Time */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Preferred Delivery Time</label>
                  <select
                    name="preferredDeliveryTime"
                    value={formData.preferredDeliveryTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm"
                  >
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                    <option value="Instant Store Collection">Instant Store Collection (At Tekari Road)</option>
                  </select>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="e.g. AP Colony, Near Gaya College, Gaya, Bihar 823001"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm"
                />
                <p className="text-[10px] text-slate-400">Leave blank if you prefer walking to our physical storefront to pick up medicines directly.</p>
              </div>

              {/* Medicines Required */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Medicines / Healthcare Items Required *</label>
                <textarea
                  name="medicinesRequired"
                  rows={4}
                  required
                  placeholder="Please write medicine names & strip quantities here (e.g. Metformin 500mg SR - 2 strips, Paracetamol - 1 strip)..."
                  value={formData.medicinesRequired}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm resize-none"
                />
              </div>

              {/* Advanced Interactive File Upload Drop Zone (MANDATORY per UI guideline) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Upload Doctor Prescription</label>
                  <span className="text-[10px] bg-teal-100 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-extrabold px-2 py-0.5 rounded-full">Secure Sourcing</span>
                </div>

                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[140px] ${
                    dragActive
                      ? 'border-teal-500 bg-teal-50/40 dark:bg-teal-950/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-teal-500/50 hover:bg-slate-100/10'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*,application/pdf"
                    onChange={handleFileSelect}
                  />

                  {uploadProgress !== null ? (
                    <div className="space-y-3 w-full max-w-xs mx-auto">
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-600 rounded-full transition-all duration-150" style={{ width: `${uploadProgress}%` }} />
                      </div>
                      <p className="text-xs text-slate-500 font-bold">Scanning file: {uploadProgress}%</p>
                    </div>
                  ) : formData.uploadedPrescriptionName ? (
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-3 bg-teal-50 dark:bg-teal-950 rounded-xl text-teal-600 dark:text-teal-400">
                        <FileText className="h-8 w-8" />
                      </div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white truncate max-w-xs">{formData.uploadedPrescriptionName}</p>
                      
                      {/* Image Preview Thumbnail */}
                      {formData.prescriptionImage && (
                        <div className="h-20 w-20 rounded-lg overflow-hidden border border-slate-100 shadow-md my-1">
                          <img src={formData.prescriptionImage} alt="prescription preview" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removePrescription(); }}
                        className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-700 font-bold hover:underline cursor-pointer p-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Remove prescription</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-slate-400 mb-3 animate-bounce" />
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Drag & Drop prescription here</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">or click to browse your folders (PNG, JPG, PDF up to 5MB)</p>
                    </>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-800 dark:text-amber-400">
                  <AlertCircle className="h-4.5 w-4.5 flex-shrink-0" />
                  <span><strong>Prescription Note:</strong> For high-risk medications (Schedule H/X), our registered pharmacist Prakash Chandra will physically check your original doctor prescription when hand-dispensing.</span>
                </div>
              </div>

              {/* Additional Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Additional Message (Optional)</label>
                <input
                  type="text"
                  name="additionalMessage"
                  placeholder="e.g. Please bring exact change for Rs. 500 / Send generic equivalent."
                  value={formData.additionalMessage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl text-sm shadow-sm"
                />
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/15 transition-all text-sm sm:text-base cursor-pointer"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Send Order via WhatsApp</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-bold transition-all text-sm sm:text-base"
                >
                  <Phone className="h-5 w-5 text-teal-600" />
                  <span>Call Store</span>
                </a>
              </div>

            </form>
          </div>

          {/* Right Side: Message Real-time Live Preview Block */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 text-left">
              <div className="flex items-center justify-between mb-4 border-b border-slate-200 dark:border-slate-800 pb-2.5">
                <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">WhatsApp Preview</h4>
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-slate-950 border border-teal-100/40 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-2 whitespace-pre-wrap max-h-[420px] overflow-y-auto shadow-inner leading-relaxed">
                {`Hello\nNew Archana Medical Agency\n\n`}
                <strong>Customer Name:</strong>{`\n${formData.customerName || '__________'}\n\n`}
                <strong>Phone:</strong>{`\n${formData.mobileNumber || '__________'}\n\n`}
                <strong>Medicine Required:</strong>{`\n${formData.medicinesRequired || '__________'}\n\n`}
                <strong>Address:</strong>{`\n${formData.address || 'Not Provided (Will pick up at Tekari Road Store)'}\n\n`}
                <strong>Prescription:</strong>{`\n${formData.hasPrescription ? 'Yes (Attached in Chat)' : 'No'}\n\n`}
                <strong>Message:</strong>{`\n${formData.additionalMessage || '__________'}\n\n`}
                <strong>Delivery Time:</strong>{`\n${formData.preferredDeliveryTime}`}
              </div>

              <div className="text-[11px] text-slate-500 mt-4 leading-relaxed border-l-4 border-emerald-500 pl-3">
                This shows the formatted structured block that our application sends automatically when you click the submit button. You can review the values in real-time as you type!
              </div>
            </div>

            {/* Quick Delivery Radius Map Details Card */}
            <div className="p-6 bg-teal-50/50 dark:bg-teal-950/10 rounded-2xl border border-teal-100 dark:border-teal-900 text-left space-y-3">
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-extrabold text-sm uppercase tracking-wider">
                <Smile className="h-5 w-5" />
                <span>Nearby Delivery Information</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We provide custom home deliveries within Gaya Town boundaries for long-term chronic packages. Our daily delivery routing serves:
              </p>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                <span>• Tekari Road (0 km)</span>
                <span>• AP Colony (2.5 km)</span>
                <span>• GB Road (1.5 km)</span>
                <span>• Nutan Nagar (3 km)</span>
                <span>• Delha Area (4 km)</span>
                <span>• Tower Chowk (0.5 km)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
