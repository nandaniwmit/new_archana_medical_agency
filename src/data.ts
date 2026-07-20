import { Medicine, ServiceItem, FAQItem, Review, GalleryItem, HealthTip, Offer } from './types';

export const BUSINESS_INFO = {
  name: "New Archana Medical Agency",
  category: "Pharmacy | Medical Store",
  location: "Tekari Road, Gaya, Bihar 823001",
  landmark: "Near Gandhi Maidan / Tower Chowk area, Tekari Road",
  phone: "09934423919",
  phoneFormatted: "+91 99344 23919",
  email: "archana.medical.gaya@gmail.com",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  ownerName: "Shree Prakash Chandra",
  establishedYear: "1998",
  whatsappNumber: "919934423919", // Format with country code for API
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5977934141675!2d84.996174!3d24.792444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bc42df082ff%3A0xc6cb5a6f2025eb27!2sTekari%20Rd%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  mapsLink: "https://maps.google.com/?q=New+Archana+Medical+Agency+Tekari+Road+Gaya+Bihar",
  workingHours: [
    { days: "Monday - Saturday", timings: "09:00 AM - 09:30 PM" },
    { days: "Sunday", timings: "10:00 AM - 04:00 PM" }
  ]
};

export const WHY_CHOOSE_US = [
  {
    id: "w1",
    title: "100% Genuine Medicines",
    description: "Sourced directly from authorized distributors of leading pharmaceutical brands.",
    icon: "ShieldCheck"
  },
  {
    id: "w2",
    title: "Experienced Staff",
    description: "Our qualified pharmacists guide you with correct dosage and usage details.",
    icon: "UserCheck"
  },
  {
    id: "w3",
    title: "Affordable Prices",
    description: "Honest pricing with attractive, fair discounts on generic and essential drugs.",
    icon: "IndianRupee"
  },
  {
    id: "w4",
    title: "Fast Service",
    description: "Minimizing wait time with a highly organized catalog and quick lookup.",
    icon: "Zap"
  },
  {
    id: "w5",
    title: "Prescription Medicines",
    description: "Wide range of scheduled drugs and specialist medicines always available.",
    icon: "FileText"
  },
  {
    id: "w6",
    title: "Healthcare Products",
    description: "Your one-stop shop for wellness, baby care, surgical, and lifestyle gear.",
    icon: "Heart"
  },
  {
    id: "w7",
    title: "Trusted Local Pharmacy",
    description: "Serving Gaya and adjoining districts of Bihar faithfully for over 25 years.",
    icon: "Building"
  },
  {
    id: "w8",
    title: "Easy WhatsApp Support",
    description: "Just upload your prescription or write names to place orders directly.",
    icon: "MessageSquare"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Prescription Medicines",
    description: "Authorized dispensing of critical chronic and acute therapeutic drugs.",
    iconName: "FileText",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    details: [
      "Cardiac & Hypertension medications",
      "Anti-diabetic formulations (Insulin & Oral)",
      "Neuro-psychiatry drugs",
      "Gastrointestinal & Respiratory lines",
      "Strict compliance with Schedule H guidelines"
    ]
  },
  {
    id: "s2",
    title: "General Medicines & OTC",
    description: "Over-the-counter remedies for everyday ailments like cold, fever, and acidity.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=600",
    details: [
      "Analgesics & Pain relievers",
      "Antihistamines & Cough syrups",
      "Antacids & Digestive tablets",
      "First aid and basic wound care products"
    ]
  },
  {
    id: "s3",
    title: "Health Supplements",
    description: "Top-brand vitamins, multivitamins, and nutritional formulas to keep you energized.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=600",
    details: [
      "Calcium & Vitamin D supplements",
      "Protein powders & Nutritional drinks",
      "Omega-3 fish oils & Antioxidants",
      "Immunity boosters & Herbal supplements"
    ]
  },
  {
    id: "s4",
    title: "Baby Care Products",
    description: "Safe, dermatologically-tested healthcare products for babies and mothers.",
    iconName: "Baby",
    image: "https://images.unsplash.com/photo-1522850959516-58f958dba613?auto=format&fit=crop&q=80&w=600",
    details: [
      "Infant milk formulas & Baby food",
      "Baby skin lotions, powders & soaps",
      "Hygienic baby diapers and wipes",
      "Maternity health supplements & essentials"
    ]
  },
  {
    id: "s5",
    title: "Personal Care",
    description: "Daily hygiene, skin nourishment, and personal grooming essentials from premium brands.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=600",
    details: [
      "Medicated dermatological soaps & cleansers",
      "Hair care, anti-dandruff solutions",
      "Oral hygiene products (toothpastes, mouthwashes)",
      "Hand sanitizers, sanitizing sprays, and wet wipes"
    ]
  },
  {
    id: "s6",
    title: "Medical Equipment & Devices",
    description: "Vital diagnostic monitoring tools and emergency equipment for your home.",
    iconName: "Tv",
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600",
    details: [
      "Digital Blood Pressure Monitors",
      "Glucometers & Blood Sugar Testing Strips",
      "Pulse Oximeters & Nebulizers",
      "Digital thermometers & Vaporizers"
    ]
  },
  {
    id: "s7",
    title: "Surgical Supplies",
    description: "Clinical grade surgical products, bandages, dressings, and operation-theater needs.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&q=80&w=600",
    details: [
      "Sterile gauze pads, cotton rolls & bandages",
      "Surgical gloves, masks, and protective wear",
      "Disposable syringes, needles & IV sets",
      "Antiseptic lotions (Betadine, Savlon, Dettol)"
    ]
  },
  {
    id: "s8",
    title: "Diabetic Care",
    description: "Dedicated diabetic corner with special foods, test strips, and active sugar trackers.",
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
    details: [
      "All insulin types with proper refrigeration storage",
      "Sugar-free nutrition biscuits & artificial sweeteners",
      "Diabetic socks and specialized nerve care supplements",
      "Continuous glucose monitoring lancets & consumables"
    ]
  }
];

