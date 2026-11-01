'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight, Anchor, MapPin, Sparkles } from 'lucide-react';
import { TrilogyBook } from '@/types/world';

interface BookCardProps {
  book: TrilogyBook;
  onReadExcerpt: (book: TrilogyBook) => void;
  reverseLayout?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onReadExcerpt, reverseLayout = false }) => {
  return (
    <article
      id={`book-${book.bookNumber}`}
      className="group rounded-2xl bg-[#0a2948]/80 border border-sky-400/20 hover:border-[#38bdf8]/50 transition-all duration-500 overflow-hidden shadow-[0_0_35px_rgba(56,189,248,0.12)] mb-12 sm:mb-16"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Cover Artwork Showcase (5 cols) */}
        <div className={`lg:col-span-5 relative aspect-[16/11] lg:aspect-auto min-h-[220px] sm:min-h-[300px] overflow-hidden ${reverseLayout ? 'lg:order-2' : 'lg:order-1'}`}>
          <Image
            src={book.imageUrl}
            alt={`${book.title} — ${book.subtitle}`}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2948] via-transparent to-transparent opacity-80 lg:hidden" />
          <div className={`absolute inset-0 hidden lg:block bg-gradient-to-${reverseLayout ? 'l' : 'r'} from-transparent to-[#0a2948] opacity-90`} />
          
          {/* Volume Badge Overlay */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1 rounded-full bg-[#071a2e]/85 backdrop-blur-md border border-[#38bdf8]/40 text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase">
            {book.volumeLabel}
          </div>
        </div>

        {/* Narrative Information & Actions (7 cols) */}
        <div className={`lg:col-span-7 p-4 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 sm:space-y-6 ${reverseLayout ? 'lg:order-1' : 'lg:order-2'}`}>
          
          <div className="space-y-3.5 sm:space-y-4">
            {/* Status & Subtitle */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 text-xs font-mono">
              <span className="text-[#38bdf8] tracking-widest uppercase flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>BOOK {book.bookNumber}</span>
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#071a2e] border border-sky-400/25 text-[#BAE6FD] text-[11px]">
                {book.status}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F0F9FF] group-hover:text-[#38bdf8] transition-colors leading-tight">
                {book.title}
              </h2>
              <span className="text-base sm:text-lg text-[#38bdf8] italic block mt-0.5">
                {book.subtitle}
              </span>
            </div>

            {/* Central Theme Blockquote */}
            <blockquote className="p-3.5 sm:p-4 rounded-xl bg-[#071a2e]/90 border-l-2 border-[#38bdf8] text-xs sm:text-sm italic text-[#F0F9FF]/95 leading-relaxed font-light">
              &ldquo;{book.centralTheme}&rdquo;
            </blockquote>

            {/* Synopsis */}
            <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed">
              {book.spoilerFreeSynopsis}
            </p>

            {/* Geographical & Vessel Anchors */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs font-mono text-[#BAE6FD]/80">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071a2e]/60 border border-sky-400/15">
                <MapPin className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
                <span className="truncate">Waters: {book.keyLocations[0]?.name}</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#071a2e]/60 border border-sky-400/15">
                <Anchor className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
                <span className="truncate">Vessel: {book.featuredShips[0]?.name}</span>
              </div>
            </div>
          </div>

          {/* Action Hub */}
          <div className="pt-4 sm:pt-6 border-t border-sky-400/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href={`/trilogy/${book.slug}`}
              className="btn-cinematic-primary w-full sm:w-auto text-xs flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>EXPLORE VOLUME DOSSIER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => onReadExcerpt(book)}
              className="btn-cinematic-secondary w-full sm:w-auto text-xs flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>READ SAMPLE EXCERPT</span>
            </button>
          </div>

        </div>

      </div>
    </article>
  );
};
