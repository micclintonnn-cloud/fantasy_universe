import React from 'react';
import { CinematicNavbar } from '@/components/cinematic/CinematicNavbar';
import { HeroSection } from '@/components/homepage/HeroSection';
import { MeetCaptainCoolSection } from '@/components/homepage/MeetCaptainCoolSection';
import { DiscoverVesselSection } from '@/components/homepage/DiscoverVesselSection';
import { TheMysterySection } from '@/components/homepage/TheMysterySection';
import { ExplorerVisaSection } from '@/components/homepage/ExplorerVisaSection';
import { ReadTheStorySection } from '@/components/homepage/ReadTheStorySection';
import { CinematicFooter } from '@/components/cinematic/CinematicFooter';
import { UNIVERSE_NAME, PROTAGONIST_NAME, VESSEL_NAME } from '@/config/site';

export const metadata = {
  title: `${UNIVERSE_NAME.toUpperCase()} — A World Waiting to be Entered`,
  description: `Beyond the known oceans lies ${UNIVERSE_NAME}, a world of maritime adventure, forgotten mysteries that refuse to remain buried. Starring ${PROTAGONIST_NAME} aboard ${VESSEL_NAME}.`,
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent text-[#F0F9FF] selection:bg-[#38bdf8]/25 selection:text-[#38bdf8]">
      {/* Universal Cinematic Header Navigation */}
      <CinematicNavbar />

      {/* Section 1: Hero — A World Waiting to be Entered */}
      <HeroSection />

      {/* Section 2: (Meet) — Meet Captain Cool */}
      <MeetCaptainCoolSection />

      {/* Section 3: (Discover the ..) — Discover The Zephyr's Wake */}
      <DiscoverVesselSection />

      {/* Section 4: (The Mystery) — The Riddle of the Singing Meridian */}
      <TheMysterySection />

      {/* Section 5: (Enter Sorvia) — Apply for Your Explorer Visa */}
      <ExplorerVisaSection />

      {/* Section 6: Read the story — Pre-Approved Sample & Clean Purchase Information */}
      <ReadTheStorySection />

      {/* Universal Cinematic Footer */}
      <CinematicFooter />
    </main>
  );
}
