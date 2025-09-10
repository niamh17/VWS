import Script from 'next/script';

export const metadata = {
  title: 'High-Quality Website Design | Vibe Web Studio',
  description: 'High-quality website design built to convert. Fast, accessible, responsive websites powered by modern tech.'
};

export default function HighQualityWebDesignPage() {
  return (
    <main style={{padding:'4rem 1rem', maxWidth: '880px', margin:'0 auto'}}>
      <nav aria-label="Breadcrumb" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
        <ol style={{display:'flex', gap:'.5rem', listStyle:'none', padding:0, margin:0}}>
          <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
          <li><a href="/services">Services</a></li><li aria-hidden="true">/</li>
          <li aria-current="page">High-Quality Website Design</li>
        </ol>
      </nav>
      <h1>High-Quality Website Design, Built to Convert</h1>
      <p>We craft high-quality website design experiences focused on business outcomes: speed, accessibility, and conversion. Every build is performance-budgeted and shipped with analytics readiness.</p>
      <h2>Our Process</h2>
      <p>Strategy, UX, high-fidelity design, component-driven build, QA, launch, and ongoing iterative optimization.</p>
      <h2>Performance & Accessibility</h2>
      <p>Core Web Vitals oriented development: targeted LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms. Semantic HTML, ARIA only when needed, and inclusive color contrast.</p>
      <h2>Tech Stack</h2>
      <p>Next.js App Router, image optimization pipelines, edge delivery, incremental static regeneration, and analytics hooks.</p>
      <h2>Case Studies</h2>
      <p>Coming soon – showcasing measurable lifts in conversion and engagement.</p>
      <h2>Pricing Ranges</h2>
      <p>Typical website projects start at $5K+ depending on complexity, integrations, and content readiness.</p>
      <h2>Why Vibe Web Studio</h2>
      <p>Data-led decisions, design-system thinking, and rigorous QA produce resilient, scalable marketing sites.</p>
      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">FAQs</h2>
        <details>
          <summary>What makes a website high quality?</summary>
          <p>Clear goals, fast performance (LCP ≤ 2.5s), accessible UX, and measurable conversions.</p>
        </details>
        <details>
          <summary>How long does a typical project take?</summary>
          <p>Small sites usually take 4–6 weeks depending on scope, integrations, and content readiness.</p>
        </details>
      </section>
      <p style={{marginTop:'2rem'}}><a href="/contact">Start your project →</a></p>
      <section>
        <h2>Related Services</h2>
        <ul>
          <li><a href="/services/custom-web-design">Custom Website Design Services</a></li>
          <li><a href="/services/responsive-web-design">Responsive Website Design</a></li>
          <li><a href="/services/nextjs-development">Next.js Web Development Agency</a></li>
        </ul>
      </section>
      <Script id="faq-web-design" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What makes a website high quality?', acceptedAnswer: { '@type': 'Answer', text: 'Clear goals, fast performance (LCP ≤ 2.5s), accessible UX, and measurable conversions.' } },
          { '@type': 'Question', name: 'How long does a typical project take?', acceptedAnswer: { '@type': 'Answer', text: 'Small sites usually take 4–6 weeks depending on scope, integrations, and content readiness.' } }
        ]
      }) }} />
      <Script id="breadcrumb-web-design" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vibewebstudio.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vibewebstudio.com/services' },
          { '@type': 'ListItem', position: 3, name: 'High-Quality Website Design', item: 'https://vibewebstudio.com/services/web-design' }
        ]
      }) }} />
    </main>
  );
}
