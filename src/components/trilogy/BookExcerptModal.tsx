'use client';

import React from 'react';
import { X, BookOpen, Sparkles } from 'lucide-react';
import { TrilogyBook } from '@/types/world';

interface BookExcerptModalProps {
  book: TrilogyBook | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookExcerptModal: React.FC<BookExcerptModalProps> = ({ book, isOpen, onClose }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-[#050B12]/85 backdrop-blur-xl animate-fadeIn">
      
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0a2948] border border-[#38bdf8]/40 shadow-[0_0_50px_rgba(56,189,248,0.25)] p-4 sm:p-8 lg:p-10 z-10 text-[#F0F9FF]">
        
        {/* Header with Title & Close button */}
        <div className="flex items-start justify-between pb-4 sm:pb-6 border-b border-sky-400/20 mb-5 sm:mb-6 gap-3">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] uppercase tracking-wider mb-1">
              <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{book.volumeLabel} &bull; OFFICIAL EXCERPT</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F0F9FF] leading-tight">
              {book.sampleExcerpt.title}
            </h2>
            <span className="text-xs font-mono text-[#BAE6FD]/70 block mt-0.5 truncate">
              From {book.title} ({book.subtitle})
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#071a2e] border border-sky-400/20 hover:border-[#38bdf8] text-[#BAE6FD] hover:text-[#F0F9FF] transition-colors flex-shrink-0"
            aria-label="Close excerpt modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Epigraph Callout */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#071a2e]/80 border-l-2 border-[#38bdf8] mb-6 sm:mb-8 italic text-xs sm:text-sm text-[#BAE6FD] leading-relaxed font-light">
          {book.sampleExcerpt.epigraph}
        </div>

        {/* Reading Passage */}
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-[#F0F9FF]/95 font-light leading-relaxed font-serif">
          {book.sampleExcerpt.passage.map((paragraph, index) => (
            <p key={index} className="indent-4 sm:indent-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-sky-400/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[#BAE6FD]/70">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
            <span>Spoiler-Free Excerpt &bull; Author Verified</span>
          </div>
          <button
            onClick={onClose}
            className="btn-cinematic-secondary text-xs py-2.5 px-6 min-h-[44px] w-full sm:w-auto flex items-center justify-center"
          >
            Close Excerpt
          </button>
        </div>

      </div>

    </div>
  );
};
