import React from 'react';
import { Mountain, Trees, Users, Globe2 } from 'lucide-react';
import { CountUp } from './CountUp';
import { Reveal } from './Reveal';

const STATS = [
  { icon: Mountain, end: 2250, suffix: 'm', label: 'Peak Estate Altitude', amharic: 'ከፍታ' },
  { icon: Trees, end: 20, suffix: '+', label: 'Canopy Species Protected', amharic: 'የደን ዝርያዎች' },
  { icon: Users, end: 120, suffix: '+', label: 'Farming Families', amharic: 'አርሶ አደሮች' },
  { icon: Globe2, end: 4, suffix: '', label: 'Trade Hubs Worldwide', amharic: 'ማዕከላት' }
];

/**
 * Compact estate statistics band — a slim horizontal strip with hairline
 * dividers, inline icons, and small serif count-up numbers.
 */
export const StatsBand: React.FC = () => {
  return (
    <section
      className="relative bg-estate-forest text-estate-sand border-y border-estate-gold/20 overflow-hidden"
      aria-label="Estate statistics"
    >
      {/* Ambient gold orb — very subtle */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-estate-gold/[0.06] rounded-full blur-3xl pointer-events-none animate-drift-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={idx * 80}>
                <div
                  className={`group flex items-center gap-3.5 sm:gap-4 py-5 sm:py-7 px-2 sm:px-6 lg:px-8 cursor-default ${
                    // vertical hairline dividers
                    idx % 2 === 1 ? 'border-l border-white/10 lg:border-l' : 'lg:border-l'
                  } ${idx >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''} ${
                    idx === 0 ? 'lg:border-l-0' : ''
                  }`}
                >
                  {/* Icon medallion */}
                  <span className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-estate-gold/30 bg-estate-gold/[0.08] flex items-center justify-center transition-all duration-500 group-hover:border-estate-gold/70 group-hover:bg-estate-gold/15">
                    <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-estate-gold transition-transform duration-500 group-hover:scale-110" />
                  </span>

                  {/* Number + labels */}
                  <span className="min-w-0">
                    <span className="block font-serif text-2xl sm:text-3xl text-estate-sand leading-none tracking-tight">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </span>
                    <span className="mt-1 block text-[9px] sm:text-[10px] uppercase tracking-widest text-estate-sand/55 font-sans leading-tight truncate group-hover:text-estate-sand/80 transition-colors duration-300">
                      {stat.label}
                    </span>
                    <span className="hidden sm:block font-amharic text-[10px] text-estate-gold/60 font-light leading-tight mt-0.5">
                      {stat.amharic}
                    </span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
