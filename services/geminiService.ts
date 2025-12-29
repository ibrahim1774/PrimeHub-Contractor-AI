
import { GeneratedWebsite } from "../types";

/**
 * Calls the internal Vercel Serverless Function to generate website content.
 * This keeps the API key secure on the server.
 */
export const generateWebsiteContent = async (
  industry: string, 
  companyName: string, 
  location: string, 
  phone: string, 
  brandColor: string
): Promise<GeneratedWebsite> => {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'text',
      payload: { industry, companyName, location, phone, brandColor }
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to generate website content');
  }

  return response.json();
};

/**
 * Calls the internal Vercel Serverless Function to generate an image.
 */
export const generateImage = async (
  prompt: string, 
  aspectRatio: "1:1" | "16:9" | "3:4" | "4:3" | "9:16" = "1:1"
): Promise<string> => {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'image',
      payload: { prompt, aspectRatio }
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to generate image');
  }

  const result = await response.json();
  return result.data;
};
