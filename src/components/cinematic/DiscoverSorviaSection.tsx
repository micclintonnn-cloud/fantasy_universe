'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Sparkles, Map, Landmark, ArrowRight, Waves } from 'lucide-react';

export const DiscoverSorviaSection: React.FC = () => {
  return (
    <section id="discover-sorvia" className="relative py-28 sm:py-36 bg-transparent overflow-hidden border-b border-sky-400/10">
      
      {/* Ambient Sky Blue Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#38bdf8]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Number & Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-[#38bdf8] uppercase">
            01 / EXPEDITION PROLOGUE
          </span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
        </div>

        {/* Editorial Heading (Exact Master Copy) */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0F9FF] leading-[1.1] mb-8">
            A WORLD BEYOND THE KNOWN.
          </h2>
          <p className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#F0F9FF]/90 font-light leading-relaxed italic border-l-2 border-[#38bdf8] pl-6 py-1">
            &ldquo;Sorvia is a world of endless oceans, forgotten civilizations, distant kingdoms, and mysteries hidden beneath ancient waters. Every horizon holds the promise of discovery.&rdquo;
          </p>
        </div>

        {/* Wide Panoramic Environmental Image Composition */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden mb-20 border border-[#38bdf8]/30 shadow-[0_0_35px_rgba(56,189,248,0.15)] group">
          <Image
            src="/images/discover-ocean-vista.jpg"
            alt="Panoramic Vista of Sorvia's Boundless Ocean and Floating Archipelagos"
            fill
            sizes="100vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a2e]/80 via-transparent to-transparent pointer-events-none" />

          {/* Environmental Label in Bottom Left */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 max-w-lg">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#38bdf8] block mb-1">
              SURVEY SECTOR: THE INNER TIDES
            </span>
            <p className="font-cinzel text-lg sm:text-2xl font-bold text-[#F0F9FF]">
              The Azure Expanse of the 7 Sovereign Seas
            </p>
          </div>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid: The 4 Pillars of the World */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#38bdf8] block">
              WORLD ARCHITECTURE
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F0F9FF] leading-snug">
              An Oceanic Realm Shaped by Primordial Tides
            </h3>
            <p className="text-sm sm:text-base text-[#BAE6FD] font-light leading-relaxed">
              Unlike landlocked fantasy worlds, Sorvia is defined by its oceans. Boundless turquoise expanses, luminous coral shelves, and towering stone arches create an environment where travel, war, and survival depend entirely on the rhythm of the tides.
            </p>
            <p className="text-sm sm:text-base text-[#BAE6FD] font-light leading-relaxed">
              Across three major archipelagos, independent cartographers and sovereign armadas navigate waters where ancient pre-deluge monuments still channel magnetic currents.
            </p>

            <div className="pt-2">
              <Link
                href="/explore"
                className="btn-cinematic-secondary text-xs flex items-center gap-2.5 w-fit"
              >
                <span>SURVEY THE ARCHIPELAGOS</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-sky-400/50 hover:bg-[#0c3358]/85 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#071a2e] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] mb-4 shadow-sky-glow">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-[#F0F9FF] mb-2">
                Bioluminescent Oceans
              </h4>
              <p className="text-xs text-[#BAE6FD] leading-relaxed font-light">
                Phosphorescent coral reefs that illuminate the midnight sea from below, turning nocturnal voyages into flights through submerged galaxies.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-sky-400/50 hover:bg-[#0c3358]/85 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#071a2e] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] mb-4 shadow-sky-glow">
                <Landmark className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-[#F0F9FF] mb-2">
                Ancient Pre-Deluge Ruins
              </h4>
              <p className="text-xs text-[#BAE6FD] leading-relaxed font-light">
                Submerged Cyclopean basalt temples and perpetual crystal beacons built thousands of cycles before current dynasties arose.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-sky-400/50 hover:bg-[#0c3358]/85 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#071a2e] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] mb-4 shadow-sky-glow">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-[#F0F9FF] mb-2">
                Acoustic Navigation
              </h4>
              <p className="text-xs text-[#BAE6FD] leading-relaxed font-light">
                Master navigators steer by listening to the singing currents that resonate through deep keels, passing where astrolabes fail.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-sky-400/50 hover:bg-[#0c3358]/85 transition-all shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#071a2e] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] mb-4 shadow-sky-glow">
                <Map className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-base font-bold text-[#F0F9FF] mb-2">
                1,240-Fathom Trenches
              </h4>
              <p className="text-xs text-[#BAE6FD] leading-relaxed font-light">
                Hadal chasms inhabited by colossal phosphorescent drakes and thermal fissures that disrupt conventional compass bearings.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

