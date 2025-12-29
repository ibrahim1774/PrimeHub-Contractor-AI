
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedWebsite } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWebsiteContent = async (industry: string, companyName: string, location: string, phone: string, brandColor: string): Promise<GeneratedWebsite> => {
  const prompt = `Generate a high-fidelity website content JSON for a home service contractor in the ${industry} industry. 
  Company Name: ${companyName}. Location: ${location}. Phone: ${phone}. Brand Color: ${brandColor}.
  Follow the Roto-Rooter template design. Headlines must include location and industry. 
  Ensure valid Lucide React icon names (e.g., check-circle, droplet, sparkles, wrench, bell-alert, wind, shield, phone, mail, map-pin, clock, star).
  Character limits: Hero subtext max 100, Service card description max 80.
  NO generic content. Use industry-specific terminology.
  Return VALID JSON ONLY. No markdown fences.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          companyName: { type: Type.STRING },
          brandColor: { type: Type.STRING },
          industry: { type: Type.STRING },
          location: { type: Type.STRING },
          phone: { type: Type.STRING },
          hero: {
            type: Type.OBJECT,
            properties: {
              badge: { type: Type.STRING },
              headline: {
                type: Type.OBJECT,
                properties: {
                  line1: { type: Type.STRING },
                  line2: { type: Type.STRING },
                  line3: { type: Type.STRING }
                },
                required: ["line1", "line2", "line3"]
              },
              subtext: { type: Type.STRING },
              trustIndicators: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    icon: { type: Type.STRING },
                    label: { type: Type.STRING },
                    sublabel: { type: Type.STRING }
                  },
                  required: ["icon", "label", "sublabel"]
                }
              }
            },
            required: ["badge", "headline", "subtext", "trustIndicators"]
          },
          services: {
            type: Type.OBJECT,
            properties: {
              badge: { type: Type.STRING },
              title: { type: Type.STRING },
              subtitle: { type: Type.STRING },
              cards: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    icon: { type: Type.STRING },
                    title: { type: Type.STRING },
                    description: { type: Type.STRING }
                  },
                  required: ["icon", "title", "description"]
                }
              }
            },
            required: ["badge", "title", "subtitle", "cards"]
          },
          featureHighlight: {
            type: Type.OBJECT,
            properties: {
              badge: { type: Type.STRING },
              headline: { type: Type.STRING },
              description: { type: Type.STRING },
              features: { type: Type.ARRAY, items: { type: Type.STRING } },
              quote: { type: Type.STRING }
            },
            required: ["badge", "headline", "description", "features", "quote"]
          },
          processSteps: {
            type: Type.OBJECT,
            properties: {
              badge: { type: Type.STRING },
              title: { type: Type.STRING },
              subtitle: { type: Type.STRING },
              steps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                    icon: { type: Type.STRING }
                  },
                  required: ["title", "description", "icon"]
                }
              }
            },
            required: ["badge", "title", "subtitle", "steps"]
          },
          emergencyCTA: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING },
              subtext: { type: Type.STRING },
              buttonText: { type: Type.STRING }
            },
            required: ["headline", "subtext", "buttonText"]
          },
          credentials: {
            type: Type.OBJECT,
            properties: {
              badge: { type: Type.STRING },
              headline: { type: Type.STRING },
              description: { type: Type.STRING },
              items: { type: Type.ARRAY, items: { type: Type.STRING } },
              ratingScore: { type: Type.STRING },
              reviewCount: { type: Type.STRING },
              certificationText: { type: Type.STRING }
            },
            required: ["badge", "headline", "description", "items", "ratingScore", "reviewCount", "certificationText"]
          },
          contactForm: {
            type: Type.OBJECT,
            properties: {
              sidebarTitle: { type: Type.STRING },
              sidebarDescription: { type: Type.STRING },
              contactMethods: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    icon: { type: Type.STRING },
                    title: { type: Type.STRING },
                    subtitle: { type: Type.STRING }
                  },
                  required: ["icon", "title", "subtitle"]
                }
              },
              formTitle: { type: Type.STRING }
            },
            required: ["sidebarTitle", "sidebarDescription", "contactMethods", "formTitle"]
          }
        },
        required: ["companyName", "brandColor", "industry", "location", "phone", "hero", "services", "featureHighlight", "processSteps", "emergencyCTA", "credentials", "contactForm"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const generateImage = async (prompt: string, aspectRatio: "1:1" | "16:9" | "3:4" | "4:3" | "9:16" = "1:1"): Promise<string> => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: { aspectRatio }
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image data found in response");
};
