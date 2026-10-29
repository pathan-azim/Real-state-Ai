import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function FeatureGrid({ onViewChange }) {
  const options = [
    {
      title: 'Find Properties',
      description: 'Browse the structural database records using fixed query filters like budget boundaries, BHK sizes, and possession timelines.',
      icon: '🔍',
      actionLabel: 'Open Database Browser',
      targetView: 'find-properties',
      colorClass: 'group-hover:text-blue-600 bg-blue-50 text-blue-600'
    },
    {
      title: 'Ask AI Assistant',
      description: 'Start a flexible conversational prompt thread to evaluate property files, perform contextual queries, and inspect raw backing source records.',
      icon: '✨',
      actionLabel: 'Launch Chat Console',
      targetView: 'ai-assistant',
      colorClass: 'group-hover:text-indigo-600 bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {options.map((option, index) => (
        <Card 
          key={index}
          onClick={() => onViewChange(option.targetView)}
          className="group flex flex-col justify-between hover:shadow-lg border-slate-200 hover:border-slate-300/80 p-6 transform transition-all duration-300 rounded-xl"
        >
          <div className="space-y-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold transition-colors ${option.colorClass}`}>
              {option.icon}
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {option.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {option.description}
              </p>
            </div>
          </div>

          <div className="pt-6 mt-auto">
            <Button 
              variant="outline" 
              className="w-full justify-between text-sm font-bold py-2.5 rounded-xl group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300"
            >
              <span>{option.actionLabel}</span>
              <span>→</span>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