export const FEATURED_CATEGORIES = [
  { name: "Tablets", count: "1200+ Items", icon: "Tablet", color: "from-blue-500/10 to-blue-600/5 text-blue-600" },
  { name: "Capsules", count: "800+ Items", icon: "Database", color: "from-emerald-500/10 to-emerald-600/5 text-emerald-600" },
  { name: "Syrups", count: "450+ Items", icon: "GlassWater", color: "from-amber-500/10 to-amber-600/5 text-amber-600" },
  { name: "Injections", count: "250+ Items", icon: "Syringe", color: "from-rose-500/10 to-rose-600/5 text-rose-600" },
  { name: "Medical Equipment", count: "80+ Items", icon: "HeartPulse", color: "from-cyan-500/10 to-cyan-600/5 text-cyan-600" },
  { name: "Protein Supplements", count: "120+ Items", icon: "Apple", color: "from-purple-500/10 to-purple-600/5 text-purple-600" },
  { name: "Vitamins", count: "300+ Items", icon: "Sparkles", color: "from-orange-500/10 to-orange-600/5 text-orange-600" },
  { name: "Skin Care", count: "400+ Items", icon: "Smile", color: "from-pink-500/10 to-pink-600/5 text-pink-600" },
  { name: "Baby Products", count: "200+ Items", icon: "Baby", color: "from-teal-500/10 to-teal-600/5 text-teal-600" },
  { name: "Personal Hygiene", count: "350+ Items", icon: "Shield", color: "from-indigo-500/10 to-indigo-600/5 text-indigo-600" },
  { name: "Orthopedic Support", count: "150+ Items", icon: "Accessibility", color: "from-slate-500/10 to-slate-600/5 text-slate-700" },
  { name: "Diabetic Care", count: "180+ Items", icon: "Activity", color: "from-red-500/10 to-red-600/5 text-red-600" }
];

export const TRUST_POINTS = [
  { title: "Experienced Pharmacy", desc: "Trusted leadership and medicine storage protocols since 1998." },
  { title: "Quality Medicines", desc: "Direct stock guarantees zero counterfeit or sub-standard drugs." },
  { title: "Quick Service", desc: "Digital pharmacy search ensures you get your billing done in minutes." },
  { title: "Friendly Staff", desc: "Polite professionals who listen to queries and help clarify dosage directions." },
  { title: "Reasonable Pricing", desc: "Ethical trade margins, extra loyalty discounts, and transparent billing." },
  { title: "Convenient Location", desc: "Perfectly located on Tekari Road, making it very easy for residents of Gaya." }
];

export const WORKING_PROCESS = [
  { step: "01", title: "Visit Store / Contact", desc: "Walk in with your physical list or use our dynamic WhatsApp web form to load your inquiry." },
  { step: "02", title: "Share Prescription", desc: "Hand over the prescription. Our expert staff scans the items and checks exact stock." },
  { step: "03", title: "Get Medicines", desc: "Medicines are gathered from our scientifically cataloged thermo-regulated storage zones." },
  { step: "04", title: "Easy Payment", desc: "Settle via UPI, QR code scanners, cash, or credit cards for absolute hassle-free purchase." }
];

