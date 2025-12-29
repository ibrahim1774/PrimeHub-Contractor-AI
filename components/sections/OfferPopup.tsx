
import React from 'react';

const OfferPopup: React.FC = () => {
  return (
    <div className="fixed bottom-12 right-6 md:right-12 z-[60] animate-fade-in max-w-[220px]"> {/* Reduced width approx 30% */}
      <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 flex flex-col items-center text-center border border-gray-100">
        <h3 className="text-[#000] font-black text-lg uppercase tracking-tighter mb-3 leading-tight">
          BUY THIS WEBSITE
        </h3>
        
        <p className="text-black font-extrabold text-[8px] uppercase tracking-wide leading-relaxed mb-5 px-1 opacity-90">
          Only $20/month for website hosting. The Prime Hub team handles all edits, confirms your design before launch
        </p>
        
        <button className="w-full bg-[#05070A] text-white font-black text-[10px] py-3 rounded-[12px] uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all">
          CLAIM SITE NOW
        </button>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default OfferPopup;
