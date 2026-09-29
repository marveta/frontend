import React from 'react';
import { PageHero } from '../../components/common/PageHero';

export const ContactHero: React.FC = () => {
  return (
    <PageHero
      id="contact-hero"
      title="Contact"
      verticalText="Contact"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact' }
      ]}
    />
  );
};
