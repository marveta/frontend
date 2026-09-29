import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../components/common/Container';

const PARTNERS = [
  { name: 'Stratum CyberSec' },
  { name: 'Aetheris Dynamics' },
  { name: 'Nexora Systems' },
  { name: 'Vortex Analytics' }
];

export const HomeHero: React.FC = () => {
  const accentColor = '#C0B4FE';

  return (
    <section 
      id="hero"
      className="relative pt-24 sm:pt-28 lg:pt-24 pb-6 sm:pb-8 lg:pb-0 min-h-[100dvh] lg:h-screen lg:max-h-screen xl:h-screen xl:max-h-screen lg:min-h-0 flex flex-col justify-between overflow-hidden bg-[#080910] text-white select-none"
    >
      {/* 3D Glass Stepped Contour Structure Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/Hero.svg"
          alt="Market Intelligence 3D Hero Structure"
          className="w-full h-full object-cover object-right-bottom sm:object-right opacity-95 scale-[1.01]"
        />

        {/* Ambient Dark Atmospheric Gradients & Vignettes */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#080910] via-[#080910]/75 to-transparent" 
          style={{ width: '65%' }}
        />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080910]/40 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080910] via-[#080910]/80 to-transparent" />

        {/* Soft Volumetric Lavender Ambient Glow Aura */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{ backgroundColor: accentColor }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 bg-[#7C3AED]"
        />

      </div>

      {/* Main Center Area: Giant Stacked Typography & Bottom-Left Content */}
      <Container className="relative z-10 w-full flex-1 flex flex-col justify-center max-w-7xl">
        <div className="w-full max-w-5xl pt-4 lg:pt-8">
          
          {/* Giant Stacked Typography (Replicating the massive MANUFACTURING / ART scale) */}
          <div className="relative mb-6 sm:mb-8 lg:mb-10">
            <h1 className="font-heading font-black tracking-[-0.03em] uppercase leading-[0.84] select-none">
              {/* Line 1 */}
              <span className="block text-[12vw] sm:text-[10.5vw] md:text-[88px] lg:text-[104px] xl:text-[124px] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)]">
                MARKET
              </span>

              {/* Line 2 with 3D Glass Caustic Refraction Highlights */}
              <span 
                className="block text-[10.5vw] xs:text-[11vw] sm:text-[10.5vw] md:text-[88px] lg:text-[104px] xl:text-[124px] text-transparent bg-clip-text drop-shadow-[0_14px_45px_rgba(0,0,0,0.95)]"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 35%, #E4DEFE 60%, #C0B4FE 85%, #67E8F9 100%)'
                }}
              >
                INTELLIGENCE
              </span>
            </h1>
          </div>

          {/* Bottom-Left Positioning Statement & Pill CTA Button */}
          <div className="max-w-xl flex flex-col items-start pt-1 w-full">
            <p className="text-sm sm:text-base text-white/80 font-sans font-normal leading-relaxed mb-6 sm:mb-7 drop-shadow-md">
              The gold standard in research, automated signals, and continuous competitive intelligence. Understand markets and synthesize competitor moves before anyone else.
            </p>

            {/* Pill CTA Button (Matching LEARN MORE from reference) */}
            <Link to="/products" className="w-full sm:w-auto block sm:inline-block">
              <button
                type="button"
                className="w-full sm:w-auto justify-center px-8 py-3.5 sm:py-4 rounded-full font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all duration-300 transform active:scale-95 flex items-center gap-3 cursor-pointer shadow-2xl bg-[#C0B4FE] text-[#080910] hover:bg-[#D4CBFE] hover:shadow-[0_0_30px_rgba(192,180,254,0.45)]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

        </div>
      </Container>

      {/* Bottom Dock: Partners Section (Hidden on sm/mobile devices, visible from sm upwards) */}
      <div className="relative z-20 w-full mt-8 lg:mt-0 hidden sm:flex justify-end">
        {/* Full-width on mobile/tablet; chamfered right dock on lg/xl */}
        <div className="w-full lg:w-auto lg:self-end relative bg-[#12131A]/95 border-t border-[#343434] lg:border-l backdrop-blur-xl px-4 sm:px-6 lg:pl-10 lg:pr-10 py-3.5 sm:py-4 lg:py-5 min-h-[56px] sm:min-h-[60px] lg:min-h-[66px] shadow-2xl flex items-center justify-center lg:justify-end [clip-path:none] lg:[clip-path:polygon(30px_0%,100%_0%,100%_100%,0%_100%,0%_100%)]">
          {/* Glowing Chamfer Accent Cut Line (Visible on desktop only) */}
          <div 
            className="hidden lg:block absolute top-0 left-0 w-8 h-[2px] -rotate-45 origin-top-left bg-[#C0B4FE] shadow-[0_0_8px_#C0B4FE]"
          />

          {/* Partner Items: 2-column grid on mobile (< sm), single flex row on tablet & desktop */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 w-full sm:flex sm:items-center sm:justify-around lg:justify-end sm:gap-6 lg:gap-8 xl:gap-10 select-none">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 sm:gap-2.5 whitespace-nowrap text-xs sm:text-sm font-heading font-semibold text-white/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C0B4FE] shrink-0" />
                <span className="truncate">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
