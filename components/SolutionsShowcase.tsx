import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, MapPin, Star, Search, X, ChevronRight } from 'lucide-react';

// Types
type FilterType = 'WEEK' | 'MONTH' | 'FEATURED' | 'DISTRICT';

const filters: { id: FilterType; label: string }[] = [
  { id: 'WEEK', label: 'Solutions of the Week' },
  { id: 'MONTH', label: 'Solutions of the Month' },
  { id: 'FEATURED', label: 'Featured Solutions' },
  { id: 'DISTRICT', label: 'By District' },
];

const DISTRICTS = [
    "Agra", "Ahmedabad", "Ajmer", "Aligarh", "Amritsar", "Aurangabad", "Bangalore", 
    "Bhopal", "Bhubaneswar", "Chandigarh", "Chennai", "Coimbatore", "Dehradun", "Delhi", 
    "Dhanbad", "Faridabad", "Gandhinagar", "Ghaziabad", "Gorakhpur", "Gurgaon", "Guwahati", 
    "Gwalior", "Hyderabad", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jamshedpur", 
    "Jodhpur", "Kanpur", "Kochi", "Kolkata", "Kota", "Lucknow", "Ludhiana", "Madurai", 
    "Meerut", "Mumbai", "Mysore", "Nagpur", "Nashik", "Noida", "Patna", "Pune", "Raipur", 
    "Rajkot", "Ranchi", "Surat", "Thiruvananthapuram", "Vadodara", "Varanasi", "Vijayawada", 
    "Visakhapatnam", "Warangal"
].sort();

// Helper to generate consistent mock data for any district
const generateDistrictSolutions = (district: string) => [
    {
      id: `D-${district}-1`,
      title: `${district} Urban Mobility`,
      category: "CIVIC_INFRA",
      author: "Polytechnic Wing A",
      location: district,
      status: "PROTOTYPE",
      progress: 62,
      impact: "Reduced wait times",
      tags: ["Transport", "AI", "Urban"]
    },
    {
      id: `D-${district}-2`,
      title: `${district} Sanitation Bot`,
      category: "ROBOTICS",
      author: "RoboClub District",
      location: district,
      status: "IN_REVIEW",
      progress: 45,
      impact: "Automated cleaning",
      tags: ["Robotics", "Clean", "Health"]
    },
    {
      id: `D-${district}-3`,
      title: `E-Mandi for ${district}`,
      category: "COMMERCE",
      author: "Code Wizards",
      location: district,
      status: "DEPLOYED",
      progress: 95,
      impact: "Direct farmer access",
      tags: ["Web3", "Agri", "Commerce"]
    },
    {
      id: `D-${district}-4`,
      title: `${district} Heritage AR`,
      category: "CULTURAL_TECH",
      author: "Design Studio",
      location: district,
      status: "APPROVED",
      progress: 88,
      impact: "Tourism boost",
      tags: ["AR", "Heritage", "Tourism"]
    },
    {
      id: `D-${district}-5`,
      title: `Flood Sensor Network`,
      category: "DISASTER_MGMT",
      author: "IoT Lab 01",
      location: district,
      status: "IN_REVIEW",
      progress: 70,
      impact: "Early warning system",
      tags: ["IoT", "Safety", "Sensors"]
    }
];

const solutionsData: Record<string, any[]> = {
  WEEK: [
    {
      id: "W1",
      title: "Auto-Traffic Regulation AI",
      category: "CIVIC_INFRA",
      author: "Rohan V.",
      location: "Meerut",
      status: "IN_REVIEW",
      progress: 65,
      impact: "Reduces congestion by 12%",
      tags: ["AI", "YOLOv8", "Traffic"]
    },
    {
      id: "W2",
      title: "Crop Disease Scanner",
      category: "AGRI_TECH",
      author: "Sita M.",
      location: "Indore",
      status: "PROTOTYPE",
      progress: 40,
      impact: "Early detection of blight",
      tags: ["Mobile", "ML", "Agriculture"]
    },
    {
      id: "W3",
      title: "Water Leakage Sensor Net",
      category: "IOT",
      author: "Team Alpha",
      location: "Pune",
      status: "IN_REVIEW",
      progress: 70,
      impact: "Saves 500L/day est.",
      tags: ["IoT", "Water", "Conservation"]
    },
    {
      id: "W4",
      title: "Digital Panchayat Archive",
      category: "GOV_TECH",
      author: "Amit K.",
      location: "Patna",
      status: "PROTOTYPE",
      progress: 35,
      impact: "Digitizing 50yr records",
      tags: ["Web3", "Storage", "Governance"]
    },
    {
      id: "W5",
      title: "Solar Grid Optimizer",
      category: "ENERGY",
      author: "Neha S.",
      location: "Jaipur",
      status: "IN_REVIEW",
      progress: 55,
      impact: "5% efficiency boost",
      tags: ["Solar", "Algorithms", "Green"]
    }
  ],
  MONTH: [
    {
      id: "M1",
      title: "Waste Segregation Bot",
      category: "ROBOTICS",
      author: "Arjun D.",
      location: "Bangalore",
      status: "APPROVED",
      progress: 90,
      impact: "95% accuracy in plastic",
      tags: ["Robotics", "Waste", "Sustainability"]
    },
    {
      id: "M2",
      title: "Hyperlocal Job Matching",
      category: "LABOR_ECONOMY",
      author: "Priya R.",
      location: "Mumbai",
      status: "DEPLOYED",
      progress: 100,
      impact: "200 daily wage jobs/day",
      tags: ["App", "Labor", "Employment"]
    },
    {
      id: "M3",
      title: "Smart Streetlight Mesh",
      category: "IOT_INFRA",
      author: "TechSquad",
      location: "Chennai",
      status: "APPROVED",
      progress: 85,
      impact: "30% energy reduction",
      tags: ["IoT", "Energy", "Smart City"]
    },
    {
      id: "M4",
      title: "Tele-Health Kiosk",
      category: "HEALTH",
      author: "Dr. Future Team",
      location: "Guwahati",
      status: "APPROVED",
      progress: 88,
      impact: "Remote rural access",
      tags: ["Health", "Telemed", "Rural"]
    },
    {
      id: "M5",
      title: "Pot-hole Mapper Drone",
      category: "DRONE_TECH",
      author: "SkyEyes",
      location: "Hyderabad",
      status: "APPROVED",
      progress: 92,
      impact: "Auto-ticket generation",
      tags: ["Drone", "Roads", "Civic"]
    }
  ],
  FEATURED: [
    {
      id: "F1",
      title: "River Clean-up Swarm",
      category: "ENV_TECH",
      author: "Project Ganga",
      location: "Varanasi",
      status: "DEPLOYED",
      progress: 100,
      impact: "Removes 1 ton waste/day",
      tags: ["Robotics", "Water", "CleanTech"]
    },
    {
      id: "F2",
      title: "AI Legal Assistant",
      category: "LEGAL_TECH",
      author: "Vidhi AI",
      location: "Delhi",
      status: "DEPLOYED",
      progress: 100,
      impact: "Summarizes cases in seconds",
      tags: ["NLP", "Law", "Efficiency"]
    },
    {
      id: "F3",
      title: "Ed-Net Mesh WiFi",
      category: "CONNECTIVITY",
      author: "RuralLink",
      location: "Odisha Rural",
      status: "DEPLOYED",
      progress: 100,
      impact: "Free wifi for 50 schools",
      tags: ["Networking", "Education", "Access"]
    }
  ]
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'DEPLOYED': return 'text-green-500 border-green-500 bg-green-500';
    case 'APPROVED': return 'text-blue-400 border-blue-400 bg-blue-400';
    case 'IN_REVIEW': return 'text-yellow-400 border-yellow-400 bg-yellow-400';
    default: return 'text-white/40 border-white/40 bg-white/40';
  }
};

