import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from './Container';
import { Button } from './Button';

interface NavItem {
  name: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Events', path: '/events' },
  { name: 'Comparison', path: '/comparison' },
  { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path === '/' && location.pathname === '/') {
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <header id="marveta-header" className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Top Navbar Bar: Has the background, padding, and bottom border */}
        <div
          className={`pointer-events-auto transition-colors duration-200 py-3.5 sm:py-4 ${
            isScrolled
              ? 'bg-[#080910]/95 backdrop-blur-xl border-b border-[#343434] shadow-xl shadow-black/50'
              : 'bg-transparent border-b border-transparent'
          }`}
        >
          <Container>
            <div className="flex items-center justify-between">
              {/* Logo (Left side) */}
              <Link
                to="/"
                onClick={handleLogoClick}
                className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#C0B4FE]/40 rounded-md cursor-pointer py-1"
                aria-label="Marveta Home"
              >
                <img
                  src="/Logo.svg"
                  alt="Marveta"
                  className="h-10 sm:h-12 md:h-13 lg:h-14 w-auto object-contain transition-all duration-200 group-hover:opacity-90"
                />
              </Link>

              {/* Desktop Navigation (Visible on lg+ screens) */}
              <nav 
                className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#12131A]/85 border border-white/[0.08] backdrop-blur-md" 
                aria-label="Main Navigation"
              >
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={(e) => {
                        if (item.path === '/' && location.pathname === '/') {
                          e.preventDefault();
                          const hero = document.getElementById('hero');
                          if (hero) {
                            hero.scrollIntoView({ behavior: 'smooth' });
                          } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }
                      }}
                      className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium font-heading transition-colors cursor-pointer rounded-full select-none ${
                        active ? 'text-[#080910] font-semibold' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="activeNavPill"
                          className="absolute inset-0 rounded-full bg-[#C0B4FE]"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop Right CTA (Visible on lg+ screens) */}
              <div className="hidden lg:flex items-center gap-3">
                <Link to="/contact">
                  <button
                    type="button"
                    className="header-cta-btn group"
                  >
                    <span>Marveta AI</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#080910] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                  </button>
                </Link>
              </div>

              {/* Hamburger / Close Button (Right side on sm & md screens) */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer active:scale-95"
                  aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Mobile & Tablet Floating Dropdown Menu (Directly below navbar in natural flow - NEVER overlaps navbar) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="pointer-events-auto pt-2.5 sm:pt-3 lg:hidden">
              <Container>
                <div className="flex justify-end w-full">
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    style={{ willChange: 'transform, opacity' }}
                    className="w-full sm:w-80 md:w-80 rounded-3xl bg-[#0B0C16]/95 border border-white/12 p-2.5 sm:p-3 shadow-2xl shadow-black/80 backdrop-blur-2xl"
                  >
                    <nav className="flex flex-col gap-1.5" aria-label="Dropdown Navigation">
                      {NAV_ITEMS.map((item) => {
                        const active = isActive(item.path);
                        return (
                          <button
                            key={item.path}
                            type="button"
                            onClick={() => handleNavClick(item.path)}
                            className={`w-full text-left px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-base font-heading transition-colors cursor-pointer select-none ${
                              active
                                ? 'bg-[#C0B4FE] text-[#080910] font-bold shadow-md shadow-[#C0B4FE]/15'
                                : 'text-white/80 hover:text-white hover:bg-white/[0.08] font-medium'
                            }`}
                          >
                            {item.name}
                          </button>
                        );
                      })}
                    </nav>

                    {/* Get Started Button below nav links */}
                    <div className="pt-2.5 mt-2 border-t border-white/[0.08]">
                      <button
                        type="button"
                        onClick={() => handleNavClick('/contact')}
                        className="header-cta-btn w-full justify-center group !h-11 !rounded-full cursor-pointer"
                        style={{ clipPath: 'none', WebkitClipPath: 'none' }}
                      >
                        <span className="font-heading font-bold text-xs uppercase tracking-wider text-[#080910]">Marveta AI</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#080910] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </Container>
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Invisible backdrop to dismiss menu on outside tap */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
