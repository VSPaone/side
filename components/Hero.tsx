import React from 'react';
import { motion } from 'framer-motion';
import { SideLogo } from './SideLogo';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden border-b border-black">
      <div className="z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative inline-block"
        >
          <h1 className="text-[10vw] md:text-[9vw] leading-[0.85] font-black tracking-tighter uppercase text-black break-words">
            From <br />
            <span className="relative inline-block">
              Hallucination
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1, ease: "circInOut" }}
                className="absolute left-0 top-1/2 h-[0.5vw] md:h-[0.8vw] bg-black -translate-y-1/2"
              />
            </span>
            <br />
            To Application.
          </h1>
          <div className="mt-8 font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-black max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Sovereign Innovation for Distributed Excellence. <br/>Not a course. An apprenticeship for the nation.
          </div>
        </motion.div>
      </div>
      
      {/* Massive cropped logo in bg */}
      <motion.div 
        className="absolute -bottom-24 -right-24 md:-bottom-48 md:-right-48 text-black opacity-[0.03] pointer-events-none"
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <SideLogo className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw]" />
      </motion.div>
    </section>
  );
};