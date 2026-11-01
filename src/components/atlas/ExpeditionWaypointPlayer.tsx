'use client';

import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Compass,
  Navigation,
  Anchor,
  Waves,
  Gauge,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { ExpeditionWaypoint } from '@/data/types';
import { PROTAGONIST_NAME, VESSEL_NAME } from '@/config/site';

interface ExpeditionWaypointPlayerProps {
  waypoints: ExpeditionWaypoint[];
  activeWaypoint: ExpeditionWaypoint | null;
  onSelectWaypoint: (waypoint: ExpeditionWaypoint) => void;
  className?: string;
}

export const ExpeditionWaypointPlayer: React.FC<ExpeditionWaypointPlayerProps> = ({
  waypoints,
  activeWaypoint,
  onSelectWaypoint,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Auto-advance scrubber when playing
  useEffect(() => {
    if (!isPlaying || waypoints.length === 0) return;

    const interval = setInterval(() => {
      const currentIndex = waypoints.findIndex(
        (wp) => wp.id === (activeWaypoint?.id || waypoints[0].id)
      );
      const nextIndex = (currentIndex + 1) % waypoints.length;
      onSelectWaypoint(waypoints[nextIndex]);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, activeWaypoint, waypoints, onSelectWaypoint]);

  const currentIndex = activeWaypoint
    ? waypoints.findIndex((wp) => wp.id === activeWaypoint.id)
    : 0;
  const current = activeWaypoint || waypoints[0];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + waypoints.length) % waypoints.length;
    onSelectWaypoint(waypoints[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % waypoints.length;
    onSelectWaypoint(waypoints[nextIndex]);
  };

  if (!current) return null;

  return (
    <div
      className={`parchment-card rounded-2xl p-4 sm:p-6 border border-[#38bdf8]/35 shadow-2xl bg-[#0a2948]/95 relative overflow-hidden ${className}`}
    >
      {/* Decorative background grid and glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Title and Playback Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#071a2e] border border-sky-400/40 flex items-center justify-center text-[#38bdf8] flex-shrink-0 shadow-inner">
            <Navigation className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#38bdf8] uppercase">
                EXPEDITION REPLAY
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-500/30">
                Book One Canon
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
              The Maiden Voyage of <span className="text-[#38bdf8]">{VESSEL_NAME}</span>
            </h3>
          </div>
        </div>

        {/* Transport Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={handlePrev}
            aria-label="Previous waypoint"
            className="w-10 h-10 rounded-lg bg-[#071a2e] border border-white/15 hover:border-[#38bdf8] text-[#BAE6FD] hover:text-white flex items-center justify-center transition-all touch-manipulation active:scale-95"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause voyage replay' : 'Play voyage replay'}
            className="h-10 px-4 rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-sky-500/25 touch-manipulation active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Auto-Replay</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            aria-label="Next waypoint"
            className="w-10 h-10 rounded-lg bg-[#071a2e] border border-white/15 hover:border-[#38bdf8] text-[#BAE6FD] hover:text-white flex items-center justify-center transition-all touch-manipulation active:scale-95"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Waypoint Step Bar (Scrubber) */}
      <div className="py-4">
        <div className="relative">
          {/* Progress Connecting Line */}
          <div className="absolute top-4 left-4 right-4 h-0.5 bg-sky-950/80 border-b border-sky-500/20 -z-0" />
          <div
            className="absolute top-4 left-4 h-0.5 bg-gradient-to-r from-sky-400 to-[#38bdf8] transition-all duration-500 -z-0"
            style={{
              width: `${(currentIndex / (waypoints.length - 1)) * 92}%`,
            }}
          />

          {/* Waypoint Nodes */}
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 scrollbar-thin">
            {waypoints.map((wp, idx) => {
              const isActive = wp.id === current.id;
              const isPassed = idx < currentIndex;

              return (
                <button
                  key={wp.id}
                  onClick={() => {
                    setIsPlaying(false);
                    onSelectWaypoint(wp);
                  }}
                  className="flex flex-col items-center gap-1.5 group flex-1 min-w-[70px] text-center focus:outline-none touch-manipulation"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all z-10 ${isActive
                      ? 'bg-[#38bdf8] text-[#071a2e] ring-4 ring-[#38bdf8]/30 scale-110 shadow-lg shadow-sky-400/40'
                      : isPassed
                        ? 'bg-sky-900 border border-sky-400 text-sky-200 hover:bg-sky-800'
                        : 'bg-[#071a2e] border border-white/20 text-[#BAE6FD]/60 hover:border-white/50'
                      }`}
                  >
                    0{wp.order}
                  </div>
                  <span
                    className={`text-[10px] font-sans font-medium line-clamp-1 max-w-[85px] leading-tight transition-colors ${isActive ? 'text-[#38bdf8] font-bold' : 'text-[#BAE6FD]/70 group-hover:text-white'
                      }`}
                  >
                    {wp.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Waypoint Log Card & Telemetry */}
      <div className="bg-[#071a2e]/80 rounded-xl p-4 sm:p-5 border border-sky-400/20 space-y-4">
        {/* Top Info: Log Title & Step Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#38bdf8] flex-shrink-0" />
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {current.logTitle}
            </h4>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#BAE6FD]/80">
            <span className="text-[#38bdf8] font-bold">LEG 0{current.order}</span>
            <span>OF</span>
            <span>0{waypoints.length}</span>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1">
          <div className="bg-[#0a2948] p-2.5 rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#BAE6FD]/70 uppercase">
              <Compass className="w-3 h-3 text-[#38bdf8]" /> Bearing
            </div>
            <div className="text-xs sm:text-sm font-mono font-bold text-white mt-1 truncate">
              {current.bearing}
            </div>
          </div>

          <div className="bg-[#0a2948] p-2.5 rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#BAE6FD]/70 uppercase">
              <Gauge className="w-3 h-3 text-emerald-400" /> Velocity
            </div>
            <div className="text-xs sm:text-sm font-mono font-bold text-emerald-300 mt-1">
              {current.vesselSpeedKnots} <span className="text-[10px] font-normal text-emerald-400/80">knots</span>
            </div>
          </div>

          <div className="bg-[#0a2948] p-2.5 rounded-lg border border-white/10">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#BAE6FD]/70 uppercase">
              <Waves className="w-3 h-3 text-sky-400" /> Sounded Depth
            </div>
            <div className="text-xs sm:text-sm font-mono font-bold text-sky-300 mt-1">
              {current.depthFathoms} <span className="text-[10px] font-normal text-sky-400/80">fathoms</span>
            </div>
          </div>
        </div>

        {/* Captain Cool Logbook Quote */}
        <div className="bg-[#071a2e] p-3.5 sm:p-4 rounded-lg border-l-2 border-[#38bdf8] text-xs sm:text-sm text-blue-100/90 italic font-serif leading-relaxed">
          &ldquo;{current.logText}&rdquo;
          <div className="mt-2 text-[11px] font-sans font-semibold text-[#38bdf8] not-italic flex items-center gap-1.5">
            <span>— {PROTAGONIST_NAME}</span>
            <span className="text-[#BAE6FD]/50 font-normal">| Master Log of {VESSEL_NAME}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

