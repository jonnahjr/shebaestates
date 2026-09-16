import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Store, Mail, Compass } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';

export const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <SEO title="Page Not Found | Queen of Sheba Highland Estate Co." />
      <section className="relative min-h-[80vh] flex items-center justify-center bg-estate-forest text-estate-sand overflow-hidden">
        {/* Ambient gold glows */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-drift-slow" />
        <div
          className="absolute -bottom-24 right-1/4 w-96 h-96 bg-estate-olive/20 rounded-full blur-3xl pointer-events-none animate-drift-slow"
          style={{ animationDelay: '-6s' }}
        />

        <Reveal className="relative z-10 text-center px-6 py-24">
          <p className="font-serif text-[120px] sm:text-[180px] leading-none text-estate-gold/90 select-none">
            404
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl mt-2">
            This path grows wild.
          </h1>
          <p className="mt-4 text-sm sm:text-base font-light text-estate-sand/70 max-w-md mx-auto leading-relaxed">
            The page you're looking for has wandered off the estate trail. Let us guide you back
            to the highlands.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-estate-gold text-estate-forest text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-estate-gold-light"
            >
              <Home className="w-4 h-4" />
              Return to the Estate
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-estate-sand/40 text-estate-sand text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-estate-sand hover:text-estate-forest"
            >
              <Store className="w-4 h-4" />
              Visit the Store
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-estate-sand/20 text-estate-sand/80 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:border-estate-gold/60 hover:text-estate-gold"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest text-estate-gold/70">
            <Compass className="w-4 h-4" />
            <span>Queen of Sheba Highland Estate Co.</span>
          </div>
        </Reveal>
      </section>
    </MainLayout>
  );
};
