import React from 'react';

export default function ConflictBanner() {
  return (
    <div className="flex items-center space-x-2 text-amber-700 font-bold bg-amber-50/50 border border-amber-200/50 px-4 py-2.5 rounded-lg text-[1rem] select-none">
      <span>⚠️</span>
      <span>Conflict Detected</span>
    </div>
  );
}
