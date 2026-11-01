import React from 'react';
import Link from 'next/link';
import { MapPin, Compass, AlertTriangle, Layers, Navigation, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_LOCATIONS } from '@/data/demo/locations';

export const MysteriousIslands: React.FC = () => {
  return (
    <section id="islands" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-abyss relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="Uncharted Geography"
          badgeIcon={<MapPin className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="Mysterious Islands &amp; Abyssal Depths"
          subtitle="Explore levitating rock formations, singing basalt atolls, and bottomless ocean trenches where normal magnetic bearings cease to function."
        />

        {/* 4 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEMO_LOCATIONS.map((loc) => {
            const dangerColor =
              loc.dangerRating === 'Tranquil'
                ? 'text-emerald-300 border-emerald-500/50 bg-emerald-950/60'
                : loc.dangerRating === 'Navigable'
                ? 'text-blue-300 border-blue-500/50 bg-blue-950/60'
                : loc.dangerRating === 'Perilous'
                ? 'text-amber-300 border-amber-500/50 bg-amber-950/60'
                : 'text-rose-300 border-rose-500/50 bg-rose-950/60';

            return (
              <div
                key={loc.id}
                className="sorvia-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Danger Rating and Coords */}
                  <div className="flex items-center justify-between pb-3 border-b border-sorvia-border/60 mb-4">
                    <span className="font-mono text-xs text-sorvia-cyan flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5" />
                      <span>[{loc.coordinates.x}°, {loc.coordinates.y}°] • {loc.region}</span>
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${dangerColor}`}>
                      {loc.dangerRating}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-2xl font-bold text-sorvia-pearl mb-1 group-hover:text-sorvia-cyan transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-sorvia-cyan italic font-cinzel mb-3">
                    {loc.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-sorvia-silver/80 leading-relaxed mb-6">
                    {loc.shortDescription}
                  </p>

                  {/* Attributes and Trade Goods */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-sorvia-deep border border-sorvia-border/60 text-xs font-mono mb-4">
                    <div>
                      <span className="text-sorvia-silver/60 block text-[10px]">Depth Sounding</span>
                      <span className="text-sorvia-pearl font-semibold">
                        {loc.depthFathoms ? `${loc.depthFathoms} Fathoms` : 'Surface Landmass'}
                      </span>
                    </div>
                    <div>
                      <span className="text-sorvia-silver/60 block text-[10px]">Classification</span>
                      <span className="text-sorvia-cyan font-semibold capitalize">
                        {loc.type.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Resources / Commodities */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {loc.resources.map((res, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-sorvia-abyss text-sorvia-silver border border-sorvia-border/60"
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-sorvia-border/60 flex items-center justify-between">
                  <Link
                    href={`/atlas?location=${loc.id}`}
                    className="text-xs font-cinzel text-sorvia-cyan hover:text-sorvia-pearl transition-colors flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <span>View On Interactive Atlas</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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

