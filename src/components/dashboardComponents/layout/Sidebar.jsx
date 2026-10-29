import React from 'react';

export default function Sidebar({ currentView, onViewChange }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'find-properties', label: 'Find Properties', icon: '🔍' },
    // { id: 'compare-properties', label: 'Compare Properties', icon: '⚖️' },
    { id: 'ai-assistant', label: 'AI Assistant', icon: '✨' },
    { id: 'reliability-check', label: 'Reliability Check', icon: '🛡️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen border-r border-slate-800 shrink-0 select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏠</span>
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            RealEstate AI
          </h1>
        </div>
        <div className="mt-2 flex items-center space-x-1.5 text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Demo Workspace</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-[1rem] font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Branding */}
      <div className="p-4 border-t border-slate-800 text-[11px] text-slate-500 text-center tracking-wide uppercase">
        ⚡ MCP Retrieval Active
      </div>
    </aside>
  );
}
