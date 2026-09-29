import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading intelligence data...',
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 ${className}`}>
      <div className="w-12 h-12 rounded-full border border-[#343434] bg-[#1B1B1B] flex items-center justify-center mb-4">
        <Loader2 className="w-6 h-6 text-[#C0B4FE] animate-spin" />
      </div>
      <p className="text-sm text-white/60 font-medium font-sans">{message}</p>
      <span className="text-xs text-white/40 mt-1 font-mono">Syncing with Marveta core</span>
    </div>
  );
};
