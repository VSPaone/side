import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SideLogo } from './SideLogo';
import { Mail, Phone } from 'lucide-react';

export const Gateway: React.FC = () => {
  const [role, setRole] = useState('STUDENT');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white text-black flex flex-col justify-between px-6 pt-24 pb-8 relative selection:bg-black selection:text-white border-t border-black">
      <div className="w-full max-w-3xl mx-auto flex flex-col flex-grow justify-center">
        
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          The 16 years are not a transaction.
        </h2>
        <p className="font-mono text-sm md:text-base leading-relaxed opacity-70 mb-16 border-l-2 border-black pl-4">
          They are an apprenticeship for the nation. Secure your node in the distributed excellence network.
        </p>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-2 border-black p-8 md:p-12 font-mono bg-black text-white"
          >
            <div className="text-xl mb-4 uppercase font-bold">{'>'} Handshake Initiated.</div>
            <div className="opacity-70 text-sm md:text-base leading-loose">
              Identity logged for role: <span className="text-green-400">[{role}]</span>. <br/>
              Awaiting neural sync via <span className="underline decoration-white/30">{email}</span>. <br/>
              Standby for transmission...
            </div>
            <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs underline opacity-50 hover:opacity-100"
            >
                [ RESET CONNECTION ]
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col font-mono w-full gap-12">
            <div className="flex flex-col gap-4">
              <label className="text-xs tracking-widest uppercase opacity-50 font-bold">Select Role_</label>
              <div className="flex flex-wrap gap-4">
                {['STUDENT', 'EDUCATOR', 'GOVERNMENT', 'INVESTOR'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`px-4 py-3 border border-black uppercase tracking-widest text-xs md:text-sm transition-all duration-300 cursor-crosshair ${
                      role === r ? 'bg-black text-white transform -translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]' : 'bg-transparent text-black hover:bg-black/5'
                    }`}
                  >
                    [{r}]
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 relative group">
              <label className="text-xs tracking-widest uppercase opacity-50 font-bold">Enter Identifier_</label>
              <div className="flex items-center border-b-2 border-black pb-2 focus-within:border-black/50 transition-colors">
                <span className="mr-4 font-bold text-xl">{'>'}</span>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL_ADDRESS"
                  className="bg-transparent outline-none w-full uppercase placeholder-black/20 text-lg md:text-xl font-bold"
                />
                <span className="animate-pulse text-xl">█</span>
              </div>
            </div>

            <button 
              type="submit"
              className="mt-4 bg-black text-white px-8 py-5 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 self-start cursor-crosshair shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              [ Initiate Handshake ]
            </button>
          </form>
        )}
      </div>

      <footer className="w-full bg-black text-white py-8 mt-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
                <SideLogo className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-50 text-center md:text-left leading-relaxed">
                  NEP 2020 ALIGNED // INDIA_AI MISSION COMPLIANT <br/>
                  © 2026 S.I.D.E. INFRASTRUCTURE
                </div>
            </div>
            
            <div className="flex flex-col gap-2 font-mono text-xs tracking-widest text-right">
                <a href="tel:+919502444362" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                    +91 9502 444 362 <Phone size={14} />
                </a>
                <a href="mailto:hello@sideschool.co.in" className="flex items-center gap-3 hover:text-green-400 transition-colors">
                    hello@sideschool.co.in <Mail size={14} />
                </a>
            </div>
        </div>
      </footer>
    </section>
  );
};