import React from 'react';
import { Card } from '../DashboardUI';
import { Landmark, Globe } from 'lucide-react';

export const Settings: React.FC = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Ministry Configuration</h3>
        </div>

        <Card title="Protocol Settings" action={<Landmark size={20} className="opacity-50" />}>
            <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/40">Office</label>
                    <input type="text" value="PMO India / Ministry of Education" readOnly className="w-full bg-black border border-white/20 p-3 text-sm font-mono text-white/50 cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-white/40">Clearance Level</label>
                    <input type="text" value="LEVEL 5 (NATIONAL)" readOnly className="w-full bg-black border border-white/20 p-3 text-sm font-mono text-white/50 cursor-not-allowed" />
                </div>
            </div>
        </Card>

        <Card title="Global Integrations" action={<Globe size={20} className="opacity-50" />}>
            <div className="space-y-4">
                <div className="p-4 bg-white/5 border border-white/10">
                    <h4 className="font-bold text-sm uppercase mb-1">UN SDG Database</h4>
                    <p className="font-mono text-[10px] text-white/60 mb-4">Sync national project impact with UN Sustainable Development Goals tracking.</p>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-500 text-black font-mono text-xs uppercase font-bold hover:bg-white transition-colors">Sync Now</button>
                    </div>
                </div>
            </div>
        </Card>
    </div>
);