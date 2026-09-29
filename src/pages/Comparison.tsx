import React, { useState, useEffect } from 'react';
import { Check, TrendingUp } from 'lucide-react';
import { Container } from '../components/common/Container';
import { ComparisonHero } from '../sections/comparison/ComparisonHero';
import { ComparisonCharts } from '../sections/comparison/ComparisonCharts';
import { LoadingState } from '../components/common/LoadingState';
import { apiService } from '../services/api';
import { ComparisonEntity, Company } from '../types';

export const ComparisonPage: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedAId, setSelectedAId] = useState('comp-1');
  const [selectedBId, setSelectedBId] = useState('comp-2');
  const [entityA, setEntityA] = useState<ComparisonEntity | null>(null);
  const [entityB, setEntityB] = useState<ComparisonEntity | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load available companies
    apiService.getCompanies().then((res) => {
      if (res.data) setCompanies(res.data);
    });
  }, []);

  const loadComparison = async (idA: string, idB: string) => {
    setIsLoading(true);
    try {
      const res = await apiService.getComparison(idA, idB);
      if (res.data) {
        setEntityA(res.data.entityA);
        setEntityB(res.data.entityB);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadComparison(selectedAId, selectedBId);
  }, [selectedAId, selectedBId]);

  const selectedCompanyA = companies.find((c) => c.id === selectedAId);
  const selectedCompanyB = companies.find((c) => c.id === selectedBId);

  return (
    <div className="w-full pb-24 bg-[#080910] text-white overflow-x-hidden">
      {/* 1. Comparison Hero Section - Preserved Intact */}
      <ComparisonHero />

      <section id="comparison-matrix" className="pt-10 sm:pt-14">
        <Container>
          {/* Compact Tale-of-the-Tape Dual Entity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8 items-stretch">
            {/* Entity A Compact Card (Primary Baseline) */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#131422] to-[#0A0B13] border border-[#C0B4FE]/50 p-4 sm:p-5 shadow-[0_10px_35px_rgba(192,180,254,0.12)] transition-all duration-300 hover:border-[#C0B4FE] flex flex-col justify-between overflow-hidden before:absolute before:top-0 before:left-8 before:right-8 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[#C0B4FE]/60 before:to-transparent min-w-0 h-full">
              <div>
                {/* Top Header Row - Fixed Height for Symmetrical Alignment */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-3.5 h-7">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C0B4FE]/10 border border-[#C0B4FE]/30 text-[10px] sm:text-[11px] font-mono font-bold text-[#C0B4FE] tracking-wide shadow-sm shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0B4FE] shadow-[0_0_8px_#C0B4FE] animate-pulse shrink-0" />
                    <span>BASELINE (A)</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {selectedCompanyA?.valuationOrCap && (
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-white/90 bg-[#080910] border border-[#2D2E40] px-2 sm:px-2.5 py-0.5 rounded-md shadow-sm">
                        {selectedCompanyA.valuationOrCap}
                      </span>
                    )}
                    {selectedCompanyA && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-heading font-semibold bg-[#C0B4FE] text-[#080910] shadow-sm">
                        {selectedCompanyA.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Dropdown Selector */}
                <div className="relative mb-3 sm:mb-3.5 group">
                  <select
                    value={selectedAId}
                    onChange={(e) => setSelectedAId(e.target.value)}
                    className="w-full h-11 bg-[#080910] hover:bg-[#080910]/80 border border-[#2D2E40] group-hover:border-[#C0B4FE]/60 focus:border-[#C0B4FE] rounded-xl pl-3.5 sm:pl-4 pr-9 sm:pr-10 text-xs sm:text-sm text-white font-heading font-semibold tracking-tight focus:outline-none transition-all cursor-pointer appearance-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] truncate"
                  >
                    {companies.map((c) => (
                      <option key={c.id} value={c.id} className="bg-[#12131A] text-white py-2 text-xs sm:text-sm">
                        {c.name} — {c.market}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#C0B4FE]/80 group-hover:text-[#C0B4FE] transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 3 Symmetrically Aligned Intel Metric Chips */}
              {entityA && (
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#2D2E40]/70 text-xs">
                  <div className="bg-[#080910]/80 p-2.5 rounded-xl border border-[#2D2E40] hover:border-[#C0B4FE]/40 transition-colors min-w-0 h-[66px] flex flex-col justify-between">
                    <span className="text-white/40 block text-[9px] font-mono uppercase tracking-wider truncate">THREAT LEVEL</span>
                    <div className="flex items-center gap-1.5 min-w-0 pb-0.5">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${
                        entityA.threatLevel === 'Dominant' ? 'bg-purple-400 shadow-[0_0_6px_#c084fc]' :
                        entityA.threatLevel === 'High' ? 'bg-rose-400 shadow-[0_0_6px_#fb7185]' :
                        entityA.threatLevel === 'Moderate' ? 'bg-amber-400 shadow-[0_0_6px_#fbbf24]' :
                        'bg-emerald-400 shadow-[0_0_6px_#34d399]'
                      }`} />
                      <strong className="text-white text-xs font-heading font-bold block truncate">{entityA.threatLevel}</strong>
                    </div>
                  </div>

                  <div className="bg-[#080910]/80 p-2.5 rounded-xl border border-[#2D2E40] hover:border-[#C0B4FE]/40 transition-colors min-w-0 h-[66px] flex flex-col justify-between">
                    <span className="text-white/40 block text-[9px] font-mono uppercase tracking-wider truncate">HEALTH SCORE</span>
                    <div className="flex items-baseline gap-1 min-w-0 pb-0.5">
                      <strong className="text-white text-xs font-heading font-bold">{selectedCompanyA?.healthScore || 92}</strong>
                      <span className="text-[10px] font-mono text-white/40">/100</span>
                    </div>
                  </div>

                  <div className="bg-[#080910]/80 p-2.5 rounded-xl border border-[#2D2E40] hover:border-[#C0B4FE]/40 transition-colors min-w-0 h-[66px] flex flex-col justify-between">
                    <span className="text-white/40 block text-[9px] font-mono uppercase tracking-wider truncate">GROWTH</span>
                    <div className="flex items-center gap-1.5 min-w-0 pb-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#98E244] shrink-0" />
                      <strong className="text-[#98E244] text-xs font-mono font-bold truncate">
                        {entityA.growthVelocity.split(' ')[0]}
                      </strong>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Entity B Compact Card (Competitor Challenger) */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#13141F] to-[#0A0B13] border border-[#2D2E40] p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-white/30 flex flex-col justify-between overflow-hidden before:absolute before:top-0 before:left-8 before:right-8 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent min-w-0 h-full">
              <div>
                {/* Top Header Row - Fixed Height for Symmetrical Alignment */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-3.5 h-7">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[10px] sm:text-[11px] font-mono font-bold text-white/90 tracking-wide shadow-sm shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.5)] shrink-0" />
                    <span>CHALLENGER (B)</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {selectedCompanyB?.valuationOrCap && (
                      <span className="text-[11px] sm:text-xs font-mono font-bold text-white/90 bg-[#080910] border border-[#2D2E40] px-2 sm:px-2.5 py-0.5 rounded-md shadow-sm">
                        {selectedCompanyB.valuationOrCap}
                      </span>
                    )}
                    {selectedCompanyB && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-heading font-semibold bg-white/15 text-white/90 border border-white/20 shadow-sm">
                        {selectedCompanyB.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Dropdown Selector */}
                <div className="relative mb-3 sm:mb-3.5 group">
                  <select
                    value={selectedBId}
                    onChange={(e) => setSelectedBId(e.target.value)}
                    className="w-full h-11 bg-[#080910] hover:bg-[#080910]/80 border border-[#2D2E40] group-hover:border-white/40 focus:border-white/60 rounded-xl pl-3.5 sm:pl-4 pr-9 sm:pr-10 text-xs sm:text-sm text-white font-heading font-semibold tracking-tight focus:outline-none transition-all cursor-pointer appearance-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] truncate"
                  >
                    {companies.map((c) => (
                      <option key={c.id} value={c.id} className="bg-[#12131A] text-white py-2 text-xs sm:text-sm">
                        {c.name} — {c.market}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/60 group-hover:text-white transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* 3 Symmetrically Aligned Intel Metric Chips */}
              {entityB && (
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#2D2E40]/70 text-xs">
                  <div className="bg-[#080910]/80 p-2.5 rounded-xl border border-[#2D2E40] hover:border-white/30 transition-colors min-w-0 h-[66px] flex flex-col justify-between">
                    <span className="text-white/40 block text-[9px] font-mono uppercase tracking-wider truncate">THREAT LEVEL</span>
                    <div className="flex items-center gap-1.5 min-w-0 pb-0.5">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${
                        entityB.threatLevel === 'Dominant' ? 'bg-purple-400 shadow-[0_0_6px_#c084fc]' :
                        entityB.threatLevel === 'High' ? 'bg-rose-400 shadow-[0_0_6px_#fb7185]' :
                        entityB.threatLevel === 'Moderate' ? 'bg-amber-400 shadow-[0_0_6px_#fbbf24]' :
                        'bg-emerald-400 shadow-[0_0_6px_#34d399]'
                      }`} />
                      <strong className="text-white text-xs font-heading font-bold block truncate">{entityB.threatLevel}</strong>
                    </div>
                  </div>

                  <div className="bg-[#080910]/80 p-2.5 rounded-xl border border-[#2D2E40] hover:border-white/30 transition-colors min-w-0 h-[66px] flex flex-col justify-between">
                    <span className="text-white/40 block text-[9px] font-mono uppercase tracking-wider truncate">HEALTH SCORE</span>
                    <div className="flex items-baseline gap-1 min-w-0 pb-0.5">
                      <strong className="text-white text-xs font-heading font-bold">{selectedCompanyB?.healthScore || 88}</strong>
                      <span className="text-[10px] font-mono text-white/40">/100</span>
                    </div>
                  </div>

                  <div className="bg-[#080910]/80 p-2.5 rounded-xl border border-[#2D2E40] hover:border-white/30 transition-colors min-w-0 h-[66px] flex flex-col justify-between">
                    <span className="text-white/40 block text-[9px] font-mono uppercase tracking-wider truncate">GROWTH</span>
                    <div className="flex items-center gap-1.5 min-w-0 pb-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#98E244] shrink-0" />
                      <strong className="text-[#98E244] text-xs font-mono font-bold truncate">
                        {entityB.growthVelocity.split(' ')[0]}
                      </strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


          {isLoading || !entityA || !entityB ? (
            <div className="py-16">
              <LoadingState message="Synthesizing differential market intelligence..." />
            </div>
          ) : (
            <>
              {/* Multidimensional Capability Benchmark Vector Chart */}
              <ComparisonCharts
                dimensions={entityA.dimensions}
                nameA={entityA.name}
                nameB={entityB.name}
              />

              {/* 3. Grouped Differential Indicator Matrix Table */}
              <div className="mb-8 sm:mb-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 gap-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-heading font-semibold text-[#C0B4FE] block mb-1">
                      Comprehensive Specification Breakdown
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">
                      Differential Indicator Matrix
                    </h3>
                  </div>
                  <span className="text-xs text-[#C0B4FE] sm:text-white/50 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C0B4FE] animate-pulse sm:hidden" />
                    Scroll horizontally for full matrix
                  </span>
                </div>

                <div className="rounded-2xl border border-[#2D2E40] bg-[#12131A] overflow-x-auto shadow-2xl">
                  <table className="w-full text-left text-xs sm:text-sm text-white/80 border-collapse min-w-[560px] sm:min-w-[640px]">
                    <thead>
                      <tr className="border-b border-[#2D2E40] bg-[#080910]">
                        <th className="p-3 sm:p-4 md:p-5 font-heading font-semibold text-white/50 w-[28%] sm:w-1/4">
                          DIMENSION CATEGORY
                        </th>
                        <th className="p-3 sm:p-4 md:p-5 font-heading font-bold text-[#C0B4FE] w-[36%] sm:w-3/8 border-l border-[#2D2E40] bg-[#C0B4FE]/[0.02]">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#C0B4FE] shadow-[0_0_8px_rgba(192,180,254,0.6)] shrink-0" />
                            <span className="truncate">{entityA.name}</span>
                            <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#C0B4FE]/10 border border-[#C0B4FE]/20 text-[#C0B4FE] font-normal shrink-0">Baseline</span>
                          </div>
                        </th>
                        <th className="p-3 sm:p-4 md:p-5 font-heading font-bold text-white/90 w-[36%] sm:w-3/8 border-l border-[#2D2E40]">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/70 shrink-0" />
                            <span className="truncate">{entityB.name}</span>
                            <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-white/50 font-normal shrink-0">Challenger</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2D2E40]">
                      {/* Section 1: Corporate Profile & Scale */}
                      <tr className="bg-[#0E0F17]/80">
                        <td colSpan={3} className="p-3 px-4 sm:px-5 font-heading font-bold text-xs text-[#C0B4FE] uppercase tracking-wider">
                          1. Corporate Scale &amp; Footprint
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Sector &amp; Domain
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white font-medium">
                          {entityA.category}
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white font-medium">
                          {entityB.category}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Market Valuation / Cap
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-[#C0B4FE] font-mono font-bold">
                          {selectedCompanyA?.valuationOrCap || 'Private'}
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white font-mono font-bold">
                          {selectedCompanyB?.valuationOrCap || 'Private'}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Headquarters
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white/80">
                          {selectedCompanyA?.headquarters || 'Global'}
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white/80">
                          {selectedCompanyB?.headquarters || 'Global'}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Operational Status
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold bg-[#C0B4FE]/15 text-[#C0B4FE] border border-[#C0B4FE]/30">
                            {selectedCompanyA?.status || 'Active'}
                          </span>
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-heading font-semibold bg-white/10 text-white/80 border border-white/20">
                            {selectedCompanyB?.status || 'Active'}
                          </span>
                        </td>
                      </tr>

                      {/* Section 2: Commercial & Pricing Architecture */}
                      <tr className="bg-[#0E0F17]/80">
                        <td colSpan={3} className="p-3 px-4 sm:px-5 font-heading font-bold text-xs text-[#C0B4FE] uppercase tracking-wider">
                          2. Commercial &amp; Pricing Architecture
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Pricing Model
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white/90 leading-relaxed font-sans">
                          {entityA.pricingOverview}
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white/90 leading-relaxed font-sans">
                          {entityB.pricingOverview}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Target Segment
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white/85">
                          {entityA.targetMarket}
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40] text-white/85">
                          {entityB.targetMarket}
                        </td>
                      </tr>

                      {/* Section 3: Core Technological Moats */}
                      <tr className="bg-[#0E0F17]/80">
                        <td colSpan={3} className="p-3 px-4 sm:px-5 font-heading font-bold text-xs text-[#C0B4FE] uppercase tracking-wider">
                          3. Core Technological Moats &amp; Capabilities
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Verified Strengths
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <ul className="space-y-2">
                            {entityA.coreStrengths.map((s, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-white/90">
                                <Check className="w-3.5 h-3.5 text-[#C0B4FE] shrink-0 mt-0.5" />
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <ul className="space-y-2">
                            {entityB.coreStrengths.map((s, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-white/90">
                                <Check className="w-3.5 h-3.5 text-white/60 shrink-0 mt-0.5" />
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>

                      {/* Section 4: Observed Vulnerabilities & Risk */}
                      <tr className="bg-[#0E0F17]/80">
                        <td colSpan={3} className="p-3 px-4 sm:px-5 font-heading font-bold text-xs text-amber-400/90 uppercase tracking-wider">
                          4. Observed Friction Points &amp; Risks
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Vulnerabilities
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <ul className="space-y-2 text-xs text-white/75">
                            {entityA.vulnerabilities.map((v, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                                <span>{v}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <ul className="space-y-2 text-xs text-white/75">
                            {entityB.vulnerabilities.map((v, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                                <span>{v}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>

                      {/* Section 5: Market Momentum */}
                      <tr className="bg-[#0E0F17]/80">
                        <td colSpan={3} className="p-3 px-4 sm:px-5 font-heading font-bold text-xs text-[#C0B4FE] uppercase tracking-wider">
                          5. Market Velocity &amp; Threat Level
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 md:p-5 font-mono text-white/50 bg-[#080910]/40">
                          Threat Level &amp; Momentum
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <div className="flex flex-col gap-1.5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-heading font-bold bg-[#C0B4FE]/15 text-[#C0B4FE] border border-[#C0B4FE]/30 w-fit">
                              {entityA.threatLevel}
                            </span>
                            <span className="font-mono text-xs text-white/80 font-semibold">{entityA.growthVelocity}</span>
                          </div>
                        </td>
                        <td className="p-3 sm:p-4 md:p-5 border-l border-[#2D2E40]">
                          <div className="flex flex-col gap-1.5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-heading font-bold bg-white/10 text-white/90 border border-white/20 w-fit">
                              {entityB.threatLevel}
                            </span>
                            <span className="font-mono text-xs text-white/80 font-semibold">{entityB.growthVelocity}</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </>
          )}
        </Container>
      </section>
    </div>
  );
};
