import React, { useState } from 'react';
import PropertySearchDeck from '../components/propertiesComponents/PropertySearchDeck';
import PropertyResultsHeader from '../components/propertiesComponents/PropertyResultsHeader';
import PropertyCard from '../components/propertiesComponents/PropertyCard';
import EmptyResultsState from '../components/propertiesComponents/EmptyResultsState';
import PropertyDetails from './PropertyDetails'; // Import our new details component
import { mockProperties } from '../data/mockProperties';

export default function FindProperties() {
  // Navigation & Target Selection Hook
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  // Input Filtering States
  const [searchQuery, setSearchQuery] = useState('Asara Chowk');
  const [budget, setBudget] = useState('any');
  const [bhk, setBhk] = useState('any');
  const [possession, setPossession] = useState('all');

  // Multi-parameter database filter execution logic
  const filteredProperties = mockProperties.filter((property) => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    if (normalizedQuery) {
      const matchId = property.id.toLowerCase().includes(normalizedQuery);
      const matchName = property.name.toLowerCase().includes(normalizedQuery);
      const matchLoc = property.locality.toLowerCase().includes(normalizedQuery);
      if (!matchId && !matchName && !matchLoc) return false;
    }

    if (budget !== 'any') {
      const maxBudget = parseFloat(budget);
      if (property.priceInLakhs > maxBudget) return false;
    }

    if (bhk !== 'any' && property.bhk !== parseInt(bhk)) return false;
    if (possession !== 'all' && property.possessionStatus !== possession) return false;

    return true;
  });

  const handleClearFilters = () => {
    setSearchQuery('');
    setBudget('any');
    setBhk('any');
    setPossession('all');
  };

  // Safe Guard Catch: If a user selects a card, interrupt the dashboard to render the breakdown module instead
  if (selectedPropertyId) {
    return (
      <PropertyDetails 
        propertyId={selectedPropertyId} 
        onBack={() => setSelectedPropertyId(null)} 
      />
    );
  }

  return (
    <div className="space-y-6 max-w-8xl mx-auto">
      {/* Title Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Find your next property record</h2>
        <p className="text-[1rem] text-slate-400 mt-1">
          Search illustrative property data in Solapur workspace index parameters.
        </p>
      </div>

      {/* Modular Search Controller Pane */}
      <PropertySearchDeck 
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        budget={budget} setBudget={setBudget}
        bhk={bhk} setBhk={setBhk}
        possession={possession} setPossession={setPossession}
      />

      {/* Modular Metadata Summary Strip */}
      <PropertyResultsHeader 
        matchCount={filteredProperties.length} 
        locationTag={searchQuery || "All Locations"} 
        totalRecords={mockProperties.length}
      />

     {/* Grid Container Matrix */}
{filteredProperties.length > 0 ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&_img]:!h-72 [&_img]:!object-cover [&_img]:w-full [&_img]:block [&_.h-44]:!h-72">
    {filteredProperties.map((property) => (
      <PropertyCard 
        key={property.id} 
        property={property}
        onViewDetails={(p) => setSelectedPropertyId(p.id)}
      />
    ))}
  </div>
) : (
        <div className="bg-white rounded-xl border border-dashed border-slate-200 p-12 text-center text-[1rem] text-slate-400 font-medium">
          No matching data found inside current filtering metrics. Try broadening parameters.
        </div>
      )}

      {/* Modular Fallback Panel */}
      <EmptyResultsState 
        isVisible={filteredProperties.length === 0} 
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}
