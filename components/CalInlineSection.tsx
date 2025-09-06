"use client";
import Script from "next/script";
import React from "react";
import styles from "./CalInlineSection.module.css";

export default function CalInlineSection() {
  return (
    <section className={styles.section} id="book">
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Book a 15‑minute intro</h2>
          <p className={styles.subtitle}>Pick a time that works for you. No pressure—just a quick chat about your goals.</p>
          <div className={styles.embedCard}>
            <div className={styles.embedContainer}>
              {/* Cal inline embed code begins */}
              <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-15min"></div>
              <Script
                id="cal-inline-embed"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://app.cal.com"});

  Cal.ns["15min"]("inline", {
    elementOrSelector:"#my-cal-inline-15min",
    config: {"layout":"month_view","theme":"dark"},
    calLink: "vibe-web-studio/15min",
  });

  Cal.ns["15min"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
                  `,
                }}
              />
              {/* Cal inline embed code ends */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
