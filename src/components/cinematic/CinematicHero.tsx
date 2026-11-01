'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Sparkles, ArrowDown, Waves } from 'lucide-react';

export const CinematicHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#071a2e]">
      
      {/* Cinematic Photorealistic Fantasy Ocean Backdrop with Ambient Zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ocean-twilight.jpg"
          alt="Breathtaking Twilight Ocean of Sorvia with Bioluminescent Coral and Floating Islands"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-subtleZoom opacity-90 scale-105"
        />
      </div>

      {/* Atmospheric Overlays for Depth and Contrast */}
      <div className="absolute inset-0 z-10 overlay-hero-top pointer-events-none" />
      <div className="absolute inset-0 z-10 overlay-vignette pointer-events-none" />
      <div className="absolute inset-0 z-10 overlay-hero-bottom pointer-events-none" />

      {/* Floating Bioluminescent Particle Motifs */}
      <div className="absolute inset-0 z-15 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-[#38bdf8] blur-[1px] animate-driftParticle" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-[#32E6E0] blur-[2px] animate-driftParticle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-[#7dd3fc] blur-[1px] animate-driftParticle" style={{ animationDelay: '4s' }} />
      </div>

      {/* Foreground Hero Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-20 flex flex-col items-center">
        
        {/* Cinematic Eyebrow */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#38bdf8]/40 bg-[#0a2948]/80 backdrop-blur-md mb-8 shadow-sky-glow">
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span className="font-cinzel text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#F0F9FF]">
            AN ORIGINAL MARITIME FANTASY UNIVERSE
          </span>
        </div>

        {/* Cinematic Main Heading (Exact Copy) */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F0F9FF] mb-8 leading-[1.08] max-w-5xl drop-shadow-[0_8px_35px_rgba(7,26,46,0.95)]">
          BEYOND THE HORIZON LIES A WORLD UNFORGOTTEN.
        </h1>

        {/* Supporting Narrative Paragraph (Exact Copy) */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#BAE6FD] font-light leading-relaxed mb-12 drop-shadow-[0_4px_16px_rgba(7,26,46,0.9)]">
          &ldquo;Across uncharted waters, beneath ancient skies, and beyond the boundaries of known kingdoms lies Sorvia — a world shaped by adventure, mystery, and the endless call of the sea.&rdquo;
        </p>

        {/* Action CTAs (Exact Actions) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full max-w-md mx-auto mb-16">
          <a
            href="#discover-sorvia"
            className="w-full sm:w-auto btn-cinematic-primary"
          >
            EXPLORE SORVIA
          </a>
          
          <Link
            href="/trilogy"
            className="w-full sm:w-auto btn-cinematic-secondary"
          >
            DISCOVER THE TRILOGY
          </Link>
        </div>

        {/* Coordinate Stamp Watermark */}
        <div className="flex items-center justify-center gap-6 font-mono text-[10px] tracking-[0.25em] uppercase text-[#BAE6FD]/60">
          <span>COORDINATES: 14°28′N, 45°12′W</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/60" />
          <span>SECTOR: WESTERN EXPENSE</span>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12">
          <a
            href="#discover-sorvia"
            className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#BAE6FD]/70 hover:text-[#38bdf8] transition-colors group"
            aria-label="Scroll to Section 1"
          >
            <span>SCROLL TO ENTER</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#38bdf8] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

      </div>

    </section>
  );
};

