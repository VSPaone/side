import React from 'react';
import { Card, SimpleBarChart } from '../DashboardUI';
import { BarChart3, PieChart } from 'lucide-react';

const IMPACT_DATA = [
    { label: "Q1", value: 20, max: 100 },
    { label: "Q2", value: 45, max: 100 },
    { label: "Q3", value: 80, max: 100, color: 'bg-green-500' },
];

const SECTOR_DATA = [
    { label: "Sanitation", value: 35, max: 100, color: 'bg-blue-500' },
    { label: "Traffic", value: 25, max: 100, color: 'bg-yellow-500' },
    { label: "Health", value: 20, max: 100, color: 'bg-red-500' },
    { label: "Infra", value: 20, max: 100, color: 'bg-purple-500' },
];

export const Reports: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">District Intelligence</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Civic Efficiency Score" action={<BarChart3 size={16} className="opacity-50"/>}>
                <div className="mt-4">
                    <SimpleBarChart data={IMPACT_DATA} />
                </div>
            </Card>
            <Card title="Solution Sector Split" action={<PieChart size={16} className="opacity-50"/>}>
                <div className="mt-4">
                    <SimpleBarChart data={SECTOR_DATA} />
                </div>
            </Card>
        </div>
    </div>
);