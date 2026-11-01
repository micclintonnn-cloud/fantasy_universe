export interface WorldOverview {
  universeName: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  introHeading: string;
  introLead: string;
  introParagraphs: string[];
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const DEMO_WORLD_OVERVIEW: WorldOverview = {
  universeName: 'Sorvia',
  tagline: 'An Original Maritime Fantasy Universe',
  heroHeadline: 'BEYOND THE HORIZON LIES A WORLD UNFORGOTTEN.',
  heroSupportingText:
    'Across uncharted waters, beneath ancient skies, and beyond the boundaries of known kingdoms lies Sorvia — a world shaped by adventure, mystery, and the endless call of the sea.',
  introHeading: 'An Oceanic World of Myth, Mystery, and Discovery',
  introLead:
    'Sorvia is an expansive maritime realm where luminous coral archipelagos, titanic stone crags, levitating spires, and deep-sea rifts form the stage for epic generational voyages.',
  introParagraphs: [
    'Far beyond the guarded sea-gates of imperial realms lies a planet dominated by boundless turquoise oceans and mysterious celestial tides. Here, navigation is an ancient art combining star-charts, tidal acoustics, and raw instinct.',
    'Underneath the surface, bioluminescent reefs and sunken basalt cities pulse with forgotten memories of pre-deluge civilizations. Above, independent navigators and sovereign admiradas battle the elements and rival powers in search of the legendary singing meridian.',
  ],
  metrics: [
    { label: 'Charted Realms', value: '7 Sovereign Seas', sublabel: 'Across 3 Major Archipelagos' },
    { label: 'Documented Lore', value: '40+ Factions & Vessels', sublabel: 'In Active Worldbuilding' },
    { label: 'The Narrative', value: '3-Book Trilogy', sublabel: 'An Epic Seaborne Saga' },
    { label: 'Interactive Geography', value: '1,240 Fathoms', sublabel: 'From Sky Spires to Hadal Trenches' },
  ],
  pillars: [
    {
      title: 'Bioluminescent Seas',
      description: 'Luminous underwater coral reefs, phosphorescent currents, and night waters that reflect celestial constellations.',
      icon: 'Sparkles',
    },
    {
      title: 'Ancient Civilizations',
      description: 'Cyclopean stone architecture, perpetual crystal beacons, and sunken monuments left behind by pre-deluge builders.',
      icon: 'Landmark',
    },
    {
      title: 'Legendary Navigation',
      description: 'Caravels forged from sea-iron timbers, outrigger schooners, and sovereign warships traversing treacherous singing tides.',
      icon: 'Compass',
    },
    {
      title: 'Untamed Horizon',
      description: 'An expansive open world designed for exploration, discovery, and future 3D environments and storytelling.',
      icon: 'Map',
    },
  ],
};

