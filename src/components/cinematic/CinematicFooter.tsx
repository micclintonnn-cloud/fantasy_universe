'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, ArrowUp } from 'lucide-react';
import { UNIVERSE_NAME, PROTAGONIST_NAME } from '@/config/site';

export const CinematicFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050f1a] text-[#BAE6FD] pt-16 sm:pt-20 pb-12 border-t border-sky-400/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-12 border-b border-white/10">

          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#0a2948] border border-sky-400/30 flex items-center justify-center text-[#38bdf8] flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white truncate">{UNIVERSE_NAME.toUpperCase()}</span>
            </Link>

            <p className="text-sm text-[#BAE6FD]/80 leading-relaxed font-light max-w-sm">
              An original maritime fantasy universe of bioluminescent oceans, ancient sunken towers, and the voyagers brave enough to sail past the edge of the world.
            </p>
          </div>

          {/* Quick links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider">Explore</p>
            <ul className="space-y-1.5 text-sm text-[#BAE6FD]/80 font-light">
              <li>
                <Link href="/trilogy" className="hover:text-white transition-colors block py-1">The Trilogy</Link>
              </li>
              <li>
                <Link href="/characters/protagonist" className="hover:text-white transition-colors block py-1">{PROTAGONIST_NAME} Dossier</Link>
              </li>
              <li>
                <Link href="/atlas" className="hover:text-white transition-colors block py-1">Interactive Atlas</Link>
              </li>
              <li>
                <Link href="/lore" className="hover:text-white transition-colors block py-1">Lore Encyclopedia</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors block py-1">About the Project</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider">Voyage Dispatches</p>
            <p className="text-xs text-[#BAE6FD]/80 leading-relaxed font-light">
              Join our reader list for release announcements, author notes, and newly charted territories.
            </p>

            {isSubscribed ? (
              <p className="text-xs text-emerald-400 font-medium py-2">
                Thank you. You have been added to the voyage dispatches.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  required
                  className="flex-1 px-3.5 py-3 min-h-[44px] rounded-xl bg-[#0a2948] border border-sky-400/25 text-xs text-white placeholder-sky-300/40 focus:outline-none focus:border-[#38bdf8]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 min-h-[44px] rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center flex-shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#BAE6FD]/60 gap-4 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} {UNIVERSE_NAME} Universe. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38bdf8]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
