import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DEMO_TRILOGY } from '@/data/demo/trilogy';
import {
  BookOpen,
  Compass,
  Anchor,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export async function generateStaticParams() {
  return DEMO_TRILOGY.map((book) => ({
    id: book.slug,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const book = DEMO_TRILOGY.find((b) => b.slug === params.id || b.id === params.id);
  if (!book) return { title: 'Book Not Found — Sorvia Trilogy' };

  return {
    title: `${book.title} (${book.subtitle}) — The Sorvia Trilogy`,
    description: book.spoilerFreeSynopsis,
  };
}

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const bookIndex = DEMO_TRILOGY.findIndex((b) => b.slug === params.id || b.id === params.id);
  if (bookIndex === -1) {
    notFound();
  }

  const book = DEMO_TRILOGY[bookIndex];
  const prevBook = bookIndex > 0 ? DEMO_TRILOGY[bookIndex - 1] : null;
  const nextBook = bookIndex < DEMO_TRILOGY.length - 1 ? DEMO_TRILOGY[bookIndex + 1] : null;

  return (
    <main className="min-h-screen flex flex-col bg-transparent text-[#F0F9FF] selection:bg-[#38bdf8]/25 selection:text-[#38bdf8]">
      <Navbar />

      {/* Cinematic Book Hero */}
      <section className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-sky-400/10">
        
        {/* Cover Artwork Background with Blur & Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src={book.imageUrl}
            alt={book.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.55] contrast-[1.1] blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-[#071a2e]/70 to-[#071a2e]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071a2e]/95 via-[#071a2e]/80 to-[#071a2e]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-6 sm:mb-8 min-h-[36px]">
            <Link href="/" className="hover:text-[#F0F9FF] transition-colors py-1">
              Home
            </Link>
            <span>/</span>
            <Link href="/trilogy" className="hover:text-[#F0F9FF] transition-colors py-1">
              The Trilogy
            </Link>
            <span>/</span>
            <span className="text-[#BAE6FD]/70">{book.volumeLabel}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Book Cover Showcase (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-[#38bdf8]/40 shadow-[0_0_45px_rgba(56,189,248,0.2)] group">
                <Image
                  src={book.imageUrl}
                  alt={`${book.title} — ${book.subtitle}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1 rounded-full bg-[#071a2e]/85 backdrop-blur-md border border-[#38bdf8]/50 text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase">
                  {book.volumeLabel}
                </div>
              </div>
            </div>

            {/* Right: Book Metadata & Premise (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full bg-[#0a2948] border border-[#38bdf8]/40 text-xs font-mono text-[#38bdf8] uppercase tracking-wider">
                  BOOK {book.bookNumber}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#071a2e] border border-sky-400/20 text-xs font-mono text-[#BAE6FD]/80">
                  {book.status}
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F0F9FF] leading-tight">
                  {book.title}
                </h1>
                <span className="text-xl sm:text-2xl text-[#38bdf8] italic block mt-1">
                  {book.subtitle}
                </span>
              </div>

              <blockquote className="p-4 sm:p-5 rounded-xl bg-[#0a2948]/85 border-l-2 border-[#38bdf8] text-sm sm:text-base italic text-[#F0F9FF] leading-relaxed shadow-sm font-light">
                &ldquo;{book.centralTheme}&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#BAE6FD] font-light leading-relaxed">
                {book.spoilerFreeSynopsis}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#reading-room"
                  className="btn-cinematic-primary text-xs flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
                >
                  <BookOpen className="w-4 h-4 text-[#071a2e]" />
                  <span>READ SAMPLE PASSAGE</span>
                </a>

                <Link
                  href="/atlas"
                  className="btn-cinematic-secondary text-xs flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
                >
                  <Compass className="w-4 h-4 text-[#38bdf8]" />
                  <span>VIEW WORLD ATLAS</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Main Details Body */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12 sm:space-y-16">

        {/* Section 1: Narrative Scope & Arcs */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.25em] text-[#38bdf8] uppercase font-semibold">
              01 / NARRATIVE ARCHITECTURE
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {book.narrativeArcs.map((arc, idx) => (
              <div
                key={arc.title}
                className="p-5 sm:p-7 rounded-xl bg-[#0a2948]/80 border border-sky-400/20 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest block mb-2">
                    ACT PHASE 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F0F9FF] mb-2 sm:mb-3">
                    {arc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed">
                    {arc.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-white/5 text-[10px] font-mono text-[#BAE6FD]/60">
                  Spoiler-Free Canonical Outline
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Geographical Backdrop & Ships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Key Locations (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl p-5 sm:p-8 bg-[#0a2948]/75 border border-sky-400/20 space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 gap-2">
              <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>PRIMARY OCEANIC SECTORS</span>
              </span>
              <span className="text-[10px] font-mono text-[#BAE6FD]/60">
                SETTINGS
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {book.keyLocations.map((loc) => (
                <div
                  key={loc.name}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#071a2e]/80 border border-sky-400/15 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0 pr-2">
                    <h4 className="text-sm sm:text-base font-bold text-[#F0F9FF] truncate">
                      {loc.name}
                    </h4>
                    <span className="text-xs font-mono text-[#38bdf8] block truncate">
                      {loc.type}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#BAE6FD]/60 text-right flex-shrink-0">
                    [{loc.coordinates}]
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/atlas"
              className="text-xs font-mono text-[#38bdf8] hover:text-[#F0F9FF] transition-colors inline-flex items-center gap-1.5 min-h-[36px]"
            >
              <span>Explore All Sectors in Interactive Atlas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Featured Ships (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl p-5 sm:p-8 bg-[#0a2948]/75 border border-sky-400/20 space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 gap-2">
              <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5" />
                <span>FEATURED EXPEDITION FLEET</span>
              </span>
              <span className="text-[10px] font-mono text-[#BAE6FD]/60">
                VESSELS
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {book.featuredShips.map((ship) => (
                <div
                  key={ship.name}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#071a2e]/80 border border-sky-400/15 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0 pr-2">
                    <h4 className="text-sm sm:text-base font-bold text-[#F0F9FF] truncate">
                      {ship.name}
                    </h4>
                    <span className="text-xs font-mono text-[#38bdf8] block truncate">
                      {ship.vesselClass}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#BAE6FD]/60 text-right flex-shrink-0">
                    {ship.role}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/lore"
              className="text-xs font-mono text-[#38bdf8] hover:text-[#F0F9FF] transition-colors inline-flex items-center gap-1.5 min-h-[36px]"
            >
              <span>Inspect Full Maritime Fleet Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Section 3: The Reading Room (Sample Excerpt) */}
        <div id="reading-room" className="rounded-2xl p-4 sm:p-8 lg:p-12 bg-[#0a2948]/90 border border-[#38bdf8]/35 shadow-abyss-depth space-y-6 sm:space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-sky-400/20 gap-3">
            <div>
              <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-[#38bdf8]" />
                <span>THE READING ROOM • PREVIEW</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F0F9FF]">
                {book.sampleExcerpt.title}
              </h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#071a2e] border border-sky-400/30 text-[#BAE6FD] w-fit">
              Official Excerpt
            </span>
          </div>

          {/* Epigraph */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#071a2e]/90 border-l-2 border-[#38bdf8] italic text-xs sm:text-sm text-[#BAE6FD] leading-relaxed">
            {book.sampleExcerpt.epigraph}
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-[#F0F9FF]/95 leading-relaxed font-light font-serif">
            {book.sampleExcerpt.passage.map((para, i) => (
              <p key={i} className="indent-4 sm:indent-8">
                {para}
              </p>
            ))}
          </div>

          {/* Footer note */}
          <div className="pt-4 sm:pt-6 border-t border-sky-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-[#BAE6FD]/60">
            <span>Excerpt authorized under creator creative sovereignty</span>
            <span>All canonical rights reserved</span>
          </div>

        </div>

        {/* Next & Previous Volume Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-sky-400/20">
          {prevBook ? (
            <Link
              href={`/trilogy/${prevBook.slug}`}
              className="p-5 sm:p-6 rounded-xl bg-[#0a2948]/60 border border-sky-400/15 hover:border-[#38bdf8] transition-all flex items-center gap-3 sm:gap-4 group min-h-[44px]"
            >
              <ChevronLeft className="w-5 h-5 text-[#38bdf8] group-hover:-translate-x-1 transition-transform flex-shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-[#BAE6FD]/60 uppercase tracking-widest block">
                  PREVIOUS VOLUME
                </span>
                <span className="text-base sm:text-lg font-bold text-[#F0F9FF] group-hover:text-[#38bdf8] transition-colors truncate block">
                  {prevBook.title}
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextBook ? (
            <Link
              href={`/trilogy/${nextBook.slug}`}
              className="p-5 sm:p-6 rounded-xl bg-[#0a2948]/60 border border-sky-400/15 hover:border-[#38bdf8] transition-all flex items-center justify-end gap-3 sm:gap-4 text-right group ml-auto w-full min-h-[44px]"
            >
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-[#BAE6FD]/60 uppercase tracking-widest block">
                  NEXT VOLUME
                </span>
                <span className="text-base sm:text-lg font-bold text-[#F0F9FF] group-hover:text-[#38bdf8] transition-colors truncate block">
                  {nextBook.title}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#38bdf8] group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>

      </div>

      <Footer />
    </main>
  );
}
