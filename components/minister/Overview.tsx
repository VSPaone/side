import React from 'react';
import { Map, Users, TrendingUp, Activity } from 'lucide-react';
import { Card, StatCard, SimpleBarChart } from '../DashboardUI';

const NATIONAL_STATS = {
    activeDistricts: 54,
    studentForce: "124,050",
    solutionsDeployed: 843,
    efficiencyGain: "+240%"
};

const SECTOR_PERFORMANCE = [
    { label: "Sanitation", value: 85, max: 100, color: 'bg-green-500' },
    { label: "Agriculture", value: 65, max: 100, color: 'bg-yellow-500' },
    { label: "Health", value: 70, max: 100, color: 'bg-blue-500' },
    { label: "Education", value: 90, max: 100, color: 'bg-purple-500' },
];

export const Overview: React.FC = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Active Nodes" value={NATIONAL_STATS.activeDistricts} subValue="Districts Online" icon={Map} trend="up" />
                <StatCard label="Student Force" value={NATIONAL_STATS.studentForce} subValue=" registered" icon={Users} trend="up" />
                <StatCard label="Live Solutions" value={NATIONAL_STATS.solutionsDeployed} subValue="In Pilot Phase" icon={Activity} trend="up" />
                <StatCard label="Grid Efficiency" value={NATIONAL_STATS.efficiencyGain} subValue="YoY Growth" icon={TrendingUp} trend="up" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Map Area */}
                <div className="lg:col-span-2">
                     <Card className="h-full min-h-[400px] flex items-center justify-center relative bg-white/5 border-white/10">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/40 via-black to-black" />
                        <Map size={64} className="opacity-20 mb-4" />
                        <div className="z-10 text-center">
                            <h3 className="text-2xl font-black uppercase mb-2">Pan-India Live Feed</h3>
                            <div className="font-mono text-xs text-white/50">Geospatial Visualization Module Loading...</div>
                            <div className="mt-8 flex gap-4 justify-center">
                                <div className="text-left">
                                    <div className="text-green-500 font-bold text-xl">MEERUT</div>
                                    <div className="text-[10px] font-mono opacity-50">Top Performing Node</div>
                                </div>
                                <div className="w-px bg-white/10 h-10" />
                                <div className="text-left">
                                    <div className="text-blue-500 font-bold text-xl">INDORE</div>
                                    <div className="text-[10px] font-mono opacity-50">Most Active Pilots</div>
                                </div>
                            </div>
                        </div>
                     </Card>
                </div>

                {/* Sector Stats */}
                <div className="space-y-6">
                    <Card title="Sector Impact Analysis">
                        <SimpleBarChart data={SECTOR_PERFORMANCE} />
                    </Card>
                    <div className="p-4 border border-green-500/20 bg-green-500/5">
                        <div className="font-mono text-[10px] uppercase text-green-500 mb-2">PMO Directive</div>
                        <p className="text-xs text-white/80 leading-relaxed">
                            Prioritize <strong>Water Conservation</strong> projects in arid zones (Rajasthan, Gujarat) for Q4 2026.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};