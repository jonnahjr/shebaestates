import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Mountain,
  Sparkles,
  Coffee,
  Flower2,
  Leaf,
  Gem,
  CalendarDays,
  ChevronDown
} from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { BOTANICAL_DIAMONDS } from '../data/products';
import { BotanicalDiamond } from '../types';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  all: <Sparkles className="w-3.5 h-3.5" />,
  coffee: <Coffee className="w-3.5 h-3.5" />,
  saffron: <Flower2 className="w-3.5 h-3.5" />,
  vanilla: <Leaf className="w-3.5 h-3.5" />,
  macadamia: <Gem className="w-3.5 h-3.5" />
};

const DiamondPanel: React.FC<{ diamond: BotanicalDiamond; index: number }> = ({
  diamond,
  index
}) => {
  const isReverse = index % 2 !== 0;

  return (
    <Reveal>
      <article
        id={diamond.slug}
        className="group relative bg-white border border-estate-charcoal/10 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(22,40,29,0.18)] hover:border-estate-gold/40 scroll-mt-28"
      >
        {/* Ghost numeral watermark */}
        <span
          aria-hidden="true"
          className={`absolute -top-8 ${
            isReverse ? 'left-4' : 'right-4'
          } font-serif text-[150px] leading-none text-estate-forest/[0.04] select-none pointer-events-none z-0 transition-colors duration-700 group-hover:text-estate-gold/10`}
        >
          {diamond.number}
        </span>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-stretch z-10">
          {/* ── Image Section ── */}
          <div
            className={`lg:col-span-5 relative min-h-[380px] lg:min-h-[560px] overflow-hidden ${
              isReverse ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <img
              src={diamond.image}
              alt={diamond.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-107"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-estate-dark/90 via-estate-dark/20 to-transparent" />

            {/* Top badges */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-estate-gold bg-black/60 backdrop-blur-md px-3.5 py-1.5 border border-estate-gold/40 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-estate-gold animate-pulse" />
                Diamond {diamond.number}
              </span>
              {diamond.ethiopianName && (
                <span className="text-[11px] font-serif italic text-estate-sand bg-estate-forest/85 backdrop-blur-md px-3.5 py-1.5 border border-white/15 rounded-full">
                  {diamond.ethiopianName}
                </span>
              )}
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-1.5 text-xs text-estate-gold font-light mb-1.5 font-mono tracking-wider">
                <Mountain className="w-3.5 h-3.5" />
                <span>{diamond.altitude}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-estate-sand">{diamond.name}</h3>
              <div className="mt-3 h-[2px] w-12 bg-estate-gold/80 rounded-full transition-all duration-500 group-hover:w-24" />
            </div>
          </div>

          {/* ── Content Section ── */}
          <div
            className={`lg:col-span-7 p-8 sm:p-12 flex flex-col ${
              isReverse ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-estate-gold" />
              <span className="text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold font-sans">
                {diamond.category} • {diamond.region}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-estate-forest mb-3 leading-tight">
              {diamond.name}
            </h2>

            <p className="text-lg font-serif italic text-estate-moss mb-4">"{diamond.tagline}"</p>

            <p className="text-sm font-light text-estate-charcoal/80 leading-relaxed mb-7">
              {diamond.description}
            </p>

            {/* Tasting notes */}
            <div className="mb-7">
              <h4 className="text-[10px] uppercase tracking-widest text-estate-muted font-semibold mb-2.5 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-estate-gold" />
                Sensory &amp; Tasting Profile
              </h4>
              <div className="flex flex-wrap gap-2">
                {diamond.tastingNotes.map((note, i) => (
                  <span
                    key={i}
                    className="text-xs font-sans px-3.5 py-1.5 bg-estate-cream text-estate-forest border border-estate-charcoal/10 rounded-full transition-all duration-300 hover:bg-estate-gold hover:text-estate-forest hover:border-estate-gold cursor-default"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 p-5 bg-estate-sand/70 border border-estate-charcoal/10 rounded-2xl mb-8">
              {diamond.specifications.slice(0, 6).map((spec, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-estate-muted block font-light">
                    {spec.label}
                  </span>
                  <span className="text-xs font-medium text-estate-forest">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Bottom actions */}
            <div className="mt-auto pt-6 border-t border-estate-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-estate-muted font-light flex items-center gap-2">
                <CalendarDays className="w-3.5 h-3.5 text-estate-gold" />
                Harvest:{' '}
                <strong className="text-estate-forest font-medium">{diamond.harvestSeason}</strong>
              </span>

              <Link
                to={`/products/${diamond.slug}`}
                className="group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-estate-gold/70 text-estate-forest text-xs uppercase tracking-widest font-semibold transition-all duration-400 ease-out hover:border-estate-gold hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-estate-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-300">
                  <span>Full Dossier &amp; Sourcing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredDiamonds =
    selectedCategory === 'all'
      ? BOTANICAL_DIAMONDS
      : BOTANICAL_DIAMONDS.filter(
          d => d.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const categories = [
    { id: 'all', label: 'All Four Diamonds' },
    { id: 'coffee', label: 'Gesha / Zege Coffee' },
    { id: 'saffron', label: 'Negin Saffron' },
    { id: 'vanilla', label: 'Highland Vanilla' },
    { id: 'macadamia', label: 'Highland Macadamia' }
  ];

  return (
    <MainLayout>
      <SEO
        title="The Four Botanical Diamonds | Queen of Sheba Highland Estate Co."
        description="Explore the Four Botanical Diamonds of Queen of Sheba Highland Estate: Gesha Coffee, Negin Saffron, Highland Vanilla, and Macadamia."
      />

      {/* ── Immersive Hero ── */}
      <section className="pt-36 sm:pt-44 pb-24 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/coffee_drying_beds_1789479252074.jpg"
            alt="Estate Botanical Diamonds Harvest"
            className="w-full h-full object-cover opacity-25 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/80 to-estate-forest" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-drift-slow" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-estate-gold/40 bg-black/40 backdrop-blur-md rounded-full animate-fade-in">
            <Sparkles className="w-3 h-3 text-estate-gold" />
            <span className="text-[10px] uppercase tracking-widest2 text-estate-gold font-semibold">
              Singular Harvest Specifications
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-estate-sand text-shadow-hero">
            The Four <span className="italic text-estate-gold-light">Botanical Diamonds</span>
          </h1>

          <p className="mt-2 text-base sm:text-lg font-light text-estate-sand/80 max-w-2xl mx-auto leading-relaxed">
            Cultivated across distinct microclimates on the Ethiopian plateau, each Botanical
            Diamond represents decades of selective agronomy and zero-compromise post-harvest
            craftsmanship.
          </p>

          {/* Micro stats strip */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs text-estate-sand/70 font-light">
            {[
              { value: '01–04', label: 'Curated Lots' },
              { value: '1,800–2,250m', label: 'Estate Altitude' },
              { value: '100%', label: 'Traceable to Plot' }
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <span className="block font-serif text-lg text-estate-gold">{stat.value}</span>
                <span className="uppercase tracking-widest text-[10px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-estate-sand/50">
          <span className="text-[10px] uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-estate-gold" />
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-estate-cream/70 border-b border-estate-charcoal/10 sticky top-[69px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categories.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-wider font-sans font-medium transition-all duration-300 rounded-full ${
                    active
                      ? 'bg-estate-forest text-estate-gold shadow-md'
                      : 'bg-white text-estate-muted hover:text-estate-forest border border-estate-charcoal/10 hover:border-estate-gold/50'
                  }`}
                >
                  <span className={active ? 'text-estate-gold' : 'text-estate-gold/60'}>
                    {CATEGORY_ICONS[cat.id]}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>
          <span className="hidden md:block text-[11px] text-estate-muted font-light shrink-0">
            Showing {filteredDiamonds.length} of {BOTANICAL_DIAMONDS.length} diamonds
          </span>
        </div>
      </section>

      {/* ── Diamond Detailed Panels ── */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest relative overflow-hidden">
        <div
          className="absolute top-1/3 -left-24 w-96 h-96 bg-estate-gold/5 rounded-full blur-3xl pointer-events-none animate-drift-slow"
          style={{ animationDelay: '-6s' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">
          {filteredDiamonds.map((diamond, index) => (
            <DiamondPanel key={diamond.slug} diamond={diamond} index={index} />
          ))}
        </div>
      </section>

      {/* ── Sourcing Banner ── */}
      <section className="relative py-24 bg-estate-forest text-estate-sand overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/coffee_cherry_macro_1789479091725.jpg"
            alt="Coffee cherry macro at the estate"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-estate-forest/85" />
        </div>
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-drift-slow"
          style={{ animationDelay: '-4s' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold">
            <span className="h-px w-8 bg-estate-gold/50" />
            Private Allocations
            <span className="h-px w-8 bg-estate-gold/50" />
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-estate-sand leading-tight">
            Reserve your lot from the next harvest.
          </h2>
          <p className="text-sm sm:text-base text-estate-sand/80 font-light max-w-xl mx-auto leading-relaxed">
            We partner with specialty roasters, culinary artisans, and natural ingredient houses
            worldwide. Contact our estate trading desk to request samples or secure volume
            allocations before the season opens.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group/cta relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full border border-estate-gold/80 text-estate-sand text-xs uppercase tracking-widest font-semibold transition-all duration-400 ease-out hover:border-estate-gold hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              <span className="absolute inset-0 bg-estate-gold translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 inline-flex items-center gap-3 group-hover/cta:text-estate-forest transition-colors duration-300">
                <span>Request Lot Allocation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-estate-sand/40 text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-sand hover:text-estate-forest transition-all duration-300 rounded-full text-center"
            >
              Browse Retail Store
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
