import React from 'react';
import { Card } from '../DashboardUI';
import { Building, Shield } from 'lucide-react';

export const Settings: React.FC = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Magistrate Configuration</h3>
        </div>

        <Card title="Jurisdiction Profile" action={<Building size={20} className="opacity-50" />}>
            <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/40">District Name</label>
                    <input type="text" value="Meerut" readOnly className="w-full bg-black border border-white/20 p-3 text-sm font-mono text-white/50 cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/40">State</label>
                    <input type="text" value="Uttar Pradesh" readOnly className="w-full bg-black border border-white/20 p-3 text-sm font-mono text-white/50 cursor-not-allowed" />
                </div>
            </div>
        </Card>

        <Card title="Data Integration" action={<Shield size={20} className="opacity-50" />}>
            <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10">
                    <h4 className="font-bold text-sm uppercase mb-1">Smart City API Hook</h4>
                    <p className="font-mono text-[10px] text-white/60 mb-4">Connect ICCC data streams to the student grid for real-time problem ingestion.</p>
                    <div className="flex gap-2">
                        <input type="password" value="************************" className="flex-grow bg-black border border-white/20 p-2 font-mono text-xs" readOnly />
                        <button className="px-4 border border-white/20 hover:bg-white hover:text-black font-mono text-xs uppercase transition-colors">Regenerate</button>
                    </div>
                </div>
            </div>
        </Card>
    </div>
);