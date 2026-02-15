import React from 'react';
import { Card } from '../DashboardUI';
import { Building2, Key, Shield } from 'lucide-react';

export const Settings: React.FC = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Node Configuration</h3>
        </div>

        <div className="grid gap-8">
            <Card title="Institution Profile" action={<Building2 size={20} className="opacity-50" />}>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase text-white/40">Institution Name</label>
                        <input type="text" value="CCSU Meerut" readOnly className="w-full bg-black border border-white/20 p-3 text-sm font-mono text-white/50 cursor-not-allowed" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase text-white/40">Node ID</label>
                        <input type="text" value="NODE-CCSU-001" readOnly className="w-full bg-black border border-white/20 p-3 text-sm font-mono text-white/50 cursor-not-allowed" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase text-white/40">District Jurisdiction</label>
                        <input type="text" value="Meerut, Uttar Pradesh" className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase text-white/40">Contact Email</label>
                        <input type="email" value="admin@ccsu.ac.in" className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none" />
                    </div>
                </div>
            </Card>

            <Card title="Blockchain Bridge" action={<Key size={20} className="opacity-50" />}>
                <div className="space-y-4">
                    <div className="p-4 border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-4">
                        <Shield className="text-yellow-500 shrink-0" size={20} />
                        <div>
                            <h4 className="font-bold text-sm uppercase text-yellow-500 mb-1">Private Key Managed</h4>
                            <p className="font-mono text-[10px] text-white/60">Your institutional signing key is managed via HSM. Do not share your master password.</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-[10px] uppercase text-white/40">API Endpoint</label>
                        <input type="text" value="https://api.side.network/v1/node/ccsu" className="w-full bg-black border border-white/20 p-3 text-sm font-mono focus:border-green-500 outline-none" />
                    </div>
                </div>
            </Card>
            
            <div className="flex justify-end gap-4">
                <button className="px-6 py-3 border border-white/20 text-white font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors">
                    Discard Changes
                </button>
                <button className="px-6 py-3 bg-green-500 text-black font-bold font-mono text-xs uppercase hover:bg-white transition-colors">
                    Save Configuration
                </button>
            </div>
        </div>
    </div>
);