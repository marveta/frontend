import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GitCompare, Zap, Shield, Check, Sparkles, Building2 } from 'lucide-react';
import { Container } from '../../components/common/Container';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';

// Imagery
import techImg from '../../assets/images/tech_product_neural_1789533311967.jpg';
import financeImg from '../../assets/images/fintech_analytics_ui_1789533327490.jpg';
import comparisonImg from '../../assets/images/comparison_matrix_ui_1789533350842.jpg';

interface BenchmarkVector {
  name: string;
  scoreA: number;
  scoreB: number;
  unit?: string;
}

const BENCHMARK_VECTORS: BenchmarkVector[] = [
  { name: 'Model Inference Speed', scoreA: 94, scoreB: 88 },
  { name: 'Pricing Elasticity & Margins', scoreA: 82, scoreB: 91 },
  { name: 'Zero-Trust Security Rigor', scoreA: 96, scoreB: 84 },
  { name: 'Release Velocity & Cadence', scoreA: 92, scoreB: 79 },
  { name: 'Enterprise Market Penetration', scoreA: 87, scoreB: 93 },
];

export const HomeComparisonSection: React.FC = () => {
  return (
    <section 
      id="home-comparison-section"
      className="py-20 sm:py-24 bg-[#080910] relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div 
        className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-[#C0B4FE]/[0.03] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionTitle
            eyebrow="Competitive Benchmarking"
            title="Side-by-side corporate &amp; product intelligence."
            description="Evaluate core technological capabilities, pricing structures, growth velocities, and vulnerability profiles in one unified radar matrix."
            align="left"
            className="mb-0"
          />

          <Link to="/comparison" className="shrink-0 w-full sm:w-auto block sm:inline-block">
            <Button
              variant="secondary"
              size="md"
              fullWidth
              className="sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Open Comparison Matrix
            </Button>
          </Link>
        </div>

        {/* Head-to-Head Comparison Preview Card */}
        <div className="rounded-2xl bg-[#1B1B1B] border border-[#343434] p-6 sm:p-8 mb-10 shadow-2xl overflow-hidden">
          {/* Top Banner Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-[#343434] gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1C1C2B] border border-[#C0B4FE]/40 flex items-center justify-center">
                <GitCompare className="w-4 h-4 text-[#C0B4FE]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#C0B4FE] uppercase tracking-wider block font-semibold">
                  Featured Benchmark
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold font-heading text-white">
                  Aetheris Dynamics <span className="text-[#C0B4FE]">vs</span> Vortex Capital Intelligence
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#080910] border border-[#343434] text-[11px] font-mono text-white/70">
                Direct Competitor Radar
              </span>
              <Badge variant="accent" size="sm">Active Synthesis</Badge>
            </div>
          </div>

          {/* Dual Profile Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Entity A */}
            <div className="rounded-xl bg-[#080910] border-2 border-[#C0B4FE] p-4 sm:p-5 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C0B4FE]" />
                  <strong className="text-sm font-heading font-bold text-white">
                    Aetheris Dynamics
                  </strong>
                </div>
                <span className="text-[11px] font-mono text-[#C0B4FE] bg-[#1C1C2B] px-2 py-0.5 rounded border border-[#C0B4FE]/30">
                  Primary Baseline
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="bg-[#1B1B1B] p-2 rounded-lg border border-[#343434]">
                  <span className="text-white/40 block text-[10px]">VALUATION</span>
                  <span className="text-white font-semibold">$1.4B</span>
                </div>
                <div className="bg-[#1B1B1B] p-2 rounded-lg border border-[#343434]">
                  <span className="text-white/40 block text-[10px]">THREAT</span>
                  <span className="text-red-400 font-semibold">High</span>
                </div>
                <div className="bg-[#1B1B1B] p-2 rounded-lg border border-[#343434]">
                  <span className="text-white/40 block text-[10px]">VELOCITY</span>
                  <span className="text-[#C0B4FE] font-semibold">+42% YoY</span>
                </div>
              </div>
            </div>

            {/* Entity B */}
            <div className="rounded-xl bg-[#080910] border border-[#343434] hover:border-white/40 p-4 sm:p-5 relative overflow-hidden group transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
                  <strong className="text-sm font-heading font-bold text-white">
                    Vortex Capital Intelligence
                  </strong>
                </div>
                <span className="text-[11px] font-mono text-white/70 bg-[#1B1B1B] px-2 py-0.5 rounded border border-[#343434]">
                  Challenger
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="bg-[#1B1B1B] p-2 rounded-lg border border-[#343434]">
                  <span className="text-white/40 block text-[10px]">VALUATION</span>
                  <span className="text-white font-semibold">$820M</span>
                </div>
                <div className="bg-[#1B1B1B] p-2 rounded-lg border border-[#343434]">
                  <span className="text-white/40 block text-[10px]">THREAT</span>
                  <span className="text-amber-400 font-semibold">Moderate</span>
                </div>
                <div className="bg-[#1B1B1B] p-2 rounded-lg border border-[#343434]">
                  <span className="text-white/40 block text-[10px]">VELOCITY</span>
                  <span className="text-white/90 font-semibold">+28% YoY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metric Comparison Progress Bars */}
          <div className="space-y-4 pt-2 mb-8">
            <div className="text-xs uppercase tracking-wider font-mono text-white/50 flex items-center justify-between">
              <span>Multi-Vector Normalized Benchmark Scores</span>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5 text-[#C0B4FE]">
                  <span className="w-2 h-2 rounded-full bg-[#C0B4FE]" />
                  Aetheris
                </span>
                <span className="flex items-center gap-1.5 text-white/70">
                  <span className="w-2 h-2 rounded-full bg-white/50" />
                  Vortex
                </span>
              </div>
            </div>

            {BENCHMARK_VECTORS.map((vec, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#080910] border border-[#343434] space-y-2">
                <div className="flex items-center justify-between text-xs font-heading">
                  <span className="text-white/90 font-medium">{vec.name}</span>
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="text-[#C0B4FE] font-bold">{vec.scoreA} / 100</span>
                    <span className="text-white/30">vs</span>
                    <span className="text-white/70">{vec.scoreB} / 100</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 h-2 bg-[#1B1B1B] rounded-full overflow-hidden p-0.5">
                  {/* Score A Bar */}
                  <div className="w-full bg-[#1B1B1B] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C0B4FE] rounded-full transition-all duration-700"
                      style={{ width: `${vec.scoreA}%` }}
                    />
                  </div>
                  {/* Score B Bar */}
                  <div className="w-full bg-[#1B1B1B] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white/50 rounded-full transition-all duration-700"
                      style={{ width: `${vec.scoreB}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Synthesis Callout */}
          <div className="p-4 rounded-xl bg-[#1C1C2B] border border-[#343434] flex items-start gap-3 text-xs text-white/80 font-sans">
            <Zap className="w-4 h-4 text-[#C0B4FE] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Analyst Key Takeaway:</strong> Aetheris maintains technological superiority in inference speed and zero-trust data sovereignty, whereas Vortex capitalizes on lower seat pricing minimums and deeper legacy terminal distribution in Tier-2 hedge funds.
            </p>
          </div>
        </div>

        {/* Bottom Banner with Link Button */}
        <div className="rounded-2xl bg-[#1B1B1B] border border-[#343434] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-[#C0B4FE]">
              <Sparkles className="w-3.5 h-3.5 text-[#C0B4FE]" />
              <span>CUSTOMIZE ENTITY SELECTION ACROSS ALL 140+ ENTERPRISES</span>
            </div>
            <h4 className="text-lg font-bold font-heading text-white">
              Perform deep head-to-head audits with customizable dimensions
            </h4>
            <p className="text-sm text-white/70 font-sans max-w-xl">
              Switch competitors dynamically, explore differential indicator matrices, inspect core moats, and export executive intelligence memos.
            </p>
          </div>

          <Link to="/comparison" className="shrink-0 w-full sm:w-auto block sm:inline-block">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Launch Comparison Matrix
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
