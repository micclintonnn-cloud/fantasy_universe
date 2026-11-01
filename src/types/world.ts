export type CanonStatus = 'Draft' | 'Proposed' | 'Approved Canon' | 'Archived';

export interface BaseEntity {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  shortDescription: string;
  fullLore?: string;
  canonStatus: CanonStatus;
  tags?: string[];
  imageUrl?: string;
  imagePlaceholder?: string;
}

export interface Kingdom extends BaseEntity {
  capital: string;
  ruler: string;
  government: string;
  fleetStrength: string;
  geography: string;
  culture: string;
  historySnippet: string;
  alliances: string[];
  rivalries: string[];
  emblem: string;
}

export interface LocationEntity extends BaseEntity {
  type: 'floating_island' | 'coral_atoll' | 'fortified_port' | 'oceanic_trench' | 'ancient_beacon' | 'sea_gate';
  region: string;
  climate: string;
  geography: string;
  settlements: string;
  resources: string[];
  strategicImportance: string;
  coordinates: { x: number; y: number };
  depthFathoms?: number;
  dangerRating: 'Tranquil' | 'Navigable' | 'Perilous' | 'Abyssal Calamity';
}

export interface AncientCivilization extends BaseEntity {
  era: string;
  architecturalStyle: string;
  tidalTechnology: string;
  legacy: string;
  status: 'Sunken Ruins' | 'Subterranean Enclave' | 'Lost to Deep Swells';
  relicName?: string;
}

export interface LegendaryShip extends BaseEntity {
  vesselClass: string;
  keelMaterial: string;
  displacement: string;
  complement: string;
  armament: string;
  narrativeRole: string;
  associatedFactionOrCaptain: string;
}

export interface MysteriousCreature extends BaseEntity {
  habitat: string;
  threatLevel: 'Harmonious' | 'Elusive' | 'Perilous' | 'Leviathan Calamity';
  bioluminescentTrait: string;
  trenchDepth: string;
  sailorBelief: string;
}

export interface ProtagonistProfile extends BaseEntity {
  role: string;
  calling: string;
  emotionalCore: string;
  origin: string;
  knownTraits: string[];
  confidentialGuardrail: string;
  navigationalGear?: Array<{ name: string; description: string }>;
  trilogyRoleSnippet?: {
    book1: string;
    book2: string;
    book3: string;
  };
  sampleLogEntry?: {
    cycle: string;
    bearing: string;
    soundings: string;
    text: string[];
  };
}

export interface TrilogyBook {
  id: string;
  slug: string;
  bookNumber: 1 | 2 | 3;
  title: string;
  subtitle: string;
  volumeLabel: string;
  centralTheme: string;
  tagline: string;
  spoilerFreeSynopsis: string;
  narrativeFocus: string;
  status: string;
  sampleAvailable: boolean;
  imageUrl: string;
  keyLocations: Array<{ name: string; type: string; coordinates: string; slug: string }>;
  featuredShips: Array<{ name: string; vesselClass: string; role: string }>;
  keyFactions: Array<{ name: string; role: string }>;
  narrativeArcs: Array<{ title: string; description: string }>;
  sampleExcerpt: {
    title: string;
    epigraph: string;
    passage: string[];
  };
}

export interface HistoricalEvent extends BaseEntity {
  era: string;
  cycle: string;
  consequences: string;
  involvedFactions: string[];
}

