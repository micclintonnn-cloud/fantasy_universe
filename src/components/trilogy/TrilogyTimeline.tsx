'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DEMO_TRILOGY } from '@/data/demo/trilogy';

export const TrilogyTimeline: React.FC = () => {
  const steps = [
    {
      act: 'ACT I',
      book: DEMO_TRILOGY[0],
      marker: '01 / THE AWAKENING',
      theme: 'Departure from Known Waters',
      coordinates: 'Sector Western Shelf • 08°N',
      description: 'The journey begins at the edge of the sovereign archipelagos. An enigmatic lodestone anomaly draws an independent crew through the Eastern Sea-Gates into uncharted turquoise waters.',
      tag: 'Exploration & Departure',
    },
    {
      act: 'ACT II',
      book: DEMO_TRILOGY[1],
      marker: '02 / THE FRACTURE',
      theme: 'Sovereign Hegemony & War',
      coordinates: 'The Singing Meridian • 22°N',
      description: 'The secret of the outer route triggers an imperial naval race. Massive armored war galleons contest the acoustic sea gates while deep-sea tremors signal primordial forces awakening.',
      tag: 'Conflict & Alliance',
    },
    {
      act: 'ACT III',
      book: DEMO_TRILOGY[2],
      marker: '03 / THE CONVERGENCE',
      theme: 'Threshold of the Origin',
      coordinates: 'The Primordial Horizon • 00°',
      description: 'Beyond all magnetic orientation, the united flotilla reaches the crystalline monoliths at the world’s boundary, unveiling the ultimate secret of Sorvia’s oceanic universe.',
      tag: 'Destiny & Revelation',
    },
  ];

  return (
    <div className="rounded-2xl p-4 sm:p-8 lg:p-12 bg-[#0a2948]/75 border border-sky-400/20 shadow-[0_0_35px_rgba(56,189,248,0.12)]">

      {/* Timeline Section Eyebrow */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="font-mono text-xs tracking-[0.25em] text-[#38bdf8] uppercase block mb-2 font-semibold">
          THE THREE-ACT VOYAGE
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F0F9FF]">
          Chronology of the Grand Expedition
        </h3>
        <p className="text-xs sm:text-sm text-[#BAE6FD] font-light mt-2.5 sm:mt-3 leading-relaxed">
          The narrative progression tracing the voyage from provincial anchorages to the celestial boundary of the outer ocean.
        </p>
      </div>

      {/* 3-Step Horizontal Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">

        {/* Connector Line on Desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#38bdf8]/10 via-[#38bdf8]/40 to-[#38bdf8]/10 -translate-y-12 z-0" />

        {steps.map((step) => (
          <div
            key={step.act}
            className="relative z-10 p-5 sm:p-6 rounded-xl bg-[#071a2e]/90 border border-sky-400/20 hover:border-[#38bdf8]/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/5 mb-3 sm:mb-4 gap-2">
                <span className="font-mono text-xs text-[#38bdf8] tracking-widest font-bold">
                  {step.act}
                </span>
                <span className="text-[10px] font-mono text-[#BAE6FD]/60">
                  {step.coordinates}
                </span>
              </div>

              <span className="font-mono text-[10px] tracking-widest text-[#7dd3fc] uppercase block mb-1">
                {step.marker}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#F0F9FF] group-hover:text-[#38bdf8] transition-colors mb-2">
                {step.book.subtitle}
              </h4>

              <div className="inline-block px-2.5 py-0.5 rounded bg-[#0a2948] border border-sky-400/30 text-[10px] font-mono text-[#38bdf8] mb-3 sm:mb-4">
                {step.tag}
              </div>

              <p className="text-xs sm:text-sm text-[#BAE6FD] font-light leading-relaxed mb-6">
                {step.description}
              </p>
            </div>

            <Link
              href={`/trilogy/${step.book.slug}`}
              className="text-xs font-mono text-[#38bdf8] hover:text-[#F0F9FF] transition-colors inline-flex items-center gap-1.5 pt-3 border-t border-white/5 min-h-[36px]"
            >
              <span>Examine Act Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
};
