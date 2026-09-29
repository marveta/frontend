import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../../components/common/Container';

interface ExtendedTestimonial {
  id: string;
  authorName: string;
  role: string;
  organizationType: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

const TESTIMONIALS_DATA: ExtendedTestimonial[] = [
  {
    id: 't-1',
    authorName: 'Dilshan Perera',
    role: 'Software Engineer',
    organizationType: 'Aetheris Dynamics',
    avatarUrl: '/Enterprise Impact.svg',
    quote: 'We were having trouble tracking subtle pricing tier shifts and feature pivots with our legacy vendor. I connected with Marveta’s intelligence team. They took the time to map out exactly what our strategy unit needed, configured sub-5ms event tagging, and delivered the highest signal-to-noise competitive feed we have ever used.',
    rating: 5,
  },
  {
    id: 't-2',
    authorName: 'Marcus Vance',
    role: 'VP Corporate Strategy',
    organizationType: 'Vanguard Growth Partners',
    avatarUrl: '/Enterprise Impact (6).svg',
    quote: 'Rather than sifting through noisy press releases and marketing fluff, Marveta synthesizes verifiable pricing changes, tier restructurings, and roadmap cadence into one structured cockpit. It has fundamentally accelerated our quarterly portfolio defense briefings and competitor audits.',
    rating: 5,
  },
  {
    id: 't-3',
    authorName: 'Nadeesha Wickramasinghe',
    role: 'Senior Machine Learning Engineer',
    organizationType: 'Starlight Horizon Capital',
    avatarUrl: '/Enterprise Impact (4).svg',
    quote: 'The side-by-side comparative benchmarking and historical delta tracking have fundamentally upgraded our investment committee workflows. Having auditable proof of how competitors adjusted minimum contract clauses saved us weeks on due diligence.',
    rating: 5,
  },
  {
    id: 't-4',
    authorName: 'Ashani Gunasekara',
    role: 'Director of Intelligence',
    organizationType: 'CloudScale Enterprise Systems',
    avatarUrl: '/Enterprise Impact (2).svg',
    quote: 'Marveta eliminated over 20 hours of manual analyst surveillance every week. The automated detection of API specification updates and sunset announcements ensures our product roadmaps are always two quarters ahead of peer groups.',
    rating: 5,
  },
  {
    id: 't-5',
    authorName: 'Sarah Jenkins',
    role: 'Head of M&A Strategy',
    organizationType: 'Quantum Leap Ventures',
    avatarUrl: '/Enterprise Impact (3).svg',
    quote: 'Tracking market deltas in real-time gave our acquisition thesis a tremendous strategic advantage. The cross-vertical competitor matrices and audited telemetry feed into our core models seamlessly.',
    rating: 5,
  },
  {
    id: 't-6',
    authorName: 'Julian Thorne',
    role: 'Chief Operating Officer',
    organizationType: 'Apex BioIntelligence',
    avatarUrl: '/Enterprise Impact (5).svg',
    quote: 'The depth of intelligence and precision telemetry Marveta provides is unmatched. It has replaced fragmented reports with a unified source of truth across all competitor lifecycle events.',
    rating: 5,
  },
];

interface TestimonialCardProps {
  testimonial: ExtendedTestimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  
  const [cardSize, setCardSize] = useState({ width: 380, height: 350 });
  const [pillSize, setPillSize] = useState({ width: 225, height: 52 });

