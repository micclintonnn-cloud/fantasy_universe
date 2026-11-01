'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Map, Compass, Anchor, Layers, Navigation, ExternalLink, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_LOCATIONS } from '@/data/demo/locations';

export const AtlasPreview: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(DEMO_LOCATIONS[0]);

  return (
    <section id="atlas-preview" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-abyss relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <SectionHeading
          badgeText="Cartographic Reconnaissance"
          badgeIcon={<Map className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="The Interactive World Atlas"
          subtitle="Navigate fictional sample geography across the Western Expanse, sound hadal depths, inspect ports, and plot passage through patrolled straits."
        />

        {/* Atlas Interactive Preview Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Interactive Chart Canvas (8 cols) */}
          <div className="lg:col-span-8 sorvia-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden">

            {/* Chart Header Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-sorvia-border/60 text-xs font-mono text-sorvia-cyan">
              <span className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4" />
                <span>SECTOR: 0° TO 100° • WESTERN EXPENSE MERIDIAN</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] text-sorvia-silver/60">
                Interactive Marker Preview
              </span>
            </div>

            {/* Simulated Chart Display in Sea Cyan */}
            <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-[#08233d] via-[#051729] to-[#030e1a] rounded-xl overflow-hidden select-none my-3 border border-sorvia-cyan/25">

              {/* Nautical Coordinate Grid Lines */}
              <svg className="absolute inset-0 w-full h-full text-sorvia-cyan/15" width="100%" height="100%">
                <defs>
                  <pattern id="home-grid" width="10%" height="10%" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(50, 230, 224, 0.15)" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#home-grid)" />

                {/* Hadal Trench Depth Contour */}
                <ellipse cx="26%" cy="74%" rx="18%" ry="12%" fill="#020912" stroke="#32E6E0" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
                <text x="26%" y="74%" fill="#32E6E0" fontSize="10" fontFamily="monospace" textAnchor="middle" opacity="0.7">
                  [1240 FATHOM TRENCH]
                </text>

                {/* Landmass Shapes */}
                <path
                  d="M 38 50 Q 42 45 46 52 Q 44 60 39 58 Z"
                  fill="#0e3457"
                  stroke="#32E6E0"
                  strokeWidth="1.2"
                  transform="scale(7.5) translate(-32, -35)"
                  opacity="0.85"
                />
                <path
                  d="M 70 28 Q 78 25 80 34 Q 74 38 69 32 Z"
                  fill="#0e3457"
                  stroke="#32E6E0"
                  strokeWidth="1.2"
                  transform="scale(7) translate(-55, -15)"
                  opacity="0.85"
                />

                {/* Simulated Trade Route Line */}
                <polyline
                  points="26%,74% 42%,55% 58%,76% 78%,18%"
                  fill="none"
                  stroke="#13B8A6"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  opacity="0.75"
                />
              </svg>

              {/* Clickable Markers */}
              {DEMO_LOCATIONS.map((loc) => {
                const isSelected = activeLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setActiveLocation(loc)}
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-10"
                    aria-label={`Select ${loc.name}`}
                  >
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-sorvia-cyan/35 animate-ping" />
                    )}
                    <div
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all ${isSelected
                          ? 'bg-sorvia-cyan text-sorvia-deep border-sorvia-pearl shadow-cyan-glow scale-110'
                          : 'bg-sorvia-deep/90 text-sorvia-cyan border-sorvia-cyan/50 hover:scale-110 hover:border-sorvia-cyan shadow-md'
                        }`}
                    >
                      <Anchor className="w-4 h-4" />
                    </div>
                    <span className="absolute top-9 left-1/2 -translate-x-1/2 max-w-[140px] truncate px-2 py-0.5 rounded text-[10px] font-semibold bg-sorvia-abyss/90 text-sorvia-pearl border border-sorvia-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {loc.name}
                    </span>
                  </button>
                );
              })}

              {/* Compass Rose Watermark */}
              <div className="absolute bottom-3 right-3 pointer-events-none opacity-30">
                <Compass className="w-20 h-20 text-sorvia-cyan animate-spin" style={{ animationDuration: '90s' }} />
              </div>
            </div>

            {/* Bottom Bar Info */}
            <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-sorvia-silver/60">
              <span>Projection: Fictional Archipelago Coordinate Matrix</span>
              <span className="text-sorvia-cyan">Click markers to inspect details</span>
            </div>

          </div>

          {/* Quick Location Detail Inspector (4 cols) */}
          <div className="lg:col-span-4 sorvia-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-sorvia-border/60">
                <span className="font-mono text-xs text-sorvia-cyan uppercase tracking-wider">
                  Inspected Landmark
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sorvia-abyss text-sorvia-pearl border border-sorvia-border">
                  {activeLocation.dangerRating}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-sorvia-cyan block">
                  {activeLocation.region}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-sorvia-pearl">
                  {activeLocation.name}
                </h3>
                <p className="text-xs text-sorvia-silver/70 italic font-cinzel mt-1">
                  {activeLocation.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-sorvia-silver/90 leading-relaxed font-light">
                {activeLocation.shortDescription}
              </p>

              {/* Depth & Specs */}
              <div className="p-3.5 rounded-lg bg-sorvia-deep border border-sorvia-border/60 text-xs font-mono space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-sorvia-silver/60">Depth Sounding:</span>
                  <span className="text-sorvia-pearl font-semibold">
                    {activeLocation.depthFathoms ? `${activeLocation.depthFathoms} Fathoms` : 'Surface'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sorvia-silver/60">Relative Grid:</span>
                  <span className="text-sorvia-cyan">
                    [{activeLocation.coordinates.x}°, {activeLocation.coordinates.y}°]
                  </span>
                </div>
              </div>

              {/* Resources */}
              <div>
                <span className="text-[10px] font-mono uppercase text-sorvia-silver/60 block mb-1.5">
                  Natural Resources
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeLocation.resources.map((res, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-sorvia-abyss text-sorvia-silver border border-sorvia-border">
                      {res}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct CTA to World Atlas */}
            <div className="pt-6 border-t border-sorvia-border/60 mt-6">
              <Link
                href="/atlas"
                className="btn-cyan w-full py-3 rounded text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <span>OPEN FULL INTERACTIVE ATLAS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

