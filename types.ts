
export interface GeneratedWebsite {
  companyName: string;
  brandColor: string;
  industry: string;
  location: string;
  phone: string;
  hero: {
    badge: string;
    headline: {
      line1: string;
      line2: string; // Company name
      line3: string;
    };
    subtext: string; // Max 100 chars
    trustIndicators: Array<{
      icon: string; // Lucide icon name
      label: string;
      sublabel: string;
    }>; // Exactly 3
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    cards: Array<{
      icon: string;
      title: string;
      description: string; // Max 80 chars
    }>; // Exactly 4
  };
  featureHighlight: {
    badge: string;
    headline: string;
    description: string;
    features: string[]; // Exactly 3
    quote: string;
  };
  processSteps: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
      icon: string;
    }>; // Exactly 4
  };
  emergencyCTA: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
  credentials: {
    badge: string;
    headline: string;
    description: string;
    items: string[]; // Exactly 6
    ratingScore: string;
    reviewCount: string;
    certificationText: string;
  };
  contactForm: {
    sidebarTitle: string;
    sidebarDescription: string;
    contactMethods: Array<{
      icon: string;
      title: string;
      subtitle: string;
    }>; // Exactly 3
    formTitle: string;
  };
}

export interface GeneratedImages {
  heroBackground: string;
  featureHighlight: string;
  credentialsShowcase: string;
}

export interface FormData {
  industry: string;
  companyName: string;
  serviceArea: string;
  phone: string;
  brandColor: string;
}
