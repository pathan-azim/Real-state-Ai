import React from 'react';

export default function Card({ children, className = '', onClick }) {
  const isClickable = !!onClick;
  
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border border-slate-200/80 p-6 transition-all duration-200 ${
        isClickable 
          ? 'cursor-pointer hover:shadow-md hover:border-slate-300 active:scale-[0.99]' 
          : 'shadow-sm shadow-slate-100/50'
      } ${className}`}
    >
      {children}
    </div>
  );
}
