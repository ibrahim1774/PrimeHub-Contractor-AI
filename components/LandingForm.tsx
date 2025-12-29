
import React, { useState } from 'react';
import { FormData } from '../types';

interface LandingFormProps {
  onGenerate: (data: FormData) => void;
}

const LandingForm: React.FC<LandingFormProps> = ({ onGenerate }) => {
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    companyName: '',
    serviceArea: '',
    phone: '',
    brandColor: '#3B82F6' // Default blue accent
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-white flex flex-col font-inter">
      {/* Navigation Header */}
      <header className="px-6 md:px-8 py-3 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="bg-white text-black p-0.5 rounded font-bold">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-2 10h3L12 22l2-10h-3l2-10z"/></svg>
          </div>
          <span className="font-black tracking-tighter text-base uppercase">PRIMEHUB.AI</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-6 md:py-8 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-blue-900/10 blur-[70px] rounded-full -z-10"></div>
        
        <div className="text-center max-w-xl mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-2 leading-tight">
            Generate your <br className="hidden md:block" /> custom home service website <br />
            <span className="text-blue-500 italic">under a minute.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 font-medium mb-1.5">Create a sample mockup of your custom site.</p>
          <p className="text-[7px] text-gray-500 uppercase tracking-widest max-w-[280px] mx-auto leading-relaxed px-4">
            THIS IS A SAMPLE GENERATED WEBSITE THAT'S CUSTOM TO YOUR BUSINESS. THE PRIMEHUB TEAM WILL DESIGN A SIMILAR LOOKING SITE AFTER PURCHASE.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-lg bg-[#0F1219]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5 md:p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="space-y-1 border-b border-white/10 pb-1">
                <label className="text-[7px] font-bold text-white uppercase tracking-widest block">Service Industry</label>
                <input
                  required
                  type="text"
                  placeholder="Plumbing, HVAC, etc..."
                  className="w-full bg-transparent text-white placeholder-gray-700 focus:outline-none text-sm"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                />
              </div>
              <div className="space-y-1 border-b border-white/10 pb-1">
                <label className="text-[7px] font-bold text-white uppercase tracking-widest block">Company Name</label>
                <input
                  required
                  type="text"
                  placeholder="Enter business name"
                  className="w-full bg-transparent text-white placeholder-gray-700 focus:outline-none text-sm"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              <div className="space-y-1 border-b border-white/10 pb-1">
                <label className="text-[7px] font-bold text-white uppercase tracking-widest block">Service Area</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dallas, TX"
                  className="w-full bg-transparent text-white placeholder-gray-700 focus:outline-none text-sm"
                  value={formData.serviceArea}
                  onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                />
              </div>
              <div className="space-y-1 border-b border-white/10 pb-1">
                <label className="text-[7px] font-bold text-white uppercase tracking-widest block">Contact Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full bg-transparent text-white placeholder-gray-700 focus:outline-none text-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-white text-black font-bold py-3 px-8 rounded-full text-[9px] uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.08)] active:scale-95"
              >
                Generate My Website <span className="text-base">→</span>
              </button>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 md:gap-8 opacity-25 grayscale contrast-200 pointer-events-none">
          <span className="font-black text-base md:text-lg tracking-tighter uppercase">TRUSTED</span>
          <span className="font-black text-base md:text-lg tracking-tighter uppercase">BUILD</span>
          <span className="font-black text-base md:text-lg tracking-tighter uppercase">SERVICE</span>
          <span className="font-black text-base md:text-lg tracking-tighter uppercase">CONSTRUCT</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-5 border-t border-white/5 w-full mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <span className="font-black tracking-tighter text-[11px] uppercase">PRIMEHUB.AI</span>
          </div>
          <div className="text-[8px] text-gray-600 uppercase tracking-widest text-center">
            © 2024 HIGH IMPACT CREATIVE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 text-[8px] text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white transition-colors">SUPPORT</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingForm;
