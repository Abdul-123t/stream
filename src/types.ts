export interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  equipment: string[];
  icon: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  keyActivity: string;
}

export interface EventCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  cameraSetup: string;
  keyRequirements: string[];
}

export interface ServiceLevel {
  id: string;
  name: string;
  badge?: string;
  suitableFor: string;
  cameraCount: string;
  features: string[];
  technicalHighlights: string[];
  recommendedFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Technical' | 'Logistics' | 'Booking';
}

export interface EnquiryFormData {
  eventName: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  cityCountry: string;
  estimatedAttendance: string;
  eventDuration: string;
  camerasRequired: string;
  streamingPlatforms: string[];
  productionRequirements: string;
  budgetRange: string;
  specialRequests: string;
  name: string;
  companyOrganisation: string;
  email: string;
  phoneWhatsapp: string;
}
