import React from 'react';
import { CanonStatus } from '@/types/world';

interface CanonBadgeProps {
  status: CanonStatus;
  size?: 'sm' | 'md';
}

export const CanonBadge: React.FC<CanonBadgeProps> = ({ status, size = 'sm' }) => {
  const getStyles = () => {
    switch (status) {
      case 'Approved Canon':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50';
      case 'Proposed':
        return 'bg-sorvia-deep text-sorvia-cyan border-sorvia-cyan/40 shadow-cyan-glow';
      case 'Draft':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/50';
      case 'Archived':
      default:
        return 'bg-slate-900 text-slate-400 border-slate-700';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-mono uppercase tracking-wider rounded border ${size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'
        } ${getStyles()}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
};

