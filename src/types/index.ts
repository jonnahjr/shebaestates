export type CategoryType = 'all' | 'coffee' | 'saffron' | 'vanilla' | 'macadamia' | 'spices';

export interface BotanicalDiamond {
  slug: 'coffee' | 'saffron' | 'vanilla' | 'macadamia';
  number: string;
  name: string;
  ethiopianName?: string;
  scientificOrVarietal: string;
  category: 'Coffee' | 'Saffron' | 'Vanilla' | 'Macadamia';
  tagline: string;
  excerpt: string;
  description: string;
  origin: string;
  region: string;
  altitude: string;
  harvestSeason: string;
  tastingNotes: string[];
  specifications: { label: string; value: string }[];
  processingMethod: string;
  sustainabilityPractice: string;
  image: string;
  gallery: string[];
  storeProductId?: string;
}

export interface StoreProduct {
  id: string;
  slug: string;
  name: string;
  category: 'coffee' | 'saffron' | 'vanilla' | 'macadamia' | 'spices';
  categoryLabel: string;
  weight: string;
  priceEur: number;
  priceUsd: number;
  description: string;
  origin: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
  isDiamond?: boolean;
  badge?: string;
  tastingNotes?: string[];
}

export interface CartItem {
  product: StoreProduct;
  quantity: number;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

export interface GlobalOffice {
  country: string;
  countryCode: string;
  countryFlag: string;
  city: string;
  address: string;
  phone: string;
  phoneRaw: string;
  email: string;
  role: string;
}

export interface SustainabilityPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
  impactMetric?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
}
