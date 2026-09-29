import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ctaSilkVioletImg from '../../assets/images/cta_silk_violet_banner.jpg';

export const FinalCta: React.FC = () => {
  return (
    <section 
      id="final-cta"
      className="pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 bg-[#080910] overflow-hidden"
    >
      {/* Container spanning full width with minimal side margins to remove gaps */}
      <div className="w-full px-3 sm:px-5 md:px-6 lg:px-8">
        {/* Floating Rounded Silk Banner Card: Compact, balanced, and perfectly proportioned */}
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden shadow-2xl border border-white/10 py-8 sm:py-10 md:py-12 px-6 sm:px-10 text-center flex flex-col items-center justify-center min-h-[240px] sm:min-h-[270px] md:min-h-[290px]">
          
          {/* Background Image: Luxurious Liquid Silk Wave in Violet/Lavender */}
          <img
            src={ctaSilkVioletImg}
            alt="AI Market Intelligence Silk Background"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 pointer-events-none select-none z-0"
          />

          {/* Subtle Dark & Radial Contrast Overlays for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30 pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[260px] bg-[#C0B4FE]/[0.1] rounded-full blur-3xl pointer-events-none z-0" />

          {/* Centered Content Container */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
            {/* Main Heading: Increased size and non-bold */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal font-heading text-white tracking-[-0.02em] leading-[1.12] mb-2 sm:mb-2.5">
              Turn market noise into <br className="hidden sm:inline" />
              your strategic advantage
            </h2>

            {/* Subtitle Description: Reduced size */}
            <p className="text-xs sm:text-[13px] md:text-sm text-white/75 font-sans leading-relaxed max-w-md mx-auto mb-5 sm:mb-6">
              Equip your strategy, product, and leadership teams with real-time intelligence on competitor roadmaps, pricing moves, and industry shifts.
            </p>

            {/* Pill Action Button */}
            <div className="w-full sm:w-auto flex justify-center">
              <Link to="/products" className="w-full sm:w-auto block sm:inline-block">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#080910] hover:bg-[#C0B4FE] font-heading font-semibold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Platform</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#080910] stroke-[2.5]" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
