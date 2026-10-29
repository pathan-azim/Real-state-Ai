import React from 'react';
import Card from '../dashboardComponents/ui/Card';

export default function SupportingEvidenceSidebar() {
  const datasetMetrics = [
    { label: "Retrieved price", value: "₹52 lakh" },
    { label: "Retrieved possession", value: "December 2027" },
    { label: "Locality", value: "Asra Chowk, Solapur" }
  ];

  return (
    <div className="space-y-4 lg:sticky lg:top-4">
      {/* Core File Index Breakdown Container */}
      <Card className="bg-white border h-[60vh] border-slate-200 p-5 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-2 text-xs select-none">
          <h4 className="font-bold text-[1.25rem] text-slate-800 flex items-center gap-1.5">
            <span>📋</span> Supporting evidence
          </h4>
          <p className="text-[16px] text-slate-400 mt-0.5 font-medium">1 record retrieved for this question</p>
        </div>

        {/* Target Source Context Parameters */}
        <div className="space-y-3">
          <div className="text-[1.2rem]">
            <p className="font-bold text-slate-700">properties.csv</p>
            <p className="text-[1rem] text-slate-400 font-semibold mt-0.5">Record P101 · Demo Dataset</p>
          </div>

          <div className="pt-2 border-t border-slate-50">
            <span className="text-[1.2rem] font-bold text-slate-400 uppercase tracking-wider block">Property</span>
            <span className="text-[1rem] font-bold text-slate-800 mt-0.5 block">Green Residency P101</span>
          </div>

          {/* List Parameters Mapping Box Loop */}
          {datasetMetrics.map((item, idx) => (
            <div key={idx} className="pt-2.5 border-t border-slate-50 space-y-0.5">
              <span className="text-[1.2rem] font-bold text-slate-400 uppercase tracking-wider block">{item.label}</span>
              <span className="text-[1rem] font-extrabold text-slate-700 block">{item.value}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Bottom Summary Consensus Verification Tag */}
      <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-1 shadow-xs">
        <div className="flex items-center space-x-1.5 text-[1.2rem] font-bold text-emerald-800 select-none">
          <span>🛡️</span>
          <span>Supported by retrieved demo record</span>
        </div>
        <p className="text-[1rem] text-emerald-600/90 leading-relaxed pl-5 font-medium">
          Both values in the answer match record P101.
        </p>
      </div>
    </div>
  );
}
