import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mountain,
  MapPin,
  ShoppingBag,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { ORIGIN_COFFEES } from '../data/company';

const ORIGIN_IMAGE = '/assets/images/type%20seel%201.png';

/**
 * Single-Origin wholesale coffee collection — one horizontal sliding rail of
 * light cream cards (50kg / 60kg / 1 Ton, Order Now, View More) with arrow
 * navigation and scroll-snap. No shadows, no grid lines.
 */
export const OriginCoffees: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrollState, setScrollState] = useState({ atStart: true, atEnd: false });

  const updateScrollState = () => {
    const el = railRef.current;
    if (!el) return;
    setScrollState({
      atStart: el.scrollLeft <= 8,
      atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
    });
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const scrollRail = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-origin-card]');
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-32 bg-estate-cream text-estate-forest relative overflow-hidden">
      {/* Soft ambient gold warmth (no lines) */}
      <div className="absolute -top-24 left-1/3 w-[28rem] h-[28rem] bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-drift-slow" />
      <div
        className="absolute -bottom-24 right-1/4 w-[24rem] h-[24rem] bg-estate-olive/10 rounded-full blur-3xl pointer-events-none animate-drift-slow"
        style={{ animationDelay: '-8s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Single-Origin Wholesale Collection"
              title="Eight origins. One uncompromising standard."
              subtitle="Estate-lotted green coffee from Ethiopia's legendary growing regions — available in 50kg, 60kg, and one-ton lots for roasters and trade partners worldwide."
              align="left"
              className="max-w-2xl"
            />

            {/* Rail navigation arrows */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scrollRail(-1)}
                disabled={scrollState.atStart}
                aria-label="Scroll origins left"
                className="p-3 rounded-full border border-estate-charcoal/15 text-estate-forest/80 transition-all duration-300 hover:border-estate-gold hover:text-estate-brass disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollRail(1)}
                disabled={scrollState.atEnd}
                aria-label="Scroll origins right"
                className="p-3 rounded-full border border-estate-charcoal/15 text-estate-forest/80 transition-all duration-300 hover:border-estate-gold hover:text-estate-brass disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* ── Horizontal sliding rail — full-bleed edge to edge ── */}
        <Reveal delay={150}>
          <div className="relative mt-14 left-1/2 -translate-x-1/2 w-screen">
            {/* Edge fade hints into the cream background */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-estate-cream to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-estate-cream to-transparent z-10" />

            <div
              ref={railRef}
              onScroll={updateScrollState}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 px-6 sm:px-10"
            >
              {ORIGIN_COFFEES.map((coffee, idx) => {
                const isHovered = hoveredIdx === idx;

                return (
                  <article
                    key={coffee.name}
                    data-origin-card
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`group relative shrink-0 w-[300px] sm:w-[360px] snap-start flex flex-col rounded-2xl border bg-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                      isHovered
                        ? 'border-estate-gold -translate-y-2'
                        : 'border-estate-charcoal/10'
                    }`}
                  >
                    {/* Gold top accent — draws in on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-estate-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center z-20" />

                    {/* Shared estate origin image — taller frame so the sack image shows fully */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-estate-parchment">
                      <img
                        src={ORIGIN_IMAGE}
                        alt={`${coffee.name} single-origin coffee sacks`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-estate-forest/60 via-transparent to-transparent" />
                      {/* Single Origin tag floating over image */}
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-sans font-semibold text-estate-gold border border-estate-gold/60 bg-estate-forest/80 backdrop-blur-sm rounded-full px-2.5 py-1">
                        <Mountain className="w-3 h-3" />
                        Single Origin
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="font-serif text-xl text-estate-forest leading-tight">
                        {coffee.name} Coffee
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-[11px] text-estate-muted font-sans">
                        <MapPin className="w-3 h-3 text-estate-brass shrink-0" />
                        {coffee.origin}
                      </p>

                      <p className="mt-3 text-xs text-estate-charcoal/70 font-light leading-relaxed italic font-serif">
                        {coffee.notes}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-widest text-estate-muted/80 font-sans">
                        {coffee.altitude}
                      </p>

                      <p className="mt-4 text-xs font-sans font-semibold tracking-wide text-estate-brass">
                        {coffee.format}
                      </p>

                      {/* Actions */}
                      <div className="mt-auto pt-4 flex items-center gap-2">
                        <Link
                          to="/contact"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-estate-forest text-estate-sand text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-estate-gold hover:text-estate-forest active:scale-95"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Order Now
                        </Link>
                        <Link
                          to={`/products/coffee#${coffee.name.toLowerCase()}`}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full border border-estate-charcoal/15 text-estate-forest/80 text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 hover:border-estate-gold hover:text-estate-brass"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View More
                        </Link>
                      </div>
                    </div>

                    {/* Sheen sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl z-10">
                      <div
                        className={`absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-estate-gold/[0.08] to-transparent -skew-x-12 transition-all duration-1000 ease-out ${
                          isHovered ? 'left-[110%]' : '-left-1/3'
                        }`}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Wholesale CTA footer */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest2 text-estate-brass/90 font-sans">
              <span className="h-px w-10 bg-estate-gold/50" />
              Container-load shipping from Bahir Dar &amp; Addis Ababa
              <span className="h-px w-10 bg-estate-gold/50" />
            </div>
            <Link
              to="/contact"
              className="group/cta relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full border border-estate-gold/80 text-estate-forest text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-400 ease-out hover:border-estate-gold hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-estate-gold translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 inline-flex items-center gap-3 group-hover/cta:text-estate-forest transition-colors duration-300">
                <span>Request Export Pricing</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
