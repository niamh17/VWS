"use client";
import { useEffect, useState, useRef } from 'react';
import styles from './LoadingOverlay.module.css';

interface LoadingOverlayProps {
  ready: boolean;
  minDurationMs?: number; // minimum time splash stays visible
  finalFillDurationMs?: number; // duration of final 92% -> 100% fill
}

export default function LoadingOverlay({ ready, minDurationMs = 1600, finalFillDurationMs = 480 }: LoadingOverlayProps) {
  const [canHide, setCanHide] = useState(false); // gate for fade out
  // target progress (instant calculation) & displayed (smoothed)
  const [displayedProgress, setDisplayedProgress] = useState(0); // 0 - 1
  const targetRef = useRef(0); // 0 - 1
  const mountTimeRef = useRef<number>();
  if (mountTimeRef.current == null && typeof performance !== 'undefined') mountTimeRef.current = performance.now();
  const mountTime = mountTimeRef.current || 0;

  const finalPhaseStartRef = useRef<number | null>(null); // timestamp when final phase begins

  // Compute target progress with two phases:
  // Phase 1: (startup) progress -> 0.92 tied to minDurationMs or until ready, whichever is later.
  // Phase 2: (final fill) after both ready & minDuration satisfied, animate 0.92 -> 1 over finalFillDurationMs.
  useEffect(() => {
    let frame: number;
    const updateTarget = () => {
      const now = performance.now();
      const elapsed = now - mountTime;
      const minTimeMet = elapsed >= minDurationMs;

      // Mark start of final phase.
      if (ready && minTimeMet && finalPhaseStartRef.current == null) {
        finalPhaseStartRef.current = now;
      }

      if (finalPhaseStartRef.current == null) {
        // Phase 1 progress (ease slightly by using sqrt for gentle start)
        const raw = Math.min(1, elapsed / minDurationMs);
        const eased = Math.sqrt(raw); // front-load some movement for perceived speed
        targetRef.current = Math.min(0.92, eased * 0.92);
      } else {
        // Phase 2 - map time since final phase start to remaining 8%
        const since = now - finalPhaseStartRef.current;
        const t = Math.min(1, since / finalFillDurationMs);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        targetRef.current = 0.92 + eased * 0.08;
      }

      frame = requestAnimationFrame(updateTarget);
    };
    frame = requestAnimationFrame(updateTarget);
    return () => cancelAnimationFrame(frame);
  }, [ready, minDurationMs, finalFillDurationMs, mountTime]);

  // Lerp displayed progress toward target for smooth motion & frame consistency.
  useEffect(() => {
    let frame: number;
    const smooth = () => {
      const target = targetRef.current;
      setDisplayedProgress(prev => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.002) return target; // close enough
        const easedStep = diff * 0.16; // slightly snappier
        return prev + easedStep;
      });
      frame = requestAnimationFrame(smooth);
    };
    frame = requestAnimationFrame(smooth);
    return () => cancelAnimationFrame(frame);
  }, []);

  // When final phase completes, allow hide (fade out) shortly after to let user see 100% for a moment.
  useEffect(() => {
    let t: any;
    if (finalPhaseStartRef.current != null) {
      const check = () => {
        if (targetRef.current >= 0.999) {
          // brief pause at 100%
          t = setTimeout(() => setCanHide(true), 160);
        } else {
          t = setTimeout(check, 60);
        }
      };
      check();
    }
    return () => clearTimeout(t);
  }, [finalPhaseStartRef.current]);

  // (Legacy hide logic replaced by final phase completion logic above)

  const hide = ready && canHide;
  const progressPercent = Math.round(displayedProgress * 100);

  return (
    <div className={styles.root + (hide ? ' ' + styles.hide : '')} aria-hidden={hide}>
      <div className={styles.glowBubbles} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} style={{ ['--i' as any]: i }} />
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.welcome} aria-label="Welcome loading screen">Welcome</div>
        <div
          className={styles.progressOuter}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
          aria-label="Loading progress"
        >
          <div className={styles.progressTrack} />
          <div className={styles.progressInner} style={{ ['--p' as any]: displayedProgress }} />
          <div className={styles.progressBubbles} aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} style={{ ['--i' as any]: i }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
