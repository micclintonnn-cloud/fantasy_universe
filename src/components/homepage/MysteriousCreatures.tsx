import React from 'react';
import Link from 'next/link';
import { Eye, Waves, Sparkles, ShieldAlert, Compass, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_CREATURES } from '@/data/demo/creatures';

export const MysteriousCreatures: React.FC = () => {
  return (
    <section id="creatures" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-deep/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="Hadal &amp; Pelagic Life"
          badgeIcon={<Eye className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="Mysterious Creatures of the Deep"
          subtitle="From celestial-winged tide mantas that glide through warm lagoons to phosphorescent behemoths coiled in the 1,200-fathom trenches."
        />

        {/* 3 Creatures Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEMO_CREATURES.map((creature) => {
            const threatStyle =
              creature.threatLevel === 'Harmonious'
                ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/40'
                : creature.threatLevel === 'Elusive'
                ? 'bg-blue-950/70 text-blue-300 border-blue-500/40'
                : creature.threatLevel === 'Perilous'
                ? 'bg-amber-950/70 text-amber-300 border-amber-500/40'
                : 'bg-rose-950/70 text-rose-300 border-rose-500/40 shadow-sm';

            return (
              <div
                key={creature.id}
                className="sorvia-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header Tag */}
                  <div className="flex items-center justify-between pb-3 border-b border-sorvia-border/60 mb-4">
                    <span className="font-mono text-xs text-sorvia-cyan flex items-center gap-1.5">
                      <Waves className="w-3.5 h-3.5" />
                      <span>{creature.trenchDepth}</span>
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${threatStyle}`}>
                      {creature.threatLevel}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-sorvia-pearl mb-1 group-hover:text-sorvia-cyan transition-colors">
                    {creature.name}
                  </h3>
                  <p className="text-xs text-sorvia-cyan italic font-cinzel mb-4">
                    {creature.subtitle}
                  </p>

                  <p className="text-xs text-sorvia-silver/80 leading-relaxed mb-6">
                    {creature.shortDescription}
                  </p>

                  {/* Bioluminescent Traits & Habitat Box */}
                  <div className="space-y-2.5 p-3.5 rounded-lg bg-sorvia-abyss/80 border border-sorvia-border/60 text-xs font-mono mb-6">
                    <div>
                      <span className="text-sorvia-silver/60 block text-[10px]">Habitat:</span>
                      <span className="text-sorvia-pearl">{creature.habitat}</span>
                    </div>
                    <div>
                      <span className="text-sorvia-silver/60 block text-[10px]">Bioluminescence:</span>
                      <span className="text-sorvia-cyan">{creature.bioluminescentTrait}</span>
                    </div>
                    <div>
                      <span className="text-sorvia-silver/60 block text-[10px]">Sailor Superstition:</span>
                      <span className="text-sorvia-silver italic">&ldquo;{creature.sailorBelief}&rdquo;</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-sorvia-border/60">
                  <Link
                    href={`/lore?category=creature&entity=${creature.id}`}
                    className="btn-outline-ocean w-full py-2.5 rounded text-xs flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Creature Field Notes</span>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

