import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Network, Cpu, Database } from 'lucide-react';
import { SideLogo } from './SideLogo';

export const Architecture: React.FC = () => {
  const steps = [
    {
      id: "01",
      icon: <Crosshair size={32} strokeWidth={1.5} />,
      title: "District Problem Ledger",
      desc: "Ingests live grievances from District Collectorates. No abstract theory. Real civic challenges mapped to curriculum."
    },
    {
      id: "02",
      icon: <Network size={32} strokeWidth={1.5} />,
      title: "The Meritocracy Chain",
      desc: "Immutable blockchain hashing of student solutions. Zero institutional tampering. Absolute Proof of Innovation."
    },
    {
      id: "03",
      icon: <Cpu size={32} strokeWidth={1.5} />,
      title: "The Replicability Engine",
      desc: "AI maps localized student solutions to districts nationwide with similar demographic challenges. The 'Solution Bank'."
    }
  ];

  return (
    <section className="min-h-screen bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <div className="font-mono text-xs tracking-widest uppercase mb-16 border-b border-black/20 pb-4 inline-block">
          System Architecture // The Sovereign Rails
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-black/20 mt-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="group border-r border-b border-black/20 p-8 md:p-12 hover:bg-black hover:text-white transition-colors duration-500 cursor-crosshair relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="font-mono text-4xl font-bold opacity-20 mb-12 group-hover:opacity-100 transition-opacity">
                {step.id}
              </div>
              <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="font-mono text-sm leading-relaxed opacity-70 group-hover:opacity-100">
                {step.desc}
              </p>
              
              {/* Background abstract element on hover */}
              <div className="absolute -right-12 -bottom-12 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <SideLogo className="w-64 h-64 text-white/10" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 border-t border-black/20 pt-8"
        >
            <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 mb-4">
                > DEEP_DPI_INTEGRATION_DETECTED:
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 font-bold text-sm md:text-xl uppercase tracking-tighter opacity-80">
                <span className="flex items-center gap-2"><Database size={16} /> BHASHINI (MULTILINGUAL)</span>
                <span className="text-black/20">//</span>
                <span className="flex items-center gap-2"><Database size={16} /> ACADEMIC BANK OF CREDITS</span>
                <span className="text-black/20">//</span>
                <span className="flex items-center gap-2"><Database size={16} /> INDIA_AI COMPUTE</span>
            </div>
        </motion.div>
      </div>
    </section>
  );
};