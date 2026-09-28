import React, { useState, useEffect } from 'react';
import { PageRoute, ProductItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SuccessModal } from './components/SuccessModal';

import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { ManufacturingView } from './views/ManufacturingView';
import { QualityView } from './views/QualityView';
import { StoryView } from './views/StoryView';
import { B2BView } from './views/B2BView';
import { ContactView } from './views/ContactView';
import { PRODUCTS_DATA } from './data/companyData';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Success Confirmation Modal State
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    referenceId: string;
    message: string;
    type: 'b2b' | 'contact' | 'sample';
  }>({
    isOpen: false,
    title: '',
    referenceId: '',
    message: '',
    type: 'b2b',
  });

  // URL hash sync for bookmarking and back button navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'products',
        'manufacturing',
        'quality',
        'story',
        'b2b',
        'contact',
        'faq',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (route === 'faq') {
      setTimeout(() => {
        const el = document.getElementById('faq-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenProductDetail = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  const handleCloseProductDetail = () => {
    setSelectedProduct(null);
  };

  const handleEnquireFromProduct = (product: ProductItem) => {
    setSelectedProduct(null);
    navigateTo('b2b');
  };

  const handleShowSuccess = (refId: string, title: string, message: string) => {
    setModalState({
      isOpen: true,
      title,
      referenceId: refId,
      message,
      type: refId.includes('B2B') ? 'b2b' : refId.includes('SMP') ? 'sample' : 'contact',
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#202522] selection:bg-[#D9A441] selection:text-[#12372A]">
      {/* Sticky Top Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main Dynamic View Content */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentRoute === 'products' && (
          <ProductsView
            onNavigate={navigateTo}
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentRoute === 'manufacturing' && (
          <ManufacturingView onNavigate={navigateTo} />
        )}

        {currentRoute === 'quality' && (
          <QualityView onNavigate={navigateTo} />
        )}

        {(currentRoute === 'story' || currentRoute === 'about') && (
          <StoryView onNavigate={navigateTo} />
        )}

        {currentRoute === 'b2b' && (
          <B2BView
            onNavigate={navigateTo}
            onSubmitSuccess={handleShowSuccess}
          />
        )}

        {(currentRoute === 'contact' || currentRoute === 'faq') && (
          <ContactView
            onNavigate={navigateTo}
            onSubmitSuccess={handleShowSuccess}
          />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Deep-dive Product Detail Dossier Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseProductDetail}
        onEnquire={handleEnquireFromProduct}
      />

      {/* Simulated Submission Acknowledgement Modal */}
      <SuccessModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        title={modalState.title}
        referenceId={modalState.referenceId}
        message={modalState.message}
        type={modalState.type}
      />
    </div>
  );
}
