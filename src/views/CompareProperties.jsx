import React from 'react';
import SearchConsole from '../components/dashboardComponents/dashboard/SearchConsole.jsx';
import MetricSection from '../components/dashboardComponents/dashboard/MetricSection.jsx';
import FeatureGrid from '../components/dashboardComponents/dashboard/FeatureGrid.jsx';
import WorkflowGuide from '../components/dashboardComponents/dashboard/WorkflowGuide.jsx';

export default function Dashboard({ onViewChange }) {
  const handleSearchSubmit = (query) => {
    console.log("RealEstate AI Query Received:", query);
    // When connected to a backend or state manager, this logs lookups to your console
    onViewChange('ai-assistant');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Upper Welcoming Meta Grid */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Welcome back, Azeem
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            RealEstate AI system operational. Grounded data processing active for local verification sets.
          </p>
        </div>
        
        {/* Dynamic Activity Badge */}
        <div className="flex items-center space-x-2 text-xs font-semibold bg-emerald-50/80 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg w-fit shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Zomato Delivery Rider Mode: Offline</span>
        </div>
      </div>

      {/* Main Structural Layout Grid Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Double-Wide Interactive Columns */}
        <div className="lg:col-span-2 space-y-8">
          <SearchConsole onSearchSubmit={handleSearchSubmit} />
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Primary Navigation Gateways
            </h4>
            <FeatureGrid onViewChange={onViewChange} />
          </div>
        </div>

        {/* Right Information Analytics Column Sidebar */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Dataset Statistics
            </h4>
            <MetricSection />
          </div>

          {/* Quick Notice Info Container */}
          <div className="bg-slate-900 text-slate-300 rounded-xl p-5 border border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 text-7xl font-black text-slate-800/20 translate-x-4 -translate-y-2 pointer-events-none select-none">
              ⚡
            </div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              Developer Notice
            </h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              This system is reading simulated local properties mapping to the Asara Chowk locale. Live MCP record pipelines are mounted for processing evaluation mocks.
            </p>
          </div>
        </div>
      </div>

      {/* Full Horizontal Footer Workflow Diagram */}
      <div className="border-t border-slate-200/80 pt-6">
        <WorkflowGuide />
      </div>
    </div>
  );
}
