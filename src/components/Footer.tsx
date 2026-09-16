import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { GLOBAL_OFFICES } from '../data/company';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterDone(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterDone(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-estate-dark text-estate-sand/90 border-t border-estate-gold/20 pt-16 sm:pt-20 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand & Mission Column (Col 1-2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logo-2.png"
                alt="Queen of Sheba Highland Estate Co."
                className="h-14 w-auto object-contain"
              />
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-estate-sand font-semibold tracking-wide leading-tight">
                  QUEEN OF SHEBA
                </h3>
                <p className="text-[10px] uppercase tracking-[0.22em] text-estate-gold font-normal mt-0.5">
                  HIGHLAND ESTATE CO. 🇪🇹
                </p>
              </div>
            </div>

            <p className="text-sm font-light text-estate-sand/70 leading-relaxed max-w-md">
              Cultivating the Four Botanical Diamonds — Gesha Coffee, Negin Saffron, Highland Vanilla, and Macadamia — sustainably rooted in Ethiopia’s high-altitude volcanic soils and prepared with generational craftsmanship for discerning international partners.
            </p>

            <div className="flex flex-col space-y-2 text-xs text-estate-sand/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-estate-gold flex-shrink-0" />
                <a href="mailto:info@shebaestates.com" className="hover:text-estate-gold transition-colors">
                  info@shebaestates.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-estate-gold flex-shrink-0" />
                <span>Lake Tana Basin, Bahir Dar, Amhara Region, Ethiopia</span>
              </div>
            </div>

            {/* Newsletter — Harvest Dispatch */}
            <div className="pt-4 max-w-md">
              <p className="text-[11px] uppercase tracking-widest text-estate-gold/80 font-semibold mb-2">
                The Harvest Dispatch
              </p>
              <p className="text-xs text-estate-sand/60 font-light leading-relaxed mb-3">
                Seasonal harvest openings, micro-lot releases, and estate journal entries — once per season, never more.
              </p>
              {newsletterDone ? (
                <div className="flex items-center gap-2 p-3 bg-estate-forest/60 border border-estate-gold/40 text-xs text-estate-gold-light">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Welcome aboard — your first dispatch arrives with the next harvest.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex overflow-hidden rounded-full border border-white/15 focus-within:border-estate-gold/60 transition-colors bg-white/5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={e => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    aria-label="Email address for harvest newsletter"
                    className="flex-1 min-w-0 px-4 py-2.5 bg-transparent text-xs text-estate-sand placeholder:text-estate-sand/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to the Harvest Dispatch"
                    className="px-4 m-1 rounded-full bg-estate-gold text-estate-forest text-[10px] uppercase tracking-widest font-semibold transition-colors hover:bg-estate-gold-light flex items-center gap-1.5"
                  >
                    <Send className="w-3 h-3" />
                    <span className="hidden sm:inline">Join</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Navigation Links (Col 3) */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold">
              Explore Estate
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-estate-sand/80">
              <li>
                <Link to="/" className="hover:text-estate-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-estate-gold transition-colors">Our Story & Heritage</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-estate-gold transition-colors">Botanical Diamonds</Link>
              </li>
              <li>
                <Link to="/estate" className="hover:text-estate-gold transition-colors">Highland Terroir</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-estate-gold transition-colors">Sustainability Pillars</Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-estate-gold transition-colors">Estate Journal</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-estate-gold transition-colors">Store / Direct Order</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-estate-gold transition-colors">Contact & Sourcing</Link>
              </li>
            </ul>
          </div>

          {/* Botanical Diamonds Column (Col 4) */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold">
              Botanical Diamonds
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-estate-sand/80">
              <li>
                <Link to="/products/coffee" className="group flex items-center justify-between hover:text-estate-gold transition-colors">
                  <span>01 — Gesha / Zege Coffee</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products/saffron" className="group flex items-center justify-between hover:text-estate-gold transition-colors">
                  <span>02 — Negin Saffron</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products/vanilla" className="group flex items-center justify-between hover:text-estate-gold transition-colors">
                  <span>03 — Highland Vanilla</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/products/macadamia" className="group flex items-center justify-between hover:text-estate-gold transition-colors">
                  <span>04 — Highland Macadamia</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <span className="text-[11px] uppercase tracking-widest text-estate-gold/70 block mb-1">
                Store Categories
              </span>
              <p className="text-xs text-estate-sand/60">
                Specialty Coffee • Artisan Spices • Whole Botanical Diamonds
              </p>
            </div>
          </div>

          {/* Global Presence Column (Col 5) */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest2 text-estate-gold font-semibold">
              Global Presence
            </h4>
            <div className="space-y-3.5 text-xs text-estate-sand/75">
              {GLOBAL_OFFICES.map(office => (
                <div key={office.countryCode} className="border-l border-estate-gold/30 pl-2.5 space-y-0.5">
                  <div className="flex items-center gap-1.5 font-medium text-estate-sand">
                    <span>{office.countryFlag}</span>
                    <span>{office.country}</span>
                    <span className="text-[10px] text-estate-gold/80 font-mono font-normal">({office.city.split(' ')[0]})</span>
                  </div>
                  <div className="text-[11px] text-estate-sand/60 font-light truncate">
                    {office.address}
                  </div>
                  <div className="text-[11px] text-estate-gold">
                    <Phone className="w-2.5 h-2.5 inline mr-1" />
                    <a href={`tel:${office.phoneRaw}`} className="hover:underline">
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-estate-sand/60">
          <p>© {new Date().getFullYear()} Queen of Sheba Highland Estate Co. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-estate-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-estate-gold transition-colors">
              Terms & Export Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-estate-gold hover:text-estate-sand transition-colors font-medium"
            >
              Back to Top <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
