import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Container } from '../components/common/Container';
import { EventsHero } from '../sections/events/EventsHero';
import { EventCard, getEventImage } from '../sections/events/EventCard';
import { LoadingState } from '../components/common/LoadingState';
import { EmptyState } from '../components/common/EmptyState';
import { apiService } from '../services/api';
import { MarketEvent } from '../types';

const CATEGORIES = [
  'All',
  'Product Launch',
  'Pricing',
  'Business Development',
  'Market Change',
  'Strategic M&A'
];

export const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<MarketEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRelevance, setSelectedRelevance] = useState('All');

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const res = await apiService.getEvents({
        category: selectedCategory,
        relevance: selectedRelevance,
        search: searchQuery
      });
      if (res.data) {
        setEvents(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [selectedCategory, selectedRelevance]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchEvents();
  };

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedRelevance('All');
  };

  return (
    <div className="w-full pb-24">
      <EventsHero />

      <section id="events-stream" className="pt-10 sm:pt-14 scroll-mt-24 sm:scroll-mt-28">
        <Container>
          {/* Filter and Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            {/* Category Tabs */}
            <div className="overflow-x-auto no-scrollbar py-2.5 px-1 -mx-1">
              <div className="flex items-center gap-2 min-w-max">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-heading font-medium transition-all cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#C0B4FE]/40 ${
                      selectedCategory === cat
                        ? 'bg-[#C0B4FE] text-[#080910] font-semibold'
                        : 'bg-[#1B1B1B] text-white/70 hover:text-white hover:bg-[#343434]/70 border border-[#343434]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80 shrink-0">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter events or company..."
                className="w-full bg-[#1B1B1B] border border-[#343434] focus:border-[#C0B4FE] rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder:text-white/40 focus:outline-none transition-colors"
              />
            </form>
          </div>

          {/* Cards Grid View */}
          {isLoading ? (
            <LoadingState message="Aggregating market event nodes..." />
          ) : events.length === 0 ? (
            <EmptyState
              title="No market events found"
              description="There are no events matching your active filters. Try adjusting the category or search keywords."
              actionLabel="Reset Filters"
              onAction={resetFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-6 lg:gap-5 xl:gap-6">
              {events.map((evt) => (
                <EventCard
                  key={evt.id}
                  event={evt}
                  image={getEventImage(evt)}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
