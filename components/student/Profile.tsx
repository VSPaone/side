import React from 'react';
import { UserCircle, Edit } from 'lucide-react';
import { Card, SkillRadar } from '../DashboardUI';

const SKILLS_DATA = {
    "Civic_Tech": 85,
    "Data_Analysis": 60,
    "Field_Work": 90,
    "Policy_Drafting": 45
};

export const Profile: React.FC = () => (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto">
        <div className="relative mb-24">
            <div className="h-48 w-full bg-gradient-to-r from-white/10 to-transparent border-b border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" 
                     style={{ backgroundImage: 'linear-gradient(45deg, #333 1px, transparent 1px)', backgroundSize: '10px 10px' }} 
                />
            </div>
            <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                <div className="w-32 h-32 bg-black border-2 border-white flex items-center justify-center">
                    <UserCircle size={64} className="opacity-50" />
                </div>
                <div className="mb-4">
                    <h2 className="text-3xl font-black uppercase">Aditya Sharma</h2>
                    <div className="font-mono text-xs text-green-500 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        ID: ST-2024-8842 // LEVEL 4 CONTRIBUTOR
                    </div>
                </div>
            </div>
            <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-green-500 transition-colors flex items-center gap-2">
                <Edit size={12} /> Edit Nodes
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
                <Card title="Identity Config">
                    <div className="space-y-4 font-mono text-xs">
                        <div>
                            <label className="block text-white/40 mb-1 uppercase text-[10px]">Institute</label>
                            <div className="p-2 border border-white/20 bg-black">CCSU Meerut</div>
                        </div>
                        <div>
                            <label className="block text-white/40 mb-1 uppercase text-[10px]">Major</label>
                            <div className="p-2 border border-white/20 bg-black">Computer Science</div>
                        </div>
                        <div>
                            <label className="block text-white/40 mb-1 uppercase text-[10px]">Graduation</label>
                            <div className="p-2 border border-white/20 bg-black">2025</div>
                        </div>
                        <div>
                            <label className="block text-white/40 mb-1 uppercase text-[10px]">Contact</label>
                            <div className="p-2 border border-white/20 bg-black">aditya.s@ccsu.ac.in</div>
                        </div>
                    </div>
                </Card>
                <Card title="Badges">
                    <div className="flex flex-wrap gap-2">
                        {['EARLY_ADOPTER', 'PILOT_LAUNCHER', 'CODE_WIZARD'].map(tag => (
                            <span key={tag} className="px-2 py-1 bg-white/10 border border-white/20 text-[9px] font-mono uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="md:col-span-2 space-y-6">
                <Card title="Bio / Manifesto">
                    <p className="font-mono text-sm opacity-70 leading-relaxed">
                        Full-stack developer focused on Civic Tech and DPI integration. Building solutions for Tier-2 smart city infrastructure. Currently researching AI models for traffic optimization in high-density zones.
                    </p>
                </Card>
                <Card title="Capability Settings">
                    <SkillRadar skills={SKILLS_DATA} />
                </Card>
                <div className="p-4 border border-red-500/20 bg-red-500/5 flex justify-between items-center">
                    <div className="font-mono text-xs text-red-500 uppercase">Danger Zone</div>
                    <button className="text-[10px] font-mono uppercase text-red-500 hover:bg-red-500 hover:text-black px-3 py-1 border border-red-500 transition-colors">
                        Revoke Identity
                    </button>
                </div>
            </div>
        </div>
    </div>
);