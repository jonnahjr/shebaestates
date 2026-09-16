import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Award, ShieldCheck, Leaf, FileCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const LOGO_DIR = '/assets/images/';

interface LogoBadge {
  type: 'image';
  src: string;
  label: string;
}

interface TextBadge {
  type: 'text';
  label: string;
  icon: React.ReactNode;
}

const MARQUEE_ITEMS: (LogoBadge | TextBadge)[] = [
  { type: 'text', label: 'ISO 9001 — Quality Management', icon: <ShieldCheck className="w-5 h-5" /> },
  { type: 'text', label: 'USDA Organic Certification', icon: <Leaf className="w-5 h-5" /> },
  { type: 'text', label: 'EU Organic Certification', icon: <Leaf className="w-5 h-5" /> },
  { type: 'image', src: 'rainforest-alliance-logo-removebg-preview-1.webp', label: 'Rainforest Alliance Certification' },
  { type: 'text', label: 'ECX Export License', icon: <FileCheck className="w-5 h-5" /> },
  { type: 'text', label: 'ECAE Conformity Assessment', icon: <BadgeCheck className="w-5 h-5" /> },
  { type: 'image', src: 'image-removebg-preview-2026-01-15T180304.767-1.webp', label: 'Ethiopian Coffee & Tea Authority' },
  { type: 'text', label: 'EFDA Local Certification', icon: <BadgeCheck className="w-5 h-5" /> },
  { type: 'text', label: 'ICO Membership', icon: <Award className="w-5 h-5" /> },
  { type: 'text', label: 'Ethiopian Coffee Quality Certification', icon: <Award className="w-5 h-5" /> },
  { type: 'image', src: 'image-removebg-preview-2026-01-15T175517.702-1.webp', label: 'Ethiopian Coffee Quality' },
  { type: 'image', src: 'image-removebg-preview-100-1.webp', label: 'Organic Certified' }
];

/** Infinite horizontal marquee — list duplicated for a seamless loop. */
export const CertificationsMarquee: React.FC = () => {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="py-20 sm:py-24 bg-estate-cream text-estate-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-luxury text-estate-brass font-sans font-semibold mb-3">
              Memberships &amp; Certifications
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              Rated among the top coffee export companies in Ethiopia
            </h2>
            <p className="mt-4 text-base font-light text-estate-muted leading-relaxed">
              Explore our coffee export association memberships and certifications — every lot
              ships backed by internationally recognized quality and organic standards.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Infinite scrolling certification badges */}
      <Reveal delay={150}>
        <div className="relative mt-12 group/marquee">
          {/* Edge fades into the cream background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-estate-cream to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-estate-cream to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="marquee-track flex w-max items-stretch gap-5 px-5 group-hover/marquee:[animation-play-state:paused]">
              {loop.map((item, idx) => (
                <div
                  key={`${item.label}-${idx}`}
                  className="flex shrink-0 items-center gap-3 rounded-2xl border border-estate-charcoal/10 bg-white px-6 py-4 transition-colors duration-300 hover:border-estate-gold/60"
                >
                  {item.type === 'image' ? (
                    <>
                      <img
                        src={`${LOGO_DIR}${item.src}`}
                        alt={item.label}
                        loading="lazy"
                        className="h-12 w-12 object-contain"
                      />
                      <span className="text-xs font-sans font-semibold tracking-wide text-estate-forest max-w-[180px] leading-snug">
                        {item.label}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-estate-brass">{item.icon}</span>
                      <span className="text-xs font-sans font-semibold tracking-wide text-estate-forest max-w-[200px] leading-snug">
                        {item.label}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Connect CTA */}
      <Reveal delay={200}>
        <div className="mt-12 flex justify-center px-4">
          <Link
            to="/contact"
            className="group/cta relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 rounded-full border border-estate-gold/80 text-estate-forest text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-400 ease-out hover:border-estate-gold hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-estate-gold translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
            <span className="relative z-10 inline-flex items-center gap-3 group-hover/cta:text-estate-forest transition-colors duration-300">
              <span>Connect with Our Export Desk</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
};
