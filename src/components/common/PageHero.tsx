import React from 'react';
import { Link } from 'react-router-dom';
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  id?: string;
  title: string;
  description?: string;
  verticalText?: string;
  breadcrumbs?: BreadcrumbItem[];
  imageSrc?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  id,
  title,
  description,
  verticalText,
  breadcrumbs = [{ label: 'Home', href: '/' }, { label: title }],
  imageSrc = '/Hero cover image.svg',
}) => {
  const displayVerticalText = verticalText || title;

  return (
    <section id={id} className="w-full pt-3 sm:pt-5 pb-5 sm:pb-7">
      {/* Full-width container with minimal side margins to remove side gaps */}
      <div className="w-full px-3 sm:px-5 md:px-6 lg:px-8">
        {/* Main Floating Card with uniform height across all pages */}
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[36px] border border-[#343434]/80 shadow-2xl bg-[#080910] min-h-[250px] sm:min-h-[280px] md:min-h-[300px] flex items-center">
          
          {/* Background Image Layer with rounded clipping */}
          <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden pointer-events-none select-none z-0">
            <img
              src={imageSrc}
              alt={`${title} Hero Visual`}
              className="w-full h-full object-cover object-right md:object-center opacity-90 scale-105"
            />
            {/* Dark gradient mask on the left for maximum text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080910] via-[#080910]/85 to-transparent sm:w-2/3" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080910]/70 via-transparent to-[#080910]/40" />
            {/* Soft accent ambient glow */}
            <div 
              className="absolute top-1/4 left-1/4 w-[450px] h-[220px] bg-[#C0B4FE]/[0.07] rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Left Content Container: Aligned at the exact same level across all pages */}
          <div className="relative z-10 flex flex-col justify-center py-8 px-6 sm:px-10 md:px-14 lg:px-16 max-w-2xl">
            {/* Triangular Cluster Brand Mark */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-[#C0B4FE] shrink-0" aria-hidden="true">
                <circle cx="6" cy="16" r="3.5" fill="currentColor" />
                <circle cx="12" cy="7" r="3.5" fill="currentColor" />
                <circle cx="18" cy="16" r="3.5" fill="currentColor" />
              </svg>
            </div>

            {/* Page Heading: Non-bold (regular weight) with large text size */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal font-heading text-white tracking-[-0.02em] leading-[1.05]">
              {title}
            </h1>

            {/* Subtitle Description */}
            {description && (
              <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-xl mt-3 line-clamp-2">
                {description}
              </p>
            )}
          </div>

          {/* Right Edge: Perfectly sized and aligned vertical outline watermark typography */}
          <div 
            className="hidden sm:block absolute right-3 sm:right-5 md:right-7 lg:right-9 top-1/2 -translate-y-1/2 pointer-events-none select-none z-10"
            aria-hidden="true"
          >
            <div 
              className="font-heading font-extrabold text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] tracking-[0.05em] hero-outline-text whitespace-nowrap [writing-mode:vertical-rl]"
            >
              {displayVerticalText}
            </div>
          </div>

          {/* Bottom-Right Scooped Cut-Out Breadcrumb Tab in Deep Obsidian (#080910) seamlessly opening into page */}
          <div className="absolute -bottom-[1px] right-6 sm:right-10 md:right-16 z-20">
            <nav 
              aria-label="Breadcrumb" 
              className="relative bg-[#080910] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-t-xl sm:rounded-t-2xl border-t border-x border-[#343434]/90 border-b-0 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium font-sans shadow-2xl select-none after:absolute after:inset-x-0 after:-bottom-[2px] after:h-[3px] after:bg-[#080910]"
            >
              {/* Left Concave Inverted Curve */}
              <svg 
                className="absolute -left-3.5 sm:-left-4 bottom-0 w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#080910] fill-current pointer-events-none" 
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 0 C16 8.836 8.836 16 0 16 L16 16 Z" />
                <path d="M16 0 C16 8.836 8.836 16 0 16" fill="none" stroke="#343434" strokeWidth="1" />
              </svg>

              {/* Breadcrumb trail */}
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={crumb.label}>
                    {crumb.href && !isLast ? (
                      <Link 
                        to={crumb.href} 
                        className="text-white/60 hover:text-[#C0B4FE] transition-colors font-medium no-underline"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-[#C0B4FE] font-semibold" : "text-white/60"}>
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && <span className="text-white/30 font-normal">/</span>}
                  </React.Fragment>
                );
              })}

              {/* Right Concave Inverted Curve */}
              <svg 
                className="absolute -right-3.5 sm:-right-4 bottom-0 w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#080910] fill-current pointer-events-none" 
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M0 0 C0 8.836 7.164 16 16 16 L0 16 Z" />
                <path d="M0 0 C0 8.836 7.164 16 16 16" fill="none" stroke="#343434" strokeWidth="1" />
              </svg>
            </nav>
          </div>

        </div>
      </div>
    </section>
  );
};
