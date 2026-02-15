import React from 'react';
import { SectionHeader } from './DashboardUI';
import { DashboardView } from './Dashboard';
import { Overview } from './bureaucrat/Overview';
import { DistrictLedger } from './bureaucrat/DistrictLedger';
import { Grievances } from './bureaucrat/Grievances';
import { Reports } from './bureaucrat/Reports';
import { Settings } from './bureaucrat/Settings';

interface BureaucratDashboardProps {
    activeView: DashboardView;
}

export const BureaucratDashboard: React.FC<BureaucratDashboardProps> = ({ activeView }) => {
    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto min-h-screen">
            <SectionHeader 
                title={activeView === 'DASHBOARD' ? "District Control Center" : activeView} 
                subtitle={`MEERUT COLLECTORATE // DM_OFFICE // VIEW: ${activeView}`}
            />
            
            {activeView === 'DASHBOARD' && <Overview />}
            {activeView === 'LEDGER' && <DistrictLedger />}
            {activeView === 'GRIEVANCES' && <Grievances />}
            {activeView === 'REPORTS' && <Reports />}
            {activeView === 'SETTINGS' && <Settings />}
        </div>
    );
};