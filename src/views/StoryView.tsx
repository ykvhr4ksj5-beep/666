import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { JayrajiLogo } from '../components/JayrajiLogo';
import { 
  HeartHandshake, 
  Sprout, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Users 
} from 'lucide-react';

interface StoryViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const StoryView: React.FC<StoryViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Header with Official Logo Emblem */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center mb-2">
          <JayrajiLogo variant="badge" subtitle="GROUP" className="shadow-sm hover:shadow transition-shadow" />
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E3] border border-[#D9A441]/40 text-xs font-bold text-[#12372A]">
          <Sprout className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Generational Respect for the Indian Harvest</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
          The JAYRAJI Heritage & Story
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          How a determination to restore authentic, pungent, and wholesome edible oil to Indian dining tables became the founding foundation of JAYRAJI.
        </p>
      </div>

      {/* Narrative Section 1: The Purity Awakening */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
            The Origin
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A] leading-snug">
            Rediscovering What Edible Oil Was Meant to Be
          </h2>
          
          <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
            For generations, the aroma of cold-pressed mustard oil defined the warmth of an Indian home. From the pungent sizzle of morning mustard tadka in Varanasi to the deep winter aroma of Sarson Ka Saag in Punjab and crisp Macher Jhol along the Ganges, genuine mustard oil was never merely a cooking medium—it was a natural culinary tonic.
          </p>

          <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
            Over recent decades, commercial supermarket shelves became dominated by pale, deodorized, chemically solvent-extracted concoctions stripped of natural pungency and treated with bleaching clays. JAYRAJI was conceived to challenge that compromise.
          </p>

          <div className="p-4 rounded-xl bg-[#FAF4E3] border-l-4 border-[#D9A441] text-xs text-neutral-700 space-y-1">
            <strong className="text-[#12372A] block font-serif text-sm">
              Our Core Conviction
            </strong>
            <p>
              "We will never compromise the physiological integrity of the seed for faster extraction rates or chemical shortcuts. What comes out of the expeller must be as pure as the soil it grew from."
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80"
              alt="Golden Mustard Field Harvest"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <p className="font-serif text-base font-bold text-[#FFF8E7]">
                Sourced from Established Indian Mustard Mandis
              </p>
              <p className="text-[#FFF8E7]/70 text-[11px] mt-0.5">
                Carefully screened for bold grain density and low moisture content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Our Ethos */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
            Ethical Framework
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
            The 4 Non-Negotiable Tenets of JAYRAJI
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
              <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#12372A]">
              Zero Chemical Solvents
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We never use hexane or petroleum-derived chemical solvents to leach extra yield from seed cakes. Mechanical pressure alone extracts virgin oil.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
              <Sprout className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#12372A]">
              Low Temperature (&lt; 45°C)
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Cold screw expellers equipped with water jackets dissipate mechanical friction, preventing thermal destruction of natural tocopherols.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
              <Sparkles className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#12372A]">
              Unbleached Amber Purity
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              No artificial bleaching earths, deodorizing steam towers, or synthetic pungency boosters. What you smell and taste is the pure seed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
              <HeartHandshake className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#12372A]">
              Verifiable Transparency
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              No exaggerated medical claims or fabricated metrics. We publish real batch parameters, free fatty acid limits, and verified test procedures.
            </p>
          </div>
        </div>
      </div>

      {/* Facility & Location Transparency Callout */}
      <div className="bg-[#12372A] text-white rounded-3xl p-8 sm:p-12 border border-[#D9A441]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#D9A441] font-bold">
              Facility Infrastructure
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF8E7]">
              Engineered with Food-Grade Stainless Steel
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF8E7]/80 leading-relaxed">
              Our extraction plant integrates SS304/SS316 food-grade piping, automated nitrogen-purged filling lines, and in-house wet chemical laboratory testing facilities.
            </p>
            <div className="pt-2 text-xs text-[#FFF8E7]/60 space-y-1 font-mono">
              <p>{COMPANY_DETAILS.corporateAddressPlaceholder}</p>
              <p>{COMPANY_DETAILS.plantAddressPlaceholder}</p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => onNavigate('products')}
              className="bg-[#D9A441] hover:bg-[#F4CE79] text-[#12372A] font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all text-center cursor-pointer"
            >
              Explore Flagship Mustard Oil
            </button>
            <button
              onClick={() => onNavigate('b2b')}
              className="bg-white/10 hover:bg-white/15 text-[#FFF8E7] text-xs py-3 px-6 rounded-xl border border-white/20 transition-all text-center cursor-pointer"
            >
              Inquire for Dealership
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
