import { SITE_URL } from '../lib/seo';

// Force canonical domain (avoid staging / alt host confusion in SERPs)
const CANONICAL_ORIGIN = 'https://vibewebstudio.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Future private/system paths can go here
        ]
      },
      // Explicit image + Googlebot allowances (usually redundant but harmless hints)
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' }
    ],
    sitemap: CANONICAL_ORIGIN + '/sitemap.xml',
    host: CANONICAL_ORIGIN.replace('https://', '')
  };
}
