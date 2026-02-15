import React from 'react';
import { Card, SimpleBarChart } from '../DashboardUI';

const SUBMISSION_TRENDS = [
    { label: "Aug", value: 12, max: 100 },
    { label: "Sep", value: 45, max: 100 },
    { label: "Oct", value: 68, max: 100 },
    { label: "Nov", value: 95, max: 100, color: 'bg-green-500' },
];

const DOMAIN_DISTRIBUTION = [
    { label: "Civic Infra", value: 40, max: 100, color: 'bg-blue-500' },
    { label: "Health Tech", value: 30, max: 100, color: 'bg-red-500' },
    { label: "Agri Tech", value: 20, max: 100, color: 'bg-yellow-500' },
    { label: "Education", value: 10, max: 100, color: 'bg-purple-500' },
];

export const Analytics: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Institutional Performance</h3>
            <p className="font-mono text-xs text-white/50 mt-1">Live metrics from the Student Innovation Grid.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Submission Velocity (Last 4 Months)">
                <div className="mt-4">
                    <SimpleBarChart data={SUBMISSION_TRENDS} />
                </div>
            </Card>

            <Card title="Domain Distribution">
                <div className="mt-4">
                    <SimpleBarChart data={DOMAIN_DISTRIBUTION} />
                </div>
            </Card>

            <Card title="Impact Summary" className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-4 border border-white/10 bg-white/5">
                        <div className="text-4xl font-black text-green-500 mb-2">₹12.5L</div>
                        <div className="font-mono text-[10px] uppercase text-white/50">Est. Civic Savings</div>
                    </div>
                    <div className="text-center p-4 border border-white/10 bg-white/5">
                        <div className="text-4xl font-black text-blue-500 mb-2">84</div>
                        <div className="font-mono text-[10px] uppercase text-white/50">Solutions Piloted</div>
                    </div>
                    <div className="text-center p-4 border border-white/10 bg-white/5">
                        <div className="text-4xl font-black text-white mb-2">TOP 5%</div>
                        <div className="font-mono text-[10px] uppercase text-white/50">National Ranking</div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
);