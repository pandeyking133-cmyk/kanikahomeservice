import { locationData as ghaziabad } from './locations/ghaziabad';
import { locationData as noida } from './locations/noida';
import { locationData as vasundhara } from './locations/vasundhara';
import { locationData as vaishali } from './locations/vaishali';
import { locationData as kaushambi } from './locations/kaushambi';
import { locationData as mohanNagar } from './locations/mohan-nagar';
import { locationData as rajNagar } from './locations/raj-nagar';

import { blogData as bestDancersGhaziabad } from './blogs/best-call-girl-ghaziabad';
import { blogData as luxuryDancersNoida } from './blogs/luxury-call-girl-noida';

export interface LocationData {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtext?: string;
  heroImage: string;
  heroVideo?: string;
  sectionVideo?: string;
  galleryImages?: { src: string; alt: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
  schema: any;
}

export interface BlogData {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  content: string;
  excerpt?: string;
  date?: string;
  schema: any;
}

export const locations: LocationData[] = [
  ghaziabad,
  noida,
  vasundhara,
  vaishali,
  kaushambi,
  mohanNagar,
  rajNagar
];

export const blogs: BlogData[] = [
  bestDancersGhaziabad,
  luxuryDancersNoida
];

// Helper functions for easy access
export const getLocationBySlug = (slug: string) => {
  return locations.find(loc => loc.slug === slug);
};

export const getBlogBySlug = (slug: string) => {
  return blogs.find(blog => blog.slug === slug);
};
