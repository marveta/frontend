import { 
  Company, 
  Product, 
  MarketEvent, 
  EventStats, 
  ComparisonEntity, 
  ComparisonDimension,
  ContactFormData, 
  ApiResponse,
  Testimonial,
  FaqItem 
} from '../types';

// Mock dataset structured for Laravel API compatibility
const mockCompanies: Company[] = [
  {
    id: 'comp-1',
    name: 'Aetheris Dynamics',
    ticker: 'AETH',
    logoText: 'AD',
    market: 'Enterprise AI & Data Infrastructure',
    headquarters: 'San Francisco, CA',
    valuationOrCap: '$14.2B',
    status: 'Public',
    trackedSince: '2023-04-12',
    healthScore: 92
  },
  {
    id: 'comp-2',
    name: 'Vortex Capital Intelligence',
    ticker: 'VCAP',
    logoText: 'VC',
    market: 'Financial Analytics & Quant Modeling',
    headquarters: 'New York, NY',
    valuationOrCap: '$8.7B',
    status: 'Public',
    trackedSince: '2022-11-05',
    healthScore: 88
  },
  {
    id: 'comp-3',
    name: 'Kallisto Systems',
    logoText: 'KS',
    market: 'Autonomous Supply & Logistics Intelligence',
    headquarters: 'Zurich, Switzerland',
    valuationOrCap: '$2.4B',
    status: 'Growth',
    trackedSince: '2023-08-19',
    healthScore: 85
  },
  {
    id: 'comp-4',
    name: 'Hyperion FinTech Core',
    logoText: 'HF',
    market: 'Institutional Payments & Liquidity',
    headquarters: 'London, UK',
    valuationOrCap: '$5.1B',
    status: 'Private',
    trackedSince: '2024-01-10',
    healthScore: 90
  },
  {
    id: 'comp-5',
    name: 'Stratum CyberSec',
    ticker: 'STRT',
    logoText: 'SC',
    market: 'Enterprise Zero-Trust Defense',
    headquarters: 'Austin, TX',
    valuationOrCap: '$11.8B',
    status: 'Public',
    trackedSince: '2022-06-14',
    healthScore: 94
  },
  {
    id: 'comp-6',
    name: 'Novus Healthtech Analytics',
    logoText: 'NH',
    market: 'Clinical Trials & Biotech Intelligence',
    headquarters: 'Boston, MA',
    valuationOrCap: '$1.9B',
    status: 'Growth',
    trackedSince: '2024-02-28',
    healthScore: 81
  }
];

