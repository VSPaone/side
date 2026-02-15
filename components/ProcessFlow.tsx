import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Terminal, Cpu, ShieldCheck, Building, Database, GitFork, Crown } from 'lucide-react';

const steps = [
  {
    id: "01",
    label: "INIT_SEQUENCE",
    title: "Identity Registration",
    desc: "Student enters the grid. Profile created via academic history and skill assessment. System establishes baseline capability.",
    icon: <UserPlus className="w-5 h-5" />,
  },
  {
    id: "02",
    label: "DATA_INGESTION",
    title: "Learning Entry",
    desc: "Student logs daily acquisition of theory. System parses input for keywords and maps against real-world problem sets.",
    icon: <Terminal className="w-5 h-5" />,
  },
  {
    id: "03",
    label: "TASK_GENERATION",
    title: "Assignment Protocol",
    desc: "AI assigns a practical task based on learning log OR student self-initiates a project. Theory is immediately tested against reality.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    id: "04",
    label: "PROOF_OF_WORK",
    title: "Execution & AI Audit",
    desc: "Student submits solution. Level 1 AI Layer scans for plagiarism, feasibility, and impact potential before human validation.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: "05",
    label: "CIVIC_INTERFACE",
    title: "District Review",
    desc: "Validated solutions are forwarded to the District Collectorate Dashboard. Officials either request iterations or approve deployment.",
    icon: <Building className="w-5 h-5" />,
  },
  {
    id: "06",
    label: "BLOCK_CONFIRMATION",
    title: "Credit Assignment",
    desc: "Upon Collectorate approval, 'Side Credits' are hashed to the blockchain and synced with the Academic Bank of Credits (ABC).",
    icon: <Database className="w-5 h-5" />,
  },
  {
    id: "07",
    label: "SCALABILITY_LOOP",
    title: "The Replicability Engine",
    desc: "High-impact solutions are packetized as blueprints and distributed to districts with similar demographic challenges.",
    icon: <GitFork className="w-5 h-5" />,
  },
  {
    id: "08",
    label: "NATIONAL_ZENITH",
    title: "State Recognition",
    desc: "Elite solutions crawl the hierarchy to the PMO. Annual 'Sovereign Awards' recognize the top 0.1% of national contributors.",
    icon: <Crown className="w-5 h-5" />,
  }
];

export const ProcessFlow: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <div className="font-mono text-xs tracking-widest uppercase mb-4 opacity-50 text-green-500">
             // Operational Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
             The Feedback <br/> Loop.
          </h2>
        </div>

        <div className="relative">
          {/* Central Spine (Desktop) / Left Spine (Mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2">
             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-black border-2 border-white rounded-full transform -translate-x-1/2 mt-1.5 z-10 group">
                    <div className="absolute inset-0 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                </div>

                {/* Content Block */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'
                }`}>
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/40 mb-2">
                       <span className="text-green-500">[{step.id}]</span> {step.label}
                    </div>
                    
                    <h3 className="text-2xl font-bold uppercase mb-4 flex items-center gap-3">
                        {/* Icon visibility logic for desktop alignment */}
                        <span className={`p-2 border border-white/20 rounded-sm bg-white/5 ${index % 2 !== 0 ? 'md:hidden' : ''}`}>
                            {step.icon}
                        </span>
                        {step.title}
                        <span className={`p-2 border border-white/20 rounded-sm bg-white/5 hidden ${index % 2 !== 0 ? 'md:block' : ''}`}>
                            {step.icon}
                        </span>
                    </h3>
                    
                    <p className="font-mono text-xs md:text-sm text-white/60 leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="md:w-1/2" />

              </motion.div>
            ))}
          </div>
          
          {/* End cap */}
          <div className="relative mt-24 flex justify-center">
            <div className="bg-black border border-white/20 px-6 py-2 rounded-full font-mono text-xs tracking-widest uppercase z-10">
                End of Transmission
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};