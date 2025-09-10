import Script from 'next/script';

export const metadata = {
  title: 'Responsive Website Design | Vibe Web Studio',
  description: 'Responsive website design ensuring optimal UX and performance across devices and network conditions.'
};

export default function ResponsiveWebDesignPage() {
  return (
    <main style={{padding:'4rem 1rem', maxWidth: '880px', margin:'0 auto'}}>
      <nav aria-label="Breadcrumb" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
        <ol style={{display:'flex', gap:'.5rem', listStyle:'none', padding:0, margin:0}}>
          <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
          <li><a href="/services">Services</a></li><li aria-hidden="true">/</li>
          <li aria-current="page">Responsive Website Design</li>
        </ol>
      </nav>
      <h1>Responsive Website Design</h1>
      <p>Our responsive website design approach uses progressive enhancement, fluid layouts, and optimized media to deliver consistent experience at any viewport.</p>
      <h2>Device & Input Coverage</h2>
      <p>Tested against common breakpoints and diverse input types (touch, keyboard navigation, reduced motion preferences).</p>
      <h2>Performance Techniques</h2>
      <p>Adaptive image sizing, preloading critical resources, HTTP/2 multiplexing leverage, and script deferral.</p>
      <h2>Accessibility Alignment</h2>
      <p>Logical source order, focus management, semantic landmarks, and assistive tech compatibility.</p>
      <h2>Why Vibe Web Studio</h2>
      <p>We elevate responsive beyond resizing—ensuring performance budgets and intent clarity on every screen.</p>
      <section aria-labelledby="faq-heading-responsive">
        <h2 id="faq-heading-responsive">FAQs</h2>
        <details>
          <summary>Do you support legacy browsers?</summary>
          <p>We prioritize evergreen browsers; graceful degradation is implemented where feasible.</p>
        </details>
        <details>
          <summary>How do you test across devices?</summary>
          <p>Combination of responsive emulation, physical devices, and automated Lighthouse checks.</p>
        </details>
      </section>
      <p style={{marginTop:'2rem'}}><a href="/contact">Improve device UX →</a></p>
      <section>
        <h2>Related Services</h2>
        <ul>
          <li><a href="/services/web-design">High-Quality Website Design</a></li>
          <li><a href="/services/custom-web-design">Custom Website Design Services</a></li>
          <li><a href="/services/nextjs-development">Next.js Web Development Agency</a></li>
        </ul>
      </section>
      <Script id="faq-responsive" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'Do you support legacy browsers?', acceptedAnswer: { '@type': 'Answer', text: 'We prioritize evergreen browsers; graceful degradation is implemented where feasible.' } },
        { '@type': 'Question', name: 'How do you test across devices?', acceptedAnswer: { '@type': 'Answer', text: 'Combination of responsive emulation, physical devices, and automated Lighthouse checks.' } }
      ] }) }} />
      <Script id="breadcrumb-responsive" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vibewebstudio.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vibewebstudio.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Responsive Website Design', item: 'https://vibewebstudio.com/services/responsive-web-design' }
      ] }) }} />
    </main>
  );
}
