import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Leaf, Globe } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';
import { COMPANY_INFO, TIMELINE_ITEMS } from '../data/company';

export const About: React.FC = () => {
  return (
    <MainLayout>
      <SEO
        title="Our Story & Heritage"
        description="Discover the history, highland roots, and agricultural philosophy behind Queen of Sheba Highland Estate Co."
      />

      {/* Header Banner */}
      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ethiopian_highlands_sunrise_1789479048831.jpg"
            alt="Highland Ethiopian Sunrise"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/70 to-estate-forest" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold">
            THE HERITAGE OF QUEEN OF SHEBA
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-estate-sand">
            Rooted in the Ethiopian Highlands. <br />
            <span className="italic text-estate-gold-light">Stewarded for the World.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg font-light text-estate-sand/80 max-w-2xl mx-auto leading-relaxed">
            {COMPANY_INFO.philosophySummary}
          </p>
        </div>
      </section>

      {/* Narrative Section 1: The Land & The Origins */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold block">
                ANCESTRAL FOUNDATIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-estate-forest font-normal leading-tight">
                Where the Blue Nile begins, our botanicals thrive.
              </h2>
              <p className="text-base text-estate-charcoal/80 font-light leading-relaxed">
                The Ethiopian highlands are universally recognized as the botanical birthplace of Arabica coffee and a biodiversity treasure house. In the volcanic basins surrounding Lake Tana and the historic Zege Peninsula, altitude and climate converge to create a natural greenhouse unmatched anywhere on Earth.
              </p>
              <p className="text-base text-estate-charcoal/80 font-light leading-relaxed">
                At Queen of Sheba Highland Estate Co., our mission has always been singular: to nurture this blessed soil through sustainable regenerative practices, producing four botanical wonders that honor both Ethiopian agricultural legacy and international gourmet standards.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative border border-estate-gold/30 shadow-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/assets/images/ethiopian_farmer_harvest_1789479131548.jpg"
                  alt="Highland estate farmer harvesting with care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Values Grid */}
      <section className="py-20 sm:py-28 bg-estate-cream text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Principles"
            title="Integrity in Every Grain & Thread"
            subtitle="Four pillars that define how Queen of Sheba Highland Estate Co. conducts agriculture and global trade."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-3">
              <Leaf className="w-8 h-8 text-estate-forest" />
              <h3 className="font-serif text-xl font-medium text-estate-forest">Natural Agriculture</h3>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Prioritizing soil vitality through organic circular composting, terracing, and native canopy shade without chemical shortcuts.
              </p>
            </div>

            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-3">
              <Shield className="w-8 h-8 text-estate-forest" />
              <h3 className="font-serif text-xl font-medium text-estate-forest">Sensory Purity</h3>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Every lot of coffee, saffron, vanilla, and macadamia is strictly hand-sorted, slow-cured, and verified for peak botanical concentration.
              </p>
            </div>

            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-3">
              <Users className="w-8 h-8 text-estate-forest" />
              <h3 className="font-serif text-xl font-medium text-estate-forest">Community Dignity</h3>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Long-term relationships with highland agricultural families, sharing high-yield macadamia seed stock and advanced agronomy training.
              </p>
            </div>

            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-3">
              <Globe className="w-8 h-8 text-estate-forest" />
              <h3 className="font-serif text-xl font-medium text-estate-forest">Global Direct Trade</h3>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Connecting our Ethiopian estate directly to Europe, the Gulf, and North America through four registered corporate hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Timeline"
            title="The Evolution of Sheba Estates"
            subtitle="How generations of highland tradition evolved into an international benchmark for Ethiopian agriculture."
            align="center"
          />

          <div className="mt-16 max-w-4xl mx-auto space-y-6">
            {TIMELINE_ITEMS.map(item => (
              <div
                key={item.step}
                className="p-6 sm:p-8 bg-white border border-estate-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-estate-gold/60 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                  <span className="font-serif text-3xl sm:text-4xl text-estate-gold font-light">
                    {item.step}
                  </span>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-estate-muted font-mono block">
                      {item.phase}
                    </span>
                    <h3 className="font-serif text-xl text-estate-forest font-medium">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-estate-muted font-light sm:max-w-md leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Products */}
      <section className="py-20 bg-estate-forest text-estate-sand text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-estate-sand">
            Experience the Four Botanical Diamonds
          </h2>
          <p className="text-sm text-estate-sand/80 font-light max-w-xl mx-auto">
            Discover the sensory profiles, harvest specifications, and terroir notes of our Gesha coffee, Negin saffron, highland vanilla, and macadamia.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-estate-gold text-estate-forest text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold-light transition-all rounded-full"
            >
              <span>Explore All Botanical Diamonds</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
