'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Compass, 
  Anchor, 
  ShieldAlert, 
  Layers, 
  Navigation, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Sparkles,
  Waves,
  Eye,
  Crosshair,
  Maximize2
} from 'lucide-react';
import { AtlasLocation, MaritimeRoute, ExpeditionWaypoint } from '@/data/types';
import { EXPEDITION_WAYPOINTS } from '@/data/atlas';

interface InteractiveAtlasMapProps {
  locations: AtlasLocation[];
  selectedLocation: AtlasLocation | null;
  onSelectLocation: (loc: AtlasLocation) => void;
  routes: MaritimeRoute[];
  showRoutes: boolean;
  showBathymetry: boolean;
  showExpedition: boolean;
  activeWaypoint: ExpeditionWaypoint | null;
  onSelectWaypoint: (wp: ExpeditionWaypoint) => void;
}

export const InteractiveAtlasMap: React.FC<InteractiveAtlasMapProps> = ({
  locations,
  selectedLocation,
  onSelectLocation,
  routes,
  showRoutes,
  showBathymetry,
  showExpedition,
  activeWaypoint,
  onSelectWaypoint,
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorCoords, setCursorCoords] = useState<{ lat: string; lon: string }>({
    lat: '14°28′N',
    lon: '45°12′W',
  });

  const containerRef = useRef<HTMLDivElement>(null);

  // Zoom handlers
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.3, 0.8));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Center on a location
  const centerOnCoordinates = (x: number, y: number) => {
    // Relative coordinates 0-100 to pan offset
    const targetX = -(x - 50) * 4;
    const targetY = -(y - 50) * 4;
    setPan({ x: targetX, y: targetY });
    if (zoom < 1.3) setZoom(1.3);
  };

  // When selectedLocation changes from outside, optionally center
  useEffect(() => {
    if (selectedLocation) {
      centerOnCoordinates(selectedLocation.coordinates.x, selectedLocation.coordinates.y);
    }
  }, [selectedLocation?.id]);

  // Pointer drag events for smooth pan
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return; // Only primary button
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // Update pan if dragging
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }

    // Calculate simulated nautical coordinates from container rect
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const relY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      
      const latDeg = Math.floor(6 + (relY / 100) * 24);
      const latMin = Math.floor(((relY * 60) % 60));
      const lonDeg = Math.floor(20 + (relX / 100) * 45);
      const lonMin = Math.floor(((relX * 60) % 60));

      setCursorCoords({
        lat: `${latDeg}°${latMin < 10 ? '0' : ''}${latMin}′N`,
        lon: `${lonDeg}°${lonMin < 10 ? '0' : ''}${lonMin}′W`,
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if already released
    }
  };

  // Touch wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  return (
    <div className="parchment-card rounded-2xl border-2 border-sky-400/30 shadow-2xl relative overflow-hidden flex flex-col bg-[#071a2e]">
      
      {/* Map Header Controls Bar */}
      <div className="flex flex-wrap items-center justify-between p-3 sm:p-4 border-b border-sky-400/20 bg-[#0a2948]/95 z-20 gap-3">
        
        {/* Real-Time Nautical Coordinates */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#38bdf8]">
          <div className="flex items-center gap-1.5">
            <Crosshair className="w-3.5 h-3.5 text-[#38bdf8] animate-pulse" />
            <span className="hidden xs:inline">SOUNDING:</span>
            <span className="text-white font-semibold">{cursorCoords.lat}, {cursorCoords.lon}</span>
          </div>
          <span className="text-sky-400/40 hidden sm:inline">&bull;</span>
          <span className="text-[#BAE6FD]/70 hidden sm:inline">WESTERN ARCHIPELAGO SECTOR</span>
        </div>

        {/* Zoom & Canvas Tool Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handleZoomIn}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#071a2e] hover:bg-[#0e3863] border border-sky-400/20 text-[#38bdf8] hover:text-white transition-colors"
            title="Zoom In"
            aria-label="Zoom in on map"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={handleZoomOut}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#071a2e] hover:bg-[#0e3863] border border-sky-400/20 text-[#38bdf8] hover:text-white transition-colors"
            title="Zoom Out"
            aria-label="Zoom out on map"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={handleReset}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#071a2e] hover:bg-[#0e3863] border border-sky-400/20 text-[#BAE6FD] hover:text-white transition-colors"
            title="Reset View"
            aria-label="Reset map zoom and pan"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Interactive Map Surface */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onWheel={handleWheel}
        className={`relative w-full aspect-[4/3] min-h-[360px] sm:min-h-[480px] bg-gradient-to-b from-[#0b335c] via-[#072445] to-[#041529] overflow-hidden select-none touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        
        {/* Transformable Canvas Group */}
        <div
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="w-full h-full absolute inset-0"
        >
          
          {/* SVG Cartographic Master Layer */}
          <svg
            className="absolute inset-0 w-full h-full"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Nautical Grid */}
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="0.15" />
              </pattern>

              {/* Glowing Gradients */}
              <linearGradient id="expedition-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#32E6E0" />
              </linearGradient>

              <radialGradient id="trench-depth-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#020813" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#051a33" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base Coordinate Grid */}
            <rect width="100" height="100" fill="url(#grid-pattern)" />

            {/* Layer A: Bathymetry Depth Zones & Oceanic Trenches */}
            {showBathymetry && (
              <g className="bathymetry-layer transition-opacity duration-300">
                {/* Shallow Coral Shelf (0 - 50 Fathoms) */}
                <ellipse cx="48" cy="50" rx="26" ry="18" fill="#0f4577" opacity="0.35" stroke="#38bdf8" strokeWidth="0.2" strokeDasharray="1 1" />
                <text x="48" y="40" fill="#7dd3fc" fontSize="1.8" fontFamily="monospace" textAnchor="middle" opacity="0.6">
                  VERIDIA REEF SHELF [20 - 45 FATHOMS]
                </text>

                {/* Northern Deep (200 Fathoms) */}
                <ellipse cx="30" cy="24" rx="16" ry="10" fill="#092849" opacity="0.4" stroke="#0ea5e9" strokeWidth="0.2" />

                {/* Southern Swell Basin (400 Fathoms) */}
                <ellipse cx="65" cy="78" rx="18" ry="12" fill="#061d36" opacity="0.5" stroke="#0284c7" strokeWidth="0.25" />

                {/* The Siren Hadal Trench (1,240 Fathoms) */}
                <ellipse cx="25" cy="72" rx="14" ry="8" fill="url(#trench-depth-gradient)" stroke="#38bdf8" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
                <text x="25" y="73" fill="#38bdf8" fontSize="1.9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  SIREN HADAL TRENCH: 1240 FATHOMS
                </text>

                {/* The Singing Meridian Pelagic Rift (890 Fathoms) */}
                <path
                  d="M 12 75 Q 16 82 22 92"
                  fill="none"
                  stroke="#32E6E0"
                  strokeWidth="0.8"
                  strokeDasharray="2 1"
                  opacity="0.8"
                />
                <text x="18" y="89" fill="#32E6E0" fontSize="1.7" fontFamily="monospace" textAnchor="middle">
                  OUTER SINGING RIFT [890 FATHOMS]
                </text>
              </g>
            )}

            {/* Layer B: Fictional Archipelago Landmasses */}
            <g className="landmass-layer">
              {/* Eastern Granite Bluffs (Kingdom of Thalassor) */}
              <path
                d="M 68 24 Q 74 20 82 25 Q 86 34 82 42 Q 74 44 68 36 Z"
                fill="#164e87"
                stroke="#38bdf8"
                strokeWidth="0.3"
                opacity="0.9"
              />
              <text x="76" y="29" fill="#BAE6FD" fontSize="1.8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                THALASSOR
              </text>

              {/* Central Freeport Islands (Port Veridia) */}
              <path
                d="M 37 52 Q 43 47 48 53 Q 46 60 40 59 Z"
                fill="#134477"
                stroke="#38bdf8"
                strokeWidth="0.3"
                opacity="0.9"
              />

              {/* Olyndra Living Coral Ring */}
              <circle cx="52" cy="44" r="5" fill="none" stroke="#32E6E0" strokeWidth="0.4" strokeDasharray="0.8 0.8" opacity="0.8" />

              {/* Volcanic Basalt Stack (Isle of Whispers) */}
              <polygon points="61,78 64,77 65,82 60,82" fill="#0d3154" stroke="#7dd3fc" strokeWidth="0.25" />

              {/* Floating Spire Base (Aeloria) */}
              <circle cx="34" cy="18" r="3.5" fill="#1e5c9e" stroke="#38bdf8" strokeWidth="0.3" opacity="0.8" />
              <circle cx="34" cy="18" r="5" fill="none" stroke="#7dd3fc" strokeWidth="0.15" strokeDasharray="0.5 0.5" opacity="0.6" />
            </g>

            {/* Layer C: Standard Maritime Sea Lanes */}
            {showRoutes && routes.filter(r => r.category !== 'expedition').map((route) => {
              const points = route.waypoints.map((w) => `${w.x},${w.y}`).join(' ');
              const strokeColor = route.status === 'Patrolled' ? '#38bdf8' : route.status === 'Storm-tossed' ? '#7dd3fc' : '#f43f5e';
              return (
                <g key={route.id} className="sea-route group">
                  <polyline
                    points={points}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="0.35"
                    strokeDasharray={route.status === 'Patrolled' ? 'none' : '1.2 1.2'}
                    opacity="0.75"
                  />
                </g>
              );
            })}

            {/* Layer D: Historic Track of The Zephyr's Wake */}
            {showExpedition && (() => {
              const expeditionRoute = routes.find(r => r.id === 'route_zephyrs_wake');
              if (!expeditionRoute) return null;
              const points = expeditionRoute.waypoints.map((w) => `${w.x},${w.y}`).join(' ');
              return (
                <g key="expedition-track" className="expedition-track">
                  {/* Glowing Underlay */}
                  <polyline
                    points={points}
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.4)"
                    strokeWidth="1.2"
                  />
                  {/* Active Animated Track */}
                  <polyline
                    points={points}
                    fill="none"
                    stroke="url(#expedition-glow)"
                    strokeWidth="0.55"
                    strokeDasharray="1.8 1.2"
                  />
                </g>
              );
            })()}

          </svg>

          {/* Layer E: Clickable HTML / SVG Map Markers */}
          {locations.map((loc) => {
            const isSelected = selectedLocation?.id === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => onSelectLocation(loc)}
                style={{
                  left: `${loc.coordinates.x}%`,
                  top: `${loc.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute group focus:outline-none z-30 p-1 min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label={`Inspect ${loc.name}`}
              >
                {/* Ping Animation for selected marker */}
                {isSelected && (
                  <span className="absolute -inset-1 rounded-full bg-[#38bdf8]/40 animate-ping" />
                )}

                {/* Marker Badge Icon */}
                <div
                  className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#38bdf8] text-[#071a2e] border-white shadow-[0_0_20px_rgba(56,189,248,0.8)] scale-125'
                      : 'bg-[#0a2948] text-[#38bdf8] border-sky-400/40 hover:scale-110 hover:border-[#38bdf8] shadow-md'
                  }`}
                >
                  {loc.type === 'fortified_port' && <Anchor className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {loc.type === 'kingdom_capital' && <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {loc.type === 'oceanic_trench' && <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {loc.type === 'ancient_beacon' && <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {loc.type === 'restricted_strait' && <Waves className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {loc.type === 'wild_island' && <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </div>

                {/* Hover / Selected Tag */}
                <div
                  className={`absolute top-8 sm:top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-semibold tracking-wider transition-opacity shadow-lg pointer-events-none ${
                    isSelected
                      ? 'bg-[#071a2e] border border-[#38bdf8] text-white opacity-100 z-40'
                      : 'bg-[#071a2e]/90 text-[#BAE6FD] opacity-0 group-hover:opacity-100 border border-sky-400/30'
                  }`}
                >
                  {loc.name}
                </div>
              </button>
            );
          })}

          {/* Layer F: Expedition Waypoint Dots */}
          {showExpedition && EXPEDITION_WAYPOINTS.map((wp) => {
            const isActive = activeWaypoint?.id === wp.id;
            return (
              <button
                key={wp.id}
                type="button"
                onClick={() => onSelectWaypoint(wp)}
                style={{
                  left: `${wp.coordinates.x}%`,
                  top: `${wp.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                className="absolute z-25 focus:outline-none group p-1"
                aria-label={`Waypoint ${wp.order}: ${wp.name}`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[9px] font-bold border transition-all ${
                    isActive
                      ? 'bg-[#f59e0b] text-[#071a2e] border-white scale-125 shadow-[0_0_15px_#f59e0b]'
                      : 'bg-[#071a2e]/90 text-[#f59e0b] border-[#f59e0b]/60 hover:scale-110'
                  }`}
                >
                  {wp.order}
                </div>
              </button>
            );
          })}

          {/* Compass Rose Watermark */}
          <div className="absolute bottom-4 right-4 pointer-events-none opacity-20">
            <Compass className="w-20 h-20 sm:w-28 sm:h-28 text-[#38bdf8] animate-spin" style={{ animationDuration: '120s' }} />
          </div>

        </div>

      </div>

      {/* Map Footer Helper Bar */}
      <div className="p-3 bg-[#0a2948]/90 border-t border-sky-400/20 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#BAE6FD]/70 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>DRAG TO PAN &bull; WHEEL / PINCH TO ZOOM</span>
        </div>
        <div className="flex items-center gap-3">
          <span>SCALE: 1:{Math.round(1000000 / zoom).toLocaleString()}</span>
          <span>PROJECTION: PELAGIC CYLINDRICAL</span>
        </div>
      </div>

    </div>
  );
};

