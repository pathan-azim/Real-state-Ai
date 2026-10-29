import React from 'react';
import ChatHeader from '../components/Ai_assistantComponents/ChatHeader';
import MessageList from '../components/Ai_assistantComponents/MessageList';
import ChatInputDeck from '../components/Ai_assistantComponents/ChatInputDeck';
import SupportingEvidenceSidebar from '../components/Ai_assistantComponents/SupportingEvidenceSidebar';

export default function AiAssistant() {
  const handleNewChat = () => {
    console.log("Initializing a fresh workspace conversational thread context...");
  };

  const handleSendMessage = (text) => {
    console.log("Appended new conversational text query parameter hook:", text);
  };

  return (
    <div className="space-y-6 max-w-full  mx-8 pb-12 h-[90vh] overflow-y-auto select-none">
      {/* Title Subheader Row Grid */}
      <div className="flex items-baseline justify-between border-b border-slate-200 pb-4 select-none">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Ask. Retrieve. Verify.</h2>
          <p className="text-xs text-slate-400 mt-1">
            Get a record-backed answer and inspect the evidence used to generate it.
          </p>
        </div>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
          Single-record example
        </span>
      </div>

      {/* Main Responsive Chat Layout Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12  gap-8 items-start">
        
        {/* Left Double-Column Frame: Active Chat Loop Stream */}
        <div className=" lg:col-span-8 bg-white rounded-xl border border-slate-200 p-5 shadow-xs h-[70vh] flex flex-col justify-between">
          <ChatHeader onNewChat={handleNewChat} />
          <MessageList />
          <ChatInputDeck onSendMessage={handleSendMessage} />
        </div>

        {/* Right Single Column Frame: Backing Documents Inspection Sidebar */}
        <div className="lg:col-span-4">
          <SupportingEvidenceSidebar />
        </div>

      </div>
    </div>
  );
}
