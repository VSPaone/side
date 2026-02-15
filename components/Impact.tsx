import React from 'react';
import { motion } from 'framer-motion';
import { User, School, Landmark, Building2, Users } from 'lucide-react';

export const Impact: React.FC = () => {
  const stakeholders = [
    {
      icon: <User size={32} />,
      role: "The Student",
      benefit: "Sovereign Portfolio",
      desc: "Moves from static grades to a dynamic 'Proof of Work' ledger. Graduates with a verified history of solving real-world civic problems, making them instantly employable."
    },
    {
      icon: <School size={32} />,
      role: "The College",
      benefit: "Accreditation Boost",
      desc: "Achieves NEP 2020 'Community Engagement' mandates instantly. Boosts NIRF rankings by deploying student talent into local governance structures."
    },
    {
      icon: <Building2 size={32} />,
      role: "The Bureaucrat",
      benefit: "Decentralized R&D",
      desc: "District Magistrates gain a zero-cost innovation wing. Students solve hyperlocal grievances (traffic, sanitation) that official machinery lacks manpower for."
    },
    {
      icon: <Landmark size={32} />,
      role: "The Ministry",
      benefit: "Sovereign AI Asset",
      desc: "Real-time national dashboard of youth capability. Transforms the demographic dividend from a statistic into a calculated, deployable asset."
    },
    {
      icon: <Users size={32} />,
      role: "The Public",
      benefit: "Radical Service Delivery",
      desc: "Citizens see problems solved faster. The gap between tax paid and service delivered is bridged by the very students living in their neighborhood."
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-16 text-center">
          The Value Transfer.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {stakeholders.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-black p-8 hover:bg-white/5 transition-colors group border border-white/5 ${i === 3 ? 'lg:col-start-1 lg:col-end-2' : ''} ${i === 4 ? 'lg:col-start-2 lg:col-end-4' : ''}`}
            >
              <div className="mb-6 opacity-50 group-hover:opacity-100 group-hover:text-green-400 transition-all">
                {s.icon}
              </div>
              <div className="font-mono text-xs tracking-widest uppercase opacity-50 mb-2">{s.role}</div>
              <h3 className="text-xl font-bold uppercase mb-4">{s.benefit}</h3>
              <p className="font-mono text-xs opacity-60 leading-relaxed group-hover:opacity-90 transition-opacity">
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