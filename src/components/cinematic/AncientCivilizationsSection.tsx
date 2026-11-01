'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Landmark, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { DEMO_CIVILIZATIONS } from '@/data/demo/civilizations';

export const AncientCivilizationsSection: React.FC = () => {
  const preDeluge = DEMO_CIVILIZATIONS[0];

  return (
    <section id="civilizations" className="relative py-28 sm:py-36 bg-transparent overflow-hidden border-b border-sky-400/10">

      {/* Background Subtle Sky Blue Gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#38bdf8]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Number & Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs tracking-[0.3em] text-[#38bdf8] uppercase">
            03 / LOST EPOCHS
          </span>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-[#F0F9FF] leading-tight mb-6">
            MONUMENTS OF THE FIRST DELUGE.
          </h2>
          <p className="text-base sm:text-lg text-[#BAE6FD] font-light leading-relaxed">
            Thousands of tide cycles before current realms forged their banners, primordial builders raised cyclopean basalt pillars that still resonate with oceanic magnetic fields.
          </p>
        </div>

        {/* Feature Hero Image with Embedded Archaeological Dossier */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-[#38bdf8]/30 shadow-[0_0_35px_rgba(56,189,248,0.15)] mb-16 group">

          <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full">
            <Image
              src="/images/ancient-ruins-deep.jpg"
              alt="Submerged Cyclopean Architecture and Glowing Ancient Glyph Columns of Sorvia"
              fill
              sizes="100vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-[#071a2e]/40 to-transparent opacity-90 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071a2e]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Overlay Architectural Annotation */}
          <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 max-w-xl z-10">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#38bdf8] block mb-2">
              DISCOVERY SITE: THE SUNKEN COLONNADE
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F0F9FF] mb-3">
              {preDeluge.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed mb-6">
              {preDeluge.shortDescription}
            </p>

            <Link
              href={`/lore?category=civilization&entity=${preDeluge.id}`}
              className="btn-cinematic-secondary text-xs flex items-center gap-2.5 w-fit"
            >
              <span>INSPECT ARCHAEOLOGICAL RECORDS</span>
              <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

