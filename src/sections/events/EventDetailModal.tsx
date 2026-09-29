import React from 'react';
import { MarketEvent } from '../../types';
import { Modal } from '../../components/common/Modal';
import { Badge } from '../../components/common/Badge';
import { Building, Calendar, ShieldCheck, ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { getEventImage } from './EventCard';

interface EventDetailModalProps {
  event: MarketEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  event,
  isOpen,
  onClose
}) => {
  if (!event) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={event.title}
      subtitle={`Event Intelligence • ${event.category}`}
      maxWidth="xl"
    >
      <div className="space-y-6">
        {/* Inset Event Showcase Image */}
        <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-[#0A0B13] border border-[#222332] shadow-inner">
          <img
            src={getEventImage(event)}
            alt={event.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080910] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Core Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-lg bg-[#080910] border border-[#343434]">
            <span className="text-[11px] text-white/50 block font-mono">COMPANY</span>
            <strong className="text-sm text-white">{event.company}</strong>
          </div>
          <div className="p-3 rounded-lg bg-[#080910] border border-[#343434]">
            <span className="text-[11px] text-white/50 block font-mono">RELEVANCE</span>
            <Badge 
              variant={event.relevance === 'Critical' ? 'critical' : event.relevance === 'High' ? 'accent' : 'neutral'} 
              size="sm" 
              className="mt-1"
            >
              {event.relevance}
            </Badge>
          </div>
          <div className="p-3 rounded-lg bg-[#080910] border border-[#343434]">
            <span className="text-[11px] text-white/50 block font-mono">LOGGED DATE</span>
            <span className="text-xs text-white/80 block mt-1">{event.formattedDate}</span>
          </div>
          <div className="p-3 rounded-lg bg-[#080910] border border-[#343434]">
            <span className="text-[11px] text-white/50 block font-mono">CONFIDENCE</span>
            <span className="text-xs text-[#C0B4FE] font-mono block mt-1">{event.confidenceScore}% Audited</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div>
          <h4 className="text-xs uppercase tracking-wider font-heading font-semibold text-white/50 mb-2">
            Event Synopsis
          </h4>
          <p className="text-sm text-white/90 leading-relaxed font-sans bg-[#080910] p-4 rounded-xl border border-[#343434]">
            {event.summary}
          </p>
        </div>

        {/* Strategic Impact Analysis */}
        <div>
          <h4 className="text-xs uppercase tracking-wider font-heading font-semibold text-white/50 mb-2">
            Strategic &amp; Competitive Impact
          </h4>
          <div className="p-4 rounded-xl bg-[#1C1C2B] border border-[#343434]">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#C0B4FE] shrink-0 mt-0.5" />
              <p className="text-sm text-white/80 leading-relaxed">
                {event.strategicImpact}
              </p>
            </div>
          </div>
        </div>

        {/* Affected Products & Sources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-[#080910] border border-[#343434]">
            <div className="flex items-center gap-2 mb-2 text-xs font-heading font-semibold text-[#C0B4FE]">
              <Target className="w-4 h-4" />
              <span>Affected Products &amp; Services</span>
            </div>
            {event.affectedProducts && event.affectedProducts.length > 0 ? (
              <ul className="text-xs text-white/70 space-y-1">
                {event.affectedProducts.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#C0B4FE]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-xs text-white/40">Broad corporate / organizational scope</span>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-[#080910] border border-[#343434]">
            <div className="flex items-center gap-2 mb-2 text-xs font-heading font-semibold text-[#C0B4FE]">
              <ShieldCheck className="w-4 h-4" />
              <span>Provenance &amp; Citations</span>
            </div>
            <p className="text-xs text-white/70">
              Corroborated across {event.sourcesCount} distinct primary sources (Regulatory filings, press releases, analyst briefings).
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#343434] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <span className="text-[11px] text-white/40 font-mono text-center sm:text-left">
            Event UID: {event.id}
          </span>
          <Link to="/comparison" onClick={onClose} className="w-full sm:w-auto block sm:inline-block">
            <Button variant="primary" size="sm" fullWidth className="sm:w-auto">
              Cross-Examine with Competitors
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};
