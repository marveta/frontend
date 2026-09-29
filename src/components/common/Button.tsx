import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  id,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium font-heading transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#C0B4FE]/40";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 rounded-md gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-lg gap-2",
    lg: "text-base px-7 py-3.5 rounded-lg gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#C0B4FE] text-[#080910] hover:bg-[#D4CBFE] active:scale-[0.98] shadow-sm font-semibold",
    secondary: "bg-[#1B1B1B] border border-[#343434] text-[#FFFFFF] hover:border-[#C0B4FE] hover:text-[#C0B4FE] active:scale-[0.98]",
    outline: "bg-transparent border border-[#343434] text-[#FFFFFF] hover:border-[#C0B4FE] hover:bg-[#1C1C2B]/60",
    ghost: "bg-transparent text-white/80 hover:text-white hover:bg-[#1B1B1B]"
  };

  return (
    <button
      id={id}
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