export const TESTIMONIALS: Review[] = [
  {
    id: "r1",
    author: "Rajiv Ranjan",
    rating: 5,
    date: "2026-06-15",
    text: "New Archana Medical Agency has been our family pharmacy for 15+ years. Their stock is extremely reliable. Even during peak shortages, they managed to arrange my parents' specific blood pressure medicines. Best service on Tekari Road!",
    verified: true,
    location: "AP Colony, Gaya"
  },
  {
    id: "r2",
    author: "Anjali Kumari",
    rating: 5,
    date: "2026-07-01",
    text: "The WhatsApp prescription ordering is a lifesaver. I upload my prescription, they verify everything, keep it packed, and I just pick it up on my way from the hospital. The staff is very well-behaved and cooperative.",
    verified: true,
    location: "GB Road, Gaya"
  },
  {
    id: "r3",
    author: "Dr. Sandeep Pathak",
    rating: 5,
    date: "2026-05-20",
    text: "As a practicing physician in Gaya, I recommend New Archana Medical Agency for high-precision medicines. They maintain cold-chain storage properly for insulin and critical vaccinations, which is rare and highly commendable.",
    verified: true,
    location: "Tekari Road, Gaya"
  },
  {
    id: "r4",
    author: "Ramesh Prasad Singh",
    rating: 4,
    date: "2026-07-10",
    text: "Very reasonable prices compared to other pharmacies in the tower chowk area. They give genuine discounts on full sheets. Pharmacist explains side-effects and dosage meticulously. Highly recommended.",
    verified: true,
    location: "Nutan Nagar, Gaya"
  },
  {
    id: "r5",
    author: "Neha Sharma",
    rating: 5,
    date: "2026-06-30",
    text: "Perfect stop for infant needs. I buy baby milk formula, diapers, and baby skin lotions from here. Everything is fresh stock with long expiry dates. The digital billing is super transparent.",
    verified: true,
    location: "Delha, Gaya"
  },
  {
    id: "r6",
    author: "Vikash Kumar Gupta",
    rating: 5,
    date: "2026-07-18",
    text: "Very professional medical agency. They have everything from surgical items to regular diabetic monitors. Their UPI payment works seamlessly and the medicine matching speed is incredibly fast. Five stars!",
    verified: true,
    location: "Bishnupad, Gaya"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "How can I order medicines online through WhatsApp?",
    answer: "It is very simple! Go to our 'WhatsApp Order' section on this website, fill in your details, write down your medicines or attach a clear photo of your prescription, and click 'Send via WhatsApp'. The website will automatically format a message and open your WhatsApp app. You can then instantly send it to us with one click.",
    category: "Ordering"
  },
  {
    id: "f2",
    question: "Do you guarantee 100% genuine medicines?",
    answer: "Yes, absolutely. Every tablet, capsule, or medical device sold at New Archana Medical Agency is sourced directly from authorized corporate drug distributors or the manufacturers themselves. We maintain strict compliance registries to ensure full authenticity.",
    category: "Safety & Quality"
  },
  {
    id: "f3",
    question: "Are there discounts on chronic prescription drugs?",
    answer: "Yes, we understand that chronic conditions like diabetes and high blood pressure require lifelong medications. We offer stable, regular discounts on all essential medicines and generic brands to make healthcare affordable for everyone in Gaya.",
    category: "Pricing"
  },
  {
    id: "f4",
    question: "Do you sell specialized surgical and orthopedic items?",
    answer: "Yes, we carry a complete inventory of orthopedic supports (knee caps, lumbar belts, cervical collars), surgical dressings, sterile pads, syringes, IV sets, and adult diapers.",
    category: "Products"
  },
  {
    id: "f5",
    question: "Do you maintain cold-chain storage for insulin?",
    answer: "Yes. Insulin, critical vaccines, and certain hormonal drops require strict temperature monitoring between 2°C to 8°C. We have high-capacity medical-grade refrigerators with continuous power backup to preserve therapeutic efficacy.",
    category: "Safety & Quality"
  },
  {
    id: "f6",
    question: "What are your business hours on weekdays and Sundays?",
    answer: "We are open from Monday to Saturday, 09:00 AM to 09:30 PM. On Sundays, we are open from 10:00 AM to 04:00 PM for essential and urgent prescription requests.",
    category: "Information"
  },
  {
    id: "f7",
    question: "Do I need a prescription to buy medicines?",
    answer: "For general Over-the-Counter (OTC) items, wellness supplements, and first-aid gear, a prescription is not necessary. However, for Schedule H, H1, or X drugs (like antibiotics, strong painkillers, psychiatric and cardiac medications), a valid doctor's prescription is strictly mandatory as per Indian law.",
    category: "Safety & Quality"
  },
  {
    id: "f8",
    question: "Do you accept digital payments like GPay, PhonePe, Paytm, or Credit Cards?",
    answer: "Yes, we accept all major UPI applications (Google Pay, PhonePe, Paytm, BHIM), debit/credit cards, and cash. You can easily scan our QR code at the billing desk.",
    category: "Payments"
  },
  {
    id: "f9",
    question: "Can I inquire about a medicine's availability before visiting?",
    answer: "Yes, definitely. You can use our website's 'Inquiry Form' or use the WhatsApp order form to verify availability. Our team will look up our computerized inventory and reply to you with stock and price status immediately.",
    category: "Ordering"
  },
  {
    id: "f10",
    question: "Do you provide home delivery in Gaya?",
    answer: "Yes, we offer nearby home delivery for bulk orders or critical prescriptions within selected localities of Gaya town (including Tekari Road, AP Colony, GB Road, Nutan Nagar, and Delha). Contact us on 09934423919 to check if delivery is active for your street today.",
    category: "Ordering"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Storefront View",
    category: "storefront",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    description: "Our modern, easily accessible storefront located on Tekari Road, Gaya."
  },
  {
    id: "g2",
    title: "Categorized Medicine Shelves",
    category: "medicines",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&q=80&w=800",
    description: "Highly organized pharmacological rows sorted for quick lookup and delivery."
  },
  {
    id: "g3",
    title: "High-Quality Diagnostic Monitors",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800",
    description: "Fully digital blood pressure and sugar trackers for home health surveillance."
  },
  {
    id: "g4",
    title: "Vitamins & Multivitamin Stack",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800",
    description: "Immune booster, daily nutrition formulas, and healthcare protein supplements."
  },
  {
    id: "g5",
    title: "Baby Care Essentials Row",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1522850959516-58f958dba613?auto=format&fit=crop&q=80&w=800",
    description: "Mother and baby hygienic formulas, organic baby soaps, powders, and wipes."
  },
  {
    id: "g6",
    title: "Personal Care & Medicated Cosmetics",
    category: "products",
    imageUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=800",
    description: "Dermatological hair and skin solutions recommended by top practitioners."
  },
  {
    id: "g7",
    title: "Our Expert Prescription Check",
    category: "store",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "Pharmacists verifying active compounds and schedules diligently."
  },
  {
    id: "g8",
    title: "Orthopedic Braces & Belts",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1598252571524-1b72e5056cd4?auto=format&fit=crop&q=80&w=800",
    description: "Premium ergonomic knee braces, abdominal supports, and posture correctors."
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "h1",
    title: "How to Correctly Store Your Medicines at Home",
    excerpt: "Storing your medications under wrong temperature and moisture levels can destroy their healing power.",
    content: "Did you know that keeping your medications in the bathroom cabinet might actually damage them? The moisture, humidity, and heat in a bathroom can break down active chemical compounds in tablets and capsules before their expiry dates. Always keep your general medicines in a cool, dry cabinet away from direct sunlight. High-risk compounds like insulin, vaccines, and certain pediatric syrups MUST be stored in the middle rack of your refrigerator, never in the door freezer where temperatures drop excessively.",
    category: "Safety Guide",
    date: "July 12, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "h2",
    title: "Understanding Digital BP Monitors: Common Mistakes to Avoid",
    excerpt: "Taking your blood pressure reading at home is easy, but small errors can show high readings.",
    content: "Digital blood pressure monitors are fantastic for tracking cardiac health in Gaya's heat, but many users record false high values due to posture mistakes. For an accurate reading: always sit quietly for 5 minutes before wearing the cuff. Sit with your back straight, feet flat on the floor, and support your arm on a table so the cuff is at the exact level of your heart. Avoid drinking tea, coffee, or walking rapidly immediately before taking your readings.",
    category: "Devices",
    date: "June 28, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "h3",
    title: "A Diabetic's Guide to Glucose Testing Strip Safety",
    excerpt: "Contaminated test strips lead to flawed insulin dose calculations. Keep them sealed!",
    content: "Your home glucometer is only as good as your sugar testing strips. One of the most common issues we see at New Archana Medical Agency is customers storing strips in open containers. Test strips contain highly sensitive enzymes that degrade instantly when exposed to Gaya's humid monsoon seasons. Always seal the container lid immediately after pulling out one strip. Never handle the strip with wet or sugary fingers, and always verify that your machine is calibrated for the active batch code.",
    category: "Diabetic Care",
    date: "May 15, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600"
  }
];

