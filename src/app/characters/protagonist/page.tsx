'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DEMO_PROTAGONIST } from '@/data/demo/protagonist';
import { DEMO_SHIPS } from '@/data/demo/ships';
import {
  Compass,
  Anchor,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  MapPin,
  Feather,
  Navigation,
} from 'lucide-react';

export default function ProtagonistPage() {
  const flagship = DEMO_SHIPS[0];

  return (
    <main className="min-h-screen flex flex-col bg-transparent text-[#F0F9FF] selection:bg-[#38bdf8]/25 selection:text-[#38bdf8]">
      <Navbar />

      {/* Cinematic Protagonist Hero */}
      <section className="relative pt-24 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-sky-400/10">

        {/* Environmental Backdrop with Ambient Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src={DEMO_PROTAGONIST.imageUrl || '/images/protagonist-voyager.jpg'}
            alt={DEMO_PROTAGONIST.name}
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
            <Link href="/" className="hover:text-[#F0F9FF] transition-colors flex items-center gap-1.5 py-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Horizon</span>
            </Link>
            <span>/</span>
            <span className="text-[#BAE6FD]/70">Character Archive</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

            {/* Left: Concept Artwork Showcase (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-[#38bdf8]/40 shadow-[0_0_50px_rgba(56,189,248,0.25)] group">
                <Image
                  src={DEMO_PROTAGONIST.imageUrl || '/images/protagonist-voyager.jpg'}
                  alt={DEMO_PROTAGONIST.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e] via-transparent to-transparent opacity-70" />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-3 py-1 rounded-full bg-[#071a2e]/85 backdrop-blur-md border border-[#38bdf8]/50 text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase">
                  TRILOGY LEAD
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-3 sm:p-4 rounded-xl bg-[#071a2e]/85 backdrop-blur-md border border-white/5">
                  <span className="font-mono text-[10px] text-[#38bdf8] tracking-widest uppercase block">
                    ROLE
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#F0F9FF]">
                    {DEMO_PROTAGONIST.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative Identity & Emotional Core (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2948] border border-[#38bdf8]/40 text-xs font-mono text-[#38bdf8] uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>CENTRAL PROTAGONIST</span>
              </div>

              <div>
                <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-widest block mb-1">
                  {DEMO_PROTAGONIST.subtitle}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F0F9FF] leading-tight">
                  {DEMO_PROTAGONIST.name}
                </h1>
              </div>

              {/* Emotional Core */}
              <blockquote className="p-4 sm:p-5 rounded-xl bg-[#0a2948]/90 border-l-2 border-[#38bdf8] text-base sm:text-lg lg:text-xl italic text-[#F0F9FF] leading-relaxed shadow-sm font-light">
                &ldquo;{DEMO_PROTAGONIST.emotionalCore}&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#BAE6FD] font-light leading-relaxed">
                {DEMO_PROTAGONIST.fullLore}
              </p>

              {/* Quick Spec Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 text-xs font-mono text-[#BAE6FD]">
                <div className="p-3 rounded-xl bg-[#0a2948]/70 border border-sky-400/15">
                  <span className="text-[10px] text-[#BAE6FD]/60 block uppercase">Calling</span>
                  <span className="text-[#38bdf8] font-semibold">{DEMO_PROTAGONIST.calling}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0a2948]/70 border border-sky-400/15">
                  <span className="text-[10px] text-[#BAE6FD]/60 block uppercase">Origins</span>
                  <span className="text-[#F0F9FF] font-semibold">{DEMO_PROTAGONIST.origin}</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0a2948]/70 border border-sky-400/15">
                  <span className="text-[10px] text-[#BAE6FD]/60 block uppercase">Flagship</span>
                  <span className="text-[#38bdf8] font-semibold">{flagship.name}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/trilogy"
                  className="btn-cinematic-primary text-xs flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>DISCOVER HIS SAGA IN THE TRILOGY</span>
                </Link>

                <Link
                  href="/atlas"
                  className="btn-cinematic-secondary text-xs flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto"
                >
                  <MapPin className="w-4 h-4 text-[#38bdf8]" />
                  <span>VIEW HIS CHARTED ROUTE</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Main Narrative & Character Body */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12 sm:space-y-16">

        {/* Section 1: Core Traits */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.25em] text-[#38bdf8] uppercase font-semibold">
              01 / NARRATIVE TRAITS
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {DEMO_PROTAGONIST.knownTraits.map((trait, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#0a2948]/80 border border-sky-400/20 hover:border-[#38bdf8]/50 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#071a2e] border border-[#38bdf8]/40 flex items-center justify-center text-[#38bdf8] shadow-sky-glow flex-shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-widest block mb-1">
                    TRAIT 0{idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-[#F0F9FF] leading-relaxed font-light">
                    {trait}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Navigational Gear */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.25em] text-[#38bdf8] uppercase font-semibold">
              02 / NAVIGATIONAL ARTIFACTS
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DEMO_PROTAGONIST.navigationalGear?.map((item) => (
              <div
                key={item.name}
                className="p-5 sm:p-6 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-[#38bdf8]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#071a2e] border border-sky-400/25 flex items-center justify-center text-[#38bdf8] mb-3 sm:mb-4">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#F0F9FF] mb-1.5 sm:mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#BAE6FD] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-[#38bdf8]">
                  Field Equipment
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Flagship Vessel Connection */}
        <div className="rounded-2xl p-5 sm:p-8 lg:p-10 bg-[#0a2948]/85 border border-sky-400/25 shadow-abyss-depth space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 border-b border-white/10 gap-3">
            <div>
              <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase flex items-center gap-1.5 mb-1">
                <Anchor className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>EXPEDITION FLAGSHIP</span>
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F0F9FF]">
                {flagship.name}
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-[#071a2e] border border-sky-400/30 text-[#38bdf8]">
              {flagship.vesselClass}
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#BAE6FD] font-light leading-relaxed">
            {flagship.fullLore}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-5 rounded-xl bg-[#071a2e]/90 border border-sky-400/15 font-mono text-xs text-[#BAE6FD]">
            <div>
              <span className="text-[#BAE6FD]/60 block text-[10px] uppercase">Keel Timber</span>
              <span className="text-[#F0F9FF] font-semibold">{flagship.keelMaterial}</span>
            </div>
            <div>
              <span className="text-[#BAE6FD]/60 block text-[10px] uppercase">Displacement</span>
              <span className="text-[#F0F9FF] font-semibold">{flagship.displacement}</span>
            </div>
            <div>
              <span className="text-[#BAE6FD]/60 block text-[10px] uppercase">Complement</span>
              <span className="text-[#F0F9FF] font-semibold">{flagship.complement}</span>
            </div>
            <div>
              <span className="text-[#BAE6FD]/60 block text-[10px] uppercase">Armament</span>
              <span className="text-[#38bdf8] font-semibold">{flagship.armament}</span>
            </div>
          </div>
        </div>

        {/* Section 4: Role Across the Three Books */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.25em] text-[#38bdf8] uppercase font-semibold">
              03 / TRILOGY ROLE EVOLUTION
            </span>
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#38bdf8]/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-7 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-[#38bdf8]/60 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#38bdf8] tracking-widest font-bold block mb-1.5 sm:mb-2">
                  BOOK I
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-[#F0F9FF] mb-2 sm:mb-3">
                  The Call of the Outer Seas
                </h4>
                <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed">
                  {DEMO_PROTAGONIST.trilogyRoleSnippet?.book1}
                </p>
              </div>
              <Link
                href="/trilogy/book-1"
                className="mt-5 pt-3.5 border-t border-white/5 text-xs font-mono text-[#38bdf8] hover:text-[#F0F9FF] inline-flex items-center gap-1.5 min-h-[36px]"
              >
                <span>Inspect Volume I</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 sm:p-7 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-[#38bdf8]/60 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#38bdf8] tracking-widest font-bold block mb-1.5 sm:mb-2">
                  BOOK II
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-[#F0F9FF] mb-2 sm:mb-3">
                  The Fractured Meridian
                </h4>
                <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed">
                  {DEMO_PROTAGONIST.trilogyRoleSnippet?.book2}
                </p>
              </div>
              <Link
                href="/trilogy/book-2"
                className="mt-5 pt-3.5 border-t border-white/5 text-xs font-mono text-[#38bdf8] hover:text-[#F0F9FF] inline-flex items-center gap-1.5 min-h-[36px]"
              >
                <span>Inspect Volume II</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-5 sm:p-7 rounded-xl bg-[#0a2948]/75 border border-sky-400/20 hover:border-[#38bdf8]/60 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#38bdf8] tracking-widest font-bold block mb-1.5 sm:mb-2">
                  BOOK III
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-[#F0F9FF] mb-2 sm:mb-3">
                  The Sovereign Horizon
                </h4>
                <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed">
                  {DEMO_PROTAGONIST.trilogyRoleSnippet?.book3}
                </p>
              </div>
              <Link
                href="/trilogy/book-3"
                className="mt-5 pt-3.5 border-t border-white/5 text-xs font-mono text-[#38bdf8] hover:text-[#F0F9FF] inline-flex items-center gap-1.5 min-h-[36px]"
              >
                <span>Inspect Volume III</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 5: Navigator's Logbook Dispatch */}
        {DEMO_PROTAGONIST.sampleLogEntry && (
          <div className="rounded-2xl p-5 sm:p-8 lg:p-12 bg-[#0a2948]/90 border border-[#38bdf8]/35 shadow-[0_0_35px_rgba(56,189,248,0.12)] space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 sm:pb-4 border-b border-sky-400/20 gap-2 sm:gap-3">
              <span className="font-mono text-xs text-[#38bdf8] tracking-widest uppercase flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
                <span className="truncate">FORECASTLE LOGBOOK EXCERPT</span>
              </span>
              <span className="text-[10px] font-mono text-[#BAE6FD]/70">
                {DEMO_PROTAGONIST.sampleLogEntry.cycle}
              </span>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base lg:text-lg text-[#F0F9FF]/95 leading-relaxed font-light italic font-serif">
              {DEMO_PROTAGONIST.sampleLogEntry.text.map((entry, idx) => (
                <p key={idx} className="indent-4 sm:indent-6">
                  &ldquo;{entry}&rdquo;
                </p>
              ))}
            </div>

            <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#BAE6FD]/60">
              <span>{DEMO_PROTAGONIST.sampleLogEntry.bearing}</span>
              <span>{DEMO_PROTAGONIST.sampleLogEntry.soundings}</span>
            </div>
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
