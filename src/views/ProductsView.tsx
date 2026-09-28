import React, { useState, useMemo } from 'react';
import { PageRoute, ProductItem, ProductCategory } from '../types';
import { PRODUCTS_DATA } from '../data/companyData';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Thermometer, 
  Flame, 
  Layers, 
  ArrowRight, 
  Package, 
  Check, 
  Clock, 
  ChevronRight 
} from 'lucide-react';

interface ProductsViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenProductDetail: (product: ProductItem) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onNavigate, onOpenProductDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesStatus =
        selectedStatus === 'all' || item.status === selectedStatus;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4E3] border border-[#D9A441]/40 text-xs font-bold text-[#12372A]">
          <Package className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Cold-Pressed & Pure Edible Oils Portfolio</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
          Master Product Catalog
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          From our flagship single-expeller cold-pressed mustard oil to specialized artisanal small batches, each product is crafted for purity, high smoke point, and genuine culinary distinction.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-neutral-200 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by oil type, pack size, or specification..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FFF8E7]/50 border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D9A441] focus:bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'mustard', label: 'Mustard (Cold-Pressed)' },
              { id: 'kachi-ghani', label: 'Kachi Ghani (Kolhu)' },
              { id: 'refined', label: 'Filtered Oils' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#12372A] text-[#D9A441] shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Availability Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-neutral-500 hidden lg:inline">Status:</span>
            {[
              { id: 'all', label: 'All' },
              { id: 'available', label: 'Available Now' },
              { id: 'coming-soon', label: 'Coming Soon' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setSelectedStatus(st.id)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                  selectedStatus === st.id
                    ? 'bg-[#D9A441] text-[#12372A] font-bold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-300 p-8 space-y-3">
          <p className="font-serif text-lg text-neutral-700 font-bold">No products match your current filters.</p>
          <p className="text-xs text-neutral-500">Try clearing your search query or selecting "All Products".</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedStatus('all'); }}
            className="text-xs text-[#12372A] font-bold underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAvailable = product.status === 'available';

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#D9A441]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-[#FAF4E3] overflow-hidden">
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Status Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm ${
                          isAvailable
                            ? 'bg-[#12372A] text-[#D9A441]'
                            : 'bg-neutral-800/90 text-white'
                        }`}
                      >
                        {isAvailable ? 'Available Now' : 'Coming Soon'}
                      </span>
                      <span className="text-[10px] bg-white/90 backdrop-blur-sm text-neutral-800 font-medium px-2 py-0.5 rounded shadow-sm">
                        {product.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-[#12372A]/90 backdrop-blur-sm text-[#FFF8E7] text-[10px] px-2 py-1 rounded font-mono">
                      {product.smokePoint}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#12372A] group-hover:text-[#B38226] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#D9A441] mt-0.5">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                      {product.overview}
                    </p>

                    {/* Core Process Parameters */}
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                      <div className="p-2 rounded bg-[#FFF8E7] border border-[#D9A441]/20">
                        <span className="text-neutral-500 block">Process</span>
                        <strong className="text-[#12372A] truncate block">{product.temperatureLimit}</strong>
                      </div>
                      <div className="p-2 rounded bg-[#FFF8E7] border border-[#D9A441]/20">
                        <span className="text-neutral-500 block">Pungency</span>
                        <strong className="text-[#12372A] truncate block">{product.pungencyLevel}</strong>
                      </div>
                    </div>

                    {/* Available Pack Options Mini Badges */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                        Available Configurations:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.packOptions.map((pack) => (
                          <span
                            key={pack.code}
                            className="text-[10px] bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded font-medium border border-neutral-200"
                          >
                            {pack.size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="text-xs font-bold text-[#12372A] hover:text-[#B38226] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onNavigate('b2b')}
                      className="bg-[#D9A441] hover:bg-[#F4CE79] text-[#12372A] font-bold text-xs px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      Enquire Supply
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Educational Callout: Smoke Point & Pungency Science */}
      <section className="bg-[#12372A] text-white rounded-2xl p-8 sm:p-12 border border-[#D9A441]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#D9A441] font-bold">
              The Chemistry of Authenticity
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF8E7]">
              Why Smoke Point & Natural Allyl Isothiocyanate Matter
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/80 leading-relaxed">
              Industrial solvent extraction strips edible oils of their natural aroma and subjects delicate fatty acids to high heat, creating trans-fat risks. JAYRAJI preserves a natural smoke point of ~250°C and genuine volatile pungency purely by managing the mechanics: low RPM, chilled water cooling, and immediate micro-pore filtration.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => onNavigate('quality')}
              className="bg-[#D9A441] hover:bg-[#F4CE79] text-[#12372A] font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all text-center cursor-pointer"
            >
              Review Quality Matrix vs Refined Oils
            </button>
            <button
              onClick={() => onNavigate('manufacturing')}
              className="bg-white/10 hover:bg-white/15 text-[#FFF8E7] text-xs py-3 px-5 rounded-xl border border-white/20 transition-all text-center cursor-pointer"
            >
              See Cold Press Expeller Details
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
