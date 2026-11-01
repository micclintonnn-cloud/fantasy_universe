'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass } from 'lucide-react';
import { UNIVERSE_NAME, PROTAGONIST_NAME, VESSEL_NAME } from '@/config/site';

export const MeetCaptainCoolSection: React.FC = () => {
  return (
    <section id="meet-captain-cool" className="relative py-16 sm:py-24 lg:py-32 bg-[#071a2e] text-[#F0F9FF] border-t border-sky-400/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Captain Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-sky-400/20 shadow-2xl shadow-sky-950/40">
              <Image
                src="/images/protagonist-voyager.jpg"
                alt={`${PROTAGONIST_NAME} on the deck of ${VESSEL_NAME}`}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#071a2e]/85 backdrop-blur-md border border-white/10">
                <p className="text-[11px] font-medium text-[#38bdf8] uppercase tracking-wider">The Central Protagonist</p>
                <p className="text-base sm:text-lg font-bold text-white">{PROTAGONIST_NAME}</p>
              </div>
            </div>
          </div>

          {/* Character Narrative Story */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div>
              <p className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-1.5 sm:mb-2">
                02 &bull; The Voyager
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F0F9FF]">
                Meet {PROTAGONIST_NAME}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#38bdf8] mt-1 font-light">
                The Central Character of the {UNIVERSE_NAME} Trilogy
              </p>
            </div>

            <blockquote className="border-l-2 border-[#38bdf8] pl-3.5 sm:pl-4 py-1 text-base sm:text-lg lg:text-xl italic text-[#BAE6FD] font-light">
              &ldquo;The horizon isn’t a boundary. It’s an invitation to see what they were afraid to look at.&rdquo;
            </blockquote>

            <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base text-[#BAE6FD]/85 font-light leading-relaxed">
              <p>
                While the navies of the old kingdoms stay safe behind their fortified sea-gates, {PROTAGONIST_NAME} heads straight for the outer ocean. Armed with an acoustic lodestone and an unyielding curiosity, he takes his ship into waters where imperial maps simply run blank.
              </p>
              <p>
                His voyage isn’t driven by conquest or treasure. It’s a quest to understand why the deep ocean has begun to sing—and what truth was buried when the first world fell beneath the waves.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/characters/protagonist"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 min-h-[44px] rounded-xl bg-[#0a2948] hover:bg-[#0e3863] border border-sky-400/30 text-xs sm:text-sm font-medium text-white transition-colors text-center"
              >
                <span>Read {PROTAGONIST_NAME}&apos;s Full Story</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
              
              <Link
                href="/trilogy/book-1"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 min-h-[44px] rounded-xl hover:bg-white/5 border border-transparent sm:border-transparent text-xs sm:text-sm text-[#BAE6FD] transition-colors text-center"
              >
                <Compass className="w-4 h-4 text-[#38bdf8]" />
                <span>His First Voyage in Book I</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
