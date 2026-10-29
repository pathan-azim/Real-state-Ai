import React from 'react';

export default function MessageList() {
  return (
    <div className="space-y-6 flex-1 overflow-y-auto pr-1 h-[100vh]">
      {/* User Prompt Message Bubble Alignment */}
      <div className="flex flex-col items-end space-y-1">
        <span className="text-[1rem] font-bold text-slate-400 mr-2 uppercase tracking-wide">You</span>
        <div className="max-w-[85%] bg-slate-100 text-slate-700 text-[1rem] font-medium px-4 py-3 rounded-2xl rounded-tr-none shadow-xs leading-relaxed">
          What is the price and possession date of Green Residency P101 & is the possession date accurate ?
        </div>
      </div>

      {/* AI Assistant Core Responding Block */}
      <div className="flex items-start space-x-3">
        {/* System Spark Icon Indicator */}
        <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white text-[1rem] shrink-0 shadow-sm shadow-blue-600/20 mt-4 select-none">
          ✨
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between text-[1rem] font-bold select-none px-1">
            <span className="text-slate-800 font-extrabold">RealEstate AI</span>
            <span className="text-slate-400">Demo response</span>
          </div>

          {/* Text Message Response Canvas */}
          <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 shadow-xs space-y-4">
            <p className="text-[1rem] font-bold text-slate-700 leading-relaxed">
              Green Residency P101 is listed at <span className="text-slate-900 font-extrabold">₹52 lakh</span>. Its possession date is recorded as <span className="text-slate-900 font-extrabold">December 2027</span>.
            </p>

            {/* Verification Button Call Actions */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <button className="text-[1rem] font-bold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors text-left sm:text-center cursor-pointer">
                View Verification Details →
              </button>
            </div>

            {/* Document Grounded Metadata Verification Badges */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center space-x-1.5 text-[1rem] font-bold text-emerald-700 bg-emerald-50 w-fit px-2 py-0.5 rounded border border-emerald-100/50 select-none">
                <span>🟢</span> <span>Supported by retrieved demo record</span>
              </div>

              {/* Source Document File Target Reference Block */}
              <div className="flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-lg px-3 py-2 text-[1rem] font-medium text-slate-500 cursor-pointer transition-colors group">
                <div className="flex items-center space-x-2">
                  <span>📄</span>
                  <span className="font-semibold text-slate-600">properties.csv · Record P101</span>
                </div>
                <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform text-[1rem]">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
