import React from 'react';
import { ProductItem, PageRoute } from '../types';
import { X, ShieldCheck, Flame, Thermometer, Clock, Sparkles, Check, ArrowRight, Package } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onEnquire: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 border border-neutral-200">
        
        {/* Header Strip */}
        <div className="bg-[#12372A] text-white px-6 py-4.5 flex items-center justify-between border-b border-[#1E4F3E]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest bg-[#D9A441] text-[#12372A] font-bold px-2.5 py-1 rounded">
              {product.badge}
            </span>
            <span className="text-xs text-[#FFF8E7]/70 hidden sm:inline">
              Technical Specification & Application Dossier
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-[#FFF8E7]/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="max-h-[82vh] overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-square bg-[#FAF4E3] border border-[#D9A441]/30">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#12372A]/90 backdrop-blur-sm text-[#D9A441] text-xs font-semibold px-2.5 py-1 rounded-md">
                  {product.status === 'available' ? 'Available in Distribution' : 'In Pilot Production'}
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#FFF8E7] border border-[#D9A441]/30">
                  <div className="flex items-center gap-1.5 text-[#12372A] font-bold">
                    <Thermometer className="w-3.5 h-3.5 text-[#D9A441]" />
                    <span>Extraction Temp</span>
                  </div>
                  <p className="mt-1 text-neutral-700 font-medium">{product.temperatureLimit}</p>
                </div>

                <div className="p-3 rounded-lg bg-[#FFF8E7] border border-[#D9A441]/30">
                  <div className="flex items-center gap-1.5 text-[#12372A] font-bold">
                    <Flame className="w-3.5 h-3.5 text-[#D9A441]" />
                    <span>Smoke Point</span>
                  </div>
                  <p className="mt-1 text-neutral-700 font-medium">{product.smokePoint}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-[#D9A441] mt-1">
                  {product.tagline}
                </p>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {product.overview}
              </p>

              {/* Pungency & Flash Point Matrix */}
              <div className="p-4 rounded-xl bg-[#FAF4E3] border border-[#E7C275]/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#12372A] uppercase tracking-wider">
                    Natural Pungency (Jhaanjh Intensity)
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`w-3 h-3 rounded-full ${
                          star <= product.pungencyRating
                            ? 'bg-[#D9A441]'
                            : 'bg-neutral-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-semibold text-[#12372A] ml-1.5">
                      {product.pungencyLevel}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E7C275]/40 text-xs text-neutral-700 space-y-1">
                  <p>
                    <strong className="text-[#12372A]">Flash Point Profile:</strong> {product.flashPoint}
                  </p>
                  <p>
                    <strong className="text-[#12372A]">Shelf Stability:</strong> {product.shelfLife}
                  </p>
                </div>
              </div>

              {/* CTA row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onEnquire(product)}
                  className="bg-[#D9A441] hover:bg-[#F4CE79] text-[#12372A] font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Wholesale Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-neutral-500">
                  Direct dispatch from manufacturing plant
                </span>
              </div>
            </div>
          </div>

          {/* Pack Configurations Available */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-bold text-[#12372A] flex items-center gap-2">
                <Package className="w-5 h-5 text-[#D9A441]" />
                <span>Pack Configurations & Packaging Specifications</span>
              </h4>
              <span className="text-xs text-neutral-500">Food-Safe Food Grade Certified</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {product.packOptions.map((pack) => (
                <div
                  key={pack.code}
                  className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/70 hover:bg-white hover:border-[#D9A441] transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-bold text-[#12372A]">
                      {pack.size}
                    </span>
                    <span className="text-[10px] font-mono bg-neutral-200 text-neutral-700 px-1.5 py-0.5 rounded">
                      {pack.code}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-neutral-800">{pack.type}</p>
                  <p className="text-[11px] text-neutral-500">{pack.idealFor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Laboratory Testing Specifications */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <h4 className="font-serif text-lg font-bold text-[#12372A] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
              <span>Laboratory Quality Verification Parameters</span>
            </h4>
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#12372A] text-white">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">Test Parameter</th>
                    <th className="px-4 py-2.5 font-semibold">JAYRAJI Batch Benchmark</th>
                    <th className="px-4 py-2.5 font-semibold">Verification Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white">
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50">
                      <td className="px-4 py-2 font-medium text-neutral-800">{spec.label}</td>
                      <td className="px-4 py-2 font-bold text-[#12372A]">{spec.value}</td>
                      <td className="px-4 py-2 text-neutral-500">{spec.verifiedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Culinary Applications Grid */}
          <div className="space-y-3 pt-4 border-t border-neutral-200">
            <h4 className="font-serif text-lg font-bold text-[#12372A] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D9A441]" />
              <span>Culinary Applications & Indian Kitchen Pairing</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.culinaryPairings.map((pair, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FFF8E7] border border-[#E7C275]/40 space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-[#12372A] font-bold text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                    <span>{pair.dish}</span>
                  </div>
                  <p className="text-xs text-neutral-700">{pair.description}</p>
                  <p className="text-[11px] text-neutral-600 italic">
                    <strong>Recommended Technique:</strong> {pair.technique}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Nutritional Profile & Storage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
            <div>
              <h4 className="font-serif text-base font-bold text-[#12372A] mb-3">
                Nutritional Facts (Per 100g)
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-500 block">Energy</span>
                  <strong className="text-neutral-800">{product.nutritionPer100g.energy}</strong>
                </div>
                <div className="p-2.5 rounded bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-500 block">Total Fat</span>
                  <strong className="text-neutral-800">{product.nutritionPer100g.totalFat}</strong>
                </div>
                <div className="p-2.5 rounded bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-500 block">MUFA</span>
                  <strong className="text-neutral-800">{product.nutritionPer100g.mufa}</strong>
                </div>
                <div className="p-2.5 rounded bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-500 block">PUFA</span>
                  <strong className="text-neutral-800">{product.nutritionPer100g.pufa}</strong>
                </div>
                <div className="p-2.5 rounded bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-500 block">SFA</span>
                  <strong className="text-neutral-800">{product.nutritionPer100g.sfa}</strong>
                </div>
                <div className="p-2.5 rounded bg-neutral-50 border border-neutral-200">
                  <span className="text-neutral-500 block">Trans Fat & Chol.</span>
                  <strong className="text-emerald-700">0.0 g / 0.0 mg</strong>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif text-base font-bold text-[#12372A]">
                Storage & Handling Protocols
              </h4>
              <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 space-y-2">
                <p>{product.storageInstructions}</p>
                <div className="flex items-center gap-2 text-emerald-800 font-medium">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>No synthetic preservatives or artificial colorants added</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-500">
            Batch-specific Certificates of Analysis (CoA) provided with all commercial shipments.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onEnquire(product)}
              className="bg-[#12372A] hover:bg-[#1E4F3E] text-white px-5 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              Enquire for Distribution
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
