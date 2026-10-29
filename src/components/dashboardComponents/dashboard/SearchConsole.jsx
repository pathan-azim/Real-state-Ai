import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function SearchConsole({ onSearchSubmit }) {
  const [query, setQuery] = useState('');

  const samplePrompts = [
    "What is the price of Green Residency P101?",
    "Show me 2 BHK flats under ₹45 Lakhs in Asara Chowk",
    "Are there any legal conflicts on file for property P104?"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (onSearchSubmit) onSearchSubmit(query);
  };

  return (
    <Card className="border-l-4 border-l-blue-600 shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <span>✨</span> Ask AI Assistant
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Query local demo dataset records backed by source document reliability metrics.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-end">
          <div className="flex-1 w-full">
            <Input
              type="text"
              placeholder="Enter property ID, structural parameters, or lookup queries..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-white text-base py-3 px-4 rounded-xl"
            />
          </div>
          <Button type="submit" variant="primary" className="h-[48px] text-base px-6 shrink-0 w-full sm:w-auto font-bold rounded-xl">
            Ask Assistant →
          </Button>
        </div>

        {/* Suggested Queries Section */}
        <div className="pt-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
            Suggested Quick-Start Queries:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {samplePrompts.map((prompt, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setQuery(prompt)}
                className="text-sm text-slate-600 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 hover:border-blue-200 px-4 py-2 rounded-xl transition-all text-left font-medium"
              >
                💡 {prompt}
              </button>
            ))}
          </div>
        </div>
      </form>
    </Card>
  );
}
