import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Package, 
  DollarSign, 
  Radio, 
  LineChart, 
  ArrowRight 
} from 'lucide-react';
import { Container } from '../../components/common/Container';
import { SectionTitle } from '../../components/common/SectionTitle';

interface TrackingCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  linkText: string;
}

const TRACKING_CARDS: TrackingCard[] = [
  {
    id: 'companies',
    title: 'Companies',
    description: 'Systematically follow public and growth-stage corporate entities with continuous filings, financial health scores, and organizational intelligence.',
    icon: <Building2 className="w-6 h-6 text-[#C0B4FE]" />,
    link: '/products',
    linkText: 'Explore Companies'
  },
  {
    id: 'competitors',
    title: 'Competitors',
    description: 'Map primary rivals and emerging challengers with real-time threat scores, market share movements, and defensive vulnerability radars.',
    icon: <Users className="w-6 h-6 text-[#C0B4FE]" />,
    link: '/comparison',
    linkText: 'View Comparison'
  },
  {
    id: 'products',
    title: 'Products',
    description: 'Track software features, technical capability matrices, architectural updates, and release cadence across competitors.',
    icon: <Package className="w-6 h-6 text-[#C0B4FE]" />,
    link: '/products',
    linkText: 'Track Products'
  },
  {
    id: 'pricing',
    title: 'Pricing',
    description: 'Gain transparency into published price adjustments, custom contract minimums, seat tier changes, and packaging shifts.',
    icon: <DollarSign className="w-6 h-6 text-[#C0B4FE]" />,
    link: '/products',
    linkText: 'Inspect Pricing'
  },
  {
    id: 'events',
    title: 'Market Events',
    description: 'Receive real-time, categorized alerts for key corporate events including M&A acquisitions, product launches, and regulatory changes.',
    icon: <Radio className="w-6 h-6 text-[#C0B4FE]" />,
    link: '/events',
    linkText: 'Browse Events'
  },
  {
    id: 'analysis',
    title: 'Intelligence Analysis',
    description: 'Synthesize multidimensional benchmarking, historical trend analysis, and strategic positioning reports with verifiable citations.',
    icon: <LineChart className="w-6 h-6 text-[#C0B4FE]" />,
    link: '/comparison',
    linkText: 'Review Analysis'
  }
];

export const ProductsPreview: React.FC = () => {
  return (
    <section 
      id="products-preview"
      className="py-20 sm:py-24 bg-[#080910]"
    >
      <Container>
        <SectionTitle
          eyebrow="What Marveta Tracks"
          title="Comprehensive market monitoring across six critical vectors."
          description="Transform unstructured corporate data streams into actionable operational signals categorized for strategic decision-makers."
        />

        {/* 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKING_CARDS.map((card) => (
            <Link
              key={card.id}
              to={card.link}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#1B1B1B] border border-[#343434] hover:border-[#C0B4FE] hover:-translate-y-1.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C0B4FE]/40"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1C1C2B] border border-[#343434] group-hover:border-[#C0B4FE]/40 flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105">
                  {card.icon}
                </div>
                
                <h3 className="text-lg font-bold font-heading text-white mb-2.5 group-hover:text-[#C0B4FE] transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-sm text-white/65 font-sans leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-heading font-semibold text-white/70 group-hover:text-[#C0B4FE] transition-colors pt-4 border-t border-[#343434]">
                <span>{card.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
