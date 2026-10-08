import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Eye, Radar, Workflow } from 'lucide-react';
import { Container } from '../components/common/Container';

const capabilities = [
  { number: '01', icon: Eye, title: 'See the moves behind the headlines', name: 'Competitive Intelligence Engine', description: 'Follow how competitors position themselves, where they invest, and how their public narratives evolve. Marveta brings changes across company updates and communications into a clearer strategic picture.', image: '/Competitive Intelligence Engine.svg', alt: 'Competitive intelligence overview' },
  { number: '02', icon: Radar, title: 'Know which market events deserve attention', name: 'Market Events Radar', description: 'Keep significant announcements, regulatory developments, partnerships, and market shifts in view. Put emerging events in context so your team can focus on what may change the decisions ahead.', image: '/Market Events Radar.svg', alt: 'Market events radar and timeline' },
  { number: '03', icon: BarChart3, title: 'Understand the offer, not just the announcement', name: 'Product & Pricing Signals', description: 'Spot changes to product tiers, packaging, pricing, and commercial terms. See how offers shift over time and what those changes could mean for your own market position.', image: '/Product & Pricing Telemetry.svg', alt: 'Product and pricing signals' },
  { number: '04', icon: BarChart3, title: 'Compare peers with a fuller picture', name: 'Competitive Comparison Matrix', description: 'Bring peer benchmarks and business signals into one considered view. Explore relative strengths, watch changes in competitive moats, and give strategic conversations a shared foundation.', image: '/Competitive Comparison Matrix.svg', alt: 'Competitive comparison matrix' },
];
const foundations = [
  { name: 'NVIDIA NeMo', role: 'Understand language and context', detail: 'In a future implementation, specialized language models could be fine-tuned and evaluated on market documents such as earnings calls, filings, press releases, and executive announcements. Their role would be to surface themes, strategic shifts, and event summaries for review.' },
  { name: 'NVIDIA RAPIDS', role: 'Prepare and compare the numbers', detail: 'cuDF could help normalize and aggregate financial and operational measures. cuML could support peer benchmarks and models that track pricing changes, trends, and competitive positions over time.' },
  { name: 'NVIDIA NIM', role: 'Deliver approved models to the product', detail: 'Once models and workflows are validated, optimized language and reasoning NIM containers could expose validated models through standardized APIs for the dashboard and analysis pipelines to call.' },
];
const implementationSteps = [
  { step: '01', title: 'Bring market sources together', tool: 'Source and data foundation', detail: 'Connect selected public materials and structured datasets. Resolve company names, timestamps, source links, and peer groups so every signal has useful context.' },
  { step: '02', title: 'Turn documents into reviewable signals', tool: 'NeMo model development', detail: 'Develop and evaluate task-specific language workflows for transcripts, filings, releases, and announcements. Extract events, themes, and narrative changes, with source references that analysts can inspect.' },
  { step: '03', title: 'Make company and peer data comparable', tool: 'RAPIDS: cuDF + cuML', detail: 'Normalize financial and operating measures, then calculate peer comparisons and time-based patterns such as pricing movements. Keep these quantitative signals alongside their source and period.' },
  { step: '04', title: 'Serve validated insights in the dashboard', tool: 'NIM inference services', detail: 'Package approved language and reasoning models behind standard APIs. The dashboard can bring their outputs together with quantitative signals, company context, and links back to supporting evidence.' },
];
const rolloutPhases = [
  { phase: 'Start with a focused foundation', detail: 'Select initial companies and trusted source types; define source tracking, peer mappings, and a small set of quality measures.' },
  { phase: 'Pilot the highest-value signals', detail: 'Evaluate a narrow set of workflows—such as narrative changes and pricing updates—with analyst review before broadening coverage.' },
  { phase: 'Expand with evidence', detail: 'Add event categories and benchmarking use cases as quality, usefulness, and operating needs are demonstrated.' },
];
const dashboardUrl = 'https://dash.marveta.lk';

