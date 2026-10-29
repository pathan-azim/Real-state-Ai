import React from 'react';
import Card from '../dashboardComponents/ui/Card';

export default function EvidenceGrid() {
  const records = [
    {
      label: "Record A",
      name: "Hudco plaza P105",
      price: "₹52 lakh",
      source: "properties.csv, record P105, Row 1"
    },
    {
      label: "Record B", // Labeled record B to distinguish source lines properly
      name: "Hudco plaza P105",
      price: "₹56 lakh",
      source: "properties.csv, record P105, Row 2"
    }
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[1rem] text-slate-400 font-medium select-none">
        <h4 className="font-bold text-slate-700">Source evidence</h4>
        <span>2 illustrative records · Same property, different dates</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {records.map((rec, index) => (
          <Card key={index} className="bg-white border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-bold select-none">
                <span className="text-blue-600 flex items-center gap-1">📄 {rec.label}</span>
                <span className="text-slate-400">Demo dataset record</span>
              </div>
              <div className="space-y-3">
                <h5 className="text-[1rem] font-bold text-slate-800">{rec.name}</h5>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Listed price</span>
                  <span className="text-lg font-black text-slate-800 tracking-tight mt-0.5 block">{rec.price}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
              <p className="font-semibold text-slate-600">{rec.source}</p>
              <p className="mt-0.5">Retrieved from the supplied demo property dataset</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
