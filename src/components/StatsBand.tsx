import React from 'react';
import { Mountain, Trees, Users, Globe2 } from 'lucide-react';
import { CountUp } from './CountUp';
import { Reveal } from './Reveal';

const STATS = [
  { icon: Mountain, end: 2250, suffix: 'm', label: 'Peak Estate Altitude' },
  { icon: Trees, end: 20, suffix: '+', label: 'Native Canopy Species Protected' },
  { icon: Users, end: 120, suffix: '+', label: 'Highland Farming Families' },
  { icon: Globe2, end: 4, suffix: '', label: 'Continental Trade Hubs' }
];

/** Full-width estate statistics band with animated count-up numbers. */
export const StatsBand: React.FC = () => {
  return (
    <section className="relative bg-estate-forest text-estate-sand border-y border-estate-gold/20 overflow-hidden">
      {/* Ambient gold orb */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-estate-gold/[0.07] rounded-full blur-3xl pointer-events-none animate-drift-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={idx * 100}>
                <div className="text-center group cursor-default">
                  <Icon className="w-6 h-6 text-estate-gold mx-auto mb-3 transition-transform duration-500 group-hover:scale-110" />
                  <span className="block font-serif text-4xl sm:text-5xl text-estate-sand leading-none">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </span>
                  <span className="mt-2 block text-[10px] sm:text-[11px] uppercase tracking-widest text-estate-sand/60 font-sans">
                    {stat.label}
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
