import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { JOURNAL_ARTICLES } from '../data/journal';

export const Journal: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', 'Coffee', 'Saffron', 'Vanilla', 'Macadamia', 'Agroforestry'];

  const filteredArticles =
    selectedTag === 'all'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter(a =>
          a.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())
        );

  return (
    <MainLayout>
      <SEO
        title="The Estate Journal | Stories from the Ethiopian Highlands"
        description="Read articles, harvest notes, and agro-ecological stories from Queen of Sheba Highland Estate Co."
      />

      {/* Hero Banner */}
      <section className="pt-36 sm:pt-44 pb-20 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/coffee_drying_beds_1789479252074.jpg"
            alt="Estate Journal Header"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/80 to-estate-forest" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest2 text-estate-gold font-semibold">
            FIELD REFLECTIONS & HARVEST NOTES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight text-estate-sand">
            The Estate Journal
          </h1>
          <p className="mt-4 text-base sm:text-lg font-light text-estate-sand/80 max-w-2xl mx-auto leading-relaxed">
            Exploring the botanical heritage, delicate harvesting techniques, and seasonal rhythms of Ethiopia's highland agricultural plateaus.
          </p>
        </div>
      </section>

      {/* Tag Filters */}
      <section className="bg-estate-cream/60 border-b border-estate-charcoal/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-x-auto">
          <div className="flex gap-2 whitespace-nowrap">
            {allTags.map(tag => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-5 py-1.5 text-xs uppercase tracking-wider font-sans transition-all rounded-full ${
                    active
                      ? 'bg-estate-forest text-estate-sand shadow-sm'
                      : 'bg-white text-estate-muted hover:text-estate-forest border border-estate-charcoal/10'
                  }`}
                >
                  {tag === 'all' ? 'All Stories' : tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 sm:py-28 bg-estate-sand text-estate-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredArticles.map(article => (
              <article
                key={article.id}
                className="bg-white border border-estate-charcoal/10 overflow-hidden flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:shadow-[0_22px_45px_-12px_rgba(22,40,29,0.18)] hover:border-estate-gold/50 group relative"
              >
                {/* Top Gold Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-estate-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center z-10" />

                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-estate-forest text-estate-gold px-3 py-1 font-semibold z-10">
                    {article.category}
                  </span>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="text-xs text-estate-muted font-light mb-2">
                      {article.date} • {article.readTime}
                    </div>

                    <h2 className="font-serif text-2xl text-estate-forest font-medium leading-snug group-hover:text-estate-gold transition-colors duration-300 mb-3">
                      {article.title}
                    </h2>

                    <p className="text-xs font-serif italic text-estate-moss mb-3">
                      {article.subtitle}
                    </p>

                    <p className="text-sm font-light text-estate-charcoal/80 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-estate-charcoal/10 flex items-center justify-between text-xs">
                    <span className="text-estate-muted font-light">{article.author}</span>
                    <Link
                      to={`/journal/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-estate-forest font-semibold uppercase tracking-widest text-xs group-hover:text-estate-gold transition-colors duration-300"
                    >
                      <span className="relative">
                        Read Story
                        <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-estate-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-estate-gold" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
