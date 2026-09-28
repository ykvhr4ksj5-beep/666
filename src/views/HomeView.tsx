import React, { useState, useRef } from 'react';
import { PageRoute, ProductItem } from '../types';
import { PRODUCTS_DATA, MANUFACTURING_STEPS, COMPANY_DETAILS } from '../data/companyData';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Thermometer, 
  Droplet, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Award,
  Factory,
  Check
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenProductDetail: (product: ProductItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenProductDetail }) => {
  const [activeTab, setActiveTab] = useState<'mustard' | 'kachi-ghani' | 'refined'>('mustard');
  const [selectedPackIndex, setSelectedPackIndex] = useState(1); // default 1L

  // Parallax scrolling hooks for product showcase section
  const showcaseRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ['start end', 'end start']
  });

  const bgImageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const bgDecorativeRingY = useTransform(scrollYProgress, [0, 1], [40, -45]);
  const bgSeedsY = useTransform(scrollYProgress, [0, 1], [-30, 40]);

  const currentTabProduct = PRODUCTS_DATA.find((p) => p.category === activeTab) || PRODUCTS_DATA[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. Hero Section - Natural Tones Theme */}
      <section className="relative overflow-hidden bg-white border-b border-[#12372A]/10 pt-10 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="text-[#D9A441] font-bold text-xs uppercase tracking-[0.2em] block">
                India's Premium Oil Manufacturer
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#12372A] leading-tight font-normal">
                Pure by Nature. <br />
                <span className="italic">Trusted by Choice.</span>
              </h1>

              <p className="text-[#202522]/75 text-base sm:text-lg max-w-xl leading-relaxed">
                Cold-pressed authenticity meets modern precision. Delivering the golden essence of handpicked mustard seeds through single-expeller extraction under 45°C with zero chemical solvents.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-[#12372A] hover:bg-[#1c4d3c] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('manufacturing')}
                  className="border border-[#12372A] hover:bg-[#12372A]/5 text-[#12372A] font-semibold text-sm sm:text-base py-3 px-8 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Our Process</span>
                </button>
              </div>

              {/* Verified Quality Bullets */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#12372A]/10 text-xs text-[#202522]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Free from Argemone Oil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>High Smoke Point ~250°C</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                  <span>Free Fatty Acids &lt; 1.2%</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Card - Natural Tones Motif */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-md relative bg-[#12372A]/5 rounded-2xl border border-[#12372A]/10 overflow-hidden p-8 sm:p-12 flex items-center justify-center min-h-[380px]">
                {/* Concentric Golden Ring Accent */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-80 h-80 border-8 border-[#D9A441] rounded-full" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                  <div className="w-60 h-60 border-4 border-[#12372A] rounded-full" />
                </div>

                {/* Golden Silhouette Bottle Motif */}
                <div className="relative w-44 sm:w-48 h-64 sm:h-72 bg-[#D9A441] rounded-t-full rounded-b-lg border-4 border-white shadow-2xl flex flex-col items-center justify-center p-4">
                  <div className="text-center">
                    <div className="font-serif text-white font-bold text-3xl sm:text-4xl italic">
                      Pure
                    </div>
                    <div className="w-12 h-1 bg-white/40 mx-auto my-2 rounded-full" />
                    <div className="text-[#12372A] font-bold tracking-widest text-xs">
                      MUSTARD
                    </div>
                    <div className="mt-3 text-[10px] uppercase font-mono tracking-wider bg-white/20 text-white px-2 py-0.5 rounded">
                      Cold-Pressed
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenProductDetail(PRODUCTS_DATA[0])}
                    className="mt-6 text-[11px] bg-white/95 hover:bg-white text-[#12372A] font-bold py-1.5 px-3 rounded shadow-sm hover:shadow transition-all cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>View Dossier</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Bar (4 Key Pillars) - Natural Tones Dark Forest Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12372A] text-white rounded-lg shadow-lg px-6 py-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border border-[#D9A441] rounded-full flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#D9A441]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-medium block">Selected Seeds</span>
              <span className="text-[10px] text-[#FFF8E7]/60 hidden sm:block">Tested Indian Grains</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border border-[#D9A441] rounded-full flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#D9A441]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-medium block">Modern Manufacturing</span>
              <span className="text-[10px] text-[#FFF8E7]/60 hidden sm:block">&lt; 45°C Cold-Pressed</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border border-[#D9A441] rounded-full flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#D9A441]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-medium block">Batch-Tested Quality</span>
              <span className="text-[10px] text-[#FFF8E7]/60 hidden sm:block">FFA &lt; 1.2% Certified</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border border-[#D9A441] rounded-full flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-[#D9A441]" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-medium block">Made in India</span>
              <span className="text-[10px] text-[#FFF8E7]/60 hidden sm:block">Pure Farm Origin</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Brand Intro: Editorial Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
              The JAYRAJI Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A] leading-tight">
              More Than Oil. <br />
              <span className="italic font-normal">A Promise of Purity.</span>
            </h2>

            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              In modern markets flooded with blended oils, synthetic pungency boosters, and heavily refined industrial fats, JAYRAJI was established with a singular conviction: <strong>true health begins with unadulterated edible oil</strong>.
            </p>

            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              We return to the fundamental discipline of oil pressing. We do not blast our seeds with high-pressure steam. We do not introduce petroleum-derived hexane solvents to extract the final drops. Every golden drop is squeezed slowly under mechanically restrained temperatures to protect the vital compounds nature gave the seed.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#12372A] hover:text-[#B38226] transition-colors cursor-pointer group"
              >
                <span>Read Our Full Founding Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
                  alt="Raw Indian Mustard Seeds"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-700 space-y-1">
                <strong className="text-[#12372A] block">Clean Seed Grading</strong>
                <span>Optical sort of whole black and yellow mustard grains.</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-xl bg-[#12372A] text-white border border-[#D9A441]/40 text-xs space-y-2">
                <strong className="text-[#D9A441] block uppercase tracking-wider text-[11px]">
                  Extraction Discipline
                </strong>
                <span>Monitored mechanical cold-pressing strictly under 45°C.</span>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5] bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
                  alt="Traditional Indian Culinary Tadka"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Product Showcase - Natural Tones Theme with Parallax & Motion */}
      <section 
        ref={showcaseRef} 
        className="relative overflow-hidden bg-[#FAF4E3] py-16 sm:py-20 border-y border-[#12372A]/10"
      >
        {/* Parallax Background Imagery Layer */}
        <motion.div
          style={{ y: bgImageY }}
          className="absolute inset-x-0 -top-24 -bottom-24 pointer-events-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80"
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-[0.06] mix-blend-multiply filter contrast-125 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF4E3] via-transparent to-[#FAF4E3]" />
        </motion.div>

        {/* Parallax Floating Decorative Accents */}
        <motion.div
          style={{ y: bgDecorativeRingY }}
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-[#D9A441]/25 pointer-events-none z-0"
          aria-hidden="true"
        >
          <div className="absolute inset-6 rounded-full border border-dashed border-[#D9A441]/20" />
        </motion.div>

        <motion.div
          style={{ y: bgSeedsY }}
          className="absolute -left-16 bottom-10 w-72 h-72 rounded-full border border-[#12372A]/10 pointer-events-none z-0"
          aria-hidden="true"
        >
          <div className="absolute inset-10 rounded-full border border-[#12372A]/5" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D9A441] font-bold">
              Product Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#12372A] font-normal">
              Engineered for Authenticity
            </h2>
            <p className="text-sm text-[#202522]/70 leading-relaxed">
              Explore our master cold-pressed flagship line and upcoming artisanal editions tailored for Indian households and commercial distribution.
            </p>
          </div>

          {/* Natural Tones Two-Column Showcase Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-8">
            
            {/* Left Column: Category Tabs */}
            <div className="w-full lg:w-1/3 space-y-3">
              <h3 className="font-serif text-xl text-[#12372A] font-bold mb-1">
                Select Oil Profile
              </h3>

              <div className="space-y-2.5">
                <motion.button
                  type="button"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => { setActiveTab('mustard'); setSelectedPackIndex(1); }}
                  className={`w-full p-3.5 rounded-md flex justify-between items-center cursor-pointer transition-colors text-left ${
                    activeTab === 'mustard'
                      ? 'bg-[#12372A] text-white shadow-sm'
                      : 'bg-white border border-[#12372A]/10 text-[#12372A]/80 hover:border-[#D9A441]/50'
                  }`}
                >
                  <span className="font-medium text-sm">Mustard Oil (Flagship)</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                    activeTab === 'mustard'
                      ? 'bg-[#D9A441] text-[#12372A]'
                      : 'bg-[#FFF8E7] text-[#D9A441] border border-[#D9A441]/30'
                  }`}>
                    Active
                  </span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => { setActiveTab('kachi-ghani'); setSelectedPackIndex(0); }}
                  className={`w-full p-3.5 rounded-md flex justify-between items-center cursor-pointer transition-colors text-left ${
                    activeTab === 'kachi-ghani'
                      ? 'bg-[#12372A] text-white shadow-sm'
                      : 'bg-white border border-[#12372A]/10 text-[#12372A]/80 hover:border-[#D9A441]/50'
                  }`}
                >
                  <span className="font-medium text-sm">Kachi Ghani Mustard</span>
                  <span className="text-[11px] italic text-[#12372A]/60">Coming Soon</span>
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => { setActiveTab('refined'); setSelectedPackIndex(0); }}
                  className={`w-full p-3.5 rounded-md flex justify-between items-center cursor-pointer transition-colors text-left ${
                    activeTab === 'refined'
                      ? 'bg-[#12372A] text-white shadow-sm'
                      : 'bg-white border border-[#12372A]/10 text-[#12372A]/80 hover:border-[#D9A441]/50'
                  }`}
                >
                  <span className="font-medium text-sm">Filtered Pure Oils</span>
                  <span className="text-[11px] italic text-[#12372A]/60">Coming Soon</span>
                </motion.button>
              </div>
            </div>

            {/* Right Column: Natural Tones Showcase Card with Smooth Transitions */}
            <div className="w-full lg:w-2/3 bg-white p-6 sm:p-8 rounded-xl border border-[#12372A]/10 shadow-sm relative overflow-hidden min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(2px)' }}
                  transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                >
                  {/* Product Detail Left (7 cols) */}
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-[#D9A441] font-bold tracking-wider">
                        {currentTabProduct.badge}
                      </span>
                      <h4 className="font-serif text-2xl text-[#12372A] font-bold mt-0.5">
                        {currentTabProduct.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#D9A441] mt-0.5">
                        {currentTabProduct.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-[#202522]/70 leading-relaxed">
                      {currentTabProduct.overview}
                    </p>

                    {/* 2-Col Metric Boxes with subtle hover lift */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.15 }}
                        className="p-2.5 bg-[#FFF8E7] rounded border border-[#D9A441]/30 shadow-2xs"
                      >
                        <div className="text-[10px] text-[#D9A441] font-bold uppercase tracking-wider">
                          Smoke / Flash Point
                        </div>
                        <div className="text-sm font-semibold text-[#12372A] mt-0.5">
                          {currentTabProduct.smokePoint} (High)
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.15 }}
                        className="p-2.5 bg-[#FFF8E7] rounded border border-[#D9A441]/30 shadow-2xs"
                      >
                        <div className="text-[10px] text-[#D9A441] font-bold uppercase tracking-wider">
                          Pungency Level
                        </div>
                        <div className="text-sm font-semibold text-[#12372A] mt-0.5">
                          {currentTabProduct.pungencyLevel}
                        </div>
                      </motion.div>
                    </div>

                    {/* Available In Selector */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase text-neutral-500 tracking-wider">
                          Available In:
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {currentTabProduct.packOptions.map((pack, idx) => (
                          <button
                            key={pack.code}
                            type="button"
                            onClick={() => setSelectedPackIndex(idx)}
                            className={`px-2.5 py-1 text-[11px] rounded border transition-colors cursor-pointer ${
                              selectedPackIndex === idx
                                ? 'bg-[#12372A] text-[#D9A441] border-[#12372A] font-bold shadow-xs'
                                : 'bg-[#FFF8E7] text-[#12372A] border-[#12372A]/15 font-semibold hover:border-[#D9A441]'
                            }`}
                          >
                            {pack.size}
                          </button>
                        ))}
                      </div>
                      {currentTabProduct.packOptions[selectedPackIndex] && (
                        <p className="text-[11px] text-neutral-500 italic">
                          Packaging: {currentTabProduct.packOptions[selectedPackIndex].type} — {currentTabProduct.packOptions[selectedPackIndex].idealFor}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Product Detail Right: Visual and CTA (5 cols) */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4 md:border-l md:pl-8 border-[#12372A]/10">
                    <motion.div 
                      key={`visual-${activeTab}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="w-28 h-28 bg-[#FFF8E7] rounded-full border-2 border-dashed border-[#D9A441] flex flex-col items-center justify-center text-[#D9A441] p-3 text-center shadow-inner"
                    >
                      <Droplet className="w-6 h-6 mb-1 text-[#D9A441]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#12372A] leading-tight">
                        100% Pure
                      </span>
                      <span className="text-[9px] text-[#D9A441] font-semibold">Cold-Pressed</span>
                    </motion.div>

                    <div className="w-full space-y-2">
                      <button
                        onClick={() => onNavigate('b2b')}
                        className="w-full bg-[#12372A] hover:bg-[#1c4d3c] text-white py-2.5 px-4 rounded-sm text-xs font-semibold uppercase tracking-wide transition-colors cursor-pointer shadow-sm text-center block"
                      >
                        Enquire for Distribution
                      </button>

                      <button
                        onClick={() => onOpenProductDetail(currentTabProduct)}
                        className="w-full border border-[#12372A] hover:bg-[#12372A]/5 text-[#12372A] py-2 px-4 rounded-sm text-xs font-semibold transition-colors cursor-pointer text-center block"
                      >
                        View Technical Specs
                      </button>
                    </div>

                    <span className="text-[10px] text-gray-400 italic text-center">
                      Bulk supply available across PAN India
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Seed-to-Bottle Manufacturing Preview (Horizontal Progression) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
              Engineering Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A] mt-1">
              Seed-to-Bottle Manufacturing Line
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl mt-2">
              From origin grain sampling to automated tamper-proof induction bottling, explore the 6-stage engineering control chain.
            </p>
          </div>

          <button
            onClick={() => onNavigate('manufacturing')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#12372A] hover:text-[#B38226] cursor-pointer"
          >
            <span>Explore Full 6-Step Technical Timeline</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5-Step Card Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {MANUFACTURING_STEPS.slice(0, 5).map((item) => (
            <div
              key={item.step}
              onClick={() => onNavigate('manufacturing')}
              className="group bg-white rounded-xl border border-neutral-200 p-5 shadow-sm hover:shadow-md hover:border-[#D9A441] transition-all cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#D9A441] bg-[#FFF8E7] px-2 py-0.5 rounded border border-[#D9A441]/30">
                    Step 0{item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#12372A] group-hover:text-[#B38226] transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500 font-mono">
                {item.criticalParameter}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Lead Capture: High-Converting B2B Quick-Inquiry Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#12372A] rounded-2xl overflow-hidden shadow-2xl border border-[#D9A441]/40 relative text-white p-8 sm:p-12 lg:p-16">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#D9A441] font-bold">
                Distributor & Wholesale Hub
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFF8E7] leading-tight">
                Expand Your Territory with JAYRAJI Pure Oils
              </h2>
              <p className="text-sm sm:text-base text-[#FFF8E7]/80 max-w-2xl leading-relaxed">
                We are actively appointing authorized stockists, district distributors, and modern retail supply partners. Benefit from factory-direct pricing, guaranteed batch CoA documentation, and consistent year-round supply.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#FFF8E7]/70 pt-2">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D9A441]" />
                  Transparent Slab Quotations
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D9A441]" />
                  Verified Batch CoA
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D9A441]" />
                  24-Hour Commercial Response
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onNavigate('b2b')}
                className="w-full bg-[#D9A441] hover:bg-[#c49236] text-[#12372A] font-bold text-sm py-3.5 px-6 rounded-sm uppercase tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Open B2B Quotation Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_DETAILS.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs py-3 px-4 rounded-sm border border-white/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Instant Inquiry via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
