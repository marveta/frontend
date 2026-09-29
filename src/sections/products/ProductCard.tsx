import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../../types';

// Product SVGs from public directory named after products
const PRODUCT_IMAGES: Record<string, string> = {
  'prod-1': '/AetherCore Mesh v4.2.svg',
  'prod-2': '/AlphaPulse Terminal.svg',
  'prod-3': '/Kallisto RouteOpt 360.svg',
  'prod-4': '/Hyperion Settlement Rail.svg',
  'prod-5': '/Stratum PerimeterZero.svg',
  'prod-6': '/BioSynthetica Platform.svg',
};

const PRODUCT_NAME_IMAGES: Record<string, string> = {
  'AetherCore Mesh v4.2': '/AetherCore Mesh v4.2.svg',
  'AlphaPulse Terminal': '/AlphaPulse Terminal.svg',
  'Kallisto RouteOpt 360': '/Kallisto RouteOpt 360.svg',
  'Hyperion Settlement Rail': '/Hyperion Settlement Rail.svg',
  'Stratum PerimeterZero': '/Stratum PerimeterZero.svg',
  'BioSynthetica Platform': '/BioSynthetica Platform.svg',
};

export const getProductImage = (product: Product): string => {
  if (product.image) return product.image;
  if (PRODUCT_IMAGES[product.id]) return PRODUCT_IMAGES[product.id];
  if (product.name && PRODUCT_NAME_IMAGES[product.name]) return PRODUCT_NAME_IMAGES[product.name];
  switch (product.category) {
    case 'Technology': return '/AetherCore Mesh v4.2.svg';
    case 'Finance': return '/AlphaPulse Terminal.svg';
    case 'Services': return '/Kallisto RouteOpt 360.svg';
    case 'Enterprise': return '/Stratum PerimeterZero.svg';
    case 'Consumer': return '/BioSynthetica Platform.svg';
    default: return '/AetherCore Mesh v4.2.svg';
  }
};

const formatCompactPrice = (rawPrice: string): { amount: string; cadence: string } => {
  if (!rawPrice) return { amount: 'Custom', cadence: '' };
  const trimmed = rawPrice.trim();

  // If it's basis points (e.g., "2.8 bps")
  if (trimmed.includes('bps')) {
    return { amount: trimmed.replace(/bps.*$/, '').trim(), cadence: 'bps' };
  }

  // Handle slashes like "$4,800/mo", "$28k/yr", "$0.04/op"
  if (trimmed.includes('/')) {
    const parts = trimmed.split('/');
    return { amount: parts[0].trim(), cadence: `/${parts[1].trim()}` };
  }

  return { amount: trimmed, cadence: '' };
};

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const imageUrl = getProductImage(product);
  const price = formatCompactPrice(product.priceIndicator);

  return (
    <div 
      onClick={() => onSelect(product)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#11121C] border border-[#222332] hover:border-[#C0B4FE] transition-all duration-200 cursor-pointer overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_28px_rgba(192,180,254,0.12)]"
    >
      <div>
        {/* Inset Showcase Product Image Frame */}
        <div className="p-3 sm:p-3.5 pb-0">
          <div className="relative w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-[#0A0B13] border border-[#1E1F2E] flex items-center justify-center">
            <img
              src={imageUrl}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
            />

            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-radial from-[#C0B4FE]/10 via-transparent to-transparent pointer-events-none" />

            {/* Category Pill Tag */}
            <div className="absolute top-2.5 right-2.5 pointer-events-none z-10">
              <span className="px-2.5 py-1 rounded-full bg-[#080910]/90 border border-[#2A2B3D] text-[10px] font-heading font-semibold text-[#C0B4FE] tracking-wide shadow-sm">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Card Body: Company, Title, Description */}
        <div className="p-3.5 sm:p-4">
          {/* Company Theme Eyebrow */}
          <div className="text-[11px] font-heading font-semibold text-[#C0B4FE] tracking-[0.16em] uppercase mb-1">
            {product.companyName}
          </div>

          {/* Product Title */}
          <h3 className="text-xl sm:text-2xl font-normal font-heading text-white group-hover:text-[#C0B4FE] transition-colors leading-snug line-clamp-1">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-xs sm:text-[13px] text-white/70 font-sans leading-relaxed line-clamp-2 mt-1.5">
            {product.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer: Compact Short Price + View Intel */}
      <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-3 border-t border-[#1C1D2A] flex items-center justify-between gap-3 mt-auto">
        {/* Short, high-contrast enlarged price */}
        <div className="flex items-baseline gap-1 min-w-0">
          <span className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight group-hover:text-[#C0B4FE] transition-colors">
            {price.amount}
          </span>
          {price.cadence && (
            <span className="text-xs sm:text-sm font-sans font-medium text-white/50">
              {price.cadence}
            </span>
          )}
        </div>

        {/* View Intel Pill Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white group-hover:bg-[#C0B4FE] text-[#080910] text-xs font-heading font-semibold transition-all duration-150 shadow-sm shrink-0 cursor-pointer active:scale-95"
        >
          <span>View Intel</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </button>
      </div>
    </div>
  );
};