export const SolutionsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('WEEK');
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [districtSearch, setDistrictSearch] = useState('');

  // Determine which data to show
  const currentData = useMemo(() => {
    if (activeFilter === 'DISTRICT') {
      return selectedDistrict ? generateDistrictSolutions(selectedDistrict) : [];
    }
    return solutionsData[activeFilter] || [];
  }, [activeFilter, selectedDistrict]);

  const filteredDistricts = useMemo(() => {
    return DISTRICTS.filter(d => d.toLowerCase().includes(districtSearch.toLowerCase()));
  }, [districtSearch]);

  const handleFilterChange = (filterId: FilterType) => {
    setActiveFilter(filterId);
    if (filterId !== 'DISTRICT') {
      setSelectedDistrict(null);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 md:px-12 border-b border-white/10 flex flex-col">
       <div className="max-w-7xl mx-auto w-full">
         {/* Header */}
         <div className="mb-12">
            <div className="font-mono text-xs tracking-widest uppercase mb-4 opacity-50 flex items-center gap-2">
                <Activity size={12} className="text-green-500" />
                Live Solution Ledger
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-8">
                Proof of Work.
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-white/20 pb-8">
                {filters.map((f) => (
                    <button
                        key={f.id}
                        onClick={() => handleFilterChange(f.id)}
                        className={`
                            px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all duration-300
                            ${activeFilter === f.id 
                                ? 'bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]' 
                                : 'bg-transparent text-white/60 border-white/20 hover:border-white hover:text-white'
                            }
                        `}
                    >
                        [{f.label}]
                    </button>
                ))}
            </div>
         </div>

         {/* District Selection UI */}
         {activeFilter === 'DISTRICT' && !selectedDistrict && (
             <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-12"
             >
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
                    <input 
                        type="text"
                        placeholder="SEARCH_NODE // ENTER_CITY_NAME"
                        value={districtSearch}
                        onChange={(e) => setDistrictSearch(e.target.value)}
                        className="w-full bg-white/5 border border-white/20 p-4 pl-12 font-mono text-sm text-white focus:outline-none focus:border-green-500 transition-colors uppercase placeholder-white/20"
                    />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {filteredDistricts.map((city, i) => (
                        <button
                            key={city}
                            onClick={() => setSelectedDistrict(city)}
                            className="text-left px-3 py-2 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400 font-mono text-xs uppercase tracking-wider transition-all duration-200 flex justify-between items-center group"
                        >
                            {city}
                            <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                    ))}
                    {filteredDistricts.length === 0 && (
                        <div className="col-span-full py-8 text-center font-mono text-xs text-white/30 uppercase">
                            No Nodes Found matching query.
                        </div>
                    )}
                </div>
             </motion.div>
         )}

         {/* Selected District Header */}
         {activeFilter === 'DISTRICT' && selectedDistrict && (
            <div className="flex items-center gap-4 mb-8">
                <div className="font-mono text-xs tracking-widest text-green-500 border border-green-500/30 bg-green-500/10 px-4 py-2 uppercase flex items-center gap-2">
                    <MapPin size={12} />
                    Node: {selectedDistrict}
                </div>
                <button 
                    onClick={() => setSelectedDistrict(null)}
                    className="text-xs text-white/50 hover:text-white underline decoration-white/30 flex items-center gap-1 uppercase"
                >
                    <X size={12} /> Change
                </button>
            </div>
         )}

         {/* Grid */}
         {(activeFilter !== 'DISTRICT' || selectedDistrict) && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                    {currentData.map((item, index) => {
                        const statusColorClass = getStatusColor(item.status);
                        const textColor = statusColorClass.split(' ').find(c => c.startsWith('text-')) || 'text-white';
                        const bgColor = statusColorClass.split(' ').find(c => c.startsWith('bg-')) || 'bg-white';

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                            >
                                {/* Status Stripe */}
                                <div className={`absolute top-0 left-0 w-1 h-full ${bgColor}`} />

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="font-mono text-[10px] tracking-widest uppercase border border-white/20 px-2 py-1 rounded-sm text-white/50 group-hover:text-white group-hover:border-white/40 transition-colors">
                                            {item.category.replace('_', ' ')}
                                        </span>
                                        {item.status === 'DEPLOYED' && <Star size={16} className="text-yellow-400 fill-yellow-400" />}
                                    </div>

                                    <h3 className="text-xl font-bold uppercase leading-tight mb-2 group-hover:text-green-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-sm text-white/60 font-mono mb-6 flex-grow">
                                        {item.impact}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[10px] text-white/40 font-mono">#{tag}</span>
                                        ))}
                                    </div>

                                    {/* Meta & Progress */}
                                    <div className="border-t border-white/10 pt-4 mt-auto">
                                        <div className="flex justify-between items-center mb-3 font-mono text-xs text-white/70">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[8px] font-bold text-black">
                                                    {item.author[0]}
                                                </div>
                                                {item.author}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={10} />
                                                {item.location}
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-[10px] font-mono uppercase">
                                                <span className={textColor}>{item.status.replace('_', ' ')}</span>
                                                <span>{item.progress}%</span>
                                            </div>
                                            <div className="w-full h-1 bg-white/10">
                                                <motion.div 
                                                    className={`h-full ${bgColor}`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${item.progress}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
             </div>
         )}

         {/* Footer / CTA */}
         <div className="mt-12 text-center border-t border-white/10 pt-8">
            <button className="text-xs font-mono uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all">
                [ View All Submissions ]
            </button>
         </div>
       </div>
    </section>
  );
};