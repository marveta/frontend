import React from 'react';
import { PageHero } from '../../components/common/PageHero';

export const AboutHero: React.FC = () => {
  return (
    <PageHero
      id="about-hero"
      title="About Us"
      verticalText="About"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About Us' }
      ]}
    />
  );
};
