"use client";
// HeroSection client component with custom cursor & schedule cards.

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './HeroSection.module.css';
import Image from 'next/image';

type Call = {
  day: string; date: string; rotate?: string; entries: { title: string; duration: string; time: string; img: string }[];
};

const schedule: Call[] = [
  { day: 'TUE', date: '19 JUL', rotate: 'rotateP2', entries: [ { title: 'New client call: Sarah', duration: '1hr', time: '9:30 AM – 10:30 AM', img: 'https://framerusercontent.com/images/WhY8bEftLOpO0JsxUFzI3KWy0K8.png' }, { title: 'New client call: Leah', duration: '30m', time: '12:45 PM – 1:15 AM', img: 'https://framerusercontent.com/images/RmM5BpE0PGSm34gELBhZvzu1v3c.jpg?scale-down-to=512' } ] },
  { day: 'THU', date: '25 JUL', rotate: 'rotateN2', entries: [ { title: 'New client call: Joshua', duration: '1hr', time: '9:30 AM – 10:30 AM', img: 'https://framerusercontent.com/images/bcAzOFG614oJvNiV0vto1KQKGWs.png' } ] },
  { day: 'MON', date: '25 JUL', rotate: 'rotateP3', entries: [ { title: 'New client call: Edward', duration: '1hr', time: '9:30 AM – 10:30 AM', img: 'https://framerusercontent.com/images/MmFD1jNhRLpHupPh6F2ouDOnrc.png' } ] },
  { day: 'THU', date: '28 JUL', rotate: 'rotateN2', entries: [ { title: 'New client call: Mirielle', duration: '1hr', time: '9:30 AM – 10:30 AM', img: 'https://framerusercontent.com/images/PKiASOOG1EGQq1I5x1KjAasln4.png' } ] },
];

// Reuse the same partner imagery set used in Mission/Stats section for brand consistency
const partners = [
  'https://framerusercontent.com/images/vhrHZGDV6GHME64j4wHVwOSfb8.png',
  'https://framerusercontent.com/images/hgIwkBgy2OmU0dw2HlRbV5QH4.png',
  'https://framerusercontent.com/images/w3uLbU7Y52vz44rYeU2HamRqrc.png',
  'https://framerusercontent.com/images/8uKgxQ7sa2jpaYkxdGLD437X83Y.png'
];

const Star = () => (
  <svg className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.1 3.513c.35-.921 1.62-.921 1.97 0l1.77 4.66 4.97.297c.99.06 1.39 1.313.64 1.948l-3.8 3.246 1.17 4.83c.23.95-.81 1.688-1.64 1.17L12.1 17.89l-4.1 2.775c-.83.518-1.87-.22-1.64-1.17l1.17-4.83-3.8-3.246c-.75-.635-.35-1.889.64-1.948l4.97-.297 1.77-4.66Z"/></svg>
);

const Aurora = dynamic(() => import('./Aurora'), { ssr: false });

const HeroSection: React.FC = () => {
  // Availability tag removed per request

  return (
    <div className={`${styles.heroOuter} ${styles.heroShiftLeft}`}>
      {/* Embedded aurora background (moved from page wrapper) */}
      <div className="heroAurora" aria-hidden="true">
  {/* Reduced amplitude to soften peak displacement of aurora (was 1.15) */}
  <Aurora amplitude={0.7} blend={0.7} fps={40} maxDpr={1.1} />
      </div>
  <section className={styles.heroRoot} aria-label="Hero section">
  {/* Global BubbleMenu moved to RootLayout to avoid transform clipping & allow full-screen overlay */}
      <div className={styles.leftCol}>
  {/* Availability tag removed */}
        <div className={styles.headingBlock}>
          <div className={styles.headingRow}>
            <h1 className={styles.heroHeading}>
              <span className={styles.lineOne}>
                <span>Websites that</span>
                <span className={styles.trendIconInline} aria-hidden="true">
                  <span className={styles.trendIconBox} data-framer-name="Icon Container">
                    <svg className={styles.trendSvg} viewBox="0 0 24 24" fill="none" role="presentation" focusable="false" aria-hidden="true">
                      <path d="M4 14l5-5 4 4 7-7" />
                      <path d="M14 4h7v7" />
                    </svg>
                  </span>
                </span>
                <span>2x</span>
              </span>
              <br />
              <span className={styles.lineTwo}>leads for startups</span>
            </h1>
          </div>
          <p className={styles.subtitle}>
            Get real sales-focused &amp; world-class designs:<br />
            Landing pages, Branding, 3D, MVPs
          </p>
          <div className={styles.buttons}>
      {/* Primary CTA with flip animation; updated copy per request */}
  <a href="#book" className={styles.primaryBtn} data-framer-name="Primary" aria-label="Book a free 15 min website audit">
              <span className={styles.flipWrap} aria-hidden="true">
        <span className={styles.flipMeasure}>Book a free 15 min website audit</span>
        <span className={styles.flipFront}>Book a free 15 min website audit</span>
        <span className={styles.flipBack}>Book a free 15 min website audit</span>
              </span>
            </a>
            {/* Secondary CTA */}
            <a href="#learn-more" className={styles.secondaryBtn} data-framer-name="Secondary" aria-label="Learn more">
              <div className={styles.secIcon} aria-hidden="true"></div>
              <span className={styles.flipWrap} aria-hidden="true">
                <span className={styles.flipMeasure}>Learn more</span>
                <span className={styles.flipFront}>Learn</span>
                <span className={styles.flipBack}>Learn more</span>
              </span>
            </a>
          </div>
          <div className={styles.metaRow}>
            <div>
              <div className={styles.metaLabel}>Trusted partners</div>
              <div className={styles.partners}>
                {partners.map(src => (
                  <Image
                    key={src}
                    src={src+"?scale-down-to=128"}
                    alt="Partner logo"
                    width={40}
                    height={40}
                    className={styles.partnerAvatar}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className={styles.dividerV} aria-hidden="true" />
            <div>
              <div className={styles.metaLabel}>Rated excellent: 5/5</div>
              <div className={styles.starsRow} aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className={styles.scheduleColumn} aria-label="Upcoming calls">
        <div className={styles.cardsStack}>
          {schedule.map(group => (
            <div key={group.day+group.date} className={`${styles.cardGroup} ${group.rotate ? (styles as any)[group.rotate] : ''}`}>
              <div className={`${styles.floating}`}>
                <div className={styles.cardHeader}>
                  <span>{group.day}</span>
                  <span>{group.date}</span>
                </div>
                {group.entries.map((c, idx) => (
                  <div key={c.title+idx} className={styles.callRow}>
                    <Image src={c.img} alt="" width={44} height={44} className={styles.avatar} />
                    <div className={styles.callDetails}>
                      <p className={styles.callTitle}>{c.title}</p>
                      <div className={styles.callMeta}>
                        <span>{c.time}</span>
                      </div>
                    </div>
                    <span className={styles.duration}>{c.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </section>
  </div>
  );
};

export default HeroSection;
