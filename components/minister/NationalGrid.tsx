import React from 'react';
import { Card } from '../DashboardUI';
import { Search, Filter, AlertTriangle } from 'lucide-react';

const DISTRICT_NODES = [
    { id: "NODE-UP-01", name: "Meerut", state: "Uttar Pradesh", status: "ONLINE", performance: 98, alerts: 0 },
    { id: "NODE-DL-01", name: "New Delhi", state: "Delhi NCR", status: "ONLINE", performance: 94, alerts: 2 },
    { id: "NODE-MH-04", name: "Pune", state: "Maharashtra", status: "ONLINE", performance: 91, alerts: 0 },
    { id: "NODE-KA-02", name: "Bangalore", state: "Karnataka", status: "MAINTENANCE", performance: 88, alerts: 5 },
    { id: "NODE-TN-01", name: "Chennai", state: "Tamil Nadu", status: "ONLINE", performance: 85, alerts: 0 },
    { id: "NODE-WB-01", name: "Kolkata", state: "West Bengal", status: "OFFLINE", performance: 0, alerts: 1 },
];

export const NationalGrid: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
            <div>
                <h3 className="text-2xl font-black uppercase">National Grid Status</h3>
                <p className="font-mono text-xs text-white/50 mt-1">Live monitoring of all 54 connected districts.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
                 <div className="relative flex-grow md:flex-grow-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                    <input 
                        type="text" 
                        placeholder="SEARCH_DISTRICT" 
                        className="bg-white/5 border border-white/20 pl-10 pr-4 py-2 text-xs font-mono w-full md:w-64 focus:border-green-500 outline-none uppercase placeholder-white/20"
                    />
                </div>
                <button className="p-2 border border-white/20 hover:bg-white hover:text-black text-white/50 transition-colors">
                    <Filter size={16} />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DISTRICT_NODES.map((node) => (
                <Card key={node.id} className="group hover:border-white/40">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="font-bold uppercase text-lg">{node.name}</h4>
                            <div className="font-mono text-[10px] text-white/50">{node.state}</div>
                        </div>
                        <div className={`px-2 py-1 text-[9px] font-mono border rounded-sm ${
                            node.status === 'ONLINE' ? 'text-green-500 border-green-500 bg-green-500/10' :
                            node.status === 'MAINTENANCE' ? 'text-yellow-500 border-yellow-500 bg-yellow-500/10' :
                            'text-red-500 border-red-500 bg-red-500/10'
                        }`}>
                            {node.status}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                        <div>
                            <div className="font-mono text-[10px] uppercase text-white/40">Performance</div>
                            <div className="text-xl font-bold">{node.performance}%</div>
                        </div>
                        <div>
                            <div className="font-mono text-[10px] uppercase text-white/40">Active Alerts</div>
                            <div className={`text-xl font-bold flex items-center gap-2 ${node.alerts > 0 ? 'text-red-500' : 'text-white'}`}>
                                {node.alerts}
                                {node.alerts > 0 && <AlertTriangle size={14} />}
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    </div>
);