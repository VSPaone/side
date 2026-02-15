import React from 'react';
import { SectionHeader } from './DashboardUI';
import { DashboardView } from './Dashboard';
import { Overview } from './student/Overview';
import { Network } from './student/Network';
import { History } from './student/History';
import { Notifications } from './student/Notifications';
import { Profile } from './student/Profile';
import { LearningLog } from './student/LearningLog';

interface StudentDashboardProps {
    activeView: DashboardView;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ activeView }) => {
    const getSubtitle = () => {
        if (activeView === 'LEARNING') return "ACADEMIC INPUT // AI ASSIGNMENT PROTOCOL";
        return `Student Node // ID: ST-2024-8842 // VIEW: ${activeView}`;
    }

    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto min-h-screen">
            <SectionHeader 
                title={activeView === 'DASHBOARD' ? "My Proof of Work" : activeView === 'LEARNING' ? "Learning Ledger" : activeView} 
                subtitle={getSubtitle()}
            />
            
            {activeView === 'DASHBOARD' && <Overview />}
            {activeView === 'LEARNING' && <LearningLog />}
            {activeView === 'NETWORK' && <Network />}
            {activeView === 'HISTORY' && <History />}
            {activeView === 'NOTIFICATIONS' && <Notifications />}
            {activeView === 'PROFILE' && <Profile />}
        </div>
    );
};