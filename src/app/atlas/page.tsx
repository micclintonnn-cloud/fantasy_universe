'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { InteractiveAtlasMap } from '@/components/atlas/InteractiveAtlasMap';
import { AcousticSounderInspector } from '@/components/atlas/AcousticSounderInspector';
import { ExpeditionWaypointPlayer } from '@/components/atlas/ExpeditionWaypointPlayer';
import { SAMPLE_LOCATIONS, SAMPLE_MARITIME_ROUTES, EXPEDITION_WAYPOINTS } from '@/data/atlas';
import { AtlasLocation, ExpeditionWaypoint } from '@/data/types';
import { analytics } from '@/lib/analytics';
import { UNIVERSE_NAME, PROTAGONIST_NAME, VESSEL_NAME } from '@/config/site';
import {
  Compass,
  Anchor,
  ShieldAlert,
  Layers,
  Navigation,
  Filter,
  Search,
  Waves,
  Ship,
  Sparkles,
  BookOpen,
  ArrowRight,
  Gauge
} from 'lucide-react';

export default function AtlasPage() {
  const [selectedLocation, setSelectedLocation] = useState<AtlasLocation | null>(SAMPLE_LOCATIONS[0]);
  const [activeWaypoint, setActiveWaypoint] = useState<ExpeditionWaypoint | null>(EXPEDITION_WAYPOINTS[0]);

  // Filtering & Search
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Layer Toggles
  const [showRoutes, setShowRoutes] = useState<boolean>(true);
  const [showBathymetry, setShowBathymetry] = useState<boolean>(true);
  const [showExpedition, setShowExpedition] = useState<boolean>(true);

  // Filter locations based on category and search query
  const filteredLocations = useMemo(() => {
    return SAMPLE_LOCATIONS.filter((loc) => {
      // Category filter
      if (filterType !== 'all') {
        if (filterType === 'port' && loc.type !== 'fortified_port') return false;
        if (filterType === 'kingdom' && loc.type !== 'kingdom_capital') return false;
        if (filterType === 'trench' && loc.type !== 'oceanic_trench') return false;
        if (filterType === 'beacon' && loc.type !== 'ancient_beacon') return false;
        if (filterType === 'island' && loc.type !== 'wild_island') return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = loc.name.toLowerCase().includes(q);
        const matchesRegion = loc.region.toLowerCase().includes(q);
        const matchesSummary = loc.summary.toLowerCase().includes(q);
        return matchesName || matchesRegion || matchesSummary;
      }

      return true;
    });
  }, [filterType, searchQuery]);

  // Handler for selecting a map location
  const handleSelectLocation = (loc: AtlasLocation) => {
    setSelectedLocation(loc);

    // If this location matches an expedition waypoint, sync active waypoint
    const matchingWp = EXPEDITION_WAYPOINTS.find((wp) => wp.locationId === loc.id);
    if (matchingWp) {
      setActiveWaypoint(matchingWp);
    }

    analytics.track('atlas_marker_inspected', {
      locationId: loc.id,
      name: loc.name,
      danger_rating: loc.danger_rating,
    });
  };

  // Handler for selecting an expedition waypoint from player
  const handleSelectWaypoint = (wp: ExpeditionWaypoint) => {
    setActiveWaypoint(wp);

    // Sync selected location
    const matchingLoc = SAMPLE_LOCATIONS.find((loc) => loc.id === wp.locationId);
    if (matchingLoc) {
      setSelectedLocation(matchingLoc);
    }

    analytics.track('atlas_waypoint_scrubbed', {
      waypointId: wp.id,
      order: wp.order,
      name: wp.name,
    });
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#071a2e] text-slate-100">
      <Navbar />

      {/* Atlas Header & Reconnaissance Banner */}
      <section className="pt-24 sm:pt-28 pb-6 sm:pb-8 bg-gradient-to-b from-[#0a2948] via-[#071e35] to-[#071a2e] border-b border-sky-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] mb-2 tracking-widest uppercase">
                <Compass className="w-4 h-4 text-[#38bdf8] flex-shrink-0 animate-pulse" />
                <span>ARCHIPELAGO CARTOGRAPHY &bull; HYDROGRAPHIC OFFICE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                The {UNIVERSE_NAME} Maritime Atlas
              </h1>
              <p className="text-sm sm:text-base text-[#BAE6FD]/80 mt-2 max-w-2xl font-light leading-relaxed">
                Interactive pelagic chart of the Western Expanse. Track acoustic soundings, survey fortified anchorages, and retrace {PROTAGONIST_NAME}’s maiden voyage aboard <span className="text-[#38bdf8] font-medium">{VESSEL_NAME}</span>.
              </p>
            </div>

            {/* Cartographic Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-[#071a2e]/90 p-3 sm:p-4 rounded-xl border border-sky-400/25 shadow-lg">
              <div className="text-center px-1 sm:px-3">
                <span className="text-[10px] font-mono text-[#BAE6FD]/70 uppercase block">Locations</span>
                <span className="text-base sm:text-xl font-bold font-mono text-white">10 Sectors</span>
              </div>
              <div className="text-center px-1 sm:px-3 border-x border-white/10">
                <span className="text-[10px] font-mono text-[#BAE6FD]/70 uppercase block">Sea-Lanes</span>
                <span className="text-base sm:text-xl font-bold font-mono text-[#38bdf8]">5 Routes</span>
              </div>
              <div className="text-center px-1 sm:px-3">
                <span className="text-[10px] font-mono text-[#BAE6FD]/70 uppercase block">Max Depth</span>
                <span className="text-base sm:text-xl font-bold font-mono text-cyan-300">1,240 Fth</span>
              </div>
            </div>
          </div>

          {/* Search, Filter Bar, and Layer Toggles */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">

            {/* Search Input & Category Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
              {/* Search Box */}
              <div className="relative min-w-[200px] sm:min-w-[240px]">
                <Search className="w-4 h-4 text-[#38bdf8] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search harbor, trench, island..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-[#0a2948] border border-sky-400/30 rounded-lg text-xs text-white placeholder-[#BAE6FD]/50 focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8]"
                />
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'port', label: 'Ports' },
                  { id: 'kingdom', label: 'Capitals' },
                  { id: 'trench', label: 'Trenches' },
                  { id: 'beacon', label: 'Beacons' },
                  { id: 'island', label: 'Isles' },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setFilterType(id)}
                    className={`px-3 py-1.5 min-h-[36px] rounded-lg text-xs font-medium transition-all flex items-center justify-center touch-manipulation ${filterType === id
                        ? 'bg-[#38bdf8] text-[#071a2e] font-bold shadow-md shadow-sky-500/20'
                        : 'bg-[#0a2948] text-[#BAE6FD] hover:text-white border border-sky-400/20 hover:border-sky-400/50'
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Layer Visibility Toggles */}
            <div className="flex flex-wrap items-center gap-3 text-xs bg-[#0a2948]/80 p-2 sm:p-2.5 rounded-xl border border-sky-400/25">
              <span className="text-[11px] font-mono text-[#BAE6FD]/70 uppercase hidden sm:inline">
                Layers:
              </span>

              <label className="flex items-center gap-1.5 cursor-pointer text-[#BAE6FD] hover:text-white select-none">
                <input
                  type="checkbox"
                  checked={showBathymetry}
                  onChange={(e) => setShowBathymetry(e.target.checked)}
                  className="rounded border-sky-400/30 bg-[#071a2e] text-[#38bdf8] focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5"
                />
                <span>Bathymetry</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer text-[#BAE6FD] hover:text-white select-none">
                <input
                  type="checkbox"
                  checked={showRoutes}
                  onChange={(e) => setShowRoutes(e.target.checked)}
                  className="rounded border-sky-400/30 bg-[#071a2e] text-[#38bdf8] focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5"
                />
                <span>Sea Lanes</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer text-[#BAE6FD] hover:text-white select-none">
                <input
                  type="checkbox"
                  checked={showExpedition}
                  onChange={(e) => setShowExpedition(e.target.checked)}
                  className="rounded border-sky-400/30 bg-[#071a2e] text-[#38bdf8] focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5"
                />
                <span className="text-amber-300 font-medium">Zephyr Track</span>
              </label>
            </div>

          </div>

        </div>
      </section>

      {/* Main Atlas Body: Interactive Chart + Sounder Inspector */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Left Column: Interactive Map Canvas + Voyage Scrubber (8 cols) */}
          <div className="lg:col-span-8 space-y-6">

            {/* The Interactive Pelagic Canvas */}
            <InteractiveAtlasMap
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onSelectLocation={handleSelectLocation}
              routes={SAMPLE_MARITIME_ROUTES}
              showRoutes={showRoutes}
              showBathymetry={showBathymetry}
              showExpedition={showExpedition}
              activeWaypoint={activeWaypoint}
              onSelectWaypoint={handleSelectWaypoint}
            />

            {/* Expedition Waypoint Scrubber for The Zephyr's Wake */}
            <ExpeditionWaypointPlayer
              waypoints={EXPEDITION_WAYPOINTS}
              activeWaypoint={activeWaypoint}
              onSelectWaypoint={handleSelectWaypoint}
            />

          </div>

          {/* Right Column: Acoustic Sounder Inspector + Sector Directory (4 cols) */}
          <div className="lg:col-span-4 space-y-6">

            {/* The Hydrographic Sounder Inspector */}
            <AcousticSounderInspector location={selectedLocation} />

            {/* Canonical Sector Directory List */}
            <div className="parchment-card rounded-2xl p-4 sm:p-5 border border-sky-400/25 bg-[#0a2948]/85 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
                  <Anchor className="w-3.5 h-3.5" />
                  <span className="uppercase">CHARTED SECTORS ({filteredLocations.length})</span>
                </div>
                <span className="text-[10px] font-mono text-[#BAE6FD]/60">Select to Pan</span>
              </div>

              <div className="max-h-[320px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                {filteredLocations.map((loc) => {
                  const isSelected = selectedLocation?.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => handleSelectLocation(loc)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between gap-3 min-h-[44px] touch-manipulation ${isSelected
                          ? 'bg-[#071a2e] border-[#38bdf8] text-white shadow-md'
                          : 'bg-[#071a2e]/60 border-white/10 hover:border-sky-400/40 text-[#BAE6FD]/80 hover:text-white'
                        }`}
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate text-white">
                          {loc.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#BAE6FD]/60 flex items-center gap-2 mt-0.5">
                          <span>{loc.region}</span>
                          <span>&bull;</span>
                          <span>{loc.depth_fathoms || 0} fth</span>
                        </div>
                      </div>

                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase flex-shrink-0 ${loc.danger_rating === 'Tranquil'
                            ? 'bg-emerald-950/80 text-emerald-400'
                            : loc.danger_rating === 'Navigable'
                              ? 'bg-sky-950/80 text-[#38bdf8]'
                              : loc.danger_rating === 'Perilous'
                                ? 'bg-amber-950/80 text-amber-300'
                                : 'bg-rose-950/80 text-rose-400'
                          }`}
                      >
                        {loc.danger_rating}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section: Cross-Canon Integration & Explorer Visa CTA */}
        <section className="bg-gradient-to-r from-[#0a2948] via-[#0e3863] to-[#0a2948] rounded-2xl p-6 sm:p-8 border border-sky-400/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#38bdf8]">
                <Ship className="w-4 h-4" />
                <span>EXPEDITION CHARTER &bull; BOOK ONE COMPANION</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Ready to Cross the Sovereign Meridian?
              </h2>
              <p className="text-xs sm:text-sm text-[#BAE6FD]/80 max-w-xl font-light leading-relaxed">
                Experience {PROTAGONIST_NAME}’s perilous journey first-hand in Book One of the trilogy, or register for an Explorer Visa to unlock classified navigational logbooks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/trilogy/book-1"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#071a2e] hover:bg-[#072445] border border-sky-400/40 text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all min-h-[44px]"
              >
                <BookOpen className="w-4 h-4 text-[#38bdf8]" />
                <span>Read Book One</span>
              </Link>

              <Link
                href="/explore"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/25 min-h-[44px]"
              >
                <span>Apply for Explorer Visa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
