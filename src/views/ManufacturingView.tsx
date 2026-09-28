import React, { useState } from 'react';
import { PageRoute } from '../types';
import { MANUFACTURING_STEPS } from '../data/companyData';
import { 
  CheckCircle2, 
  Thermometer, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Factory, 
  Activity, 
  Droplet,
  Layers
} from 'lucide-react';

interface ManufacturingViewProps {
  onNavigate: (route: PageRoute) => void;
}

export const ManufacturingView: React.FC<ManufacturingViewProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Step 3 (Cold Expeller) active by default

  const currentStep = MANUFACTURING_STEPS[activeStepIndex];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E3] border border-[#D9A441]/40 text-xs font-bold text-[#12372A]">
          <Factory className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Industrial Precision • Non-Chemical Processing</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
          Seed-to-Bottle Manufacturing Line
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          Explore our closed-loop 6-stage extraction and packaging process. Every phase is governed by strict temperature constraints, continuous optical testing, and zero chemical intervention.
        </p>
      </div>

      {/* Interactive Step Navigation Bar (Horizontal Timeline) */}
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-4 sm:p-6">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-4">
          <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
            Process Timeline Stages
          </span>
          <span className="text-xs font-semibold text-[#12372A]">
            Viewing Stage {currentStep.step} of {MANUFACTURING_STEPS.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {MANUFACTURING_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-[#12372A] text-white border-[#12372A] shadow-md'
                    : 'bg-[#FFF8E7]/40 text-neutral-700 border-neutral-200 hover:border-[#D9A441] hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-[#D9A441] text-[#12372A]' : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    0{step.step}
                  </span>
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />}
                </div>
                <h4 className="font-serif text-xs font-bold truncate">
                  {step.title.split('&')[0]}
                </h4>
                <p className="text-[10px] opacity-70 truncate mt-0.5">
                  {step.criticalParameter.split('|')[0]}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Deep-Dive Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Visual Area */}
          <div className="lg:col-span-5 relative bg-[#0B241C] min-h-[340px] lg:min-h-full">
            <img
              src={currentStep.image}
              alt={currentStep.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C] via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#12372A]/90 backdrop-blur-md border border-[#D9A441]/30 text-white space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#D9A441] font-bold">
                Equipment Technology:
              </span>
              <p className="font-medium text-xs text-[#FFF8E7]">
                {currentStep.equipmentType}
              </p>
            </div>
          </div>

          {/* Right Information Area */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FFF8E7] text-[#B38226] text-xs font-bold">
                <span>Stage 0{currentStep.step} of 06</span>
                <span>•</span>
                <span>{currentStep.tagline}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
                {currentStep.title}
              </h2>
            </div>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {currentStep.description}
            </p>

            {/* Critical Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#D9A441]/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#12372A]">
                  <Activity className="w-4 h-4 text-[#D9A441]" />
                  <span>Critical Process Benchmark</span>
                </div>
                <p className="text-xs font-semibold text-neutral-800">
                  {currentStep.criticalParameter}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#D9A441]/30 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#12372A]">
                  <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                  <span>Quality Assurance Action</span>
                </div>
                <p className="text-xs text-neutral-700">
                  {currentStep.qualityControlAction}
                </p>
              </div>
            </div>

            {/* Process Specifications Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                Engineering Protocols Enforced:
              </h4>
              <ul className="space-y-2">
                {currentStep.detailedSpecs.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step Navigation Controls */}
            <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className={`px-4 py-2 rounded-lg text-xs font-semibold border ${
                  activeStepIndex === 0
                    ? 'opacity-40 cursor-not-allowed border-neutral-200'
                    : 'border-neutral-300 text-neutral-700 hover:bg-neutral-50 cursor-pointer'
                }`}
              >
                Previous Stage
              </button>

              <button
                disabled={activeStepIndex === MANUFACTURING_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(MANUFACTURING_STEPS.length - 1, prev + 1))}
                className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 ${
                  activeStepIndex === MANUFACTURING_STEPS.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-neutral-200 text-neutral-500'
                    : 'bg-[#12372A] hover:bg-[#1E4F3E] text-white cursor-pointer'
                }`}
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Industrial Integrity Standards Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <Thermometer className="w-5 h-5 text-[#D9A441]" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#12372A]">
            Chilled Water Jacketing
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Unlike standard commercial mills that generate high frictional heat (up to 80°C–100°C), our expellers utilize closed-loop chilled water jackets to keep oil discharge temperature under 45°C.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <Layers className="w-5 h-5 text-[#D9A441]" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#12372A]">
            Micro-Pore Physical Clarification
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            We employ virgin food-grade cotton canvas and 5-micron polishing filter cartridges. Clarification is achieved entirely mechanically without bleaching earths or chemical solvents.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <ShieldCheck className="w-5 h-5 text-[#D9A441]" />
          </div>
          <h4 className="font-serif text-lg font-bold text-[#12372A]">
            Nitrogen Dosing & Induction Seal
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Bottles are nitrogen-flushed to displace oxygen from the headspace prior to induction sealing, preventing oxidative rancidity during warehouse storage and transit.
          </p>
        </div>
      </div>

      {/* CTA to Quality Testing */}
      <div className="bg-[#FAF4E3] rounded-2xl p-8 border border-[#E7C275]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-serif text-xl font-bold text-[#12372A]">
            Inspect Our Laboratory Quality Matrix
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600">
            Compare Free Fatty Acids (FFA), moisture thresholds, and Argemone absence metrics against commercial blended oils.
          </p>
        </div>

        <button
          onClick={() => onNavigate('quality')}
          className="bg-[#12372A] hover:bg-[#1E4F3E] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap"
        >
          <span>View Quality Assurance Matrix</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