const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'AetherCore Mesh v4.2',
    companyId: 'comp-1',
    companyName: 'Aetheris Dynamics',
    category: 'Technology',
    market: 'Enterprise AI & Data',
    priceModel: 'Consumption + Capacity License',
    priceIndicator: '$149/mo',
    priceDelta: '+8.5% YoY',
    status: 'Updated',
    description: 'Enterprise data platform monitored for pricing changes, product updates, and shifts in overall market positioning.',
    keyFeatures: ['Sub-5ms multi-region replication', 'Hybrid cloud confidential computing', 'Dynamic model quantization'],
    targetSegment: 'Fortune 500 Financial & Defense',
    lastUpdated: '2026-09-08',
    image: '/AetherCore Mesh v4.2.svg',
    metrics: {
      adoptionRate: '34% tier-1 expansion',
      satisfactionScore: 96,
      releaseVelocity: 'Bi-weekly cadenced'
    }
  },
  {
    id: 'prod-2',
    name: 'AlphaPulse Terminal',
    companyId: 'comp-2',
    companyName: 'Vortex Capital Intelligence',
    category: 'Finance',
    market: 'Financial Analytics',
    priceModel: 'Per-seat Tiered Annual',
    priceIndicator: '$1,428/yr',
    priceDelta: 'Unchanged (Promotional Freeze)',
    status: 'Active',
    description: 'Financial analytics terminal monitored for pricing changes, feature updates, and market positioning shifts.',
    keyFeatures: ['Order flow toxicity indicators', 'Natural language 10-K delta scanner', 'Cross-asset correlation matrix'],
    targetSegment: 'Hedge Funds & Asset Managers',
    lastUpdated: '2026-09-12',
    image: '/AlphaPulse Terminal.svg',
    metrics: {
      adoptionRate: '88% retention',
      satisfactionScore: 91,
      releaseVelocity: 'Monthly releases'
    }
  },
  {
    id: 'prod-3',
    name: 'Kallisto RouteOpt 360',
    companyId: 'comp-3',
    companyName: 'Kallisto Systems',
    category: 'Services',
    market: 'Supply & Logistics',
    priceModel: 'Tiered Volume Metric',
    priceIndicator: '$0.04/op',
    priceDelta: '-12% Volume Discount Tier',
    status: 'Active',
    description: 'Freight routing platform tracked for pricing changes, service updates, and shifts in regional market positioning.',
    keyFeatures: ['Geopolitical choke-point alert', 'Fuel curve optimization', 'Multi-modal carrier benchmarking'],
    targetSegment: 'Global Logistics Operators',
    lastUpdated: '2026-08-30',
    image: '/Kallisto RouteOpt 360.svg',
    metrics: {
      adoptionRate: '41% QoQ load increase',
      satisfactionScore: 89,
      releaseVelocity: 'Continuous deployment'
    }
  },
  {
    id: 'prod-4',
    name: 'Hyperion Settlement Rail',
    companyId: 'comp-4',
    companyName: 'Hyperion FinTech Core',
    category: 'Finance',
    market: 'Institutional Payments',
    priceModel: 'Basis Points on Volume',
    priceIndicator: '2.8 bps',
    priceDelta: 'New Tier Added',
    status: 'Active',
    description: 'Next-generation ISO 20022 real-time cross-border liquidity engine with automated treasury hedging.',
    keyFeatures: ['Real-time FX netting', 'Automated liquidity pools', 'Regulatory travel rule compliance'],
    targetSegment: 'Tier 1 & 2 Commercial Banks',
    lastUpdated: '2026-09-02',
    image: '/Hyperion Settlement Rail.svg',
    metrics: {
      adoptionRate: '$140B settled Q2',
      satisfactionScore: 94,
      releaseVelocity: 'Quarterly compliance sync'
    }
  },
  {
    id: 'prod-5',
    name: 'Stratum PerimeterZero',
    companyId: 'comp-5',
    companyName: 'Stratum CyberSec',
    category: 'Enterprise',
    market: 'Enterprise Zero-Trust',
    priceModel: 'Per Identity / Device',
    priceIndicator: '$18.50/mo',
    priceDelta: '+14% price revision Q3',
    status: 'Updated',
    description: 'Hardware-anchored zero-trust perimeter network verifying continuous device posture and behavioral anomalies.',
    keyFeatures: ['Continuous identity attestation', 'AI micro-segmentation', 'Automated lateral movement quarantine'],
    targetSegment: 'Global Enterprise CISOs',
    lastUpdated: '2026-09-11',
    image: '/Stratum PerimeterZero.svg',
    metrics: {
      adoptionRate: '12M endpoints active',
      satisfactionScore: 93,
      releaseVelocity: 'Weekly threat telemetry'
    }
  },
  {
    id: 'prod-6',
    name: 'BioSynthetica Platform',
    companyId: 'comp-6',
    companyName: 'Novus Healthtech Analytics',
    category: 'Consumer',
    market: 'Biotech & Health Sciences',
    priceModel: 'Enterprise Lab License',
    priceIndicator: '$65k/yr',
    priceDelta: 'Beta Pricing Sunset',
    status: 'Beta',
    description: 'Predictive clinical patient cohort recruitment and synthetic control arm validation environment.',
    keyFeatures: ['Synthetic control arm synthesis', 'Inclusion/exclusion criteria NLP filter', 'Site feasibility modeling'],
    targetSegment: 'Pharma Clinical Operations',
    lastUpdated: '2026-09-14',
    image: '/BioSynthetica Platform.svg',
    metrics: {
      adoptionRate: '18 active phase-III pilots',
      satisfactionScore: 87,
      releaseVelocity: 'Bi-monthly'
    }
  }
];

