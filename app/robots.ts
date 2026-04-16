import { MetadataRoute } from 'next';

const DOMAIN = 'https://www.kanikahomeservice.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
