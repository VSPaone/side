import React from 'react';
import { SectionHeader } from './DashboardUI';
import { DashboardView } from './Dashboard';
import { Overview } from './college/Overview';
import { Verification } from './college/Verification';
import { Faculty } from './college/Faculty';
import { Analytics } from './college/Analytics';
import { Settings } from './college/Settings';

interface CollegeDashboardProps {
    activeView: DashboardView;
}

export const CollegeDashboard: React.FC<CollegeDashboardProps> = ({ activeView }) => {
    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto min-h-screen">
            <SectionHeader 
                title={activeView === 'DASHBOARD' ? "Institutional Node" : activeView} 
                subtitle={`CCSU MEERUT // ID: NODE-8842 // VIEW: ${activeView}`}
            />
            
            {activeView === 'DASHBOARD' && <Overview />}
            {activeView === 'VERIFICATION' && <Verification />}
            {activeView === 'FACULTY' && <Faculty />}
            {activeView === 'ANALYTICS' && <Analytics />}
            {activeView === 'SETTINGS' && <Settings />}
        </div>
    );
};