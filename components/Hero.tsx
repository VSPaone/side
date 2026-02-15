import React from 'react';
import { motion } from 'framer-motion';
import { SideLogo } from './SideLogo';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onLoginClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLoginClick }) => {
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
              Certification
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1, ease: "circInOut" }}
                className="absolute left-0 top-1/2 h-[0.5vw] md:h-[0.8vw] bg-black -translate-y-1/2"
              />
            </span>
            <br />
            To Contribution.
          </h1>
          
          <div className="mt-8 flex flex-col items-start gap-8">
            <div className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-black max-w-md">
                Sovereign Innovation for Distributed Excellence. <br/>Not a course. An apprenticeship for the nation.
            </div>

            <div className="flex flex-wrap gap-4">
                <button 
                    onClick={onLoginClick}
                    className="bg-black text-white px-8 py-4 font-mono text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-green-500 hover:text-black transition-colors duration-300 flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
                >
                    [ Login to Node ] <ArrowRight size={16} />
                </button>
                <button 
                    className="border-2 border-black text-black px-8 py-4 font-mono text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors duration-300"
                >
                    Register Identity
                </button>
            </div>
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