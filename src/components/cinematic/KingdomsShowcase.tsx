'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Anchor, ArrowRight, Compass } from 'lucide-react';
import { DEMO_KINGDOMS } from '@/data/demo/kingdoms';

export const KingdomsShowcase: React.FC = () => {
  const thalassor = DEMO_KINGDOMS[0];
  const olyndra = DEMO_KINGDOMS[1];
  const freeports = DEMO_KINGDOMS[2];

  return (
    <section id="kingdoms" className="py-28 sm:py-36 bg-transparent relative border-b border-sky-400/10">
      
      {/* Ambient Sky Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Number & Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-[#38bdf8] uppercase">
            02 / THE KINGDOMS
          </span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#F0F9FF] leading-tight mb-6">
            SOVEREIGN REALMS OF THE ARCHIPELAGO.
          </h2>
          <p className="text-base sm:text-lg text-[#BAE6FD] font-light leading-relaxed">
            From imperial granite bastions enforcing maritime law to harmonious coral principalities built upon living reefs, the balance of power across Sorvia is contested upon the tides.
          </p>
        </div>

        {/* Kingdom 1: Thalassor — Large Image-Led Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-28 group">
          
          {/* Large Cinematic Landscape Image (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#38bdf8]/30 shadow-[0_0_35px_rgba(56,189,248,0.15)]">
            <Image
              src="/images/kingdom-thalassor.jpg"
              alt="The Sovereign Realm of Thalassor Granite Citadel and War Galleons"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-70 pointer-events-none" />
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded bg-[#0a2948]/85 backdrop-blur-md border border-[#38bdf8]/40 text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase">
              NAVAL HEGEMONY
            </div>
          </div>

          {/* Editorial Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#38bdf8] block">
              EASTERN MERIDIAN SEA GATE
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#F0F9FF] leading-tight">
              {thalassor.name}
            </h3>
            <p className="font-editorial text-lg text-[#38bdf8] italic font-light">
              {thalassor.subtitle}
            </p>
            <p className="text-sm text-[#BAE6FD] font-light leading-relaxed">
              {thalassor.fullLore}
            </p>

            <div className="p-4 rounded-xl bg-[#0a2948]/80 border border-sky-400/20 space-y-2 font-mono text-xs text-[#BAE6FD]">
              <div className="flex justify-between">
                <span className="text-[#BAE6FD]/60">Capital:</span>
                <span className="text-[#F0F9FF]">{thalassor.capital}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#BAE6FD]/60">Fleet Strength:</span>
                <span className="text-[#38bdf8]">{thalassor.fleetStrength}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/lore?category=kingdom&entity=${thalassor.id}`}
                className="btn-cinematic-secondary text-xs flex items-center gap-2 w-fit"
              >
                <span>DISCOVER THALASSOR</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Kingdom 2: Olyndra — Reversed Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-28 group">
          
          {/* Editorial Content (5 cols) - Ordered First on Desktop */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#38bdf8] block">
              BIOLUMINESCENT ATOLLS
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#F0F9FF] leading-tight">
              {olyndra.name}
            </h3>
            <p className="font-editorial text-lg text-[#38bdf8] italic font-light">
              {olyndra.subtitle}
            </p>
            <p className="text-sm text-[#BAE6FD] font-light leading-relaxed">
              {olyndra.fullLore}
            </p>

            <div className="p-4 rounded-xl bg-[#0a2948]/80 border border-sky-400/20 space-y-2 font-mono text-xs text-[#BAE6FD]">
              <div className="flex justify-between">
                <span className="text-[#BAE6FD]/60">Seat of Power:</span>
                <span className="text-[#F0F9FF]">{olyndra.capital}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#BAE6FD]/60">Acoustic Fleet:</span>
                <span className="text-[#38bdf8]">{olyndra.fleetStrength}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/lore?category=kingdom&entity=${olyndra.id}`}
                className="btn-cinematic-secondary text-xs flex items-center gap-2 w-fit"
              >
                <span>DISCOVER OLYNDRA</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
            </div>
          </div>

          {/* Large Cinematic Landscape Image (7 cols) - Ordered Second on Desktop */}
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#38bdf8]/30 shadow-[0_0_35px_rgba(56,189,248,0.15)] order-1 lg:order-2">
            <Image
              src="/images/kingdom-olyndra.jpg"
              alt="The Coral Principality of Olyndra Luminous Atolls and Waterways"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-70 pointer-events-none" />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-[#0a2948]/85 backdrop-blur-md border border-[#38bdf8]/40 text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase">
              CORAL SOVEREIGNTY
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

