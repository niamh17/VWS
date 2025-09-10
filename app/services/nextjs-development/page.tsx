import Script from 'next/script';

export const metadata = {
  title: 'Next.js Web Development Agency | Vibe Web Studio',
  description: 'Next.js web development agency services delivering performant, scalable, SEO-friendly applications.'
};

export default function NextJsDevelopmentPage() {
  return (
    <main style={{padding:'4rem 1rem', maxWidth: '880px', margin:'0 auto'}}>
      <nav aria-label="Breadcrumb" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
        <ol style={{display:'flex', gap:'.5rem', listStyle:'none', padding:0, margin:0}}>
          <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
          <li><a href="/services">Services</a></li><li aria-hidden="true">/</li>
          <li aria-current="page">Next.js Web Development Agency</li>
        </ol>
      </nav>
      <h1>Next.js Web Development Agency</h1>
      <p>We architect Next.js applications that marry marketing velocity with engineering rigor—hybrid rendering, edge caching, and incremental static regeneration tailored to your growth goals.</p>
      <h2>Architecture & Rendering Strategy</h2>
      <p>Static-first with selective dynamic routes, cache-control tuning, and image optimization pipelines.</p>
      <h2>Performance Engineering</h2>
      <p>Bundle analysis, route-level code splitting, script priority management, and Core Web Vitals monitoring.</p>
      <h2>Scalability & Maintainability</h2>
      <p>Typed components, lint & build guards, and progressive enhancement for resilience.</p>
      <h2>Why Vibe Web Studio</h2>
      <p>Full-stack insight across design, UX, and performance ensures cohesion from concept to production.</p>
      <section aria-labelledby="faq-heading-nextjs">
        <h2 id="faq-heading-nextjs">FAQs</h2>
        <details>
          <summary>Do you support migration to Next.js?</summary>
          <p>Yes. We migrate from monoliths or legacy frameworks preserving SEO signals and analytics continuity.</p>
        </details>
        <details>
          <summary>Can you integrate headless CMS?</summary>
          <p>We integrate headless CMS solutions adding content modeling and editorial workflows.</p>
        </details>
      </section>
      <p style={{marginTop:'2rem'}}><a href="/contact">Plan a Next.js roadmap →</a></p>
      <section>
        <h2>Related Services</h2>
        <ul>
          <li><a href="/services/web-design">High-Quality Website Design</a></li>
          <li><a href="/services/custom-web-design">Custom Website Design Services</a></li>
          <li><a href="/services/responsive-web-design">Responsive Website Design</a></li>
        </ul>
      </section>
      <Script id="faq-nextjs" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'Do you support migration to Next.js?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We migrate from monoliths or legacy frameworks preserving SEO signals and analytics continuity.' } },
        { '@type': 'Question', name: 'Can you integrate headless CMS?', acceptedAnswer: { '@type': 'Answer', text: 'We integrate headless CMS solutions adding content modeling and editorial workflows.' } }
      ] }) }} />
      <Script id="breadcrumb-nextjs" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vibewebstudio.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vibewebstudio.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Next.js Web Development Agency', item: 'https://vibewebstudio.com/services/nextjs-development' }
      ] }) }} />
    </main>
  );
}
