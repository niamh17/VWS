"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.section} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Brand + tagline */}
          <div className={styles.brandCol}>
            <Link href="#top" className={styles.brand} aria-label="Vibe Web Studio home">
              <img src="/favicon.png" alt="Vibe Web Studio" className={styles.logo} />
              <span className={styles.brandName}>Vibe Web Studio</span>
            </Link>
            <p className={styles.tagline}>Websites, funnels & growth that turn clicks into customers.</p>
            <div className={styles.ctaRow}>
              <a href="#book" className={styles.ctaBtn} aria-label="Book a free 15 minute intro call">Book a free 15‑min intro</a>
            </div>
          </div>

          {/* Navigation groups */}
          <nav className={styles.navCol} aria-label="Primary">
            <h3 className={styles.groupTitle}>Explore</h3>
            <ul className={styles.linkList}>
              <li><a href="#services" className={styles.link}>Services</a></li>
              <li><a href="#projects" className={styles.link}>Projects</a></li>
              <li><a href="#how-it-works" className={styles.link}>How it works</a></li>
              <li><a href="#pricing" className={styles.link}>Pricing</a></li>
              <li><a href="#mission" className={styles.link}>Testimonials</a></li>
              <li><a href="#book" className={styles.link}>Book a call</a></li>
            </ul>
          </nav>

          <nav className={styles.navCol} aria-label="Company">
            <h3 className={styles.groupTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.link}>About</Link></li>
              <li><a href="#projects" className={styles.link}>Case studies</a></li>
              <li><a href="#pricing" className={styles.link}>Estimator</a></li>
              <li><a href="#book" className={styles.link}>Contact</a></li>
            </ul>
          </nav>

          <div className={styles.navCol} aria-label="Connect">
            <h3 className={styles.groupTitle}>Connect</h3>
            <ul className={styles.linkList}>
              <li><a href="#book" className={styles.link}>15‑min intro</a></li>
              <li><a href="mailto:hello@vibeweb.studio" className={styles.link}>hello@vibeweb.studio</a></li>
              <li><a href="#" className={styles.link} aria-disabled>LinkedIn</a></li>
              <li><a href="#" className={styles.link} aria-disabled>Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Vibe Web Studio. All rights reserved.
          </p>
          <ul className={styles.legalLinks}>
            <li><a href="#" className={styles.linkMuted} aria-disabled>Privacy</a></li>
            <li><a href="#" className={styles.linkMuted} aria-disabled>Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
