import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../components/common/Container';
import crystal3DImg from '../../assets/images/hero_glass_isometric.jpg';

export const HomeAbout: React.FC = () => {
  return (
    <section
      id="about"
      className="py-8 sm:py-10 lg:py-12 bg-[#080910] relative overflow-hidden text-white"
    >
      {/* SVG ClipPath Definition for Organic Curved Image Area */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="curvedImageClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.72 0 C 0.66 0.05, 0.58 0.10, 0.52 0.20 C 0.46 0.30, 0.50 0.42, 0.52 0.52 C 0.54 0.62, 0.44 0.74, 0.45 0.86 C 0.46 0.94, 0.49 0.98, 0.52 1 L 1 1 L 1 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Ambient background glow aura */}
      <div
        className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#C0B4FE]/[0.025] rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#1C1C2B]/30 rounded-full blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container className="max-w-7xl">
        {/* Top Header Row matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12">

          {/* Left Column: Badge & Title */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Section Eyebrow Badge */}
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
              About Marveta
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal font-heading text-white tracking-tight leading-[1.14] mb-3.5">
              What is Marveta?
            </h2>
          </div>

          {/* Right Column: Explanatory Paragraph + Explore Button Below */}
          <div className="lg:col-span-6 flex flex-col items-start pt-1 sm:pt-2 w-full">
            <p className="text-sm sm:text-base lg:text-lg text-white/80 font-sans leading-relaxed max-w-xl mb-5 sm:mb-6">
              Marveta is a market and competitive intelligence platform that equips corporate strategy, investment, and research teams with continuous competitor monitoring and actionable market insights.
            </p>

            <Link to="/about" className="w-full sm:w-auto block sm:inline-block">
              <button
                type="button"
                className="w-full sm:w-auto justify-center px-6 py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm bg-[#161524] text-white border border-[#343434] hover:border-[#C0B4FE] hover:bg-[#1E1D30] transition-all duration-300 shadow-md cursor-pointer active:scale-95 flex items-center gap-2 group"
              >
                <span>Explore more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#C0B4FE]" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom 3-Card Bento Grid: Increased height & clean non-bold typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-6 items-stretch">

          {/* Card 1: Wide Card (~50% width / 6 cols) - Image filled into highlighted curved area (No dotted lines) */}
          <div className="lg:col-span-6 rounded-[26px] lg:rounded-[30px] bg-gradient-to-br from-[#DDD4FE] via-[#C9BCFE] to-[#B8A7FB] p-7 sm:p-8 shadow-xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[265px] sm:min-h-[285px] lg:min-h-[300px]">

            {/* Image filled seamlessly into the highlighted organic curved shape */}
            <div
              className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: 'url(#curvedImageClip)',
                WebkitClipPath: 'url(#curvedImageClip)'
              }}
            >
              <img
                src={crystal3DImg}
                alt="3D Capital Asset"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080910]/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Title */}
            <div className="relative z-10 max-w-[240px] sm:max-w-[280px]">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-heading text-[#121217] tracking-tight leading-tight">
                Markets made clear
              </h3>
            </div>

            {/* Bottom Description */}
            <div className="relative z-10 mt-8 sm:mt-10 max-w-[240px] sm:max-w-[280px]">
              <p className="text-xs sm:text-[13px] text-[#2D2C3B] font-sans leading-relaxed font-medium">
            Track competitors, compare companies, and review market changes in one central workspace. 
              </p>
            </div>
          </div>

          {/* Card 2: Clean Minimal Card (~25% width / 3 cols) - Non-bold heading */}
          <div className="lg:col-span-3 rounded-[26px] lg:rounded-[30px] bg-[#141320] border border-white/10 hover:border-[#C0B4FE]/50 p-7 sm:p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 min-h-[265px] sm:min-h-[285px] lg:min-h-[300px] relative overflow-hidden group">
            {/* Subtle corner aura */}
            <div
              className="absolute -top-12 -right-12 w-32 h-32 bg-[#C0B4FE]/[0.05] rounded-full blur-2xl pointer-events-none group-hover:bg-[#C0B4FE]/[0.1] transition-colors"
              aria-hidden="true"
            />

            {/* Top Heading: Non-bold text as requested */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-[25px] font-normal font-heading text-white tracking-normal leading-snug">
                Moves tracked,<br />
                history saved
              </h3>
            </div>

            {/* Bottom Description */}
            <div className="relative z-10 mt-8 sm:mt-10">
              <p className="text-xs sm:text-[13px] text-white/70 font-sans leading-relaxed">
                Review how competitive positions have changed over time with a complete history. 
              </p>
            </div>
          </div>

          {/* Card 3: Clean Minimal Card (~25% width / 3 cols) - Non-bold heading */}
          <div className="lg:col-span-3 rounded-[26px] lg:rounded-[30px] bg-[#141320] border border-white/10 hover:border-[#C0B4FE]/50 p-7 sm:p-8 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 min-h-[265px] sm:min-h-[285px] lg:min-h-[300px] relative overflow-hidden group">
            {/* Subtle corner aura */}
            <div
              className="absolute -top-12 -right-12 w-32 h-32 bg-[#C0B4FE]/[0.05] rounded-full blur-2xl pointer-events-none group-hover:bg-[#C0B4FE]/[0.1] transition-colors"
              aria-hidden="true"
            />

            {/* Top Heading: Non-bold text as requested */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-[25px] font-normal font-heading text-white tracking-normal leading-snug">
                Full visibility
              </h3>
            </div>

            {/* Bottom Description */}
            <div className="relative z-10 mt-8 sm:mt-10">
              <p className="text-xs sm:text-[13px] text-white/70 font-sans leading-relaxed">
              See all monitored companies, recent events, and items to review in one dashboard. 
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
