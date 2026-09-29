import React from 'react';
import { HomeHero } from '../sections/home/HomeHero';
import { HomeAbout } from '../sections/home/HomeAbout';
import { HomeProductsSection } from '../sections/home/HomeProductsSection';
import { HomeEventsSection } from '../sections/home/HomeEventsSection';
import { FeaturesSection } from '../sections/home/FeaturesSection';
import { TestimonialsSection } from '../sections/home/TestimonialsSection';
import { FaqSection } from '../sections/home/FaqSection';
import { FinalCta } from '../sections/home/FinalCta';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <HomeHero />
      <HomeAbout />
      <FeaturesSection />
      <HomeProductsSection />
      <HomeEventsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </div>
  );
};
