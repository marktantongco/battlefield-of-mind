import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mindscape-ai.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/battlefield',
    '/mood-tracker',
    '/ai-tools',
    '/about',
    '/blog',
    '/categories',
    '/seo-guide',
    '/monetization',
    '/support',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
    '/affiliate-disclosure',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
