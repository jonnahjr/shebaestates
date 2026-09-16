import React, { useEffect, useState } from 'react';
import { ChevronDown, Sprout, Hand, ScanSearch, Sun, Package, Globe2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { PROCESS_STEPS } from '../data/company';

const STEP_ICONS = [Sprout, Hand, ScanSearch, Sun, Package, Globe2];

export const QualityProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [userTookControl, setUserTookControl] = useState(false);
  const [autoplay] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  // Gentle auto-advance on desktop; halts permanently once the visitor
  // picks a phase themselves, and pauses while hovering the module.
  useEffect(() => {
    if (!autoplay || hoverPaused || userTookControl) return;
    const timer = setTimeout(
      () => setActiveStep(s => (s + 1) % PROCESS_STEPS.length),
      5000
    );
    return () => clearTimeout(timer);
  }, [activeStep, hoverPaused, autoplay, userTookControl]);

  const selectStep = (idx: number) => {
    setUserTookControl(true);
    setActiveStep(idx);
  };

  const ActiveIcon = STEP_ICONS[activeStep];

  return (
    <section className="py-24 sm:py-32 bg-estate-forest text-estate-sand relative overflow-hidden">
      {/* Ambient drifting light orbs */}
      <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-estate-gold/5 rounded-full blur-3xl pointer-events-none animate-drift-slow" />
      <div
        className="absolute -bottom-24 left-0 w-[28rem] h-[28rem] bg-estate-olive/20 rounded-full blur-3xl pointer-events-none animate-drift-slow"
        style={{ animationDelay: '-7s' }}
      />
      {/* Fine vertical hairlines for architectural structure */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, #C2A26F 1px, transparent 1px)',
          backgroundSize: '25% 100%'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Craftsmanship & Terroir"
            title="Every harvest tells a story."
            subtitle="From volcanic highland soil to international preparation, our six-step methodology guarantees purity, traceability, and sensory excellence."
            dark={true}
            align="center"
          />
        </Reveal>

        {/* ── Desktop: interactive phase rail + display panel ── */}
        <Reveal delay={150} className="hidden lg:block">
          <div className="mt-16 grid grid-cols-12 gap-10 xl:gap-14 items-stretch">
            {/* Phase rail */}
            <div
              className="col-span-5 relative pl-8"
              onMouseEnter={() => setHoverPaused(true)}
              onMouseLeave={() => setHoverPaused(false)}
            >
              {/* Progress rail with animated fill */}
              <div className="absolute left-[5px] top-3 bottom-3 w-px bg-white/10">
                <div
                  className="w-full bg-gradient-to-b from-estate-gold to-estate-gold/20 transition-all duration-700 ease-out"
                  style={{ height: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
                />
              </div>

              <div className="space-y-1.5">
                {PROCESS_STEPS.map((step, idx) => {
                  const isActive = idx === activeStep;
                  const Icon = STEP_ICONS[idx];
                  return (
                    <button
                      key={step.number}
                      onClick={() => selectStep(idx)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`group/step relative w-full text-left flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                        isActive
                          ? 'bg-estate-forest-light/70 border-estate-gold/50 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] translate-x-1'
                          : 'border-transparent hover:bg-white/5 hover:border-white/10 hover:translate-x-1'
                      }`}
                    >
                      {/* Node dot pinned to the rail */}
                      <span
                        className={`absolute -left-8 top-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full border transition-all duration-500 ${
                          isActive
                            ? 'bg-estate-gold border-estate-gold shadow-[0_0_12px_rgba(194,162,111,0.9)]'
                            : 'bg-estate-forest border-white/25 group-hover/step:border-estate-gold/60'
                        }`}
                      />                      <span className="flex-1 min-w-0">
                        <span
                          className={`block font-serif text-lg leading-tight transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-estate-sand/80'
                          }`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`block text-[10px] uppercase tracking-widest mt-0.5 truncate transition-colors duration-300 ${
                            isActive ? 'text-estate-gold/90' : 'text-estate-sand/35'
                          }`}
                        >
                          {step.subtitle}
                        </span>
                      </span>
                      <Icon
                        className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                          isActive ? 'text-estate-gold' : 'text-estate-sand/30 group-hover/step:text-estate-sand/60'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Display panel */}
            <div
              className="col-span-7"
              onMouseEnter={() => setHoverPaused(true)}
              onMouseLeave={() => setHoverPaused(false)}
            >
              <div className="relative h-full min-h-[440px] p-10 xl:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-estate-forest-light/60 via-estate-forest-light/30 to-transparent overflow-hidden flex flex-col">
                {/* Icon medallion with expanding pulse ring */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full border border-estate-gold/40 bg-estate-gold/10 mb-8">
                  <span className="absolute inset-0 rounded-full border border-estate-gold/30 animate-ring-pulse" />
                  <ActiveIcon className="w-7 h-7 text-estate-gold" />
                </div>

                {/* Animated content — re-enters on every phase change */}
                <div key={`panel-${activeStep}`} className="relative animate-step-panel">
                  <h3 className="font-serif text-3xl xl:text-4xl text-white leading-tight mb-3">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>

                  <p className="text-xs uppercase tracking-luxury text-estate-gold/80 font-sans mb-5">
                    {PROCESS_STEPS[activeStep].subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-estate-sand/75 font-light leading-relaxed max-w-xl mb-6">
                    {PROCESS_STEPS[activeStep].description}
                  </p>

                  <p className="text-sm italic font-serif text-estate-gold-light/90 border-l-2 border-estate-gold/50 pl-4 max-w-xl">
                    {PROCESS_STEPS[activeStep].details}
                  </p>
                </div>

                {/* Phase progress dots */}
                <div className="relative mt-auto pt-10 flex items-center gap-2">
                  {PROCESS_STEPS.map((s, i) => (
                    <button
                      key={s.number}
                      onClick={() => selectStep(i)}
                      aria-label={`Go to phase ${s.number}`}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === activeStep ? 'w-8 bg-estate-gold' : 'w-3 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Mobile / tablet: elegant accordion ── */}
        <Reveal delay={150} className="lg:hidden">
          <div className="mt-12 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isOpen = idx === activeStep;
              const Icon = STEP_ICONS[idx];
              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? 'bg-estate-forest-light/60 border-estate-gold/50'
                      : 'bg-estate-forest-light/30 border-white/10'
                  }`}
                >
                  <button
                    onClick={() => selectStep(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <span className="flex-1 min-w-0">
                      <span className="block font-serif text-lg text-estate-sand leading-tight">
                        {step.title}
                      </span>
                      <span className="block text-[10px] uppercase tracking-widest text-estate-gold/70 mt-0.5 truncate">
                        {step.subtitle}
                      </span>
                    </span>
                    <Icon
                      className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                        isOpen ? 'text-estate-gold' : 'text-estate-sand/40'
                      }`}
                    />
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-estate-sand/50 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <p className="text-sm text-estate-sand/75 font-light leading-relaxed">
                          {step.description}
                        </p>
                        <p className="mt-3 text-xs italic font-serif text-estate-gold-light/80 border-l-2 border-estate-gold/40 pl-3">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
