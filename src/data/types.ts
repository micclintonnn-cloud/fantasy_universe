/**
 * Sorvia Data Architecture - Milestone 1 Schema
 * Designed for immediate static use with a seamless future migration path to Supabase PostgreSQL.
 * Uses shared entity IDs and explicit relationships to avoid duplication.
 */

export type EntityType =
  | 'character'
  | 'faction'
  | 'vessel'
  | 'location'
  | 'creature'
  | 'mythology'
  | 'technology';

export type CanonStatus =
  | 'canonical'           // Fully confirmed Sorvia lore
  | 'draft_review'        // Narrative team internal proposal
  | 'placeholder_concept';// Creative placeholder pending author approval

export interface SorviaEntity {
  id: string;
  name: string;
  slug: string;
  type: EntityType;
  subtitle: string;
  short_description: string;
  full_lore: string;
  canon_status: CanonStatus;
  is_approved_canon: boolean;
  notes_for_creator?: string;
  image_url?: string;
  image_placeholder_label?: string;
  tags: string[];
  attributes?: Record<string, string | number>;
  created_at: string;
  updated_at: string;
}

export type RelationshipType =
  | 'commands'
  | 'allied_with'
  | 'rival_of'
  | 'home_port'
  | 'sworn_to'
  | 'guards'
  | 'hunts'
  | 'origin_of';

export interface EntityRelationship {
  id: string;
  source_id: string;
  target_id: string;
  relationship_type: RelationshipType;
  label: string;
  details?: string;
  canon_status: CanonStatus;
}

export type LocationType =
  | 'kingdom_capital'
  | 'fortified_port'
  | 'wild_island'
  | 'oceanic_trench'
  | 'ancient_beacon'
  | 'restricted_strait';

export interface AtlasLocation {
  id: string;
  entity_id: string;
  name: string;
  coordinates: { x: number; y: number }; // Relative 0-100 coordinate grid for SVG/canvas; MapLibre ready
  geo_coords?: [number, number];        // [lng, lat] for future MapLibre GL
  type: LocationType;
  region: string;
  danger_rating: 'Tranquil' | 'Navigable' | 'Perilous' | 'Uncharted Abyssal';
  controlling_faction_id?: string;
  summary: string;
  trade_goods?: string[];
  depth_fathoms?: number;
  logExcerpt?: string;
  lodestoneReading?: string;
  dominantCurrent?: string;
  currentSpeedKnots?: number;
  canon_status: CanonStatus;
}

export interface MaritimeRoute {
  id: string;
  name: string;
  from_id: string;
  to_id: string;
  waypoints: { x: number; y: number }[];
  status: 'Patrolled' | 'Storm-tossed' | 'Pirate-infested' | 'Lost' | 'Expedition Track';
  distance_leagues: number;
  category?: 'trade' | 'smuggler' | 'expedition' | 'patrolled';
  description?: string;
  captainNote?: string;
}

export interface ExpeditionWaypoint {
  id: string;
  order: number;
  name: string;
  locationId: string;
  coordinates: { x: number; y: number };
  depthFathoms: number;
  logTitle: string;
  logText: string;
  vesselSpeedKnots: number;
  bearing: string;
}

