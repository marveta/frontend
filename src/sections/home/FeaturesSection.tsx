import React from 'react';
import { Container } from '../../components/common/Container';
import neuralImg from '../../assets/images/tech_product_neural_1789533311967.jpg';

export const FeaturesSection: React.FC = () => {
  return (
    <section 
      id="features"
      className="py-10 sm:py-12 lg:py-14 bg-[#080910] relative overflow-hidden"
    >
      {/* Ambient background glow aura */}
      <div 
        className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#C0B4FE]/[0.02] rounded-full blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container className="max-w-7xl">
        {/* Centered Section Header: Badge, Title, and Description */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Centered Badge */}
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
            Engineered Capabilities
          </span>

          {/* Centered Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal font-heading text-white tracking-tight leading-[1.14] mb-3.5">
            Rigorous competitive intelligence.
          </h2>

          {/* Centered Description */}
          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-2xl">
            
Every capability within Marveta is built to replace noise with traceable, structured market indicators. 

          </p>
        </div>

        {/* Bento Grid with Image Cards & Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Competitive Intelligence Engine (8-cols) */}
          <div className="lg:col-span-8 rounded-2xl sm:rounded-[26px] bg-[#12131A] border border-[#343434] hover:border-[#C0B4FE]/60 p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden relative">
            <div className="mb-4 sm:mb-5">
              <h3 className="text-2xl sm:text-3xl font-normal font-heading text-white tracking-normal group-hover:text-[#C0B4FE] transition-colors mb-2">
                Competitive Intelligence Engine
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-2xl">
                Continuous automated surveillance across peer group positioning, corporate moves, hiring spikes in strategic units, and subtle narrative changes in investor communications.
              </p>
            </div>

            {/* Image Showcase */}
            <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#080910]">
              <img
                src="/Competitive Intelligence Engine.svg"
                alt="Competitive Intelligence Engine"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12131A]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 2: Market Events Radar (4-cols) */}
          <div className="lg:col-span-4 rounded-2xl sm:rounded-[26px] bg-[#12131A] border border-[#343434] hover:border-[#C0B4FE]/60 p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="mb-4 sm:mb-5">
              <h3 className="text-xl sm:text-2xl font-normal font-heading text-white tracking-normal group-hover:text-[#C0B4FE] transition-colors mb-2">
                Market Events Radar
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Track critical market developments, regulatory pivots, and M&amp;A catalysts prioritized by organizational materiality.
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[270px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#080910]">
              <img
                src="/Market Events Radar.svg"
                alt="Market Events Radar Timeline"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12131A]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 3: Product & Pricing Telemetry (4-cols) */}
          <div className="lg:col-span-4 rounded-2xl sm:rounded-[26px] bg-[#12131A] border border-[#343434] hover:border-[#C0B4FE]/60 p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="mb-4 sm:mb-5">
              <h3 className="text-xl sm:text-2xl font-normal font-heading text-white tracking-normal group-hover:text-[#C0B4FE] transition-colors mb-2">
                Product &amp; Pricing Signals 
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Detect subtle tier renamings, minimum contract clauses, consumption rate updates, and product sunset schedules.
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[180px] sm:h-[210px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#080910]">
              <img
                src="/Product & Pricing Telemetry.svg"
                alt="Product and Pricing Telemetry"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12131A]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 4: Competitive Comparison Matrix (4-cols) */}
          <div className="lg:col-span-4 rounded-2xl sm:rounded-[26px] bg-[#12131A] border border-[#343434] hover:border-[#C0B4FE]/60 p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="mb-4 sm:mb-5">
              <h3 className="text-xl sm:text-2xl font-normal font-heading text-white tracking-normal group-hover:text-[#C0B4FE] transition-colors mb-2">
                Competitive Comparison Matrix
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Benchmark competitors head-to-head across revenue growth, customer retention, net promoter scores, and technical moats.
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[180px] sm:h-[210px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#080910]">
              <img
                src="/Competitive Comparison Matrix.svg"
                alt="Head-to-Head Benchmarking Matrix"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12131A]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 5: Quantitative Signal Radar (4-cols) */}
          <div className="lg:col-span-4 rounded-2xl sm:rounded-[26px] bg-[#12131A] border border-[#343434] hover:border-[#C0B4FE]/60 p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="mb-4 sm:mb-5">
              <h3 className="text-xl sm:text-2xl font-normal font-heading text-white tracking-normal group-hover:text-[#C0B4FE] transition-colors mb-2">
                Market Intelligence Radar
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Structured monitoring of market indicators, competitor changes, significant events, and supporting evidence records. 
              </p>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[180px] sm:h-[210px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#080910]">
              <img
                src="/Market Intelligence Radar.svg"
                alt="Market Intelligence Radar"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12131A]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Card 6: Unified Intelligence Cockpit (Full 12-cols Horizontal Showcase) */}
          <div className="lg:col-span-12 rounded-2xl sm:rounded-[26px] bg-[#12131A] border border-[#343434] hover:border-[#C0B4FE]/60 p-6 sm:p-8 transition-all duration-300 group hover:-translate-y-1.5 shadow-2xl overflow-hidden">
            <div className="mb-4 sm:mb-5">
              <h3 className="text-2xl sm:text-3xl font-normal font-heading text-white tracking-normal group-hover:text-[#C0B4FE] transition-colors mb-2">
                Unified Intelligence Dashboard
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-3xl">
                Consolidate monitored companies, recent market events, competitive changes, key indicators, saved comparisons, and items for review in one dashboard. 
              </p>
            </div>

            <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[380px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#080910]">
              <img
                src={neuralImg}
                alt="Unified Intelligence Dashboard"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12131A]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
