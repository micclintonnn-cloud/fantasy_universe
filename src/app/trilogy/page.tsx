'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BookCard } from '@/components/trilogy/BookCard';
import { TrilogyTimeline } from '@/components/trilogy/TrilogyTimeline';
import { BookExcerptModal } from '@/components/trilogy/BookExcerptModal';
import { Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { DEMO_TRILOGY } from '@/data/demo/trilogy';
import { TrilogyBook } from '@/types/world';
import { UNIVERSE_NAME, PROTAGONIST_NAME } from '@/config/site';

export default function TrilogyPage() {
  const [selectedExcerptBook, setSelectedExcerptBook] = useState<TrilogyBook | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenExcerpt = (book: TrilogyBook) => {
    setSelectedExcerptBook(book);
    setIsModalOpen(true);
  };

  const handleCloseExcerpt = () => {
    setIsModalOpen(false);
    setSelectedExcerptBook(null);
  };

  return (
    <main className="min-h-screen flex flex-col bg-transparent text-[#F0F9FF] selection:bg-[#38bdf8]/25 selection:text-[#38bdf8]">
      <Navbar />

      {/* Cinematic Saga Hero Banner */}
      <section className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-sky-400/10">
        
        {/* Ambient Sea-Sky Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/horizon-celestial-dawn.jpg"
            alt={`The Grand Horizon of the ${UNIVERSE_NAME} Trilogy`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-[#071a2e]/70 to-[#071a2e]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a2e]/90 via-transparent to-[#071a2e]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a2948]/85 border border-[#38bdf8]/40 backdrop-blur-md mb-6 sm:mb-8 shadow-sky-glow">
            <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#38bdf8] uppercase font-semibold">
              THE THREE-BOOK ODYSSEY
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F0F9FF] leading-[1.1] mb-5 sm:mb-6">
            The Chronicles of {UNIVERSE_NAME}
          </h1>

          {/* Saga Lead Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#BAE6FD] font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            A three-act oceanic voyage from familiar provincial archipelagos to the warring meridians of rival empires, culminating at the threshold of the deep sea.
          </p>

          {/* Coordinate Marks */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#BAE6FD]/60">
            <span>CANON VOLUMES I — III</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/60 hidden sm:inline-block" />
            <span>SPOILER-FREE EDITIONS</span>
          </div>

        </div>

      </section>

      {/* Main Content Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        {/* Narrative & Author Protection Guardrail */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-20 p-4 sm:p-5 rounded-xl bg-[#0a2948]/75 border border-[#38bdf8]/30 text-xs text-[#BAE6FD] flex items-start gap-3 shadow-[0_0_25px_rgba(56,189,248,0.12)]">
          <ShieldCheck className="w-5 h-5 text-[#38bdf8] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-[#38bdf8] font-bold uppercase tracking-wider block">
              Narrative Integrity
            </span>
            <p className="font-light leading-relaxed">
              In accordance with authorial guardrails, all plot twists, character betrayals, and story resolutions are strictly withheld. This page presents the thematic architecture, geographical settings, and spoiler-free excerpts for each volume.
            </p>
          </div>
        </div>

        {/* 3 Books Showcase */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-[#38bdf8] uppercase font-semibold">
              THE VOLUMES
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
          </div>

          {DEMO_TRILOGY.map((book, index) => (
            <BookCard
              key={book.id}
              book={book}
              onReadExcerpt={handleOpenExcerpt}
              reverseLayout={index % 2 === 1}
            />
          ))}
        </div>

        {/* 3-Act Chronology Timeline */}
        <div className="mb-16 sm:mb-24">
          <TrilogyTimeline />
        </div>

        {/* Central Protagonist Connection Banner */}
        <div className="rounded-2xl p-5 sm:p-8 lg:p-12 bg-gradient-to-r from-[#0a2948]/90 via-[#0c3358]/80 to-[#0a2948]/90 border border-sky-400/25 shadow-abyss-depth flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="space-y-2 sm:space-y-3 max-w-2xl text-center md:text-left">
            <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase block">
              THE CENTRAL PROTAGONIST
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F0F9FF]">
              The Voyager Who Charts the Uncharted
            </h3>
            <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed">
              Every act of the trilogy is tethered to the journey of {PROTAGONIST_NAME}, navigating by the acoustic frequency of the singing meridian and the call of the horizon.
            </p>
          </div>

          <Link
            href="/characters/protagonist"
            className="btn-cinematic-primary text-xs px-6 sm:px-8 py-3.5 min-h-[44px] flex items-center justify-center gap-2 w-full md:w-auto flex-shrink-0 text-center"
          >
            <span>VIEW PROTAGONIST DOSSIER</span>
            <ArrowRight className="w-4 h-4 text-[#071a2e]" />
          </Link>
        </div>

      </div>

      {/* Interactive Excerpt Modal */}
      <BookExcerptModal
        book={selectedExcerptBook}
        isOpen={isModalOpen}
        onClose={handleCloseExcerpt}
      />

      <Footer />
    </main>
  );
}
