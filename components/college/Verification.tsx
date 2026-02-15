import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, FileCode, ExternalLink, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { Card, StatusBadge } from '../DashboardUI';

const PENDING_PROJECTS = [
    {
        id: "P-404",
        title: "Smart Waste Classification AI",
        student: "Rohan V.",
        rollNo: "CS-21-042",
        category: "CIVIC_TECH",
        submitted: "2023-11-01",
        description: "A computer vision model using YOLOv8 to detect and classify plastic waste on conveyor belts in real-time.",
        artifacts: ["Codebase (GitHub)", "Demo Video", "Dataset"],
        score: "92/100 (Auto-Eval)"
    },
    {
        id: "P-405",
        title: "IoT Soil Moisture Grid",
        student: "Anjali M.",
        rollNo: "AG-22-011",
        category: "AGRI_TECH",
        submitted: "2023-11-02",
        description: "Low-cost sensor array for optimizing irrigation in wheat fields. Piloted in 2 acres.",
        artifacts: ["Hardware Schematics", "Pilot Data CSV"],
        score: "88/100 (Auto-Eval)"
    }
];

export const Verification: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                    <h3 className="text-2xl font-black uppercase">Proof of Work Ledger</h3>
                    <p className="font-mono text-xs text-white/50 mt-2">Validate student solutions before pushing to the Blockchain.</p>
                </div>
                <div className="font-mono text-[10px] text-yellow-500 border border-yellow-500/50 px-3 py-1 bg-yellow-500/10 animate-pulse">
                    PENDING: {PENDING_PROJECTS.length}
                </div>
            </div>

            <div className="space-y-4">
                {PENDING_PROJECTS.map((project) => (
                    <Card key={project.id} className={`transition-all duration-300 ${expandedId === project.id ? 'border-white/40 bg-white/5' : ''}`}>
                        <div className="flex flex-col">
                            {/* Header Row */}
                            <div 
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleExpand(project.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-full border ${expandedId === project.id ? 'bg-white text-black border-white' : 'border-white/10 text-white/50'}`}>
                                        <FileCode size={20} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <h4 className="font-bold uppercase text-lg">{project.title}</h4>
                                            <StatusBadge status="PENDING_REVIEW" />
                                        </div>
                                        <div className="font-mono text-[10px] text-white/50 flex gap-4 mt-1">
                                            <span>ID: {project.id}</span>
                                            <span>STUDENT: {project.student} ({project.rollNo})</span>
                                            <span>DATE: {project.submitted}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/50">
                                    {expandedId === project.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>

                            {/* Expanded Details */}
                            <AnimatePresence>
                                {expandedId === project.id && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <div className="md:col-span-2 space-y-4">
                                                <div>
                                                    <label className="font-mono text-[10px] uppercase text-white/40 mb-1 block">Abstract</label>
                                                    <p className="text-sm leading-relaxed opacity-80">{project.description}</p>
                                                </div>
                                                <div>
                                                    <label className="font-mono text-[10px] uppercase text-white/40 mb-2 block">Artifacts</label>
                                                    <div className="flex gap-2">
                                                        {project.artifacts.map((art, i) => (
                                                            <button key={i} className="flex items-center gap-2 px-3 py-2 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-[10px] uppercase">
                                                                <ExternalLink size={12} /> {art}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-black/40 p-4 border border-white/10 h-fit">
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="font-mono text-[10px] uppercase text-white/40">AI Audit Score</span>
                                                    <span className="font-bold text-green-500">{project.score}</span>
                                                </div>
                                                <div className="space-y-2">
                                                    <button className="w-full py-3 bg-green-500 text-black font-bold font-mono text-xs uppercase hover:bg-white transition-colors flex items-center justify-center gap-2">
                                                        <CheckCircle size={14} /> Approve & Sign
                                                    </button>
                                                    <button className="w-full py-3 border border-yellow-500/50 text-yellow-500 font-bold font-mono text-xs uppercase hover:bg-yellow-500 hover:text-black transition-colors flex items-center justify-center gap-2">
                                                        <MessageSquare size={14} /> Request Changes
                                                    </button>
                                                    <button className="w-full py-3 border border-red-500/50 text-red-500 font-bold font-mono text-xs uppercase hover:bg-red-500 hover:text-black transition-colors flex items-center justify-center gap-2">
                                                        <XCircle size={14} /> Reject
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};