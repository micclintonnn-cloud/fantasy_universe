'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';
import { UNIVERSE_NAME, PROTAGONIST_NAME } from '@/config/site';

export interface CinematicNavbarProps {
  onOpenExplore?: () => void;
}

export const CinematicNavbar: React.FC<CinematicNavbarProps> = ({ onOpenExplore }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: PROTAGONIST_NAME, href: '/characters/protagonist' },
    { name: 'The Trilogy', href: '/trilogy' },
    { name: 'World Atlas', href: '/atlas' },
    { name: 'Lore', href: '/lore' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#071a2e]/95 backdrop-blur-md border-b border-sky-400/20 py-3.5 shadow-lg'
          : 'bg-transparent border-b border-white/5 py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#0a2948] border border-sky-400/40 flex items-center justify-center text-[#38bdf8] group-hover:border-[#38bdf8] transition-colors flex-shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold tracking-wider text-white group-hover:text-[#38bdf8] transition-colors truncate">
            {UNIVERSE_NAME.toUpperCase()}
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[#BAE6FD]/80 hover:text-white transition-colors tracking-wide py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="/#explorer-visa"
            className="px-4 py-2.5 min-h-[40px] rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-semibold text-xs tracking-wide transition-all shadow-sm shadow-sky-500/20 inline-flex items-center justify-center"
          >
            Explorer Visa
          </a>
        </div>

        {/* Mobile Menu Toggle with 44x44px accessible touch target */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-[#BAE6FD] hover:text-white border border-sky-400/20 rounded-lg bg-[#0a2948] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-sky-400/20 bg-[#071a2e]/98 backdrop-blur-xl px-4 sm:px-6 py-6 space-y-3 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#BAE6FD] hover:text-white py-2.5 border-b border-white/5 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <a
              href="/#explorer-visa"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 min-h-[44px] rounded-lg bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Explorer Visa
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
