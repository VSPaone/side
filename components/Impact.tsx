import React from 'react';
import { motion } from 'framer-motion';
import { User, School, Landmark } from 'lucide-react';

export const Impact: React.FC = () => {
  const stakeholders = [
    {
      icon: <User size={32} />,
      role: "The Student",
      benefit: "Sovereign Portfolio",
      desc: "Moves from a static GPA to a dynamic 'Proof of Work' ledger. They don't just graduate; they launch with a verified history of solving civic problems."
    },
    {
      icon: <School size={32} />,
      role: "The Institution",
      benefit: "Accreditation Boost",
      desc: "Direct compliance with NEP 2020 'Community Engagement' mandates. Higher NIRF rankings through verifiable social impact metrics."
    },
    {
      icon: <Landmark size={32} />,
      role: "The Government",
      benefit: "Real-Time Intelligence",
      desc: "District Collectors get a dashboard of hyperlocal problems being identified and solved by the youth, creating a decentralized R&D wing for the state."
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16 text-center">
          The Value Transfer.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stakeholders.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/20 p-8 hover:bg-white/5 transition-colors group"
            >
              <div className="mb-6 opacity-50 group-hover:opacity-100 group-hover:text-green-400 transition-all">
                {s.icon}
              </div>
              <div className="font-mono text-xs tracking-widest uppercase opacity-50 mb-2">{s.role}</div>
              <h3 className="text-xl font-bold uppercase mb-4">{s.benefit}</h3>
              <p className="font-mono text-xs opacity-60 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disruption Stats */}
        <div className="mt-24 border-t border-white/10 pt-16">
            <div className="font-mono text-xs tracking-widest uppercase text-center opacity-50 mb-12">
                The 5-Year Horizon (2030 Disruption)
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">10M+</div>
                    <div className="font-mono text-[10px] uppercase opacity-50">Micro-Solutions Shipped</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">₹500Cr</div>
                    <div className="font-mono text-[10px] uppercase opacity-50">Civic R&D Savings</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">0%</div>
                    <div className="font-mono text-[10px] uppercase opacity-50">CV Fraud (Blockchain)</div>
                </div>
                <div>
                    <div className="text-4xl md:text-5xl font-black text-white mb-2">Tier-2</div>
                    <div className="font-mono text-[10px] uppercase opacity-50">Innovation Capital</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};