import React from 'react';
import { PageRoute } from '../types';
import { QUALITY_MATRIX, COMPLIANCE_SLOTS, COMPANY_DETAILS } from '../data/companyData';
import { 
  ShieldCheck, 
  Check, 
  X, 
  FileCheck2, 
  AlertCircle, 
  FileText, 
  FlaskConical, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

interface QualityViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const QualityView: React.FC<QualityViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E3] border border-[#D9A441]/40 text-xs font-bold text-[#12372A]">
          <FlaskConical className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Strict Analytical & Batch-Release Standards</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
          Quality Guarantee & Lab Testing
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          At JAYRAJI, quality is not a slogan—it is a measurable chemical and physical profile verified for every production run before dispatch.
        </p>
      </div>

      {/* Quality Comparison Matrix */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
              Purity Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Direct comparison between JAYRAJI single-expeller standards and generic commercial solvent-extracted oils.
            </p>
          </div>
          <span className="text-xs font-mono bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded-lg border border-neutral-200">
            Assay Standards: IS 548 (Part 1 & 2)
          </span>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-md bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#12372A] text-white text-xs sm:text-sm">
                <th className="p-4 sm:p-5 font-semibold w-1/4">Quality Parameter</th>
                <th className="p-4 sm:p-5 font-bold text-[#D9A441] bg-[#0B241C] w-1/3">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                    <span>JAYRAJI Pure Standard</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-medium text-neutral-300 w-1/4">
                  Commercial Blended / Solvent Refined
                </th>
                <th className="p-4 sm:p-5 font-medium text-neutral-300 hidden lg:table-cell">
                  Testing Method
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm">
              {QUALITY_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-neutral-900 align-top">
                    <div>{row.parameter}</div>
                    <div className="text-[11px] text-neutral-500 font-normal mt-1 leading-normal">
                      {row.significance}
                    </div>
                  </td>

                  {/* JAYRAJI Value */}
                  <td className="p-4 sm:p-5 bg-[#FFF8E7]/40 align-top border-x border-[#D9A441]/20">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-bold text-[#12372A] leading-snug">
                        {row.jayrajiStandard}
                      </span>
                    </div>
                  </td>

                  {/* Commercial Value */}
                  <td className="p-4 sm:p-5 text-neutral-600 align-top">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-bold">!</span>
                      </div>
                      <span className="leading-snug">{row.commercialBlendedStandard}</span>
                    </div>
                  </td>

                  {/* Testing Method */}
                  <td className="p-4 sm:p-5 text-neutral-500 text-xs font-mono align-top hidden lg:table-cell">
                    {row.testingMethod}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Compliance Placeholders & Statutory Transparency */}
      <div className="space-y-6 pt-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
              Regulatory Registrations & Compliance
            </h2>
            <span className="text-xs bg-[#FAF4E3] text-[#B38226] font-bold px-2.5 py-1 rounded-md border border-[#D9A441]/30">
              Verified Transparency
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600">
            We do not fabricate registration numbers or premature accreditations. In strict compliance with regulatory ethics, below are the designated statutory registry slots for public review.
          </p>
        </div>

        {/* 4 Compliance Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPLIANCE_SLOTS.map((slot) => (
            <div
              key={slot.code}
              className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm hover:border-[#D9A441] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B38226] block">
                      {slot.agency}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#12372A] mt-0.5">
                      {slot.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#FFF8E7] text-[#D9A441] flex items-center justify-center shrink-0 border border-[#D9A441]/40">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {slot.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2">
                <div className="p-3 rounded-lg bg-[#FAF4E3]/60 border border-neutral-200 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#12372A]">
                    {slot.placeholderText}
                  </span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium">
                    Verified Slot
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  <span>Status: {slot.statusText}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Laboratory Instrumentation Specs */}
      <div className="bg-[#12372A] text-white rounded-3xl p-8 sm:p-12 border border-[#D9A441]/30 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#D9A441] font-bold">
            Analytical Equipment
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF8E7]">
            In-House Lab Testing Infrastructure
          </h3>
          <p className="text-xs sm:text-sm text-[#FFF8E7]/75">
            Every dispatch lot is held in quarantine until our laboratory technicians execute mandatory physical-chemical releases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-xs font-bold text-[#D9A441] block">Abbe Digital Refractometer</span>
            <p className="text-xs text-[#FFF8E7]/70">
              Measures refractive index between 1.4646 – 1.4662 to immediately catch foreign seed oil dilution.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-xs font-bold text-[#D9A441] block">Acid Value Autotitrator</span>
            <p className="text-xs text-[#FFF8E7]/70">
              Assays Free Fatty Acids (FFA) to confirm zero rancidity and maximum cooking stability.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-xs font-bold text-[#D9A441] block">Argemone Nitric Acid Test</span>
            <p className="text-xs text-[#FFF8E7]/70">
              Screening reagent to identify toxic sanguinarine alkaloids, certifying 100% negative presence.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <span className="text-xs font-bold text-[#D9A441] block">Sample Retention Archive</span>
            <p className="text-xs text-[#FFF8E7]/70">
              Quarantine sealed library retaining reference samples from every single batch for 18 months.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#FFF8E7]/60">
            For technical datasheets or sample Certificate of Analysis (CoA), contact our quality desk.
          </span>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#D9A441] hover:bg-[#F4CE79] text-[#12372A] font-bold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Request Batch CoA & Samples
          </button>
        </div>
      </div>

    </div>
  );
};
