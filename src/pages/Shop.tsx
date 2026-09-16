import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Globe } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { STORE_PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { StoreProduct } from '../types';

export const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart, formatPrice, currency, toggleCurrency } = useCart();
  const { showToast } = useToast();

  const categories = [
    { id: 'all', label: 'Complete Collection' },
    { id: 'coffee', label: 'Highland Coffee' },
    { id: 'saffron', label: 'Negin Saffron' },
    { id: 'vanilla', label: 'Bourbon Vanilla' },
    { id: 'macadamia', label: 'Macadamia' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? STORE_PRODUCTS
      : STORE_PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAdd = (product: StoreProduct) => {
    addToCart(product, 1);
    showToast(`Added ${product.name} to your reserve bag.`);
  };

  return (
    <MainLayout>
      <SEO
        title="Direct Estate Store | Specialty Coffee, Saffron & Vanilla"
        description="Directly order authentic Queen of Sheba Highland Estate coffee, saffron, vanilla, and macadamia with international dispatch."
      />

      {/* Hero Header */}
      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/coffee_roasting_drum_1789479312480.jpg"
            alt="Estate Store Header"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/80 to-estate-forest" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold">
            DIRECT ESTATE DISPATCH
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-estate-sand">
            The Estate Store
          </h1>
          <p className="mt-4 text-base sm:text-lg font-light text-estate-sand/80 max-w-2xl mx-auto leading-relaxed">
            Reserve individual harvest tins, micro-lot coffees, and culinary spices packaged in origin-sealed tins and hermetic glass.
          </p>

          <div className="pt-4 inline-flex items-center gap-2 bg-black/40 px-4 py-2 border border-estate-gold/30 text-xs">
            <Globe className="w-3.5 h-3.5 text-estate-gold" />
            <span className="text-estate-sand/90">
              Active Currency: <strong className="text-estate-gold">{currency}</strong>
            </span>
            <button
              onClick={toggleCurrency}
              className="ml-2 underline text-estate-gold hover:text-estate-sand transition-colors font-medium"
            >
              Switch to {currency === 'EUR' ? 'USD ($)' : 'EUR (€)'}
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-estate-cream/70 border-b border-estate-charcoal/10 sticky top-[69px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap py-1">
            {categories.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2 text-xs uppercase tracking-wider font-sans transition-all rounded-full ${
                    active
                      ? 'bg-estate-forest text-estate-sand shadow-sm'
                      : 'bg-white text-estate-muted hover:text-estate-forest border border-estate-charcoal/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:block text-xs text-estate-muted font-light">
            Showing {filteredProducts.length} Estate Items
          </div>
        </div>
      </section>

      {/* Store Catalog Grid */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white border border-estate-charcoal/10 overflow-hidden flex flex-col justify-between shadow-sm transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(22,40,29,0.18)] hover:border-estate-gold/50 group relative"
              >
                {/* Top Gold Reveal Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-estate-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center z-10" />

                {/* Product Image */}
                <div className="aspect-[4/3] overflow-hidden bg-estate-cream relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-estate-forest text-estate-gold px-3 py-1 font-semibold shadow-md z-10">
                      {product.badge}
                    </span>
                  )}
                  {product.isDiamond && (
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-widest bg-estate-gold text-estate-forest px-2.5 py-1 font-bold z-10">
                      Diamond Spec
                    </span>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-[11px] uppercase tracking-widest text-estate-muted font-light">
                        {product.categoryLabel}
                      </span>
                      <span className="text-xs text-estate-muted font-mono">{product.weight}</span>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-estate-forest leading-snug group-hover:text-estate-olive transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-xs text-estate-charcoal/70 font-light mt-2 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>

                    {product.tastingNotes && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {product.tastingNotes.map((note, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 bg-estate-cream text-estate-forest border border-estate-charcoal/10 transition-colors duration-300 group-hover:border-estate-gold/30"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-estate-charcoal/10 flex items-center justify-between">
                    <div>
                      <span className="font-serif text-2xl font-bold text-estate-forest">
                        {formatPrice(product.priceEur, product.priceUsd)}
                      </span>
                      <span className="block text-[10px] text-estate-muted">Origin Packed</span>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className="px-6 py-2.5 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold hover:text-estate-forest transition-all duration-300 ease-out flex items-center gap-1.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-98 rounded-full"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Wholesale Callout */}
      <section className="py-16 bg-estate-cream border-t border-estate-charcoal/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-serif text-2xl text-estate-forest">
            Looking for Commercial Quantities & Green Coffee Sacks?
          </h3>
          <p className="text-xs sm:text-sm text-estate-muted font-light max-w-xl mx-auto">
            We provide container-load coffee shipments, kilogram saffron lots, and certified macadamia seed propagation stock directly through our export hubs.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-block text-xs uppercase tracking-widest font-semibold text-estate-forest underline underline-offset-4 hover:text-estate-gold transition-colors"
            >
              Contact the International Export Desk →
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
