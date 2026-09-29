import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'featured' | 'interactive';
  className?: string;
  onClick?: () => void;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  id
}) => {
  const baseStyles = "rounded-xl border transition-all duration-200 relative overflow-hidden";
  
  const variantStyles = {
    default: "bg-[#1B1B1B] border-[#343434]",
    elevated: "bg-[#1B1B1B] border-[#343434] shadow-lg shadow-black/40",
    featured: "bg-[#1C1C2B] border-[#343434] hover:border-[#C0B4FE]/50",
    interactive: "bg-[#1B1B1B] border-[#343434] hover:border-[#C0B4FE] hover:-translate-y-1 cursor-pointer transition-transform duration-200"
  };

  return (
    <div
      id={id}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
