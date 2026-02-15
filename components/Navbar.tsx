import React from 'react';
import { SideLogo } from './SideLogo';
import { User } from 'lucide-react';

interface NavbarProps {
  onLoginClick?: () => void;
  userRole?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, userRole }) => {
  return (
    <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white pointer-events-none">
      <div className="flex items-center gap-4">
        <SideLogo className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      
      <div className="flex items-center gap-4 pointer-events-auto">
        <div className="font-mono text-[10px] md:text-sm border border-white/50 px-4 py-2 rounded-full tracking-widest hover:bg-white hover:text-black transition-colors cursor-crosshair uppercase backdrop-blur-sm">
            [ Status: Early Access ]
        </div>
        
        {!userRole && onLoginClick && (
            <button 
                onClick={onLoginClick}
                className="hidden md:flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest hover:text-green-400 transition-colors"
            >
                <User size={14} /> Login
            </button>
        )}
      </div>
    </nav>
  );
};