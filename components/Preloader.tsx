import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SideLogo } from './SideLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);
  
  const sequence = [
    "> INIT_DPI_LAYER...",
    "> LINKING_COLLECTORATE_NODES...",
    "> VERIFYING_BLOCKCHAIN_HASH...",
    "> SYSTEM_READY."
  ];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase < sequence.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + (prev ? "\n" : "") + sequence[phase]);
        setPhase(phase + 1);
      }, 600);
    } else {
      timeout = setTimeout(() => {
        onComplete();
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [phase, sequence, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="mb-12"
      >
        <SideLogo className="w-24 h-24" />
      </motion.div>
      <div className="absolute bottom-12 left-12 font-mono text-sm tracking-widest text-left whitespace-pre-line leading-loose text-white/70">
        {text}
        <motion.span 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          █
        </motion.span>
      </div>
    </motion.div>
  );
};