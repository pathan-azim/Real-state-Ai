import React from 'react';
import Card from '../ui/Card';

export default function WorkflowGuide() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Ask a Question',
      description: 'Input property keys or descriptive search requests (e.g. looking up Green Residency records).',
      icon: '💬',
      badgeColor: 'bg-blue-500'
    },
    {
      stepNumber: '02',
      title: 'Retrieve Property Data',
      description: 'The platform pulls corresponding verification source items using decoupled MCP-driven protocols.',
      icon: '📂',
      badgeColor: 'bg-indigo-500'
    },
    {
      stepNumber: '03',
      title: 'Verify the Answer',
      description: 'The engine flags structural documentation alignment errors to guarantee reliable reporting metrics.',
      icon: '🛡️',
      badgeColor: 'bg-emerald-500'
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Platform Processing Mechanics
        </h4>
        <p className="text-base text-slate-500 mt-1">
          How the system parses workspace files to safeguard response credibility.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {steps.map((step, index) => (
          <Card key={index} className="relative border border-slate-200/60 bg-white/70 backdrop-blur-sm p-6 flex flex-col justify-between rounded-xl">
            <div className="absolute top-4 right-4 text-xs font-black text-slate-300 tracking-wider">
              STEP {step.stepNumber}
            </div>

            <div className="space-y-4">
              <div className={`w-10 h-10 rounded-xl ${step.badgeColor} text-white flex items-center justify-center text-base shadow-sm`}>
                {step.icon}
              </div>

              <div className="space-y-2">
                <h5 className="text-base font-bold text-slate-800">
                  {step.title}
                </h5>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            
            {index < 2 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300 font-bold text-xl select-none">
                →
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
