import { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/seo';
import { blogPosts } from '../lib/blogPosts';

/**
 * Enhanced sitemap including:
 * - Core static routes
 * - Blog post entries (with individual lastModified dates)
 * - Adjusted changeFrequency & priority signals
 * Notes:
 *  - Images / hreflang not added (single language site). If you localize later, add alternate refs.
 */
const CANONICAL_ORIGIN = 'https://vibewebstudio.com'; // force canonical domain

function absolute(path: string) {
  if (path === '' || path === '/') return CANONICAL_ORIGIN;
  return CANONICAL_ORIGIN + (path.startsWith('/') ? path : '/' + path);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const nowIso = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    '', '/about', '/contact', '/blog', '/websites', '/funnels'
  ].map(p => ({
    url: absolute(p),
    lastModified: nowIso,
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.6
  }));

  const postRoutes: MetadataRoute.Sitemap = blogPosts.map(p => ({
    url: absolute('/blog/' + p.slug),
    lastModified: p.updated || p.date,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  return [...staticRoutes, ...postRoutes];
}
