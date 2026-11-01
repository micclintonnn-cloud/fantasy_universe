'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookCheck, Download, Headphones } from 'lucide-react';
import { DEMO_TRILOGY } from '@/data/demo/trilogy';
import { UNIVERSE_NAME } from '@/config/site';

export const ReadTheStorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sample' | 'purchase'>('sample');
  const bookOne = DEMO_TRILOGY[0];
  const sample = bookOne.sampleExcerpt;

  return (
    <section id="read-the-story" className="relative py-16 sm:py-24 lg:py-32 bg-[#071a2e] text-[#F0F9FF] border-t border-sky-400/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-1.5 sm:mb-2">
            06 &bull; The Story
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F0F9FF] mb-2 sm:mb-3">
            Read Book One
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#BAE6FD]/85 font-light">
            Read the opening sample of the {UNIVERSE_NAME} Trilogy, or order your edition.
          </p>
        </div>

        {/* Minimalist Mobile-First Switcher */}
        <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12 max-w-xs sm:max-w-none mx-auto">
          <button
            onClick={() => setActiveTab('sample')}
            className={`px-5 py-3 min-h-[44px] rounded-xl text-xs font-medium tracking-wide transition-all flex items-center justify-center ${
              activeTab === 'sample'
                ? 'bg-[#38bdf8] text-[#071a2e] font-semibold shadow-md shadow-sky-500/20'
                : 'bg-[#0a2948] text-[#BAE6FD] hover:bg-[#0e3863]'
            }`}
          >
            Read Prologue Sample
          </button>
          <button
            onClick={() => setActiveTab('purchase')}
            className={`px-5 py-3 min-h-[44px] rounded-xl text-xs font-medium tracking-wide transition-all flex items-center justify-center ${
              activeTab === 'purchase'
                ? 'bg-[#38bdf8] text-[#071a2e] font-semibold shadow-md shadow-sky-500/20'
                : 'bg-[#0a2948] text-[#BAE6FD] hover:bg-[#0e3863]'
            }`}
          >
            Purchase Options
          </button>
        </div>

        {/* Tab 1: Clean Sample Reader */}
        {activeTab === 'sample' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Book Cover (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-36 sm:w-44 aspect-[2/3] rounded-xl overflow-hidden border border-sky-400/30 shadow-2xl shadow-sky-950/50 mb-4">
                <Image
                  src={bookOne.imageUrl}
                  alt={bookOne.title}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">{bookOne.title}</h3>
              <p className="text-xs text-[#38bdf8] mb-4">{bookOne.subtitle}</p>
              <button
                onClick={() => setActiveTab('purchase')}
                className="w-full max-w-[200px] py-2.5 min-h-[44px] rounded-xl bg-[#0a2948] hover:bg-[#0e3863] border border-sky-400/30 text-xs font-medium text-white transition-colors"
              >
                Order Book One
              </button>
            </div>

            {/* Reader Container (8 cols) */}
            <div className="md:col-span-8 p-4 sm:p-8 lg:p-10 rounded-2xl bg-[#0a2948]/70 border border-sky-400/20 shadow-xl space-y-5 sm:space-y-6">
              
              <div>
                <p className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider mb-1">
                  Sample Excerpt
                </p>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  {sample?.title || 'Prologue: Beyond the Last Sea-Gate'}
                </h4>
              </div>

              {sample?.epigraph && (
                <p className="italic text-xs sm:text-sm text-[#BAE6FD]/80 border-l-2 border-[#38bdf8] pl-3 py-1">
                  {sample.epigraph}
                </p>
              )}

              <div className="space-y-4 text-sm sm:text-base text-[#EAF7F5]/90 font-light leading-relaxed font-serif">
                {sample?.passage.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs text-[#BAE6FD]/70">
                  End of sample excerpt.
                </span>
                <Link
                  href="/trilogy/book-1"
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs text-[#38bdf8] hover:underline"
                >
                  <span>Explore Volume I Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Clean Purchase Information */}
        {activeTab === 'purchase' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Hardcover */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a2948]/80 border border-sky-400/30 flex flex-col justify-between space-y-5">
              <div>
                <BookCheck className="w-6 h-6 text-[#38bdf8] mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Collector&apos;s Hardcover</h4>
                <p className="text-xs text-[#BAE6FD]/75 leading-relaxed mb-4">
                  Clothbound hardcover with gold foil stamping and full-color foldout map of the archipelago.
                </p>
                <p className="text-xl sm:text-2xl font-bold text-white">$48 <span className="text-xs font-normal text-[#BAE6FD]/60">USD</span></p>
              </div>
              <button
                type="button"
                className="w-full py-3 min-h-[44px] rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-semibold text-xs tracking-wide uppercase transition-all flex items-center justify-center"
              >
                Pre-Order Hardcover
              </button>
            </div>

            {/* E-Book */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a2948]/80 border border-sky-400/20 flex flex-col justify-between space-y-5">
              <div>
                <Download className="w-6 h-6 text-[#38bdf8] mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Digital Edition</h4>
                <p className="text-xs text-[#BAE6FD]/75 leading-relaxed mb-4">
                  Instant EPUB, Kindle, and PDF formats for all tablets and e-readers.
                </p>
                <p className="text-xl sm:text-2xl font-bold text-white">$14 <span className="text-xs font-normal text-[#BAE6FD]/60">USD</span></p>
              </div>
              <button
                type="button"
                className="w-full py-3 min-h-[44px] rounded-xl bg-[#071a2e] hover:bg-[#0e3863] border border-sky-400/30 text-white text-xs font-medium uppercase tracking-wide transition-all flex items-center justify-center"
              >
                Pre-Order Digital
              </button>
            </div>

            {/* Audiobook */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a2948]/80 border border-sky-400/20 flex flex-col justify-between space-y-5">
              <div>
                <Headphones className="w-6 h-6 text-[#38bdf8] mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">Audiobook</h4>
                <p className="text-xs text-[#BAE6FD]/75 leading-relaxed mb-4">
                  Full-cast narration complete with original maritime soundscapes and orchestral score.
                </p>
                <p className="text-xl sm:text-2xl font-bold text-white">$26 <span className="text-xs font-normal text-[#BAE6FD]/60">USD</span></p>
              </div>
              <button
                type="button"
                className="w-full py-3 min-h-[44px] rounded-xl bg-[#071a2e] hover:bg-[#0e3863] border border-sky-400/30 text-white text-xs font-medium uppercase tracking-wide transition-all flex items-center justify-center"
              >
                Pre-Order Audiobook
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
