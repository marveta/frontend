import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../../components/common/Container';

const companyOverviewImage = '/Company Overview.svg';

const NOTCH_WIDTH = 196;
const NOTCH_HEIGHT = 38;
const PILL_WIDTH = 186;

export const CompanyImageShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState({ width: 520, height: 380 });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setCardSize({ width: Math.round(rect.width), height: Math.round(rect.height) });
        }
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const cornerR = 24;
  const notchR = 16;
  const notchW = NOTCH_WIDTH;
  const notchH = NOTCH_HEIGHT;
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
      className="relative w-full h-[320px] sm:h-[360px] lg:h-[390px] group transition-all duration-300 hover:-translate-y-1"
    >
      {/* SVG Container: Clips the image and renders the notched border */}
      <svg
        className="w-full h-full drop-shadow-2xl overflow-visible"
        viewBox={`0 0 ${cardSize.width} ${cardSize.height}`}
      >
        <defs>
          <clipPath id="companyImageClip">
            <path d={cardPath} />
          </clipPath>
          <linearGradient id="companyBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
            <stop offset="40%" stopColor="rgba(192, 180, 254, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
          <linearGradient id="bottomShadowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="#080910" stopOpacity="0" />
            <stop offset="100%" stopColor="#080910" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        <g clipPath="url(#companyImageClip)">
          <image
            href={companyOverviewImage}
            xlinkHref={companyOverviewImage}
            width={cardSize.width}
            height={cardSize.height}
            preserveAspectRatio="xMidYMid slice"
            className="group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ transformOrigin: 'center' }}
          />
          <rect
            width={cardSize.width}
            height={cardSize.height}
            fill="url(#bottomShadowGrad)"
            pointerEvents="none"
          />
        </g>

        <path
          d={cardPath}
          fill="none"
          stroke="url(#companyBorderGrad)"
          strokeWidth="1.5"
          className="group-hover:stroke-[#C0B4FE] transition-colors duration-300"
        />
      </svg>

      {/* Top-Right HQ Pill Nested in Notch */}
      <div
        className="absolute top-0 right-0 z-20 bg-[#C0B4FE] text-[#080910] rounded-full h-[32px] px-3.5 flex items-center justify-center gap-2 font-heading font-bold text-xs tracking-tight shadow-lg transition-transform duration-300 group-hover:scale-105 select-none"
        style={{ width: `${PILL_WIDTH}px` }}
      >
        <span className="w-2 h-2 rounded-full bg-[#080910] animate-pulse" />
        <span>HQ &amp; Global Operations</span>
      </div>
    </div>
  );
};

interface StatItem {
  prefix?: string;
  target: number;
  decimals?: number;
  suffix?: string;
  description: string;
}

const useCountUp = (
  target: number,
  decimals = 0,
  duration = 1800,
  trigger = false
) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo deceleration curve
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = easedProgress * target;
      setCurrent(val);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrent(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, trigger]);

  if (decimals > 0) {
    return current.toFixed(decimals);
  }
  return Math.round(current).toString();
};

const StatItemView: React.FC<{ stat: StatItem; inView: boolean }> = ({ stat, inView }) => {
  const animatedValue = useCountUp(stat.target, stat.decimals || 0, 1800, inView);

  return (
    <div className="flex flex-col justify-start group lg:px-6 first:lg:pl-0 last:lg:pr-0 pt-6 sm:pt-0 first:pt-0 border-t sm:border-t-0 lg:border-l first:lg:border-l-0 border-[#1E1F2E]/80">
      {/* Big High-Contrast Animated Number */}
      <div className="font-heading font-normal text-4xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-none mb-3 group-hover:text-[#C0B4FE] transition-colors duration-300 flex items-baseline">
        {stat.prefix && <span className="text-3xl sm:text-4xl text-[#C0B4FE] mr-0.5">{stat.prefix}</span>}
        <span>{animatedValue}</span>
        {stat.suffix && <span className="text-3xl sm:text-4xl text-[#C0B4FE] ml-0.5">{stat.suffix}</span>}
      </div>

      {/* Description */}
      <p className="text-sm sm:text-[15px] text-white/70 font-sans leading-relaxed max-w-[240px]">
        {stat.description}
      </p>
    </div>
  );
};

export const AboutCompany: React.FC = () => {
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!statsSectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(statsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      target: 99.4,
      decimals: 1,
      suffix: '%',
      description: 'Verified by benchmark audits',
    },
    {
      target: 140,
      suffix: '+',
      description: 'Global enterprise intelligence',
    },
    {
      target: 45,
      suffix: 'ms',
      description: 'Real-time telemetry engine',
    },
    {
      prefix: '$',
      target: 18,
      suffix: 'B+',
      description: 'Active tenant portfolio scale',
    },
  ];

  return (
    <section id="about-company" className="pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10 bg-[#080910] text-white">
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-8 sm:mb-10 lg:mb-12">
          {/* Left Column: Description & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
              Company Overview
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal font-heading text-white tracking-tight leading-[1.15] mb-5">
              Architecting decision velocity for visionary enterprises
            </h2>
            <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed mb-4">
              Marveta was engineered from the ground up to solve a fundamental challenge in corporate strategy: modern markets evolve in milliseconds, yet traditional competitive analysis relies on backward-looking quarterly reports and fragmented intuition.
            </p>
            <p className="text-sm sm:text-base text-white/60 font-sans leading-relaxed">
              We empower Fortune 500 leadership, private equity analysts, and high-growth innovators with an autonomous neural mesh that tracks, benchmarks, and predicts market dynamics with mathematical precision.
            </p>
          </div>

          {/* Right Column: Notched Visual Feature Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <CompanyImageShowcase />
          </div>
        </div>

        {/* Unified Panoramic Stats Telemetry Bar (No Name, No Underline Animation, With Count-Up) */}
        <div
          ref={statsSectionRef}
          className="relative rounded-3xl bg-gradient-to-b from-[#10111D] via-[#0C0D16] to-[#080910] border border-[#1E1F2E] p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full bg-[radial-gradient(ellipse_at_center,rgba(192,180,254,0.06)_0%,transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, idx) => (
              <StatItemView key={idx} stat={stat} inView={inView} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
