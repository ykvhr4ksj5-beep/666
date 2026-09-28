import React, { useState, useMemo } from 'react';
import { PageRoute, ContactFormPayload } from '../types';
import { COMPANY_DETAILS, FAQ_DATA } from '../data/companyData';
import { JayrajiLogo } from '../components/JayrajiLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  ChevronDown, 
  Search, 
  HelpCircle, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ContactViewProps {
  onNavigate: (route: PageRoute) => void;
  onSubmitSuccess: (refId: string, title: string, message: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onSubmitSuccess }) => {
  // Form State
  const [formData, setFormData] = useState<ContactFormPayload>({
    name: '',
    email: '',
    phone: '',
    purpose: 'general',
    city: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ State
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-3': true });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchCat = faqCategory === 'all' || item.category === faqCategory;
      const matchSearch =
        faqSearch.trim() === '' ||
        item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
        item.answer.toLowerCase().includes(faqSearch.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [faqCategory, faqSearch]);

  const validateForm = () => {
    const errs: Partial<Record<keyof ContactFormPayload, string>> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address is required';
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = 'Valid phone / WhatsApp number is required';
    if (!formData.city.trim()) errs.city = 'City or location is required';
    if (!formData.message.trim()) errs.message = 'Please provide a message or inquiry detail';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const isSample = formData.purpose === 'sample-request';
      const refId = isSample
        ? `JRJ-SMP-${Math.floor(1000 + Math.random() * 9000)}`
        : `JRJ-CNT-${Math.floor(1000 + Math.random() * 9000)}`;

      onSubmitSuccess(
        refId,
        isSample ? 'Sample Request Docket Logged' : 'Communication Docket Logged',
        `Thank you, ${formData.name}. Your inquiry has been forwarded to our customer and distribution support team. We will reach out within 24 business hours.`
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        purpose: 'general',
        city: '',
        message: '',
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
          <MessageSquare className="w-3.5 h-3.5 text-[#D9A441]" />
          <span>Direct Corporate & Commercial Support Desk</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12372A]">
          Connect with JAYRAJI
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          Whether you require batch sample kits, wish to visit our extraction facility, or need immediate assistance on wholesale consignments, our team is at your disposal.
        </p>
      </div>

      {/* 3 Contact Method Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Phone */}
        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4 hover:border-[#D9A441] transition-all">
          <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <Phone className="w-6 h-6 text-[#D9A441]" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block">
              Telephonic Helpline
            </span>
            <h3 className="font-serif text-lg font-bold text-[#12372A] mt-0.5">
              Direct Sales Line
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              {COMPANY_DETAILS.operatingHours}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\D/g, '')}`}
              className="font-mono text-sm font-bold text-[#12372A] hover:text-[#B38226] block"
            >
              {COMPANY_DETAILS.phoneDisplay}
            </a>
            <span className="text-[11px] text-neutral-500">Toll-free & Direct Lines</span>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4 hover:border-[#D9A441] transition-all">
          <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <MessageSquare className="w-6 h-6 text-[#D9A441]" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block">
              Instant Messaging
            </span>
            <h3 className="font-serif text-lg font-bold text-[#12372A] mt-0.5">
              WhatsApp Business Intent
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Direct chat for price circulars & sample requests
            </p>
          </div>
          <div className="pt-2">
            <a
              href={COMPANY_DETAILS.whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#12372A] text-[#D9A441] hover:bg-[#1E4F3E] px-4 py-2 rounded-lg transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4 hover:border-[#D9A441] transition-all">
          <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#12372A] flex items-center justify-center border border-[#D9A441]/30">
            <Mail className="w-6 h-6 text-[#D9A441]" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block">
              Formal Correspondence
            </span>
            <h3 className="font-serif text-lg font-bold text-[#12372A] mt-0.5">
              Corporate & B2B Inquiries
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Guaranteed review within 24 hours
            </p>
          </div>
          <div className="pt-2 space-y-0.5 text-xs font-mono text-neutral-800">
            <a
              href={`mailto:${COMPANY_DETAILS.emailCorporate}`}
              className="hover:text-[#D9A441] block truncate"
            >
              {COMPANY_DETAILS.emailCorporate}
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.emailDistribution}`}
              className="hover:text-[#D9A441] block truncate text-neutral-500"
            >
              {COMPANY_DETAILS.emailDistribution}
            </a>
          </div>
        </div>

      </div>

      {/* Main Grid: Form + Address Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200 space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
              Inquiry Form
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
              Send Us a Message
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Fill in your contact details and message below. For wholesale distributor quotations, you can also use our specialized B2B Portal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Anoop Kumar"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.name ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="anoop@domain.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.email ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  WhatsApp / Phone *
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
                {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
              </div>

              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  Purpose of Inquiry *
                </label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value as any })}
                  className="w-full px-3 py-2.5 rounded-xl text-xs sm:text-sm border border-neutral-200 bg-[#FFF8E7]/30 focus:outline-none focus:border-[#D9A441] focus:bg-white"
                >
                  <option value="general">General Corporate Inquiry</option>
                  <option value="sample-request">Request Product Sample Kit</option>
                  <option value="dealership">Commercial Dealership</option>
                  <option value="institutional">Bulk Kitchen / Catering</option>
                </select>
              </div>

              <div className="space-y-1 sm:col-span-1">
                <label className="text-xs font-bold text-neutral-700 block">
                  City / State *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g., Lucknow, UP"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                    errors.city ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                  }`}
                />
                {errors.city && <p className="text-[11px] text-red-600">{errors.city}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-700 block">
                Detailed Message / Sample Request Details *
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please describe your requirement, questions, or address for sample dispatch..."
                className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-[#FFF8E7]/30 focus:outline-none focus:bg-white ${
                  errors.message ? 'border-red-500' : 'border-neutral-200 focus:border-[#D9A441]'
                }`}
              />
              {errors.message && <p className="text-[11px] text-red-600">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#12372A] hover:bg-[#1E4F3E] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Submitting Your Docket...</span>
              ) : (
                <>
                  <span>Send Inquiry / Sample Request</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Office & Plant Location Placeholders (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
              Physical Locations & Plant
            </span>
            <h3 className="font-serif text-xl font-bold text-[#12372A]">
              Corporate & Industrial Presence
            </h3>

            <div className="space-y-4 text-xs text-neutral-700">
              <div className="p-4 rounded-xl bg-[#FAF4E3] border border-[#D9A441]/30 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#12372A]">
                  <MapPin className="w-4 h-4 text-[#D9A441]" />
                  <span>Corporate Office Placeholder</span>
                </div>
                <p className="font-mono text-neutral-600 pt-1">
                  {COMPANY_DETAILS.corporateAddressPlaceholder}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF4E3] border border-[#D9A441]/30 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#12372A]">
                  <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                  <span>Manufacturing Facility Placeholder</span>
                </div>
                <p className="font-mono text-neutral-600 pt-1">
                  {COMPANY_DETAILS.plantAddressPlaceholder}
                </p>
                <p className="text-[11px] text-neutral-500 pt-1">
                  Visits by prior commercial appointment only.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100 text-xs text-neutral-500 space-y-1">
              <p>{COMPANY_DETAILS.cinPlaceholder}</p>
              <p>{COMPANY_DETAILS.fssaiPlaceholder}</p>
              <p>{COMPANY_DETAILS.gstinPlaceholder}</p>
            </div>
          </div>
        </div>

      </div>

      {/* 5. Searchable, Collapsible FAQ Accordion */}
      <section id="faq-section" className="pt-10 border-t border-neutral-200 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#B38226] font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
            Procurement, Purity & Technical FAQs
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm">
            Everything you need to know about cold pressing, shelf life, smoke points, and distributor commercial terms.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search FAQs (e.g., Argemone, MOQ, Smoke Point, Shelf Life)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D9A441]"
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'manufacturing', label: 'Manufacturing & Process' },
              { id: 'sourcing', label: 'Sourcing & Argemone' },
              { id: 'b2b', label: 'B2B & Distribution' },
              { id: 'culinary', label: 'Culinary & Cooking' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFaqCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  faqCategory === cat.id
                    ? 'bg-[#12372A] text-[#D9A441]'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-500">
              No matching questions found. Try a different keyword or contact our desk directly.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openFaqIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm hover:border-[#D9A441] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#12372A]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#12372A] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#12372A] text-[#D9A441]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </section>

    </div>
  );
};
