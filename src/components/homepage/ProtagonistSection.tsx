'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, Shield, User, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_PROTAGONIST } from '@/data/demo/protagonist';

export const ProtagonistSection: React.FC = () => {
  return (
    <section id="protagonist" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-abyss relative overflow-hidden">
      
      {/* Background Bioluminescent Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sorvia-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="The Odyssey"
          badgeIcon={<User className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="The Central Protagonist"
          subtitle="At the core of the Sorvia universe is a seafarer drawn toward the edge of the world, whose voyage forms the foundation of the trilogy."
        />

        {/* Narrative & Confidentiality Guardrail Alert */}
        <div className="max-w-4xl mx-auto mb-12 p-3.5 rounded-lg bg-sorvia-deep/90 border border-sorvia-cyan/30 text-xs text-sorvia-silver/90 flex items-center justify-between gap-4 shadow-cyan-glow">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-sorvia-cyan flex-shrink-0" />
            <span>
              <strong>Creative Integrity Guardrail:</strong> {DEMO_PROTAGONIST.confidentialGuardrail}
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] text-sorvia-cyan px-2 py-0.5 rounded bg-sorvia-abyss border border-sorvia-border">
            CANON PENDING
          </span>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Character Artwork Placeholder Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl p-1 bg-gradient-to-b from-sorvia-cyan/50 via-sorvia-border to-sorvia-deep shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-sorvia-surface to-sorvia-deep flex flex-col items-center justify-between p-8 border border-sorvia-cyan/30">
                
                {/* Background Rotating Astrolabe Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                  <div
                    className="w-72 h-72 rounded-full border-2 border-dashed border-sorvia-cyan animate-spin"
                    style={{ animationDuration: '45s' }}
                  />
                </div>

                {/* Top Badge */}
                <div className="w-full flex justify-between items-center text-[11px] font-mono text-sorvia-cyan z-10">
                  <span>EXPEDITION COMMANDER</span>
                  <span>BOOK ONE LEAD</span>
                </div>

                {/* Action-Oriented Character Silhouette Graphic */}
                <div className="relative z-10 my-auto flex flex-col items-center">
                  <div className="relative w-44 h-56 flex items-center justify-center">
                    <svg viewBox="0 0 160 200" className="w-full h-full text-sorvia-pearl drop-shadow-[0_0_25px_rgba(50,230,224,0.45)]">
                      {/* Cloak caught in salt gale */}
                      <path d="M40,75 C25,110 15,160 10,195 C45,185 80,180 120,190 C105,145 95,100 85,75 Z" fill="#0c2e4f" opacity="0.95" />
                      {/* Torso & Sea Coat */}
                      <path d="M50,70 L75,65 L100,70 L95,135 L55,135 Z" fill="#1b4d7c" stroke="#32E6E0" strokeWidth="1" />
                      {/* Bandolier & Harness */}
                      <line x1="53" y1="72" x2="92" y2="132" stroke="#D4AF37" strokeWidth="2.5" />
                      {/* Explorer Hat */}
                      <path d="M45,45 Q75,30 105,45 Q75,18 45,45 Z" fill="#081b2e" stroke="#32E6E0" strokeWidth="1.5" />
                      <circle cx="75" cy="54" r="14" fill="#EAF7F5" />
                      {/* Raised Arm with Brass Spyglass */}
                      <line x1="95" y1="78" x2="130" y2="60" stroke="#EAF7F5" strokeWidth="7" strokeLinecap="round" />
                      <line x1="125" y1="62" x2="155" y2="50" stroke="#D4AF37" strokeWidth="4.5" strokeLinecap="round" />
                      {/* Wind trails */}
                      <path d="M110,35 Q135,28 150,32" stroke="#32E6E0" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                      <path d="M20,110 Q5,120 0,135" stroke="#32E6E0" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-sorvia-cyan mt-3 text-center uppercase tracking-wider">
                    [Cinematic Character Artwork Placeholder]
                  </span>
                </div>

                {/* Bottom Frame Tag */}
                <div className="w-full text-center z-10 pt-2 border-t border-sorvia-border/60">
                  <span className="text-[10px] text-sorvia-silver/70 font-cinzel">
                    Visual Archetype • Official Canon Artwork Pending
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Narrative Core Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-sorvia-cyan block">
                {DEMO_PROTAGONIST.subtitle}
              </span>
              <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-sorvia-pearl">
                {DEMO_PROTAGONIST.name}
              </h3>
            </div>

            {/* Central Emotional Idea (Exact Master Prompt Requirement) */}
            <blockquote className="border-l-4 border-sorvia-cyan pl-6 py-3 my-4 bg-sorvia-deep/80 rounded-r-lg shadow-cyan-glow">
              <p className="font-cinzel text-xl sm:text-2xl font-bold text-sorvia-pearl leading-snug">
                &ldquo;{DEMO_PROTAGONIST.emotionalCore}&rdquo;
              </p>
            </blockquote>

            <p className="text-sorvia-silver/90 text-base sm:text-lg leading-relaxed font-light">
              {DEMO_PROTAGONIST.fullLore}
            </p>

            {/* Character Traits Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {DEMO_PROTAGONIST.knownTraits.map((trait, i) => (
                <div key={i} className="p-3 rounded-lg bg-sorvia-deep/80 border border-sorvia-border/60 text-xs text-sorvia-pearl flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-sorvia-cyan flex-shrink-0 mt-0.5" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>

            {/* Action Button linking to Dedicated Protagonist Experience */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/characters/protagonist"
                className="btn-cyan w-full sm:w-auto px-7 py-3 rounded text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <span>Discover His Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <span className="text-xs text-sorvia-silver/60 font-mono">
                Spoiler-free introduction • Milestone 2 expanded
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

