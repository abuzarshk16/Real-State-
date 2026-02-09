export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  type: 'sale' | 'rent';
  propertyType: 'House' | 'Apartment' | 'Bungalow' | 'Studio' | 'Commercial';
  bedrooms: number;
  bathrooms: number;
  sqft?: number;
  description: string;
  features: string[];
  images: string[];
  isFeatured?: boolean;
  available: boolean;
  dateAdded: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface SearchFilters {
  type: 'all' | 'sale' | 'rent';
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  location: string;
}