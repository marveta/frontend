import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'neutral' | 'surface' | 'critical' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  icon?: ReactNode;
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  icon,
  id
}) => {
  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 rounded gap-1 tracking-wide",
    md: "text-xs px-2.5 py-1 rounded-md gap-1.5 tracking-wide"
  };

  const variantStyles = {
    accent: "bg-[#C0B4FE]/15 text-[#C0B4FE] border border-[#C0B4FE]/30 font-medium",
    neutral: "bg-[#343434]/50 text-white/90 border border-[#343434] font-normal",
    surface: "bg-[#1B1B1B] text-white/80 border border-[#343434] font-normal",
    critical: "bg-red-500/10 text-red-300 border border-red-500/25 font-medium",
    outline: "bg-transparent text-white/70 border border-[#343434] font-normal"
  };

  return (
    <span
      id={id}
      className={`inline-flex items-center font-heading whitespace-nowrap select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
