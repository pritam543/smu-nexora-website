import React from 'react';
import { FileText } from 'lucide-react';

const Navbar = ({ onOpenDeck, onNavigate }) => {
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
          <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            SMU NEXORA
          </span>
          <p className="text-[9px] text-slate-400 tracking-widest font-semibold uppercase">
            TECHNOLOGIES PVT. LTD.
          </p>
        </div>
      </div>

      <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
        <li onClick={() => onNavigate && onNavigate('home')} className="hover:text-blue-400 cursor-pointer transition-colors">Home</li>
        <li onClick={() => onNavigate && onNavigate('services')} className="hover:text-blue-400 cursor-pointer transition-colors">Services</li>
        <li onClick={() => onNavigate && onNavigate('careers')} className="hover:text-blue-400 cursor-pointer transition-colors">Careers</li>
        <li onClick={() => onNavigate && onNavigate('contact')} className="hover:text-blue-400 cursor-pointer transition-colors">Contact</li>
      </ul>

      <button
        onClick={() => onOpenDeck && onOpenDeck()}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-5 py-2 rounded-xl font-medium text-sm transition-all shadow-md shadow-blue-600/25 border border-blue-400/20 flex items-center gap-2"
      >
        <FileText size={16} />
        <span>Corporate Deck</span>
      </button>
    </nav>
  );
};

export default Navbar;