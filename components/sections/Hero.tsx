
import React from 'react';
import { GeneratedWebsite } from '../../types';
import Icon from '../Icon';

interface HeroProps {
  data: GeneratedWebsite['hero'];
  image: string;
  brandColor: string;
  location: string;
}

const Hero: React.FC<HeroProps> = ({ data, image, brandColor, location }) => {
  return (
    <section className="relative min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Hero Work" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-[50px]">
        <div className="max-w-3xl text-left">
          <span 
            style={{ color: brandColor }}
            className="inline-block font-bold text-sm tracking-widest uppercase mb-4"
          >
            {location} Based • Trusted Experts
          </span>
          
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            <span className="block">{data.headline.line1}</span>
            <span style={{ color: brandColor }} className="block">{data.headline.line2}</span>
            <span className="block">{data.headline.line3}</span>
          </h1>

          <p className="text-gray-300 text-xl max-w-2xl mb-10 leading-relaxed">
            {data.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              style={{ backgroundColor: brandColor }}
              className="px-8 py-5 text-white font-bold text-lg rounded shadow-xl hover:brightness-110"
            >
              Get Immediate Service
            </button>
            <button className="px-8 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded hover:bg-white hover:text-black transition-colors">
              Explore Our Expertise
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.trustIndicators.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div style={{ backgroundColor: brandColor }} className="w-14 h-14 shrink-0 rounded-full text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                  <Icon name={item.icon} size={24} />
                </div>
                <div>
                  <div className="text-white font-black uppercase text-xs tracking-wider leading-tight">{item.label}</div>
                  <div className="text-gray-400 text-[11px] font-medium mt-0.5">{item.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
