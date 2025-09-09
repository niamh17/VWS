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
              <a href="/#book" className={styles.ctaBtn} aria-label="Book a free 15 minute intro call">Book a free 15‑min intro</a>
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
              <li><a href="/#book" className={styles.link}>Book a call</a></li>
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
            <ul className={`${styles.linkList} ${styles.socialList}`}>
              <li>
                <a href="/#book" className={`${styles.link} ${styles.socialLink}`} aria-label="Book a 15‑min intro">
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20H4.5A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1zm12.5 7H4.5v8.5c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V9z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="mailto:inquiry.vws@gmail.com" className={`${styles.link} ${styles.socialLink}`} aria-label="Email">
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm18 4.236-8.4 5.25a1 1 0 0 1-1.2 0L3 9.236V17a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.236zM4.2 7l7.4 4.625L19 7H4.2z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className={`${styles.link} ${styles.socialLink}`} aria-label="LinkedIn" aria-disabled>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.267 2.371 4.267 5.454v6.289zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.114 20.452H2.56V9h3.554v11.452z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className={`${styles.link} ${styles.socialLink}`} aria-label="Instagram" aria-disabled>
                  <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.774 1.153 4.92 4.92 0 0 1 1.153 1.774c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.153 1.774 4.92 4.92 0 0 1-1.774 1.153c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.92 4.92 0 0 1-1.774-1.153 4.92 4.92 0 0 1-1.153-1.774c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.153-1.774A4.92 4.92 0 0 1 5.493 2.636c.457-.163 1.257-.347 2.427-.403C9.186 2.175 9.566 2.163 12 2.163zm0 1.837c-3.16 0-3.532.012-4.78.069-.998.046-1.538.213-1.897.355-.478.186-.82.407-1.178.765-.358.358-.579.7-.765 1.178-.142.359-.309.899-.355 1.897-.057 1.248-.069 1.62-.069 4.78s.012 3.532.069 4.78c.046.998.213 1.538.355 1.897.186.478.407.82.765 1.178.358.358.7.579 1.178.765.359.142.899.309 1.897.355 1.248.057 1.62.069 4.78.069s3.532-.012 4.78-.069c.998-.046 1.538-.213 1.897-.355.478-.186.82-.407 1.178-.765.358-.358.579-.7.765-1.178.142-.359.309-.899.355-1.897.057-1.248.069-1.62.069-4.78s-.012-3.532-.069-4.78c-.046-.998-.213-1.538-.355-1.897a3.08 3.08 0 0 0-.765-1.178 3.08 3.08 0 0 0-1.178-.765c-.359-.142-.899-.309-1.897-.355-1.248-.057-1.62-.069-4.78-.069zm0 3.838a5.162 5.162 0 1 1 0 10.324A5.162 5.162 0 0 1 12 7.838zm0 1.837a3.325 3.325 0 1 0 0 6.65 3.325 3.325 0 0 0 0-6.65zm5.338-2.482a1.205 1.205 0 1 1 0 2.41 1.205 1.205 0 0 1 0-2.41z"
                    />
                  </svg>
                </a>
              </li>
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