export const OFFERS: Offer[] = [
  {
    id: "o1",
    title: "Senior Citizen Wellness Benefit",
    discount: "Flat 15% OFF",
    description: "Available on chronic daily medications (Hypertension, Cardiac & Diabetic lines) for citizens above 60 years. Mention this code or share ID card.",
    code: "SENIOR15"
  },
  {
    id: "o2",
    title: "WhatsApp Order Special Promotion",
    discount: "Flat 10% OFF",
    description: "Place your order via our WhatsApp form today and get a flat discount on all standard multi-strip prescription orders.",
    code: "ARCHANAWA"
  },
  {
    id: "o3",
    title: "Seasonal Immune Boost Discount",
    discount: "Up to 20% OFF",
    description: "Get discount pricing on top brand multivitamins, vitamin C drops, zinc compounds, and herbal supplements for monsoon health protection.",
    code: "HEALTHY20"
  }
];

export const MEDICINES_DATABASE: Medicine[] = [
  { id: "m1", name: "Paracetamol 650mg", category: "Analgesic / Fever", form: "Tablet", description: "Effective pain reliever and fever reducer.", availability: "In Stock" },
  { id: "m2", name: "Metformin 500mg SR", category: "Anti-Diabetic", form: "Tablet", description: "Sustained release formulation for controlling type-2 diabetes.", availability: "In Stock" },
  { id: "m3", name: "Amoxicillin 500mg", category: "Antibiotic", form: "Capsule", description: "Broad-spectrum penicillin antibiotic for bacterial infections.", availability: "In Stock" },
  { id: "m4", name: "Pantoprazole 40mg", category: "Antacid", form: "Tablet", description: "Proton pump inhibitor for reducing stomach acid and GERD.", availability: "In Stock" },
  { id: "m5", name: "Atorvastatin 10mg", category: "Cardiology", form: "Tablet", description: "Cholesterol-lowering statin medication.", availability: "In Stock" },
  { id: "m6", name: "Amlodipine 5mg", category: "Hypertension", form: "Tablet", description: "Calcium channel blocker for managing blood pressure.", availability: "In Stock" },
  { id: "m7", name: "Cough & Cold Herbal Syrup", category: "Respiratory", form: "Syrup", description: "Astringent herbal formula for dry cough relief.", availability: "In Stock" },
  { id: "m8", name: "B-Complex with B12 Capsules", category: "Vitamins", form: "Capsule", description: "Energy support and neurological health support capsules.", availability: "In Stock" },
  { id: "m9", name: "Glucocard Blue Test Strips", category: "Diagnostics", form: "Equipment", description: "High accuracy blood sugar monitoring sheets.", availability: "In Stock" },
  { id: "m10", name: "Calcium & Vitamin D3", category: "Supplements", form: "Tablet", description: "Strengthens bones and helps muscle elasticity.", availability: "In Stock" },
  { id: "m11", name: "Digital Blood Pressure Cuff", category: "Devices", form: "Device", description: "Fully automatic oscillometric upper arm BP monitor.", availability: "In Stock" },
  { id: "m12", name: "Crepe Bandage 10cm", category: "Surgical / First Aid", form: "Support", description: "Provides firm support and compression for sprains.", availability: "In Stock" },
  { id: "m13", name: "Multivitamin Kids Liquid", category: "Pediatric", form: "Syrup", description: "Essential vitamins for healthy growth in toddlers.", availability: "Available on Request" },
  { id: "m14", name: "Neurobion Forte", category: "Vitamins", form: "Tablet", description: "Vitamins B1, B6, and B12 formulation for nerve health.", availability: "In Stock" },
  { id: "m15", name: "Telmisartan 40mg", category: "Hypertension", form: "Tablet", description: "Angiotensin II receptor antagonist for treating hypertension.", availability: "In Stock" }
];
