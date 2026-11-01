'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const TheMysterySection: React.FC = () => {
  return (
    <section id="the-mystery" className="relative py-16 sm:py-24 lg:py-32 bg-[#071a2e] text-[#F0F9FF] border-t border-sky-400/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Submerged Monolith Artwork (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-sky-400/20 shadow-2xl shadow-sky-950/40">
              <Image
                src="/images/ancient-ruins-deep.jpg"
                alt="Submerged ancient monoliths glowing in the deep ocean"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#071a2e]/85 backdrop-blur-md border border-white/10">
                <p className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider">Book One Mystery</p>
                <p className="text-base sm:text-lg font-bold text-white">The Submerged Monoliths</p>
              </div>
            </div>
          </div>

          {/* Narrative Hook (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div>
              <p className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-1.5 sm:mb-2">
                04 &bull; The Mystery of Book One
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F0F9FF]">
                The Riddle of the Singing Meridian
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#38bdf8] mt-1 font-light">
                What the Imperial Navies Refused to Chart
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base text-[#BAE6FD]/85 font-light leading-relaxed">
              <p>
                For centuries, the imperial crowns declared that nothing lay beyond the outer sea-gates except dead water and ship-breaking storms.
              </p>
              <p>
                They were wrong. Five hundred fathoms beneath the surface, ancient cyclopean stone towers have begun to vibrate in harmony with the tides. The sound travels for thousands of leagues, confounding ordinary compasses and drawing free voyagers toward uncharted waters.
              </p>
              <p className="text-xs sm:text-sm text-[#BAE6FD]/70 italic">
                Who built the towers? What woke them after millennia of silence? And why are the imperial armadas quietly mobilizing to destroy anyone who reaches them?
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/trilogy/book-1"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 min-h-[44px] rounded-xl bg-[#0a2948] hover:bg-[#0e3863] border border-sky-400/30 text-xs sm:text-sm font-medium text-white transition-colors w-full sm:w-auto text-center"
              >
                <span>Read the Book One Synopsis</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
              
              <Link
                href="/atlas"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 min-h-[44px] rounded-xl hover:bg-white/5 border border-sky-400/20 sm:border-transparent text-xs sm:text-sm text-[#BAE6FD] transition-colors w-full sm:w-auto text-center"
              >
                <span>View the World Atlas</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
