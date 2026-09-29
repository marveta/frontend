import React from 'react';
import { PageHero } from '../../components/common/PageHero';

export const EventsHero: React.FC = () => {
  return (
    <PageHero
      id="events-hero"
      title="Events"
      verticalText="Events"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Events' }
      ]}
    />
  );
};
