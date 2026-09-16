import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { MainLayout } from '../layouts/MainLayout';
import { SEO } from '../components/SEO';
import { JOURNAL_ARTICLES } from '../data/journal';

export const JournalDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = JOURNAL_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const otherArticles = JOURNAL_ARTICLES.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <MainLayout>
      <SEO title={article.title} description={article.excerpt} />

      {/* Header Banner */}
      <section className="pt-36 sm:pt-44 pb-16 bg-estate-forest text-estate-sand relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-estate-forest/90 via-estate-forest/80 to-estate-forest" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-estate-gold hover:text-estate-sand transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <span className="text-[10px] uppercase tracking-widest2 text-estate-gold font-semibold block mb-3">
            {article.category}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-estate-sand">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl font-serif italic text-estate-gold-light">
            {article.subtitle}
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-estate-sand/70 font-light">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-estate-gold" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-estate-gold" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-estate-gold" />
              {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 sm:py-24 bg-estate-sand text-estate-forest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Featured Image */}
          <div className="mb-12 border border-estate-charcoal/10 overflow-hidden shadow-lg aspect-[16/10]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg font-light text-estate-charcoal/85 leading-relaxed font-sans">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-estate-charcoal/10 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-estate-gold mr-1" />
            {article.tags.map(t => (
              <span
                key={t}
                className="text-xs px-3 py-1 bg-estate-cream text-estate-forest border border-estate-charcoal/10 font-sans"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Stories */}
      {otherArticles.length > 0 && (
        <section className="py-20 bg-estate-cream text-estate-forest border-t border-estate-charcoal/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-2xl text-estate-forest mb-8 text-center">
              More Stories from the Estate
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherArticles.map(a => (
                <Link
                  key={a.id}
                  to={`/journal/${a.slug}`}
                  className="p-6 bg-white border border-estate-charcoal/10 shadow-sm hover:border-estate-gold transition-all block group"
                >
                  <span className="text-[10px] uppercase tracking-widest text-estate-gold block mb-1">
                    {a.category}
                  </span>
                  <h4 className="font-serif text-xl font-medium text-estate-forest group-hover:text-estate-gold transition-colors mb-2">
                    {a.title}
                  </h4>
                  <p className="text-xs text-estate-muted font-light line-clamp-2">
                    {a.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};
