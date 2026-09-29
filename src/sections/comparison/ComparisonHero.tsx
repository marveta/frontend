import React from 'react';
import { PageHero } from '../../components/common/PageHero';

export const ComparisonHero: React.FC = () => {
  return (
    <PageHero
      id="comparison-hero"
      title="Comparison"
      verticalText="Comparison"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Comparison' }
      ]}
    />
  );
};
