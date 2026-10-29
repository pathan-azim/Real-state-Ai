import React from 'react';
import Button from '../dashboardComponents/ui/Button';

export default function EmptyResultsState({ isVisible, onClearFilters }) {
  if (!isVisible) return null;

  return (
    <div className="pt-8 space-y-3 animation-fade-in">
      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider select-none">
        Secondary State Demonstration
      </h5>
      <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start space-x-3 text-center sm:text-left flex-col sm:flex-row items-center sm:items-start">
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm text-slate-400 shrink-0 select-none">
            🔍
          </div>
          <div>
            <h6 className="text-[1rem] font-bold text-slate-800">No properties match your search</h6>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Try a different property ID or broaden your budget, BHK and possession filters.
            </p>
          </div>
        </div>
        <Button 
          variant="outline" 
          onClick={onClearFilters}
          className="bg-white text-[1rem] font-bold h-8 px-4 border-slate-200 hover:border-slate-300 shrink-0 w-full sm:w-auto"
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
}
