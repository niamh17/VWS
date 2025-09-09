"use client";
import { useEffect } from "react";

// Records the first path visited in this browser tab (session) so we can gate welcome animations
export default function InitialVisit() {
  useEffect(() => {
    try {
      const w = window as any;
      if (typeof w !== 'undefined' && w.__initialPath == null) {
        w.__initialPath = window.location.pathname;
      }
    } catch {
      // ignore
    }
  }, []);
  return null;
}
