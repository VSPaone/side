import React from 'react';
import { motion } from 'framer-motion';

export const Introduction: React.FC = () => {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 border-b border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
           <div className="font-mono text-xs tracking-widest uppercase mb-4 opacity-50 border-l-2 border-black pl-4">
              System Identity
           </div>
           <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              What is <br/> S.I.D.E.?
           </h2>
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-12">
            <div>
                <h3 className="font-bold text-xl uppercase mb-4">The Definition</h3>
                <p className="font-mono text-sm md:text-base leading-relaxed opacity-80 border-l border-black/20 pl-6">
                    S.I.D.E. SCHOOL (Sovereign Innovation for Distributed Excellence) is not a course provider. It is a <strong>systemic infrastructure layer</strong> that bridges the gap between academic curriculum and real-world civic application.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 pt-8">
                <div>
                    <h3 className="font-bold text-xl uppercase mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> The Vision
                    </h3>
                    <p className="font-mono text-xs leading-relaxed opacity-70">
                        To transform the 16-year educational journey from a transaction for a certificate into a <strong>National Innovation Asset</strong>. We integrate with India's Digital Public Infrastructure (DPI) to turn student assignments into civic solutions.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-xl uppercase mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> The Mission
                    </h3>
                    <p className="font-mono text-xs leading-relaxed opacity-70">
                        To decentralize R&D. By utilizing Blockchain for meritocracy, we ensure that talent in Tier-2/3 cities is visible, verifiable, and valued based on "Proof of Innovation," not just proximity to metros.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};