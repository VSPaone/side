import React from 'react';
import { Hero } from './Hero';
import { TheVoid } from './TheVoid';
import { Introduction } from './Introduction';
import { ProcessFlow } from './ProcessFlow';
import { Architecture } from './Architecture';
import { NationalGrid } from './NationalGrid';
import { SolutionsShowcase } from './SolutionsShowcase';
import { CaseStudy } from './CaseStudy';
import { Impact } from './Impact';
import { Roadmap } from './Roadmap';
import { Moat } from './Moat';
import { Philosophy } from './Philosophy';
import { Gateway } from './Gateway';

interface LandingPageProps {
  onLoginClick: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <main>
      <Hero onLoginClick={onLoginClick} />
      <TheVoid />
      <Introduction />
      <ProcessFlow />
      <Architecture />
      <NationalGrid />
      <SolutionsShowcase />
      <CaseStudy />
      <Impact />
      <Roadmap />
      <Moat />
      <Philosophy />
      <Gateway />
    </main>
  );
};