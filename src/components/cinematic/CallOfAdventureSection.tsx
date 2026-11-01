'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, User, Anchor, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { DEMO_PROTAGONIST } from '@/data/demo/protagonist';
import { DEMO_SHIPS } from '@/data/demo/ships';

export const CallOfAdventureSection: React.FC = () => {
  const flagship = DEMO_SHIPS[0];

  return (
    <section id="call-of-adventure" className="py-28 sm:py-36 bg-transparent relative border-b border-sky-400/10 overflow-hidden">
      
      {/* Ambient Sea Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#38bdf8]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Number & Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-[#38bdf8] uppercase">
            05 / THE CALL OF ADVENTURE
          </span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
        </div>

        {/* Dramatic Transition Heading & Content (Exact Master Prompt Requirement) */}
        <div className="max-w-4xl mb-20">
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F0F9FF] leading-tight mb-8">
            THE HORIZON IS ONLY THE BEGINNING.
          </h2>
          <p className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#F0F9FF]/90 font-light leading-relaxed italic border-l-2 border-[#38bdf8] pl-6 py-1 mb-8">
            &ldquo;Beyond familiar waters lie places untouched by time, stories waiting to unfold, and adventures that begin where the known world ends.&rdquo;
          </p>

          <Link
            href="/explore"
            className="btn-cinematic-primary text-xs inline-flex items-center gap-2.5"
          >
            <span>BEGIN EXPLORING</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Editorial Storytelling: Protagonist & Flagship Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Protagonist Feature (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl p-8 sm:p-10 bg-[#0a2948]/85 border border-[#38bdf8]/35 shadow-[0_0_35px_rgba(56,189,248,0.15)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#38bdf8]">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>THE CENTRAL PROTAGONIST</span>
                </span>
                <span className="text-[10px] text-[#BAE6FD]/60">BOOK ONE LEAD</span>
              </div>

              {/* Character Concept Visual Preview */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#38bdf8]/30 group/proto">
                <Image
                  src="/images/protagonist-voyager.jpg"
                  alt="The Central Protagonist of Sorvia standing on forecastle deck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover/proto:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2948] via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-[#071a2e]/85 backdrop-blur-md border border-[#38bdf8]/40 text-[9px] font-mono tracking-widest text-[#38bdf8] uppercase">
                  THE VOYAGER OF THE HORIZON
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-widest block mb-1">
                  {DEMO_PROTAGONIST.subtitle}
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#F0F9FF]">
                  {DEMO_PROTAGONIST.name}
                </h3>
              </div>

              <blockquote className="p-4 rounded-xl bg-[#071a2e]/90 border-l-2 border-[#38bdf8] text-sm font-cinzel italic text-[#F0F9FF] leading-snug">
                &ldquo;{DEMO_PROTAGONIST.emotionalCore}&rdquo;
              </blockquote>

              <p className="text-sm text-[#BAE6FD] font-light leading-relaxed">
                {DEMO_PROTAGONIST.shortDescription}
              </p>

              <div className="space-y-2 pt-2 text-xs font-mono text-[#BAE6FD]">
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>The Calling: {DEMO_PROTAGONIST.calling}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Author Guardrail: Plot developments remain confidential</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8">
              <Link
                href="/characters/protagonist"
                className="btn-cinematic-secondary w-full text-xs flex items-center justify-center gap-2"
              >
                <span>DISCOVER HIS JOURNEY</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
            </div>
          </div>

          {/* The Flagship Vessel Feature (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl p-8 sm:p-10 bg-[#0a2948]/85 border border-sky-400/25 shadow-[0_0_35px_rgba(56,189,248,0.15)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-[#38bdf8]">
                <span className="flex items-center gap-2">
                  <Anchor className="w-4 h-4" />
                  <span>THE EXPEDITION VESSEL</span>
                </span>
                <span className="text-[10px] text-[#BAE6FD]/60">420 TUNNES</span>
              </div>

              <div>
                <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-widest block mb-1">
                  {flagship.subtitle}
                </span>
                <h3 className="font-editorial text-3xl font-bold text-[#F0F9FF]">
                  {flagship.name}
                </h3>
              </div>

              <p className="text-sm text-[#BAE6FD] font-light leading-relaxed">
                {flagship.fullLore}
              </p>

              <div className="p-4 rounded-xl bg-[#071a2e]/90 border border-sky-400/20 space-y-2 font-mono text-xs text-[#BAE6FD]">
                <div className="flex justify-between">
                  <span className="text-[#BAE6FD]/60">Keel Material:</span>
                  <span className="text-[#F0F9FF]">{flagship.keelMaterial}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#BAE6FD]/60">Crew Complement:</span>
                  <span className="text-[#F0F9FF]">{flagship.complement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#BAE6FD]/60">Armament:</span>
                  <span className="text-[#38bdf8]">{flagship.armament}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8">
              <Link
                href={`/lore?category=ship&entity=${flagship.id}`}
                className="btn-cinematic-secondary w-full text-xs flex items-center justify-center gap-2"
              >
                <span>INSPECT VESSEL SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

