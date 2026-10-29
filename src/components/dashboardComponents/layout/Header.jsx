import React from 'react';
import Button from '../ui/Button';

export default function Header({ currentView }) {
  // Map internal layout IDs to readable header titles
  const viewTitles = {
    'dashboard': 'System Overview',
    'find-properties': 'Property Search Database',
    'ai-assistant': 'AI Query Console',
    'reliability-check': 'Document Verification Terminal'
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-40">
      {/* Active Area Title */}
      <div className="flex items-center space-x-3">
        <h2 className="text-base font-semibold text-slate-800">
          {viewTitles[currentView] || 'RealEstate AI Workspace'}
        </h2>
        <span className="text-[1rem] bg-slate-100 text-slate-500 font-medium px-2 py-0.5 rounded-full border border-slate-200/50">
          Prototype v1.0
        </span>
      </div>

      {/* Dataset Selection Controls */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
          <span className="text-[1rem] text-slate-400 font-medium">Active Data:</span>
          <select className="bg-transparent text-[0.8rem] font-bold text-slate-700 outline-none cursor-pointer pr-1">
            <option className="text-[0.8rem] font-bold text-slate-700" value="solapur-asara">Solapur (Asara Chowk Mocks)</option>
            <option className="text-[0.8rem] font-bold text-slate-700" value="pune-sample" disabled>Pune Extension Dataset (Locked)</option>
          </select>
        </div>

        {/* User Workspace Info (A.K. Edits) */}
        <div className="flex items-center space-x-2.5 border-l border-slate-200 pl-4">
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-[0.8rem] font-bold shadow-sm shadow-indigo-600/20">
            Nawaz
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-[1rem] font-semibold text-slate-700 leading-tight">Nawaz</p>
            <p className="text-[10px] text-slate-400 font-medium">Developer Account</p>
          </div>
        </div>
      </div>
    </header>
  );
}
