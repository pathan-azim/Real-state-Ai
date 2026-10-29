import React from 'react';
import Card from '../components/dashboardComponents/ui/Card';
import Button from '../components/dashboardComponents/ui/Button';

export default function PropertyDetails({ onBack }) {
  // Hardcoded visual mockup data matching P101 "Green Residency" from the image layout
  const property = {
    id: "P101",
    name: "Green Residency",
    locality: "Asra Chowk, Solapur",
    price: "₹52 lakh",
    type: "Apartment",
    bhk: "2 BHK",
    sqft: "1,120 sq ft",
    possession: "December 2027",
    imgUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      
      {/* Top Breadcrumb & Return Action Header */}
      <div className="flex items-center justify-between select-none">
        <div className="flex items-center space-x-2 text-[1rem] font-medium text-slate-400">
          <span className="hover:underline cursor-pointer" onClick={onBack}>Find Properties</span>
          <span>/</span>
          <span className="text-slate-600 font-bold">{property.id}</span>
        </div>
        <Button 
          onClick={onBack}
          className="bg-blue-600 hover:bg-blue-700 text-[1rem] font-bold px-4 py-2 flex items-center gap-1.5 shadow-sm shadow-blue-600/10"
        >
          <span>←</span> <span>Back to results</span>
        </Button>
      </div>

      {/* Main Structural Twin Columns Split Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: Image Canvas Carousel */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden relative shadow-sm h-[380px]">
          <img 
            src={property.imgUrl} 
            alt={property.name} 
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-xs text-[10px] text-white/90 font-medium px-2 py-0.5 rounded shadow-xs select-none">
            Not Real image
          </span>
          {/* Mock Slide Pagination Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-slate-900/40 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            <button className="text-white text-[1rem] font-bold pl-1 hover:scale-105 transition-transform">➔</button>
          </div>
        </div>

        {/* Right Side: Core Descriptive Headings Block */}
        <Card className="lg:col-span-5 border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-4">
            <span className="text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-1 rounded-md tracking-wide uppercase select-none w-fit block">
              Demo Record
            </span>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">{property.name}</h3>
              <p className="text-[1rem] text-slate-400 font-medium flex items-center gap-1">
                📍 {property.locality}
              </p>
              <p className="text-[10px] text-slate-400 font-bold bg-slate-50 border border-slate-100 px-2 py-0.5 rounded w-fit mt-1">
                Property ID: {property.id}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Price</span>
              <div className="text-3xl font-black text-slate-800 tracking-tight">{property.price}</div>
              <p className="text-[10px] text-slate-400 font-medium italic">
                Illustrative demo data · not a verified listing
              </p>
            </div>
          </div>
        </Card>

      </div>

      {/* Secondary Lower Technical Feature Split Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Double-Wide Block: Specifications Grid */}
        <Card className="lg:col-span-8 bg-white border border-slate-200 p-6 shadow-sm">
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800">Property Overview</h4>
            <p className="text-[11px] text-slate-400 mt-0.5">Specifications from the illustrative demo record:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
            {/* Spec Entry: Type */}
            <div className="space-y-1">
              <div className="text-sm text-slate-400">🏢</div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Property Type</p>
              <p className="text-[1rem] font-bold text-slate-700">{property.type}</p>
            </div>
            {/* Spec Entry: BHK */}
            <div className="space-y-1">
              <div className="text-sm text-slate-400">🛏️</div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Bedrooms</p>
              <p className="text-[1rem] font-bold text-slate-700">{property.bhk}</p>
            </div>
            {/* Spec Entry: Size */}
            <div className="space-y-1">
              <div className="text-sm text-slate-400">📐</div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Area</p>
              <p className="text-[1rem] font-bold text-slate-700">{property.sqft}</p>
            </div>
            {/* Spec Entry: Date */}
            <div className="space-y-1 pt-2 md:pt-0">
              <div className="text-sm text-slate-400">📅</div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Possession Date</p>
              <p className="text-[1rem] font-bold text-slate-700">{property.possession}</p>
            </div>
            {/* Spec Entry: Locality */}
            <div className="space-y-1 pt-2 md:pt-0">
              <div className="text-sm text-slate-400">📍</div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Locality</p>
              <p className="text-[1rem] font-bold text-slate-700">{property.locality}</p>
            </div>
            {/* Spec Entry: ID */}
            <div className="space-y-1 pt-2 md:pt-0">
              <div className="text-sm text-slate-400">#</div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Property ID</p>
              <p className="text-[1rem] font-bold text-slate-700">{property.id}</p>
            </div>
          </div>
        </Card>

        {/* Right Single Block: Verification Status */}
        <Card className="lg:col-span-4 bg-white border border-slate-200 p-6 shadow-sm min-h-[195px] flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
              <span>📄</span> Verification Status
            </h4>
          </div>
          <div className="p-4 border border-dashed border-slate-200 rounded-lg text-center text-[1rem] text-slate-400 mt-4 bg-slate-50/50">
            [Verification signature hashes match ledger state signatures]
          </div>
        </Card>

      </div>

      {/* Bottom Layout Sticky Action Panel Footer */}
      <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
        <Button 
          onClick={onBack}
          variant="outline" 
          className="bg-white border-slate-200 text-slate-700 font-bold text-[1rem] h-10 px-6 w-full sm:w-auto"
        >
          ← Back to results
        </Button>
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[1rem] h-10 px-6 flex items-center gap-1.5 shadow-sm shadow-blue-600/10 w-full sm:w-auto justify-center"
        >
          <span>💬</span> <span>Ask AI about property →</span>
        </Button>
      </div>

    </div>
  );
}
