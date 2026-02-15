import React from 'react';
import { User, Mail, Award, Plus } from 'lucide-react';
import { Card } from '../DashboardUI';

const FACULTY_LIST = [
    { id: 1, name: "Dr. A. Sharma", dept: "Computer Science", role: "Head of Dept", students: 45, score: 98 },
    { id: 2, name: "Prof. K. Verma", dept: "Electronics", role: "Senior Mentor", students: 32, score: 92 },
    { id: 3, name: "Dr. S. Gupta", dept: "Civil Engineering", role: "Field Coordinator", students: 28, score: 95 },
    { id: 4, name: "Ms. R. Singh", dept: "Humanities", role: "Social Audit Lead", students: 15, score: 88 },
];

export const Faculty: React.FC = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <h3 className="text-2xl font-black uppercase">Faculty Nodes</h3>
            <button className="bg-white text-black px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-green-500 transition-colors flex items-center gap-2">
                <Plus size={14} /> Add Mentor
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY_LIST.map((faculty) => (
                <Card key={faculty.id} className="group hover:border-white/40">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                            <User size={24} className="opacity-50" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg uppercase leading-tight">{faculty.name}</h4>
                            <div className="font-mono text-[10px] text-white/50">{faculty.role} // {faculty.dept}</div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mb-4">
                        <div>
                            <div className="font-mono text-[10px] uppercase text-white/40">Mentoring</div>
                            <div className="text-xl font-bold">{faculty.students}</div>
                        </div>
                        <div>
                            <div className="font-mono text-[10px] uppercase text-white/40">Impact Score</div>
                            <div className="text-xl font-bold text-green-500">{faculty.score}</div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex-1 py-2 border border-white/10 hover:bg-white hover:text-black transition-colors font-mono text-[10px] uppercase flex items-center justify-center gap-2">
                            <Mail size={12} /> Contact
                        </button>
                        <button className="flex-1 py-2 border border-white/10 hover:bg-white hover:text-black transition-colors font-mono text-[10px] uppercase flex items-center justify-center gap-2">
                            <Award size={12} /> View Log
                        </button>
                    </div>
                </Card>
            ))}
        </div>
    </div>
);