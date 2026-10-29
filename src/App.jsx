import React, { useState } from 'react';
import './App.css' // Global styles for the application
import Sidebar from './components/dashboardComponents/layout/Sidebar';
import Header from './components/dashboardComponents/layout/Header';
import Dashboard from './views/Dashboard';
import FindProperties from './views/FindProperties'; // Import the newly refactored view module
import CompareProperties from './views/CompareProperties';
import AiAssistant from './views/AiAssistant';
import ReliabilityCheck from './views/ReliabilityCheck';
export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderActiveView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onViewChange={setCurrentView} />;
      case 'find-properties':
        return <FindProperties />; // Renders the fully functional interactive view
      // case 'compare-properties':
      //   return <CompareProperties />;
      case 'ai-assistant':
        return <AiAssistant />;
      case 'reliability-check':
        return (
         <ReliabilityCheck />
        );
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f8fafc]">
      {/* Structural Left Navigation Menu */}
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Main Structural Right Workspace Container */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Universal Branding & Context Top Header */}
        <Header currentView={currentView} />

        {/* Scrollable View Content Section */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
}
