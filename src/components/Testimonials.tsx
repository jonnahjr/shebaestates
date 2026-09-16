import React, { useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const TESTIMONIALS = [
  {
    quote:
      'The Gesha lots from Queen of Sheba carry a floral clarity we rarely encounter — our roasting team looks forward to every harvest arrival.',
    name: 'Elena Marchetti',
    role: 'Head Buyer, Specialty Roastery — Milan, Italy'
  },
  {
    quote:
      'Documentation, phytosanitary clearance, and shipping were flawless. Among the most professional export partners we work with in East Africa.',
    name: 'Omar Al-Farsi',
    role: 'Sourcing Director — Dubai, United Arab Emirates'
  },
  {
    quote:
      'Their Negin saffron is extraordinary: deep crimson, high crocin, and packed with real care. A true estate-to-table relationship.',
    name: 'Charlotte Dubois',
    role: 'Founder, Fine Foods Importers — Paris, France'
  }
];

/** Auto-advancing testimonial carousel with manual controls. */
export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setActive(a => (a + 1) % TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(timer);
  }, [paused]);

  const current = TESTIMONIALS[active];

  return (
    <section className="py-24 sm:py-32 bg-estate-sand text-estate-forest relative overflow-hidden">
      <div
        className="absolute -bottom-24 left-1/4 w-96 h-96 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-drift-slow"
        style={{ animationDelay: '-5s' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Trusted by International Partners"
            title="Voices from the trade."
            align="center"
          />
        </Reveal>

        <Reveal delay={120}>
          <div
            className="mt-12 relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative p-8 sm:p-12 bg-white border border-estate-charcoal/10 rounded-3xl text-center transition-all duration-500 hover:border-estate-gold/50">
              <Quote className="w-10 h-10 text-estate-gold/30 mx-auto mb-6" />

              {/* Animated quote content — re-enters on change */}
              <div key={active} className="animate-fade-in">
                <p className="font-serif text-lg sm:text-2xl italic text-estate-forest/90 leading-relaxed">
                  "{current.quote}"
                </p>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-estate-forest">{current.name}</p>
                  <p className="text-xs text-estate-muted font-light mt-1">{current.role}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-center gap-6">
                <button
                  onClick={() =>
                    setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                  }
                  aria-label="Previous testimonial"
                  className="p-2 rounded-full border border-estate-charcoal/10 text-estate-forest/70 transition-all duration-300 hover:border-estate-gold hover:text-estate-brass"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-400 ${
                        i === active ? 'w-7 bg-estate-gold' : 'w-1.5 bg-estate-charcoal/20 hover:bg-estate-charcoal/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActive(a => (a + 1) % TESTIMONIALS.length)}
                  aria-label="Next testimonial"
                  className="p-2 rounded-full border border-estate-charcoal/10 text-estate-forest/70 transition-all duration-300 hover:border-estate-gold hover:text-estate-brass"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
