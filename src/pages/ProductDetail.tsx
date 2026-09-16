import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Mountain, ArrowLeft, ArrowRight, ShoppingBag, Mail, ShieldCheck } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { BOTANICAL_DIAMONDS, STORE_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart, formatPrice } = useCart();
  const { showToast } = useToast();

  const diamond = BOTANICAL_DIAMONDS.find(d => d.slug === slug);

  if (!diamond) {
    return <Navigate to="/products" replace />;
  }

  // Find matching retail store product if any
  const storeItem = STORE_PRODUCTS.find(p => p.id === diamond.storeProductId);

  // Find next and previous diamonds
  const currentIndex = BOTANICAL_DIAMONDS.findIndex(d => d.slug === slug);
  const prevDiamond =
    BOTANICAL_DIAMONDS[(currentIndex - 1 + BOTANICAL_DIAMONDS.length) % BOTANICAL_DIAMONDS.length];
  const nextDiamond =
    BOTANICAL_DIAMONDS[(currentIndex + 1) % BOTANICAL_DIAMONDS.length];

  const handleAddToCart = () => {
    if (storeItem) {
      addToCart(storeItem, 1);
      showToast(`Added ${storeItem.name} to your reserve bag.`);
    }
  };

  return (
    <MainLayout>
      <SEO
        title={`${diamond.name} | Botanical Diamond ${diamond.number}`}
        description={diamond.excerpt}
      />

      {/* Hero Banner */}
      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={diamond.image}
            alt={diamond.name}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/80 to-estate-forest" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-estate-gold hover:text-estate-sand transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Botanical Diamonds</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-serif text-sm font-semibold tracking-wider text-estate-gold bg-black/50 px-3 py-1 border border-estate-gold/30">
                  DIAMOND {diamond.number}
                </span>
                {diamond.ethiopianName && (
                  <span className="text-xs font-serif text-estate-sand bg-estate-moss px-3 py-1 border border-white/10">
                    {diamond.ethiopianName}
                  </span>
                )}
                <span className="text-xs uppercase tracking-widest text-estate-sand/60 font-light">
                  {diamond.category}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight text-estate-sand">
                {diamond.name}
              </h1>

              <p className="mt-3 text-lg sm:text-xl font-serif italic text-estate-gold-light">
                "{diamond.tagline}"
              </p>
            </div>

            <div className="p-4 bg-black/40 backdrop-blur-md border border-estate-gold/20 text-xs text-estate-sand/80 space-y-1">
              <div className="flex items-center gap-1.5 text-estate-gold">
                <Mountain className="w-4 h-4" />
                <span className="font-serif text-sm font-medium">{diamond.altitude}</span>
              </div>
              <p className="text-estate-sand/70 font-light">{diamond.origin}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Specs Grid */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Story & Methodology (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Botanical Description */}
              <div>
                <h2 className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold mb-3">
                  Terroir & Overview
                </h2>
                <h3 className="font-serif text-2xl sm:text-3xl text-estate-forest mb-4">
                  The Essence of {diamond.name}
                </h3>
                <p className="text-base text-estate-charcoal/80 font-light leading-relaxed mb-4">
                  {diamond.description}
                </p>
                <p className="text-xs font-mono text-estate-muted italic">
                  Botanical Classification: {diamond.scientificOrVarietal}
                </p>
              </div>

              {/* Processing & Artisanship */}
              <div className="p-6 bg-estate-cream border border-estate-charcoal/10 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-estate-forest font-semibold">
                  Artisanal Processing & Curing
                </h4>
                <p className="text-sm text-estate-charcoal/80 font-light leading-relaxed">
                  {diamond.processingMethod}
                </p>
              </div>

              {/* Sustainability in Practice */}
              <div className="p-6 bg-white border border-estate-gold/30 space-y-3">
                <div className="flex items-center gap-2 text-estate-gold">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="text-xs uppercase tracking-widest text-estate-forest font-semibold">
                    Regenerative Stewardship
                  </h4>
                </div>
                <p className="text-sm text-estate-charcoal/80 font-light leading-relaxed">
                  {diamond.sustainabilityPractice}
                </p>
              </div>

              {/* Sensory Tasting Notes */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-estate-muted font-semibold mb-3">
                  Sensory & Cupping Character
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {diamond.tastingNotes.map((note, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 bg-white text-estate-forest border border-estate-charcoal/10 text-xs font-sans shadow-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-estate-muted font-semibold mb-4">
                  Estate Imagery & Lot Documentation
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {diamond.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square overflow-hidden bg-estate-cream border border-estate-charcoal/10 shadow-sm"
                    >
                      <img
                        src={img}
                        alt={`${diamond.name} gallery ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Direct Purchase Card (5 cols) */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              {/* Technical Dossier */}
              <div className="bg-white border border-estate-charcoal/10 p-6 sm:p-8 shadow-md">
                <h4 className="font-serif text-xl text-estate-forest mb-4 pb-2 border-b border-estate-charcoal/10">
                  Lot Specifications
                </h4>

                <div className="divide-y divide-slate-100 text-xs">
                  {diamond.specifications.map((spec, i) => (
                    <div key={i} className="py-2.5 flex justify-between gap-4">
                      <span className="text-estate-muted font-light">{spec.label}</span>
                      <span className="font-medium text-estate-forest text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-estate-muted font-light">Origin</span>
                    <span className="font-medium text-estate-forest text-right">
                      {diamond.origin}
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-estate-muted font-light">Altitude</span>
                    <span className="font-medium text-estate-forest text-right">
                      {diamond.altitude}
                    </span>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <span className="text-estate-muted font-light">Harvest Period</span>
                    <span className="font-medium text-estate-forest text-right">
                      {diamond.harvestSeason}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Order or Sourcing Box */}
              {storeItem ? (
                <div className="bg-estate-forest text-estate-sand p-6 sm:p-8 border border-estate-gold/40 shadow-xl space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-estate-gold block mb-1">
                        Direct Harvest Offering
                      </span>
                      <h4 className="font-serif text-xl text-estate-sand">
                        {storeItem.name}
                      </h4>
                      <p className="text-xs text-estate-sand/70 font-light mt-0.5">
                        {storeItem.weight}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-2xl text-estate-gold font-semibold">
                        {formatPrice(storeItem.priceEur, storeItem.priceUsd)}
                      </span>
                      <span className="block text-[10px] text-estate-sand/60">Per unit</span>
                    </div>
                  </div>

                  <p className="text-xs text-estate-sand/80 font-light leading-relaxed">
                    {storeItem.description}
                  </p>

                  <button
                    onClick={handleAddToCart}
                    className="w-full py-3.5 bg-estate-gold text-estate-forest text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold-light transition-all flex items-center justify-center gap-2 shadow-lg rounded-full"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Estate Reserve Bag</span>
                  </button>

                  <div className="pt-2 text-center">
                    <Link
                      to="/contact"
                      className="text-xs text-estate-gold hover:text-estate-sand transition-colors underline underline-offset-4"
                    >
                      Inquire for Commercial / B2B Volume Allocations →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-estate-cream p-6 sm:p-8 border border-estate-charcoal/10 space-y-4">
                  <h4 className="font-serif text-xl text-estate-forest">
                    B2B & Sourcing Allocation
                  </h4>
                  <p className="text-xs text-estate-muted font-light leading-relaxed">
                    This lot is allocated primarily through commercial contracts, green coffee lots, and direct trade partnerships.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full py-3.5 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold hover:text-estate-forest transition-colors flex items-center justify-center gap-2 rounded-full"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Submit Commercial Lot Inquiry</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Between Diamonds */}
          <div className="mt-20 pt-10 border-t border-estate-charcoal/10 grid grid-cols-2 gap-4">
            <Link
              to={`/products/${prevDiamond.slug}`}
              className="p-4 sm:p-6 bg-white border border-estate-charcoal/10 hover:border-estate-gold transition-all flex flex-col group"
            >
              <span className="text-[10px] uppercase tracking-widest text-estate-muted mb-1 flex items-center gap-1 group-hover:text-estate-gold">
                <ArrowLeft className="w-3 h-3" /> Previous Diamond
              </span>
              <span className="font-serif text-lg sm:text-xl text-estate-forest font-medium">
                {prevDiamond.name}
              </span>
            </Link>

            <Link
              to={`/products/${nextDiamond.slug}`}
              className="p-4 sm:p-6 bg-white border border-estate-charcoal/10 hover:border-estate-gold transition-all flex flex-col items-end text-right group"
            >
              <span className="text-[10px] uppercase tracking-widest text-estate-muted mb-1 flex items-center gap-1 group-hover:text-estate-gold">
                Next Diamond <ArrowRight className="w-3 h-3" />
              </span>
              <span className="font-serif text-lg sm:text-xl text-estate-forest font-medium">
                {nextDiamond.name}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
