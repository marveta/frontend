import React, { useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
  maxWidth?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'xl'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-2xl',
    '2xl': 'max-w-4xl',
    '3xl': 'max-w-5xl'
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="min-h-full flex items-center justify-center p-2.5 sm:p-4 md:p-6 lg:p-8">
        {/* Backdrop click dismiss overlay */}
        <div 
          className="fixed inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Box */}
        <div 
          className={`relative w-full ${maxWidthStyles[maxWidth]} bg-[#11121C] border border-[#222332] rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.85)] p-4 sm:p-6 md:p-7 z-10 my-auto sm:my-6 transition-all animate-in fade-in zoom-in-95 duration-200`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-[#222332] pb-3 sm:pb-3.5 mb-3.5 sm:mb-5">
            <div className="min-w-0 flex-1">
              {subtitle && (
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.16em] font-heading font-semibold text-[#C0B4FE] block mb-0.5 truncate">
                  {subtitle}
                </span>
              )}
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal sm:font-medium font-heading text-white truncate tracking-tight">
                {title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white p-1.5 sm:p-2 rounded-xl bg-[#181926]/60 hover:bg-[#181926] border border-[#222332] hover:border-[#C0B4FE]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C0B4FE]/40 shrink-0 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="text-white/80 w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
