
import React from 'react';
import { GeneratedWebsite } from '../../types';
import Icon from '../Icon';

interface FeatureProps {
  data: GeneratedWebsite['featureHighlight'];
  image: string;
  brandColor: string;
}

const Feature: React.FC<FeatureProps> = ({ data, image, brandColor }) => {
  return (
    <section className="py-24 pb-20 bg-white overflow-hidden"> {/* Added bottom padding */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img src={image} alt="Features" className="rounded-lg shadow-2xl w-full h-[500px] object-cover" />
          </div>
          <div className="lg:w-1/2">
            <span style={{ color: brandColor }} className="font-bold text-sm tracking-widest uppercase mb-4 block">
              {data.badge}
            </span>
            <h2 className="text-[#1A1D2E] text-4xl font-extrabold mb-6 leading-tight">
              {data.headline}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {data.description}
            </p>
            <ul className="space-y-4 mb-6">
              {data.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div style={{ color: brandColor }} className="mt-1">
                    <Icon name="check-circle" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
