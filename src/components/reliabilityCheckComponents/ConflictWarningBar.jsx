import React from 'react';

export default function ConflictWarningBar() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-2.5 text-[1rem] text-amber-800">
      <span className="text-[1rem] shrink-0">⚠️</span>
      <div>
        <p className="font-bold">Conflict Warning</p>
        <p className="mt-0.5 text-amber-700">Two entries for the same property contain different prices: <span className="font-bold">₹52 lakh</span> and <span className="font-bold">₹56 lakh</span>.</p>
      </div>
    </div>
  );
}
