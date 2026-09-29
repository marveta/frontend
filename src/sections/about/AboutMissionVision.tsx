import React from 'react';
import { Container } from '../../components/common/Container';
import { Target, Compass } from 'lucide-react';

export const AboutMissionVision: React.FC = () => {
  return (
    <section id="about-mission-vision" className="py-8 sm:py-10 lg:py-12 bg-[#080910] text-white relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-2.5">
            Strategic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal font-heading text-white tracking-tight leading-[1.15] mb-4">
            Our Mission &amp; Vision
          </h2>
          <p className="text-sm sm:text-base text-white/65 font-sans leading-relaxed">
            The foundational doctrine and future horizon steering Marveta’s enterprise intelligence architecture.
          </p>
        </div>

        {/* Mission & Vision Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* 01. Mission Card */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#11121F] via-[#0E0F1A] to-[#0A0B13] border border-[#222332] hover:border-[#C0B4FE]/50 transition-all duration-500 p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-between group overflow-hidden">
            {/* Ambient Corner Glow */}
            <div 
              className="absolute -top-24 -right-24 w-64 h-64 bg-[#C0B4FE]/[0.08] rounded-full blur-3xl pointer-events-none group-hover:bg-[#C0B4FE]/[0.15] transition-all duration-700" 
              aria-hidden="true" 
            />

            {/* Subtle Watermark Number */}
            <span 
              className="absolute top-6 right-8 text-7xl sm:text-8xl font-heading font-black text-white/[0.03] select-none pointer-events-none tracking-tighter"
              aria-hidden="true"
            >
              01
            </span>

            <div className="relative z-10">
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#161726] border border-[#28293D] text-[#C0B4FE] flex items-center justify-center group-hover:scale-105 group-hover:border-[#C0B4FE]/60 transition-all duration-300 shadow-md">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C0B4FE] uppercase">
                    OUR MISSION
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C0B4FE]/10 border border-[#C0B4FE]/20 text-[10px] font-mono text-[#C0B4FE] font-medium tracking-wide">
                  ACTIVE
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-[28px] lg:text-3xl font-heading font-normal text-white tracking-tight leading-snug mb-6">
                Structured Market Intelligence for Faster Strategic Decisions
              </h3>

              {/* Manifesto Box */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-[#080910]/70 border border-[#1E1F2E] backdrop-blur-sm">
                <p className="text-sm sm:text-[15px] text-white/80 font-sans leading-relaxed">
                  To free enterprise leaders from incomplete, backward looking reporting by building a structured platform that turns global market noise into clear and actionable competitive insight.
                </p>
              </div>
            </div>
          </div>

          {/* 02. Vision Card */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#11121F] via-[#0E0F1A] to-[#0A0B13] border border-[#222332] hover:border-[#C0B4FE]/50 transition-all duration-500 p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-between group overflow-hidden">
            {/* Ambient Corner Glow */}
            <div 
              className="absolute -top-24 -right-24 w-64 h-64 bg-[#C0B4FE]/[0.08] rounded-full blur-3xl pointer-events-none group-hover:bg-[#C0B4FE]/[0.15] transition-all duration-700" 
              aria-hidden="true" 
            />

            {/* Subtle Watermark Number */}
            <span 
              className="absolute top-6 right-8 text-7xl sm:text-8xl font-heading font-black text-white/[0.03] select-none pointer-events-none tracking-tighter"
              aria-hidden="true"
            >
              02
            </span>

            <div className="relative z-10">
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#161726] border border-[#28293D] text-[#C0B4FE] flex items-center justify-center group-hover:scale-105 group-hover:border-[#C0B4FE]/60 transition-all duration-300 shadow-md">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C0B4FE] uppercase">
                    OUR VISION
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C0B4FE]/10 border border-[#C0B4FE]/20 text-[10px] font-mono text-[#C0B4FE] font-medium tracking-wide">
                  HORIZON
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-[28px] lg:text-3xl font-heading font-normal text-white tracking-tight leading-snug mb-6">
                The Unified Workspace for Structured Enterprise Market Insight
              </h3>

              {/* Manifesto Box */}
              <div className="relative p-6 sm:p-7 rounded-2xl bg-[#080910]/70 border border-[#1E1F2E] backdrop-blur-sm">
                <p className="text-sm sm:text-[15px] text-white/80 font-sans leading-relaxed">
                  To establish a structured standard where every corporate strategy, product decision, and resource allocation is informed by organized, current, and fully traceable market intelligence and evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
