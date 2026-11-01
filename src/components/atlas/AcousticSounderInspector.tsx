'use client';

import React from 'react';
import Link from 'next/link';
import {
  Info,
  ExternalLink,
  Compass,
  Waves,
  ShieldAlert,
  Radio,
  Sparkles,
  Anchor,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { AtlasLocation } from '@/data/types';
import { PROTAGONIST_NAME } from '@/config/site';

interface AcousticSounderInspectorProps {
  location: AtlasLocation | null;
}

export const AcousticSounderInspector: React.FC<AcousticSounderInspectorProps> = ({ location }) => {
  if (!location) {
    return (
      <div className="parchment-card rounded-2xl p-6 sm:p-8 border border-sky-400/25 shadow-xl text-center space-y-4 bg-[#0a2948]/85">
        <div className="w-12 h-12 rounded-xl bg-[#071a2e] border border-sky-400/30 flex items-center justify-center text-[#38bdf8] mx-auto">
          <Compass className="w-6 h-6 animate-pulse" />
        </div>
        <h3 className="text-lg font-bold text-white">Select a Sector or Landmark</h3>
        <p className="text-xs text-[#BAE6FD]/70 font-light leading-relaxed max-w-xs mx-auto">
          Click any location marker or oceanic sounding point on the chart to inspect hydrographic records and {PROTAGONIST_NAME}’s voyage logs.
        </p>
      </div>
    );
  }

  // Fathom calculation for the visual gauge bar (max 1240 fathoms)
  const depth = location.depth_fathoms || 0;
  const maxDepth = 1240;
  const depthPercentage = Math.min(100, Math.max(4, (depth / maxDepth) * 100));

  return (
    <div className="parchment-card rounded-2xl p-5 sm:p-7 border border-[#38bdf8]/35 shadow-2xl space-y-6 bg-[#0a2948]/90">

      {/* Top Header: Record Type & Danger Badge */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
          <Radio className="w-4 h-4 text-[#38bdf8] animate-pulse flex-shrink-0" />
          <span className="uppercase tracking-wider">HYDROGRAPHIC SOUNDING</span>
        </div>

        <span
          className={`text-[10px] font-mono px-2.5 py-1 rounded font-bold uppercase ${location.danger_rating === 'Tranquil'
              ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/50'
              : location.danger_rating === 'Navigable'
                ? 'bg-sky-950/80 text-[#38bdf8] border border-sky-500/50'
                : location.danger_rating === 'Perilous'
                  ? 'bg-amber-950/80 text-amber-300 border border-amber-500/50'
                  : 'bg-rose-950/80 text-rose-400 border border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
            }`}
        >
          {location.danger_rating}
        </span>
      </div>

      {/* Location Identity */}
      <div>
        <p className="text-[10px] uppercase font-mono tracking-widest text-[#38bdf8] block mb-1">
          {location.region}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
          {location.name}
        </h3>
        <p className="text-xs font-mono text-[#BAE6FD]/70 capitalize mt-1">
          Classification: {location.type.replace('_', ' ')}
        </p>
      </div>

      {/* Acoustic Depth Sounder Gauge */}
      <div className="p-4 rounded-xl bg-[#071a2e]/90 border border-sky-400/20 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#BAE6FD]/70 flex items-center gap-1.5">
            <Waves className="w-3.5 h-3.5 text-[#38bdf8]" /> Sounded Depth
          </span>
          <span className="text-white font-bold text-sm">
            {depth.toLocaleString()} <span className="text-xs font-normal text-[#38bdf8]">Fathoms</span>
          </span>
        </div>

        {/* Visual Depth Bar */}
        <div className="relative w-full h-3 rounded-full bg-[#05111d] overflow-hidden border border-sky-400/20">
          <div
            style={{ width: `${depthPercentage}%` }}
            className={`h-full rounded-full transition-all duration-700 ${depth > 800
                ? 'bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#38bdf8]'
                : depth > 100
                  ? 'bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]'
                  : 'bg-gradient-to-r from-[#38bdf8] to-[#7dd3fc]'
              }`}
          />
        </div>

        <div className="flex justify-between text-[10px] font-mono text-[#BAE6FD]/50">
          <span>0 (Surface)</span>
          <span>500 Fathoms</span>
          <span>1,240 (Hadal Abyss)</span>
        </div>
      </div>

      {/* Narrative Summary */}
      <p className="text-xs sm:text-sm text-[#BAE6FD]/85 leading-relaxed font-light">
        {location.summary}
      </p>

      {/* Captain Cool's Field Sounder Log Quote */}
      {location.logExcerpt && (
        <div className="p-4 rounded-xl bg-[#071a2e]/90 border-l-2 border-[#38bdf8] space-y-1.5">
          <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block">
            {PROTAGONIST_NAME} &bull; Sounder Journal
          </span>
          <p className="text-xs sm:text-sm italic text-[#F0F9FF] leading-relaxed font-light font-serif">
            {location.logExcerpt}
          </p>
        </div>
      )}

      {/* Navigational Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-[#071a2e]/70 border border-sky-400/15 text-xs font-mono">
        <div>
          <span className="text-[10px] text-[#BAE6FD]/60 block uppercase">Lodestone Reading</span>
          <span className="font-semibold text-white truncate block">
            {location.lodestoneReading || 'Nominal Alignment'}
          </span>
        </div>

        <div>
          <span className="text-[10px] text-[#BAE6FD]/60 block uppercase">Dominant Current</span>
          <span className="font-semibold text-[#38bdf8] truncate block">
            {location.dominantCurrent ? `${location.dominantCurrent} (${location.currentSpeedKnots} kn)` : 'Variable Drift'}
          </span>
        </div>
      </div>

      {/* Trade Goods / Relics */}
      {location.trade_goods && location.trade_goods.length > 0 && (
        <div>
          <span className="text-xs font-semibold text-[#38bdf8] block mb-2 uppercase tracking-wider font-mono">
            Discovered Relics &amp; Commodities
          </span>
          <div className="flex flex-wrap gap-1.5">
            {location.trade_goods.map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-[#071a2e] border border-sky-400/20 text-[#BAE6FD]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Links */}
      <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
        <Link
          href={`/lore?entity=${location.entity_id}`}
          className="btn-cinematic-secondary w-full py-2.5 text-xs flex items-center justify-center gap-2 min-h-[44px]"
        >
          <ExternalLink className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>View Lore Dossier</span>
        </Link>

        <Link
          href="/trilogy/book-1"
          className="btn-cinematic-primary w-full py-2.5 text-xs flex items-center justify-center gap-2 min-h-[44px]"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#071a2e]" />
          <span>Book One Role</span>
        </Link>
      </div>

    </div>
  );
};

