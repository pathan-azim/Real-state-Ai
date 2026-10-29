import React from 'react';

export default function Input({ 
  label, 
  error, 
  className = '', 
  id,
  ...props 
}) {
  return (
    <div className="w-full flex flex-col space-y-1.5">
      {label && (
        <label 
          htmlFor={id} 
          className="text-xs font-semibold uppercase tracking-wider text-slate-500"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full bg-slate-50 border text-sm text-slate-800 rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 placeholder:text-slate-400 ${
          error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/10' : 'border-slate-200'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-xs text-rose-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
