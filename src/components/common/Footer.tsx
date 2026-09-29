import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/');
    }
  };

  return (
    <footer 
      id="marveta-footer"
      className="w-full bg-[#080910] pt-4 sm:pt-6 pb-0 overflow-hidden"
    >
      {/* Sleek Rounded Card Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-t-[32px] sm:rounded-t-[44px] bg-[#0C0D16] border-t border-x border-[#343434]/80 pt-12 sm:pt-16 lg:pt-20 px-6 sm:px-12 lg:px-16 pb-0 overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Lavender Background Glow */}
          <div 
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#C0B4FE]/[0.04] rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true"
          />

          {/* Top Section: Brand Info + Link Columns (Side-by-side on md & lg) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 pb-12 sm:pb-16 border-b border-[#343434]/50 relative z-10 items-start">
            
            {/* Left Brand Column */}
            <div className="md:col-span-5 lg:col-span-5 flex flex-col pr-0 md:pr-6 lg:pr-8">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                className="inline-block mb-3.5 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#C0B4FE]/40 rounded-md cursor-pointer"
                aria-label="Marveta Home"
              >
                <img
                  src="/Logo.svg"
                  alt="Marveta"
                  className="h-10 sm:h-12 md:h-13 w-auto object-contain"
                />
              </Link>
              <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
                Enterprise market and competitive intelligence platform designed for faster strategic decisions and competitor intelligence.
              </p>
            </div>

            {/* Right Link Columns: 2 Evenly Distributed Columns on md and lg */}
            <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 pt-1 w-full max-w-sm md:max-w-md lg:max-w-md md:ml-auto">
              
              {/* Col 1: Platform */}
              <div className="flex flex-col">
                <h4 className="font-heading font-semibold text-sm sm:text-[15px] text-white mb-4 tracking-wide">
                  Platform
                </h4>
                <ul className="flex flex-col gap-3 text-sm font-sans">
                  <li>
                    <Link to="/products" className="text-white/60 hover:text-[#C0B4FE] transition-colors">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/events" className="text-white/60 hover:text-[#C0B4FE] transition-colors">
                      Market Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/comparison" className="text-white/60 hover:text-[#C0B4FE] transition-colors">
                      Comparison
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-white/60 hover:text-[#C0B4FE] transition-colors">
                      Enterprise Demo
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 2: Company */}
              <div className="flex flex-col">
                <h4 className="font-heading font-semibold text-sm sm:text-[15px] text-white mb-4 tracking-wide">
                  Company
                </h4>
                <ul className="flex flex-col gap-3 text-sm font-sans">
                  <li>
                    <Link to="/about" className="text-white/60 hover:text-[#C0B4FE] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="/#features" className="text-white/60 hover:text-[#C0B4FE] transition-colors">
                      Core Features
                    </a>
                  </li>
                  <li>
                    <span className="text-white/60 hover:text-[#C0B4FE] transition-colors cursor-pointer">
                      Privacy Policy
                    </span>
                  </li>
                  <li>
                    <span className="text-white/60 hover:text-[#C0B4FE] transition-colors cursor-pointer">
                      Terms &amp; Conditions
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Middle Row: Copyright and Unique Credits */}
          <div className="pt-8 sm:pt-10 pb-4 sm:pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-sans text-white/50 relative z-10">
            <p>
              &copy;{currentYear} Marveta. All rights reserved.
            </p>
            <p className="text-white/40">
              Continuous Market Intelligence &bull; Powered by AI
            </p>
          </div>

          {/* Bottom Monumental Watermark with Dynamic Shimmer Animation */}
          <div className="relative w-full pt-3 sm:pt-4 pb-0 overflow-hidden flex justify-center items-end select-none group/watermark">
            {/* Luminous Lavender Atmospheric Backlight */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-4xl h-32 sm:h-40 bg-[#C0B4FE]/[0.12] rounded-full blur-3xl pointer-events-none animate-watermark-glow" 
              aria-hidden="true"
            />
            
            {/* Monumental MARVETA Brand Watermark */}
            <h1 
              className="font-heading font-black tracking-[-0.03em] uppercase leading-[0.82] text-center w-full block bg-gradient-to-r from-[#1C1630] via-[#4D3F82] via-[#C0B4FE] via-[#EDE9FE] via-[#C0B4FE] via-[#4D3F82] to-[#1C1630] bg-clip-text text-transparent transform translate-y-1 sm:translate-y-2 group-hover/watermark:brightness-125 transition-all duration-700 animate-watermark-shimmer cursor-default"
              style={{
                fontSize: 'clamp(3.8rem, 16vw, 14.5rem)',
              }}
            >
              MARVETA
            </h1>
          </div>

        </div>
      </div>
    </footer>
  );
};
