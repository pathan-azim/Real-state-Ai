import React from 'react';
import Card from '../ui/Card';

export default function MetricSection() {
  const metrics = [
    {
      value: '40',
      label: 'Sample Properties',
      description: 'Loaded in active database',
      icon: '📁',
      badge: 'MERN Stack Mock'
    },
    {
      value: '1',
      label: 'Demo Locality',
      description: 'Asara Chowk, Solapur',
      icon: '📍',
      badge: 'Active Scope'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="flex items-center justify-between bg-white border border-slate-200/60 p-6 overflow-hidden relative rounded-xl">
          <div className="absolute -right-4 -bottom-4 text-7xl opacity-[0.03] select-none pointer-events-none font-bold">
            {metric.icon}
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/40 px-2.5 py-1 rounded-md">
              {metric.badge}
            </span>
            <div className="flex items-baseline space-x-2 pt-1">
              <span className="text-4xl font-black text-slate-800 tracking-tight">
                {metric.value}
              </span>
              <span className="text-base font-bold text-slate-700">
                {metric.label}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-400">
              {metric.description}
            </p>
          </div>

          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-xl border border-slate-100 shrink-0">
            {metric.icon}
          </div>
        </Card>
      ))}
    </div>
  );
}
