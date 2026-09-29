import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { EventCard, getEventImage } from '../events/EventCard';
import { apiService } from '../../services/api';
import { MarketEvent } from '../../types';

// Visual assets for promotional banner
import eventsBanner3d from '../../assets/images/events_banner_3d.jpg';

export const HomeEventsSection: React.FC = () => {
  const [events, setEvents] = useState<MarketEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiService.getEvents().then((res) => {
      if (res.data) {
        // Show top 3 recent major market events
        setEvents(res.data.slice(0, 3));
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <section 
      id="home-events-section"
      className="py-10 sm:py-12 lg:py-14 bg-[#080910] relative overflow-hidden"
    >
      {/* Background glow */}
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-[#C0B4FE]/[0.025] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container className="px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Centered Section Header: Badge, Title, and Description */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
            Market Signals &amp; Events
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal font-heading text-white tracking-tight leading-[1.14] mb-3.5">
            Corporate moves &amp; disruptions.
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-2xl">
           Continuous intelligence covering major corporate deals, executive changes, regulatory approvals, and strategic pricing changes. 
          </p>
        </div>

        {/* Events Cards Grid: 2 cards on md screens, 3 cards on lg screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-6 lg:gap-5 xl:gap-6 mb-12 sm:mb-14">
          {events.map((evt, index) => (
            <div
              key={evt.id}
              className={index >= 2 ? 'md:hidden lg:block' : ''}
            >
              <EventCard
                event={evt}
                image={getEventImage(evt)}
              />
            </div>
          ))}
        </div>

        {/* Promotional Callout Banner with Overlay Pop-Out 3D Artwork */}
        <div className="relative rounded-2xl sm:rounded-3xl md:rounded-[36px] border border-[#C0B4FE]/20 hover:border-[#C0B4FE]/40 transition-colors duration-300 shadow-xl bg-gradient-to-r from-[#140F35] via-[#201454] to-[#36228A] py-5 px-5 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 md:gap-8 group overflow-hidden md:overflow-visible md:min-h-[200px] lg:min-h-[220px]">
          {/* Subtle top inner reflection hairline */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C0B4FE]/40 to-transparent pointer-events-none z-10 rounded-t-2xl sm:rounded-t-3xl" />

          {/* Left Text Content & Action Button */}
          <div className="relative z-10 w-full md:w-[60%] lg:w-[62%] text-left">
            {/* Reduced Title */}
            <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[30px] font-bold font-heading text-white tracking-tight leading-tight">
              Stay ahead of competitor moves.
            </h3>

            {/* Description */}
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-[15px] text-white/80 font-sans leading-relaxed max-w-sm sm:max-w-md md:max-w-lg">
              Filter by industry vertical, strategic relevance rating, company ticker, or specific product line impact.
            </p>

            {/* Button below description: Full width on sm/mobile devices */}
            <div className="pt-3.5 sm:pt-4 w-full sm:w-auto">
              <Link to="/events" className="block sm:inline-block w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white text-[#080910] hover:bg-[#C0B4FE] font-heading font-semibold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore All Market Events</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#080910] stroke-[2.5]" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right 3D Visual Artwork - Hidden on sm/mobile, scaled down & static (no hover animation) on desktop */}
          <div className="hidden md:flex absolute md:right-3 lg:right-8 md:-top-4 lg:-top-6 md:-bottom-4 lg:-bottom-6 items-center justify-center shrink-0 pointer-events-none select-none z-20">
            <div className="relative md:w-[280px] lg:w-[320px] xl:w-[350px] aspect-square flex items-center justify-center">
              <img
                src={eventsBanner3d}
                alt="Market Signals 3D Graphic"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] [mask-image:radial-gradient(circle_at_50%_50%,black_54%,transparent_74%)] [-webkit-mask-image:radial-gradient(circle_at_50%_50%,black_54%,transparent_74%)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
