export interface Company {
  id: string;
  name: string;
  ticker?: string;
  logoText: string;
  market: string;
  headquarters: string;
  valuationOrCap?: string;
  status: 'Public' | 'Private' | 'Growth';
  trackedSince: string;
  healthScore: number;
}

export interface Product {
  id: string;
  name: string;
  companyId: string;
  companyName: string;
  category: string;
  market: string;
  priceModel: string;
  priceIndicator: string;
  priceDelta?: string;
  status: 'Active' | 'Beta' | 'Discontinued' | 'Updated';
  description: string;
  keyFeatures: string[];
  targetSegment: string;
  lastUpdated: string;
  image?: string;
  metrics: {
    adoptionRate: string;
    satisfactionScore: number;
    releaseVelocity: string;
  };
}

export type EventCategory = 
  | 'Product Launch' 
  | 'Pricing' 
  | 'Business Development' 
  | 'Market Change' 
  | 'Strategic M&A';

export type EventRelevance = 'Critical' | 'High' | 'Medium' | 'Informational';

export interface MarketEvent {
  id: string;
  title: string;
  company: string;
  companyId: string;
  date: string;
  formattedDate: string;
  category: EventCategory;
  relevance: EventRelevance;
  summary: string;
  strategicImpact: string;
  affectedProducts?: string[];
  sourcesCount: number;
  confidenceScore: number;
  location?: string;
  time?: string;
  image?: string;
}

export interface ComparisonDimension {
  name: string;
  scoreA: number; // 0 to 100
  scoreB: number; // 0 to 100
  labelA: string;
  labelB: string;
  analysis: string;
}

export interface ComparisonEntity {
  id: string;
  name: string;
  category: string;
  market: string;
  pricingOverview: string;
  targetMarket: string;
  coreStrengths: string[];
  vulnerabilities: string[];
  threatLevel: 'Low' | 'Moderate' | 'High' | 'Dominant';
  growthVelocity: string;
  lastUpdated: string;
  dimensions: ComparisonDimension[];
  strategicSummary: string;
  vectorScores?: Record<string, number>;
}

export interface EventStats {
  totalEvents: number;
  recentEventsCount: number;
  companiesTracked: number;
  highRelevanceCount: number;
  lastSyncTimestamp: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total?: number;
    page?: number;
    perPage?: number;
    lastPage?: number;
  };
  status: 'success' | 'error';
  message?: string;
}

export interface Testimonial {
  id: string;
  role: string;
  organizationType: string;
  quote: string;
  focusArea: string;
  impactMetric: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
