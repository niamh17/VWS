import './globals.css';
import type { ReactNode } from 'react';
import BubbleMenu from '../components/BubbleMenu';

export const metadata = {
  // Updated branding: only title & favicon per request
  title: 'Vibe Web Studio',
  description: 'Vibe Web Studio – bespoke websites, funnels & digital growth services.',
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
        <script defer src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
  <link rel="mask-icon" href="/favicon.svg" color="#ff4726" />
      </head>
      <body>
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
            { label: 'Home', href: '#home', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#ff663a', textColor: '#000000' } },
            { label: 'Websites', href: '#websites', ariaLabel: 'Websites', rotation: 6, hoverStyles: { bgColor: '#ff5a2d', textColor: '#000000' } },
            { label: 'Digital Services', href: '#digital-services', ariaLabel: 'Digital Services', rotation: 6, hoverStyles: { bgColor: '#ff4f22', textColor: '#000000' } },
            { label: 'Funnels', href: '#funnels', ariaLabel: 'Funnels', rotation: 8, hoverStyles: { bgColor: '#ff4726', textColor: '#000000' } },
            { label: 'About', href: '#about', ariaLabel: 'About', rotation: -6, hoverStyles: { bgColor: '#f53e1d', textColor: '#000000' } },
            { label: 'Blog', href: '#blog', ariaLabel: 'Blog', rotation: 6, hoverStyles: { bgColor: '#e83819', textColor: '#000000' } },
            { label: 'Contact', href: '#contact', ariaLabel: 'Contact', rotation: -8, hoverStyles: { bgColor: '#d73215', textColor: '#000000' } }
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
