import React from 'react';
import { Compass } from 'lucide-react';

interface SectionHeadingProps {
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  badgeIcon,
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${center ? 'text-center mx-auto' : 'text-left'}`}>
      {badgeText && (
        <div
          className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-sorvia-cyan/30 bg-sorvia-deep/80 text-[11px] sm:text-xs font-mono text-sorvia-cyan mb-3 sm:mb-4 uppercase tracking-wider shadow-cyan-glow ${
            center ? 'mx-auto' : ''
          }`}
        >
          {badgeIcon || <Compass className="w-3.5 h-3.5 text-sorvia-cyan flex-shrink-0" />}
          <span>{badgeText}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-sorvia-pearl tracking-tight leading-tight break-words">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-sorvia-silver/90 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`w-20 sm:w-28 h-0.5 bg-gradient-to-r from-transparent via-sorvia-cyan to-transparent mt-5 sm:mt-6 ${
          center ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
