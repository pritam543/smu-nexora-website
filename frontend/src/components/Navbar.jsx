import React, { useState } from 'react';
import { FileText, ChevronDown } from 'lucide-react';

const Navbar = ({ onOpenDeck, onNavigate }) => {
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);

  const whatWeDoList = [
    { id: 'architectures', name: "Architectures" },
    { id: 'education', name: "Education" },
    { id: 'healthcare', name: "Healthcare" },
    { id: 'schools', name: "Schools" },
    { id: 'hospitality', name: "Hospitality" }
  ];

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div
        onClick={() => onNavigate && onNavigate('home')}
        className="flex items-center space-x-3 cursor-pointer"
      >
        <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center font-extrabold text-xl shadow-lg shadow-blue-500/30">
          SN
        </div>
        <div>
          <span className="text-xl font-bold tracking-wider">
            SMU <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">NEXORA</span>
          </span>
          <p className="text-[9px] text-slate-400 tracking-widest font-semibold uppercase">
            TECHNOLOGIES PVT. LTD.
          </p>
        </div>
      </div>

      <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
        <li onClick={() => onNavigate && onNavigate('home')} className="hover:text-blue-400 cursor-pointer transition-colors">Home</li>

        {/* What We Do Dropdown */}
        <li
          className="relative group cursor-pointer"
          onMouseEnter={() => setWhatWeDoOpen(true)}
          onMouseLeave={() => setWhatWeDoOpen(false)}
        >
          <div onClick={() => setWhatWeDoOpen(!whatWeDoOpen)} className="flex items-center gap-1 hover:text-blue-400 transition-colors py-2">
            <span>What We Do</span>
            <ChevronDown size={14} />
          </div>
          {whatWeDoOpen && (
            <div className="absolute top-full left-0 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 mt-1 z-50">
              {whatWeDoList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setWhatWeDoOpen(false);
                    if (onNavigate) onNavigate(item.id);
                  }}
                  className="px-4 py-2 text-sm text-slate-300 hover:bg-blue-600/10 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </li>

        <li onClick={() => onNavigate && onNavigate('services')} className="hover:text-blue-400 cursor-pointer transition-colors">Services</li>
        <li onClick={() => onNavigate && onNavigate('services')} className="hover:text-blue-400 cursor-pointer transition-colors">Projects</li>
        <li onClick={() => onNavigate && onNavigate('careers')} className="hover:text-blue-400 cursor-pointer transition-colors">Careers</li>
        <li onClick={() => onNavigate && onNavigate('contact')} className="hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
      </ul>

      <button
        onClick={() => onOpenDeck && onOpenDeck()}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2 rounded-xl font-medium text-sm transition-all shadow-md shadow-blue-600/25 border border-blue-400/20 flex items-center gap-2 cursor-pointer"
      >
        <FileText size={16} />
        <span>Corporate Deck</span>
      </button>
    </nav>
  );
};

export default Navbar;