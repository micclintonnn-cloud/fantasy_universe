import { TrilogyBook } from '@/types/world';
import { UNIVERSE_NAME, PROTAGONIST_NAME, VESSEL_NAME } from '@/config/site';

export const DEMO_TRILOGY: TrilogyBook[] = [
  {
    id: 'trilogy_book_1',
    slug: 'book-1',
    bookNumber: 1,
    title: 'Book I — The Beginning',
    subtitle: 'The Call of the Outer Seas',
    volumeLabel: 'Volume I',
    tagline: 'Across uncharted waters, where every map ends and every legend begins.',
    centralTheme: 'Awakening, Departure, and The First Glimpse of the Unknown',
    spoilerFreeSynopsis: `${PROTAGONIST_NAME} sets sail from the familiar anchorages of the archipelago aboard ${VESSEL_NAME}, compelled by anomalies in oceanic currents and ancient star charts that describe a realm beyond the imperial sea-gates.`,
    narrativeFocus: `Exploration of uncharted shoals, ${PROTAGONIST_NAME} assembling his intrepid crew, and the initial encounter with the singing meridian that defies imperial cartography.`,
    status: 'In Active Creative Development',
    sampleAvailable: true,
    imageUrl: '/images/trilogy-book-1.jpg',
    keyLocations: [
      { name: 'Port Veridia', type: 'Freeport Harbor', coordinates: '08°12′N, 32°40′W', slug: 'port-veridia' },
      { name: 'The Siren Trench', type: 'Abyssal Chasm', coordinates: '14°28′N, 45°12′W', slug: 'siren-trench' },
      { name: 'The Sunken Colonnade', type: 'Pre-Deluge Ruins', coordinates: '11°05′N, 38°22′W', slug: 'sunken-colonnade' },
      { name: 'Aeloria Spire', type: 'Natural Sea Arch', coordinates: '17°40′N, 49°15′W', slug: 'aeloria-spire' },
    ],
    featuredShips: [
      { name: VESSEL_NAME, vesselClass: 'Exploratory Twin-Masted Caravel', role: `Flagship of ${PROTAGONIST_NAME}` },
      { name: 'Iron Leviathan', vesselClass: 'First-Rate Imperial War Galleon', role: 'Thalassor Harbor Guard' },
      { name: 'The Whispering Tern', vesselClass: 'Swift Cutter', role: 'Courier & Sounder' },
    ],
    keyFactions: [
      { name: 'The Independent Cartographers Guild', role: 'Allied Scholars & Navigators' },
      { name: 'The Sovereign Crown of Thalassor', role: 'Imperial Maritime Authority' },
      { name: 'The Coral Keepers of Olyndra', role: 'Guardians of the Outer Shoals' },
    ],
    narrativeArcs: [
      {
        title: 'The Uncharted Needle',
        description: `${PROTAGONIST_NAME} discovers the oscillating lodestone in the old survey cutter and makes the historic decision to sail beyond the perimeter of imperial trade treaties.`,
      },
      {
        title: 'The Sovereign Sea-Gate',
        description: `Evading the maritime blockade of Thalassor at the Eastern Meridian and taking ${VESSEL_NAME} into the luminous twilight currents.`,
      },
      {
        title: 'Song of the First Colonnade',
        description: 'First soundings above the submerged basalt towers of the Tidal Architects, uncovering the resonance that guides the outer tides.',
      },
    ],
    sampleExcerpt: {
      title: 'Prologue: Beyond the Last Sea-Gate',
      epigraph: '“A ship that hugs the harbor wall knows neither the terror of the storm nor the majesty of the deep.” — Ancient Pelagic Maxim',
      passage: [
        `The tide at Port Veridia turned with a sound like wind rushing through copper tubes. On the forecastle of ${VESSEL_NAME}, ${PROTAGONIST_NAME} held the brass astrolabe up against the twilight sky. Between the ringed silhouette of the celestial gas giant and the pale crescent of the inner moon, a single star flickered with an unearthly cyan hue.`,
        '“Lodestone is trembling again, Captain,” called the second mate from the steering well. “It isn’t pointing north. It’s following the deep swell.”',
        `${PROTAGONIST_NAME} lowered the instrument and smiled into the sea spray. Behind them lay five hundred leagues of charted harbors, stone bastions, and the suffocating edicts of the Sovereign Admiralty. Ahead lay a sea whose surface glowed like liquid turquoise, stretching unbroken to the edge of the sky.`,
        `“Let the lodestone lead,” ${PROTAGONIST_NAME} replied quietly. “We didn’t fit out this hull to sail where other men have already died of boredom. Trim the fore-and-aft sails. We cross into the Outer Meridian tonight.”`,
      ],
    },
  },
  {
    id: 'trilogy_book_2',
    slug: 'book-2',
    bookNumber: 2,
    title: 'Book II — The Conflict',
    subtitle: 'The Fractured Meridian',
    volumeLabel: 'Volume II',
    tagline: 'When empires covet the horizon, the sea itself rises in reckoning.',
    centralTheme: 'Rival Empires, Divided Allegiances, and Rising Abyssal Perils',
    spoilerFreeSynopsis: 'As knowledge of the uncharted horizon leaks back to the sovereign armadas, conflicting empires vie for control over newly revealed sea routes, while the sea itself begins to stir with forgotten power.',
    narrativeFocus: 'Escalating maritime confrontations, trials of loyalty amidst tempestuous waters, and navigating the treacherous politics between sovereign kingdoms and free voyagers.',
    status: 'Narrative Architecture Outlined',
    sampleAvailable: true,
    imageUrl: '/images/trilogy-book-2.jpg',
    keyLocations: [
      { name: 'The Iron Fjord of Thalassor', type: 'Granite Citadel', coordinates: '06°50′N, 28°15′W', slug: 'thalassor-fjord' },
      { name: 'The Singing Meridian', type: 'Acoustic Pelagic Rift', coordinates: '22°14′N, 55°30′W', slug: 'singing-meridian' },
      { name: 'The Obsidian Beacon', type: 'Pre-Deluge Lighthouse', coordinates: '19°02′N, 51°40′W', slug: 'obsidian-beacon' },
    ],
    featuredShips: [
      { name: VESSEL_NAME, vesselClass: 'Refitted Exploratory Caravel', role: 'Independent Vanguard' },
      { name: 'Dread Sovereign', vesselClass: 'Armored Dreadnought Galleon', role: 'Thalassor Imperial Flagship' },
      { name: 'Waveweaver', vesselClass: 'Coral-Hull Bioluminescent Frigate', role: 'Olyndra Acoustic Defender' },
    ],
    keyFactions: [
      { name: 'The Iron Armada of Thalassor', role: 'Expansionist Naval Power' },
      { name: 'The Principality Fleet of Olyndra', role: 'Defenders of the Living Shoals' },
      { name: 'The Pelagic Smugglers Guild', role: 'Neutral Grey Navigators' },
    ],
    narrativeArcs: [
      {
        title: 'The Great Meridian Race',
        description: 'Imperial squadrons and freeport cutters converge upon the acoustic sea coordinates, each seeking to establish sovereign hegemony over the newly charted route.',
      },
      {
        title: 'The Tempest of Basalt',
        description: 'A cataclysmic clash between rival armadas amidst a field of colossal sea arches that forces enemies to reckon with the awakening of ancient hadal forces.',
      },
      {
        title: 'Fractured Loyalties',
        description: `${PROTAGONIST_NAME} must choose between aiding an embattled ally and pursuing the elusive acoustic signal leading deeper toward the world’s primordial source.`,
      },
    ],
    sampleExcerpt: {
      title: 'Prologue: The Shadow of War Galleons',
      epigraph: '“When two kings fight for the surface, the deep remembers who was here first.” — Olyndran Proverb',
      passage: [
        `The sound of war arrived before the ships: the rhythmic, mechanical thud of three hundred synchronized oars beating against the swells of the Singing Meridian. Through the sea mist, the towering blackened timber hulls of the Thalassor Second Battle Squadron emerged like moving fortresses.`,
        `On the quarterdeck of ${VESSEL_NAME}, the crew watched the war lanterns flare along the imperial gun decks. The calm turquoise waters of the previous voyage were now roiled with smoke and the reverberation of naval mortars.`,
        '“They are trying to chain the sea,” the first mate muttered, resting a hand on the caravel’s weathered rail. “They think an archipelago can be owned by anyone who casts bronze cannons.”',
        `“Let them fire at the water,” ${PROTAGONIST_NAME} said, eyes scanning the jagged silhouette of the Obsidian Beacon ahead. “They do not understand that the tide does not answer to flags. Hard to starboard. We slip through the archway before their vanguard closes the sound.”`,
      ],
    },
  },
  {
    id: 'trilogy_book_3',
    slug: 'book-3',
    bookNumber: 3,
    title: 'Book III — The Resolution',
    subtitle: 'The Sovereign Horizon',
    volumeLabel: 'Volume III',
    tagline: `Where all oceans converge, the final truth of ${UNIVERSE_NAME} is unveiled.`,
    centralTheme: 'Destiny, Ancient Reckoning, and The World Transformed',
    spoilerFreeSynopsis: `The voyage reaches its ultimate testing ground where the primordial truth behind the sunken civilizations, the celestial spires, and the destiny of ${UNIVERSE_NAME} will be revealed.`,
    narrativeFocus: 'The convergence of fleets at the world’s edge, the resolution of deep ancestral mysteries, and the dawn of a new maritime era across the universe.',
    status: 'Narrative Architecture Outlined',
    sampleAvailable: true,
    imageUrl: '/images/trilogy-book-3.jpg',
    keyLocations: [
      { name: 'The Celestial Horizon', type: 'World Threshold', coordinates: '00°00′N, 00°00′W', slug: 'celestial-horizon' },
      { name: 'The Primordial Spires', type: 'Ascended Monoliths', coordinates: '29°40′N, 68°10′W', slug: 'primordial-spires' },
      { name: 'The Cradle of Tides', type: 'Genesis Basin', coordinates: '31°15′N, 72°00′W', slug: 'cradle-of-tides' },
    ],
    featuredShips: [
      { name: VESSEL_NAME, vesselClass: 'Ascended Exploratory Flagship', role: 'Pioneer of the Final Meridian' },
      { name: 'The Flotilla of the Dawn', vesselClass: 'United Expeditionary Fleet', role: 'Allied Vanguard' },
    ],
    keyFactions: [
      { name: 'The Sovereign Coalition', role: 'United Remnants of Known Realms' },
      { name: 'The Echoes of the First Deluge', role: 'Ancient Guardians of the Origin' },
    ],
    narrativeArcs: [
      {
        title: 'Beyond the Magnetic Perimeter',
        description: 'Leaving behind all conventional compass bearings as the celestial bodies align directly overhead, guiding the expedition toward the planetary ring meridian.',
      },
      {
        title: 'The Great Awakening',
        description: `The ancient submerged crystal colonnades rise above the swells, reshaping the geography of ${UNIVERSE_NAME} and uniting long-divided peoples.`,
      },
      {
        title: 'The Sovereign Horizon',
        description: `The climax of the journey where ${PROTAGONIST_NAME} confronts the ultimate purpose of his voyage and the enduring call of the infinite ocean.`,
      },
    ],
    sampleExcerpt: {
      title: 'Prologue: The Edge of All Waters',
      epigraph: '“The horizon is not a border; it is a promise that tomorrow will be greater than yesterday.” — Inscription on the Primordial Spire',
      passage: [
        `There was no horizon line, only an infinite transition from sea into sky. The waters beneath the hull were so pure and luminous that the stars seemed to float both above and below, suspending ${VESSEL_NAME} in the center of a celestial sphere.`,
        'Around the flagship, the surviving vessels of the united expedition moved in silent awe. The cannons were cold; the battle flags were lowered. Standing tall at the water’s edge were the Primordial Spires—slender, crystalline pillars rising miles into the heavens, humming with the original vibration that set the world’s tides in motion.',
        `${PROTAGONIST_NAME} stepped to the prow. The brass astrolabe in his hand was no longer necessary; the path was etched into the sea itself.`,
        '“We have not reached the end of the world,” he whispered into the calm wind. “We have only arrived at its beginning.”',
      ],
    },
  },
];
