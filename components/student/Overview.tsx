import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Trophy, Clock, Target, Rocket, Plus } from 'lucide-react';
import { Card, StatCard, StatusBadge, SimpleBarChart, SkillRadar } from '../DashboardUI';

// --- MOCK DATA ---
const STUDENT_STATS = {
    projectsSubmitted: 8,
    projectsDeployed: 2,
    reputationScore: 850,
    impactmetric: "12,400 Lives"
};

const SKILLS_DATA = {
    "Civic_Tech": 85,
    "Data_Analysis": 60,
    "Field_Work": 90,
    "Policy_Drafting": 45
};

const ACTIVITY_LOG = [
    { label: "Submitted 'Dengue AI'", value: 100, max: 100, color: 'bg-green-500' },
    { label: "Approved 'Water Sensor'", value: 80, max: 100, color: 'bg-blue-500' },
    { label: "Rejected 'Traffic Bot'", value: 20, max: 100, color: 'bg-red-500' },
];

const RECENT_PROJECTS = [
    {
        id: "P-101",
        title: "Dengue Heatmap Prediction",
        category: "HEALTH_TECH",
        status: "PENDING_REVIEW",
        updated: "2 hrs ago",
        notes: "Awaiting District Health Officer validation."
    },
    {
        id: "P-102",
        title: "Rural Supply Chain Ledger",
        category: "LOGISTICS",
        status: "DEPLOYED_PILOT",
        updated: "2 days ago",
        notes: "Live in 3 Mandis. Data streaming active."
    },
    {
        id: "P-103",
        title: "Pothole Detection Drone",
        category: "INFRASTRUCTURE",
        status: "NEEDS_REVISION",
        updated: "1 week ago",
        notes: "Accuracy below threshold (78%). Need >90%."
    }
];

export const Overview: React.FC = () => {
    const [showNewProject, setShowNewProject] = useState(false);

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Total Submissions" value={STUDENT_STATS.projectsSubmitted.toString().padStart(2, '0')} icon={FolderGit2} />
                <StatCard label="Active Pilots" value={STUDENT_STATS.projectsDeployed.toString().padStart(2, '0')} subValue="Top 5% of District" icon={Rocket} trend="up" />
                <StatCard label="Reputation Score" value={STUDENT_STATS.reputationScore.toString()} subValue="+50 this week" icon={Trophy} trend="up" />
                <StatCard label="Est. Impact" value="12.4K" subValue="Citizens Affected" icon={Target} trend="neutral" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold uppercase flex items-center gap-2">
                            <Clock size={20} className="text-white/50" /> Recent Activity Ledger
                        </h3>
                        <button 
                            onClick={() => setShowNewProject(!showNewProject)}
                            className="text-xs font-mono uppercase border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                        >
                            {showNewProject ? 'Cancel Protocol' : <><Plus size={12}/> Init Protocol</>}
                        </button>
                    </div>

                    <AnimatePresence>
                        {showNewProject && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden mb-6"
                            >
                                <Card title="Initiate New Protocol" className="border-green-500/50">
                                    <div className="grid gap-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono uppercase text-white/50">Solution Title</label>
                                                <input type="text" className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none transition-colors" placeholder="e.g. Traffic Flow Optimizer" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono uppercase text-white/50">Domain Category</label>
                                                <select className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none transition-colors">
                                                    <option>CIVIC_INFRASTRUCTURE</option>
                                                    <option>HEALTH_TECH</option>
                                                    <option>AGRI_TECH</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-mono uppercase text-white/50">Problem Statement (Hypothesis)</label>
                                            <textarea className="w-full bg-black border border-white/20 p-3 text-sm focus:border-green-500 outline-none h-24 resize-none" placeholder="Describe the specific district issue being addressed..." />
                                        </div>
                                        <div className="flex justify-end gap-4">
                                            <button 
                                                onClick={() => setShowNewProject(false)}
                                                className="bg-transparent border border-white/20 text-white px-6 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button className="bg-green-500 text-black px-8 py-2 font-mono text-xs uppercase font-bold hover:bg-white transition-colors">
                                                [ Upload to Chain ]
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="space-y-3">
                        {RECENT_PROJECTS.map((project) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition-colors group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex flex-col">
                                        <span className="font-mono text-[10px] text-white/40 mb-1">{project.category} // ID: {project.id}</span>
                                        <h4 className="text-xl font-bold uppercase">{project.title}</h4>
                                    </div>
                                    <StatusBadge status={project.status} />
                                </div>
                                <div className="flex justify-between items-end border-t border-white/5 pt-4">
                                    <p className="font-mono text-xs text-white/60 max-w-md truncate">
                                        {'>'} {project.notes}
                                    </p>
                                    <span className="font-mono text-[10px] text-white/30">{project.updated}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <Card title="Skill Matrix" className="h-auto">
                        <SkillRadar skills={SKILLS_DATA} />
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <h5 className="font-mono text-[10px] uppercase text-white/50 mb-4">Distribution</h5>
                            <SimpleBarChart data={ACTIVITY_LOG} />
                        </div>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-900/20 to-black border-green-500/20">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-500 text-black rounded-sm">
                                <Trophy size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold uppercase text-green-400 mb-1">Achievement Unlocked</h4>
                                <p className="text-xs text-white/80 leading-relaxed">
                                    Your "Rural Supply Chain" project has been cited by the <strong>Agra District Collectorate</strong>.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};