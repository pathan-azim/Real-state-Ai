import React from 'react';
import Card from '../dashboardComponents/ui/Card';
import Button from '../dashboardComponents/ui/Button';

export default function PropertySearchDeck({ 
  searchQuery, setSearchQuery,
  budget, setBudget,
  bhk, setBhk,
  possession, setPossession,
  onSearchSubmit 
}) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) onSearchSubmit();
  };

  return (
    <Card className="bg-white border border-slate-200 shadow-sm p-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 items-end">
        
        {/* Search Input Bar */}
        <div className="md:col-span-4 space-y-1.5">
          <label className="text-[1rem] font-bold text-slate-700">Property ID or locality</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[1rem]">🔍</span>
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-[1rem] font-medium text-slate-700 outline-none focus:bg-white focus:border-blue-500 transition-all"
              placeholder="e.g. Asara Chowk"
            />
          </div>
        </div>

        {/* Budget Toggles Dropdown */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-[1rem] font-bold text-slate-700">Budget</label>
          <select 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-[1rem] font-semibold text-slate-600 outline-none cursor-pointer focus:bg-white focus:border-blue-500"
          >
            <option value="any">Any budget</option>
            <option value="50">Under ₹50 Lakhs</option>
            <option value="70">Under ₹70 Lakhs</option>
          </select>
        </div>

        {/* BHK Toggles Dropdown */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-[1rem] font-bold text-slate-700">BHK</label>
          <select 
            value={bhk} 
            onChange={(e) => setBhk(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-[1rem] font-semibold text-slate-600 outline-none cursor-pointer focus:bg-white focus:border-blue-500"
          >
            <option value="any">Any BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
          </select>
        </div>

        {/* Possession Toggles Dropdown */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-[1rem] font-bold text-slate-700">Possession status</label>
          <select 
            value={possession} 
            onChange={(e) => setPossession(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-[1rem] font-semibold text-slate-600 outline-none cursor-pointer focus:bg-white focus:border-blue-500"
          >
            <option value="all">All statuses</option>
            <option value="Ready to Move">Ready to Move</option>
            <option value="Under Construction">Under Construction</option>
          </select>
        </div>

        {/* Execution Submit Trigger */}
        <div className="md:col-span-2">
          <Button type="submit" className="w-full h-[34px] bg-blue-600 hover:bg-blue-700 text-[1rem] font-bold flex items-center justify-center gap-1 shadow-sm shadow-blue-600/10">
            <span>Search</span>
            <span>🔍</span>
          </Button>
        </div>

      </form>
    </Card>
  );
}
