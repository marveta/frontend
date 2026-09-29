import React, { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, RotateCcw, X } from 'lucide-react';
import { Container } from '../components/common/Container';
import { ProductsHero } from '../sections/products/ProductsHero';
import { ProductCard } from '../sections/products/ProductCard';
import { ProductDetailModal } from '../sections/products/ProductDetailModal';
import { LoadingState } from '../components/common/LoadingState';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';
import { apiService } from '../services/api';
import { Product, Company } from '../types';

const CATEGORIES = ['All', 'Technology', 'Finance', 'Enterprise', 'Services', 'Consumer'];
const STATUSES = ['All', 'Active', 'Updated', 'Beta'];

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Selected product for modal detail
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Load companies for the filter dropdown
    apiService.getCompanies().then((res) => {
      if (res.data) setCompanies(res.data);
    });
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await apiService.getProducts({
        search: searchQuery,
        category: selectedCategory,
        companyId: selectedCompany,
        status: selectedStatus
      });
      if (res.data) {
        setProducts(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedCompany, selectedStatus]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProducts();
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedCompany('All');
    setSelectedStatus('All');
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedCategory !== 'All' || 
    selectedCompany !== 'All' || 
    selectedStatus !== 'All';

  return (
    <div className="w-full pb-24">
      <ProductsHero />

      <section id="products-explorer" className="pt-12 sm:pt-16 scroll-mt-24 sm:scroll-mt-28">
        <Container>
          {/* Categories Tab Navigation */}
          <div className="mb-8 overflow-x-auto no-scrollbar py-2.5 px-1 -mx-1">
            <div className="flex items-center gap-2 min-w-max">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-heading font-medium transition-all cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#C0B4FE]/40 ${
                      isSelected
                        ? 'bg-[#C0B4FE] text-[#080910] font-semibold'
                        : 'bg-[#1B1B1B] text-white/70 hover:text-white hover:bg-[#343434]/70 border border-[#343434]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Bar & Filter Controls Row */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative flex-1">
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, companies, or keywords..."
                className="w-full bg-[#1B1B1B] border border-[#343434] focus:border-[#C0B4FE] rounded-xl pl-11 pr-24 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#343434] hover:bg-[#C0B4FE] hover:text-[#080910] text-white/80 text-xs font-heading font-medium transition-colors"
              >
                Search
              </button>
            </form>

            {/* Mobile Filter Toggle Button */}
            <div className="flex lg:hidden items-center justify-between gap-2">
              <Button
                variant="secondary"
                size="md"
                leftIcon={<SlidersHorizontal className="w-4 h-4" />}
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                fullWidth
              >
                Filters {hasActiveFilters && '(Active)'}
              </Button>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="p-3 rounded-lg bg-[#1B1B1B] border border-[#343434] text-white/60 hover:text-white text-xs shrink-0"
                  aria-label="Reset filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Company Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/50 font-mono">Company:</span>
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="bg-[#1B1B1B] border border-[#343434] focus:border-[#C0B4FE] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none cursor-pointer"
                >
                  <option value="All">All Companies</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/50 font-mono">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-[#1B1B1B] border border-[#343434] focus:border-[#C0B4FE] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none cursor-pointer"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters button */}
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-white/60 hover:text-[#C0B4FE] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Collapsible Filter Drawer / Panel */}
          {isMobileFilterOpen && (
            <div className="lg:hidden p-4 rounded-xl bg-[#1B1B1B] border border-[#343434] mb-8 space-y-4">
              <div className="flex items-center justify-between border-b border-[#343434] pb-2">
                <span className="text-xs font-heading font-semibold text-[#C0B4FE] uppercase tracking-wider">
                  Filter Criteria
                </span>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="text-white/60 hover:text-white text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="text-xs text-white/60 block mb-1">Company</label>
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full bg-[#080910] border border-[#343434] rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option value="All">All Companies</option>
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-white/60 block mb-1">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full bg-[#080910] border border-[#343434] rounded-lg px-3 py-2 text-xs text-white"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#343434]">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  Apply Filters
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={resetFilters}
                >
                  Reset
                </Button>
              </div>
            </div>
          )}

          {/* Product Grid Area */}
          {isLoading ? (
            <LoadingState message="Retrieving structured product intelligence..." />
          ) : products.length === 0 ? (
            <EmptyState
              title="No products matched your parameters"
              description="Try clearing your search query or selecting a different company or category."
              actionLabel="Reset All Filters"
              onAction={resetFilters}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => setActiveProduct(p)}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProduct}
        isOpen={Boolean(activeProduct)}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
};
