import { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  // Add core static routes (extend if new sections added)
  const routes = ['', '/about', '/contact', '/blog', '/websites', '/funnels'].map((path) => ({
    url: SITE_URL + path,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.6
  }));
  return routes;
}
