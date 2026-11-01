'use client';

import React from 'react';
import { CinematicNavbar } from '@/components/cinematic/CinematicNavbar';

interface NavbarProps {
  onOpenExplore?: () => void;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return <CinematicNavbar {...props} />;
};
