'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Anchor } from 'lucide-react';
import { PROTAGONIST_NAME, VESSEL_NAME } from '@/config/site';

export const DiscoverVesselSection: React.FC = () => {
  return (
    <section id="discover-vessel" className="relative py-16 sm:py-24 lg:py-32 bg-[#061524] text-[#F0F9FF] border-t border-sky-400/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Narrative & Ship Role (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-2 lg:order-1">

            <div>
              <p className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-1.5 sm:mb-2">
                03 &bull; The Flagship
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F0F9FF]">
                Discover {VESSEL_NAME}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#38bdf8] mt-1 font-light">
                Built to Survive Where Maps Run Out
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base text-[#BAE6FD]/85 font-light leading-relaxed">
              <p>
                To sail where old empires fear to go, {PROTAGONIST_NAME} required a vessel unlike any standard war galleon. Fast, responsive, and crafted from petrified ironwood, <em>{VESSEL_NAME}</em> was built for the unknown.
              </p>
              <p>
                Her copper-sheathed hull shields the navigation compass from the magnetic distortions of abyssal rifts, while her shallow draft glides effortlessly across glowing coral reefs that would tear a heavier dreadnought to pieces.
              </p>
            </div>

            {/* Clean, Mobile-First Responsive Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-white/10">
              <div className="p-3 sm:p-0 rounded-lg bg-[#071a2e]/60 sm:bg-transparent">
                <p className="text-sm font-bold text-white">Petrified Keel</p>
                <p className="text-xs text-[#BAE6FD]/70 mt-0.5">Withstands crushing hadal currents</p>
              </div>
              <div className="p-3 sm:p-0 rounded-lg bg-[#071a2e]/60 sm:bg-transparent">
                <p className="text-sm font-bold text-white">Copper Hull</p>
                <p className="text-xs text-[#BAE6FD]/70 mt-0.5">Shields against magnetic storms</p>
              </div>
              <div className="p-3 sm:p-0 rounded-lg bg-[#071a2e]/60 sm:bg-transparent">
                <p className="text-sm font-bold text-white">Lateen Rig</p>
                <p className="text-xs text-[#BAE6FD]/70 mt-0.5">Catches high twilight winds</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/lore"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 min-h-[44px] rounded-xl bg-[#0a2948] hover:bg-[#0e3863] border border-sky-400/30 text-xs sm:text-sm font-medium text-white transition-colors w-full sm:w-auto text-center"
              >
                <span>Explore the Vessel Archives</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
            </div>

          </div>

          {/* Environmental Ship Artwork (5 cols) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-sky-400/20 shadow-2xl shadow-sky-950/40">
              <Image
                src="/images/discover-ocean-vista.jpg"
                alt="The Zephyr's Wake navigating bioluminescent archipelagos"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#071a2e]/85 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-[#38bdf8]" />
                  <p className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider">Explorer Caravel</p>
                </div>
                <p className="text-base sm:text-lg font-bold text-white">The Zephyr&apos;s Wake</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
