import React, { ReactNode } from 'react';
import { SearchX } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No records matched your criteria',
  description = 'Try broadening your search term, switching categories, or resetting active filters.',
  icon,
  actionLabel,
  onAction,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 text-center rounded-xl bg-[#1B1B1B] border border-[#343434] ${className}`}>
      <div className="w-14 h-14 rounded-xl bg-[#1C1C2B] border border-[#343434] flex items-center justify-center text-[#C0B4FE] mb-4">
        {icon || <SearchX className="w-7 h-7" />}
      </div>
      <h3 className="text-lg font-bold font-heading text-white mb-2">{title}</h3>
      <p className="text-sm text-white/60 max-w-md mb-6 leading-relaxed">{description}</p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
