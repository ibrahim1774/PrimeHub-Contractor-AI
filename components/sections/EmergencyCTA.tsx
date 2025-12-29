
import React from 'react';
import { GeneratedWebsite } from '../../types';

interface EmergencyCTAProps {
  data: GeneratedWebsite['emergencyCTA'];
  brandColor: string;
}

const EmergencyCTA: React.FC<EmergencyCTAProps> = ({ data, brandColor }) => {
  return (
    <section className="py-20 bg-[#0F111A] text-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto">
          {data.headline}
        </h2>
        <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {data.subtext}
        </p>
        <button 
          style={{ backgroundColor: brandColor }}
          className="px-12 py-5 text-white font-bold text-xl rounded shadow-2xl hover:brightness-110 active:scale-95 transition-all"
        >
          {data.buttonText}
        </button>
      </div>
    </section>
  );
};

export default EmergencyCTA;