  // Dynamically measure both card and author pill without redundant renders
  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        const cardRect = containerRef.current.getBoundingClientRect();
        const w = Math.round(cardRect.width);
        const h = Math.round(cardRect.height);
        if (w > 0 && h > 0) {
          setCardSize((prev) => (prev.width === w && prev.height === h ? prev : { width: w, height: h }));
        }
      }
      if (pillRef.current) {
        const pillRect = pillRef.current.getBoundingClientRect();
        const pw = Math.ceil(pillRect.width);
        const ph = Math.ceil(pillRect.height);
        if (pw > 0 && ph > 0) {
          setPillSize((prev) => (prev.width === pw && prev.height === ph ? prev : { width: pw, height: ph }));
        }
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);
    if (pillRef.current) observer.observe(pillRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Compute exact SVG path with notch wrapped tightly around the measured pill dimensions
  const cornerR = 26;
  const notchR = 18;
  const notchMargin = 8;
  const notchW = pillSize.width + notchMargin;
  const notchH = pillSize.height + 4;
  const startNotchX = Math.max(cornerR + notchR + 10, cardSize.width - notchW);

  const cardPath = [
    `M ${cornerR} 0`,
    `L ${startNotchX - notchR} 0`,
    `C ${startNotchX - notchR / 2} 0, ${startNotchX} ${notchR / 2}, ${startNotchX} ${notchR}`,
    `L ${startNotchX} ${notchH - notchR}`,
    `C ${startNotchX} ${notchH - notchR / 2}, ${startNotchX + notchR / 2} ${notchH}, ${startNotchX + notchR} ${notchH}`,
    `L ${cardSize.width - cornerR} ${notchH}`,
    `C ${cardSize.width - cornerR / 2} ${notchH}, ${cardSize.width} ${notchH + cornerR / 2}, ${cardSize.width} ${notchH + cornerR}`,
    `L ${cardSize.width} ${cardSize.height - cornerR}`,
    `C ${cardSize.width} ${cardSize.height - cornerR / 2}, ${cardSize.width - cornerR / 2} ${cardSize.height}, ${cardSize.width - cornerR} ${cardSize.height}`,
    `L ${cornerR} ${cardSize.height}`,
    `C ${cornerR / 2} ${cardSize.height}, 0 ${cardSize.height - cornerR / 2}, 0 ${cardSize.height - cornerR}`,
    `L 0 ${cornerR}`,
    `C 0 ${cornerR / 2}, ${cornerR / 2} 0, ${cornerR} 0`,
    'Z',
  ].join(' ');

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[350px] sm:min-h-[360px] flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-1 select-none"
    >
      {/* Clean Vector Background Contour */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
        viewBox={`0 0 ${cardSize.width} ${cardSize.height}`}
      >
        <defs>
          <clipPath id={`cardClip-${testimonial.id}`}>
            <path d={cardPath} />
          </clipPath>

          <linearGradient id={`cardGrad-${testimonial.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121320" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#0B0C15" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#080910" stopOpacity="1" />
          </linearGradient>

          <linearGradient id={`borderGrad-${testimonial.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(192, 180, 254, 0.35)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>

          <pattern id={`gridPattern-${testimonial.id}`} width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(192, 180, 254, 0.05)" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* Base Card Path Fill & Stroke */}
        <path 
          d={cardPath} 
          fill={`url(#cardGrad-${testimonial.id})`} 
          stroke={`url(#borderGrad-${testimonial.id})`} 
          strokeWidth="1.2" 
          className="group-hover:stroke-[#C0B4FE]/60 transition-colors duration-300"
        />

        {/* Grid Pattern Overlay */}
        <path 
          d={cardPath} 
          fill={`url(#gridPattern-${testimonial.id})`} 
          opacity="0.8" 
          className="pointer-events-none"
        />

        {/* Bottom-Right Concentric Arcs (Theme Color #C0B4FE) */}
        <g clipPath={`url(#cardClip-${testimonial.id})`}>
          <circle
            cx={cardSize.width}
            cy={cardSize.height}
            r="65"
            fill="none"
            stroke="#C0B4FE"
            strokeWidth="1.8"
            opacity="0.45"
            className="group-hover:opacity-75 transition-opacity duration-300"
          />
          <circle
            cx={cardSize.width}
            cy={cardSize.height}
            r="115"
            fill="none"
            stroke="#C0B4FE"
            strokeWidth="1.8"
            opacity="0.32"
            className="group-hover:opacity-60 transition-opacity duration-300"
          />
          <circle
            cx={cardSize.width}
            cy={cardSize.height}
            r="165"
            fill="none"
            stroke="#C0B4FE"
            strokeWidth="1.3"
            opacity="0.18"
            strokeDasharray="4 4"
            className="group-hover:opacity-40 transition-opacity duration-300"
          />
        </g>
      </svg>

      {/* Top-Right Floating Pill Badge: Clean Crisp White Surface */}
      <div 
        ref={pillRef}
        className="absolute top-0 right-0 z-20 bg-white text-[#080910] rounded-full pl-2 pr-4 sm:pr-5 py-2 flex items-center gap-3 border border-white/90 shadow-md group-hover:shadow-lg transition-all select-none"
      >
        <img 
          src={testimonial.avatarUrl} 
          alt={testimonial.authorName} 
          className="w-10 h-10 rounded-full object-cover shrink-0 border border-black/10 shadow-xs"
        />
        <div className="flex flex-col justify-center min-w-0 text-left">
          <span className="font-heading font-bold text-xs sm:text-sm text-[#080910] leading-none mb-1 whitespace-nowrap">
            {testimonial.authorName}
          </span>
          <span className="text-[11px] text-[#5540B8] font-mono font-medium leading-none whitespace-nowrap">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Card Content Layer */}
      <div className="relative z-10 pt-7 px-6 sm:px-7 pb-6 h-full flex flex-col justify-between">
        
        {/* Top Content: Double Quote Icon + Testimonial Paragraph */}
        <div>
          <div className="mb-4 sm:mb-5">
            <svg 
              viewBox="0 0 32 32" 
              className="w-8 h-8 sm:w-9 sm:h-9 fill-white/80" 
              aria-hidden="true"
            >
              <path d="M 3 19 C 3 12 7 7.5 13.5 5.5 L 14.5 9 C 9.5 10.5 8 13.5 8 15.5 L 12.5 15.5 C 14.5 15.5 16 17 16 19 L 16 25 C 16 27 14.5 28.5 12.5 28.5 L 6.5 28.5 C 4.5 28.5 3 27 3 25 Z M 19 19 C 19 12 23 7.5 29.5 5.5 L 30.5 9 C 25.5 10.5 24 13.5 24 15.5 L 28.5 15.5 C 30.5 15.5 32 17 32 19 L 32 25 C 32 27 30.5 28.5 28.5 28.5 L 22.5 28.5 C 20.5 28.5 19 27 19 25 Z" />
            </svg>
          </div>

          {/* Testimonial Quote */}
          <p className="text-xs sm:text-[13.5px] leading-relaxed text-white/90 font-sans font-normal line-clamp-6">
            {testimonial.quote}
          </p>
        </div>

        {/* Bottom Bar: 5 Stars */}
        <div className="relative pt-6 mt-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-1 sm:gap-1.5" aria-label={`${testimonial.rating} star rating`}>
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <span 
                key={i} 
                className="text-[#C0B4FE] text-base sm:text-lg select-none leading-none"
              >
                ★
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Dynamically detect visible items per screen viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Maximum slides based on visible count
  const maxSlide = Math.max(0, TESTIMONIALS_DATA.length - itemsPerView);

  // Clamp activeSlide when screen resizes
  useEffect(() => {
    if (activeSlide > maxSlide) {
      setActiveSlide(maxSlide);
    }
  }, [maxSlide, activeSlide]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials"
      className="py-10 sm:py-12 lg:py-14 bg-[#080910] relative overflow-hidden text-white"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 lg:mb-16 gap-5 sm:gap-6">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Pill Eyebrow Badge */}
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
              Enterprise Impact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal font-heading text-white tracking-tight leading-[1.14] mb-3.5">
              Trusted by industry leaders.
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-xl">
              How corporate development leads, investment committees, and strategy officers leverage Marveta intelligence.
            </p>
          </div>

          {/* Navigation Controls: Perfectly aligned on sm and md */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full md:w-auto md:self-end md:shrink-0">
            {/* Testimonial Number: Hidden on md screens */}
            <span className="text-xs font-mono text-white/40 select-none mr-1 md:hidden lg:inline-block">
              0{activeSlide + 1} / 0{maxSlide + 1}
            </span>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#12131A] border border-[#2B2C3A] hover:border-[#C0B4FE] text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-sm"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#12131A] border border-[#2B2C3A] hover:border-[#C0B4FE] text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer active:scale-95 shadow-sm"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Testimonials Sliding Track with Hardware-Accelerated Butter-Smooth Transition */}
        <div className="relative overflow-hidden py-4 -my-4">
          <div 
            className="flex -mx-3 items-stretch"
            style={{
              transform: `translate3d(-${activeSlide * (100 / itemsPerView)}%, 0, 0)`,
              transition: 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform',
            }}
          >
            {TESTIMONIALS_DATA.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3 flex flex-col"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Indicator Dots without Glow */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeSlide
                  ? 'w-8 bg-[#C0B4FE]'
                  : 'w-2 bg-[#282937] hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
