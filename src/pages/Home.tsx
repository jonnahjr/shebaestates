import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SectionHeading } from '../components/SectionHeading';
import { BotanicalDiamondCard } from '../components/BotanicalDiamondCard';
import { QualityProcess } from '../components/QualityProcess';
import { OriginCoffees } from '../components/OriginCoffees';
import { CertificationsMarquee } from '../components/CertificationsMarquee';
import { StatsBand } from '../components/StatsBand';
import { Testimonials } from '../components/Testimonials';
import { GlobalPresence } from '../components/GlobalPresence';
import { SEO } from '../components/SEO';
import { BOTANICAL_DIAMONDS } from '../data/products';
import { SUSTAINABILITY_PILLARS, TIMELINE_ITEMS, COMPANY_INFO } from '../data/company';
import { JOURNAL_ARTICLES } from '../data/journal';

export const Home: React.FC = () => {
  return (
    <MainLayout isHeroPage={true}>
      <SEO
        title="Botanical Diamonds from the Ethiopian Highlands"
        description={COMPANY_INFO.subTagline}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center text-center overflow-hidden bg-estate-forest">
        {/* Background Image with Dark Vignette Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ethiopian_highlands_sunrise_1789479048831.jpg"
            alt="Ethiopian Highlands Sunrise at Queen of Sheba Estate"
            className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-estate-forest via-estate-forest/50 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-estate-forest/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-estate-gold/40 bg-black/40 backdrop-blur-md mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-estate-gold" />
            <span className="text-[11px] uppercase tracking-luxury text-estate-gold font-sans font-semibold">
              QUEEN OF SHEBA HIGHLAND ESTATE
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-estate-sand font-normal leading-[1.08] tracking-tight text-shadow-hero max-w-4xl">
            Botanical Diamonds <br className="hidden sm:inline" />
            <span className="italic font-light text-estate-gold-light">
              from the Ethiopian Highlands.
            </span>
          </h1>

          {/* Supporting Manifesto */}
          <p className="mt-6 sm:mt-8 text-base sm:text-xl font-light text-estate-sand/90 max-w-2xl leading-relaxed">
            Exceptional coffee, saffron, vanilla, and macadamia cultivated with care, rooted in the land, and prepared for the world.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 bg-estate-gold text-estate-forest text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold-light hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 rounded-full"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-estate-sand/40 text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-sand hover:text-estate-forest transition-all duration-300 rounded-full text-center"
            >
              Discover Our Story
            </Link>
          </div>

          {/* Micro Origin Badges */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-xs text-estate-sand/80 font-light">
            <div>
              <span className="block font-serif text-estate-gold text-lg">1,800–2,250m</span>
              <span>Highland Altitude</span>
            </div>
            <div>
              <span className="block font-serif text-estate-gold text-lg">Lake Tana</span>
              <span>Volcanic Basin</span>
            </div>
            <div>
              <span className="block font-serif text-estate-gold text-lg">4 Diamonds</span>
              <span>Singular Harvests</span>
            </div>
            <div>
              <span className="block font-serif text-estate-gold text-lg">4 Hubs</span>
              <span>Verified Global Trade</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-estate-sand/60">
          <span className="text-[10px] uppercase tracking-widest font-light">Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-estate-gold" />
        </div>
      </section>

      {/* 1b. ESTATE STATISTICS BAND */}
      <StatsBand />

      {/* 2. INTRODUCTION & PHILOSOPHY SECTION */}
      <section className="py-24 sm:py-36 bg-gradient-to-b from-estate-sand via-estate-cream/30 to-estate-sand text-estate-forest relative overflow-hidden">
        {/* Subtle Decorative Background Watermark & Radial Glows */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035] font-serif text-[180px] lg:text-[240px] font-bold text-estate-forest leading-none tracking-widest whitespace-nowrap overflow-hidden">
          SHEBA
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-estate-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-estate-olive/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col: Big Editorial Typography & Illuminated Quote (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Eyebrow with Expanding Gold Line */}
              <div className="flex items-center gap-3 mb-2 group/eyebrow cursor-default">
                <span className="h-[1.5px] w-8 bg-estate-gold transition-all duration-500 ease-out group-hover/eyebrow:w-14" />
                <p className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold font-sans">
                  OUR PHILOSOPHY
                </p>
              </div>

              {/* Headline with Smooth Typography Reveal */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.14] text-estate-forest">
                Where exceptional agriculture <br className="hidden sm:inline" />
                <span className="italic text-estate-moss hover:text-estate-gold transition-colors duration-500 cursor-default">
                  meets Ethiopian heritage.
                </span>
              </h2>

              {/* Illuminated Luxury Quote Card with Subtle Hover Lift */}
              <div className="relative mt-6 p-6 sm:p-8 bg-white/70 backdrop-blur-sm border-l-2 border-estate-gold shadow-sm hover:shadow-xl hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1 rounded-r-2xl group/quote">
                <span className="text-5xl font-serif text-estate-gold/30 absolute top-2 left-3 select-none leading-none group-hover/quote:text-estate-gold/60 transition-colors duration-500">
                  “
                </span>
                <p className="text-lg sm:text-xl font-serif text-estate-forest/90 italic pl-5 leading-relaxed relative z-10">
                  "We do not rush nature. We listen to the soil, respect the canopy, and preserve the botanicals that have defined the Horn of Africa for millennia."
                </p>
                <div className="mt-4 pl-5 flex items-center gap-2 text-[11px] uppercase tracking-wider text-estate-gold font-sans font-medium">
                  <span className="w-2 h-2 rounded-full bg-estate-gold inline-block shadow-[0_0_8px_rgba(194,162,111,0.8)] animate-pulse" />
                  <span>Highland Terroir Stewardship Charter</span>
                </div>
              </div>
            </div>

            {/* Right Col: Story Narrative & Micro-Card Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-estate-charcoal/85 font-light text-base leading-relaxed border-l-2 border-estate-charcoal/10 hover:border-estate-gold/60 transition-colors duration-500 pl-6 sm:pl-8">
              <p>
                Queen of Sheba Highland Estate Co. is dedicated to producing four top-tier agricultural products: <strong className="font-medium text-estate-forest">Gesha Coffee, Negin Saffron, Highland Vanilla, and Macadamia</strong>.
              </p>
              <p>
                All our Botanical Diamonds are sourced exclusively from pristine highland estates around Lake Tana and the Amhara Region. By upholding regenerative farming methods and prioritizing soil microbiological vitality, we guarantee consistent and extraordinary offerings for our international partners.
              </p>

              {/* Interactive 4 Botanical Diamonds Micro-Cards */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {[
                  { name: '01 Gesha Coffee', desc: 'Zege Peninsula' },
                  { name: '02 Negin Saffron', desc: 'Tana Plateau' },
                  { name: '03 Highland Vanilla', desc: 'Lake Canopy' },
                  { name: '04 Macadamia', desc: 'Amhara Basin' },
                ].map(item => (
                  <div
                    key={item.name}
                    className="p-3 bg-white/80 border border-estate-charcoal/10 rounded-xl hover:border-estate-gold/60 hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-out group/chip cursor-default"
                  >
                    <p className="text-xs font-serif font-semibold text-estate-forest group-hover/chip:text-estate-gold transition-colors duration-300">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-estate-muted font-light mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Discover Our Story CTA Button with Hover Animation */}
              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold hover:text-estate-forest transition-all duration-400 ease-out shadow-md hover:shadow-xl hover:-translate-y-0.5 rounded-full group/btn"
                >
                  <span>Discover our story</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR BOTANICAL DIAMONDS SECTION */}
      <section className="py-24 sm:py-36 bg-gradient-to-b from-estate-cream via-[#FAF6F0] to-estate-cream text-estate-forest relative overflow-hidden">
        {/* Atmospheric Background Watermark & Radial Lighting */}
        <div className="absolute right-0 top-20 select-none pointer-events-none opacity-[0.03] font-serif text-[180px] lg:text-[250px] font-bold text-estate-forest leading-none tracking-widest whitespace-nowrap overflow-hidden">
          DIAMONDS
        </div>
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-estate-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] rounded-full bg-estate-olive/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3 group/eyebrow cursor-default">
                <span className="h-[1.5px] w-8 bg-estate-gold transition-all duration-500 ease-out group-hover/eyebrow:w-14" />
                <p className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold font-sans">
                  The Estate Collection
                </p>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-estate-forest">
                Four Botanical Diamonds
              </h2>
              <p className="mt-4 text-sm sm:text-base text-estate-muted font-light leading-relaxed max-w-xl">
                Exceptional products cultivated from the volcanic highlands of Ethiopia, each reflecting singular terroir and generational stewardship.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-estate-forest text-estate-sand hover:bg-estate-gold hover:text-estate-forest transition-all duration-400 ease-out text-xs uppercase tracking-widest font-semibold rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 group/btn shrink-0"
            >
              <span>View Specifications & Lots</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {BOTANICAL_DIAMONDS.map((diamond, index) => (
              <BotanicalDiamondCard key={diamond.slug} diamond={diamond} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE PRODUCT FEATURE SECTION (Gesha Coffee) */}
      <section className="py-24 sm:py-32 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Product Image with Parallax Vibe */}
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-estate-gold/30 shadow-2xl">
                <img
                  src="/assets/images/coffee_roasting_drum_1789479312480.jpg"
                  alt="Gesha and Zege Coffee Craftsmanship"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Rounded Terroir Profile Floating Box */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-estate-forest/90 backdrop-blur-md border border-estate-gold/35 rounded-2xl shadow-xl text-xs transition-all duration-500 hover:border-estate-gold hover:bg-estate-forest/95 hover:-translate-y-1">
                  <span className="text-estate-gold uppercase tracking-widest font-semibold flex items-center gap-1.5 text-[11px] mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-estate-gold animate-pulse" />
                    Terroir Profile
                  </span>
                  <span className="text-estate-sand/90 text-xs font-light block leading-relaxed">
                    Zege Peninsula Micro-Lot • 1,950 MASL • Natural Sun-Dried
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-estate-gold font-semibold">
                <span className="w-6 h-[1px] bg-estate-gold" />
                <span>BOTANICAL DIAMOND 01</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-estate-sand font-normal leading-tight">
                Born at altitude. <br />
                <span className="italic text-estate-gold-light">Defined by character.</span>
              </h2>

              <p className="text-base sm:text-lg text-estate-sand/80 font-light leading-relaxed">
                Originating from our pristine highland estates, our Gesha and Zege coffee delights enthusiasts with its profound flavor profile, marked by radiant floral jasmine and crisp bergamot notes.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="p-4 bg-estate-forest-light/40 border border-white/10 rounded-2xl hover:border-estate-gold/40 hover:-translate-y-0.5 transition-all duration-300">
                  <h4 className="text-estate-gold font-serif text-base mb-1">Highland Altitude</h4>
                  <p className="text-estate-sand/70 font-light">1,850m to 2,150m slow-maturing mountain microclimate</p>
                </div>
                <div className="p-4 bg-estate-forest-light/40 border border-white/10 rounded-2xl hover:border-estate-gold/40 hover:-translate-y-0.5 transition-all duration-300">
                  <h4 className="text-estate-gold font-serif text-base mb-1">Native Canopy</h4>
                  <p className="text-estate-sand/70 font-light">100% shade-grown under ancient indigenous trees</p>
                </div>
                <div className="p-4 bg-estate-forest-light/40 border border-white/10 rounded-2xl hover:border-estate-gold/40 hover:-translate-y-0.5 transition-all duration-300">
                  <h4 className="text-estate-gold font-serif text-base mb-1">Cup Profile</h4>
                  <p className="text-estate-sand/70 font-light">Bergamot, wild jasmine, honeyed stone fruit finish</p>
                </div>
                <div className="p-4 bg-estate-forest-light/40 border border-white/10 rounded-2xl hover:border-estate-gold/40 hover:-translate-y-0.5 transition-all duration-300">
                  <h4 className="text-estate-gold font-serif text-base mb-1">Natural Curing</h4>
                  <p className="text-estate-sand/70 font-light">18–24 days slow sun drying on raised African beds</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/products/coffee"
                  className="relative group/btn inline-flex items-center overflow-hidden px-8 py-4 text-xs uppercase tracking-widest font-sans font-semibold border border-estate-gold/70 text-estate-sand transition-all duration-400 ease-out hover:border-estate-gold hover:shadow-[0_0_18px_rgba(194,162,111,0.3)] hover:-translate-y-0.5 rounded-full"
                >
                  <span className="absolute inset-0 bg-estate-gold transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                  <span className="relative z-10 inline-flex items-center gap-3 group-hover/btn:text-estate-forest transition-colors duration-300">
                    <span>Discover Gesha Coffee</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4b. SINGLE-ORIGIN WHOLESALE COFFEE COLLECTION */}
      <OriginCoffees />

      {/* 4c. CERTIFICATIONS & MEMBERSHIPS MARQUEE */}
      <CertificationsMarquee />

      {/* 5. ORIGIN / ESTATE SECTION */}
      <section className="py-24 sm:py-32 bg-estate-sand text-estate-forest relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Estate Terroir"
            title="From the Ethiopian Highlands"
            subtitle="The cradle of botanical agriculture: rich volcanic soil, pristine air, and generations of ancestral knowledge."
            align="center"
          />

          <div className="mt-16 relative overflow-hidden border border-estate-charcoal/10 shadow-2xl">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
              <img
                src="/assets/images/ethiopian_farmer_harvest_1789479131548.jpg"
                alt="Highland Agriculture in Amhara Region, Ethiopia"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-estate-forest/90 via-estate-forest/50 to-transparent" />

              {/* Text Overlay on Landscape */}
              <div className="absolute inset-0 p-6 sm:p-12 lg:p-16 flex flex-col justify-center max-w-xl text-estate-sand">
                <p className="text-[11px] uppercase tracking-widest2 text-estate-gold font-sans font-semibold mb-2">
                  Lake Tana Basin • Bahir Dar, Ethiopia
                </p>
                <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white mb-4">
                  Highland soil. <br />
                  Clean air. <br />
                  Generations of knowledge.
                </h3>
                <p className="text-xs sm:text-sm font-light text-estate-sand/90 leading-relaxed mb-6">
                  Perched high on the Ethiopian plateau where the Blue Nile begins its journey, our soils are enriched with ancient volcanic minerals that lend our coffee, saffron, vanilla, and macadamia their singular density and aromatics.
                </p>
                <div>
                  <Link
                    to="/estate"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-estate-gold text-estate-forest text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold-light transition-all rounded-full"
                  >
                    <span>Explore the Terroir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR STORY & TIMELINE */}
      <section className="py-24 sm:py-36 bg-gradient-to-b from-estate-cream via-estate-sand/60 to-estate-cream text-estate-forest relative overflow-hidden">
        {/* Subtle Decorative Background Watermark & Lighting */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-serif text-[180px] lg:text-[260px] font-bold text-estate-forest leading-none tracking-widest whitespace-nowrap overflow-hidden">
          HERITAGE
        </div>
        <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-estate-gold/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-estate-olive/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            eyebrow="Our Heritage & Vision"
            title="Rooted in Ethiopia. Growing for the world."
            subtitle="The journey of Queen of Sheba Highland Estate Co.: from ancestral land stewardship to a modern international export house."
            align="center"
          />

          {/* Timeline Grid with Connecting Bridge */}
          <div className="mt-16 sm:mt-24 relative">
            {/* Horizontal Track Line connecting the 5 steps on desktop */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-estate-gold/15 via-estate-gold/40 to-estate-gold/15 pointer-events-none z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5 relative z-10">
              {TIMELINE_ITEMS.map((item, idx) => (
                <div
                  key={item.step}
                  className="group relative p-6 sm:p-7 bg-white/95 backdrop-blur-sm border border-estate-charcoal/10 rounded-2xl flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-3 hover:shadow-[0_24px_48px_-15px_rgba(22,40,29,0.18)] hover:border-estate-gold/70 overflow-hidden cursor-default"
                >
                  {/* Top Animated Gold Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-estate-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />

                  <div>
                    {/* Glowing Timeline Indicator Node */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-estate-gold/40 group-hover:bg-estate-gold group-hover:shadow-[0_0_10px_rgba(194,162,111,0.9)] transition-all duration-400 block" />
                      </div>

                      <span className="text-[10px] uppercase tracking-wider text-estate-muted font-sans font-semibold px-2.5 py-1 bg-estate-cream rounded-full border border-estate-charcoal/10 group-hover:border-estate-gold/40 group-hover:bg-estate-forest group-hover:text-estate-sand transition-all duration-400">
                        {item.phase}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-estate-forest group-hover:text-estate-olive transition-colors duration-300 leading-snug mb-3">
                      {item.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-xs text-estate-charcoal/75 font-light leading-relaxed group-hover:text-estate-charcoal transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Milestone Footer Indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] uppercase tracking-widest text-estate-muted font-sans">
                    <span className="group-hover:text-estate-gold transition-colors duration-300">
                      Stage 0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-estate-gold/30 group-hover:bg-estate-gold transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUSTAINABILITY SECTION */}
      <section className="py-24 sm:py-32 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Environmental Responsibility"
            title="Growing with the land, not against it."
            subtitle="Our four pillars of ecological stewardship protect soil biodiversity, watershed purity, and agricultural livelihoods."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SUSTAINABILITY_PILLARS.map(pillar => (
              <div
                key={pillar.number}
                className="p-8 bg-white border border-estate-charcoal/10 flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <div>
                  <h3 className="font-serif text-xl text-estate-forest mb-1 font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase tracking-luxury text-estate-moss font-semibold mb-4">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs text-estate-muted font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-estate-charcoal/10 text-[11px] font-sans text-estate-forest font-medium">
                  {pillar.impactMetric}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/sustainability"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-estate-forest hover:text-estate-gold transition-colors pb-1 border-b border-estate-forest"
            >
              <span>Read Our Full Sustainability Charter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. QUALITY / CRAFTSMANSHIP PROCESS */}
      <QualityProcess />

      {/* 9. INTERNATIONAL EXPORT / VERIFIED GLOBAL PRESENCE */}
      <GlobalPresence />

      {/* 9b. PARTNER TESTIMONIALS */}
      <Testimonials />

      {/* 10. JOURNAL / STORIES PREVIEW */}
      <section className="py-24 sm:py-32 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="The Estate Journal"
              title="Stories from the Highlands"
              subtitle="Agronomy notes, harvest chronicles, and botanical reflections from our Ethiopian terroir."
              align="left"
            />
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-estate-forest hover:text-estate-gold transition-colors pb-1 border-b border-estate-forest/30"
            >
              <span>View All Journal Entries</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.slice(0, 3).map(article => (
              <article
                key={article.id}
                className="group bg-white border border-estate-charcoal/10 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-estate-forest text-estate-gold px-3 py-1 font-semibold">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-estate-muted font-light mb-2">
                      {article.date} • {article.readTime}
                    </div>
                    <h3 className="font-serif text-xl font-medium text-estate-forest leading-snug group-hover:text-estate-gold transition-colors mb-3">
                      {article.title}
                    </h3>
                    <p className="text-xs text-estate-charcoal/80 font-light leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-estate-charcoal/10 flex items-center justify-between text-xs">
                    <span className="text-estate-muted font-light">{article.author}</span>
                    <Link
                      to={`/journal/${article.slug}`}
                      className="inline-flex items-center gap-1 text-estate-forest font-semibold uppercase tracking-widest text-[11px] group-hover:text-estate-gold"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CONTACT CTA */}
      <section className="relative py-24 sm:py-32 bg-estate-forest text-estate-sand overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/coffee_drying_beds_1789479252074.jpg"
            alt="Coffee Drying Beds at Queen of Sheba Highland Estate"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-estate-forest/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold">
            PARTNERSHIPS & SOURCING
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-estate-sand">
            Let's grow something exceptional.
          </h2>

          <p className="text-base sm:text-lg font-light text-estate-sand/80 max-w-xl mx-auto leading-relaxed">
            For international trade partnerships, green coffee allocations, bulk saffron inquiries, or bespoke private sourcing, contact our estate directors.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-estate-gold text-estate-forest text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold-light transition-all shadow-xl rounded-full text-center"
            >
              Contact Us & Inquire
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-estate-sand/40 text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-sand hover:text-estate-forest transition-all rounded-full text-center"
            >
              Explore Estate Store
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
