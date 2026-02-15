import React from 'react';
import { SectionHeader } from './DashboardUI';
import { DashboardView } from './Dashboard';
import { Overview } from './minister/Overview';
import { NationalGrid } from './minister/NationalGrid';
import { Analytics } from './minister/Analytics';
import { Settings } from './minister/Settings';

interface MinisterDashboardProps {
    activeView: DashboardView;
}

export const MinisterDashboard: React.FC<MinisterDashboardProps> = ({ activeView }) => {
    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto min-h-screen">
            <SectionHeader 
                title={activeView === 'DASHBOARD' ? "National Command Center" : activeView} 
                subtitle={`GOVERNMENT OF INDIA // PMO_DASHBOARD // VIEW: ${activeView}`}
            />
            
            {activeView === 'DASHBOARD' && <Overview />}
            {activeView === 'GRID' && <NationalGrid />}
            {activeView === 'ANALYTICS' && <Analytics />}
            {activeView === 'SETTINGS' && <Settings />}
        </div>
    );
};