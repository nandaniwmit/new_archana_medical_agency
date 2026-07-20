export type ActiveTab = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order';

export interface Medicine {
  id: string;
  name: string;
  category: string;
  form: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream' | 'Device' | 'Support';
  description: string;
  price?: string;
  availability: 'In Stock' | 'Out of Stock' | 'Available on Request';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  details: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'products' | 'equipment' | 'customers' | 'storefront';
  imageUrl: string;
  description: string;
}

export interface HealthTip {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  description: string;
  code?: string;
  expiryDate?: string;
}

export interface WhatsAppOrder {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicinesRequired: string;
  hasPrescription: boolean;
  uploadedPrescriptionName?: string;
  prescriptionImage?: string; // base64 or placeholder
  additionalMessage: string;
  preferredDeliveryTime: string;
}
