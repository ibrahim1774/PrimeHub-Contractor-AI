
import React, { useState, useEffect } from 'react';
import { GeneratedWebsite, GeneratedImages } from '../types';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Feature from './sections/Feature';
import Process from './sections/Process';
import EmergencyCTA from './sections/EmergencyCTA';
import Credentials from './sections/Credentials';
import Contact from './sections/Contact';
import OfferPopup from './sections/OfferPopup';
import Icon from './Icon';

interface PreviewSiteProps {
  data: GeneratedWebsite;
  images: GeneratedImages;
  onExit: () => void;
}

const PreviewSite: React.FC<PreviewSiteProps> = ({ data, images, onExit }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen relative font-inter overflow-x-hidden">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-100 py-3 px-4 md:px-6 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={onExit}
            className="text-gray-600 font-medium px-3 md:px-4 py-2 border border-gray-200 rounded hover:bg-gray-50 flex items-center gap-2 text-sm md:text-base transition-colors"
          >
            <Icon name="arrow-left" size={16} /> <span className="hidden sm:inline font-bold">EXIT PREVIEW</span>
          </button>
          
          <div className="flex flex-col border-l border-gray-200 pl-4">
            <span className="font-black tracking-tighter text-base uppercase leading-none text-[#1A1D2E]">
              {data.companyName}
            </span>
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
              PREVIEW MODE
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           <span className="font-bold text-gray-500 tracking-widest text-[9px] uppercase">Live AI Generation</span>
        </div>
        
        {/* Clickable Phone CTA in header */}
        <a 
          href={`tel:${data.phone}`}
          style={{ backgroundColor: data.brandColor }}
          className="text-white font-black px-4 md:px-6 py-2.5 rounded shadow-lg hover:brightness-110 flex items-center gap-2 whitespace-nowrap text-xs md:text-sm tracking-widest uppercase transition-all active:scale-95"
        >
          <Icon name="phone" size={16} />
          <span>{data.phone}</span>
        </a>
      </div>

      <main>
        <Hero data={data.hero} image={images.heroBackground} brandColor={data.brandColor} location={data.location} />
        <Services data={data.services} brandColor={data.brandColor} />
        <Feature data={data.featureHighlight} image={images.featureHighlight} brandColor={data.brandColor} />
        <Process data={data.processSteps} brandColor={data.brandColor} />
        <EmergencyCTA data={data.emergencyCTA} brandColor={data.brandColor} />
        <Credentials data={data.credentials} image={images.credentialsShowcase} brandColor={data.brandColor} industry={data.industry} location={data.location} />
        <Contact data={data.contactForm} brandColor={data.brandColor} phone={data.phone} industry={data.industry} location={data.location} />
      </main>

      {/* Floating Sticky Phone Button for Mobile/Scroll persistence */}
      <div className="fixed bottom-6 left-6 z-[55] lg:hidden">
        <a 
          href={`tel:${data.phone}`}
          style={{ backgroundColor: data.brandColor }}
          className="w-14 h-14 flex items-center justify-center text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-bounce"
        >
          <Icon name="phone" size={24} />
        </a>
      </div>

      {/* Offer Popup - non-exitable premium style */}
      {showPopup && <OfferPopup />}
    </div>
  );
};

export default PreviewSite;
