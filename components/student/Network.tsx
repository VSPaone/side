import React from 'react';
import { Search, UserPlus, MessageSquare, Target } from 'lucide-react';
import { Card } from '../DashboardUI';

const NETWORK_PEERS = [
    { id: 1, name: "Arjun Mehta", role: "Student // IoT Specialist", status: "ONLINE", institute: "IIT Delhi" },
    { id: 2, name: "Dr. Sarah Khan", role: "Mentor // Urban Planner", status: "OFFLINE", institute: "Meerut Municipal Corp" },
    { id: 3, name: "Team Beta", role: "Collab Group", status: "BUSY", institute: "CCSU" },
    { id: 4, name: "Rahul V.", role: "Student // ML Eng", status: "ONLINE", institute: "NIT Trichy" },
];

export const Network: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Active Nodes</h3>
            <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
                    <input 
                        type="text" 
                        placeholder="SEARCH_PEERS" 
                        className="bg-white/5 border border-white/20 pl-10 pr-4 py-2 text-xs font-mono w-full md:w-64 focus:border-green-500 outline-none uppercase placeholder-white/20"
                    />
                </div>
                <button className="px-4 py-2 bg-white text-black font-mono text-xs uppercase font-bold hover:bg-green-500 transition-colors">
                    + Connect
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {NETWORK_PEERS.map((peer) => (
                <Card key={peer.id} className="hover:border-white/40 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-sm">
                                {peer.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold uppercase text-sm">{peer.name}</h4>
                                <div className="font-mono text-[10px] text-white/50">{peer.role}</div>
                            </div>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${peer.status === 'ONLINE' ? 'bg-green-500 animate-pulse' : peer.status === 'BUSY' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 mb-6">
                        <Target size={12} />
                        {peer.institute}
                    </div>
                    <div className="flex gap-2 mt-auto">
                        <button className="flex-1 py-2 border border-white/20 hover:bg-white hover:text-black font-mono text-[10px] uppercase transition-colors flex items-center justify-center gap-2">
                            <UserPlus size={12} /> Connect
                        </button>
                        <button className="flex-1 py-2 border border-white/20 hover:bg-white hover:text-black font-mono text-[10px] uppercase transition-colors flex items-center justify-center gap-2">
                            <MessageSquare size={12} /> Signal
                        </button>
                    </div>
                </Card>
            ))}
        </div>
    </div>
);