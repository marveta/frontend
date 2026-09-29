import React, { useRef, useState, useEffect } from 'react';
import { Container } from '../../components/common/Container';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

const NOTCH_WIDTH = 172;
const NOTCH_HEIGHT = 34;

const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState({ width: 300, height: 380 });

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

  const cornerR = 20;
  const notchR = 14;
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

  const gradId = `teamCardGrad-${member.id}`;
  const borderGradId = `teamBorderGrad-${member.id}`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[370px] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
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

      {/* Top-Right Role Badge Nested in the Curved Notch (Uniform Width, No Stars) */}
      <div
        className="absolute top-0 right-0 z-20 bg-[#C0B4FE] text-[#080910] rounded-full h-[30px] px-2.5 flex items-center justify-center font-heading font-bold text-[10px] sm:text-[11px] tracking-tight shadow-md transition-transform duration-300 group-hover:scale-105 select-none"
        style={{ width: `${notchW - 6}px` }}
      >
        <span className="truncate">{member.role}</span>
      </div>

      {/* Card Content Layer with Inset Image Design */}
      <div className="relative z-10 p-3.5 sm:p-4.5 flex flex-col justify-between h-full">
        <div>
          {/* Top Row: Index Badge & Clearance from Notch */}
          <div
            className="flex items-center justify-between mb-3 h-[30px]"
            style={{ paddingRight: `${notchW}px` }}
          >
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-[#080910]/90 border border-[#26273B] text-[10.5px] font-mono font-bold text-[#C0B4FE] shadow-sm">
              0{index + 1}
            </span>
          </div>

          {/* Inset Showcase Portrait Frame with Rounded Borders */}
          <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-[#0A0B13] border border-[#222332] group-hover:border-[#C0B4FE]/40 transition-all duration-300 shadow-inner mb-3.5">
            <img
              src={member.image}
              alt={member.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B13]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Member Name */}
          <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-[#C0B4FE] transition-colors leading-snug mb-1.5">
            {member.name}
          </h3>

          {/* Simple Description (Complete, Not Cutoff) */}
          <p className="text-xs sm:text-[13px] text-white/70 font-sans leading-relaxed">
            {member.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutTeam: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: 'exec-1',
      name: 'Nivaarika Tharshini',
      role: 'Founder & CEO',
      description: "Founder driving Marveta's mission to deliver structured market and competitive intelligence to teams.",
      image: '/TM.svg',
    },
    {
      id: 'exec-2',
      name: 'Aaron Charles',
      role: 'Chief Technology Officer',
      description: 'Specializes in structured data platform architecture and continuous market signal monitoring.',
      image: '/TM (4).svg',
    },
    {
      id: 'exec-3',
      name: 'Priyanka Rajaratnam',
      role: 'Chief Operating Officer',
      description: 'Oversees enterprise operations and structured intelligence programs for finance and strategy clients.',
      image: '/TM (2).svg',
    },
    {
      id: 'exec-4',
      name: 'Rohan Wijesekara',
      role: 'Head of Market Intelligence',
      description: 'Market intelligence leader focused on shrinking boardroom decision cycles from weeks to hours.',
      image: '/TM (3).svg',
    },
  ];

  return (
    <section id="about-team" className="pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-10 bg-[#080910] text-white">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-2.5">
            Executive Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal font-heading text-white tracking-tight leading-[1.15] mb-4">
            Meet the Minds Behind Marveta
          </h2>
          <p className="text-sm sm:text-base text-white/65 font-sans leading-relaxed">
           World class leaders combining frontier market intelligence research, deep enterprise strategy, and high velocity platform engineering craft. 
          </p>
        </div>

        {/* 4-Person Team Grid matching EventCard Notched Architecture */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {team.map((member, idx) => (
            <TeamMemberCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
};
