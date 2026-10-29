import React, { useState } from 'react';

export default function ChatInputDeck({ onSendMessage }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (onSendMessage) onSendMessage(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className=" text-[1rem] space-y-2 select-none pt-2">
      <div className="relative flex items-center">
        <input 
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask a follow-up about this property..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-[1rem] font-medium text-slate-700 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/5 transition-all shadow-inner placeholder:text-slate-400/80"
        />
        <button 
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-[1rem] shadow-xs transition-colors cursor-pointer"
        >
          ↑
        </button>
      </div>
      <p className="text-[1rem] text-slate-400/90 text-center font-medium">
        Answers are limited to the available demo data. Review sources before relying on them.
      </p>
    </form>
  );
}
