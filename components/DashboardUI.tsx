import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// --- PRIMITIVES ---

export const Card: React.FC<{ children: React.ReactNode; className?: string; title?: React.ReactNode; action?: React.ReactNode }> = ({ children, className = "", title, action }) => (
  <div className={`bg-white/5 border border-white/10 flex flex-col relative overflow-hidden group ${className}`}>
    {(title || action) && (
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/[0.02]">
            {title && <h3 className="font-bold uppercase tracking-tight text-sm md:text-base flex items-center gap-2">{title}</h3>}
            {action}
        </div>
    )}
    <div className="p-6 flex-grow relative z-10">
        {children}
    </div>
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);

export const StatCard: React.FC<{ 
  label: string; 
  value: string | number; 
  subValue?: string; 
  icon?: LucideIcon; 
  trend?: 'up' | 'down' | 'neutral';
}> = ({ label, value, subValue, icon: Icon, trend }) => (
  <Card className="hover:border-white/30 transition-colors">
    <div className="flex justify-between items-start mb-4">
        <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">{label}</div>
        {Icon && <Icon size={16} className="text-white/30" />}
    </div>
    <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">{value}</div>
    {subValue && (
        <div className={`font-mono text-[10px] uppercase ${
            trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-white/40'
        }`}>
            {subValue}
        </div>
    )}
  </Card>
);

export const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  let colorClass = "text-white/40 border-white/20 bg-white/5";
  
  if (status.includes("APPROVED") || status.includes("DEPLOYED")) {
    colorClass = "text-black bg-green-500 border-green-500";
  } else if (status.includes("REVIEW") || status.includes("PENDING")) {
    colorClass = "text-yellow-400 border-yellow-400/50 bg-yellow-400/10";
  } else if (status.includes("REJECTED")) {
    colorClass = "text-red-500 border-red-500/50 bg-red-500/10";
  }

  return (
    <span className={`px-2 py-1 text-[9px] font-mono uppercase tracking-widest border ${colorClass} inline-flex items-center gap-2`}>
        {status.includes("DEPLOYED") && <span className="w-1.5 h-1.5 bg-black animate-pulse rounded-full" />}
        {status.replace(/_/g, ' ')}
    </span>
  );
};

// --- VISUALIZATIONS ---

export const SimpleBarChart: React.FC<{ 
    data: { label: string; value: number; max: number; color?: string }[] 
}> = ({ data }) => (
  <div className="space-y-3 w-full">
    {data.map((item, i) => (
        <div key={i} className="flex flex-col gap-1">
            <div className="flex justify-between text-[10px] font-mono uppercase text-white/60">
                <span>{item.label}</span>
                <span>{item.value}</span>
            </div>
            <div className="w-full h-2 bg-white/10 overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.value / item.max) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "circOut" }}
                    className={`h-full ${item.color || 'bg-white'}`}
                />
            </div>
        </div>
    ))}
  </div>
);

export const SkillRadar: React.FC<{ skills: Record<string, number> }> = ({ skills }) => {
    // A CSS-only simplified radar/spider chart representation for the brutalist aesthetic
    return (
        <div className="grid grid-cols-2 gap-4">
            {Object.entries(skills).map(([skill, level], i) => (
                <div key={skill} className="border border-white/10 p-3 relative group hover:bg-white/5 transition-colors">
                    <div className="font-mono text-[9px] uppercase text-white/40 mb-2">{skill}</div>
                    <div className="text-xl font-bold">{level}%</div>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-green-500 transition-all duration-500" style={{ width: `${level}%` }} />
                </div>
            ))}
        </div>
    )
}

// --- LAYOUT ---

export const SectionHeader: React.FC<{ title: string; subtitle?: string; action?: React.ReactNode }> = ({ title, subtitle, action }) => (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
        <div>
            {subtitle && <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-2">{subtitle}</div>}
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">{title}</h2>
        </div>
        {action}
    </div>
);