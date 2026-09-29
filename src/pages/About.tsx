import React from 'react';
import { AboutHero } from '../sections/about/AboutHero';
import { AboutCompany } from '../sections/about/AboutCompany';
import { AboutMissionVision } from '../sections/about/AboutMissionVision';
import { AboutTeam } from '../sections/about/AboutTeam';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pb-8 sm:pb-10 lg:pb-12 overflow-x-hidden bg-[#080910]">
      {/* 1. Standard Page Hero matching all other pages */}
      <AboutHero />

      {/* 2. Company Description & Key Metrics */}
      <AboutCompany />

      {/* 3. Company Vision & Mission */}
      <AboutMissionVision />

      {/* 4. Leadership Team (4 Members) */}
      <AboutTeam />
    </div>
  );
};
