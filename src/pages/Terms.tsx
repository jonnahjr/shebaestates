import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  return (
    <MainLayout>
      <SEO
        title="Terms & Export Conditions"
        description="Terms of service and commercial export terms for Queen of Sheba Highland Estate Co."
      />

      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase tracking-widest text-estate-gold font-semibold">
            COMMERCIAL & EXPORT GOVERNANCE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-2 text-estate-sand">
            Terms of Service & Export
          </h1>
          <p className="text-xs text-estate-sand/70 mt-2">
            Effective Date: 2026 • Queen of Sheba Highland Estate Co.
          </p>
        </div>
      </section>

      <section className="py-20 bg-estate-sand text-estate-forest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm font-light text-estate-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing the website and commercial portals of Queen of Sheba Highland Estate Co., you acknowledge and agree to be bound by these Terms of Service and applicable international agricultural trade regulations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">2. Agricultural Harvests & Allocations</h2>
            <p>
              All agricultural offerings — including Gesha Coffee, Negin Saffron, Highland Vanilla, and Macadamia — are natural seasonal harvests subject to harvest-year yield variances, climate parameters, and phytosanitary certification. Batch specifications and moisture grades are verified prior to export dispatch.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">3. Commercial Export & Incoterms</h2>
            <p>
              Wholesale, green coffee, and commercial lot contracts are governed under mutually executed international sales agreements referencing standard Incoterms (e.g., FOB Djibouti, CIF, or CIP destination airports via Ethiopian Airlines Cargo).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">4. Intellectual Property</h2>
            <p>
              The names "Queen of Sheba Highland Estate Co.", "Botanical Diamonds", estate emblems, photographs, and botanical dossiers are proprietary intellectual property. Unauthorized reproduction or commercial misattribution is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">5. Governing Law</h2>
            <p>
              These conditions are governed by the laws of the Federal Democratic Republic of Ethiopia, alongside jurisdictional stipulations outlined in bilateral export agreements coordinated through our international corporate hubs.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
