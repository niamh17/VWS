// Central SEO configuration (no visible copy changed here)
export const TARGET_KEYWORDS: string[] = [
  'conversion-focused website design',
  'high-converting sales funnel development',
  'custom website and funnel agency',
  'website speed optimization services',
  'landing page conversion optimization'
];

export const SITE_NAME = 'Vibe Web Studio';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibewebstudio.com';
export const SITE_TWITTER = '@vibewebstudio'; // placeholder; update if you secure the handle

export const defaultOpenGraph = {
  title: SITE_NAME,
  description: 'Vibe Web Studio – bespoke websites, funnels & digital growth services.',
  url: SITE_URL,
  siteName: SITE_NAME,
  type: 'website'
};

export const organizationJsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_URL + '/logo.png',
  sameAs: [
    SITE_URL,
    'https://www.linkedin.com/',
    'https://www.instagram.com/'
  ],
  slogan: 'Websites, funnels & growth that turn clicks into customers.'
});
