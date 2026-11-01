import React from 'react';
import Link from 'next/link';
import { Landmark, Sparkles, Compass, ShieldCheck, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CanonBadge } from '@/components/shared/Badge';
import { DEMO_CIVILIZATIONS } from '@/data/demo/civilizations';

export const AncientCivilizations: React.FC = () => {
  return (
    <section id="civilizations" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-deep/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          badgeText="Lost Epochs"
          badgeIcon={<Landmark className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="Ancient Civilizations of the Deep"
          subtitle="Before the current archipelagos were charted, primordial tidal architects carved submerged aqueducts, perpetual crystal beacons, and resonance cities."
        />

        {/* 2 Civilizations Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DEMO_CIVILIZATIONS.map((civ) => (
            <div
              key={civ.id}
              className="sorvia-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag & Status */}
                <div className="flex items-center justify-between pb-4 border-b border-sorvia-border/60 mb-5">
                  <div className="flex items-center gap-2 text-xs font-mono text-sorvia-cyan">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ERA: {civ.era}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sorvia-abyss text-sorvia-cyan border border-sorvia-cyan/30">
                    {civ.status}
                  </span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-sorvia-pearl mb-1 group-hover:text-sorvia-cyan transition-colors">
                  {civ.name}
                </h3>
                <p className="text-xs text-sorvia-cyan italic font-cinzel mb-4">
                  {civ.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-sorvia-silver/85 leading-relaxed mb-6 font-light">
                  {civ.shortDescription}
                </p>

                {/* Technical Architecture & Legacy Grid */}
                <div className="space-y-3 p-4 rounded-xl bg-sorvia-abyss/85 border border-sorvia-border/70 text-xs font-mono mb-6">
                  <div>
                    <span className="text-sorvia-silver/60 block text-[10px] uppercase">Architectural Style</span>
                    <span className="text-sorvia-pearl">{civ.architecturalStyle}</span>
                  </div>
                  <div>
                    <span className="text-sorvia-silver/60 block text-[10px] uppercase">Tidal Technology</span>
                    <span className="text-sorvia-cyan">{civ.tidalTechnology}</span>
                  </div>
                  <div>
                    <span className="text-sorvia-silver/60 block text-[10px] uppercase">Surviving Monumental Legacy</span>
                    <span className="text-sorvia-silver">{civ.legacy}</span>
                  </div>
                </div>

                {civ.relicName && (
                  <div className="p-3 rounded-lg bg-sorvia-deep border border-sorvia-cyan/25 flex items-center gap-2.5 text-xs text-sorvia-pearl mb-6">
                    <ShieldCheck className="w-4 h-4 text-sorvia-cyan flex-shrink-0" />
                    <span>
                      <strong>Documented Relic:</strong> {civ.relicName}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-sorvia-border/60">
                <Link
                  href={`/lore?category=civilization&entity=${civ.id}`}
                  className="btn-outline-ocean w-full py-2.5 rounded text-xs flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect Archaeological Archives</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

