'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, BookOpen, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export const EnterSorviaBanner: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-40 bg-transparent overflow-hidden border-b border-sky-400/10">
      
      {/* Background Cinematic Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/horizon-celestial-dawn.jpg"
          alt="Celestial Dawn over the Sorvian Ocean with Ringed Planet and Bioluminescent Mist"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.75] contrast-[1.05]"
        />
        {/* Layered Cinematic Vignettes and Horizon Fog */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-[#071a2e]/60 to-[#071a2e]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a2e]/90 via-transparent to-[#071a2e]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18)_0%,transparent_70%)]" />
      </div>

      {/* Cartographic Coordinate Marks */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 font-mono text-[10px] tracking-[0.3em] text-[#38bdf8]/70 hidden md:block select-none z-10">
        LAT 00°00′00″ • PRIME SECTOR
      </div>
      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 font-mono text-[10px] tracking-[0.3em] text-[#38bdf8]/70 hidden md:block select-none z-10">
        THE CELESTIAL HORIZON
      </div>

      {/* Main Banner Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Section Pill / Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a2948]/85 border border-[#38bdf8]/40 backdrop-blur-md mb-8 shadow-sky-glow">
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span className="font-mono text-xs tracking-[0.3em] text-[#38bdf8] uppercase font-semibold">
            06 / VOYAGE INITIATION
          </span>
        </div>

        {/* Cinematic Main Heading (Exact Copy) */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F0F9FF] leading-[1.08] mb-8">
          YOUR JOURNEY INTO SORVIA <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7dd3fc] via-[#F0F9FF] to-[#38bdf8]">
            BEGINS HERE.
          </span>
        </h2>

        {/* Evocative Narrative Text */}
        <p className="font-editorial text-lg sm:text-2xl text-[#F0F9FF]/90 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          Step across the threshold of the known maps. Every archipelago holds forgotten relics, every ocean trench conceals pre-deluge secrets, and every celestial dawn summons daring navigators to chart the unremembered deep.
        </p>

        {/* Dual Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <Link
            href="/explore"
            className="btn-cinematic-primary w-full sm:w-auto text-xs px-10 py-4 flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(56,189,248,0.35)]"
          >
            <Compass className="w-4 h-4 text-[#071a2e]" />
            <span className="tracking-[0.25em] font-bold">EXPLORE THE WORLD</span>
            <ArrowRight className="w-4 h-4 text-[#071a2e]" />
          </Link>

          <Link
            href="/atlas"
            className="btn-cinematic-secondary w-full sm:w-auto text-xs px-8 py-4 flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <MapPin className="w-4 h-4 text-[#38bdf8]" />
            <span className="tracking-[0.2em]">OPEN WORLD ATLAS</span>
          </Link>

          <Link
            href="/trilogy"
            className="btn-cinematic-secondary w-full sm:w-auto text-xs px-8 py-4 flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <BookOpen className="w-4 h-4 text-[#38bdf8]" />
            <span className="tracking-[0.2em]">DISCOVER THE TRILOGY</span>
          </Link>
        </div>

        {/* Ambient Navigation Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t border-white/10">
          <div className="text-left p-4 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 backdrop-blur-sm">
            <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest block mb-1">01 / ARCHIPELAGOS</span>
            <span className="text-sm font-cinzel text-[#F0F9FF]">Uncharted Atolls</span>
          </div>
          <div className="text-left p-4 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 backdrop-blur-sm">
            <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest block mb-1">02 / KINGDOMS</span>
            <span className="text-sm font-cinzel text-[#F0F9FF]">Thalassor & Olyndra</span>
          </div>
          <div className="text-left p-4 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 backdrop-blur-sm">
            <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest block mb-1">03 / SOUNDINGS</span>
            <span className="text-sm font-cinzel text-[#F0F9FF]">Siren & Singing Shoals</span>
          </div>
          <div className="text-left p-4 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 backdrop-blur-sm">
            <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest block mb-1">04 / EXPEDITION</span>
            <span className="text-sm font-cinzel text-[#F0F9FF]">The Zephyr&apos;s Wake</span>
          </div>
        </div>

      </div>

    </section>
  );
};

