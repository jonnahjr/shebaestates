import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { COMPANY_INFO } from '../data/company';

export const Privacy: React.FC = () => {
  return (
    <MainLayout>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection practices of Queen of Sheba Highland Estate Co."
      />

      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-[10px] uppercase tracking-widest text-estate-gold font-semibold">
            LEGAL & DATA COMPLIANCE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal mt-2 text-estate-sand">
            Privacy Policy
          </h1>
          <p className="text-xs text-estate-sand/70 mt-2">
            Last updated: February 2026 • Queen of Sheba Highland Estate Co.
          </p>
        </div>
      </section>

      <section className="py-20 bg-estate-sand text-estate-forest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm font-light text-estate-charcoal/80 leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">1. Overview</h2>
            <p>
              Queen of Sheba Highland Estate Co. respects your privacy regarding any information we may collect while operating our website ({COMPANY_INFO.website}) and coordinating international agricultural trade inquiries.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">2. Information Collection</h2>
            <p>
              We collect personal information such as your name, corporate email address, telephone number, and delivery preferences only when voluntarily submitted through our reserve checkout, commercial lot inquiry forms, or direct correspondence with our offices in Ethiopia, San Marino, the United Arab Emirates, or the United States.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">3. Utilization of Information</h2>
            <p>
              Your contact information is strictly utilized to process product allocations, fulfill sample requests, provide phytosanitary and export documentation, and communicate harvest availability. We do not sell, rent, or trade your personal details to external marketing entities.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">4. Data Security & Retention</h2>
            <p>
              We implement industry-standard administrative and technical safeguards to secure collected business data against unauthorized access, disclosure, or alteration. Data is retained only for the duration necessary to satisfy ongoing agricultural supply contracts and legal accounting compliance.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-estate-forest mb-2">5. Inquiries & Rights</h2>
            <p>
              For inquiries regarding data access, updates, or deletion, please direct inquiries to our data protection officer at <a href="mailto:info@shebaestates.com" className="text-estate-gold underline">info@shebaestates.com</a>.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
