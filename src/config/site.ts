/**
 * Global Site Configuration & Dynamic Universe Variables
 * 
 * Allows dynamically changing the Universe Name (e.g., "Sorvia") and
 * the Central Protagonist Name (e.g., "Captain Cool") across the entire
 * application via environment variables in `.env` or `.env.local`.
 */

export const SITE_CONFIG = {
  universeName:
    process.env.NEXT_PUBLIC_UNIVERSE_NAME ||
    process.env.UNIVERSE_NAME ||
    'Sorvia',
  protagonistName:
    process.env.NEXT_PUBLIC_PROTAGONIST_NAME ||
    process.env.PROTAGONIST_NAME ||
    'Captain Cool',
  vesselName:
    process.env.NEXT_PUBLIC_VESSEL_NAME ||
    process.env.VESSEL_NAME ||
    "The Zephyr's Wake",
};

export const UNIVERSE_NAME = SITE_CONFIG.universeName;
export const PROTAGONIST_NAME = SITE_CONFIG.protagonistName;
export const VESSEL_NAME = SITE_CONFIG.vesselName;

/**
 * Utility to replace occurrences of default names ("Sorvia", "Captain Cool")
 * in dynamic strings, lore entries, or synopses.
 */
export function formatUniverseText(text: string): string {
  if (!text) return text;
  return text
    .replace(/Captain Cool/g, SITE_CONFIG.protagonistName)
    .replace(/Sorvia/g, SITE_CONFIG.universeName)
    .replace(/SORVIA/g, SITE_CONFIG.universeName.toUpperCase());
}

