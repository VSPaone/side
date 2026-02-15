import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { LandingPage } from './components/LandingPage';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

type ViewState = 'HOME' | 'LOGIN' | 'DASHBOARD';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [userRole, setUserRole] = useState<string>('');

  const handleLogin = (role: string) => {
    setUserRole(role);
    setCurrentView('DASHBOARD');
  };

  const handleLogout = () => {
    setUserRole('');
    setCurrentView('HOME');
  };

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-white selection:text-black cursor-default">
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {currentView === 'HOME' && (
            <>
              <Navbar onLoginClick={() => setCurrentView('LOGIN')} />
              <LandingPage onLoginClick={() => setCurrentView('LOGIN')} />
            </>
          )}

          {currentView === 'LOGIN' && (
            <Login 
                onLogin={handleLogin} 
                onBack={() => setCurrentView('HOME')} 
            />
          )}

          {currentView === 'DASHBOARD' && (
            <Dashboard 
                userRole={userRole} 
                onLogout={handleLogout} 
            />
          )}
        </motion.div>
      )}
    </div>
  );
}