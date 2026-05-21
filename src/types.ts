export interface ChemicalProduct {
  id: string;
  name: string;
  formula: string;
  casNumber: string;
  category: 'Solvents' | 'Catalysts' | 'Polymers' | 'Reagents' | 'Agro Chemicals' | 'Vitamins' | 'Security Systems' | 'Organic Produce';
  purity: string;
  description: string;
  safetyClass: string;
  applications: string[];
  packaging: string[];
  imageUrl: string;
  actionTarget: 'about' | 'contact';
}

export interface CompanyOffice {
  id: string;
  name: string;
  role: 'Global HQ' | 'Regional Hub' | 'Manufacturing' | 'R&D Center';
  city: string;
  country: string;
  phone: string;
  email: string;
  address: string;
  coords: { x: number; y: number }; // Percentage coords for custom vector SVG map
  contactPerson?: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  interestedProduct?: string;
}

export type ActiveSection = 'home' | 'about' | 'product' | 'contact';
