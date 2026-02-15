import React from 'react';
import { Card, StatusBadge } from '../DashboardUI';
import { Filter, Download, ExternalLink } from 'lucide-react';

const LEDGER_DATA = [
    { id: "SOL-001", title: "Smart Waste Bin", category: "Sanitation", ward: "Civil Lines", status: "PILOT_READY", budget: "₹15,000" },
    { id: "SOL-002", title: "Pothole Detector", category: "Infra", ward: "Cantonment", status: "IN_REVIEW", budget: "₹5,000" },
    { id: "SOL-003", title: "Dengue Heatmap", category: "Health", ward: "Shastri Nagar", status: "DEPLOYED", budget: "₹2,000" },
    { id: "SOL-004", title: "School Wifi Mesh", category: "Education", ward: "Rural Block A", status: "DEPLOYED", budget: "₹45,000" },
    { id: "SOL-005", title: "Traffic AI Cam", category: "Traffic", ward: "Begum Bridge", status: "REJECTED", budget: "N/A" },
];

export const DistrictLedger: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">District Solution Ledger</h3>
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
                <div className="col-span-2">ID</div>
                <div className="col-span-3">Solution</div>
                <div className="col-span-2">Category</div>
                <div className="col-span-2">Ward/Zone</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1 text-right">Budget</div>
            </div>
            {LEDGER_DATA.map((item, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors font-mono text-xs group">
                    <div className="col-span-2 opacity-50">{item.id}</div>
                    <div className="col-span-3 font-bold">{item.title}</div>
                    <div className="col-span-2 opacity-70">{item.category}</div>
                    <div className="col-span-2 opacity-70">{item.ward}</div>
                    <div className="col-span-2"><StatusBadge status={item.status} /></div>
                    <div className="col-span-1 text-right opacity-70 group-hover:text-green-500">{item.budget}</div>
                </div>
            ))}
        </div>
    </div>
);