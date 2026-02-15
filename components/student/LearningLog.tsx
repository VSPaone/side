import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Cpu, Upload, CheckCircle, RefreshCw, FileText, ArrowRight, UploadCloud } from 'lucide-react';
import { Card } from '../DashboardUI';

type LogState = 'INPUT' | 'PROCESSING' | 'ASSIGNMENT' | 'SUBMISSION' | 'COMPLETE';

export const LearningLog: React.FC = () => {
    const [currentState, setCurrentState] = useState<LogState>('INPUT');
    const [topic, setTopic] = useState('');
    const [generatedTask, setGeneratedTask] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);

    // Mock AI Generation
    const generateAssignment = () => {
        if (!topic) return;
        setCurrentState('PROCESSING');
        
        setTimeout(() => {
            let task = {
                title: "Optimized Waste Sorting Algorithm",
                description: `Using concepts from ${topic}, design a sorting mechanism for the Meerut Municipal Corporation to segregate dry and wet waste efficiently.`,
                difficulty: "HARD",
                impact: "High Civic Utility"
            };

            if (topic.toLowerCase().includes('fluid') || topic.toLowerCase().includes('thermo')) {
                task = {
                    title: "Low-Cost Cold Storage Insulation",
                    description: `Apply principles of ${topic} to design an affordable insulation system for local potato farmers in Meerut using locally sourced materials.`,
                    difficulty: "MEDIUM",
                    impact: "Direct Agricultural Aid"
                };
            } else if (topic.toLowerCase().includes('java') || topic.toLowerCase().includes('code') || topic.toLowerCase().includes('data')) {
                task = {
                    title: "Panchayat Record Digitization Script",
                    description: `Utilize ${topic} to create a script that parses legacy CSV data from the Block Office and identifies duplicate beneficiary entries.`,
                    difficulty: "EASY",
                    impact: "Governance Efficiency"
                };
            }

            setGeneratedTask(task);
            setCurrentState('ASSIGNMENT');
        }, 2000);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        if (!file) return;
        setCurrentState('COMPLETE');
    };

    const resetProcess = () => {
        setTopic('');
        setGeneratedTask(null);
        setFile(null);
        setCurrentState('INPUT');
    };

    return (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
            {/* Step Indicator */}
            <div className="flex justify-between items-center mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10" />
                {['LOG_ENTRY', 'AI_GENERATION', 'EXECUTION', 'PROOF_OF_WORK'].map((step, i) => {
                    const stepIndex = ['INPUT', 'PROCESSING', 'ASSIGNMENT', 'SUBMISSION', 'COMPLETE'].indexOf(currentState);
                    // Mapping simplified for 4 visual steps
                    let active = false;
                    if (i === 0) active = true;
                    if (i === 1 && stepIndex >= 1) active = true;
                    if (i === 2 && stepIndex >= 2) active = true;
                    if (i === 3 && stepIndex >= 4) active = true;

                    return (
                        <div key={step} className={`flex flex-col items-center gap-2 bg-black px-2 ${active ? 'opacity-100' : 'opacity-30'}`}>
                            <div className={`w-3 h-3 border border-white rounded-full ${active ? 'bg-green-500 border-green-500' : 'bg-black'}`} />
                            <span className="font-mono text-[9px] uppercase tracking-widest">{step}</span>
                        </div>
                    );
                })}
            </div>

            <AnimatePresence mode="wait">
                {/* STATE 1: INPUT */}
                {currentState === 'INPUT' && (
                    <motion.div 
                        key="input"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Card className="p-8 md:p-12 border-white/20">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-2xl font-black uppercase mb-2">Academic Ingestion Layer</h3>
                                    <p className="font-mono text-sm text-white/50">Log today's curriculum topic. The Node AI will map it to a live civic problem in Meerut District.</p>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="font-mono text-[10px] uppercase text-white/40">Topic / Concept</label>
                                    <div className="relative">
                                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                                        <input 
                                            type="text" 
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                            className="w-full bg-black border border-white/20 p-4 pl-12 text-lg font-mono focus:border-green-500 outline-none transition-colors placeholder-white/20"
                                            placeholder="e.g. Thermodynamics, Graph Theory, Tort Law..."
                                            autoFocus
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button 
                                        onClick={generateAssignment}
                                        disabled={!topic}
                                        className="bg-white text-black px-8 py-3 font-mono text-xs uppercase font-bold hover:bg-green-500 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Cpu size={16} /> Generate Protocol
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}

                {/* STATE 2: PROCESSING */}
                {currentState === 'PROCESSING' && (
                    <motion.div 
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center min-h-[400px] border border-white/10 bg-white/5"
                    >
                        <div className="relative mb-8">
                            <div className="w-16 h-16 border-t-2 border-r-2 border-green-500 rounded-full animate-spin" />
                            <Cpu className="absolute inset-0 m-auto text-green-500 animate-pulse" size={24} />
                        </div>
                        <div className="font-mono text-sm text-green-500 tracking-widest uppercase mb-2">Analyzing District Ledger...</div>
                        <div className="font-mono text-[10px] text-white/40">Mapping "{topic}" to active Collectorate Issues</div>
                    </motion.div>
                )}

                {/* STATE 3: ASSIGNMENT DETAILS */}
                {currentState === 'ASSIGNMENT' && generatedTask && (
                    <motion.div 
                        key="assignment"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid gap-6"
                    >
                        <div className="flex items-center gap-2 font-mono text-xs text-green-500 uppercase mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                            Match Found
                        </div>
                        
                        <Card className="border-green-500/50 bg-green-500/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Cpu size={120} />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <div className="font-mono text-[10px] uppercase text-white/50 mb-1">Proposed Mission</div>
                                    <h2 className="text-3xl font-black uppercase leading-tight">{generatedTask.title}</h2>
                                </div>

                                <p className="text-lg leading-relaxed font-mono opacity-80 mb-8 border-l-2 border-green-500 pl-4">
                                    {generatedTask.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                                    <div>
                                        <div className="font-mono text-[10px] uppercase text-white/50">Complexity</div>
                                        <div className="font-bold">{generatedTask.difficulty}</div>
                                    </div>
                                    <div>
                                        <div className="font-mono text-[10px] uppercase text-white/50">Projected Impact</div>
                                        <div className="font-bold">{generatedTask.impact}</div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-4">
                                    <button 
                                        onClick={() => setCurrentState('SUBMISSION')}
                                        className="flex-1 bg-green-500 text-black py-4 font-mono text-xs uppercase font-bold hover:bg-white transition-colors flex justify-center items-center gap-2"
                                    >
                                        <CheckCircle size={16} /> Accept Challenge
                                    </button>
                                    <button 
                                        onClick={resetProcess}
                                        className="flex-1 border border-white/20 py-4 font-mono text-xs uppercase font-bold hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2"
                                    >
                                        <RefreshCw size={16} /> Regenerate / Custom
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}

                {/* STATE 4: SUBMISSION */}
                {currentState === 'SUBMISSION' && (
                    <motion.div 
                        key="submission"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Card className="border-white/20">
                            <div className="mb-8 border-b border-white/10 pb-6">
                                <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-white/50 mb-1">
                                    Active Protocol
                                </div>
                                <h3 className="text-xl font-bold uppercase">{generatedTask?.title}</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="border-2 border-dashed border-white/20 rounded-sm p-8 text-center hover:border-green-500/50 hover:bg-green-500/5 transition-colors group cursor-pointer relative">
                                    <input 
                                        type="file" 
                                        onChange={handleFileUpload} 
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 bg-white/5 rounded-full group-hover:bg-green-500/20 transition-colors">
                                            {file ? <FileText size={24} className="text-green-500"/> : <UploadCloud size={24} />}
                                        </div>
                                        <div>
                                            {file ? (
                                                <div className="font-mono text-sm text-green-500">{file.name}</div>
                                            ) : (
                                                <>
                                                    <div className="font-bold uppercase text-sm mb-1">Upload Solution Artifacts</div>
                                                    <div className="font-mono text-[10px] text-white/40">PDF, CODE, CAD, or VIDEO</div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-mono text-[10px] uppercase text-white/40">Proof of Work Description</label>
                                    <textarea 
                                        className="w-full bg-black border border-white/20 p-4 text-sm font-mono focus:border-green-500 outline-none h-32 resize-none placeholder-white/20"
                                        placeholder="Briefly explain your methodology and results..."
                                    />
                                </div>

                                <div className="flex justify-between items-center pt-4">
                                    <button 
                                        onClick={() => setCurrentState('ASSIGNMENT')}
                                        className="text-xs font-mono uppercase text-white/50 hover:text-white underline decoration-white/30"
                                    >
                                        Back to Brief
                                    </button>
                                    <button 
                                        onClick={handleSubmit}
                                        disabled={!file}
                                        className="bg-white text-black px-8 py-3 font-mono text-xs uppercase font-bold hover:bg-green-500 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Upload size={16} /> Commit to Chain
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}

                {/* STATE 5: COMPLETE */}
                {currentState === 'COMPLETE' && (
                    <motion.div 
                        key="complete"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                    >
                        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                            <CheckCircle size={48} className="text-black" />
                        </div>
                        <h2 className="text-4xl font-black uppercase mb-4">Proof of Work Logged</h2>
                        <p className="font-mono text-sm text-white/60 max-w-md mb-8">
                            Your solution has been hashed to the ledger (TX-9983) and forwarded to the <strong>Meerut Collectorate Dashboard</strong> for review.
                        </p>
                        
                        <div className="p-4 border border-white/10 bg-white/5 font-mono text-xs mb-8">
                            <div className="flex justify-between gap-8 mb-2">
                                <span className="text-white/40">HASH:</span>
                                <span>0x8f...2b1a</span>
                            </div>
                            <div className="flex justify-between gap-8">
                                <span className="text-white/40">STATUS:</span>
                                <span className="text-yellow-500">PENDING_VALIDATION</span>
                            </div>
                        </div>

                        <button 
                            onClick={resetProcess}
                            className="border border-white/20 px-8 py-3 font-mono text-xs uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                        >
                            <ArrowRight size={14} /> Log New Entry
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};