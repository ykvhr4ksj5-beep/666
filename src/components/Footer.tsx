import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { COMPANY_DETAILS, COMPLIANCE_SLOTS } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, X, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { JayrajiLogo } from './JayrajiLogo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSuccessModal) {
        setShowSuccessModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSuccessModal]);

  const validateEmail = (email: string): string | null => {
    const trimmed = email.trim();
    if (!trimmed) {
      return 'Please enter your email address.';
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(trimmed)) {
      return 'Please enter a valid email format (e.g. name@domain.com).';
    }
    return null;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterEmail(e.target.value);
    if (emailError) {
      setEmailError(null);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateEmail(newsletterEmail);
    if (error) {
      setEmailError(error);
      return;
    }

    setEmailError(null);
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      const emailSubmitted = newsletterEmail.trim();
      setSubscribedEmail(emailSubmitted);
      setShowSuccessModal(true);
      setNewsletterEmail('');
    }, 450);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#202522] text-[#FFF8E7]/70 pt-16 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <JayrajiLogo variant="badge" subtitle="GROUP" />
            </div>

            <p className="text-sm text-[#FFF8E7]/70 leading-relaxed max-w-sm">
              Authentic Indian cold-pressed mustard oil, engineered through precision low-temperature mechanical extraction to safeguard pure pungency, natural aroma, and nutritional vitality.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#FFF8E7]/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.corporateAddressPlaceholder}</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.plantAddressPlaceholder}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] uppercase tracking-widest text-white font-bold mb-1">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8E7]/80">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  About Our Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Product Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('manufacturing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Manufacturing Line
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('quality'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Quality & Lab Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('story'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Brand Story
                </button>
              </li>
            </ul>
          </div>

          {/* Commercial & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-widest text-white font-bold mb-1">
              B2B & Compliance
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8E7]/80">
              <li>
                <button
                  onClick={() => { onNavigate('b2b'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Distributor Onboarding</span>
                  <span className="text-[10px] bg-[#D9A441] text-[#12372A] font-bold px-1.5 py-0.5 rounded">Active</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('b2b'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Bulk Institutional Supply
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('quality'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Quality Guarantee Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Sample Pack Request
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer"
                >
                  Technical FAQs
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-[#FFF8E7]/60 space-y-1">
              <p>{COMPANY_DETAILS.cinPlaceholder}</p>
              <p>{COMPANY_DETAILS.fssaiPlaceholder}</p>
            </div>
          </div>

          {/* Connect & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] uppercase tracking-widest text-white font-bold mb-1">
              Corporate Desk & Alerts
            </h4>
            <p className="text-xs text-[#FFF8E7]/70 leading-relaxed">
              Stay updated on harvest season yields, wholesale price circulars, and institutional packing announcements.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={handleEmailChange}
                  placeholder="Enter business email"
                  aria-label="Enter business email for corporate newsletter"
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? "newsletter-error-msg" : undefined}
                  disabled={isSubmitting}
                  className={`w-full bg-[#12372A] border text-white text-xs px-3.5 py-2.5 rounded-sm placeholder:text-white/40 focus:outline-none transition-colors ${
                    emailError
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-white/15 focus:border-[#D9A441]'
                  }`}
                />
                <button
                  type="submit"
                  aria-label="Subscribe to updates"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1 bottom-1 bg-[#D9A441] hover:bg-[#c49236] disabled:opacity-60 text-[#12372A] px-3 rounded-sm text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {emailError && (
                <div id="newsletter-error-msg" className="flex items-center gap-1.5 text-xs text-red-400 pt-0.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{emailError}</span>
                </div>
              )}
            </form>

            <div className="pt-2 flex flex-col space-y-1.5 text-xs">
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-[#FFF8E7]/80 hover:text-[#D9A441]"
              >
                <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>Sales Desk: {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.emailCorporate}`}
                className="flex items-center gap-2 text-[#FFF8E7]/80 hover:text-[#D9A441]"
              >
                <Mail className="w-3.5 h-3.5 text-[#D9A441]" />
                <span>Inquiries: {COMPANY_DETAILS.emailCorporate}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimers & Fair Labeling Notice */}
        <div className="py-6 border-b border-white/10 text-[11px] leading-relaxed text-[#FFF8E7]/50 space-y-2">
          <p>
            <strong className="text-[#FFF8E7]/80">Statutory Notice & Standards Disclosure:</strong> JAYRAJI is a dedicated trademark and enterprise specializing in cold-pressed mustard oil and pure edible vegetable oils. All nutritional parameters, free fatty acid thresholds, and smoke points stated on this portal are determined via standard laboratory titration protocols and Abbe refractometry.
          </p>
          <p>
            Regulatory identifiers, licenses (such as FSSAI, Agmark Grade I, Legal Metrology, and ISO accreditations) are maintained with local authorities. For specific batch Certificate of Analysis (CoA) or bulk consignments documentation, contact our regulatory desk at {COMPANY_DETAILS.emailDistribution}.
          </p>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8E7]/60 gap-4">
          <p>© {currentYear} JAYRAJI Pure Edible Oils. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#D9A441] cursor-pointer" onClick={() => onNavigate('faq')}>
              Privacy Policy & Terms
            </span>
            <span>•</span>
            <span className="hover:text-[#D9A441] cursor-pointer" onClick={() => onNavigate('quality')}>
              Purity Manifesto
            </span>
            <span>•</span>
            <a
              href={COMPANY_DETAILS.whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9A441] hover:underline"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowSuccessModal(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative w-full max-w-md bg-[#12372A] border border-[#D9A441]/40 rounded-xl p-6 sm:p-7 shadow-2xl text-[#FFF8E7]"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                aria-label="Close subscription confirmation modal"
                className="absolute top-4 right-4 text-[#FFF8E7]/60 hover:text-white p-1 rounded-sm transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-full bg-[#D9A441]/20 border border-[#D9A441] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-6 h-6 text-[#D9A441]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D9A441] block">
                    Subscription Confirmed
                  </span>
                  <h3 id="newsletter-modal-title" className="font-serif text-xl font-bold text-white leading-snug">
                    Welcome to JAYRAJI Alerts
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#FFF8E7]/80 leading-relaxed mb-4">
                We have registered <strong className="text-white underline decoration-[#D9A441] font-mono">{subscribedEmail}</strong> for corporate communications, harvest yield reports, and wholesale price circulars.
              </p>

              <div className="bg-[#0B241C] p-3.5 rounded-lg border border-white/10 space-y-2 mb-5 text-xs text-[#FFF8E7]/80">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                  <span>Wholesale factory price circulars & spot rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                  <span>Agmark Grade I laboratory test summaries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
                  <span>Priority notices for new cold-press production runs</span>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-[#D9A441] hover:bg-[#c49236] text-[#12372A] font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-sm transition-colors cursor-pointer shadow-md text-center"
                >
                  Continue Browsing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
