import React from 'react';
import Link from 'next/link';
import { BookOpen, Layers, Sparkles, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_TRILOGY } from '@/data/demo/trilogy';

export const TrilogyOverview: React.FC = () => {
  return (
    <section id="trilogy" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-deep/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="The Three-Book Saga"
          badgeIcon={<Layers className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="The Sorvia Narrative Trilogy"
          subtitle="A three-act oceanic epic following a voyage from charted home waters, through escalating imperial conflicts, to the primordial world-altering horizon."
        />

        {/* 3 Books Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {DEMO_TRILOGY.map((book) => (
            <div
              key={book.id}
              className="sorvia-card rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Book Volume Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-sorvia-border/60 mb-5">
                  <span className="font-mono text-xs text-sorvia-cyan flex items-center gap-1.5 font-bold">
                    <BookOpen className="w-4 h-4 text-sorvia-cyan" />
                    <span>BOOK 0{book.bookNumber}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sorvia-abyss text-sorvia-pearl border border-sorvia-border">
                    {book.status}
                  </span>
                </div>

                {/* Title & Theme */}
                <span className="text-xs font-mono uppercase tracking-widest text-sorvia-cyan block mb-1">
                  {book.volumeLabel}
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-sorvia-pearl mb-3 group-hover:text-sorvia-cyan transition-colors">
                  {book.title}
                </h3>

                <div className="p-3 rounded-lg bg-sorvia-deep/90 border-l-2 border-sorvia-cyan mb-5 text-xs text-sorvia-pearl/90 font-cinzel italic">
                  &ldquo;{book.centralTheme}&rdquo;
                </div>

                <p className="text-xs sm:text-sm text-sorvia-silver/85 leading-relaxed mb-6 font-light">
                  {book.spoilerFreeSynopsis}
                </p>

                {/* Narrative Focus */}
                <div className="p-3.5 rounded-lg bg-sorvia-abyss/80 border border-sorvia-border/60 text-xs font-mono mb-6">
                  <span className="text-sorvia-silver/60 block text-[10px] uppercase mb-1">
                    Narrative Focus
                  </span>
                  <span className="text-sorvia-pearl leading-snug">
                    {book.narrativeFocus}
                  </span>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-sorvia-border/60">
                <Link
                  href={`/trilogy#book-${book.bookNumber}`}
                  className="btn-outline-ocean w-full py-2.5 rounded text-xs flex items-center justify-center gap-2"
                >
                  <span>Explore Book Overview</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Narrative Guardrail Notice */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-sorvia-abyss/80 border border-sorvia-cyan/20 text-center text-xs text-sorvia-silver/80 flex items-center justify-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-sorvia-cyan flex-shrink-0" />
          <span>
            <strong>Spoiler-Free Storytelling Guarantee:</strong> All trilogy synopses preserve narrative suspense. Crucial plot turns, character fates, and endings remain strictly undisclosed.
          </span>
        </div>

      </div>
    </section>
  );
};

