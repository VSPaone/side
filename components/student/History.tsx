import React from 'react';
import { Filter, Download, ExternalLink } from 'lucide-react';

const HISTORY_LOG = [
    { id: "TX-9982", action: "DEPLOYMENT", details: "Project P-102 deployed to Agra Node", date: "2023-10-25", hash: "0x7f...3a2" },
    { id: "TX-9981", action: "VALIDATION", details: "Mentor approved P-102 prototype", date: "2023-10-24", hash: "0x4b...9c1" },
    { id: "TX-9980", action: "SUBMISSION", details: "Uploaded P-103 codebase", date: "2023-10-20", hash: "0x1d...8e4" },
    { id: "TX-9979", action: "REGISTRATION", details: "Identity verified via Digilocker", date: "2023-09-15", hash: "0x9a...2f0" },
];

export const History: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Immutable Ledger</h3>
            <div className="flex gap-2">
                <button className="p-2 border border-white/20 hover:bg-white hover:text-black text-white/50 transition-colors">
                    <Filter size={16} />
                </button>
                <button className="p-2 border border-white/20 hover:bg-white hover:text-black text-white/50 transition-colors">
                    <Download size={16} />
                </button>
            </div>
        </div>

        <div className="border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 font-mono text-[10px] uppercase text-white/40 tracking-widest bg-black/40">
                <div className="col-span-2">Hash ID</div>
                <div className="col-span-2">Action</div>
                <div className="col-span-5">Details</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1 text-right">Link</div>
            </div>
            {HISTORY_LOG.map((log, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors font-mono text-xs">
                    <div className="col-span-2 opacity-50">{log.id}</div>
                    <div className="col-span-2">
                        <span className={`px-2 py-0.5 border text-[9px] rounded-sm uppercase tracking-wider ${
                            log.action === 'DEPLOYMENT' ? 'text-green-500 border-green-500' : 
                            log.action === 'VALIDATION' ? 'text-blue-500 border-blue-500' : 'text-white/50 border-white/20'
                        }`}>
                            {log.action}
                        </span>
                    </div>
                    <div className="col-span-5 opacity-80">{log.details}</div>
                    <div className="col-span-2 opacity-50">{log.date}</div>
                    <div className="col-span-1 text-right">
                        <button className="text-white/30 hover:text-green-500 transition-colors">
                            <ExternalLink size={14} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);