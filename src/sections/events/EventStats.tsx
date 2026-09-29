import React from 'react';
import { EventStats as EventStatsType } from '../../types';
import { Activity, Clock, Building2, AlertTriangle } from 'lucide-react';

interface EventStatsProps {
  stats: EventStatsType | null;
}

export const EventStats: React.FC<EventStatsProps> = ({ stats }) => {
  if (!stats) return null;

  const statItems = [
    {
      label: 'Total Monitored Events',
      value: stats.totalEvents,
      subtext: 'Historical archive to date',
      icon: <Activity className="w-5 h-5 text-[#C0B4FE]" />
    },
    {
      label: 'Recent Events (7D)',
      value: stats.recentEventsCount,
      subtext: 'Logged in past 7 days',
      icon: <Clock className="w-5 h-5 text-emerald-400" />
    },
    {
      label: 'Companies Affected',
      value: stats.companiesTracked,
      subtext: 'Active enterprise entities',
      icon: <Building2 className="w-5 h-5 text-[#C0B4FE]" />
    },
    {
      label: 'High-Relevance Alerts',
      value: stats.highRelevanceCount,
      subtext: 'Requiring strategic attention',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {statItems.map((item, idx) => (
        <div
          key={idx}
          className="p-5 rounded-xl bg-[#1B1B1B] border border-[#343434] flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-mono text-white/50">
              {item.label}
            </span>
            <div className="p-2 rounded-lg bg-[#080910] border border-[#343434]">
              {item.icon}
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              {item.value}
            </div>
            <div className="text-xs text-white/50 font-sans mt-1">
              {item.subtext}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
