import React from 'react';
import { Rocket, Bell, Check } from 'lucide-react';

const NOTIFICATIONS = [
    { id: 1, type: "SYSTEM", msg: "Blockchain sync complete for project P-102.", time: "10m ago", read: false },
    { id: 2, type: "ALERT", msg: "District Collectorate requested revision on 'Pothole Drone'.", time: "2h ago", read: false },
    { id: 3, type: "NETWORK", msg: "Arjun Mehta invited you to collaborate.", time: "1d ago", read: true },
    { id: 4, type: "SYSTEM", msg: "Reputation score updated: +50 points.", time: "2d ago", read: true },
];

export const Notifications: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Signals & Alerts</h3>
            <button className="text-xs font-mono uppercase text-white/50 hover:text-white underline decoration-white/30">
                Mark All Read
            </button>
        </div>

        <div className="space-y-2">
            {NOTIFICATIONS.map((notif) => (
                <div key={notif.id} className={`p-4 border border-white/10 flex gap-4 ${notif.read ? 'bg-black opacity-60' : 'bg-white/5 border-l-2 border-l-green-500'}`}>
                    <div className={`mt-1 p-2 rounded-full ${notif.type === 'ALERT' ? 'bg-red-500/10 text-red-500' : 'bg-white/10 text-white'}`}>
                        {notif.type === 'ALERT' ? <Rocket size={16} /> : <Bell size={16} />}
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-sm uppercase">{notif.type}</span>
                            <span className="font-mono text-[10px] text-white/40">{notif.time}</span>
                        </div>
                        <p className="text-sm opacity-80 font-mono leading-relaxed">{notif.msg}</p>
                    </div>
                    {!notif.read && (
                        <div className="self-center">
                            <button className="p-2 hover:bg-green-500 hover:text-black rounded-full transition-colors text-green-500">
                                <Check size={16} />
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);