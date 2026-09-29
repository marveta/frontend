import React from 'react';
import { PageHero } from '../../components/common/PageHero';

export const ProductsHero: React.FC = () => {
  return (
    <PageHero
      id="products-hero"
      title="Products"
      verticalText="Products"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Products' }
      ]}
    />
  );
};
