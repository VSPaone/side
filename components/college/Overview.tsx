import React from 'react';
import { FileCheck, Users, Globe, Award, AlertCircle } from 'lucide-react';
import { Card, StatCard, StatusBadge, SimpleBarChart } from '../DashboardUI';

const COLLEGE_STATS = {
    pendingVerifications: 12,
    totalStudents: 1450,
    activeDeployments: 84,
    nirfImpact: "+15%"
};

const URGENT_QUEUE = [
    { id: "P-404", title: "Waste Mgmt AI", student: "Rohan V.", dept: "CS", time: "2h ago" },
    { id: "P-405", title: "Smart Irrigation", student: "Anjali M.", dept: "Agri", time: "4h ago" },
    { id: "P-406", title: "Traffic Drone", student: "Team X", dept: "Mech", time: "1d ago" },
];

const DEPT_PERFORMANCE = [
    { label: "CS/IT", value: 95, max: 100, color: 'bg-green-500' },
    { label: "Mechanical", value: 60, max: 100, color: 'bg-yellow-500' },
    { label: "Electronics", value: 75, max: 100, color: 'bg-blue-500' },
    { label: "Civil", value: 40, max: 100, color: 'bg-red-500' },
];

export const Overview: React.FC = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    label="Pending Review" 
                    value={COLLEGE_STATS.pendingVerifications} 
                    subValue="Urgent Actions" 
                    icon={AlertCircle} 
                    trend="down" 
                />
                <StatCard 
                    label="Student Nodes" 
                    value={COLLEGE_STATS.totalStudents} 
                    icon={Users} 
                />
                <StatCard 
                    label="Live Deployments" 
                    value={COLLEGE_STATS.activeDeployments} 
                    subValue="District Wide" 
                    icon={Globe} 
                    trend="up" 
                />
                <StatCard 
                    label="NIRF Impact" 
                    value={COLLEGE_STATS.nirfImpact} 
                    subValue="Social Responsibility" 
                    icon={Award} 
                    trend="up" 
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Urgent Actions */}
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="font-bold uppercase flex items-center gap-2">
                        <FileCheck size={20} className="text-white/50" />
                        Verification Queue (High Priority)
                    </h3>
                    <div className="space-y-3">
                        {URGENT_QUEUE.map((item) => (
                            <Card key={item.id} className="hover:bg-white/[0.02] cursor-pointer group">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center font-bold text-xs border border-white/10 group-hover:border-white/30 transition-colors">
                                            {item.dept}
                                        </div>
                                        <div>
                                            <h4 className="font-bold uppercase text-sm">{item.title}</h4>
                                            <div className="font-mono text-[10px] text-white/50">
                                                By {item.student} // {item.time}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 bg-white text-black font-mono text-[10px] uppercase font-bold hover:bg-green-500 transition-colors">
                                        Verify
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Department Stats */}
                <div className="space-y-6">
                    <Card title="Department Velocity">
                        <SimpleBarChart data={DEPT_PERFORMANCE} />
                    </Card>
                    <div className="p-4 border border-green-500/20 bg-green-500/5">
                        <div className="font-mono text-[10px] uppercase text-green-500 mb-2">System Broadcast</div>
                        <p className="text-xs text-white/80 leading-relaxed">
                            District Collectorate Meerut has opened 3 new problem statements regarding <strong>Water Sanitation</strong>. Notify Civil Dept.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};