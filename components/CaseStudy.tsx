import React from 'react';
import { motion } from 'framer-motion';

export const CaseStudy: React.FC = () => {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 border-b border-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2">
            <div className="font-mono text-xs tracking-widest uppercase mb-4 opacity-50">
                Blueprint // Case Study
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-8">
                The Meerut <br/>Anomaly.
            </h2>
            
            {/* Technical Scan Visualization */}
            <div className="w-full h-64 bg-black relative mb-8 overflow-hidden group border-2 border-black">
                 {/* Grid Background */}
                 <div 
                    className="absolute inset-0 opacity-30" 
                    style={{ 
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                        backgroundSize: '20px 20px' 
                    }} 
                 />
                 
                 {/* Radar Sweep */}
                 <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent h-1/2 w-full border-b border-green-500"
                    animate={{ top: ['-50%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 />

                 {/* Topographic Lines (Simulated) */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-32 border border-white/20 rounded-[50%] rotate-12 transform scale-125 opacity-50" />
                    <div className="absolute w-32 h-24 border border-white/20 rounded-[40%] -rotate-6 opacity-50" />
                    <div className="absolute w-16 h-16 border border-white/40 rounded-full animate-pulse" />
                 </div>

                 {/* Data Overlay */}
                 <div className="absolute bottom-4 left-4 text-green-400 font-mono text-[10px] z-10 leading-tight">
                    TARGET: CCSU_CAMPUS<br/>
                    COORDS: 28.98° N, 77.70° E<br/>
                    STATUS: LIVE_MONITORING
                 </div>
                 
                 {/* Corner Markers */}
                 <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white" />
                 <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white" />
                 <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white" />
                 <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white" />
            </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg leading-relaxed mb-6 font-medium">
                Why do we start with a Tier-2 city?
            </p>
            <p className="font-mono text-sm opacity-70 leading-relaxed mb-8">
                Chaudhary Charan Singh University (CCSU) in Meerut represents the latent potential of India. It sits at the intersection of agricultural heritage and rapid industrialization (NCR proximity).
                <br/><br/>
                While generic EdTech fights for the top 1% in Bangalore, the real engine of the $5T economy lies in places like Meerut. Our research shows that students here don't lack aptitude; they lack the "Signal Architecture" to prove it.
            </p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-black/20 pt-8">
                <div>
                    <div className="text-3xl font-black">400+</div>
                    <div className="font-mono text-xs uppercase opacity-50 mt-1">Affiliated Colleges</div>
                </div>
                <div>
                    <div className="text-3xl font-black">NCR</div>
                    <div className="font-mono text-xs uppercase opacity-50 mt-1">Strategic Belt</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};