const mockEvents: MarketEvent[] = [
  {
    id: 'evt-1',
    title: 'Aetheris Dynamics Adjusts Enterprise Cloud Tiers by +8.5%',
    company: 'Aetheris Dynamics',
    companyId: 'comp-1',
    date: '2026-09-14',
    formattedDate: 'Sep 14, 2026',
    category: 'Pricing',
    relevance: 'Critical',
    summary: 'Aetheris announced an upward price adjustment for all GPU-backed cluster nodes citing rising custom silicon foundry costs.',
    strategicImpact: 'Accelerates margin expansion; creates a tactical opening for second-tier vector database alternatives.',
    affectedProducts: ['AetherCore Mesh v4.2'],
    sourcesCount: 5,
    confidenceScore: 98,
    location: '1015 California Ave, San Francisco CA',
    time: '10:00 am — 11:30 am PST',
    image: '/Aetheris Dynamics.svg'
  },
  {
    id: 'evt-2',
    title: 'Stratum CyberSec Completes Acquisition of EnclaveIQ',
    company: 'Stratum CyberSec',
    companyId: 'comp-5',
    date: '2026-09-11',
    formattedDate: 'Sep 11, 2026',
    category: 'Strategic M&A',
    relevance: 'Critical',
    summary: 'Stratum closed an all-cash $480M acquisition of EnclaveIQ to bolster its confidential hardware isolation module.',
    strategicImpact: 'Consolidates market share against legacy firewall providers, raising switching barriers for regulated clients.',
    affectedProducts: ['Stratum PerimeterZero'],
    sourcesCount: 8,
    confidenceScore: 99,
    location: '500 E 4th St, Austin TX',
    time: '2:00 pm — 3:45 pm CST',
    image: '/Stratum CyberSec.svg'
  },
  {
    id: 'evt-3',
    title: 'Hyperion FinTech Launches Cross-Border FedNow Interconnect',
    company: 'Hyperion FinTech Core',
    companyId: 'comp-4',
    date: '2026-09-07',
    formattedDate: 'Sep 7, 2026',
    category: 'Product Launch',
    relevance: 'High',
    summary: 'Direct bridge deployed linking US instant payment infrastructure with European TARGET Instant Payment Settlement (TIPS).',
    strategicImpact: 'Drastically cuts settlement time from 48 hours to 800ms for commercial bank clients.',
    affectedProducts: ['Hyperion Settlement Rail'],
    sourcesCount: 6,
    confidenceScore: 95,
    location: '100 Bishopsgate, London EC2N 4AG',
    time: '3:00 pm — 4:30 pm GMT',
    image: '/Hyperion FinTech Launches Cross.svg'
  },
  {
    id: 'evt-4',
    title: 'European Regulatory Framework Updates Cross-Border AI Liability Mandates',
    company: 'Market Regulatory Body',
    companyId: 'comp-0',
    date: '2026-09-03',
    formattedDate: 'Sep 3, 2026',
    category: 'Market Change',
    relevance: 'High',
    summary: 'New disclosure rules mandate that high-impact automated market pricing algorithms register provenance audits.',
    strategicImpact: 'Increases compliance overhead for algorithmic trading desks while boosting demand for audited intelligence pipelines.',
    affectedProducts: ['AlphaPulse Terminal'],
    sourcesCount: 12,
    confidenceScore: 97,
    location: 'Rue de la Loi 200, 1049 Brussels Belgium',
    time: '1:00 pm — 2:30 pm CET',
    image: '/European Regulatory Framework — AI Liability & Compliance.svg'
  },
  {
    id: 'evt-5',
    title: 'Vortex Capital Secures Strategic Distribution Agreement with Asian Sovereign Fund',
    company: 'Vortex Capital Intelligence',
    companyId: 'comp-2',
    date: '2026-08-28',
    formattedDate: 'Aug 28, 2026',
    category: 'Business Development',
    relevance: 'Medium',
    summary: 'Multi-year licensing partnership covering 450 analyst seats across Singapore and Tokyo operational hubs.',
    strategicImpact: 'Establishes a solid defensive moat in APAC equity research desks.',
    affectedProducts: ['AlphaPulse Terminal'],
    sourcesCount: 4,
    confidenceScore: 92,
    location: '10 Marina Blvd, Marina Bay Singapore',
    time: '4:00 pm — 5:30 pm SGT',
    image: '/Vortex Capital — Strategic Distribution Intelligence.svg'
  },
  {
    id: 'evt-6',
    title: 'Kallisto Systems Deploys Zero-Knowledge Suez Risk Hedging Engine',
    company: 'Kallisto Systems',
    companyId: 'comp-3',
    date: '2026-08-22',
    formattedDate: 'Aug 22, 2026',
    category: 'Product Launch',
    relevance: 'Medium',
    summary: 'Shippers can now dynamically simulate insurance premiums and security costs for alternative Cape of Good Hope routes.',
    strategicImpact: 'Differentiates Kallisto from traditional legacy ERP telemetry tools.',
    affectedProducts: ['Kallisto RouteOpt 360'],
    sourcesCount: 3,
    confidenceScore: 91,
    location: 'Claridenstrasse 5, 8002 Zurich Switzerland',
    time: '11:00 am — 12:30 pm CET',
    image: '/Kallisto Systems — Route Risk Hedging Intelligence.svg'
  }
];

