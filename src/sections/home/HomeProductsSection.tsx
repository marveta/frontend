import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { ProductCard } from '../products/ProductCard';
import { ProductDetailModal } from '../products/ProductDetailModal';
import { apiService } from '../../services/api';
import { Product } from '../../types';

export const HomeProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiService.getProducts().then((res) => {
      if (res.data) {
        // Show top 3 featured products for a high-impact homepage showcase
        setProducts(res.data.slice(0, 3));
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    <section 
      id="home-products-section"
      className="py-10 sm:py-12 lg:py-14 bg-[#080910] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-[#C0B4FE]/[0.025] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header: Eyebrow, Title with View All Products button on the right, and Description */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
            Product Intelligence
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-3.5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal font-heading text-white tracking-tight leading-[1.14]">
              Competitor features &amp; price.
            </h2>

            {/* Desktop View All Products button in header (Visible on lg+ screens) */}
            <div className="hidden lg:block shrink-0 lg:translate-y-2">
              <Link to="/products">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full font-heading font-semibold text-sm bg-[#161524] text-white border border-[#343434] hover:border-[#C0B4FE] hover:bg-[#1E1D30] transition-all duration-300 shadow-md cursor-pointer active:scale-95 flex items-center gap-2 group"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#C0B4FE]" />
                </button>
              </Link>
            </div>
          </div>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed max-w-2xl">
           Gain direct visibility into what enterprise technology, fintech, and cybersecurity leaders are building, pricing, and commercializing. 
          </p>
        </div>

        {/* Product Cards Grid: 2 cards on md screens, 3 cards on lg screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={index >= 2 ? 'md:hidden lg:block' : ''}
            >
              <ProductCard
                product={product}
                onSelect={(p) => setActiveProduct(p)}
              />
            </div>
          ))}
        </div>

        {/* Mobile & Tablet View All Products button (Below cards for sm & md screens) */}
        <div className="mt-8 sm:mt-10 flex justify-center lg:hidden w-full">
          <Link to="/products" className="w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto justify-center px-8 py-3 rounded-full font-heading font-semibold text-sm bg-[#161524] text-white border border-[#343434] hover:border-[#C0B4FE] hover:bg-[#1E1D30] transition-all duration-300 shadow-md cursor-pointer active:scale-95 flex items-center gap-2 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#C0B4FE]" />
            </button>
          </Link>
        </div>
      </Container>
    </section>

    {/* Product Detail Modal - rendered outside section to avoid stacking context issues */}
    <ProductDetailModal
      product={activeProduct}
      isOpen={Boolean(activeProduct)}
      onClose={() => setActiveProduct(null)}
    />
    </>
  );
};
