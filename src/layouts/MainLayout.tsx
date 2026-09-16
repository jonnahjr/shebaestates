import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, X, ShoppingBag, Phone, ArrowUp } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { useCart } from '../context/CartContext';

interface MainLayoutProps {
  children: React.ReactNode;
  isHeroPage?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, isHeroPage = false }) => {
  const { totalItems } = useCart();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [isStorePage, setIsStorePage] = useState(false);

  // Hide the floating widget on store & contact pages where its actions already exist
  useEffect(() => {
    setIsStorePage(location.pathname === '/shop' || location.pathname === '/contact');
  }, [location.pathname]);

  // Show "back to top" only after scrolling down
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col bg-estate-sand text-estate-charcoal font-sans selection:bg-estate-forest selection:text-estate-sand">
      <Navbar isHeroPage={isHeroPage} />
      <CartDrawer />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Floating quick-contact widget */}
      {!isStorePage && (
        <div
          className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3"
          style={{
            bottom: 'max(1.5rem, env(safe-area-inset-bottom))',
            right: 'max(1.25rem, env(safe-area-inset-right))'
          }}
        >
          {/* Back to top */}
          {showTop && (
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-3 rounded-full bg-white/90 backdrop-blur border border-estate-charcoal/10 text-estate-forest shadow-lg transition-all duration-300 hover:border-estate-gold hover:text-estate-brass animate-scale-up"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}

          {/* Expanded actions */}
          {expanded && (
            <div className="flex flex-col items-end gap-3 animate-scale-up">
              <a
                href="tel:+2510966213636"
                aria-label="Call the estate desk"
                className="group flex items-center gap-2"
              >
                <span className="px-3 py-1.5 rounded-full bg-estate-forest text-estate-sand text-[10px] uppercase tracking-widest whitespace-nowrap shadow-lg">
                  Call the Estate
                </span>
                <span className="p-3 rounded-full bg-estate-forest text-estate-gold shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Phone className="w-4 h-4" />
                </span>
              </a>
              <Link to="/shop" aria-label="Open the estate store" className="group flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-estate-forest text-estate-sand text-[10px] uppercase tracking-widest whitespace-nowrap shadow-lg">
                  Estate Store
                </span>
                <span className="p-3 rounded-full bg-estate-forest text-estate-gold shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <ShoppingBag className="w-4 h-4" />
                </span>
              </Link>
            </div>
          )}

          {/* Main toggle */}
          <button
            onClick={() => setExpanded(e => !e)}
            aria-label={expanded ? 'Close quick contact' : 'Open quick contact'}
            aria-expanded={expanded}
            className={`relative p-4 rounded-full shadow-xl transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center ${
              expanded
                ? 'bg-estate-charcoal text-estate-sand rotate-90'
                : 'bg-estate-gold text-estate-forest hover:scale-110 hover:shadow-2xl animate-float'
            }`}
          >
            {expanded ? <X className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
            {!expanded && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-estate-forest text-estate-gold text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-estate-gold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