const mockComparisonEntities: Record<string, ComparisonEntity> = {
  'comp-1': {
    id: 'comp-1',
    name: 'Aetheris Dynamics',
    category: 'Enterprise AI & Data',
    market: 'Global Tier-1 Enterprise',
    pricingOverview: 'Premium consumption-based tiering with minimum annual commitments ($120k+)',
    targetMarket: 'Global 2000, Defense, Hyperscale Tech',
    coreStrengths: [
      'Sub-5ms distributed consensus speed',
      'Proprietary hardware acceleration layer',
      'Highest enterprise security compliance (DoD IL6 / SOC2 Type II)'
    ],
    vulnerabilities: [
      'Steep pricing curve inhibits mid-market adoption',
      'Requires specialized in-house engineering expertise'
    ],
    threatLevel: 'Dominant',
    growthVelocity: '+42% YoY Revenue Run-Rate',
    lastUpdated: 'Sep 2026',
    vectorScores: {
      marketPenetration: 94,
      pricingCompetitiveness: 64,
      featureCompleteness: 96,
      innovationVelocity: 94,
      enterpriseReadiness: 98,
      integrationEcosystem: 93
    },
    dimensions: [],
    strategicSummary: 'Aetheris Dynamics remains the benchmark for performance and mission-critical reliability, commanding tier-1 enterprise backbones.'
  },
  'comp-2': {
    id: 'comp-2',
    name: 'Vortex Capital Intelligence',
    category: 'Financial Analytics',
    market: 'Quantitative & Macro Finance',
    pricingOverview: 'Predictable annual seat licensing ($1,428/yr) with pooled API quota',
    targetMarket: 'Hedge Funds, Sovereign Wealth, PE Strategy Groups',
    coreStrengths: [
      'Unmatched proprietary alternative sentiment feeds',
      'Frictionless deployment with native Bloomberg/Refinitiv bridges',
      'Strong adoption among quantitative macro portfolio managers'
    ],
    vulnerabilities: [
      'Limited expansion outside capital markets domain',
      'High dependency on external real-time data vendor agreements'
    ],
    threatLevel: 'High',
    growthVelocity: '+28% YoY ARR Growth',
    lastUpdated: 'Sep 2026',
    vectorScores: {
      marketPenetration: 85,
      pricingCompetitiveness: 78,
      featureCompleteness: 89,
      innovationVelocity: 87,
      enterpriseReadiness: 92,
      integrationEcosystem: 91
    },
    dimensions: [],
    strategicSummary: 'Vortex exhibits strong defensive moats in capital markets workflows, with high retention and specialized quant models.'
  },
  'comp-3': {
    id: 'comp-3',
    name: 'Kallisto Systems',
    category: 'Logistics Intelligence',
    market: 'Autonomous Supply & Logistics Intelligence',
    pricingOverview: 'Tiered volume metric ($0.04/op) with aggressive multi-year discount scales',
    targetMarket: 'Global Supply Chain Operators, Freight Hubs, Maritime Carriers',
    coreStrengths: [
      'Predictive choke-point disruption alerts with multi-modal routing',
      'Real-time tariff fluctuation and geopolitical border telemetry',
      'Rapid API deployment into ERP/WMS systems (SAP, Oracle)'
    ],
    vulnerabilities: [
      'Lower brand visibility in non-logistics strategic enterprise circles',
      'Telemetry reliability depends on carrier satellite uplink coverage'
    ],
    threatLevel: 'Moderate',
    growthVelocity: '+41% QoQ Volume Expansion',
    lastUpdated: 'Sep 2026',
    vectorScores: {
      marketPenetration: 78,
      pricingCompetitiveness: 89,
      featureCompleteness: 84,
      innovationVelocity: 90,
      enterpriseReadiness: 82,
      integrationEcosystem: 86
    },
    dimensions: [],
    strategicSummary: 'Kallisto Systems leads in autonomous supply chain telemetry, offering exceptional cost-to-performance ratios for global operators.'
  },
  'comp-4': {
    id: 'comp-4',
    name: 'Hyperion FinTech Core',
    category: 'Institutional Payments',
    market: 'Institutional Payments & Liquidity',
    pricingOverview: 'Basis points on settled volume (2.8 bps) with tiered liquidity pool discounts',
    targetMarket: 'Tier-1 Commercial Banks, Neo-Brokers, Cross-Border Clearinghouses',
    coreStrengths: [
      'Sub-second ISO 20022 compliance routing and FX automated hedging',
      'Ultra-high transaction throughput exceeding 85,000 TPS',
      'Direct banking ledger integrations across 40+ sovereign currency corridors'
    ],
    vulnerabilities: [
      'High regulatory scrutiny requiring jurisdiction-by-jurisdiction licensing',
      'Long institutional enterprise sales cycles (6 to 9 months)'
    ],
    threatLevel: 'High',
    growthVelocity: '+$140B Settled Q2 Volume',
    lastUpdated: 'Sep 2026',
    vectorScores: {
      marketPenetration: 83,
      pricingCompetitiveness: 84,
      featureCompleteness: 92,
      innovationVelocity: 88,
      enterpriseReadiness: 95,
      integrationEcosystem: 96
    },
    dimensions: [],
    strategicSummary: 'Hyperion FinTech Core provides mission-critical payment rails, backed by robust regulatory compliance and institutional throughput.'
  },
  'comp-5': {
    id: 'comp-5',
    name: 'Stratum CyberSec',
    category: 'Enterprise Zero-Trust',
    market: 'Cybersecurity & Defense Infrastructure',
    pricingOverview: 'Per identity tiering ($18.50/user/mo) + appliance licensing for hybrid mesh',
    targetMarket: 'Global 10,000, Government Agencies, Healthcare Networks',
    coreStrengths: [
      'Comprehensive end-to-end zero-trust perimeter mesh with EnclaveIQ hardware',
      'Lowest false-positive rate in lateral anomaly detection (<0.01%)',
      'Federal DoDIN APL & FedRAMP High security accreditations'
    ],
    vulnerabilities: [
      'Complex rollout in legacy hybrid mainframe architectures',
      'Recent +14% price revision triggering buyer pushback in mid-market'
    ],
    threatLevel: 'High',
    growthVelocity: '+36% YoY ARR Growth',
    lastUpdated: 'Sep 2026',
    vectorScores: {
      marketPenetration: 91,
      pricingCompetitiveness: 69,
      featureCompleteness: 95,
      innovationVelocity: 93,
      enterpriseReadiness: 97,
      integrationEcosystem: 88
    },
    dimensions: [],
    strategicSummary: 'Stratum captures major cybersecurity market share through aggressive hardware attestation and zero-trust orchestration.'
  },
  'comp-6': {
    id: 'comp-6',
    name: 'Novus Healthtech Analytics',
    category: 'Biotech & Health Sciences',
    market: 'Clinical Trials & Biotech Intelligence',
    pricingOverview: 'Annual enterprise lab license ($65k/yr) with unlimited synthetic cohorts',
    targetMarket: 'Pharmaceutical R&D Units, Biotech Startups, Clinical Research Orgs',
    coreStrengths: [
      'AI synthetic control arm generation reducing clinical trial duration by 40%',
      'Deep NLP indexing of 14,000+ medical journals and patent filings weekly',
      'HIPAA and FDA Title 21 CFR Part 11 compliant audit logging'
    ],
    vulnerabilities: [
      'Niche addressable market limited predominantly to life sciences',
      'Stringent clinical trial validation phases require prolonged onboarding'
    ],
    threatLevel: 'Moderate',
    growthVelocity: '+52% Active Phase-III Pilots',
    lastUpdated: 'Sep 2026',
    vectorScores: {
      marketPenetration: 74,
      pricingCompetitiveness: 86,
      featureCompleteness: 81,
      innovationVelocity: 92,
      enterpriseReadiness: 79,
      integrationEcosystem: 76
    },
    dimensions: [],
    strategicSummary: 'Novus Healthtech accelerates pharmaceutical discovery through specialized clinical NLP pipelines and synthetic cohort validation.'
  }
};

