import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, FileCheck, Building2, BrainCircuit } from 'lucide-react';

export const Moat: React.FC = () => {
  const protocols = [
    {
      title: "The 'Stick' Policy",
      icon: <ShieldAlert className="mb-4" size={28} />,
      desc: "Instant 'License Revocation' for institutional tampering. A high-trust brand parents prefer over generic EdTech."
    },
    {
      title: "Hallucination Proof",
      icon: <BrainCircuit className="mb-4" size={28} />,
      desc: "Assignments grounded in real district data from Collectorates, not generated out of thin air."
    },
    {
      title: "The Talent Portfolio",
      icon: <FileCheck className="mb-4" size={28} />,
      desc: "We sell 'Visibility', not courses. A direct line to District Collectors and recruiters via Blockchain."
    },
    {
      title: "Govt Backing",
      icon: <Building2 className="mb-4" size={28} />,
      desc: "Aligned with IndiaAI Mission & NEP 2020. Deep integration with state machinery."
    }
  ];

  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 border-b border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Competitive <br/> Defense.
            </h2>
            <div className="font-mono text-xs tracking-widest uppercase border border-black px-4 py-2">
              Why We Win
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black">
          {protocols.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 hover:bg-black hover:text-white transition-colors duration-300 group cursor-default"
            >
              <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                {p.icon}
              </div>
              <h3 className="font-bold uppercase tracking-tight text-lg mb-4">{p.title}</h3>
              <p className="font-mono text-xs leading-relaxed opacity-70 group-hover:opacity-90">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};