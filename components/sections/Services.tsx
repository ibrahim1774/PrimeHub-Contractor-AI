
import React from 'react';
import { GeneratedWebsite } from '../../types';
import Icon from '../Icon';

interface ServicesProps {
  data: GeneratedWebsite['services'];
  brandColor: string;
}

const Services: React.FC<ServicesProps> = ({ data, brandColor }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <span style={{ color: brandColor }} className="font-bold text-sm tracking-widest uppercase mb-4 block">
          {data.badge}
        </span>
        <h2 className="text-[#1A1D2E] text-4xl font-extrabold mb-4">{data.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">{data.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {data.cards.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div style={{ color: brandColor }} className="mb-6">
                <Icon name={service.icon} size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1D2E]">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <a href="#" style={{ color: brandColor }} className="font-bold text-sm flex items-center gap-2 group">
                Book This Service <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
