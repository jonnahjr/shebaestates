import { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  User,
  Building2,
  Globe2,
  MessageSquare,
  ShieldCheck,
  Heading1 as HeadingIcon
} from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { GLOBAL_OFFICES, COMPANY_INFO } from '../data/company';
import { useToast } from '../context/ToastContext';

const inputBase =
  'w-full px-4 py-3 bg-estate-cream/40 border border-estate-charcoal/15 rounded-xl text-sm text-estate-charcoal placeholder:text-estate-muted/60 focus:border-estate-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-estate-gold/20 transition-all duration-300';

const labelBase =
  'flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-estate-forest font-semibold mb-1.5 font-sans';

export const Contact: React.FC = () => {
  const { showToast } = useToast();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productInterest: 'coffee',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulated API dispatch with clear documented integration point
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast('Your inquiry has been transmitted to Queen of Sheba Highland Estate.');
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        productInterest: 'coffee',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <MainLayout>
      <SEO
        title="Contact & Global Sourcing | Queen of Sheba Highland Estate Co."
        description="Get in touch with Queen of Sheba Highland Estate Co. for commercial coffee sourcing, saffron allocations, vanilla orders, and international partnerships."
      />

      {/* Hero Header */}
      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ethiopian_highlands_sunrise_1789479048831.jpg"
            alt="Contact Estate Background"
            className="w-full h-full object-cover opacity-20 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/80 to-estate-forest" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none animate-drift-slow" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold">
            <span className="h-px w-8 bg-estate-gold/50" />
            GLOBAL PARTNERSHIPS &amp; TRADE INQUIRIES
            <span className="h-px w-8 bg-estate-gold/50" />
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-estate-sand">
            Contact the Estate
          </h1>
          <p className="mt-4 text-base sm:text-lg font-light text-estate-sand/80 max-w-2xl mx-auto leading-relaxed">
            For product inquiries, sample requests, green coffee reservations, and international
            distribution opportunities, connect with our trade desk.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Verified Global Offices */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest relative overflow-hidden">
        <div
          className="absolute -bottom-24 right-0 w-96 h-96 bg-estate-olive/10 rounded-full blur-3xl pointer-events-none animate-drift-slow"
          style={{ animationDelay: '-6s' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ── Form Column ── */}
            <Reveal className="lg:col-span-7">
              <div className="bg-white border border-estate-charcoal/10 p-8 sm:p-12 shadow-xl rounded-3xl relative overflow-hidden">
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-estate-gold to-transparent" />

                <div className="mb-8">
                  <span className="text-xs uppercase tracking-widest text-estate-gold font-semibold block mb-1">
                    Communication Desk
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-estate-forest">
                    Send a Direct Inquiry
                  </h2>
                  <p className="text-xs text-estate-muted font-light mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-estate-gold" />
                    Our directors respond within 24 business hours.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="py-14 text-center space-y-5 animate-scale-up">
                    <div className="w-20 h-20 rounded-full bg-estate-cream border border-estate-gold/40 flex items-center justify-center text-estate-gold mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-estate-forest">
                      Message Successfully Received
                    </h3>
                    <p className="text-sm text-estate-muted max-w-md mx-auto font-light leading-relaxed">
                      Thank you for reaching out to Queen of Sheba Highland Estate Co. Your inquiry
                      has been forwarded to our regional trade representative.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 px-7 py-3 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold hover:bg-estate-gold hover:text-estate-forest transition-colors rounded-full"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {errorMessage && (
                      <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl animate-fade-in">
                        {errorMessage}
                      </div>
                    )}

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelBase} htmlFor="contact-name">
                          <User className="w-3 h-3 text-estate-gold" />
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={e => setFormState({ ...formState, name: e.target.value })}
                          className={inputBase}
                          placeholder="e.g. Eleanor Vance"
                        />
                      </div>

                      <div>
                        <label className={labelBase} htmlFor="contact-email">
                          <Mail className="w-3 h-3 text-estate-gold" />
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={e => setFormState({ ...formState, email: e.target.value })}
                          className={inputBase}
                          placeholder="eleanor@company.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelBase} htmlFor="contact-phone">
                          <Phone className="w-3 h-3 text-estate-gold" />
                          Phone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formState.phone}
                          onChange={e => setFormState({ ...formState, phone: e.target.value })}
                          className={inputBase}
                          placeholder="+1 (555) 019-2834"
                        />
                      </div>

                      <div>
                        <label className={labelBase} htmlFor="contact-company">
                          <Building2 className="w-3 h-3 text-estate-gold" />
                          Company / Organization
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          value={formState.company}
                          onChange={e => setFormState({ ...formState, company: e.target.value })}
                          className={inputBase}
                          placeholder="e.g. Specialty Coffee Roasters Ltd."
                        />
                      </div>
                    </div>

                    {/* Country & Product Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelBase} htmlFor="contact-country">
                          <Globe2 className="w-3 h-3 text-estate-gold" />
                          Country of Origin / Destination *
                        </label>
                        <input
                          id="contact-country"
                          type="text"
                          required
                          value={formState.country}
                          onChange={e => setFormState({ ...formState, country: e.target.value })}
                          className={inputBase}
                          placeholder="e.g. United States / UAE / Germany"
                        />
                      </div>

                      <div>
                        <label className={labelBase} htmlFor="contact-interest">
                          <MapPin className="w-3 h-3 text-estate-gold" />
                          Botanical Interest
                        </label>
                        <select
                          id="contact-interest"
                          value={formState.productInterest}
                          onChange={e =>
                            setFormState({ ...formState, productInterest: e.target.value })
                          }
                          className={`${inputBase} cursor-pointer`}
                        >
                          <option value="coffee">01 — Gesha / Zege Coffee</option>
                          <option value="saffron">02 — Negin Saffron</option>
                          <option value="vanilla">03 — Highland Vanilla</option>
                          <option value="macadamia">04 — Highland Macadamia</option>
                          <option value="origins">Single-Origin Wholesale Lots</option>
                          <option value="multiple">Multiple Botanical Diamonds</option>
                          <option value="general">General Corporate / Press Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className={labelBase} htmlFor="contact-subject">
                        <HeadingIcon className="w-3 h-3 text-estate-gold" />
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formState.subject}
                        onChange={e => setFormState({ ...formState, subject: e.target.value })}
                        className={inputBase}
                        placeholder="e.g. Request for 2026 Gesha Micro-Lot Samples"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelBase} htmlFor="contact-message">
                        <MessageSquare className="w-3 h-3 text-estate-gold" />
                        Detailed Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                        className={`${inputBase} resize-none`}
                        placeholder="Please specify estimated volumes, delivery timelines, port destination, or specific lot requirements..."
                      />
                    </div>

                    {/* Submit — slide-fill pill */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/cta relative overflow-hidden w-full py-4 rounded-full border border-estate-gold/80 bg-estate-forest text-estate-sand text-xs uppercase tracking-widest font-semibold transition-all duration-400 ease-out hover:border-estate-gold disabled:opacity-70 disabled:pointer-events-none"
                    >
                      <span className="absolute inset-0 bg-estate-gold translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                      <span className="relative z-10 inline-flex items-center justify-center gap-2 group-hover/cta:text-estate-forest transition-colors duration-300">
                        <Send className="w-4 h-4" />
                        <span>
                          {isSubmitting ? 'Transmitting to Trade Desk...' : 'Transmit Inquiry'}
                        </span>
                      </span>
                    </button>

                    <p className="text-[10px] text-estate-muted text-center font-light pt-1 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-estate-gold/70" />
                      Your details are held in strict confidence in compliance with international
                      trade privacy regulations.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* ── Right Column: Central Correspondence + Global Hubs ── */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={100}>
                <div className="relative p-7 bg-estate-forest text-estate-sand border border-estate-gold/30 shadow-lg space-y-3 rounded-3xl overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-estate-gold/10 rounded-full blur-3xl pointer-events-none" />
                  <span className="relative text-[10px] uppercase tracking-widest text-estate-gold font-semibold">
                    Central Correspondence
                  </span>
                  <h3 className="relative font-serif text-xl text-estate-sand">
                    Queen of Sheba Highland Estate Co.
                  </h3>
                  <p className="relative text-xs text-estate-sand/80 font-light leading-relaxed">
                    Headquartered in the Amhara Region of Ethiopia, with permanent international
                    trade representations across Europe, the Gulf, and North America.
                  </p>
                  <div className="relative pt-2 text-xs text-estate-gold">
                    <Mail className="w-3.5 h-3.5 inline mr-2" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Verified Locations List */}
              <div className="space-y-4">
                {GLOBAL_OFFICES.map((office, idx) => (
                  <Reveal key={office.countryCode} delay={150 + idx * 80}>
                    <div className="group p-6 bg-white border border-estate-charcoal/10 rounded-2xl space-y-2.5 transition-all duration-400 ease-out hover:border-estate-gold/60 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                      {/* Gold accent strip on hover */}
                      <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-estate-gold via-estate-gold/50 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 font-serif text-lg text-estate-forest font-medium">
                          <span className="text-xl">{office.countryFlag}</span>
                          <span>{office.country}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-mono text-estate-muted">
                          {office.city.split(' ')[0]}
                        </span>
                      </div>

                      <p className="text-xs text-estate-muted font-light leading-relaxed flex items-start gap-1.5">
                        <MapPin className="w-3 h-3 text-estate-gold mt-0.5 shrink-0" />
                        {office.address}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-xs border-t border-estate-charcoal/5">
                        <a
                          href={`tel:${office.phoneRaw}`}
                          className="text-estate-forest font-serif font-medium hover:text-estate-gold flex items-center gap-1.5 transition-colors"
                        >
                          <Phone className="w-3 h-3 text-estate-gold" />
                          <span>{office.phone}</span>
                        </a>
                        <span className="text-[10px] text-estate-gold font-sans font-light text-right max-w-[45%]">
                          {office.role}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
