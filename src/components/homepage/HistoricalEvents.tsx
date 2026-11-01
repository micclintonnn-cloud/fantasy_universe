import React from 'react';
import Link from 'next/link';
import { Clock, Compass, Shield, Bookmark, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { DEMO_HISTORICAL_EVENTS } from '@/data/demo/historicalEvents';

export const HistoricalEvents: React.FC = () => {
  return (
    <section id="history" className="py-24 border-b border-sorvia-cyan/20 bg-sorvia-deep/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badgeText="Chronicles of the Deep"
          badgeIcon={<Clock className="w-3.5 h-3.5 text-sorvia-cyan" />}
          title="Historical Epochs &amp; Cataclysms"
          subtitle="From the cataclysmic deluge that shattered ancient continents to the mysterious vanishing of the Twelfth Fleet that initiated the current age of discovery."
        />

        {/* Timeline Flow */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Central Vertical Timeline Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sorvia-cyan/60 via-sorvia-border to-transparent" />

          {DEMO_HISTORICAL_EVENTS.map((evt, idx) => (
            <div
              key={evt.id}
              className="relative md:pl-20 group"
            >
              {/* Timeline Node Icon */}
              <div className="hidden md:flex absolute left-5 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-sorvia-deep border-2 border-sorvia-cyan text-sorvia-cyan items-center justify-center shadow-cyan-glow group-hover:scale-110 transition-transform">
                <span className="text-[10px] font-mono font-bold">{idx + 1}</span>
              </div>

              {/* Event Card */}
              <div className="sorvia-card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-sorvia-border/60 mb-4">
                  <span className="font-mono text-xs text-sorvia-cyan flex items-center gap-1.5 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.era} • {evt.cycle}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sorvia-abyss text-sorvia-pearl border border-sorvia-border">
                    {evt.canonStatus}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-sorvia-pearl mb-1 group-hover:text-sorvia-cyan transition-colors">
                  {evt.name}
                </h3>
                <p className="text-xs text-sorvia-cyan italic font-cinzel mb-3">
                  {evt.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-sorvia-silver/85 leading-relaxed mb-5 font-light">
                  {evt.fullLore}
                </p>

                {/* Consequences & Factions Involved */}
                <div className="p-3.5 rounded-lg bg-sorvia-deep border border-sorvia-border/60 text-xs font-mono space-y-2">
                  <div>
                    <span className="text-sorvia-silver/60 block text-[10px] uppercase">Enduring Consequences</span>
                    <span className="text-sorvia-pearl">{evt.consequences}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-sorvia-silver/60 text-[10px] uppercase">Parties:</span>
                    {evt.involvedFactions.map((f, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-sorvia-abyss text-sorvia-cyan border border-sorvia-border">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

