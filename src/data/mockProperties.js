export const mockProperties = [
  {
    id: "P101",
    name: "Green Residency",
    locality: "Asara Chowk, Solapur",
    bhk: 2,
    priceInLakhs: 42.5,
    areaSqFt: 950,
    possessionStatus: "Ready to Move",
    legalConflict: false,
    verificationDocumentId: "DOC-2026-ASR-01",
    imgUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"

  },
  {
    id: "P102",
    name: "Maruti Heights",
    locality: "Asara Chowk, Solapur",
    bhk: 3,
    priceInLakhs: 65.0,
    areaSqFt: 1400,
    possessionStatus: "Under Construction",
    legalConflict: false,
    verificationDocumentId: "DOC-2026-ASR-02",
    imgUrl:"https://plus.unsplash.com/premium_photo-1746888841272-f4df63c840a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: "P103",
    name: "Sai Fortune Tower",
    locality: "Asara Chowk, Solapur",
    bhk: 1,
    priceInLakhs: 28.0,
    areaSqFt: 620,
    possessionStatus: "Ready to Move",
    legalConflict: false,
    verificationDocumentId: "DOC-2026-ASR-03",
    imgUrl:"https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: "P104",
    name: "Balaji Vihar",
    locality: "Asara Chowk, Solapur",
    bhk: 2,
    priceInLakhs: 39.8,
    areaSqFt: 890,
    possessionStatus: "Under Construction",
    legalConflict: true, // Used to trigger warnings in the terminal
    verificationDocumentId: "DOC-2025-ASR-99",
    imgUrl:"https://images.unsplash.com/photo-1745761320791-5ae142edee8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: "P105",
    name: "Siddheshwar Enclave",
    locality: "Asara Chowk, Solapur",
    bhk: 3,
    priceInLakhs: 58.5,
    areaSqFt: 1250,
    possessionStatus: "Ready to Move",
    legalConflict: false,
    verificationDocumentId: "DOC-2026-ASR-05",
    imgUrl:"https://images.unsplash.com/photo-1748063578185-3d68121b11ff?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"

  }
];

// Helper functions to simulate database query lookups
export const getPropertyById = (id) => {
  return mockProperties.find(p => p.id.toLowerCase() === id.toLowerCase());
};

export const filterProperties = ({ minPrice, maxPrice, bhk, status }) => {
  return mockProperties.filter(p => {
    if (minPrice && p.priceInLakhs < minPrice) return false;
    if (maxPrice && p.priceInLakhs > maxPrice) return false;
    if (bhk && p.bhk !== parseInt(bhk)) return false;
    if (status && p.possessionStatus !== status) return false;
    return true;
  });
};
