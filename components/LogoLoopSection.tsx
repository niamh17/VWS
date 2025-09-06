"use client";
import React from 'react';
import styles from './LogoLoopSection.module.css';
import LogoLoop, { LogoItem } from './LogoLoop';

type Props = {
  logos: LogoItem[];
  title?: string;
};

const LogoLoopSection: React.FC<Props> = ({ logos, title = 'Technology partners' }) => {
  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.inner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.loop}>
          <div style={{ height: 120, position: 'relative', overflow: 'hidden', color: '#1c1c1c' }}>
            <LogoLoop
              logos={logos}
              speed={120}
              direction="left"
              logoHeight={44}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel={title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoLoopSection;