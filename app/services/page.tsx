import styles from './page.module.css';

export const metadata = {
  title: 'Services | Vibe Web Studio',
  description: 'Custom, high-quality, responsive, and Next.js powered website design & development services.'
};

interface ServiceMeta {
  href: string; title: string; description: string;
}
const SERVICES: ServiceMeta[] = [
  { href: '/services/web-design', title: 'High-Quality Website Design', description: 'Modern, on-brand marketing sites that convert visitors into leads.' },
  { href: '/services/professional-web-design-agency', title: 'Professional Web Design Agency', description: 'Structured, reliable processes, clear communication & delivery confidence.' },
  { href: '/services/custom-web-design', title: 'Custom Website Design Services', description: 'Tailored UI/UX with performance-focused implementation (no bloated themes).' },
  { href: '/services/responsive-web-design', title: 'Responsive Website Design', description: 'Device‑adaptive layouts ensuring fast, accessible experiences everywhere.' },
  { href: '/services/nextjs-development', title: 'Next.js Web Development Agency', description: 'SEO‑ready, edge‑optimized, and scalable apps powered by Next.js.' }
];

export default function ServicesIndex() {
  return (
    <div className={styles.pageOuter}>
      <div className={styles.inner}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumb}>
            <li><a href="/">Home</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Services</li>
          </ol>
        </nav>
        <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>Services</p></div></div>
        <h1 className={styles.title}>Web Design & Development Services</h1>
        <p className={styles.lede}>High-quality websites & funnels crafted with performance, clarity and conversion in mind. Explore our core capabilities below.</p>
        <ul className={styles.servicesList}>
          {SERVICES.map(s => (
            <li key={s.href} className={styles.item}>
              <a className={styles.serviceLink} href={s.href}>
                <h2 className={styles.serviceHeading}>{s.title}</h2>
                <p className={styles.serviceDesc}>{s.description}</p>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.ctaRow}>
          <a href="/contact" className={styles.cta} aria-label="Start a project">Start a project →</a>
        </div>
        <div className={styles.grid} aria-label="Quick service highlights">
          <div className={styles.card}>
            <p className={styles.cardTitle}>Approach</p>
            <p className={styles.cardCopy}>Lean, purposeful builds that avoid plugin bloat and theme lock‑in.</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Performance</p>
            <p className={styles.cardCopy}>Core Web Vitals driven – image optimization, edge caching, accessibility.</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Stack</p>
            <p className={styles.cardCopy}>Next.js, TypeScript, React, design systems & automation integrations.</p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Process</p>
            <p className={styles.cardCopy}>Discovery → Wireframe → Design → Build → Launch & iterate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
