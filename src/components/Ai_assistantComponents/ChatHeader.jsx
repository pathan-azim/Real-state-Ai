import React from 'react';
import Button from '../dashboardComponents/ui/Button';

export default function ChatHeader({ onNewChat }) {
  return (
    <div className="flex items-center w-full justify-between border-b border-slate-100 pb-3 mb-4 select-none">
      <div className="flex items-center space-x-2 text-[1.2rem] font-bold text-slate-700">
        <span>📄</span>
        <span>Property conversation</span>
      </div>
      <Button 
        onClick={onNewChat}
        variant="outline" 
        className="bg-white border-slate-200 hover:border-slate-300 text-xs font-bold px-3 py-1 h-7 rounded-md"
      >
        New chat +
      </Button>
    </div>
  );
}
