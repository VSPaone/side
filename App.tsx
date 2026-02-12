import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheVoid } from './components/TheVoid';
import { Introduction } from './components/Introduction';
import { Architecture } from './components/Architecture';
import { NationalGrid } from './components/NationalGrid';
import { CaseStudy } from './components/CaseStudy';
import { Impact } from './components/Impact';
import { Roadmap } from './components/Roadmap';
import { Moat } from './components/Moat';
import { Philosophy } from './components/Philosophy';
import { Gateway } from './components/Gateway';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-white selection:text-black cursor-default">
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <TheVoid />
            <Introduction />
            <Architecture />
            <NationalGrid />
            <CaseStudy />
            <Impact />
            <Roadmap />
            <Moat />
            <Philosophy />
            <Gateway />
          </main>
        </motion.div>
      )}
    </div>
  );
}