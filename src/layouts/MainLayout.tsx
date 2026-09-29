import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { CookieBanner } from '../components/common/CookieBanner';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-[#080910] text-white selection:bg-[#C0B4FE]/20 selection:text-[#C0B4FE] overflow-x-hidden max-w-full">
      <ScrollToTop />
      <Header />
      <main className={`flex-1 w-full max-w-full overflow-x-hidden ${isHomePage ? 'pt-0' : 'pt-20 sm:pt-24'}`}>
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
