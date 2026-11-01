import React from 'react';
import Link from 'next/link';
import { Shield, Anchor, Landmark, Compass, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CanonBadge } from '@/components/shared/Badge';
import { DEMO_KINGDOMS } from '@/data/demo/kingdoms';

export const FeaturedKingdoms: React.FC = () => {
  return (
    <section id="kingdoms" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-deep/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="Sovereign Realms"
          badgeIcon={<Shield className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="Featured Kingdoms of Sorvia"
          subtitle="From imperial granite citadels to floating coral atolls, discover the great naval powers vying for dominion across the archipelago."
        />

        {/* 3 Kingdoms Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEMO_KINGDOMS.map((kng) => (
            <div
              key={kng.id}
              className="sorvia-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header & Badges */}
                <div className="flex items-center justify-between pb-4 border-b border-sorvia-border/60 mb-4">
                  <span className="font-mono text-xs text-sorvia-cyan/80 flex items-center gap-1.5">
                    <Anchor className="w-3.5 h-3.5 text-sorvia-cyan" />
                    <span>REALM DOSSIER</span>
                  </span>
                  <CanonBadge status={kng.canonStatus} />
                </div>

                {/* Realm Name & Subtitle */}
                <span className="text-[11px] font-mono uppercase tracking-widest text-sorvia-cyan block mb-1">
                  {kng.emblem}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-sorvia-pearl mb-2 group-hover:text-sorvia-cyan transition-colors">
                  {kng.name}
                </h3>
                <p className="text-xs text-sorvia-cyan/90 italic font-cinzel mb-4">
                  {kng.subtitle}
                </p>

                <p className="text-xs text-sorvia-silver/80 leading-relaxed mb-6">
                  {kng.shortDescription}
                </p>

                {/* Kingdom Attributes Grid */}
                <div className="space-y-2.5 p-3.5 rounded-lg bg-sorvia-abyss/80 border border-sorvia-border/60 text-xs font-mono mb-6">
                  <div className="flex justify-between">
                    <span className="text-sorvia-silver/60">Capital:</span>
                    <span className="text-sorvia-pearl font-semibold">{kng.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sorvia-silver/60">Government:</span>
                    <span className="text-sorvia-pearl font-semibold">{kng.government}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sorvia-silver/60">Fleet Strength:</span>
                    <span className="text-sorvia-cyan font-semibold">{kng.fleetStrength}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-sorvia-border/60">
                <Link
                  href={`/lore?category=kingdom&entity=${kng.id}`}
                  className="btn-outline-ocean w-full py-2.5 rounded text-xs flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect Kingdom Lore &amp; Treaties</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

