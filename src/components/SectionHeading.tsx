import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3 justify-start sm:justify-start">
          {isCenter && <span className="h-[1px] w-8 bg-estate-gold/40 hidden sm:inline-block"></span>}
          <p className="text-xs uppercase tracking-luxury font-sans font-semibold text-estate-gold">
            {eyebrow}
          </p>
          {isCenter && <span className="h-[1px] w-8 bg-estate-gold/40 hidden sm:inline-block"></span>}
        </div>
      )}
      
      <h2
        className={`font-serif text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.18] sm:leading-[1.15] tracking-tight ${
          dark ? 'text-estate-sand' : 'text-estate-forest'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-[15px] sm:text-lg font-sans font-light leading-relaxed ${
            dark ? 'text-estate-sand/80' : 'text-estate-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
