import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { SUSTAINABILITY_PILLARS } from '../data/company';

export const Sustainability: React.FC = () => {
  return (
    <MainLayout>
      <SEO
        title="Sustainability Charter | Ecological Stewardship"
        description="Learn about the sustainable agricultural practices, soil health initiatives, and community support at Queen of Sheba Highland Estate Co."
      />

      {/* Hero Banner */}
      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/sorting_quality_control_1789479202749.jpg"
            alt="Sustainable sorting and agriculture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/80 to-estate-forest" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold">
            REGENERATIVE COMMITMENT
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-estate-sand">
            Growing with the land, <br />
            <span className="italic text-estate-gold-light">not against it.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg font-light text-estate-sand/80 max-w-2xl mx-auto leading-relaxed">
            We uphold sustainable farming methods and prioritize the well-being of our land, guaranteeing consistent, exceptional offerings for our partners and safeguarding our highland ecosystem for generations to come.
          </p>
        </div>
      </section>

      {/* The 4 Pillars Detailed */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SUSTAINABILITY_PILLARS.map(pillar => {

            return (
              <div
                key={pillar.number}
                className="bg-white border border-estate-charcoal/10 p-8 sm:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-3">
                  <span className="font-serif text-4xl sm:text-5xl text-estate-gold font-light block">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-estate-forest font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase tracking-luxury text-estate-moss font-semibold">
                    {pillar.tagline}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-estate-cream text-estate-forest text-xs font-mono border border-estate-charcoal/10">
                      {pillar.impactMetric}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base text-estate-charcoal/80 font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-xs uppercase tracking-widest text-estate-muted font-semibold">
                      Key Field Practices
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pillar.keyPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-estate-charcoal/80">
                          <CheckCircle2 className="w-4 h-4 text-estate-gold flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Development Highlight */}
      <section className="py-20 bg-estate-cream text-estate-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            eyebrow="Agricultural Leadership"
            title="Sharing Knowledge Across the Sector"
            subtitle="At Queen of Sheba Highland Estate Co., our expertise lies in providing sustainably sourced macadamia nuts and botanical harvests while collaborating with industry partners to supply seed stock and promote best agronomy practices."
            align="center"
          />

          <div className="p-6 bg-white border border-estate-gold/30 text-xs sm:text-sm text-estate-muted font-light leading-relaxed max-w-2xl mx-auto">
            "By investing in regenerative seedling propagation and training regional growers in sustainable shade and water management, we expand productivity and long-term climate resilience across the Ethiopian plateau."
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold hover:text-estate-forest transition-colors shadow-md rounded-full"
            >
              <span>Partner With Our Agronomy Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