export const ProductPage: React.FC = () => (
  <div className="w-full overflow-hidden pb-16 sm:pb-24">
    <section className="relative flex min-h-[680px] items-center overflow-hidden border-b border-white/[0.06] sm:min-h-[740px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img src="/Hero.svg" alt="" className="absolute inset-0 h-full w-full object-cover object-right opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080910] via-[#080910]/90 to-[#080910]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080910] via-transparent to-[#080910]/40" />
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#C0B4FE]/10 blur-[130px]" />
      </div>
      <Container className="relative z-10 max-w-7xl py-24 sm:py-28 lg:py-32">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3 text-xs font-heading font-semibold uppercase tracking-[0.22em] text-[#C0B4FE]"><span className="h-px w-9 bg-[#C0B4FE]" />Introducing Marveta V.1</div>
          <h1 className="font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-[88px]">Clarity for the<span className="block bg-gradient-to-r from-white via-[#E4DEFE] to-[#C0B4FE] bg-clip-text text-transparent">decisions ahead.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">The market never stands still. Marveta V.1 helps your team make sense of competitor moves, market events, and changing offers—so you can act with a clearer view of what is happening around you.</p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href={dashboardUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#C0B4FE] px-7 font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#080910] shadow-[0_0_32px_rgba(192,180,254,0.2)] transition-all hover:bg-[#D4CBFE] hover:shadow-[0_0_40px_rgba(192,180,254,0.38)] sm:w-auto">Explore Marveta V.1 <ArrowUpRight className="h-4 w-4" /></a>
            <a href="#capabilities" className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition-colors hover:text-[#C0B4FE]">Discover the platform <ArrowDown className="h-4 w-4" /></a>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">{['Competitor moves', 'Market events', 'Product & pricing'].map((item) => <div key={item} className="flex items-center gap-3 border-t border-white/15 pt-3 text-xs font-heading uppercase tracking-[0.12em] text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-[#C0B4FE]" />{item}</div>)}</div>
        </div>
      </Container>
    </section>

    <section id="capabilities" className="scroll-mt-24 py-20 sm:py-28">
      <Container className="max-w-7xl">
        <div className="mb-14 max-w-3xl sm:mb-20"><p className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[#C0B4FE]">Intelligence that moves with your market</p><h2 className="font-heading text-3xl font-normal leading-tight tracking-tight text-white sm:text-5xl">A better view of the forces shaping your next move.</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">From the first signal to the wider strategic context, Marveta brings the details worth noticing into focus.</p></div>
        <div className="space-y-6 sm:space-y-8">{capabilities.map(({ number, icon: Icon, title, name, description, image, alt }, index) => <article key={number} className={`grid items-center gap-7 rounded-2xl border border-[#343434] bg-[#12131A] p-5 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-14 ${index % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
          <div><div className="mb-6 flex items-center gap-3 text-xs font-mono tracking-[0.16em] text-white/35"><Icon className="h-4 w-4 text-[#C0B4FE]" />{number}<span className="h-px w-10 bg-white/15" />MARVETA V.1</div><h3 className="font-heading text-2xl font-medium leading-tight text-white sm:text-3xl">{title}</h3><p className="mt-3 font-heading text-sm font-semibold text-[#C0B4FE]">{name}</p><p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">{description}</p></div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080910]"><img src={image} alt={alt} loading="lazy" className="aspect-[1.55/1] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]" /></div>
        </article>)}</div>
      </Container>
    </section>

    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#0C0D15] py-20 sm:py-28">
      <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#C0B4FE]/[0.06] blur-[130px]" aria-hidden="true" />
      <Container className="relative max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div><p className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[#C0B4FE]">One connected view</p><h2 className="font-heading text-3xl font-normal leading-tight tracking-tight text-white sm:text-5xl">From scattered signals to shared understanding.</h2><p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">Bring market events, company activity, product changes, and peer comparisons into a unified intelligence dashboard. Give leaders and strategy teams a common place to explore what changed, why it matters, and what to watch next.</p><a href={dashboardUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#C0B4FE] hover:text-white">Take a look inside <ArrowRight className="h-4 w-4" /></a></div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12131A] p-2 shadow-2xl shadow-black/40 sm:p-3"><img src="/Company Overview.svg" alt="Unified intelligence dashboard company overview" loading="lazy" className="w-full rounded-xl" /><div className="pointer-events-none absolute inset-x-2 bottom-2 h-20 rounded-b-xl bg-gradient-to-t from-[#12131A]/70 to-transparent sm:inset-x-3 sm:bottom-3" /></div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">{[['A clearer signal', 'Put meaningful developments in view.'], ['A wider context', 'Connect individual events to the bigger picture.'], ['A shared perspective', 'Give teams a common foundation for discussion.']].map(([title, copy]) => <div key={title} className="border-t border-white/15 pt-4"><p className="font-heading text-sm font-semibold text-white">{title}</p><p className="mt-1.5 text-sm leading-relaxed text-white/50">{copy}</p></div>)}</div>
      </Container>
    </section>

    <section id="technology" className="py-20 sm:py-28">
      <Container className="max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[#C0B4FE]">A considered technology foundation</p>
            <h2 className="font-heading text-3xl font-normal leading-tight tracking-tight text-white sm:text-5xl">The right tools for language, numbers, and delivery.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/55">The proposed NVIDIA stack pairs NeMo, NIM, and RAPIDS as building blocks for future Marveta intelligence workflows. Their job is to support useful, reviewable market insight—not to become the story your team has to learn.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {foundations.map((item, index) => <article key={item.name} className="rounded-2xl border border-[#343434] bg-[#12131A] p-6 sm:p-7">
            <div className="mb-7 flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C0B4FE]/20 bg-[#C0B4FE]/[0.08] text-[#C0B4FE]"><Workflow className="h-5 w-5" /></span><span className="font-mono text-xs tracking-widest text-white/30">0{index + 1}</span></div>
            <h3 className="font-heading text-xl font-medium text-white">{item.name}</h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#C0B4FE]">{item.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">{item.detail}</p>
          </article>)}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-8 max-w-3xl"><p className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[#C0B4FE]">Where each SDK would fit</p><h3 className="font-heading text-2xl font-normal leading-tight text-white sm:text-4xl">A path from source material to a decision-ready view.</h3><p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">A possible future flow would combine language analysis and quantitative analysis, then make validated results available to the dashboard with the supporting context attached.</p></div>
          <div className="grid gap-4 md:grid-cols-2">
            {implementationSteps.map((item) => <article key={item.step} className="relative rounded-2xl border border-[#343434] bg-[#0E0F17] p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-3"><span className="font-mono text-xs tracking-widest text-[#C0B4FE]">{item.step}</span><span className="h-px w-8 bg-[#C0B4FE]/40"/><span className="text-xs font-heading font-semibold uppercase tracking-[0.1em] text-white/40">{item.tool}</span></div>
              <h4 className="font-heading text-lg font-medium text-white sm:text-xl">{item.title}</h4><p className="mt-3 text-sm leading-relaxed text-white/55">{item.detail}</p>
            </article>)}
          </div>
          <div className="mt-5 rounded-xl border border-[#C0B4FE]/15 bg-[#C0B4FE]/[0.04] px-5 py-4 text-sm leading-relaxed text-white/60"><span className="font-semibold text-[#C0B4FE]">Evidence stays close:</span> Each future signal should retain its source, date, and relevant company context, so teams can check what supports an insight before acting on it.</div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:pt-16">
          <div className="mb-8 max-w-2xl"><p className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[#C0B4FE]">A practical future rollout</p><h3 className="font-heading text-2xl font-normal leading-tight text-white sm:text-4xl">Prove the value in stages.</h3><p className="mt-4 text-sm leading-relaxed text-white/55">The sequence below is a proposed direction, not a claim that these NVIDIA workflows are already deployed.</p></div>
          <div className="grid gap-0 md:grid-cols-3">
            {rolloutPhases.map((item, index) => <article key={item.phase} className={`border-t border-[#343434] py-6 md:px-6 md:py-7 ${index === 0 ? 'md:pl-0' : ''}`}><p className="mb-3 font-mono text-xs tracking-widest text-[#C0B4FE]">PHASE 0{index + 1}</p><h4 className="font-heading text-lg font-medium text-white">{item.phase}</h4><p className="mt-3 text-sm leading-relaxed text-white/55">{item.detail}</p></article>)}
          </div>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-white/35">Final model choices, infrastructure, data access, and deployment controls would be set during implementation and validation.</p>
      </Container>
    </section>

    <section className="px-3 sm:px-5 md:px-6 lg:px-8"><div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px] border border-[#343434] bg-[#12131A] px-6 py-14 text-center sm:rounded-[32px] sm:px-12 sm:py-20"><div className="absolute inset-0 bg-[url('/Hero%20cover%20image.svg')] bg-cover bg-center opacity-20" aria-hidden="true" /><div className="absolute inset-0 bg-gradient-to-r from-[#080910]/90 via-[#080910]/55 to-[#080910]/90" aria-hidden="true" /><div className="relative mx-auto max-w-3xl"><p className="mb-3 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-[#C0B4FE]">Stay a step ahead</p><h2 className="font-heading text-3xl font-normal leading-tight text-white sm:text-5xl">Make your next move with more of the picture.</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">Explore Marveta V.1 and see your competitive landscape from a new perspective.</p><a href={dashboardUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C0B4FE] px-7 font-heading text-xs font-bold uppercase tracking-[0.13em] text-[#080910] transition-colors hover:bg-[#D4CBFE]">Open Marveta V.1 <ArrowUpRight className="h-4 w-4" /></a></div></div></section>
  </div>
);
