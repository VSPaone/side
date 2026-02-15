import React from 'react';
import { AlertCircle, Activity, TrendingUp, Users } from 'lucide-react';
import { Card, StatCard, StatusBadge } from '../DashboardUI';

const DISTRICT_STATS = {
    pendingReviews: 12,
    activePilots: 5,
    projectedSavings: "₹4.2L",
    citizenEngagement: "15%"
};

const INCOMING_PROPOSALS = [
    { id: 201, title: "Smart Waste Bin", author: "Team Delta", institute: "CCSU", impact: "High", status: "PILOT_READY" },
    { id: 202, title: "Pothole Detector", author: "AutoLab", institute: "IIT Delhi", impact: "Medium", status: "REVIEW" },
    { id: 203, title: "Dengue Heatmap", author: "BioData Group", institute: "Meerut Med", impact: "Critical", status: "REVIEW" },
];

export const Overview: React.FC = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
             <div className="flex justify-between items-center">
                <div className="font-mono text-xs text-green-500 border border-green-500 px-3 py-1 bg-green-500/10">
                    LIVE_LINK: MEERUT_COLLECTORATE_V2
                </div>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Pending Review" value={DISTRICT_STATS.pendingReviews} subValue="Requires Action" icon={AlertCircle} trend="down" />
                <StatCard label="Active Pilots" value={DISTRICT_STATS.activePilots} subValue="In Deployment" icon={Activity} trend="up" />
                <StatCard label="Est. Savings" value={DISTRICT_STATS.projectedSavings} subValue="Monthly" icon={TrendingUp} trend="up" />
                <StatCard label="Citizen Eng." value={DISTRICT_STATS.citizenEngagement} icon={Users} trend="neutral" />
            </div>

            <div>
                <h3 className="font-bold uppercase mb-6 flex items-center gap-2">
                    <AlertCircle size={20} className="text-white/50" />
                    Incoming Proposals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {INCOMING_PROPOSALS.map((item) => (
                        <Card key={item.id} className="relative overflow-hidden group hover:border-white/30 cursor-pointer">
                            <div className="absolute top-0 right-0 p-2 bg-white/10 font-mono text-[10px]">
                                IMP: {item.impact}
                            </div>
                            <div className="mb-4">
                                <h4 className="text-xl font-bold uppercase mb-1">{item.title}</h4>
                                <div className="font-mono text-[10px] text-white/50">By {item.author} // {item.institute}</div>
                            </div>
                            <div className="flex justify-between items-end mt-8">
                                <StatusBadge status={item.status} />
                                <button className="text-xs font-mono uppercase underline decoration-white/30 hover:text-green-500">
                                    View Specs
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};