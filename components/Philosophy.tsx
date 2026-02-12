import React from 'react';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section className="bg-black text-white py-32 px-6 flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
          "The 16 beautiful years a student spends in education should not be a transaction for a certificate. <br/>
          <span className="text-white/50">It should be an apprenticeship for the nation.</span>"
        </h2>
        <div className="w-16 h-1 bg-white mx-auto mb-8" />
        <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-70">
          Every hour spent studying is an hour spent building.
        </p>
      </motion.div>
    </section>
  );
};