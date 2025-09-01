"use client";
import { useEffect, useState } from 'react';
import styles from './LoadingOverlay.module.css';

interface LoadingOverlayProps {
  ready: boolean;
  minDurationMs?: number; // ensure splash shows briefly (default 600ms)
}

export default function LoadingOverlay({ ready, minDurationMs = 600 }: LoadingOverlayProps) {
  const [canHide, setCanHide] = useState(false);
  const [mountTime] = useState(() => performance.now());
  useEffect(() => {
    if (ready) {
      const elapsed = performance.now() - mountTime;
      const wait = Math.max(0, minDurationMs - elapsed);
      const t = setTimeout(() => setCanHide(true), wait);
      return () => clearTimeout(t);
    }
  }, [ready, mountTime, minDurationMs]);

  return (
    <div className={styles.root + (ready && canHide ? ' ' + styles.hide : '')} aria-hidden={!(!ready || !canHide)}>
      <div className={styles.glowBubbles}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} style={{ ['--i' as any]: i }} />
        ))}
      </div>
      <div className={styles.wordmark}>
        <span className={styles.fadeIn}>
          {Array.from('Welcome').map((ch, i) => {
            const duration = (Math.random() * 2 + 3).toFixed(2); // 3s - 5s
            const delay = (Math.random() * 1.5).toFixed(2); // 0 - 1.5s
            const amp = Math.round(Math.random() * 8 + 6); // 6px - 14px
            return (
              <span
                key={i}
                className={styles.floatChar}
                style={{ ['--d' as any]: duration + 's', ['--del' as any]: delay + 's', ['--amp' as any]: amp + 'px' }}
                aria-hidden="true"
              >
                {ch}
              </span>
            );
          })}
          <span className={styles.accent}>.</span>
        </span>
      </div>
    </div>
  );
}
