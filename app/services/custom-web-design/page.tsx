import Script from 'next/script';

export const metadata = {
  title: 'Custom Website Design Services | Vibe Web Studio',
  description: 'Custom website design services delivering unique brand experiences, optimized for speed, accessibility, and conversion.'
};

export default function CustomWebDesignPage() {
  return (
    <main style={{padding:'4rem 1rem', maxWidth: '880px', margin:'0 auto'}}>
      <nav aria-label="Breadcrumb" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
        <ol style={{display:'flex', gap:'.5rem', listStyle:'none', padding:0, margin:0}}>
          <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
          <li><a href="/services">Services</a></li><li aria-hidden="true">/</li>
          <li aria-current="page">Custom Website Design Services</li>
        </ol>
      </nav>
      <h1>Custom Website Design Services</h1>
      <p>We deliver custom website design services that go beyond templates—fully bespoke interfaces aligned with brand voice and business KPIs.</p>
      <h2>Discovery & Strategy</h2>
      <p>Audience profiling, value proposition articulation, information architecture, and component inventory planning.</p>
      <h2>Design System Foundations</h2>
      <p>Token-driven spacing, typography, palette, and interaction states produce scalable, maintainable design.</p>
      <h2>Development Approach</h2>
      <p>Performance-first, modular, accessible components with edge-delivered assets and incremental static regeneration.</p>
      <h2>Quality Assurance</h2>
      <p>Automated Lighthouse checks, visual regression potential (future), and manual accessibility review.</p>
      <h2>Why Vibe Web Studio</h2>
      <p>Measured iterations, fast render times, and clear handoff documentation.</p>
      <section aria-labelledby="faq-heading-custom">
        <h2 id="faq-heading-custom">FAQs</h2>
        <details>
          <summary>Do you work with existing brand guidelines?</summary>
          <p>Yes. We can extend or systematize your current brand while maintaining consistency.</p>
        </details>
        <details>
          <summary>Can you migrate from another platform?</summary>
          <p>We migrate sites from WordPress, Webflow, and bespoke stacks while preserving SEO equity.</p>
        </details>
      </section>
      <p style={{marginTop:'2rem'}}><a href="/contact">Get a custom scope →</a></p>
      <section>
        <h2>Related Services</h2>
        <ul>
          <li><a href="/services/web-design">High-Quality Website Design</a></li>
          <li><a href="/services/responsive-web-design">Responsive Website Design</a></li>
          <li><a href="/services/nextjs-development">Next.js Web Development Agency</a></li>
        </ul>
      </section>
      <Script id="faq-custom" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'Do you work with existing brand guidelines?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We can extend or systematize your current brand while maintaining consistency.' } },
        { '@type': 'Question', name: 'Can you migrate from another platform?', acceptedAnswer: { '@type': 'Answer', text: 'We migrate sites from WordPress, Webflow, and bespoke stacks while preserving SEO equity.' } }
      ] }) }} />
      <Script id="breadcrumb-custom" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vibewebstudio.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vibewebstudio.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Custom Website Design Services', item: 'https://vibewebstudio.com/services/custom-web-design' }
      ] }) }} />
    </main>
  );
}
