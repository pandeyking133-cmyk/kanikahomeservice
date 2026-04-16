import { locationData as ghaziabad } from './locations/ghaziabad';
import { locationData as noida } from './locations/noida';
import { locationData as vasundhara } from './locations/vasundhara';
import { locationData as vaishali } from './locations/vaishali';
import { locationData as kaushambi } from './locations/kaushambi';
import { locationData as mohanNagar } from './locations/mohan-nagar';
import { locationData as rajNagar } from './locations/raj-nagar';

import { blogData as bestDancersGhaziabad } from './blogs/best-call-girl-ghaziabad';
import { blogData as luxuryDancersNoida } from './blogs/luxury-call-girl-noida';

export const locations = [
  ghaziabad,
  noida,
  vasundhara,
  vaishali,
  kaushambi,
  mohanNagar,
  rajNagar
];

export const blogs = [
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
