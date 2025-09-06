"use client";
import Image from 'next/image';
import styles from './HowItWorksSection.module.css';

const Step1Img = "https://framerusercontent.com/images/nNILl8uO9NHWUxdhuUThYQAHnw.png";
const Step2Img = "https://framerusercontent.com/images/ZrVsgQDCHGI9Ax7ZNVTMWt5d58.png";
const BeforeImg = "https://framerusercontent.com/images/r7Z1DK2MQGn9YJX9zc6PzvvgOwM.png";
const AfterImg = "https://framerusercontent.com/images/808e8AGtQnoNldHsPr2R524FYZM.png";

export default function HowItWorksSection(){
  return (
    <section className={styles.section} id="how-it-works" aria-labelledby="how-title how-subtitle">
      <div className={styles.inner}>
        <div className={styles.headlineCol}>
          <div className={styles.header}>
            <div className={styles.tagWrapper}><div className={styles.tag}><p className={styles.tagText}>HOW IT WORKS</p></div></div>
            <div className={styles.textContainer}>
              <h2 id="how-subtitle" className={styles.subtitle}>Stress-free collaboration</h2>
              <h2 id="how-title" className={styles.title}>Our simple 3‑step process</h2>
            </div>
          </div>
        </div>
        <p className={styles.headlineAside}>Clear steps, fast feedback, on-time delivery. Here’s how we work together from hello to launch.</p>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.media} aria-hidden="true">
              <Image src={Step1Img+"?scale-down-to=1024"} alt="Discovery call illustration" fill sizes="(max-width: 860px) 100vw, 33vw" style={{objectFit:'cover'}} />
              <span className={styles.badge}>15-min</span>
            </div>
            <p className={styles.step}>STEP #1</p>
            <h3 className={styles.cardTitle}>FREE DISCOVERY CALL</h3>
            <p className={styles.cardDesc}>We get to know each other, align on goals, timeline, and budget.</p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.media} aria-hidden="true">
              <Image src={Step2Img+"?scale-down-to=1024"} alt="Copy and design work in progress" fill sizes="(max-width: 860px) 100vw, 33vw" style={{objectFit:'cover'}} />
            </div>
            <p className={styles.step}>STEP #2</p>
            <h3 className={styles.cardTitle}>COPY &amp; DESIGN</h3>
            <p className={styles.cardDesc}>We structure the content, write the copy, and design the visuals.</p>
          </div>

          {/* Card 3: Before / After */}
          <div className={styles.card}>
            <div className={styles.media}>
              <div className={styles.beforeAfterGroup} aria-hidden="true">
                <div className={styles.beforePane}>
                  <Image src={BeforeImg+"?scale-down-to=1024"} alt="Before" fill sizes="(max-width: 860px) 100vw, 33vw" style={{objectFit:'cover'}} />
                </div>
                <div className={styles.afterPane}>
                  <Image src={AfterImg+"?scale-down-to=1024"} alt="After" fill sizes="(max-width: 860px) 100vw, 33vw" style={{objectFit:'cover'}} />
                </div>
                <span className={`${styles.label} ${styles.labelBefore}`}>before</span>
                <span className={`${styles.label} ${styles.labelAfter}`}>after</span>
              </div>
            </div>
            <p className={styles.step}>STEP #3</p>
            <h3 className={styles.cardTitle}>LAUNCH &amp; ANALYTICS</h3>
            <p className={styles.cardDesc}>We launch your project, connect the domain, and track results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
