import { MetadataRoute } from 'next';
import { locations, blogs } from '@/data';

const DOMAIN = 'https://www.kanikahomeservice.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const locationUrls = locations.map((loc) => ({
    url: `${DOMAIN}/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${DOMAIN}/blog/${blog.slug}`,
    lastModified: blog.date ? new Date(blog.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...locationUrls, ...blogUrls];
}
