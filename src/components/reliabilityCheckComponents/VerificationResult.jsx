import React from 'react';
import Card from '../dashboardComponents/ui/Card';

export default function VerificationResult() {
  return (
    <Card className="bg-white border border-slate-200 p-5 shadow-xs relative overflow-hidden">
      {/* Upper Status Line */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-[1rem]">
        <span className="font-bold text-slate-700 flex items-center gap-1.5">⏱️ Verification result</span>
        <span className="text-[1rem] font-bold text-amber-600 uppercase tracking-wider">Insufficient evidence</span>
      </div>

      {/* Primary Result Headline */}
      <div className="pt-4">
        <h4 className="text-base font-extrabold text-slate-800">Insufficient Evidence.</h4>
      </div>

      {/* Explanatory Technical Notice */}
      <div className="mt-4 flex items-start space-x-2 text-[1rem] text-slate-600 bg-slate-50 rounded-lg p-3">
        <span className="text-slate-400">ℹ️</span>
        <div>
          <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wide">Why this response?</span>
          <p className="mt-0.5 text-slate-500 leading-relaxed">
            The system flags the disagreement rather than choosing a price without sufficient evidence.
          </p>
        </div>
      </div>
    </Card>
  );
}
