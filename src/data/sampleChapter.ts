/**
 * Sample Chapter Excerpt for Sorvia: Book One
 * Teaser material crafted to introduce mood and atmosphere while strictly preserving suspense
 * and avoiding unauthorized plot revelations.
 */

export interface ChapterData {
  bookTitle: string;
  chapterNumber: number;
  chapterTitle: string;
  epigraph: string;
  paragraphs: string[];
  purchaseLinks: {
    platform: string;
    url: string;
    label: string;
    isAvailable: boolean;
    note: string;
  }[];
}

export const SAMPLE_CHAPTER: ChapterData = {
  bookTitle: 'Sorvia: Book One (Title Pending Announcement)',
  chapterNumber: 1,
  chapterTitle: 'Where the Compass Forgets North',
  epigraph: '“When the needle shivers between two stars, heed the depth beneath your keel, for Sorvia welcomes no voyager unbidden.” — Sea Chart Inscription, 4th Tide Cycle',
  paragraphs: [
    'The brass casing of the navigational compass felt uncharacteristically warm against cold salt-bitten fingers. High above the quarterdeck, the wind didn’t merely whistle through the stays—it harmonized, humming in frequencies that caused the ship’s iron fastenings to reverberate like plucked lute strings.',
    'Beneath the surface of the midnight swells, pale ribbons of luminescence coiled and dispersed. These were not the common phosphorescent blooms familiar to coastal fishermen; their geometry was too deliberate, sweeping in vast concentric spirals around the keel.',
    'Every seasoned seafarer in the archipelago knew the warning signs. To breach the outer meridian without the Sovereign Admiralty’s tidal dispensation was considered treason by men, and suicide by the elders of Port Veridia. Yet here they were: sails drawn tight to catch the shifting squall, leaving behind every charted shoal and lighthouse.',
    '“Look to the horizon,” the lookout murmured from the crow’s nest. The bell remained silent, but every soul on deck turned as one.',
    'Far beyond where the sea was supposed to meet the dark curvature of the sky, a seam of liquid gold cut across the water—a silent, unbroken barrier where the ocean seemed to pour itself into an untold abyss. The true voyage had begun.',
  ],
  purchaseLinks: [
    {
      platform: 'Official Sorvia Bookstore',
      url: '#purchase-direct',
      label: 'Order Direct Edition (Coming Soon)',
      isAvailable: false,
      note: 'Collector hardcover with illustrated nautical endpapers.',
    },
    {
      platform: 'Digital Retailers',
      url: '#purchase-retail',
      label: 'Pre-Order eBook / Kindle (Placeholder)',
      isAvailable: false,
      note: 'Digital editions will unlock worldwide on launch day.',
    },
  ],
};

