import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  isHeroPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isHeroPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, openCart, currency, toggleCurrency } = useCart();
  const location = useLocation();

  // Auto "bump" animation whenever an item is added to the cart
  const [bump, setBump] = useState(false);
  const prevTotalRef = useRef(totalItems);

  useEffect(() => {
    if (totalItems > prevTotalRef.current) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 600);
      prevTotalRef.current = totalItems;
      return () => clearTimeout(timer);
    }
    prevTotalRef.current = totalItems;
  }, [totalItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Botanical Diamonds', path: '/products' },
    { name: 'Our Estate', path: '/estate' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Journal', path: '/journal' },
  ];

  const isTransparent = isHeroPage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isTransparent
            ? 'bg-transparent text-estate-sand py-5 sm:py-6 border-b border-white/10'
            : 'bg-estate-forest/95 backdrop-blur-md text-estate-sand py-3.5 sm:py-4 shadow-xl border-b border-estate-gold/20'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo & Brand Name (Left Side) */}
          <Link
            to="/"
            className="group flex items-center gap-4 focus:outline-none shrink-0 py-0.5"
            aria-label="Queen of Sheba Highland Estate Co."
          >
            <img
              src="/assets/images/logo-2.png"
              alt="Queen of Sheba Highland Estate Emblem"
              className="h-14 sm:h-16 lg:h-18 w-auto object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
            />
            <div className="flex flex-col text-left justify-center">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-estate-sand leading-none group-hover:text-white transition-colors duration-300">
                QUEEN OF SHEBA
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-estate-gold font-sans font-medium mt-1.5 group-hover:tracking-[0.32em] transition-all duration-500">
                HIGHLAND ESTATE CO.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Spacious Middle & Animated Underlines */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10 mx-auto">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group/link text-xs uppercase tracking-widest font-sans transition-all duration-300 relative py-2 ${
                    isActive ? 'text-estate-gold font-medium' : 'text-estate-sand/85 hover:text-estate-gold'
                  }`}
                >
                  <span className="transition-transform duration-300 inline-block group-hover/link:-translate-y-0.5">
                    {link.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-estate-gold transition-all duration-300 origin-left ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover/link:scale-x-100 group-hover/link:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: EUR Currency, Contact, Store, Cart Bag */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 shrink-0">
            {/* Currency Button with Smooth Glow */}
            <button
              onClick={toggleCurrency}
              className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-estate-sand/90 hover:text-estate-gold transition-all duration-300 py-1.5 px-3.5 border border-white/15 rounded-full hover:border-estate-gold/50 hover:bg-white/5 hover:shadow-[0_0_12px_rgba(194,162,111,0.2)]"
              title="Toggle Currency (EUR / USD)"
            >
              <Globe className="w-3.5 h-3.5 text-estate-gold transition-transform duration-500 hover:rotate-45" />
              <span className="font-semibold tracking-wide">{currency}</span>
            </button>

            {/* Contact Link with Animated Underline */}
            <Link
              to="/contact"
              className="group/contact text-xs uppercase tracking-widest font-sans text-estate-sand/90 hover:text-estate-gold transition-all duration-300 relative py-1"
            >
              <span className="inline-block transition-transform duration-300 group-hover/contact:-translate-y-0.5">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-estate-gold transition-all duration-300 scale-x-0 group-hover/contact:scale-x-100 origin-left" />
            </Link>

            {/* Store Button with Elegant Slide-in Fill */}
            <Link
              to="/shop"
              className="relative group/btn overflow-hidden text-xs uppercase tracking-widest font-sans px-6 py-2.5 border border-estate-gold/70 text-estate-sand transition-all duration-400 ease-out hover:border-estate-gold hover:shadow-[0_0_18px_rgba(194,162,111,0.3)] hover:-translate-y-0.5 rounded-full"
            >
              <span className="absolute inset-0 bg-estate-gold transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 font-medium group-hover/btn:text-estate-forest transition-colors duration-300">
                Store
              </span>
            </Link>

            {/* Shopping Bag Trigger with Micro-bounce */}
            <button
              onClick={openCart}
              className="group/bag relative p-2.5 text-estate-sand hover:text-estate-gold transition-all duration-300 focus:outline-none hover:scale-110 active:scale-95 rounded-full hover:bg-white/5"
              aria-label="Open Cart Drawer"
            >
              <ShoppingBag
                className={`w-5 h-5 stroke-[1.6] transition-transform duration-300 group-hover/bag:rotate-[-6deg] ${
                  bump ? 'animate-bag-bump' : ''
                }`}
              />
              {totalItems > 0 && (
                <span
                  key={totalItems}
                  className="absolute top-0 right-0 bg-estate-gold text-estate-forest text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg animate-badge-pop"
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Currency, Bag, Hamburger */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={toggleCurrency}
              className="text-[11px] font-sans px-2.5 py-0.5 border border-white/20 text-estate-sand/90 rounded-full"
            >
              {currency}
            </button>

            <button
              onClick={openCart}
              className="relative p-2 text-estate-sand hover:text-estate-gold transition-colors rounded-full"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className={`w-5 h-5 ${bump ? 'animate-bag-bump' : ''}`} />
              {totalItems > 0 && (
                <span
                  key={totalItems}
                  className="absolute -top-1 -right-1 bg-estate-gold text-estate-forest text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-badge-pop"
                >
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-estate-sand hover:text-estate-gold focus:outline-none transition-colors rounded-full"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-estate-forest/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-fade-in">
          <div className="flex flex-col space-y-5">
            <p className="text-[10px] uppercase tracking-widest2 text-estate-gold font-sans">
              Estate Navigation
            </p>
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-serif text-2xl text-estate-sand hover:text-estate-gold transition-colors flex items-baseline justify-between border-b border-white/5 pb-2"
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans text-estate-gold/60 font-light">0{idx + 1}</span>
              </Link>
            ))}
            <Link
              to="/shop"
              className="font-serif text-2xl text-estate-gold hover:text-estate-sand transition-colors flex items-baseline justify-between border-b border-white/5 pb-2"
            >
              <span>Store / Direct Order</span>
              <span className="text-xs font-sans text-estate-gold/60 font-light">07</span>
            </Link>
            <Link
              to="/contact"
              className="font-serif text-2xl text-estate-sand hover:text-estate-gold transition-colors flex items-baseline justify-between border-b border-white/5 pb-2"
            >
              <span>Contact & Export Inquiries</span>
              <span className="text-xs font-sans text-estate-gold/60 font-light">08</span>
            </Link>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col space-y-2 text-xs text-estate-sand/70">
            <p className="text-estate-gold font-serif text-sm">Queen of Sheba Highland Estate Co.</p>
            <p>Lake Tana Basin, Bahir Dar, Amhara Region, Ethiopia</p>
            <p className="text-estate-sand/50">info@shebaestates.com • +251-096 621 3636</p>
          </div>
        </div>
      )}
    </>
  );
};