const mockTestimonials: Testimonial[] = [
  {
    id: 't-1',
    role: 'Managing Director, Global Strategy',
    organizationType: 'Tier-1 Investment Banking & Advisory',
    quote: 'Marveta eliminated 18 hours of manual weekly competitor monitoring. The precision of price change and market event tagging allows our deal teams to react to sector shifts immediately.',
    focusArea: 'Competitive Landscape & M&A Due Diligence',
    impactMetric: '78% reduction in manual research time'
  },
  {
    id: 't-2',
    role: 'Chief Strategy Officer',
    organizationType: 'Enterprise Cloud Infrastructure Provider',
    quote: 'Rather than wading through noisy press releases, Marveta synthesizes verifiable pricing changes and product release cadences into one structured operational dashboard.',
    focusArea: 'Product & Pricing Intelligence',
    impactMetric: 'Monitors 34 direct competitors in real time'
  },
  {
    id: 't-3',
    role: 'Principal Partner',
    organizationType: 'Technology & FinTech Growth Fund',
    quote: 'The side-by-side comparative benchmarking and historical delta tracking have fundamentally improved our investment committee briefings and portfolio defense strategies.',
    focusArea: 'Market Event Monitoring & Historical Intelligence',
    impactMetric: '3.4x faster turnaround on competitor audits'
  }
];

const mockFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What industries do you work with?',
    answer: "The BA report's stated primary industry is Enterprise / Finance only. This answer lists Healthcare, Defense, and Supply Chain as served industries, which isn't supported by the BA scope. Please confirm before this goes live, or whether the answer should be scoped back to enterprise and finance.",
    category: 'Industries'
  },
  {
    id: 'faq-2',
    question: 'How long does implementation take?',
    answer: 'Project timelines typically range from 2 to 6 weeks, depending on complexity.\n\nSmaller automation systems — such as AI chatbots with CRM integration — can often be deployed within 2–3 weeks.\n\nMore advanced projects involving multi-platform integrations, custom AI logic, internal workflow automation, and reporting dashboards may take 4–6 weeks or longer.',
    category: 'Implementation'
  },
  {
    id: 'faq-3',
    question: 'Do we need technical knowledge to work with you?',
    answer: 'No technical expertise is required from your team. Marveta delivers an intuitive, interactive intelligence workspace designed for business strategists, corporate development executives, and analysts. Our dedicated technical team handles setup, system integrations, and ongoing data pipeline management.',
    category: 'Onboarding'
  },
  {
    id: 'faq-4',
    question: 'Is your platform secure?',
    answer: 'Security is a critical priority. Marveta operates with data encryption in transit and at rest, strict role based access controls, consistent data validation, and dedicated safeguards for private queries.',
    category: 'Security'
  },
  {
    id: 'faq-5',
    question: 'What kind of ROI can we expect?',
    answer: 'Organizations typically see measurable value within a few quarters through reduced manual analyst effort, faster reaction time, and earlier visibility into significant competitor and market changes.',
    category: 'ROI'
  }
];

