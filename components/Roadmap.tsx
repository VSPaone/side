import React from 'react';
import { motion } from 'framer-motion';

export const Roadmap: React.FC = () => {
  const phases = [
    {
      id: "PHASE_01",
      period: "Q1 - Q2 2026",
      title: "The Pilot",
      details: [
        "Launch 'Living Lab' in Meerut (CCSU)",
        "Onboard 50 Schools/Colleges",
        "Finalize Blockchain Nodes"
      ]
    },
    {
      id: "PHASE_02",
      period: "Q3 - Q4 2026",
      title: "State Expansion",
      details: [
        "Integrate with 5 State Education Boards",
        "Legal recognition of 'Side Credits' in ABC",
        "Deploy Cross-District Replicability Engine"
      ]
    },
    {
      id: "PHASE_03",
      period: "2027 +",
      title: "National Scale",
      details: [
        "Pan-India Rollout via Govt Partnership",
        "Export as 'Sovereign AI Blueprint' to Global South",
        "Total Integration with GPAI Council"
      ]
    }
  ];

  return (
    <section className="min-h-[80vh] bg-black text-white px-6 md:px-12 py-24 border-b border-white/10 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="font-mono text-xs tracking-widest uppercase mb-16 text-white/50">
          System Roadmap // Rollout Sequence
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-white/20 z-0" />
          
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 bg-black"
            >
              {/* Node Point */}
              <div className="w-4 h-4 bg-black border-2 border-white rounded-full mb-8 relative">
                 <div className="absolute inset-0 bg-white animate-ping opacity-20 rounded-full" />
              </div>
              
              <div className="font-mono text-green-500 text-xs tracking-widest mb-2">
                {phase.period}
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
                {phase.title}
              </h3>
              <ul className="space-y-3">
                {phase.details.map((detail, idx) => (
                  <li key={idx} className="font-mono text-xs text-white/60 flex items-start gap-3">
                    <span className="mt-1 w-1 h-1 bg-white/40 block" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};