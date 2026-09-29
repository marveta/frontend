import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'marveta_cookie_consent_v3';

export const CookieBanner: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsMounted(true);
      // Smooth intro trigger
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeWithExitAnimation = (consentValue: 'accepted' | 'denied' | 'dismissed') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, consentValue);
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 300);
  };

  if (!isMounted) return null;

  return (
    <div 
      className="fixed bottom-4 sm:bottom-6 inset-x-0 z-[9999] flex justify-center pointer-events-none px-3.5 sm:px-4"
    >
      <aside
        role="region"
        aria-label="Cookie consent banner"
        className={`pointer-events-auto w-full max-w-[360px] transform transition-all duration-300 ease-out will-change-transform ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#0D0E17]/95 backdrop-blur-xl border border-[#25263A] p-3.5 sm:p-4 shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_24px_rgba(192,180,254,0.08)]">
          {/* Ambient violet glow */}
          <div
            className="absolute -top-10 -right-10 w-24 h-24 bg-[#C0B4FE]/10 rounded-full blur-2xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Header: Cookie Icon + Title + Close Button */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-[#181926] border border-[#2B2C42] flex items-center justify-center shrink-0">
                <Cookie className="w-3.5 h-3.5 text-[#C0B4FE]" />
              </div>
              <h4 className="text-xs sm:text-[13px] font-heading font-semibold text-white tracking-tight truncate">
                Cookie Preferences
              </h4>
            </div>

            <button
              type="button"
              onClick={() => closeWithExitAnimation('dismissed')}
              className="w-6 h-6 rounded-md text-white/50 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer shrink-0 active:scale-90"
              aria-label="Close cookie consent banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Compact Body Text */}
          <p className="text-[11px] sm:text-xs text-white/70 font-sans leading-relaxed mb-3">
            We use cookies to analyze telemetry, protect enterprise data, and optimize intelligence workflows.
          </p>

          {/* Compact Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => closeWithExitAnimation('denied')}
              className="flex-1 py-1.5 sm:py-2 px-2.5 rounded-full bg-[#141523] border border-[#28293F] hover:border-[#C0B4FE]/50 text-white/80 hover:text-white font-heading font-medium text-xs transition-all duration-150 cursor-pointer active:scale-95 text-center truncate"
            >
              Deny
            </button>

            <button
              type="button"
              onClick={() => closeWithExitAnimation('accepted')}
              className="flex-1 py-1.5 sm:py-2 px-2.5 rounded-full bg-[#C0B4FE] hover:bg-[#D4CBFE] text-[#080910] font-heading font-semibold text-xs transition-all duration-150 shadow-sm hover:shadow-[0_4px_16px_rgba(192,180,254,0.25)] cursor-pointer active:scale-95 text-center truncate"
            >
              Accept
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};
