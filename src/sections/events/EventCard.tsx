import React, { useRef, useState, useEffect } from 'react';
import { Calendar, Building2, MapPin, Clock } from 'lucide-react';
import { MarketEvent } from '../../types';

export const EVENT_IMAGES: Record<string, string> = {
  'evt-1': '/Aetheris Dynamics.svg',
  'evt-2': '/Stratum CyberSec.svg',
  'evt-3': '/Hyperion FinTech Launches Cross.svg',
  'evt-4': '/European Regulatory Framework — AI Liability & Compliance.svg',
  'evt-5': '/Vortex Capital — Strategic Distribution Intelligence.svg',
  'evt-6': '/Kallisto Systems — Route Risk Hedging Intelligence.svg',
};

export const getEventImage = (event: MarketEvent): string => {
  if (event.image) return event.image;
  if (EVENT_IMAGES[event.id]) return EVENT_IMAGES[event.id];
  if (event.title.includes('Aetheris')) return '/Aetheris Dynamics.svg';
  if (event.title.includes('Stratum')) return '/Stratum CyberSec.svg';
  if (event.title.includes('Hyperion')) return '/Hyperion FinTech Launches Cross.svg';
  if (event.title.includes('European')) return '/European Regulatory Framework — AI Liability & Compliance.svg';
  if (event.title.includes('Vortex')) return '/Vortex Capital — Strategic Distribution Intelligence.svg';
  if (event.title.includes('Kallisto')) return '/Kallisto Systems — Route Risk Hedging Intelligence.svg';
  return '/Aetheris Dynamics.svg';
};

interface EventCardProps {
  event: MarketEvent;
  image?: string;
}

export const EventCard: React.FC<EventCardProps> = ({ event, image }) => {
  const displayImage = image || getEventImage(event);
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const [cardSize, setCardSize] = useState({ width: 360, height: 410 });
  const [pillSize, setPillSize] = useState({ width: 120, height: 32 });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setCardSize({ width: Math.round(rect.width), height: Math.round(rect.height) });
        }
      }
      if (pillRef.current) {
        const pRect = pillRef.current.getBoundingClientRect();
        if (pRect.width > 0 && pRect.height > 0) {
          setPillSize({ width: Math.ceil(pRect.width), height: Math.ceil(pRect.height) });
        }
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);
    if (pillRef.current) observer.observe(pillRef.current);
    return () => observer.disconnect();
  }, []);

  const cornerR = 24;
  const notchR = 16;
  const notchMargin = 6;
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

  const gradId = `eventCardGrad-${event.id}`;
  const borderGradId = `eventBorderGrad-${event.id}`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* SVG Background Path with Notched Top-Right Corner */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xl overflow-visible z-0"
        viewBox={`0 0 ${cardSize.width} ${cardSize.height}`}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121320" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0E0F19" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#080910" stopOpacity="0.99" />
          </linearGradient>
          <linearGradient id={borderGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
            <stop offset="40%" stopColor="rgba(192, 180, 254, 0.45)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
        </defs>

        <path
          d={cardPath}
          fill={`url(#${gradId})`}
          stroke={`url(#${borderGradId})`}
          strokeWidth="1.25"
          className="group-hover:stroke-[#C0B4FE] transition-colors duration-300"
        />
      </svg>

      {/* Top-Right Date Badge Nested in the Curved Notch */}
      <div
        ref={pillRef}
        className="absolute top-0 right-0 z-20 bg-[#C0B4FE] text-[#080910] rounded-full px-3.5 py-1.5 flex items-center gap-1.5 font-heading font-bold text-xs tracking-tight shadow-md transition-transform duration-300 group-hover:scale-105 select-none"
      >
        <Calendar className="w-3.5 h-3.5 text-[#080910] shrink-0" />
        <span>{event.formattedDate}</span>
      </div>

      {/* Card Content Layer with Better Spacing and Inset Image Design */}
      <div className="relative z-10 p-3.5 sm:p-4.5 lg:p-4 xl:p-5 flex flex-col justify-between h-full">
        <div>
          {/* Top Row: Company & Category (dynamic clearance from the notch) */}
          <div
            className="flex items-center gap-2 mb-3 min-h-[30px]"
            style={{ paddingRight: `${Math.max(120, pillSize.width + 10)}px` }}
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#080910]/90 border border-[#26273B] text-xs font-heading font-bold text-white shadow-sm min-w-0">
              <Building2 className="w-3.5 h-3.5 text-[#C0B4FE] shrink-0" />
              <span className="truncate">{event.company}</span>
            </div>
            <span className="text-[10.5px] font-mono text-[#C0B4FE] bg-[#C0B4FE]/10 border border-[#C0B4FE]/20 px-2 py-0.5 rounded shadow-sm shrink-0">
              {event.category}
            </span>
          </div>

          {/* Inset Showcase Image Frame with Rounded Borders */}
          <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-[#0A0B13] border border-[#222332] group-hover:border-[#C0B4FE]/40 transition-all duration-300 shadow-inner mb-3.5">
            <img
              src={displayImage}
              alt={event.title}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B13]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Event Title */}
          <h3 className="text-base font-bold font-heading text-white group-hover:text-[#C0B4FE] transition-colors leading-snug line-clamp-2 mb-2.5">
            {event.title}
          </h3>

          {/* Time & Location Schedule Row - Strictly side-by-side ("near by near") on xl and lg screens */}
          <div className="flex items-center gap-1.5 sm:gap-2 mb-3 w-full min-w-0 flex-nowrap">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-[#080910]/90 border border-[#26273B] text-[#C0B4FE] font-mono text-[10px] sm:text-[11px] shadow-sm shrink-0 whitespace-nowrap">
              <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C0B4FE] shrink-0" />
              <span>{event.time || '10:00 AM — 11:30 AM PST'}</span>
            </div>
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-md bg-[#080910]/90 border border-[#26273B] text-white/60 font-sans text-[10px] sm:text-[11px] shadow-sm min-w-0 shrink">
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-white/40 shrink-0" />
              <span className="truncate">{event.location || `${event.company} HQ`}</span>
            </div>
          </div>

          {/* Summary Description */}
          <p className="text-xs sm:text-[13px] text-white/70 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3">
            {event.summary}
          </p>
        </div>
      </div>
    </div>
  );
};
