import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const useCounter = (end: number, duration = 2) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    
    // Copy ref to variable for cleanup closure
    const currentRef = nodeRef.current;
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [end, duration]);

  return { count, nodeRef };
};

const PaperShredder = React.memo(() => {
    // Generate static random values once to prevent re-renders from counter updates
    const papers = useMemo(() => [...Array(10)].map((_, i) => ({
      id: i,
      left: Math.random() * 70 + 15, // Keep within 15-85% width
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 2.5,
      rotation: Math.random() * 20 - 10
    })), []);
  
    return (
      <div className="mt-8 relative h-[320px] w-full border-2 border-white/20 overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center group">
         
         {/* Grid Background */}
         <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }} 
         />
  
         {/* Scrolling Background Text */}
         <div className="absolute inset-0 opacity-5 flex flex-col select-none overflow-hidden leading-none pointer-events-none">
            {[...Array(30)].map((_,i) => (
                <div key={i} className="whitespace-nowrap text-[10px] font-mono">
                    THEORY_ONLY THEORY_ONLY THEORY_ONLY NO_PRACTICALS ROTE_LEARNING 
                </div>
            ))}
         </div>
  
         {/* The Incinerator Line */}
         <div className="absolute bottom-12 left-0 w-full h-px bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] z-20">
            <div className="absolute right-2 -top-5 text-[9px] text-red-500 font-mono tracking-widest bg-black px-1 border border-red-500/50">
                FILTER: MARKET_READY
            </div>
         </div>
         
         {/* Gradient fade at bottom */}
         <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black to-transparent z-20" />
  
         {/* Falling Papers */}
         {papers.map((paper) => (
            <motion.div
              key={paper.id}
              className="absolute z-10 w-20 h-28 bg-[#f0f0f0] flex flex-col gap-2 p-3 shadow-xl"
              style={{ left: `${paper.left}%` }}
              initial={{ y: -150, rotate: paper.rotation }}
              animate={{ 
                y: 350,
                opacity: [0, 1, 1, 0], // Fade out at bottom
                scale: [0.8, 1, 1, 0.5], // Shrink at incinerator
                filter: ["grayscale(0%)", "grayscale(0%)", "grayscale(100%)", "grayscale(100%)"]
              }}
              transition={{ 
                duration: paper.duration, 
                repeat: Infinity, 
                ease: "linear",
                delay: paper.delay,
                times: [0, 0.1, 0.8, 1]
              }}
            >
                {/* Paper Content (Diploma Look) */}
                <div className="w-full flex justify-center mb-1 opacity-20">
                    <div className="w-4 h-4 rounded-full border border-black" />
                </div>
                <div className="w-full h-0.5 bg-black/20" />
                <div className="w-3/4 h-0.5 bg-black/20" />
                <div className="w-full h-0.5 bg-black/20 mt-2" />
                <div className="w-5/6 h-0.5 bg-black/20" />
                <div className="w-1/2 h-0.5 bg-black/20" />
                
                {/* REJECT STAMP */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: [0, 0, 1, 1], scale: [2, 2, 1, 1] }}
                    transition={{ duration: paper.duration, times: [0, 0.75, 0.78, 1], repeat: Infinity }}
                >
                    <div className="border-2 border-red-600 text-red-600 text-[10px] font-black px-1 -rotate-12 bg-white/50 backdrop-blur-[1px]">
                        VOID
                    </div>
                </motion.div>
            </motion.div>
         ))}
  
         {/* Overlay CRT Scanlines */}
         <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[length:100%_3px] pointer-events-none z-30 opacity-20" />
         
         {/* Status Text overlay */}
         <div className="absolute top-4 left-4 z-30">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="font-mono text-[10px] text-white/80 tracking-widest">LIVE_INCINERATOR_FEED</span>
            </div>
            <div className="font-mono text-[9px] text-white/40 leading-relaxed">
                PROCESSING: B.TECH / MBA / B.A<br/>
                STATUS: <span className="text-red-500">REJECTED</span><br/>
                REASON: NO_PROOF_OF_WORK
            </div>
         </div>
  
      </div>
    )
  });

export const TheVoid: React.FC = () => {
  const { count, nodeRef } = useCounter(14250000, 3);

  return (
    <section className="min-h-screen bg-black text-white flex items-center px-6 md:px-12 py-24 border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Ticking Data */}
        <div ref={nodeRef} className="font-mono flex flex-col gap-4 order-2 lg:order-1">
          <div className="text-xs tracking-widest uppercase border-b border-white/20 pb-4 text-white/50">
            System Alert // The Paper Crisis
          </div>
          <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter tabular-nums">
            {count.toLocaleString()}
          </div>
          <div className="text-sm md:text-base text-red-500 tracking-widest uppercase">
            {'>'} Unemployable_Graduates_Logged
          </div>
          
          <PaperShredder />
        </div>

        {/* Right: Statement */}
        <motion.div 
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1]">
            16 Years. <br/>
            0 Proof of Work.
          </h2>
          <p className="mt-8 text-lg md:text-xl font-mono text-white/60 max-w-lg leading-relaxed border-l-2 border-white/20 pl-6">
            The traditional educational loop is a closed system. A grade of 45/50 only dictates what you lack. It is a limit.
            <br/><br/>
            The vacuum of modern education ends here.
          </p>
        </motion.div>
      </div>
    </section>
  );
};