import React, { useState } from 'react';
import { SideLogo } from './SideLogo';
import { 
  LogOut, Users, AlertCircle, Clock, FileCheck, UserCircle, 
  LayoutDashboard, Settings, BarChart3, CheckCircle, Map,
  FileText, Megaphone, Globe, BookOpen
} from 'lucide-react';
import { StudentDashboard } from './StudentDashboard';
import { CollegeDashboard } from './CollegeDashboard';
import { BureaucratDashboard } from './BureaucratDashboard';
import { MinisterDashboard } from './MinisterDashboard';

interface DashboardProps {
  userRole: string;
  onLogout: () => void;
}

// Expanded view types to accommodate all roles
export type DashboardView = 
  // Shared / Generic
  | 'DASHBOARD' 
  | 'SETTINGS'
  // Student Specific
  | 'LEARNING'
  | 'NETWORK' 
  | 'HISTORY' 
  | 'NOTIFICATIONS' 
  | 'PROFILE'
  // College Specific
  | 'VERIFICATION'
  | 'FACULTY'
  | 'ANALYTICS'
  // Bureaucrat Specific
  | 'LEDGER'
  | 'GRIEVANCES'
  | 'REPORTS'
  // Minister Specific
  | 'GRID';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 font-mono text-xs uppercase tracking-widest transition-colors ${active ? 'bg-white text-black' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
  >
    <Icon size={16} />
    {label}
  </button>
);

export const Dashboard: React.FC<DashboardProps> = ({ userRole, onLogout }) => {
  const [activeView, setActiveView] = useState<DashboardView>('DASHBOARD');

  const renderSidebarItems = () => {
    if (userRole === 'STUDENT') {
      return (
        <>
            <SidebarItem icon={FileCheck} label="Overview" active={activeView === 'DASHBOARD'} onClick={() => setActiveView('DASHBOARD')} />
            <SidebarItem icon={BookOpen} label="Learning Log" active={activeView === 'LEARNING'} onClick={() => setActiveView('LEARNING')} />
            <SidebarItem icon={Users} label="Network" active={activeView === 'NETWORK'} onClick={() => setActiveView('NETWORK')} />
            <SidebarItem icon={Clock} label="History" active={activeView === 'HISTORY'} onClick={() => setActiveView('HISTORY')} />
            <SidebarItem icon={AlertCircle} label="Notifications" active={activeView === 'NOTIFICATIONS'} onClick={() => setActiveView('NOTIFICATIONS')} />
            <SidebarItem icon={UserCircle} label="Profile" active={activeView === 'PROFILE'} onClick={() => setActiveView('PROFILE')} />
        </>
      );
    } 
    
    if (userRole === 'COLLEGE') {
        return (
            <>
                <SidebarItem icon={LayoutDashboard} label="Overview" active={activeView === 'DASHBOARD'} onClick={() => setActiveView('DASHBOARD')} />
                <SidebarItem icon={CheckCircle} label="Verification" active={activeView === 'VERIFICATION'} onClick={() => setActiveView('VERIFICATION')} />
                <SidebarItem icon={Users} label="Faculty Nodes" active={activeView === 'FACULTY'} onClick={() => setActiveView('FACULTY')} />
                <SidebarItem icon={BarChart3} label="Analytics" active={activeView === 'ANALYTICS'} onClick={() => setActiveView('ANALYTICS')} />
                <SidebarItem icon={Settings} label="Settings" active={activeView === 'SETTINGS'} onClick={() => setActiveView('SETTINGS')} />
            </>
        );
    }

    if (userRole === 'BUREAUCRAT') {
        return (
            <>
                <SidebarItem icon={LayoutDashboard} label="Overview" active={activeView === 'DASHBOARD'} onClick={() => setActiveView('DASHBOARD')} />
                <SidebarItem icon={FileText} label="District Ledger" active={activeView === 'LEDGER'} onClick={() => setActiveView('LEDGER')} />
                <SidebarItem icon={Megaphone} label="Grievances" active={activeView === 'GRIEVANCES'} onClick={() => setActiveView('GRIEVANCES')} />
                <SidebarItem icon={BarChart3} label="Reports" active={activeView === 'REPORTS'} onClick={() => setActiveView('REPORTS')} />
                <SidebarItem icon={Settings} label="Settings" active={activeView === 'SETTINGS'} onClick={() => setActiveView('SETTINGS')} />
            </>
        );
    }

    if (userRole === 'MINISTER') {
        return (
            <>
                <SidebarItem icon={LayoutDashboard} label="Overview" active={activeView === 'DASHBOARD'} onClick={() => setActiveView('DASHBOARD')} />
                <SidebarItem icon={Globe} label="National Grid" active={activeView === 'GRID'} onClick={() => setActiveView('GRID')} />
                <SidebarItem icon={BarChart3} label="Analytics" active={activeView === 'ANALYTICS'} onClick={() => setActiveView('ANALYTICS')} />
                <SidebarItem icon={Settings} label="Settings" active={activeView === 'SETTINGS'} onClick={() => setActiveView('SETTINGS')} />
            </>
        );
    }

    // Default Fallback
    return (
        <SidebarItem icon={FileCheck} label="Dashboard" active={activeView === 'DASHBOARD'} onClick={() => setActiveView('DASHBOARD')} />
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-black fixed h-full hidden md:flex flex-col z-20">
        <div className="p-8 border-b border-white/10">
            <SideLogo className="w-8 h-8" />
        </div>
        
        <nav className="flex-grow py-8 space-y-2">
            {renderSidebarItems()}
        </nav>

        <div className="p-6 border-t border-white/10">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
                    {userRole[0]}
                </div>
                <div>
                    <div className="font-bold text-xs uppercase">{userRole}</div>
                    <div className="font-mono text-[9px] text-green-500">ONLINE</div>
                </div>
            </div>
            <button 
                onClick={onLogout}
                className="w-full flex items-center gap-2 text-xs font-mono text-red-500 hover:text-red-400 uppercase tracking-widest"
            >
                <LogOut size={14} /> Terminate
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow md:ml-64 bg-black relative">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none fixed" 
               style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
          />
          
          <div className="relative z-10 pt-24 md:pt-0 min-h-screen">
             {/* Mobile Header */}
             <div className="md:hidden fixed top-0 w-full bg-black border-b border-white/10 p-4 flex justify-between items-center z-30">
                <SideLogo className="w-6 h-6" />
                <button onClick={onLogout} className="text-xs text-red-500 uppercase font-mono">Logout</button>
             </div>

             {/* Dynamic Content Loading */}
             {userRole === 'STUDENT' && <StudentDashboard activeView={activeView} />}
             {userRole === 'COLLEGE' && <CollegeDashboard activeView={activeView} />}
             {userRole === 'BUREAUCRAT' && <BureaucratDashboard activeView={activeView} />}
             {userRole === 'MINISTER' && <MinisterDashboard activeView={activeView} />}
          </div>
      </main>
    </div>
  );
};