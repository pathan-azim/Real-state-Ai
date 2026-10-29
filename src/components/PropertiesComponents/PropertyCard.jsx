import React from 'react';
import Card from '../dashboardComponents/ui/Card';

export default function PropertyCard({ property, onViewDetails }) {
  return (
    <Card className=" p-0 overflow-hidden bg-white border border-slate-200 flex flex-col justify-between shadow-sm group">
      <div>
        {/* Visual Preview Canvas */}
       {/* Visual Preview Canvas with Increased Height */}
<div className="h-64 w-full bg-slate-100 relative overflow-hidden border-b border-slate-100">
  <img 
    src={property.imgUrl || "https://unsplash.com"} 
    alt={property.name}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-medium px-2 py-0.5 rounded text-slate-500 shadow-xs select-none">
    Illustrative image
  </span>
</div>


        {/* Core Metadata Container */}
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div className="min-w-0 flex-1 pr-2">
              <h4 className="text-[1rem] font-bold text-slate-800 truncate">{property.name}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 truncate">📍 {property.locality}</p>
            </div>
            <span className="text-[1rem] font-bold bg-slate-50 text-slate-400 px-2 py-0.5 rounded border border-slate-100 shrink-0">
              {property.id}
            </span>
          </div>

          {/* Pricing Deck */}
          <div className="text-lg font-extrabold text-slate-800 tracking-tight pt-1">
            ₹{property.priceInLakhs ? `${property.priceInLakhs} lakh` : property.price}
          </div>

          {/* Configuration Metrics */}
          <div className="flex items-center space-x-4 text-[1rem] font-semibold text-slate-500 pt-1">
            <div className="flex text-[1rem] items-center space-x-1">
              <span className="text-[1rem]">🛏️</span> <span>{property.bhk} BHK</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-[1rem]">📐</span> <span>{property.areaSqFt || property.sqft} sq ft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Drawer Footer */}
      <div className="p-4 pt-0">
        <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[1rem]">
          <span className="text-slate-400 font-medium bg-slate-50 px-2 py-0.5 rounded text-[1rem] select-none">
            Demo record
          </span>
          <button 
            onClick={() => onViewDetails && onViewDetails(property)}
            className="font-bold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View Details</span>
            <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </Card>
  );
}
