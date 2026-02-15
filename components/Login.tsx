import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SideLogo } from './SideLogo';
import { ArrowLeft, Terminal } from 'lucide-react';

interface LoginProps {
  onLogin: (role: string) => void;
  onBack: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate network delay
    setTimeout(() => {
      const u = username.toLowerCase();
      const p = password.toLowerCase();

      if (u === 'student' && p === 'student') onLogin('STUDENT');
      else if (u === 'college' && p === 'college') onLogin('COLLEGE');
      else if (u === 'bureaucrat' && p === 'bureaucrat') onLogin('BUREAUCRAT');
      else if (u === 'minister' && p === 'minister') onLogin('MINISTER');
      else {
        setError('INVALID_CREDENTIALS // ACCESS_DENIED');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <button 
        onClick={onBack}
        className="absolute top-8 left-8 flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors z-20"
      >
        <ArrowLeft size={14} /> Return to Grid
      </button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-black border border-white/20 p-8 md:p-12 relative z-10"
      >
        <div className="flex justify-center mb-8">
            <SideLogo className="w-12 h-12" />
        </div>
        
        <div className="text-center mb-10">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Node Access</h2>
            <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                Identify Role to Proceed
            </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/70">Identifier</label>
                <div className="relative group">
                    <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-green-500 transition-colors" size={16} />
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 p-4 pl-12 font-mono text-sm text-white focus:outline-none focus:border-green-500 focus:bg-white/10 transition-all uppercase placeholder-white/20"
                        placeholder="usr: [role]"
                        autoFocus
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/70">Key</label>
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 border border-white/30 rounded-full flex items-center justify-center group-focus-within:border-green-500">
                        <div className="w-1 h-1 bg-white/50 rounded-full group-focus-within:bg-green-500" />
                    </div>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 p-4 pl-12 font-mono text-sm text-white focus:outline-none focus:border-green-500 focus:bg-white/10 transition-all uppercase placeholder-white/20"
                        placeholder="pwd: [role]"
                    />
                </div>
            </div>

            {error && (
                <div className="font-mono text-[10px] text-red-500 bg-red-500/10 p-2 border border-red-500/20 text-center uppercase tracking-widest">
                    {error}
                </div>
            )}

            <button 
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {loading ? <span className="animate-pulse">Authenticating...</span> : '[ Initiate Session ]'}
            </button>
        </form>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <div className="font-mono text-[10px] text-white/30 leading-relaxed">
                DEFAULT CREDENTIALS FOR DEMO:<br/>
                student / student<br/>
                college / college<br/>
                bureaucrat / bureaucrat<br/>
                minister / minister
            </div>
        </div>
      </motion.div>
    </div>
  );
};