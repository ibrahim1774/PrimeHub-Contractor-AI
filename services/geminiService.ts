
import { GeneratedWebsite } from "../types";

export const generateWebsiteContent = async (
  industry: string, 
  companyName: string, 
  location: string, 
  phone: string, 
  brandColor: string
): Promise<GeneratedWebsite> => {
  try {
    const response = await fetch('/api/generate-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ industry, companyName, location, phone, brandColor })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to synthesize content');
    }

    return await response.json();
  } catch (error) {
    console.error("Content generation error:", error);
    throw error;
  }
};

export const generateImage = async (
  prompt: string, 
  aspectRatio: "1:1" | "16:9" | "3:4" | "4:3" | "9:16" = "1:1"
): Promise<string> => {
  try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, aspectRatio })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to synthesize image');
    }

    const data = await response.json();
    return data.image;
  } catch (error) {
    console.error("Image generation error:", error);
    throw error;
  }
};
