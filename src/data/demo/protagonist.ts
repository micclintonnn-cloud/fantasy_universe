import { ProtagonistProfile } from '@/types/world';
import { UNIVERSE_NAME, PROTAGONIST_NAME, VESSEL_NAME } from '@/config/site';

export const DEMO_PROTAGONIST: ProtagonistProfile = {
  id: 'char_central_protagonist',
  name: PROTAGONIST_NAME,
  slug: 'protagonist',
  subtitle: `The Central Protagonist of the ${UNIVERSE_NAME} Trilogy`,
  shortDescription: `A daring seafarer driven by boundless adventure and curiosity, leading the expedition beyond known borders toward the mysterious Singing Meridian.`,
  fullLore: `Across the windswept quays of Port Veridia and the fortified sea-gates of Thalassor, mariners speak of ${PROTAGONIST_NAME}—a navigator whose compass refuses to rest upon ordinary bearings. Unswayed by courtly decree and unburdened by imperial ambition, he steps aboard ${VESSEL_NAME} with an unyielding hunger to explore what lies beyond the edges of every charted sea.`,
  role: 'Expedition Commander & Independent Navigator',
  calling: 'The Singing Meridian & The Uncharted Horizon',
  emotionalCore: 'A man driven by adventure, a horizon full of possibilities, and a journey whose true significance remains unknown.',
  origin: 'The Outer Archipelago Rim',
  imageUrl: '/images/protagonist-voyager.jpg',
  knownTraits: [
    'Instinctive mastery of wind patterns, tidal acoustics, and celestial star configurations',
    'Unshakable courage and infectious curiosity when facing uncharted oceanic perils',
    'Fierce loyalty to his shipmates and deep respect for ancient maritime lore',
    'Innate refusal to accept that the borders of known kingdoms mark the end of the world',
  ],
  confidentialGuardrail: `${PROTAGONIST_NAME}'s full ancestry, inner secrets, and final narrative resolution are deliberately preserved under creator sovereignty to prevent narrative spoilers.`,
  canonStatus: 'Approved Canon',
  tags: [PROTAGONIST_NAME, 'Protagonist', 'Voyager', 'Trilogy Lead', 'Book One', 'Navigator'],
  navigationalGear: [
    {
      name: 'Brass Astrolabe of the Outer Meridian',
      description: 'A finely counterbalanced instrument recovered from a derelict survey cutter, calibrated to measure celestial angles against the twin moons and the ringed gas giant.',
    },
    {
      name: 'Resonating Acoustic Sea Horn',
      description: 'Forged from sonorous alloy, used to sound the singing shoals and detect the acoustic echo of submerged cyclopean basalt towers before the keel touches reef.',
    },
    {
      name: 'Phosphor Deep-Line Sounder',
      description: 'A weighted pelagic plumb line treated with bioluminescent algae that glows when lowered into abyssal trenches beyond five hundred fathoms.',
    },
    {
      name: 'Waxed Vellum Sea-Journal',
      description: 'A hand-bound ledger containing cross-sections of strange ocean currents, tide tables, and sketches of coastal spires unrecorded by imperial cartographers.',
    },
  ],
  trilogyRoleSnippet: {
    book1: `Compelled by tidal anomalies and ancient star charts, he gathers an independent crew aboard ${VESSEL_NAME} and crosses the forbidden Eastern Sea-Gates, venturing where imperial maps end.`,
    book2: 'As sovereign naval armadas pursue the rumors of newly opened oceanic meridians, he must navigate the escalating clash between imperial fleets while delving into deeper, perilous currents.',
    book3: `Leading the expedition to the world's ultimate geographical and metaphysical threshold, he confronts the primordial truth of ${UNIVERSE_NAME}’s origins and the final purpose of his journey.`,
  },
  sampleLogEntry: {
    cycle: 'Tide Cycle 14 • Horizon Watch III',
    bearing: 'Bearing 084° East-by-Southeast • Beyond Imperial Sector Boundary',
    soundings: 'Sounding depth: 420 fathoms • Current: 3.4 knots, flowing counter to known charts',
    text: [
      'The sea changes color three leagues past the last navigation marker. The cobalt blue of the inner shelf yields to an intense, luminescent turquoise that seems to generate its own light from fathoms beneath our keel.',
      'At midnight, the compass lodestone began to pulse rather than spin—a gentle, rhythmic oscillation aligned with the low acoustic song rising through the hull timbers. The crew stood at the bulwarks in silence, watching shoals of glowing manta-like creatures glide beneath our bow.',
      'The imperial admirals would call this madness. To us, it is merely the beginning of the true world.',
    ],
  },
};
