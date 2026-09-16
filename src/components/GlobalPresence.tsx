import { useState } from 'react';
import { Phone, Mail, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { GLOBAL_OFFICES } from '../data/company';

export const GlobalPresence: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<number>(0);
  const activeOffice = GLOBAL_OFFICES[selectedOffice];

  return (
    <section className="py-20 sm:py-28 bg-estate-cream text-estate-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="International Export & Operations"
          title="From Ethiopia to the world."
          subtitle="Queen of Sheba Highland Estate Co. connects highland agricultural micro-lots with international specialty partners through four verified operational hubs."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office Selector Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {GLOBAL_OFFICES.map((office, idx) => {
              const isSelected = selectedOffice === idx;

              return (
                <button
                  key={office.countryCode}
                  onClick={() => setSelectedOffice(idx)}
                  className={`w-full text-left p-5 border transition-all duration-300 flex items-center justify-between rounded-xl ${
                    isSelected
                      ? 'bg-estate-forest text-estate-sand border-estate-gold shadow-lg translate-x-1'
                      : 'bg-white text-estate-forest border-estate-charcoal/10 hover:border-estate-gold/60'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">{office.countryFlag}</span>
                    <div>
                      <h4
                        className={`font-serif text-lg font-medium leading-tight ${
                          isSelected ? 'text-estate-sand' : 'text-estate-forest'
                        }`}
                      >
                        {office.country}
                      </h4>
                      <p
                        className={`text-xs font-light mt-0.5 ${
                          isSelected ? 'text-estate-gold-light' : 'text-estate-muted'
                        }`}
                      >
                        {office.city}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Hub Feature Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-estate-gold/30 p-8 sm:p-10 shadow-xl relative">
            <div className="flex items-center justify-between border-b border-estate-charcoal/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{activeOffice.countryFlag}</span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-estate-forest">
                    {activeOffice.country} Operations
                  </h3>
                  <p className="text-xs uppercase tracking-luxury text-estate-gold font-sans font-semibold mt-0.5">
                    {activeOffice.role}
                  </p>
                </div>
              </div>
              <Building2 className="w-8 h-8 text-estate-forest/20 hidden sm:block" />
            </div>

            <div className="space-y-6">
              {/* Physical Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-estate-muted font-semibold">
                    Address & Regional Location
                  </h5>
                  <p className="text-base text-estate-forest font-serif mt-1">
                    {activeOffice.address}
                  </p>
                </div>
              </div>

              {/* Verified Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-estate-muted font-semibold">
                    Direct Corporate Line
                  </h5>
                  <a
                    href={`tel:${activeOffice.phoneRaw}`}
                    className="text-base sm:text-lg text-estate-forest font-serif font-medium hover:text-estate-gold transition-colors mt-1 inline-block"
                  >
                    {activeOffice.phone}
                  </a>
                </div>
              </div>

              {/* Direct Inquiries */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-estate-cream flex items-center justify-center text-estate-forest flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-estate-muted font-semibold">
                    Communications & Sourcing
                  </h5>
                  <a
                    href={`mailto:${activeOffice.email}`}
                    className="text-base text-estate-forest font-serif hover:text-estate-gold transition-colors mt-1 inline-block"
                  >
                    {activeOffice.email}
                  </a>
                </div>
              </div>

              {/* Export Guarantee Note */}
              <div className="p-4 bg-estate-sand border border-estate-charcoal/10 flex items-center gap-3 text-xs text-estate-forest">
                <CheckCircle2 className="w-4 h-4 text-estate-gold flex-shrink-0" />
                <span>
                  Official registered branch of Queen of Sheba Highland Estate Co. Providing direct traceability, customs clearance, and cold-chain sample delivery.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
