import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from '../../components/common/Container';

interface FaqCardItem {
  id: string;
  number: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_CARDS: FaqCardItem[] = [
  {
    id: 'faq-1',
    number: '01',
    category: 'Industries',
    question: 'What industries do you work with?',
    answer: "The BA report's stated primary industry is Enterprise / Finance only. This answer lists Healthcare, Defense, and Supply Chain as served industries, which isn't supported by the BA scope. Please confirm before this goes live, or whether the answer should be scoped back to enterprise and finance."
  },
  {
    id: 'faq-2',
    number: '02',
    category: 'Implementation',
    question: 'How long does implementation take?',
    answer: 'Project timelines typically range from 2 to 6 weeks, depending on complexity. Smaller competitive monitoring feeds deploy within 2–3 weeks, while enterprise multi-platform integrations and private LLM pipelines take 4–6 weeks.'
  },
  {
    id: 'faq-3',
    number: '03',
    category: 'Onboarding',
    question: 'Do we need technical knowledge to work with you?',
    answer: 'No technical expertise is required from your team. Marveta delivers an intuitive, interactive intelligence workspace designed for strategists, corporate development executives, and analysts.'
  },
  {
    id: 'faq-4',
    number: '04',
    category: 'Security',
    question: 'Is your platform secure?',
    answer: 'Security is a critical priority. Marveta operates with data encryption in transit and at rest, strict role based access controls, consistent data validation, and dedicated safeguards for private queries.'
  },
  {
    id: 'faq-5',
    number: '05',
    category: 'ROI & Impact',
    question: 'What kind of ROI can we expect?',
    answer: 'Organizations typically see measurable value within a few quarters through reduced manual analyst effort, faster reaction time, and earlier visibility into significant competitor and market changes.'
  }
];

interface FaqNotchCardProps {
  item: FaqCardItem;
}

const FaqNotchCard: React.FC<FaqNotchCardProps> = ({ item }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState({ width: 360, height: 235 });
  const [pillSize, setPillSize] = useState({ width: 56, height: 34 });

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

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[225px] sm:min-h-[235px] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* SVG Background Path with Notched Top-Right Corner */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xl overflow-visible z-0"
        viewBox={`0 0 ${cardSize.width} ${cardSize.height}`}
      >
        <defs>
          <linearGradient id={`faqCardGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141524" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#0B0C15" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id={`faqBorderGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.25)" />
            <stop offset="40%" stopColor="rgba(192, 180, 254, 0.45)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.12)" />
          </linearGradient>
        </defs>

        <path
          d={cardPath}
          fill={`url(#faqCardGrad-${item.id})`}
          stroke={`url(#faqBorderGrad-${item.id})`}
          strokeWidth="1.25"
          className="group-hover:stroke-[#C0B4FE] transition-colors duration-300"
        />
      </svg>

      {/* Top-Right Number Badge Nested in the Curved Notch */}
      <div
        ref={pillRef}
        className="absolute top-0 right-0 z-20 bg-[#C0B4FE] text-[#080910] rounded-full px-4 py-1.5 flex items-center justify-center font-heading font-extrabold text-xs sm:text-sm tracking-tight shadow-md transition-transform duration-300 group-hover:scale-105 select-none"
      >
        {item.number}
      </div>

      {/* Card Content Layer */}
      <div className="relative z-10 p-6 sm:p-6 flex flex-col justify-between h-full">
        <div>
          {/* Top Category Tag */}
          <span className="text-[11px] font-mono font-semibold text-[#C0B4FE] uppercase tracking-wider block mb-2.5">
            {item.category}
          </span>

          {/* Question Title: Bit bigger and non-bold */}
          <h3 className="text-lg sm:text-xl font-normal font-heading text-white group-hover:text-[#C0B4FE] transition-colors leading-snug mb-3 pr-8">
            {item.question}
          </h3>

          {/* Full Readable Answer */}
          <p className="text-xs sm:text-[13.5px] text-white/70 font-sans leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactCtaCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState({ width: 360, height: 235 });
  const [pillSize, setPillSize] = useState({ width: 68, height: 34 });

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

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[225px] sm:min-h-[235px] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* SVG Background Path with Notched Top-Right Corner */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-xl overflow-visible z-0"
        viewBox={`0 0 ${cardSize.width} ${cardSize.height}`}
      >
        <defs>
          <linearGradient id="faqContactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B1C2E" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0B0C15" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="faqContactBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(192, 180, 254, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
          </linearGradient>
        </defs>

        <path
          d={cardPath}
          fill="url(#faqContactGrad)"
          stroke="url(#faqContactBorder)"
          strokeWidth="1.3"
          className="group-hover:stroke-[#C0B4FE] transition-colors duration-300"
        />
      </svg>

      {/* Top-Right Badge Nested in the Curved Notch */}
      <div
        ref={pillRef}
        className="absolute top-0 right-0 z-20 bg-white text-[#080910] rounded-full px-3.5 py-1.5 flex items-center gap-1.5 font-heading font-extrabold text-xs tracking-tight shadow-md transition-transform duration-300 group-hover:scale-105 select-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#98E244] animate-pulse" />
        <span>HELP</span>
      </div>

      {/* Card Content Layer */}
      <div className="relative z-10 p-6 sm:p-6 flex flex-col justify-between h-full">
        <div>
          <span className="text-[11px] font-mono font-semibold text-[#C0B4FE] uppercase tracking-wider block mb-2.5">
            Inquiries
          </span>

          <h3 className="text-lg sm:text-xl font-normal font-heading text-white leading-snug mb-2 pr-8">
            Haven&apos;t found what you need?
          </h3>

          <p className="text-xs sm:text-[13.5px] text-white/70 font-sans leading-relaxed">
            Get in touch with our strategic intelligence team we&apos;d be happy to assist you!
          </p>
        </div>

        <div className="pt-4 mt-auto">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#080910] hover:bg-[#C0B4FE] font-heading font-semibold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Contact us</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#080910] stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const FaqSection: React.FC = () => {
  return (
    <section 
      id="faq"
      className="pt-10 sm:pt-12 lg:pt-14 pb-6 sm:pb-8 lg:pb-10 bg-[#080910] overflow-hidden"
    >
      <Container>
        {/* Centered Section Title: Bit bigger & non-bold */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
            Help &amp; FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal font-heading text-white tracking-tight leading-[1.14] mb-3.5">
            Frequently asked questions.
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            Find quick answers to common questions about our intelligence workspace, or reach out directly.
          </p>
        </div>

        {/* 6-Card Grid: 5 Question Notch Cards + 1 Contact Us Notch Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto">
          {/* Cards 1 to 5: 5 Question Cards with Notched Top-Right Corner */}
          {FAQ_CARDS.map((item) => (
            <FaqNotchCard key={item.id} item={item} />
          ))}

          {/* Card 6: Contact Us Card */}
          <ContactCtaCard />
        </div>
      </Container>
    </section>
  );
};
