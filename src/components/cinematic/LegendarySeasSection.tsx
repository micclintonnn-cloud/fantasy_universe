'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, Waves, Layers, Navigation, ArrowRight, Map } from 'lucide-react';
import { DEMO_LOCATIONS } from '@/data/demo/locations';

export const LegendarySeasSection: React.FC = () => {
  const [selectedSea, setSelectedSea] = useState(DEMO_LOCATIONS[2]); // Default: Siren Trench

  return (
    <section id="legendary-seas" className="py-28 sm:py-36 bg-transparent relative border-b border-sky-400/10">
      
      {/* Ambient Sea Light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Number & Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-[#38bdf8] uppercase">
            04 / THE LEGENDARY SEAS
          </span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#F0F9FF] leading-tight mb-6">
            DANGEROUS WATERS &amp; UNCHARTED TRENCHES.
          </h2>
          <p className="text-base sm:text-lg text-[#BAE6FD] font-light leading-relaxed">
            Beyond the patrolled shipping lanes lie oceanic sectors where the depths plunge past a thousand fathoms, tidal currents reverse without warning, and compass lodestones spin aimlessly.
          </p>
        </div>

        {/* Interactive Environment & Sounding Matrix (Asymmetric 12-col layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Interactive Navigation Matrix Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
            {DEMO_LOCATIONS.map((loc) => {
              const isSelected = selectedSea.id === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setSelectedSea(loc)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all text-left ${
                    isSelected
                      ? 'bg-[#0a2948] border-[#38bdf8] shadow-sky-glow'
                      : 'bg-[#071a2e]/60 border-sky-400/15 hover:border-sky-400/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] tracking-widest text-[#38bdf8] uppercase">
                      [{loc.coordinates.x}°, {loc.coordinates.y}°] • {loc.region}
                    </span>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                        loc.dangerRating === 'Abyssal Calamity'
                          ? 'border-rose-500/50 text-rose-300 bg-rose-950/40'
                          : 'border-[#38bdf8]/40 text-[#38bdf8] bg-[#071a2e]'
                      }`}
                    >
                      {loc.dangerRating}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#F0F9FF]">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-[#BAE6FD] font-light line-clamp-2 mt-1">
                    {loc.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Large Atmospheric Sounding Dossier & Hydrographic Readout (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl p-8 sm:p-10 bg-[#0a2948]/85 border border-[#38bdf8]/30 shadow-[0_0_35px_rgba(56,189,248,0.15)] flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <span className="text-[#38bdf8] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#38bdf8]" />
                  <span>HYDROGRAPHIC SOUNDING PROFILE</span>
                </span>
                <span className="text-[#BAE6FD]/60">
                  SECTOR: {selectedSea.region}
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-widest block mb-1">
                  {selectedSea.subtitle}
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#F0F9FF]">
                  {selectedSea.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#BAE6FD] font-light leading-relaxed">
                {selectedSea.fullLore}
              </p>

              {/* Data Sounding Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#071a2e]/90 border border-sky-400/20 font-mono text-xs">
                <div>
                  <span className="text-[#BAE6FD]/60 block text-[10px] uppercase">Depth Sounding</span>
                  <span className="text-[#38bdf8] font-semibold text-sm">
                    {selectedSea.depthFathoms ? `${selectedSea.depthFathoms} Fathoms` : 'Surface Spire'}
                  </span>
                </div>
                <div>
                  <span className="text-[#BAE6FD]/60 block text-[10px] uppercase">Danger Status</span>
                  <span className="text-[#F0F9FF] font-semibold text-sm">
                    {selectedSea.dangerRating}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[#BAE6FD]/60 block text-[10px] uppercase">Coordinates</span>
                  <span className="text-[#38bdf8] font-semibold text-sm">
                    {selectedSea.coordinates.x}°N, {selectedSea.coordinates.y}°W
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href={`/atlas?location=${selectedSea.id}`}
                className="btn-cinematic-primary text-xs flex items-center gap-2 w-full sm:w-auto"
              >
                <Map className="w-4 h-4" />
                <span>OPEN IN WORLD ATLAS</span>
              </Link>

              <span className="text-[11px] font-mono text-[#BAE6FD]/60">
                Interactive MapLibre &amp; SVG matrix enabled
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

