"use client";
import React from 'react';
import styles from './CtaSection.module.css';

type Props = {
  title?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function CtaSection({
  title = 'Ready to grow?'
  , subtitle = 'Book a quick intro and let’s see if we’re a fit.'
  , ctaHref = '/#book'
  , ctaLabel = 'Book a meeting'
}: Props) {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 id="cta-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.action}>
          <a href={ctaHref} className={styles.ctaBtn} aria-label={ctaLabel}>{ctaLabel}</a>
        </div>
      </div>
    </section>
  );
}
