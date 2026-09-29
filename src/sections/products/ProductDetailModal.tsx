import React from 'react';
import { Product } from '../../types';
import { Modal } from '../../components/common/Modal';
import { Target, Activity, ArrowRight, Layers, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProductImage } from './ProductCard';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen?: boolean;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen = true,
  onClose
}) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product.name}
      subtitle={product.companyName}
      maxWidth="3xl"
    >
      {/* Responsive Layout: Stacked on sm/md (<1024px), Two-Column Split Grid on lg/xl (>=1024px) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        
        {/* Left Column (Mobile: Full-width / Desktop: 5 Cols): Visual Showcase Card */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-full lg:min-h-[360px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#121320] via-[#0E0F1A] to-[#080910] border border-[#222332] flex items-center justify-center p-4 sm:p-5 shadow-inner">
            <img
              src={getProductImage(product)}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-center z-10 select-none"
            />

            {/* Ambient violet glow */}
            <div className="absolute inset-0 bg-radial from-[#C0B4FE]/12 via-transparent to-transparent pointer-events-none" />

            {/* Floating Top Badges */}
            <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between z-20 pointer-events-none">
              {/* Price Pill */}
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#080910]/90 border border-[#2B2C3E] text-[11px] sm:text-xs font-heading font-semibold text-white tracking-tight shadow-md backdrop-blur-md">
                {product.priceIndicator}
              </span>

              {/* Category Pill */}
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#080910]/90 border border-[#C0B4FE]/40 text-[11px] sm:text-xs font-heading font-medium text-[#C0B4FE] tracking-wide shadow-md backdrop-blur-md">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (Mobile: Full-width / Desktop: 7 Cols): Overview, 4 Indicators & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3 sm:gap-4">
          
          {/* Executive Overview */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0D0E17] border border-[#222332]">
            <span className="inline-block text-[10.5px] sm:text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-1 sm:mb-1.5">
              Platform Intelligence Overview
            </span>
            <p className="text-xs sm:text-[13.5px] text-white/80 font-sans leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* 4 Core Intelligence Indicators (2x2 on sm/md/xl) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {/* Sector */}
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0D0E17] border border-[#222332] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-heading font-medium text-white/50 mb-1">
                <Layers className="w-3.5 h-3.5 text-[#C0B4FE] shrink-0" />
                <span>Sector</span>
              </div>
              <span className="text-xs sm:text-sm font-heading font-medium text-white truncate">
                {product.market}
              </span>
            </div>

            {/* Target Audience */}
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0D0E17] border border-[#222332] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-heading font-medium text-white/50 mb-1">
                <Target className="w-3.5 h-3.5 text-[#C0B4FE] shrink-0" />
                <span>Target</span>
              </div>
              <span className="text-xs sm:text-sm font-heading font-medium text-white truncate">
                {product.targetSegment}
              </span>
            </div>

            {/* Adoption Rate */}
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0D0E17] border border-[#222332] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-heading font-medium text-white/50 mb-1">
                <Activity className="w-3.5 h-3.5 text-[#C0B4FE] shrink-0" />
                <span>Adoption</span>
              </div>
              <span className="text-xs sm:text-sm font-heading font-medium text-white truncate">
                {product.metrics.adoptionRate}
              </span>
            </div>

            {/* Satisfaction Rate */}
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0D0E17] border border-[#222332] flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-heading font-medium text-white/50 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C0B4FE] shrink-0" />
                <span>Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs sm:text-sm font-heading font-semibold text-[#C0B4FE]">
                  {product.metrics.satisfactionScore}%
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-[#1C1D2C] overflow-hidden">
                  <div 
                    className="h-full bg-[#C0B4FE] rounded-full" 
                    style={{ width: `${product.metrics.satisfactionScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer Buttons */}
          <div className="pt-2 sm:pt-2.5 border-t border-[#222332]/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <span className="text-[10px] sm:text-[11px] text-white/45 font-sans text-center sm:text-left">
              Audited telemetry by Marveta Strategic Desk
            </span>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
              <Link to="/contact" onClick={onClose} className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#161726] border border-[#28293D] hover:border-[#C0B4FE] text-white hover:text-[#C0B4FE] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                >
                  <Send className="w-3.5 h-3.5 text-[#C0B4FE]" />
                  <span>Inquire</span>
                </button>
              </Link>

              <Link to="/comparison" onClick={onClose} className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-4 py-2 rounded-full bg-[#C0B4FE] text-[#080910] hover:bg-[#D4CBFE] font-heading font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>Compare</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Modal>
  );
};
