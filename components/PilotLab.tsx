import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PilotLab: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="min-h-screen bg-black text-white relative flex items-center justify-center overflow-hidden py-24 border-y border-white/10">
      {/* Background Grid / Abstract Map */}
      <motion.div 
        style={{ y: yPos }}
        className="absolute inset-0 opacity-20 pointer-events-none grid grid-cols-12 grid-rows-12 gap-px"
      >
        {[...Array(144)].map((_, i) => (
          <div key={i} className="border border-white/10 w-full h-full" />
        ))}
      </motion.div>

      {/* Center Reticle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] border border-white/20 rounded-full flex items-center justify-center">
               <div className="w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] border border-white/30 rounded-full animate-pulse" />
            </div>
         </div>
         {/* Crosshairs */}
         <div className="absolute w-full h-px bg-white/10" />
         <div className="absolute h-full w-px bg-white/10" />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 border border-white px-6 py-2 rounded-full font-mono text-xs tracking-widest uppercase mb-12 bg-black hover:bg-white hover:text-black transition-colors"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
          Status: Living Lab Active
        </motion.div>

        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
          CCSU <br/> Meerut.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 font-mono text-sm uppercase tracking-widest border-t border-b border-white/20 py-8 bg-black/50 backdrop-blur-md">
          <div className="flex flex-col gap-2">
            <span className="text-white/50">Target Nodes</span>
            <span className="text-2xl font-bold">50 Schools</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="flex flex-col gap-2">
            <span className="text-white/50">Data Integration</span>
            <span className="text-2xl font-bold">Collectorate</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="flex flex-col gap-2">
            <span className="text-white/50">Core Engine</span>
            <span className="text-2xl font-bold">Anuvadini AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};