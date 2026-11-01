import React from 'react';
import Link from 'next/link';
import { Anchor, Compass, Wind, Shield, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_SHIPS } from '@/data/demo/ships';

export const LegendaryShips: React.FC = () => {
  return (
    <section id="ships" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-abyss relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="Naval Architecture"
          badgeIcon={<Anchor className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="Legendary Ships of the Archipelagos"
          subtitle="In waters where oceans swallow entire fleets, a vessel is a sovereign sanctuary. Discover the expedition caravels, warships, and stealth outriggers that shape the era."
        />

        {/* 3 Ships Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEMO_SHIPS.map((ship) => (
            <div
              key={ship.id}
              className="sorvia-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-sorvia-border/60 mb-4">
                  <span className="font-mono text-xs text-sorvia-cyan flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{ship.vesselClass}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sorvia-deep text-sorvia-pearl border border-sorvia-border">
                    {ship.displacement}
                  </span>
                </div>

                {/* Ship Name & Subtitle */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-sorvia-pearl mb-1 group-hover:text-sorvia-cyan transition-colors">
                  {ship.name}
                </h3>
                <p className="text-xs text-sorvia-cyan italic font-cinzel mb-4">
                  {ship.subtitle}
                </p>

                {/* Stylized Blueprint Drawing Thumbnail */}
                <div className="w-full h-36 rounded-lg border border-dashed border-sorvia-cyan/30 bg-sorvia-deep/90 flex flex-col items-center justify-center relative p-3 mb-5 overflow-hidden shadow-cyan-glow">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b4163_1px,transparent_1px),linear-gradient(to_bottom,#1b4163_1px,transparent_1px)] bg-[size:14px_14px] opacity-40" />
                  
                  <svg viewBox="0 0 200 100" className="w-full h-full relative z-10 text-sorvia-cyan">
                    <line x1="10" y1="75" x2="190" y2="75" stroke="#13B8A6" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M20,65 L35,85 L160,85 L180,65" stroke="#32E6E0" strokeWidth="1.5" fill="none" />
                    <path d="M15,65 Q 90,75 185,60 L170,50 L25,52 Z" stroke="#32E6E0" strokeWidth="1.2" fill="#0d2b47" fillOpacity="0.7" />
                    <line x1="60" y1="18" x2="60" y2="65" stroke="#6df2ed" strokeWidth="1.8" />
                    <line x1="105" y1="10" x2="105" y2="65" stroke="#6df2ed" strokeWidth="2.2" />
                    <line x1="145" y1="25" x2="145" y2="65" stroke="#6df2ed" strokeWidth="1.8" />
                    <line x1="45" y1="28" x2="75" y2="28" stroke="#32E6E0" strokeWidth="1" />
                    <line x1="85" y1="20" x2="125" y2="20" stroke="#32E6E0" strokeWidth="1" />
                    <line x1="130" y1="35" x2="160" y2="35" stroke="#32E6E0" strokeWidth="1" />
                  </svg>

                  <span className="relative z-10 text-[10px] font-mono text-sorvia-cyan/80 mt-1 uppercase">
                    Architectural Blueprint Schematic
                  </span>
                </div>

                <p className="text-xs text-sorvia-silver/80 leading-relaxed mb-5">
                  {ship.shortDescription}
                </p>

                {/* Vessel Specs */}
                <div className="space-y-2 p-3.5 rounded-lg bg-sorvia-deep border border-sorvia-border/60 text-xs font-mono mb-5">
                  <div className="flex justify-between">
                    <span className="text-sorvia-silver/60">Keel Material:</span>
                    <span className="text-sorvia-pearl">{ship.keelMaterial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sorvia-silver/60">Complement:</span>
                    <span className="text-sorvia-pearl">{ship.complement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sorvia-silver/60">Armament:</span>
                    <span className="text-sorvia-cyan">{ship.armament}</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-sorvia-border/60">
                <Link
                  href={`/lore?category=ship&entity=${ship.id}`}
                  className="btn-outline-ocean w-full py-2.5 rounded text-xs flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Inspect Ship Dossier</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

