import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Droplets, Sun, Wind, ArrowRight } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionHeading } from '../components/SectionHeading';
import { SEO } from '../components/SEO';

export const Estate: React.FC = () => {
  return (
    <MainLayout>
      <SEO
        title="Our Estate & Highland Terroir"
        description="Explore the volcanic soil, altitude, and microclimates of Queen of Sheba Highland Estate around Lake Tana and the Amhara Region."
      />

      {/* Hero Banner */}
      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ethiopian_farmer_harvest_1789479131548.jpg"
            alt="Highland Ethiopian Estate Lands"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/75 to-estate-forest" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold">
            TERROIR & ECOSYSTEM
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-estate-sand">
            The Highland Estate & Terroir
          </h1>
          <p className="mt-4 text-base sm:text-lg font-light text-estate-sand/80 max-w-2xl mx-auto leading-relaxed">
            Perched between 1,800 and 2,250 meters above sea level along the pristine shores of Lake Tana, where ancient volcanic geology nurtures the world’s most refined botanicals.
          </p>
        </div>
      </section>

      {/* Terroir Factors Grid */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Geographic Advantage"
            title="An Unrivaled Microclimate"
            subtitle="Four natural forces converge on our estate to produce intense botanical density and unmistakable sensory character."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest">
                <Mountain className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-estate-forest">High Elevation</h3>
              <p className="text-xs text-estate-gold uppercase tracking-wider font-mono">1,800 – 2,250 MASL</p>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Cool mountain nights slow down plant cellular metabolism, allowing sugars, aromatics, and essential oils to concentrate deeply within the seeds and blossoms.
              </p>
            </div>

            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-estate-forest">Lake Tana Watershed</h3>
              <p className="text-xs text-estate-gold uppercase tracking-wider font-mono">Sub-Basin Hydrology</p>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Ethiopia's largest lake generates stable ambient humidity and gentle evening breezes, buffering our vanilla and coffee vines from extreme dry spells.
              </p>
            </div>

            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-estate-forest">Volcanic Soil</h3>
              <p className="text-xs text-estate-gold uppercase tracking-wider font-mono">Basalt & Iron Rich</p>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Centuries of volcanic weathering have enriched the red clay with bio-available iron, potassium, and magnesium, nourishing deep-root crops naturally.
              </p>
            </div>

            <div className="p-8 bg-white border border-estate-charcoal/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-estate-forest">Indigenous Shade</h3>
              <p className="text-xs text-estate-gold uppercase tracking-wider font-mono">Old-Growth Canopy</p>
              <p className="text-xs text-estate-muted font-light leading-relaxed">
                Over 20 native tree species form a protective multi-layered umbrella, filtering intense equatorial sunlight and preserving the forest biodiversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Narrative */}
      <section className="py-20 sm:py-28 bg-estate-cream text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold">
                THE HISTORIC ZEGE PENINSULA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-estate-forest font-normal leading-tight">
                Ancient monastery forests and heirloom botanicals.
              </h2>
              <p className="text-base text-estate-charcoal/80 font-light leading-relaxed">
                Just across the water from Bahir Dar lies the Zege Peninsula. Protected for centuries by sacred monastic traditions, this dense peninsula forest remained untouched by commercial monoculture, preserving genetic lineages of indigenous wild Arabica coffee.
              </p>
              <p className="text-base text-estate-charcoal/80 font-light leading-relaxed">
                Our estate works hand-in-hand with local farming stewards around the peninsula and surrounding highland plateaus to cultivate coffee, saffron, vanilla, and macadamia in harmony with this ancient agro-ecological sanctuary.
              </p>

              <div className="pt-2">
                <Link
                  to="/products/coffee"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-estate-forest hover:text-estate-gold transition-colors pb-1 border-b border-estate-forest"
                >
                  <span>Explore Zege Coffee Micro-Lot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-estate-gold/30 shadow-2xl overflow-hidden aspect-[4/3] relative">
                <img
                  src="/assets/images/coffee_cherry_macro_1789479091725.jpg"
                  alt="Ripe coffee cherries in highland canopy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-estate-forest/90 text-estate-sand text-xs backdrop-blur-sm">
                  <span className="text-estate-gold font-semibold block">Lake Tana Basin Sanctuary</span>
                  <span className="text-estate-sand/80 font-light">
                    Native shade-grown agroforestry at 1,950m elevation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highland Map & Location Summary */}
      <section className="py-20 bg-estate-forest text-estate-sand">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            eyebrow="Geographic Coordinates"
            title="Bahir Dar & Lake Tana Basin, Ethiopia"
            subtitle="Latitude 11°36'N • Longitude 37°23'E • Amhara Regional State"
            dark={true}
            align="center"
          />

          <div className="p-8 bg-estate-moss/40 border border-estate-gold/30 max-w-2xl mx-auto text-xs text-estate-sand/80 font-light leading-relaxed space-y-3">
            <p>
              Queen of Sheba Highland Estate Co. maintains its agricultural operations and post-harvest facilities within the Amhara highlands. All export shipments are certified at our Bahir Dar estate office before dispatch to our international hubs in San Marino, Ajman, and New York.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-estate-gold hover:text-estate-sand font-semibold transition-colors"
              >
                <span>Inquire About Estate Visits & Lot Allocations →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
