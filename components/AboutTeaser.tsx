"use client";
import Link from 'next/link';
import styles from './AboutTeaser.module.css';
import Image from 'next/image';

const IMAGES = [
  'https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg',
  'https://framerusercontent.com/images/f0xTwK2sFT7WC47RQXuNuTiQAQ.jpg',
  'https://framerusercontent.com/images/oOA6cKHpkR2fMSVUcLhBM8CDalw.jpg'
];

export default function AboutTeaser(){
  return (
    <section className={styles.aboutTeaser} aria-labelledby="about-teaser-line1 about-teaser-line2">
      <div className={styles.inner}>
        <div className={styles.headingRows}>
          <h3 id="about-teaser-heading" className={styles.titleBlock}>
            THE DIGITAL REALM<br />
            WHERE CREATIVITY<br />
            MEETS TECHNOLOGY
          </h3>
        </div>
        <div className={styles.mediaWrap}>
          <div className={styles.imageGrid} aria-hidden="true">
            {IMAGES.map(src => (
              <div key={src} className={styles.imageCell}>
                <Image src={src+"?scale-down-to=1024"} alt="" fill sizes="150px" />
              </div>
            ))}
            <div className={styles.imageCell}></div>
          </div>
          <Link href="/about" aria-label="Go to About page" className={styles.circleBadge}>
            <div className={styles.rotator} aria-hidden="true">
              <svg viewBox="0 0 100 100" className={styles.rotatorSvg}>
                {/* Path approximating Framer exported shape (circle via arcs) */}
                <path id="about-circle-path" d="M50 5a45 45 0 1 1 0 90a45 45 0 1 1 0-90" fill="none" />
                <text className={styles.circleText}>
                  <textPath href="#about-circle-path" startOffset="0" dominantBaseline="hanging">
                    DESIGN INDUSTRY LEADERS SINCE 2022 • DESIGN INDUSTRY LEADERS SINCE 2022 • DESIGN INDUSTRY LEADERS SINCE 2022 •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className={styles.arrowIcons}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.arrowBase}><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd"/></svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.arrowAccent}><path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd"/></svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
