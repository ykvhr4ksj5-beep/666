import React from 'react';
import { CheckCircle2, X, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  referenceId: string;
  message: string;
  type: 'b2b' | 'contact' | 'sample';
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  referenceId,
  message,
  type,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-neutral-200 space-y-6">
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#12372A]">
            {title}
          </h3>

          <p className="text-sm text-neutral-600 max-w-md">
            {message}
          </p>
        </div>

        {/* Reference Number Card */}
        <div className="p-4 rounded-xl bg-[#FFF8E7] border border-[#D9A441]/40 space-y-2 text-center">
          <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block">
            Acknowledgement Reference ID
          </span>
          <span className="font-mono text-xl font-bold text-[#12372A] tracking-wider block">
            {referenceId}
          </span>
          <p className="text-xs text-neutral-600">
            A copy has been recorded for our institutional sales & supply chain desk.
          </p>
        </div>

        {/* Next Steps */}
        <div className="space-y-2 text-xs text-neutral-700 border-t border-neutral-100 pt-4">
          <h4 className="font-semibold text-neutral-900 uppercase tracking-wider text-[11px]">
            What Happens Next?
          </h4>
          <ul className="space-y-1.5 list-disc list-inside text-neutral-600">
            <li>Our commercial desk verifies delivery location & volume feasibility.</li>
            <li>You will receive an official price schedule & spec sheet via email/WhatsApp.</li>
            <li>Sample batch dispatch (if requested) is dispatched within 48 hours.</li>
          </ul>
        </div>

        {/* Immediate Assistance */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-200">
          <span className="text-neutral-600">Need immediate dispatch priority?</span>
          <a
            href={COMPANY_DETAILS.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D9A441] hover:text-[#B38226] font-bold flex items-center gap-1"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#12372A] hover:bg-[#1E4F3E] text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer"
        >
          Return to Portal
        </button>

      </div>
    </div>
  );
};
