'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ShieldAlert, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { UNIVERSE_NAME } from '@/config/site';

export const dynamic = 'force-static';

export default function AdminPage() {
  const adminSections = [
    { title: 'Kingdoms Management', status: 'Archive Ready' },
    { title: 'Locations & Islands', status: 'Archive Ready' },
    { title: 'Character Dossiers', status: 'Archive Ready' },
    { title: 'Creatures Encyclopedia', status: 'Archive Ready' },
    { title: 'Legendary Ships', status: 'Archive Ready' },
    { title: 'Ancient Civilizations', status: 'Archive Ready' },
    { title: 'Historical Timelines', status: 'Archive Ready' },
    { title: 'Trilogy Books & Chapters', status: 'Archive Ready' },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-sorvia-abyss text-sorvia-pearl">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24">

        {/* Navigation Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-sorvia-cyan hover:text-sorvia-pearl transition-colors min-h-[44px] py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Public Website</span>
          </Link>
        </div>

        {/* Page Banner */}
        <SectionHeading
          badgeText="Administrative Portal"
          badgeIcon={<Lock className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title={`${UNIVERSE_NAME} Content Console`}
          subtitle="Administrative portal for worldbuilders, lore managers, and story architects."
        />

        {/* Demo Mode Notice Card */}
        <div className="max-w-4xl mx-auto p-4 sm:p-6 rounded-2xl bg-sorvia-deep border border-sorvia-cyan/35 mb-8 sm:mb-12 shadow-cyan-glow">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-sorvia-cyan flex-shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs sm:text-sm text-sorvia-silver leading-relaxed">
              <h3 className="text-base sm:text-lg font-bold text-sorvia-pearl">
                Client Console Mode
              </h3>
              <p>
                The administrative panel provides a structured overview of all registered universe entities, allowing authors to organize canon status, verify geographical tags, and review narrative outlines.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 font-mono text-[11px] text-sorvia-cyan">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Client Local Storage
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Instant Preview
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Canon Approval Gates
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduled Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {adminSections.map((sec, i) => (
            <div
              key={i}
              className="sorvia-card p-4 sm:p-5 rounded-xl border border-sorvia-border/60 flex flex-col justify-between"
            >
              <span className="text-sm font-semibold text-sorvia-pearl">
                {sec.title}
              </span>
              <span className="mt-3 font-mono text-[10px] text-sorvia-cyan px-2 py-0.5 rounded bg-sorvia-abyss inline-block w-fit">
                {sec.status}
              </span>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
