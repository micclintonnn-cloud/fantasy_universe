'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Info, Compass, Shield, Sparkles, Layers, Cpu, Globe, ArrowRight } from 'lucide-react';
import { UNIVERSE_NAME } from '@/config/site';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-sorvia-abyss text-sorvia-pearl">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24">

        {/* Page Banner */}
        <SectionHeading
          badgeText="World-Building Vision"
          badgeIcon={<Info className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title={`About the ${UNIVERSE_NAME} Universe`}
          subtitle={`An original, expandable maritime fantasy world crafted for immersive digital exploration, storytelling, interactive cartography, and future expansion.`}
        />

        {/* Narrative Vision Card */}
        <div className="max-w-4xl mx-auto sorvia-card rounded-2xl p-5 sm:p-8 lg:p-12 mb-12 sm:mb-16 shadow-2xl relative">
          <div className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg text-sorvia-silver/90 font-light leading-relaxed">
            <p>
              {UNIVERSE_NAME} was conceived as an antidote to conventional fantasy tropes. Instead of land-locked empires and familiar medieval forests, {UNIVERSE_NAME} takes inspiration from the majesty and terror of unexplored oceans, bioluminescent deep-sea reefs, floating limestone massifs, and the lost knowledge of pre-deluge builders.
            </p>
            <p>
              The digital universe is engineered from the ground up to support interconnected fictional knowledge: kingdoms with explicit geopolitical treaties, deep-sea trenches with hydrographic soundings, legendary vessels with authentic naval specifications, and a three-book narrative trilogy centered around a fearless protagonist.
            </p>
            <blockquote className="border-l-4 border-sorvia-cyan pl-4 sm:pl-6 py-2 my-4 bg-sorvia-deep/80 rounded-r text-sorvia-pearl italic text-sm sm:text-base font-light">
              &ldquo;Across uncharted waters, beneath ancient skies, and beyond the boundaries of known kingdoms lies {UNIVERSE_NAME} — a world shaped by adventure, mystery, and the endless call of the sea.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* 3 Architecture Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="sorvia-card p-5 sm:p-6 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sorvia-deep border border-sorvia-cyan/40 text-sorvia-cyan flex items-center justify-center mb-4 shadow-cyan-glow flex-shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-sorvia-pearl mb-2">
                Static-First Architecture
              </h3>
              <p className="text-xs sm:text-sm text-sorvia-silver/80 leading-relaxed font-light">
                Designed to operate cleanly with high performance, instant page navigation, and zero external hosting dependencies.
              </p>
            </div>
            <span className="mt-4 pt-3 border-t border-sorvia-border/60 font-mono text-[10px] text-sorvia-cyan">
              ZERO-LATENCY ARCHIVE
            </span>
          </div>

          <div className="sorvia-card p-5 sm:p-6 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sorvia-deep border border-sorvia-cyan/40 text-sorvia-cyan flex items-center justify-center mb-4 shadow-cyan-glow flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-sorvia-pearl mb-2">
                Creative Integrity
              </h3>
              <p className="text-xs sm:text-sm text-sorvia-silver/80 leading-relaxed font-light">
                Key narrative resolutions and character secrets are safeguarded. The archive distinguishes established canon from exploratory notes.
              </p>
            </div>
            <span className="mt-4 pt-3 border-t border-sorvia-border/60 font-mono text-[10px] text-sorvia-cyan">
              AUTHOR CANON PROTECTED
            </span>
          </div>

          <div className="sorvia-card p-5 sm:p-6 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sorvia-deep border border-sorvia-cyan/40 text-sorvia-cyan flex items-center justify-center mb-4 shadow-cyan-glow flex-shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-sorvia-pearl mb-2">
                Future Expandability
              </h3>
              <p className="text-xs sm:text-sm text-sorvia-silver/80 leading-relaxed font-light">
                Data structures are normalized with shared entity IDs, ready for interactive 3D map exploration and multimedia expansion.
              </p>
            </div>
            <span className="mt-4 pt-3 border-t border-sorvia-border/60 font-mono text-[10px] text-sorvia-cyan">
              EXPANDABLE FOUNDATION
            </span>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="btn-cinematic-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] rounded-xl text-xs tracking-wider w-full sm:w-auto"
          >
            <span>Return to Horizon</span>
            <ArrowRight className="w-4 h-4 text-[#071a2e]" />
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}
