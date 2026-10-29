import React from 'react';
import Card from '../dashboardComponents/ui/Card';

export default function UserQuestionCard({ question = "What is the price of Hudco plaza P105?" }) {
  return (
    <Card className="bg-white border border-slate-200 p-4 shadow-xs">
      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">💬 User Question</span>
      <p className="text-[1rem] font-semibold text-slate-700 mt-1.5">{question}</p>
    </Card>
  );
}
    