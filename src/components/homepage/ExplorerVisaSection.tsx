'use client';

import React, { useState } from 'react';
import { Award, Check, RotateCcw } from 'lucide-react';
import { UNIVERSE_NAME } from '@/config/site';

export const ExplorerVisaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isIssued, setIsIssued] = useState(false);
  const [visaCode, setVisaCode] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const randomId = Math.floor(1000 + Math.random() * 9000);
    setVisaCode(`SRV-${randomId}`);
    setIsIssued(true);
  };

  const handleReset = () => {
    setIsIssued(false);
    setName('');
    setEmail('');
  };

  return (
    <section id="explorer-visa" className="relative py-16 sm:py-24 lg:py-32 bg-[#061524] text-[#F0F9FF] border-t border-sky-400/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <p className="text-xs font-mono text-[#38bdf8] tracking-widest uppercase mb-1.5 sm:mb-2">
          05 &bull; Enter the World
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F0F9FF] mb-3 sm:mb-4">
          Apply for Your Explorer Visa
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[#BAE6FD]/85 font-light leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
          Join the first wave of voyagers. Receive early chapters, high-resolution maps, and voyage dispatches from the world of {UNIVERSE_NAME}.
        </p>

        {!isIssued ? (
          /* Clean, Mobile-First Registration Card */
          <div className="p-5 sm:p-8 rounded-2xl bg-[#071a2e]/90 border border-sky-400/20 shadow-xl max-w-md mx-auto text-left">
            <form onSubmit={handleRegister} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs font-medium text-[#BAE6FD] mb-1.5">
                  Your Name or Explorer Call Sign
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Captain Vane"
                  required
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#0a2948] border border-sky-400/25 text-white placeholder-sky-300/40 focus:outline-none focus:border-[#38bdf8] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#BAE6FD] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@voyage.com"
                  required
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#0a2948] border border-sky-400/25 text-white placeholder-sky-300/40 focus:outline-none focus:border-[#38bdf8] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 min-h-[44px] rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-semibold text-xs sm:text-sm tracking-wide uppercase transition-all shadow-md shadow-sky-500/20 flex items-center justify-center"
              >
                Claim Explorer Visa
              </button>

              <p className="text-[11px] text-[#BAE6FD]/50 text-center font-light">
                No spam. You can unsubscribe anytime with one click.
              </p>
            </form>
          </div>
        ) : (
          /* Sleek, Minimalist Issued Visa */
          <div className="p-5 sm:p-8 rounded-2xl bg-[#0a2948] border border-[#38bdf8]/40 shadow-2xl max-w-md mx-auto text-left space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div className="min-w-0 pr-2">
                <p className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider">Official Clearance</p>
                <h3 className="text-lg sm:text-xl font-bold text-white truncate">{UNIVERSE_NAME} Explorer Visa</h3>
              </div>
              <Award className="w-7 h-7 text-[#38bdf8] flex-shrink-0" />
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between items-center text-[#BAE6FD]/80 gap-2">
                <span className="flex-shrink-0">Voyager:</span>
                <span className="font-bold text-white font-sans truncate">{name}</span>
              </div>
              <div className="flex justify-between items-center text-[#BAE6FD]/80 gap-2">
                <span className="flex-shrink-0">Visa Registry:</span>
                <span className="font-bold text-[#38bdf8]">{visaCode}</span>
              </div>
              <div className="flex justify-between items-center text-[#BAE6FD]/80 gap-2">
                <span className="flex-shrink-0">Status:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1 text-right">
                  <Check className="w-3.5 h-3.5 flex-shrink-0" /> Approved
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href="#read-the-story"
                className="flex-1 py-3 min-h-[44px] rounded-xl bg-[#38bdf8] hover:bg-[#7dd3fc] text-[#071a2e] font-semibold text-xs text-center transition-all flex items-center justify-center tracking-wider uppercase"
              >
                Continue to Sample Reader &darr;
              </a>
              <button
                onClick={handleReset}
                className="min-h-[44px] min-w-[44px] p-3 rounded-xl hover:bg-white/5 border border-sky-400/20 text-[#BAE6FD] text-xs transition-colors flex items-center justify-center"
                title="Register another"
                aria-label="Register another explorer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
