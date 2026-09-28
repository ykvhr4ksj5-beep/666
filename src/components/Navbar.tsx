import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { Menu, X, Phone, Mail, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { JayrajiLogo } from './JayrajiLogo';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Products', route: 'products' },
    { label: 'Manufacturing', route: 'manufacturing' },
    { label: 'Quality', route: 'quality' },
    { label: 'Our Story', route: 'story' },
    { label: 'B2B & Bulk', route: 'b2b' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Corporate Trust Utility Strip */}
      <div className="bg-[#0B241C] text-[#FAF4E3] border-b border-[#1E4F3E]/40 text-xs py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6 text-[#FFF8E7]/80">
            <span className="inline-flex items-center gap-1.5 font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" />
              Pure Single-Expeller Cold-Pressed Mustard Oil
            </span>
            <span className="text-[#1E4F3E]">|</span>
            <span className="hidden lg:inline text-[#FFF8E7]/70">
              Extraction Temp: &lt; 45°C • Zero Chemical Solvents
            </span>
          </div>

          <div className="flex items-center space-x-5 text-xs">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-1.5 text-[#FAF4E3] hover:text-[#D9A441] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D9A441]" />
              <span>{COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <span className="text-[#1E4F3E]">|</span>
            <a
              href={`mailto:${COMPANY_DETAILS.emailCorporate}`}
              className="inline-flex items-center gap-1.5 text-[#FAF4E3] hover:text-[#D9A441] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#D9A441]" />
              <span>{COMPANY_DETAILS.emailCorporate}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#12372A]/95 backdrop-blur-md shadow-lg shadow-black/15 py-3.5 border-b border-[#1E4F3E]/60'
            : 'bg-[#12372A] py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Company Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group cursor-pointer focus:outline-none"
              aria-label="JAYRAJI Homepage"
            >
              <JayrajiLogo variant="badge" subtitle="GROUP" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-2" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    onClick={() => handleNavClick(item.route)}
                    className={`px-3 py-1.5 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#D9A441] bg-white/10 font-semibold'
                        : 'text-[#FFF8E7]/90 hover:text-[#D9A441]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => handleNavClick('b2b')}
                className="bg-[#D9A441] hover:bg-[#c49236] text-[#12372A] font-bold py-2 px-5 rounded-sm text-sm uppercase tracking-wide transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('b2b')}
                className="sm:hidden bg-[#D9A441] hover:bg-[#c49236] text-[#12372A] font-bold text-xs uppercase tracking-wide px-3 py-1.5 rounded-sm shadow-sm"
              >
                Partner
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#FFF8E7] hover:text-[#D9A441] p-2 rounded-md focus:outline-none cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0B241C] border-b border-[#1E4F3E] px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="py-2 px-3 border-b border-white/10 mb-2">
              <p className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold">
                Menu & Directory
              </p>
            </div>
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-[#12372A] text-[#D9A441] font-semibold'
                      : 'text-[#FFF8E7]/90 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
              <button
                onClick={() => handleNavClick('b2b')}
                className="w-full bg-[#D9A441] hover:bg-[#F4CE79] text-[#12372A] font-bold text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md"
              >
                <span>Partner With Us / Bulk Supply</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between px-2 pt-2 text-xs text-[#FFF8E7]/70">
                <a
                  href={`tel:${COMPANY_DETAILS.phonePrimary.replace(/\D/g, '')}`}
                  className="flex items-center gap-1 hover:text-[#D9A441]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={COMPANY_DETAILS.whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#D9A441] hover:underline"
                >
                  <span>WhatsApp Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
