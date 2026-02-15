import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../DashboardUI';
import { Plus, Trash2, X, Check } from 'lucide-react';

const INITIAL_GRIEVANCES = [
    { id: 1, title: "High Nitrate levels in Groundwater", zone: "Industrial Area", priority: "HIGH", openDate: "2023-11-01" },
    { id: 2, title: "Traffic congestion at Begum Bridge", zone: "Central", priority: "MEDIUM", openDate: "2023-11-05" },
];

export const Grievances: React.FC = () => {
    const [grievances, setGrievances] = useState(INITIAL_GRIEVANCES);
    const [showForm, setShowForm] = useState(false);
    const [newItem, setNewItem] = useState({ title: '', zone: '', priority: 'MEDIUM' });

    const handleAdd = () => {
        if (!newItem.title || !newItem.zone) return;
        const newGrievance = {
            id: Date.now(),
            title: newItem.title,
            zone: newItem.zone,
            priority: newItem.priority,
            openDate: new Date().toISOString().split('T')[0]
        };
        setGrievances([newGrievance, ...grievances]);
        setNewItem({ title: '', zone: '', priority: 'MEDIUM' });
        setShowForm(false);
    };

    const handleDelete = (id: number) => {
        setGrievances(grievances.filter(g => g.id !== id));
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-6">
                <div>
                    <h3 className="text-2xl font-black uppercase">Problem Statements</h3>
                    <p className="font-mono text-xs text-white/50 mt-1">Broadcast civic challenges to the student network.</p>
                </div>
                <button 
                    onClick={() => setShowForm(!showForm)}
                    className={`px-4 py-2 font-mono text-xs uppercase font-bold transition-colors flex items-center gap-2 ${showForm ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-black hover:bg-green-500'}`}
                >
                    {showForm ? <><X size={14} /> Cancel</> : <><Plus size={14} /> Broadcast New</>}
                </button>
            </div>

            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <Card className="border-green-500/50 mb-8 bg-green-500/5">
                            <div className="grid md:grid-cols-4 gap-4 items-end">
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-mono uppercase text-white/50">Problem Title</label>
                                    <input 
                                        type="text" 
                                        value={newItem.title}
                                        onChange={e => setNewItem({...newItem, title: e.target.value})}
                                        className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none transition-colors text-white placeholder-white/20" 
                                        placeholder="e.g. Broken Streetlights in Sector 4" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase text-white/50">Zone / Ward</label>
                                    <input 
                                        type="text" 
                                        value={newItem.zone}
                                        onChange={e => setNewItem({...newItem, zone: e.target.value})}
                                        className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none transition-colors text-white placeholder-white/20" 
                                        placeholder="e.g. North Zone" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase text-white/50">Priority</label>
                                    <select 
                                        value={newItem.priority}
                                        onChange={e => setNewItem({...newItem, priority: e.target.value})}
                                        className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none transition-colors text-white"
                                    >
                                        <option value="LOW">LOW</option>
                                        <option value="MEDIUM">MEDIUM</option>
                                        <option value="HIGH">HIGH</option>
                                        <option value="CRITICAL">CRITICAL</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <button 
                                    onClick={handleAdd}
                                    className="bg-green-500 text-black px-6 py-2 font-mono text-xs uppercase font-bold hover:bg-white transition-colors flex items-center gap-2"
                                >
                                    <Check size={14} /> Publish to Grid
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid gap-4">
                {grievances.map((g) => (
                    <Card key={g.id} className="flex flex-row justify-between items-center p-6 group hover:border-white/30 transition-colors">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-bold uppercase text-sm">{g.title}</h4>
                                <span className={`px-2 py-0.5 text-[9px] font-mono border rounded-sm ${
                                    g.priority === 'HIGH' || g.priority === 'CRITICAL' ? 'text-red-500 border-red-500' : 'text-yellow-500 border-yellow-500'
                                }`}>{g.priority} PRIORITY</span>
                            </div>
                            <div className="font-mono text-[10px] text-white/50">
                                Zone: {g.zone} // Opened: {g.openDate}
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDelete(g.id)}
                            className="text-white/30 hover:text-red-500 transition-colors p-2"
                        >
                            <Trash2 size={16} />
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
};