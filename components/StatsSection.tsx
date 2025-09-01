"use client";
import Image from 'next/image';
import styles from './StatsSection.module.css';

// Reuse partner/avatar imagery from existing design for consistency
const partnerImgs = [
  'https://framerusercontent.com/images/vhrHZGDV6GHME64j4wHVwOSfb8.png',
  'https://framerusercontent.com/images/hgIwkBgy2OmU0dw2HlRbV5QH4.png',
  'https://framerusercontent.com/images/w3uLbU7Y52vz44rYeU2HamRqrc.png',
  'https://framerusercontent.com/images/8uKgxQ7sa2jpaYkxdGLD437X83Y.png',
  'https://framerusercontent.com/images/oOA6cKHpkR2fMSVUcLhBM8CDalw.jpg'
];

const Star = () => (
  <svg viewBox="0 0 24 24" className={styles.star} aria-hidden="true" fill="currentColor"><path d="M11.1 3.513c.35-.921 1.62-.921 1.97 0l1.77 4.66 4.97.297c.99.06 1.39 1.313.64 1.948l-3.8 3.246 1.17 4.83c.23.95-.81 1.688-1.64 1.17L12.1 17.89l-4.1 2.775c-.83.518-1.87-.22-1.64-1.17l1.17-4.83-3.8-3.246c-.75-.635-.35-1.889.64-1.948l4.97-.297 1.77-4.66Z"/></svg>
);

export default function StatsSection(){
  const month = new Date().toLocaleString('en-US',{ month:'long' });
  return (
    <section className={styles.statsSection} aria-labelledby="stats-heading-1 stats-heading-2" id="mission">
      <div className={styles.inner}>
        <div className={styles.headlineCol}>
          <div className={styles.header}>
            <div className={styles.tagWrapper}><div className={styles.tag}><p className={styles.tagText}>Mission</p></div></div>
            <div className={styles.textContainer}>
              <h2 id="stats-heading-1" className={styles.subtitle}>Our focus is simple</h2>
              <h2 id="stats-heading-2" className={styles.title}>Design to convert</h2>
            </div>
          </div>
        </div>
        <p className={styles.headlineAside}>We promise to deliver beyond your expectations for your business.</p>

        <div className={styles.cardsGrid}>
          {/* Partners avatar strip */}
          <div className={`${styles.card} ${styles.partnersCard}`} aria-label="Partners">
            <div className={styles.partnersAnim}>
              <div className={styles.avatars}>
                {partnerImgs.map((src)=> (
                  <span key={src} className={styles.avatarRing} aria-hidden="true">
                    <Image src={src+"?scale-down-to=256"} alt="" fill sizes="40px" />
                  </span>
                ))}
              </div>
            </div>
            <span className={styles.partnersLabel}>40+ partners</span>
          </div>

            {/* ROI Card */}
            <div className={`${styles.card} ${styles.roiCard}`}>
              <p className={styles.statKicker}>Earn back on your investment within 30 days</p>
              <div className={styles.statValue} aria-label="Ninety percent return on investment"><span>90</span><small>%</small></div>
              <div className={styles.statMeta}>Return on investment (ROI)</div>
            </div>

            {/* Revenue generated */}
            <div className={`${styles.card} ${styles.revenueCard}`}>
              <p className={styles.statKicker}>Through our custom-tailored funnel systems</p>
              <div className={styles.statValue} aria-label="Two point five million dollars plus revenue generated"><span>$2.5</span><small>+</small></div>
              <div className={styles.statMeta}>Revenue generated</div>
            </div>

            {/* Availability separate card */}
            <div className={`${styles.card} ${styles.availabilityCard}`} aria-label={`Availability for ${month}`}>
              <span className={styles.availabilityDot} aria-hidden="true"></span>
              <span>Available for {month}</span>
            </div>

      {/* Rating card */}
            <div className={`${styles.card} ${styles.dark} ${styles.ratingCard}`}>
              <div className={styles.arrowBg} aria-hidden="true">
                <svg viewBox="0 0 323.5 323.5"><path d="M 215.667 94.354 L 283.062 94.354 L 283.062 161.75 M 276.323 101.094 L 194.291 183.125 C 183.764 193.652 166.694 193.652 156.167 183.125 L 140.375 167.333 C 129.847 156.806 112.778 156.806 102.25 167.333 L 40.438 229.146"/></svg>
              </div>
              <div className={styles.ratingBody}>
                <div style={{display:'flex', gap:'1.4rem'}}>
                  <span className={styles.trendIconBox} aria-hidden="true">
                    <svg className={styles.trendSvg} viewBox="0 0 24 24" fill="none">
                      <path d="M4 14l5-5 4 4 7-7" />
                      <path d="M14 4h7v7" />
                    </svg>
                  </span>
                  <p className={styles.ratingText}>We delivered 50+ projects worldwide, helping service-based companies secure more clients</p>
                </div>
        <div className={styles.ratingStat} aria-label="Four point nine out of five rating"><span>4.9</span><small>/5</small></div>
                <div>
                  <div className={styles.starsRow} aria-hidden="true">{Array.from({length:5}).map((_,i)=><Star key={i} />)}</div>
                  <div className={styles.ratingMeta}>Trusted by clients worldwide</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
