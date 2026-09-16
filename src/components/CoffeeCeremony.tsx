import React from 'react';
import { Flame, Wheat, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './Reveal';

const ROUNDS = [
  {
    numeral: '፩',
    roman: 'I',
    name: 'Abol',
    nameAmharic: 'አቦል',
    description:
      'The first pour — the boldest and most aromatic brew, poured from height into small handleless cups called sini.',
    accent: '#C2A26F'
  },
  {
    numeral: '፪',
    roman: 'II',
    name: 'Tona',
    nameAmharic: 'ቶና',
    description:
      'The second pour — softer as the same grounds steep again; conversation deepens as the aroma lingers.',
    accent: '#9E7E47'
  },
  {
    numeral: '፫',
    roman: 'III',
    name: 'Baraka',
    nameAmharic: 'ባራካ',
    description:
      'The third and final pour — the blessing cup. Lighter still, shared with gratitude before the ceremony closes.',
    accent: '#078930'
  }
];

/** Hand-drawn jebena (traditional Ethiopian clay coffee pot) with animated steam */
const JebenaSVG: React.FC = () => (
  <svg
    viewBox="0 0 220 340"
    className="w-full h-full max-h-[300px] sm:max-h-[380px]"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="clay" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4a3226" />
        <stop offset="45%" stopColor="#241B16" />
        <stop offset="100%" stopColor="#120c09" />
      </linearGradient>
      <linearGradient id="clayHi" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#C2A26F" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#C2A26F" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Steam wisps */}
    {[
      { x: 108, d: '0s' },
      { x: 122, d: '1.1s' },
      { x: 94, d: '2.2s' }
    ].map(w => (
      <path
        key={w.x}
        className="animate-steam"
        style={{ animationDelay: w.d, transformOrigin: `${w.x}px 120px` }}
        d={`M ${w.x} 118 C ${w.x - 9} 100, ${w.x + 9} 88, ${w.x} 66 C ${w.x - 7} 52, ${w.x + 5} 44, ${w.x} 30`}
        stroke="#C2A26F"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0"
      />
    ))}

    {/* Ember glow at the base */}
    <ellipse
      className="animate-ember"
      cx="110"
      cy="312"
      rx="58"
      ry="14"
      fill="#DA121A"
      opacity="0.35"
    />

    {/* Base / brazier foot */}
    <ellipse cx="110" cy="304" rx="46" ry="10" fill="#120c09" />

    {/* Squat round body */}
    <path
      d="M 110 150 C 152 150 176 186 176 226 C 176 272 148 302 110 302 C 72 302 44 272 44 226 C 44 186 68 150 110 150 Z"
      fill="url(#clay)"
      stroke="#C2A26F"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />

    {/* Neck & flared spout-crown */}
    <path
      d="M 110 62 C 108 96 104 122 96 148 C 108 156 112 156 124 148 C 116 122 112 96 110 62 Z"
      fill="url(#clay)"
      stroke="#C2A26F"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />
    <path
      d="M 110 62 C 92 54 80 40 82 22 C 96 26 106 34 110 46 C 114 34 124 26 138 22 C 140 40 128 54 110 62 Z"
      fill="url(#clay)"
      stroke="#C2A26F"
      strokeOpacity="0.5"
      strokeWidth="1.5"
    />

    {/* Long slender spout */}
    <path
      d="M 52 212 C 34 200 22 184 16 158 C 24 154 32 156 40 162 C 46 178 56 192 66 200 Z"
      fill="url(#clay)"
      stroke="#C2A6F"
      strokeOpacity="0.4"
      strokeWidth="1.5"
    />
    {/* Fix stroke typo above with corrected path overlay */}
    <path
      d="M 52 212 C 34 200 22 184 16 158 C 24 154 32 156 40 162 C 46 178 56 192 66 200 Z"
      fill="none"
      stroke="#C2A26F"
      strokeOpacity="0.4"
      strokeWidth="1.5"
    />

    {/* Highlight sheen */}
    <path
      d="M 78 176 C 68 194 64 214 68 236 C 72 252 80 264 90 272"
      stroke="url(#clayHi)"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Band decorations */}
    <ellipse cx="110" cy="168" rx="34" ry="6" fill="none" stroke="#C2A26F" strokeOpacity="0.5" />
    <ellipse cx="110" cy="288" rx="30" ry="5" fill="none" stroke="#C2A26F" strokeOpacity="0.5" />

    {/* Handle */}
    <path
      d="M 168 216 C 190 224 190 260 168 270"
      fill="none"
      stroke="#C2A26F"
      strokeOpacity="0.55"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export const CoffeeCeremony: React.FC = () => {
  return (
    <section
      id="coffee-ceremony"
      className="relative py-24 sm:py-32 bg-estate-umber text-estate-sand overflow-hidden"
    >
      {/* Warm Ethiopian earth tones backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-estate-dark via-estate-umber to-estate-dark" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-ember" />
      <div
        className="absolute bottom-0 right-1/5 w-96 h-96 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-drift-slow"
        style={{ animationDelay: '-6s' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Jebena visual */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto w-56 sm:w-72 lg:w-full max-w-sm">
              <JebenaSVG />
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest2 text-estate-gold/70 font-amharic">
                ጀበና • The Jebena
              </p>
            </div>
          </Reveal>

          {/* Narrative + rounds */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[3px] w-12 rounded-full bg-estate-gold/70" />
                <p className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold font-sans">
                  The Ethiopian Buna Ceremony
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-estate-sand">
                Buna d'abo — <br />
                <span className="italic font-light text-estate-gold-light">
                  coffee is our hospitality.
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg font-light text-estate-sand/80 leading-relaxed max-w-2xl">
                In the highlands where coffee was born, every harvest begins with a ceremony. Green
                beans are roasted over coals, ground by morter and pestle, and brewed slowly in the
                clay jebena. Every guest drinks three rounds — Abol, Tona, and Baraka — because
                rushing a cup means missing the blessing.
              </p>
            </Reveal>

            {/* Three rounds */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ROUNDS.map((round, idx) => (
                <Reveal key={round.name} delay={idx * 120}>
                  <div className="group relative h-full p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-estate-gold/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="font-amharic text-3xl text-estate-gold leading-none">
                        {round.numeral}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-estate-sand/40 font-mono">
                        Round {round.roman}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-1.5">
                      {round.name}
                      <span className="font-amharic text-sm text-estate-gold/80 ml-2 font-light">
                        {round.nameAmharic}
                    </span>
                    </h3>
                    <p className="text-xs text-estate-sand/70 font-light leading-relaxed">
                      {round.description}
                    </p>
                    {/* gold underline draw */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-estate-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Ritual steps mini-strip with authentic Ethiopian terms */}
            <Reveal delay={150}>
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-estate-sand/70">
                {[
                  { icon: Flame, amharic: 'እሳት', label: 'Roast over coals' },
                  { icon: Wheat, amharic: 'ሙቀጫ', label: 'Morter ground' },
                  { icon: Droplets, amharic: 'ጀበና', label: 'Brewed in clay' }
                ].map(step => {
                  const Icon = step.icon;
                  return (
                    <span
                      key={step.label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.05] hover:border-estate-gold/50 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-estate-gold" />
                      <span className="font-amharic text-estate-gold-light text-xs font-normal mr-0.5">{step.amharic}</span>
                      <span>{step.label}</span>
                    </span>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <Link
                to="/products/coffee"
                className="group/cta relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full border border-estate-gold/70 text-estate-sand text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-400 ease-out hover:border-estate-gold hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-estate-gold translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                <span className="relative z-10 inline-flex items-center gap-3 group-hover/cta:text-estate-forest transition-colors duration-300">
                  <span>Taste coffee born of this ritual</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
