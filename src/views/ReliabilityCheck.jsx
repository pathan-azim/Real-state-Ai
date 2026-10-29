import React from 'react';
import ConflictBanner from '../components/reliabilityCheckComponents/ConflictBanner';
import UserQuestionCard from '../components/reliabilityCheckComponents/UserQuestionCard';
import EvidenceGrid from '../components/reliabilityCheckComponents/EvidenceGrid';
import ConflictWarningBar from '../components/reliabilityCheckComponents/ConflictWarningBar';
import VerificationResult from '../components/reliabilityCheckComponents/VerificationResult';

export default function ReliabilityCheck() {
  return (
    <div className="space-y-6 max-w-8xl mx-auto pb-12">
      {/* View Title Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Reliability Check</h2>
          <p className="text-[1rem] text-slate-400 mt-1">
            Audit logs tracking record discrepancies handled automatically by the MCP retrieval tier.
          </p>
        </div>
      </div>

      {/* 1. Conflict Status Indicator */}
      <ConflictBanner />

      {/* 2. Target Question Context Box */}
      <UserQuestionCard question="What is the price of Hudco plaza P105?" />

      {/* 3. Conflicting Evidence Matrix Grid */}
      <EvidenceGrid />

      {/* 4. Warning Metric Box */}
      <ConflictWarningBar />

      {/* 5. Final Evaluation Response Summary */}
      <VerificationResult />
      
      {/* Dashboard Disclaimer Footer */}
      <div className="pt-4 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
        <span>RealEstate AI · MCP Verification Kernel operational</span>
        <span>Demo records, not live market data</span>
      </div>
    </div>
  );
}
