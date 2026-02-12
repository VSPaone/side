import React from 'react';
import { motion } from 'framer-motion';

const cities = [
  "DELHI", "MEERUT", "JAIPUR", "LUCKNOW", "PATNA",
  "AHMEDABAD", "INDORE", "KOLKATA", "MUMBAI", "PUNE",
  "HYDERABAD", "VIZAG", "BANGALORE", "CHENNAI", "KOCHI", "GUWAHATI"
];

// Define abstract grid coordinates for the number "5" (5x5 grid relative)
const grid5 = [
  { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 },
                                  { x: 3, y: 3 },
  { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 },
];

// Define abstract grid coordinates for the number "0"
const grid0 = [
  { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
  { x: 0, y: 1 },                                 { x: 3, y: 1 },
  { x: 0, y: 2 },                                 { x: 3, y: 2 },
  { x: 0, y: 3 },                                 { x: 3, y: 3 },
  { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 },
];

const generateNodes = () => {
    const nodes = [];
    let cityIndex = 0;

    // Map digit 5 to the left side (0-45% width range)
    grid5.forEach(p => {
        nodes.push({
            id: `5-${cityIndex}`,
            x: 5 + (p.x * 9),  // Start at 5%, step 9%
            y: 10 + (p.y * 15), // Start at 10%, step 15%
            label: cities[cityIndex % cities.length],
        });
        cityIndex++;
    });

    // Reset index to shuffle names or keep continuous? Let's keep continuous
    // Map digit 0 to the right side (55-100% width range)
    grid0.forEach(p => {
        nodes.push({
            id: `0-${cityIndex}`,
            x: 55 + (p.x * 9), // Start at 55%, step 9%
            y: 10 + (p.y * 15),
            label: cities[cityIndex % cities.length],
        });
        cityIndex++;
    });
    
    return nodes;
}

const nodeList = generateNodes();

export const NationalGrid: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center overflow-hidden py-24 border-y border-white/10">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <div className="md:w-1/3">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 border border-green-500/50 text-green-500 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase mb-6 bg-green-500/10">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Phase 1 Rollout
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                    50 Nodes.<br/>
                    One Network.
                </h2>
                <p className="font-mono text-sm opacity-60 leading-relaxed mb-8">
                    We are deploying 50 "Living Labs" across India's major innovation corridors. From Tier-1 Metros to Tier-2 Industrial Hubs, the grid connects local talent to national opportunities.
                </p>
                <div className="flex gap-8 font-mono text-xs tracking-widest uppercase opacity-80">
                    <div>
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-white/40">Districts</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">100K+</div>
                        <div className="text-white/40">Students</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-white/40">Uptime</div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* The "50" Visualization constructed from City Names */}
        <div className="md:w-2/3 relative w-full aspect-[16/9] md:aspect-[2/1] border border-white/10 bg-white/5 rounded-sm overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 {/* Decorative Center Line */}
                 <div className="h-full w-px bg-white/5" />
            </div>

            {nodeList.map((node, i) => (
                <motion.div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                >
                    <div className={`
                        font-mono text-[10px] md:text-xs tracking-widest uppercase px-2 py-1 border 
                        transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:z-20 cursor-crosshair
                        ${node.label === 'MEERUT' 
                            ? 'border-green-500 text-green-500 bg-green-500/10 shadow-[0_0_10px_rgba(74,222,128,0.2)]' 
                            : 'border-white/20 text-white/40 bg-black'
                        }
                    `}>
                        {node.label}
                    </div>
                </motion.div>
            ))}
            
            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
            
            {/* Horizontal Scan */}
            <motion.div 
                className="absolute w-full h-1 bg-green-500/50 shadow-[0_0_20px_rgba(74,222,128,0.5)] z-30"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </div>

      </div>
    </section>
  );
};