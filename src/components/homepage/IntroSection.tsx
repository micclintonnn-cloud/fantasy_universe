import React from 'react';
import { Compass, Sparkles, Landmark, Map, Waves, Globe } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_WORLD_OVERVIEW } from '@/data/demo/overview';

export const IntroSection: React.FC = () => {
  return (
    <section id="explore" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-abyss relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="World Overview"
          badgeIcon={<Globe className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title={DEMO_WORLD_OVERVIEW.introHeading}
          subtitle={DEMO_WORLD_OVERVIEW.introLead}
        />

        {/* Narrative Description & Overview Paragraphs */}
        <div className="max-w-4xl mx-auto mb-16 text-center space-y-4 text-base sm:text-lg text-sorvia-silver/90 font-light leading-relaxed">
          {DEMO_WORLD_OVERVIEW.introParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* 4 World Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DEMO_WORLD_OVERVIEW.pillars.map((pillar, idx) => {
            const IconComponent =
              idx === 0 ? Sparkles : idx === 1 ? Landmark : idx === 2 ? Compass : Map;
            return (
              <div
                key={idx}
                className="sorvia-card p-6 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-sorvia-deep border border-sorvia-cyan/30 flex items-center justify-center text-sorvia-cyan mb-4 shadow-cyan-glow group-hover:border-sorvia-cyan transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-sorvia-pearl mb-2 group-hover:text-sorvia-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-sorvia-silver/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-sorvia-border/60 flex items-center justify-between text-[10px] font-mono text-sorvia-cyan/70">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* World Statistics / Metric Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-sorvia-deep/80 border border-sorvia-cyan/25 shadow-ocean-depth">
          {DEMO_WORLD_OVERVIEW.metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-3">
              <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-sorvia-cyan block drop-shadow-cyan-glow">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm font-cinzel font-semibold text-sorvia-pearl mt-1 block">
                {metric.label}
              </span>
              <span className="text-[11px] font-mono text-sorvia-silver/60 mt-0.5 block">
                {metric.sublabel}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

