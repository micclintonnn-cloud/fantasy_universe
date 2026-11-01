'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Sparkles, Map, BookOpen, Layers, Compass, ArrowRight } from 'lucide-react';
import { UNIVERSE_NAME, PROTAGONIST_NAME } from '@/config/site';

export default function ExplorePage() {
  const exploreGateways = [
    {
      title: 'World Atlas & Cartography',
      desc: 'Sound the depths of hadal trenches, chart sea lanes, and survey island atolls.',
      href: '/atlas',
      icon: Map,
      label: 'Open Atlas',
    },
    {
      title: 'Canonical Lore Encyclopedia',
      desc: 'Browse dossiers on maritime kingdoms, legendary ships, civilizations, and creatures.',
      href: '/lore',
      icon: BookOpen,
      label: 'Browse Lore',
    },
    {
      title: 'The Narrative Trilogy',
      desc: 'Explore the three-book story arc following the voyage beyond the singing meridian.',
      href: '/trilogy',
      icon: Layers,
      label: 'Discover Books',
    },
    {
      title: 'The Central Protagonist',
      desc: `Learn about ${PROTAGONIST_NAME} and the expedition that challenged the edge of known maps.`,
      href: '/characters/protagonist',
      icon: Compass,
      label: 'Inspect Dossier',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-sorvia-abyss text-sorvia-pearl">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24">

        {/* Page Banner */}
        <SectionHeading
          badgeText="Expedition Gateway"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title={`Explore the ${UNIVERSE_NAME} Universe`}
          subtitle="Navigate through the core pillars of the digital world. Choose your path through geography, history, factions, and the narrative trilogy."
        />

        {/* 4 Primary Navigation Gateways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          {exploreGateways.map((gate, i) => {
            const Icon = gate.icon;
            return (
              <div
                key={i}
                className="sorvia-card rounded-2xl p-5 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sorvia-deep border border-sorvia-cyan/40 text-sorvia-cyan flex items-center justify-center mb-4 sm:mb-5 shadow-cyan-glow group-hover:border-sorvia-cyan transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-sorvia-pearl mb-2 group-hover:text-sorvia-cyan transition-colors">
                    {gate.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sorvia-silver/80 leading-relaxed mb-6 font-light">
                    {gate.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sorvia-border/60">
                  <Link
                    href={gate.href}
                    className="btn-cinematic-primary w-full py-3 min-h-[44px] rounded-xl text-xs flex items-center justify-center gap-2"
                  >
                    <span>{gate.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#071a2e]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <Footer />
    </main>
  );
}
