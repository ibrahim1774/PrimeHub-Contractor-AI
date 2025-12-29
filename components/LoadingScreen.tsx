
import React from 'react';

interface LoadingScreenProps {
  progress: number;
  statusMessage: string;
  companyName?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress, statusMessage, companyName }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#05070A] flex flex-col items-center justify-center p-4 text-center font-inter overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/5 blur-[80px] rounded-full -z-10"></div>

      {/* Central Spinner Icon */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-blue-500 animate-spin"></div>
        
        {/* Inner static bolt circle */}
        <div className="absolute w-12 h-12 rounded-full border border-white/5 flex items-center justify-center">
          <div className="text-blue-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-2 10h3L12 22l2-10h-3l2-10z"/></svg>
          </div>
        </div>
      </div>
      
      <div className="max-w-md mb-6">
        <h2 className="text-sm md:text-base font-bold text-white mb-2 leading-tight">
          {statusMessage.includes('layout') ? statusMessage : `Drafting high-conversion layout for ${companyName || 'your business'}...`}
        </h2>
        <p className="text-gray-600 font-bold uppercase tracking-[0.2em] text-[6px]">
          OUR AI MODELS ARE CRAFTING YOUR LEGACY
        </p>
      </div>

      <div className="w-full max-w-[240px] mb-8">
        <div className="bg-gray-900/50 rounded-full h-[3px] overflow-hidden mb-2">
          <div 
            className="bg-blue-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[6px] font-bold uppercase tracking-[0.2em]">
          <span className="text-blue-500/60">GENERATION</span>
          <span className="text-white/80">{progress}%</span>
        </div>
      </div>

      {/* Status Pill */}
      <div className="bg-[#0F1219] border border-white/5 rounded-full px-4 py-2 flex items-center gap-3 shadow-xl">
        <div className="flex gap-1">
          <div className="w-0.5 h-0.5 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-0.5 h-0.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        </div>
        <div className="text-[7px] text-gray-500 font-bold uppercase tracking-widest leading-none">
          {statusMessage.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
