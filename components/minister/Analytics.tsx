import React from 'react';
import { Card, SimpleBarChart } from '../DashboardUI';
import { IndianRupee, Briefcase, Zap } from 'lucide-react';

const SAVINGS_TREND = [
    { label: "Q1", value: 1.2, max: 5 },
    { label: "Q2", value: 2.5, max: 5 },
    { label: "Q3", value: 4.8, max: 5, color: 'bg-green-500' },
];

const JOB_CREATION = [
    { label: "Tech", value: 450, max: 1000, color: 'bg-blue-500' },
    { label: "Agri", value: 300, max: 1000, color: 'bg-yellow-500' },
    { label: "Civic", value: 200, max: 1000, color: 'bg-red-500' },
];

export const Analytics: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">National Impact Report</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-green-500">
                    <IndianRupee size={24} />
                    <span className="font-mono text-xs uppercase">Total Saved</span>
                </div>
                <div className="text-4xl font-black">₹500Cr</div>
                <div className="font-mono text-[10px] opacity-50 mt-1">FY 2025-26 Estimate</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-blue-500">
                    <Briefcase size={24} />
                    <span className="font-mono text-xs uppercase">Jobs Created</span>
                </div>
                <div className="text-4xl font-black">10,500</div>
                <div className="font-mono text-[10px] opacity-50 mt-1">Via Micro-Ventures</div>
            </div>
             <div className="p-6 bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-yellow-500">
                    <Zap size={24} />
                    <span className="font-mono text-xs uppercase">Energy Saved</span>
                </div>
                <div className="text-4xl font-black">1.2GW</div>
                <div className="font-mono text-[10px] opacity-50 mt-1">Smart Grid Opt.</div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Fiscal Efficiency (in Crores)">
                <div className="mt-4">
                    <SimpleBarChart data={SAVINGS_TREND} />
                </div>
            </Card>
            <Card title="Employment Generation by Sector">
                <div className="mt-4">
                    <SimpleBarChart data={JOB_CREATION} />
                </div>
            </Card>
        </div>
    </div>
);