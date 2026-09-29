import React from 'react';
import { ComparisonDimension } from '../../types';
import { Sparkles, TrendingUp, Award, Zap } from 'lucide-react';

interface ComparisonChartsProps {
  dimensions: ComparisonDimension[];
  nameA: string;
  nameB: string;
}

export const ComparisonCharts: React.FC<ComparisonChartsProps> = ({
  dimensions,
  nameA,
  nameB
}) => {
  return (
    <div className="rounded-2xl bg-[#12131A] border border-[#2D2E40] p-4 sm:p-6 md:p-8 mb-8 sm:mb-10 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div 
        className="absolute -top-24 -right-24 w-72 h-72 bg-[#C0B4FE]/[0.035] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Chart Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 sm:pb-6 mb-5 sm:mb-7 border-b border-[#2D2E40] gap-4 relative z-10">
        <div>
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] mb-1">
            Multidimensional Capability Benchmark
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
            Head-to-Head Vector Analysis
          </h3>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-heading font-semibold bg-[#080910]/80 p-2.5 sm:px-4 sm:py-2 rounded-xl border border-[#2D2E40] w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C0B4FE] shadow-[0_0_8px_rgba(192,180,254,0.6)] shrink-0" />
            <span className="text-white font-medium truncate max-w-[140px] sm:max-w-none">{nameA}</span>
            <span className="text-[10px] text-[#C0B4FE] font-mono px-1.5 py-0.5 rounded bg-[#C0B4FE]/10 border border-[#C0B4FE]/20 shrink-0">Baseline</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2DDFF]/80 shrink-0" />
            <span className="text-white/80 font-medium truncate max-w-[140px] sm:max-w-none">{nameB}</span>
            <span className="text-[10px] text-white/50 font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 shrink-0">Challenger</span>
          </div>
        </div>
      </div>

      {/* Vector Bars Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 relative z-10">
        {dimensions.map((dim, idx) => {
          const delta = Math.abs(dim.scoreA - dim.scoreB);
          const isEntityAWinner = dim.scoreA > dim.scoreB;
          const isEntityBWinner = dim.scoreB > dim.scoreA;
          const isTied = dim.scoreA === dim.scoreB;

          return (
            <div 
              key={idx} 
              className="p-3.5 sm:p-5 rounded-xl bg-[#080910] border border-[#2D2E40] hover:border-[#C0B4FE]/40 transition-all duration-300 group"
            >
              {/* Header row with dimension name & advantage badge */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3.5">
                <span className="text-sm sm:text-base font-bold font-heading text-white group-hover:text-[#C0B4FE] transition-colors">
                  {dim.name}
                </span>

                {/* Advantage Badge */}
                {isEntityAWinner && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-heading font-semibold bg-[#C0B4FE]/15 text-[#C0B4FE] border border-[#C0B4FE]/30">
                    <Award className="w-3 h-3 text-[#C0B4FE] shrink-0" />
                    +{delta}% {nameA} Lead
                  </span>
                )}
                {isEntityBWinner && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-heading font-semibold bg-white/10 text-white/90 border border-white/20">
                    <Award className="w-3 h-3 text-white/70 shrink-0" />
                    +{delta}% {nameB} Lead
                  </span>
                )}
                {isTied && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-heading font-semibold bg-white/5 text-white/50 border border-white/10">
                    Competitive Parity
                  </span>
                )}
              </div>

              {/* Visual comparison bars */}
              <div className="space-y-2 sm:space-y-2.5 mb-3">
                {/* Entity A Bar */}
                <div className="flex items-center gap-2 sm:gap-3 text-xs">
                  <span className="w-24 sm:w-32 md:w-40 shrink-0 truncate text-white/75 font-heading text-[11px] sm:text-xs font-medium">{nameA}</span>
                  <div className="flex-1 h-2 sm:h-2.5 bg-[#1B1B26] rounded-full overflow-hidden p-0.5 border border-[#2D2E40] min-w-0">
                    <div 
                      className="h-full bg-gradient-to-r from-[#8E76F5] to-[#C0B4FE] rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(192,180,254,0.4)]"
                      style={{ width: `${dim.scoreA}%` }}
                    />
                  </div>
                  <span className="w-8 sm:w-9 shrink-0 text-right font-mono font-semibold text-[#C0B4FE] text-[11px] sm:text-xs">{dim.scoreA}%</span>
                </div>

                {/* Entity B Bar */}
                <div className="flex items-center gap-2 sm:gap-3 text-xs">
                  <span className="w-24 sm:w-32 md:w-40 shrink-0 truncate text-white/60 font-heading text-[11px] sm:text-xs font-medium">{nameB}</span>
                  <div className="flex-1 h-2 sm:h-2.5 bg-[#1B1B26] rounded-full overflow-hidden p-0.5 border border-[#2D2E40] min-w-0">
                    <div 
                      className="h-full bg-gradient-to-r from-white/40 to-[#E2DDFF] rounded-full transition-all duration-700"
                      style={{ width: `${dim.scoreB}%` }}
                    />
                  </div>
                  <span className="w-8 sm:w-9 shrink-0 text-right font-mono text-white/70 text-[11px] sm:text-xs">{dim.scoreB}%</span>
                </div>
              </div>

              {/* Strategic takeaway text */}
              <p className="text-[11.5px] sm:text-xs text-white/70 font-sans pt-2.5 border-t border-[#2D2E40]/70 flex items-start gap-1.5 leading-relaxed">
                <Sparkles className="w-3.5 h-3.5 text-[#C0B4FE] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-heading font-semibold">Strategic Delta:</strong>{' '}
                  {dim.analysis}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