// Helper to simulate network latency like a Laravel API endpoint
const simulateLatency = async (ms: number = 180) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const apiService = {
  // Get list of products with filtering, search, and pagination
  async getProducts(params?: {
    search?: string;
    category?: string;
    companyId?: string;
    status?: string;
    page?: number;
    perPage?: number;
  }): Promise<ApiResponse<Product[]>> {
    await simulateLatency(220);
    
    let filtered = [...mockProducts];
    
    if (params?.search) {
      const q = params.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.companyName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.market.toLowerCase().includes(q)
      );
    }
    
    if (params?.category && params.category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === params.category!.toLowerCase());
    }
    
    if (params?.companyId && params.companyId !== 'All') {
      filtered = filtered.filter(p => p.companyId === params.companyId);
    }
    
    if (params?.status && params.status !== 'All') {
      filtered = filtered.filter(p => p.status === params.status);
    }
    
    return {
      data: filtered,
      meta: {
        total: filtered.length,
        page: params?.page || 1,
        perPage: params?.perPage || 10,
        lastPage: 1
      },
      status: 'success'
    };
  },

  // Get single product by ID
  async getProductById(id: string): Promise<ApiResponse<Product | null>> {
    await simulateLatency(120);
    const product = mockProducts.find(p => p.id === id) || null;
    return {
      data: product,
      status: product ? 'success' : 'error',
      message: product ? undefined : 'Product not found'
    };
  },

  // Get Market Events
  async getEvents(params?: {
    category?: string;
    relevance?: string;
    search?: string;
  }): Promise<ApiResponse<MarketEvent[]>> {
    await simulateLatency(200);
    
    let filtered = [...mockEvents];
    
    if (params?.category && params.category !== 'All') {
      filtered = filtered.filter(e => e.category === params.category);
    }
    
    if (params?.relevance && params.relevance !== 'All') {
      filtered = filtered.filter(e => e.relevance === params.relevance);
    }
    
    if (params?.search) {
      const q = params.search.toLowerCase();
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(q) ||
        e.company.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q)
      );
    }
    
    return {
      data: filtered,
      meta: {
        total: filtered.length
      },
      status: 'success'
    };
  },

  // Get Event Statistics
  async getEventStats(): Promise<ApiResponse<EventStats>> {
    await simulateLatency(100);
    return {
      data: {
        totalEvents: 428,
        recentEventsCount: 24,
        companiesTracked: 142,
        highRelevanceCount: 68,
        lastSyncTimestamp: 'Just now'
      },
      status: 'success'
    };
  },

  // Get Companies
  async getCompanies(): Promise<ApiResponse<Company[]>> {
    await simulateLatency(120);
    return {
      data: mockCompanies,
      status: 'success'
    };
  },

  // Get Comparison Data for two entities
  async getComparison(idA: string, idB: string): Promise<ApiResponse<{ entityA: ComparisonEntity; entityB: ComparisonEntity }>> {
    await simulateLatency(200);
    
    const baseA = mockComparisonEntities[idA] || mockComparisonEntities['comp-1'];
    const baseB = mockComparisonEntities[idB] || mockComparisonEntities['comp-2'];

    // Define 6 core multidimensional capability vectors
    const vectorDefinitions = [
      { name: 'Market Penetration', key: 'marketPenetration', desc: 'Enterprise footprint, tier-1 contract share, and ecosystem adoption.' },
      { name: 'Pricing Competitiveness', key: 'pricingCompetitiveness', desc: 'Cost-to-value elasticity, transparent packaging, and multi-year predictability.' },
      { name: 'Feature Completeness', key: 'featureCompleteness', desc: 'Breadth of proprietary modules, native integrations, and workflow automation.' },
      { name: 'Innovation Velocity', key: 'innovationVelocity', desc: 'Pace of algorithmic patents, LLM model releases, and feature turnaround.' },
      { name: 'Enterprise Readiness', key: 'enterpriseReadiness', desc: 'Air-gapped deployment, SOC2 Type II, FedRAMP, and dedicated SLA coverage.' },
      { name: 'API & Data Integration', key: 'integrationEcosystem', desc: 'Sub-5ms webhooks, native ERP/WMS/Trading bridges, and developer ergonomics.' }
    ];

    // Compute dynamic head-to-head dimension scores and contextual analysis
    const dynamicDimensions: ComparisonDimension[] = vectorDefinitions.map((v) => {
      const sA = baseA.vectorScores?.[v.key] ?? 80;
      const sB = baseB.vectorScores?.[v.key] ?? 75;
      const delta = Math.abs(sA - sB);

      let analysis = '';
      if (sA > sB + 6) {
        analysis = `${baseA.name} commands an advantage over ${baseB.name} (+${delta}% delta) due to deeper architectural maturity in ${v.name.toLowerCase()}.`;
      } else if (sB > sA + 6) {
        analysis = `${baseB.name} leads ${baseA.name} (+${delta}% delta) through streamlined agility and targeted execution in ${v.name.toLowerCase()}.`;
      } else {
        analysis = `${baseA.name} and ${baseB.name} exhibit closely matched parity (±${delta}%) across standard enterprise benchmarks.`;
      }

      return {
        name: v.name,
        scoreA: sA,
        scoreB: sB,
        labelA: `${sA}/100`,
        labelB: `${sB}/100`,
        analysis
      };
    });

    // Dynamic strategic synthesis customized to this specific pair
    const dynamicSummaryA = `Head-to-head telemetry between ${baseA.name} and ${baseB.name}: ${baseA.name} operates as the higher-penetration baseline in ${baseA.category}, differentiated by ${baseA.coreStrengths[0].toLowerCase()}. However, ${baseB.name} presents competitive pressure in ${baseB.category} through ${baseB.pricingOverview.split(' ')[0].toLowerCase()} flexibility and focused deployment cadence.`;

    const dynamicSummaryB = `${baseB.name} counters ${baseA.name} with dedicated capabilities in ${baseB.market}, capitalizing on ${baseB.coreStrengths[0].toLowerCase()} and attractive enterprise packaging.`;

    const entityA: ComparisonEntity = {
      ...baseA,
      dimensions: dynamicDimensions,
      strategicSummary: dynamicSummaryA
    };

    const entityB: ComparisonEntity = {
      ...baseB,
      dimensions: dynamicDimensions,
      strategicSummary: dynamicSummaryB
    };
    
    return {
      data: {
        entityA,
        entityB
      },
      status: 'success'
    };
  },

  // Submit Contact Form
  async submitContact(payload: ContactFormData): Promise<ApiResponse<{ confirmationId: string }>> {
    await simulateLatency(600);
    
    // Validate required fields
    if (!payload.name || !payload.email || !payload.message) {
      return {
        data: { confirmationId: '' },
        status: 'error',
        message: 'Please complete all required fields.'
      };
    }
    
    const confirmationId = `MRV-${Date.now().toString(36).toUpperCase()}`;
    return {
      data: { confirmationId },
      status: 'success',
      message: 'Your inquiry has been successfully received by the Marveta Intelligence Desk.'
    };
  },

  // Get Testimonials
  async getTestimonials(): Promise<ApiResponse<Testimonial[]>> {
    await simulateLatency(100);
    return {
      data: mockTestimonials,
      status: 'success'
    };
  },

  // Get FAQs
  async getFaqs(): Promise<ApiResponse<FaqItem[]>> {
    await simulateLatency(100);
    return {
      data: mockFaqs,
      status: 'success'
    };
  }
};
