
import { useState, useCallback } from 'react';
import { FormData, GeneratedWebsite, GeneratedImages } from '../types';
import { generateWebsiteContent, generateImage } from '../services/geminiService';

export const useWebsiteGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [generatedData, setGeneratedData] = useState<GeneratedWebsite | null>(null);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImages | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateWebsite = useCallback(async (formData: FormData) => {
    setIsGenerating(true);
    setProgress(0);
    setError(null);
    setGeneratedData(null);
    setGeneratedImages(null);

    try {
      setStatusMessage("Analyzing your business profile...");
      setProgress(5);
      
      const content = await generateWebsiteContent(
        formData.industry, 
        formData.companyName, 
        formData.serviceArea, 
        formData.phone, 
        formData.brandColor
      );
      
      setStatusMessage("Designing your custom layout...");
      setProgress(25);
      setGeneratedData(content);

      setStatusMessage("Generating professional hero photography...");
      const heroImg = await generateImage(
        `Ultra-realistic commercial photography of a ${formData.industry} professional at work in ${formData.serviceArea}, cinematic wide-angle shot, dramatic natural lighting, high-end corporate aesthetic, photorealistic, professional workspace visible, depth of field, NO text overlays, NO graphic elements, clean composition, 16:9 aspect ratio`,
        "16:9"
      );
      setProgress(50);

      setStatusMessage("Capturing specialized equipment details...");
      const featureImg = await generateImage(
        `Professional ${formData.industry} equipment or specialized tools close-up photography, ultra-realistic commercial quality, dramatic lighting, photorealistic, high-end product photography aesthetic, sharp focus, NO text, NO graphics, clean background`,
        "4:3"
      );
      setProgress(75);

      setStatusMessage("Finalizing credentials and team imagery...");
      const credImg = await generateImage(
        `Professional ${formData.industry} company team with service vehicle, or completed high-end ${formData.industry} project, ultra-realistic commercial photography, professional uniforms, corporate aesthetic, photorealistic, natural daylight, NO visible text, NO graphic overlays, 16:9 aspect ratio`,
        "16:9"
      );
      
      setGeneratedImages({
        heroBackground: heroImg,
        featureHighlight: featureImg,
        credentialsShowcase: credImg,
      });

      setStatusMessage("Building your custom website...");
      setProgress(100);
      
      // Artificial delay to let user see 100%
      await new Promise(resolve => setTimeout(resolve, 800));
      
    } catch (err: any) {
      console.error("Website Generation Failed:", err);
      // Log more details if available
      if (err.message) console.error("Error details:", err.message);
      setError(`Failed to generate website: ${err.message || 'Unknown error'}. Please check your API configuration.`);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const resetGenerator = () => {
    setGeneratedData(null);
    setGeneratedImages(null);
    setProgress(0);
    setStatusMessage('');
    setError(null);
  };

  return {
    isGenerating,
    progress,
    statusMessage,
    generatedData,
    generatedImages,
    error,
    generateWebsite,
    resetGenerator
  };
};
