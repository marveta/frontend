import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  id
}) => {
  const isCenter = align === 'center';

  return (
    <div 
      id={id}
      className={`mb-10 sm:mb-12 lg:mb-14 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal font-heading text-white tracking-tight leading-[1.14] mb-3.5">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
