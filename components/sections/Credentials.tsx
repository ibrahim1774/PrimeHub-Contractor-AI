
import React from 'react';
import { GeneratedWebsite } from '../../types';
import Icon from '../Icon';

interface CredentialsProps {
  data: GeneratedWebsite['credentials'];
  image: string;
  brandColor: string;
  industry: string;
  location: string;
}

const Credentials: React.FC<CredentialsProps> = ({ data, image, brandColor, industry, location }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <img src={image} alt="Credentials Team" className="rounded-lg shadow-xl w-full h-[500px] object-cover" />
          </div>
          <div className="lg:w-1/2">
            <span style={{ color: brandColor }} className="font-bold text-sm tracking-widest uppercase mb-4 block">
              {data.badge}
            </span>
            <h2 className="text-[#1A1D2E] text-4xl font-extrabold mb-6 leading-tight">
              Your Trusted {location} {industry} Authority
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {data.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {data.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div style={{ color: brandColor }}>
                    <Icon name="check" size={24} />
                  </div>
                  <span className="text-gray-700 font-bold text-lg tracking-tight uppercase">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-8 border border-gray-100 shadow-inner">
              <div className="text-center sm:text-left">
                <div className="text-[#1A1D2E] text-xs font-black uppercase tracking-widest mb-1.5">HIGHLY RATED</div>
                <div className="flex justify-center sm:justify-start gap-1 mb-4"> {/* Increased padding below stars */}
                  <span className="text-blue-500 text-3xl">★★★★★</span>
                </div>
                <div className="text-gray-500 font-bold text-sm">5-Star Reviews</div>
              </div>
              <div className="w-px h-16 bg-gray-200 hidden sm:block" />
              <div className="text-[#1A1D2E] text-sm font-black uppercase tracking-widest text-center sm:text-left flex-1">
                {data.certificationText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
