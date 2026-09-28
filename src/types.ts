export type PageRoute =
  | 'home'
  | 'about'
  | 'products'
  | 'manufacturing'
  | 'quality'
  | 'story'
  | 'b2b'
  | 'contact'
  | 'faq';

export type ProductCategory = 'mustard' | 'kachi-ghani' | 'refined';

export interface ProductPackOption {
  size: string;
  type: string;
  idealFor: string;
  code: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  status: 'available' | 'coming-soon';
  badge: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  extractionProcess: string;
  temperatureLimit: string;
  flashPoint: string;
  smokePoint: string;
  pungencyLevel: string;
  pungencyRating: number; // 1 to 5
  shelfLife: string;
  storageInstructions: string;
  overview: string;
  packOptions: ProductPackOption[];
  culinaryPairings: {
    dish: string;
    description: string;
    technique: string;
  }[];
  specifications: {
    label: string;
    value: string;
    verifiedBy: string;
  }[];
  nutritionPer100g: {
    energy: string;
    totalFat: string;
    mufa: string;
    pufa: string;
    sfa: string;
    transFat: string;
    cholesterol: string;
    vitaminE: string;
  };
}

export interface ManufacturingStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  criticalParameter: string;
  qualityControlAction: string;
  equipmentType: string;
  image: string;
  detailedSpecs: string[];
}

export interface QualityMatrixRow {
  parameter: string;
  jayrajiStandard: string;
  commercialBlendedStandard: string;
  significance: string;
  testingMethod: string;
}

export interface ComplianceSlot {
  code: string;
  agency: string;
  title: string;
  description: string;
  placeholderText: string;
  statusText: string;
}

export interface FAQItem {
  id: string;
  category: 'sourcing' | 'b2b' | 'manufacturing' | 'culinary';
  question: string;
  answer: string;
}

export interface B2BInquiryPayload {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: 'distributor' | 'wholesaler' | 'modern-trade' | 'institutional' | 'private-label';
  volumeRequirement: string;
  unit: 'MT' | 'Cartons' | 'Barrels';
  targetLocation: string;
  gstinPlaceholder: string;
  additionalNotes: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  purpose: 'general' | 'sample-request' | 'dealership' | 'institutional';
  city: string;
  message: string;
}
