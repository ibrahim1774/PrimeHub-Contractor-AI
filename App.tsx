
import React, { useState } from 'react';
import LandingForm from './components/LandingForm';
import LoadingScreen from './components/LoadingScreen';
import PreviewSite from './components/PreviewSite';
import { useWebsiteGenerator } from './hooks/useWebsiteGenerator';
import { FormData } from './types';

const App: React.FC = () => {
  const { 
    isGenerating, 
    progress, 
    statusMessage, 
    generatedData, 
    generatedImages, 
    error, 
    generateWebsite, 
    resetGenerator 
  } = useWebsiteGenerator();

  const [lastUsedName, setLastUsedName] = useState('');

  const handleGenerate = (data: FormData) => {
    setLastUsedName(data.companyName);
    generateWebsite(data);
  };

  // If currently generating, show loading screen
  if (isGenerating) {
    return <LoadingScreen progress={progress} statusMessage={statusMessage} companyName={lastUsedName} />;
  }

  // If generation complete and data exists, show preview
  if (generatedData && generatedImages) {
    return (
      <PreviewSite 
        data={generatedData} 
        images={generatedImages} 
        onExit={resetGenerator} 
      />
    );
  }

  // Otherwise show the landing form
  return (
    <div className="relative">
      <LandingForm onGenerate={handleGenerate} />
      
      {error && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg z-[100]">
          {error}
        </div>
      )}
    </div>
  );
};

export default App;
