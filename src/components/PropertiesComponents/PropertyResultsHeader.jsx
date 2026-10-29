import React from 'react';

export default function PropertyResultsHeader({ matchCount, locationTag = 'Whitefield', totalRecords = 40 }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-[1rem] text-slate-400 font-medium select-none">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-slate-700">{matchCount} matching properties</span>
        <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
          {locationTag}
        </span>
      </div>
      <div>Showing {matchCount} of {totalRecords} sample records</div>
    </div>
  );
}
