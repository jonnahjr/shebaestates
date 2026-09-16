import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain } from 'lucide-react';
import { BotanicalDiamond } from '../types';

interface BotanicalDiamondCardProps {
  diamond: BotanicalDiamond;
  index: number;
}

export const BotanicalDiamondCard: React.FC<BotanicalDiamondCardProps> = ({ diamond }) => {
  return (
    <article className="group relative bg-white border border-estate-charcoal/10 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(22,40,29,0.22)] hover:border-estate-gold/70">
      {/* Top Animated Gold Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-estate-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center z-20" />

      {/* Image Container with Subtle Hover Zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-estate-forest/10">
        <img
          src={diamond.image}
          alt={diamond.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108 group-hover:brightness-105"
          loading="lazy"
        />
        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-700" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-estate-gold bg-black/70 backdrop-blur-md px-3.5 py-1.5 border border-estate-gold/40 rounded-full flex items-center gap-1.5 shadow-sm group-hover:border-estate-gold transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-estate-gold animate-pulse" />
            DIAMOND {diamond.number}
          </span>
          {diamond.ethiopianName && (
            <span className="text-xs font-serif text-estate-sand/95 bg-estate-forest/85 backdrop-blur-md px-3.5 py-1 border border-white/15 rounded-full shadow-sm group-hover:border-estate-gold/40 transition-colors">
              {diamond.ethiopianName}
            </span>
          )}
        </div>

        {/* Bottom Image Overlay Info */}
        <div className="absolute bottom-5 left-5 right-5 text-white z-10">
          <div className="flex items-center gap-1.5 text-xs text-estate-gold font-light mb-1.5 tracking-wider font-mono">
            <Mountain className="w-3.5 h-3.5 text-estate-gold" />
            <span>{diamond.altitude}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-estate-sand transition-colors duration-300">
            {diamond.name}
          </h3>
        </div>
      </div>

      {/* Editorial Content Body */}
      <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between bg-estate-sand/60">
        <div>
          {/* Category & Terroir */}
          <p className="text-xs uppercase tracking-widest text-estate-gold font-sans font-semibold mb-2.5 flex items-center gap-2">
            <span>{diamond.category}</span>
            <span className="w-1 h-1 rounded-full bg-estate-gold/60" />
            <span className="text-estate-forest/80">{diamond.region}</span>
          </p>

          {/* Tagline */}
          <p className="font-serif text-xl sm:text-[22px] text-estate-forest italic font-normal leading-snug mb-3.5 group-hover:text-estate-olive transition-colors duration-300">
            "{diamond.tagline}"
          </p>

          {/* Description */}
          <p className="text-sm font-light text-estate-charcoal/80 leading-relaxed line-clamp-3 mb-6">
            {diamond.excerpt}
          </p>

          {/* Tasting / Sensory Notes Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {diamond.tastingNotes.slice(0, 3).map((note, i) => (
              <span
                key={i}
                className="text-xs font-sans px-3.5 py-1.5 bg-white text-estate-forest border border-estate-charcoal/10 transition-all duration-300 hover:bg-estate-gold hover:text-estate-forest hover:border-estate-gold rounded-full shadow-xs cursor-default"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA & Harvest Season */}
        <div className="pt-5 border-t border-estate-charcoal/10 flex items-center justify-between gap-4">
          <span className="text-xs text-estate-muted font-light">
            Harvest: <strong className="text-estate-forest font-medium">{diamond.harvestSeason}</strong>
          </span>

          <Link
            to={`/products/${diamond.slug}`}
            className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-estate-forest text-estate-sand hover:bg-estate-gold hover:text-estate-forest transition-all duration-300 ease-out text-xs uppercase tracking-widest font-semibold rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 group/btn"
          >
            <span>Discover Lot</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};
