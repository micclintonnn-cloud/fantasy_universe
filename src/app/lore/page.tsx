'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SAMPLE_ENTITIES, SAMPLE_RELATIONSHIPS } from '@/data/lore';
import { SorviaEntity } from '@/data/types';
import { analytics } from '@/lib/analytics';
import { UNIVERSE_NAME } from '@/config/site';
import {
  BookOpen,
  Search,
  Link as LinkIcon,
  AlertCircle
} from 'lucide-react';

function LoreContent() {
  const searchParams = useSearchParams();
  const initialEntityId = searchParams.get('entity');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEntity, setSelectedEntity] = useState<SorviaEntity | null>(
    initialEntityId ? SAMPLE_ENTITIES.find((e) => e.id === initialEntityId) || SAMPLE_ENTITIES[0] : SAMPLE_ENTITIES[0]
  );

  useEffect(() => {
    if (initialEntityId) {
      const match = SAMPLE_ENTITIES.find((e) => e.id === initialEntityId);
      if (match) setSelectedEntity(match);
    }
  }, [initialEntityId]);

  const filteredEntities = SAMPLE_ENTITIES.filter((ent) => {
    const matchesCategory = selectedCategory === 'all' || ent.type === selectedCategory;
    const matchesSearch =
      ent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ent.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ent.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSelectEntity = (entity: SorviaEntity) => {
    setSelectedEntity(entity);
    analytics.track('lore_entry_viewed', {
      entity_id: entity.id,
      name: entity.name,
      type: entity.type,
      canon_status: entity.canon_status,
    });
  };

  // Find relationships for selected entity
  const activeRelationships = selectedEntity
    ? SAMPLE_RELATIONSHIPS.filter(
      (r) => r.source_id === selectedEntity.id || r.target_id === selectedEntity.id
    )
    : [];

  return (
    <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">

      {/* Lore Header Banner */}
      <section className="mb-6 sm:mb-8 p-4 sm:p-8 rounded-2xl bg-sorvia-deep border border-sorvia-border relative overflow-hidden shadow-ocean-depth">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-sorvia-cyan-light">
            <BookOpen className="w-4 h-4 text-sorvia-cyan flex-shrink-0" />
            <span className="truncate">CANONICAL ENCYCLOPEDIA ARCHIVE</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white">
            {UNIVERSE_NAME} Lore Repository
          </h1>
          <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed font-light">
            Search characters, factions, sovereign vessels, oceanic locations, and maritime mythology across verified canon records.
          </p>
        </div>
      </section>

      {/* Search and Category Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 sm:mb-8">

        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-sorvia-cyan absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search characters, vessels, factions..."
            className="w-full bg-sorvia-deep/90 border border-sorvia-border text-xs rounded-xl pl-10 pr-4 py-3 min-h-[44px] text-white placeholder-blue-200/40 focus:outline-none focus:border-sorvia-cyan transition-colors font-sans shadow-sea-glow"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {['all', 'character', 'vessel', 'faction', 'location', 'creature', 'mythology'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 min-h-[36px] rounded-full capitalize text-xs transition-all flex items-center justify-center ${selectedCategory === cat
                  ? 'bg-[#38bdf8] text-[#071a2e] font-bold shadow-md shadow-sky-500/20'
                  : 'bg-sorvia-deep text-blue-100/80 hover:text-white border border-sorvia-border'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* 2-Column Lore Interface: Entity Catalog & Detail Record */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

        {/* Left Column: Entity Cards List (5 cols) */}
        <div className="lg:col-span-5 space-y-3 max-h-[50vh] lg:max-h-[75vh] overflow-y-auto pr-1 sm:pr-2">
          {filteredEntities.length === 0 ? (
            <div className="parchment-card p-6 sm:p-8 rounded-xl text-center text-xs text-blue-200/60">
              No lore records match &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredEntities.map((ent) => {
              const isSelected = selectedEntity?.id === ent.id;
              return (
                <div
                  key={ent.id}
                  onClick={() => handleSelectEntity(ent)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all text-left ${isSelected
                      ? 'bg-sorvia-surface border-sorvia-cyan shadow-sea-glow'
                      : 'bg-sorvia-deep/80 border-sorvia-border hover:border-sorvia-cyan/50'
                    }`}
                >
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sorvia-ocean text-sorvia-cyan-light border border-sorvia-border truncate">
                      {ent.type}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded flex-shrink-0 ${ent.canon_status === 'canonical' ? 'text-emerald-300 bg-emerald-950/70 border border-emerald-600/50' : 'text-amber-300 bg-amber-950/70 border border-amber-600/50'
                      }`}>
                      {ent.canon_status === 'canonical' ? 'CANON' : 'DRAFT'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {ent.name}
                  </h3>
                  <p className="text-xs text-sorvia-cyan-light italic mb-1.5 truncate">
                    {ent.subtitle}
                  </p>
                  <p className="text-xs text-blue-100/80 line-clamp-2 leading-relaxed font-light">
                    {ent.short_description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {ent.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-blue-200/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Entity Full Detail Record (7 cols) */}
        <div className="lg:col-span-7 parchment-card rounded-2xl p-4 sm:p-8 border border-sorvia-cyan/40 shadow-2xl space-y-5 sm:space-y-6">
          {selectedEntity ? (
            <div className="space-y-5 sm:space-y-6">

              {/* Header Status & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-sorvia-border/60">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded bg-sorvia-ocean text-sorvia-cyan-light border border-sorvia-border">
                    {selectedEntity.type}
                  </span>
                  <span className="text-xs font-mono text-blue-200/60">
                    ID: {selectedEntity.id}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded font-semibold ${selectedEntity.canon_status === 'canonical'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                      : 'bg-amber-950 text-amber-300 border border-amber-600'
                    }`}>
                    {selectedEntity.canon_status === 'canonical' ? 'CONFIRMED CANON' : 'DRAFT'}
                  </span>
                </div>
              </div>

              {/* Entity Title */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {selectedEntity.name}
                </h2>
                <p className="text-sm text-sorvia-cyan-light italic mt-1">
                  {selectedEntity.subtitle}
                </p>
              </div>

              {/* Entity Image / Artwork */}
              {selectedEntity.image_url && (
                <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-sky-400/30 shadow-lg">
                  <Image
                    src={selectedEntity.image_url}
                    alt={selectedEntity.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a2e]/80 via-transparent to-transparent" />
                </div>
              )}

              {/* Creator Notes Banner */}
              {selectedEntity.notes_for_creator && (
                <div className="p-3.5 rounded-lg bg-sorvia-deep border border-sorvia-cyan/40 text-xs text-blue-100 flex items-start gap-2.5 shadow-sea-glow">
                  <AlertCircle className="w-4 h-4 text-sorvia-cyan flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>Note:</strong> {selectedEntity.notes_for_creator}
                  </span>
                </div>
              )}

              {/* Full Lore Body */}
              <div className="space-y-4 text-sm sm:text-base text-blue-50 leading-relaxed font-serif font-light">
                <p>{selectedEntity.full_lore}</p>
              </div>

              {/* Entity Attributes Table */}
              {selectedEntity.attributes && (
                <div className="parchment-card p-4 rounded-xl border border-sorvia-border">
                  <h4 className="text-xs font-bold text-sorvia-cyan-light uppercase tracking-wider mb-3">
                    Entity Characteristics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs">
                    {Object.entries(selectedEntity.attributes).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-sorvia-border/40 font-mono gap-2">
                        <span className="text-blue-200/60 truncate">{key}:</span>
                        <span className="text-white font-semibold text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Relational Connections Section */}
              <div className="pt-4 border-t border-sorvia-border/60">
                <div className="flex items-center gap-2 text-xs font-bold text-sorvia-cyan-light uppercase tracking-wider mb-3">
                  <LinkIcon className="w-3.5 h-3.5 text-sorvia-cyan flex-shrink-0" />
                  <span>Linked Lore Connections ({activeRelationships.length})</span>
                </div>

                {activeRelationships.length === 0 ? (
                  <p className="text-xs text-blue-200/60">
                    No explicit connections linked yet for this entity.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {activeRelationships.map((rel) => {
                      const otherEntityId = rel.source_id === selectedEntity.id ? rel.target_id : rel.source_id;
                      const otherEntity = SAMPLE_ENTITIES.find((e) => e.id === otherEntityId);
                      return (
                        <div
                          key={rel.id}
                          onClick={() => otherEntity && handleSelectEntity(otherEntity)}
                          className="cursor-pointer p-3 min-h-[44px] rounded-lg bg-sorvia-deep border border-sorvia-border hover:border-sorvia-cyan/50 transition-all flex items-center justify-between gap-3"
                        >
                          <div className="min-w-0 flex-1">
                            <span className="text-xs font-semibold text-white block truncate">
                              {rel.label} → {otherEntity ? otherEntity.name : otherEntityId}
                            </span>
                            <span className="text-[11px] text-blue-200/70 block truncate">
                              {rel.details}
                            </span>
                          </div>
                          <span className="text-xs text-sorvia-cyan-light font-mono flex-shrink-0">View →</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="text-center py-12 text-xs text-blue-200/60">
              Select an entry from the repository catalog.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

export default function LorePage() {
  return (
    <main className="min-h-screen flex flex-col bg-sorvia-abyss">
      <Navbar />
      <Suspense fallback={<div className="p-12 text-center text-sorvia-cyan-light">Loading Lore Repository...</div>}>
        <LoreContent />
      </Suspense>
      <Footer />
    </main>
  );
}
