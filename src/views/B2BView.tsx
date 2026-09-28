import React, { useState } from 'react';
import { PageRoute, B2BInquiryPayload } from '../types';
import { B2B_ROADMAP_STEPS, COMPANY_DETAILS, PRODUCTS_DATA } from '../data/companyData';
import { JayrajiLogo } from '../components/JayrajiLogo';
import { 
  Building2, 
  Store, 
  UtensilsCrossed, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ShieldCheck, 
  FileText, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface B2BViewProps {
  onNavigate: (route: PageRoute) => void;
  onSubmitSuccess: (refId: string, title: string, message: string) => void;
}

export const B2BView: React.FC<B2BViewProps> = ({ onNavigate, onSubmitSuccess }) => {
  const [formData, setFormData] = useState<B2BInquiryPayload>({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: 'distributor',
    volumeRequirement: '25',
    unit: 'Cartons',
    targetLocation: '',
    gstinPlaceholder: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof B2BInquiryPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errs: Partial<Record<keyof B2BInquiryPayload, string>> = {};
    if (!formData.businessName.trim()) errs.businessName = 'Business or entity name is required';
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid corporate email is required';
    if (!formData.phone.trim() || formData.phone.trim().length < 8) errs.phone = 'Valid 10-digit WhatsApp / phone number is required';
    if (!formData.volumeRequirement.trim()) errs.volumeRequirement = 'Please specify estimated monthly volume';
    if (!formData.targetLocation.trim()) errs.targetLocation = 'Target delivery city or state is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = `JRJ-B2B-${Math.floor(1000 + Math.random() * 9000)}`;
      onSubmitSuccess(
        randomRef,
        'Distributor / Bulk Quotation Request Received',
        `Thank you, ${formData.contactPerson}. Your inquiry for ${formData.businessName} has been routed to our commercial distribution team. A representative will contact you with wholesale slab prices within 24 business hours.`
      );
      // Reset form
      setFormData({
        businessName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: 'distributor',
        volumeRequirement: '25',
        unit: 'Cartons',
        targetLocation: '',
        gstinPlaceholder: '',
        additionalNotes: '',
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center mb-2">
          <JayrajiLogo variant="badge" subtitle="GROUP" className="shadow-sm hover:shadow transition-shadow" />
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E3] border border-[#D9A441]/40 text-xs font-bold text-[#12372A]">
          <Building2 className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Factory-Direct Commercial Distribution Portal</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
          B2B, Bulk Supply & Distributor Hub
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          Partner directly with JAYRAJI. We offer flexible supply arrangements, volume-indexed pricing, and consistent batch quality for regional distributors, retail chains, and institutional kitchens.
        </p>
      </div>

      {/* 4 Conversion Segments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#D9A441] transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <Store className="w-6 h-6 text-[#D9A441]" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#12372A]">
            State & District Distributors
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Exclusive territorial distribution rights, point-of-sale marketing collateral, and predictable monthly allocation schedules.
          </p>
          <div className="pt-2 text-[11px] font-semibold text-[#B38226]">
            MOQ: 100+ Mixed Cartons
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#D9A441] transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <Building2 className="w-6 h-6 text-[#D9A441]" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#12372A]">
            Modern Retail & Supermarkets
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Barcoded retail PET packs (500ml, 1L, 2L, 5L) with standardized shelf packaging, shrink bundling, and direct warehouse delivery.
          </p>
          <div className="pt-2 text-[11px] font-semibold text-[#B38226]">
            Scheduled EDI & PO Dispatch
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#D9A441] transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <UtensilsCrossed className="w-6 h-6 text-[#D9A441]" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#12372A]">
            Institutional Kitchens & HoReCa
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            15 Litre food-grade tin containers (13.65 kg net) engineered for sweet makers, hotel networks, and industrial catering kitchens.
          </p>
          <div className="pt-2 text-[11px] font-semibold text-[#B38226]">
            High Smoke Point ~250°C
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-[#D9A441] transition-all space-y-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <Layers className="w-6 h-6 text-[#D9A441]" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#12372A]">
            Private Label & Contract Pressing
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Custom branded packaging and contract cold-press bottling under strict quality SOPs and customer-specified bottle molds.
          </p>
          <div className="pt-2 text-[11px] font-semibold text-[#B38226]">
            Confidential NDA Sourcing
          </div>
        </div>

      </div>

      {/* Main Form + Partner Roadmap Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Interactive Quotation Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200 space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
              Fast-Track Quotation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
              Distributor Onboarding & Bulk Pricing
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Submit your preliminary details below. We review credit limits, territory availability, and dispatch timetables within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Business Entity */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Business / Trading Entity Name *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g., Mahalakshmi Traders"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.businessName ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.businessName && (
                  <p className="text-[11px] text-red-600">{errors.businessName}</p>
                )}
              </div>

              {/* Contact Person */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Contact Person & Designation *
                </label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="e.g., Rajesh Sharma (Proprietor)"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.contactPerson ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.contactPerson && (
                  <p className="text-[11px] text-red-600">{errors.contactPerson}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Corporate Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rajesh@tradeentity.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.email ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600">{errors.email}</p>
                )}
              </div>

              {/* WhatsApp / Phone */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.phone ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Business Type */}
              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Business Model *
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                  className="w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm border border-neutral-200 bg-[#FFF8E7]/30 focus:outline-none focus:border-[#D9A441] focus:bg-white"
                >
                  <option value="distributor">Wholesale Distributor</option>
                  <option value="modern-trade">Modern Trade / Retail</option>
                  <option value="institutional">Institutional / HoReCa</option>
                  <option value="private-label">Private Label / Sourcing</option>
                </select>
              </div>

              {/* Volume Requirement */}
              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Projected Volume *
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.volumeRequirement}
                  onChange={(e) => setFormData({ ...formData, volumeRequirement: e.target.value })}
                  placeholder="e.g. 50"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.volumeRequirement ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
              </div>

              {/* Volume Unit */}
              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Unit Metric
                </label>
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value as any })}
                  className="w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm border border-neutral-200 bg-[#FFF8E7]/30 focus:outline-none focus:border-[#D9A441] focus:bg-white"
                >
                  <option value="Cartons">Cartons / Month</option>
                  <option value="MT">Metric Tonnes (MT)</option>
                  <option value="Barrels">15L Tins / Month</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Target Location */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Target Territory (City / State) *
                </label>
                <input
                  type="text"
                  value={formData.targetLocation}
                  onChange={(e) => setFormData({ ...formData, targetLocation: e.target.value })}
                  placeholder="e.g., Varanasi, UP or Patna, Bihar"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.targetLocation ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.targetLocation && (
                  <p className="text-[11px] text-red-600">{errors.targetLocation}</p>
                )}
              </div>

              {/* GSTIN / PAN Placeholder */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  GSTIN / PAN Registration
                </label>
                <input
                  type="text"
                  value={formData.gstinPlaceholder}
                  onChange={(e) => setFormData({ ...formData, gstinPlaceholder: e.target.value })}
                  placeholder="[Enter GSTIN or 'Pending']"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-neutral-200 bg-[#FFF8E7]/30 focus:outline-none focus:border-[#D9A441] focus:bg-white font-mono"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-700 block">
                Pack Preferences & Distribution Notes
              </label>
              <textarea
                rows={3}
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                placeholder="Mention specific preferred pack sizes (e.g. 1L Bottles vs 15L Tins), current retail network reach, or questions..."
                className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-neutral-200 bg-[#FFF8E7]/30 focus:outline-none focus:border-[#D9A441] focus:bg-white"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#12372A] hover:bg-[#1E4F3E] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Generating Commercial Docket...</span>
              ) : (
                <>
                  <span>Submit Commercial Docket Inquiry</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>NDA Protected • Non-Disclosure Respected</span>
              </span>
              <span>Fast-track response within 24 hours</span>
            </div>

          </form>
        </div>

        {/* Right Column: 5-Step Partner Roadmap Deck (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
              Transparent Onboarding
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#12372A]">
              5-Step Distributor Roadmap
            </h3>
            <p className="text-xs text-neutral-600">
              How we transition from your preliminary inquiry to scheduled truckload shipments.
            </p>
          </div>

          <div className="space-y-3">
            {B2B_ROADMAP_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4 hover:border-[#D9A441] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFF8E7] text-[#12372A] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#D9A441]/40">
                  {step.step}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-sm font-bold text-[#12372A]">
                      {step.title}
                    </h4>
                    <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded font-mono">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="p-5 rounded-2xl bg-[#0B241C] text-white border border-[#D9A441]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#D9A441] text-xs font-bold">
              <Phone className="w-4 h-4" />
              <span>Direct Commercial Sales Desk</span>
            </div>
            <p className="text-xs text-[#FFF8E7]/80">
              Prefer speaking directly with our distribution manager? Connect directly on WhatsApp or call our desk during business hours.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={COMPANY_DETAILS.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D9A441] hover:bg-[#F4CE79] text-[#12372A] text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\D/g, '')}`}
                className="text-xs text-[#FFF8E7] hover:text-[#D9A441] font-semibold"
              >
                {COMPANY_DETAILS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
