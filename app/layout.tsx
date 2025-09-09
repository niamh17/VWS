import './globals.css';
import type { ReactNode } from 'react';
import BubbleMenu from '../components/BubbleMenu';
import InitialVisit from '../components/InitialVisit';
import WelcomeOverlayGate from '../components/ui/WelcomeOverlayGate';
import { TARGET_KEYWORDS, SITE_URL, defaultOpenGraph, organizationJsonLd } from '../lib/seo';

export const metadata = {
  title: 'Vibe Web Studio',
  description: 'Vibe Web Studio – bespoke websites, funnels & digital growth services.',
  keywords: TARGET_KEYWORDS,
  alternates: { canonical: SITE_URL },
  openGraph: defaultOpenGraph,
  twitter: {
    card: 'summary_large_image',
    title: 'Vibe Web Studio',
    description: 'Websites, funnels & digital growth.',
    site: '@vibewebstudio'
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: ['/favicon.svg'],
    apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
  <html lang="en">
      <head>
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
  <meta name="theme-color" content="#ffffff" />
        {/* Performance: preconnect & dns-prefetch for third-party origins */}
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="preconnect" href="https://hook.eu2.make.com" />
        <link rel="dns-prefetch" href="https://hook.eu2.make.com" />
        {/* Preload brand asset */}
        <link rel="preload" as="image" href="/logo.png" />
        <script defer src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
        <link rel="mask-icon" href="/favicon.svg" color="#ff4726" />
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
            { label: 'Websites', href: '/websites', ariaLabel: 'Websites', rotation: 6, hoverStyles: { bgColor: '#ff5a2d', textColor: '#000000' } },
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
      </body>
    </html>
  );
}
