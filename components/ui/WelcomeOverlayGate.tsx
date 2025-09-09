"use client";
import { useEffect, useRef, useState } from 'react';
import LoadingOverlay from './LoadingOverlay';

/**
 * Shows the welcome/loading overlay once on initial page load (mount of Root Layout).
 * - Displays when the user enters the site (any route) via a hard load.
 * - Does not show again during client-side navigation because the root layout persists.
 * - No storage is used; a new tab/window (fresh load) will show it again.
 */
export default function WelcomeOverlayGate({ minDurationMs = 1600 }: { minDurationMs?: number }) {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const shownRef = useRef(false);

  // Show once on initial mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (shownRef.current) return; // guard against StrictMode double-invoke
    setShow(true);
    shownRef.current = true;
  }, []);

  // When showing, flip ready shortly after first paint so minDuration controls visibility length
  useEffect(() => {
    if (!show) return;
    const t = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(t);
  }, [show]);

  if (!show) return null;
  return <LoadingOverlay ready={ready} minDurationMs={minDurationMs} />;
}
