'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { UNIVERSE_NAME } from '@/config/site';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#071a2e]">
      {/* Background artwork */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ocean-twilight.jpg"
          alt={`${UNIVERSE_NAME} Twilight Ocean`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Soft atmospheric gradients for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071a2e]/75 via-[#071a2e]/45 to-[#071a2e]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#071a2e]/80" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 pb-16 flex flex-col items-center">
        
        {/* Simple, understated tag */}
        <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#38bdf8] font-medium mb-4 sm:mb-6">
          An Original Maritime Fantasy
        </p>

        {/* Exact Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0F9FF] leading-[1.12] mb-5 sm:mb-6 break-words max-w-3xl">
          A World Waiting to be Entered
        </h1>

        {/* Exact Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#BAE6FD]/90 font-light leading-relaxed mb-8 sm:mb-10">
          Beyond the known oceans lies {UNIVERSE_NAME}, a world of maritime adventure, forgotten mysteries that refuse to remain buried.
        </p>

        {/* Exact Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#explorer-visa"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[44px] rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-sky-500/20 text-center flex items-center justify-center"
          >
            Apply for Your Explorer Visa
          </a>
          
          <a
            href="#meet-captain-cool"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 min-h-[44px] rounded-xl border border-sky-400/30 hover:border-[#38bdf8] bg-[#071a2e]/70 hover:bg-[#071a2e]/90 text-[#F0F9FF] text-xs sm:text-sm tracking-wide transition-all duration-200 backdrop-blur-sm text-center flex items-center justify-center gap-2"
          >
            <span>Discover {UNIVERSE_NAME}</span>
            <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
          </a>
        </div>

        {/* Subtle scroll cue */}
        <div className="mt-12 sm:mt-16">
          <a
            href="#meet-captain-cool"
            className="min-h-[44px] text-xs text-[#BAE6FD]/60 hover:text-[#38bdf8] transition-colors inline-flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Scroll to Section 2"
          >
            <span className="tracking-widest uppercase text-[10px]">Scroll to Explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#38bdf8]/80 group-hover:text-[#38bdf8]" />
          </a>
        </div>

      </div>
    </section>
  );
};
