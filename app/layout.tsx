import './globals.css';
import type { ReactNode } from 'react';
import BubbleMenu from '../components/BubbleMenu';
import InitialVisit from '../components/InitialVisit';
import WelcomeOverlayGate from '../components/ui/WelcomeOverlayGate';
import { TARGET_KEYWORDS, SITE_URL, defaultOpenGraph, organizationJsonLd } from '../lib/seo';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://vibewebstudio.com'),
  title: {
    default: 'Vibe Web Studio — High-quality website design & development',
    template: '%s | Vibe Web Studio'
  },
  description:
    'High-quality website design and Next.js development. Custom, responsive, fast sites that convert.',
  keywords: TARGET_KEYWORDS,
  alternates: { canonical: SITE_URL },
  openGraph: {
    ...defaultOpenGraph,
    title: 'Vibe Web Studio — High-quality website design & development'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Web Studio'
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'REPLACE_WITH_SEARCH_CONSOLE_TOKEN'
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
  <html lang="en">
      <head>
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
  <meta name="theme-color" content="#ffffff" />
  {/* Preload critical fonts to prevent swap flash */}
  <link rel="preload" as="font" href="/BubbleBobble-MVpLp.otf" type="font/otf" crossOrigin="anonymous" />
  <link rel="preload" as="font" href="/clouds-well.otf" type="font/otf" crossOrigin="anonymous" />
        {/* Performance: preconnect & dns-prefetch for third-party origins */}
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="preconnect" href="https://hook.eu2.make.com" />
        <link rel="dns-prefetch" href="https://hook.eu2.make.com" />
        {/* Preload brand asset */}
        <link rel="preload" as="image" href="/logo.png" />
        <script defer src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
  {/* No SVG/favicon.ico references to satisfy PNG-only SERP favicon objective */}
        {/* Basic structured data */}
  <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: organizationJsonLd }} />
        {/* Robots fallback meta (complements /robots route) */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
      </head>
      <body>
  <InitialVisit />
  {/* Global welcome overlay shown once per browser session (new visit) */}
  <WelcomeOverlayGate minDurationMs={1800} />
        {/* Site-wide navigation: moved out of HeroSection so overlay isn't clipped by hero overflow/transform */}
        <BubbleMenu
          useFixedPosition
          logo={<img src="/logo.png" alt="Vibe Web Studio logo" style={{ display:'block', height:'100%', width:'auto' }} />}
          className="hero-shift"
          menuAriaLabel="Toggle navigation"
          menuBg="#000000"
          menuContentColor="#000000"
          toggleBubbleBg="#ff4726"
          toggleColor="#000000"
          items={[
            { label: 'Home', href: '/', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#ff663a', textColor: '#000000' } },
            { label: 'Portfolio', href: '/portfolio', ariaLabel: 'Portfolio', rotation: 6, hoverStyles: { bgColor: '#ff5a2d', textColor: '#000000' } },
            { label: 'Contact', href: '/contact', ariaLabel: 'Contact', rotation: 6, hoverStyles: { bgColor: '#ff4f22', textColor: '#000000' } },
            { label: 'Funnels', href: '/funnels', ariaLabel: 'Funnels', rotation: 8, hoverStyles: { bgColor: '#ff4726', textColor: '#000000' } },
            { label: 'About', href: '/about', ariaLabel: 'About', rotation: -6, hoverStyles: { bgColor: '#f53e1d', textColor: '#000000' } },
            { label: 'Blog', href: '/blog', ariaLabel: 'Blog', rotation: 6, hoverStyles: { bgColor: '#e83819', textColor: '#000000' } },
          ]}
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.12}
        />
        {children}
        {/* Site-wide structured data */}
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://vibewebstudio.com',
            name: 'Vibe Web Studio'
          }) }} />
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Vibe Web Studio',
            url: 'https://vibewebstudio.com',
            logo: 'https://vibewebstudio.com/logo.png',
            sameAs: []
          }) }} />
      </body>
    </html>
  );
}
