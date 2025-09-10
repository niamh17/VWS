import Script from 'next/script';

export const metadata = {
  title: 'Professional Web Design Agency | Vibe Web Studio',
  description: 'Professional web design agency services combining strategy, UX, conversion copy, and performance engineering.'
};

export default function ProfessionalAgencyPage() {
  return (
    <main style={{padding:'4rem 1rem', maxWidth: '880px', margin:'0 auto'}}>
      <nav aria-label="Breadcrumb" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
        <ol style={{display:'flex', gap:'.5rem', listStyle:'none', padding:0, margin:0}}>
          <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
          <li><a href="/services">Services</a></li><li aria-hidden="true">/</li>
          <li aria-current="page">Professional Web Design Agency</li>
        </ol>
      </nav>
      <h1>Professional Web Design Agency Expertise</h1>
      <p>We operate as an embedded professional web design agency partner—aligning stakeholder goals, defining KPIs, and shipping design systems that scale.</p>
      <h2>Agency Methodology</h2>
      <p>Discovery workshops, content architecture, prototype validation, iterative development, launch runway, and growth sprints.</p>
      <h2>Collaboration & Transparency</h2>
      <p>Shared dashboards covering performance budgets, backlog, QA status, and post-launch measurement.</p>
      <h2>Tooling</h2>
      <p>Figma, a11y linting, automated Lighthouse tracking, analytics & session replay (privacy conscious).</p>
      <h2>Why Vibe Web Studio</h2>
      <p>Lean team, senior execution, direct communication, and measurable outcomes.</p>
      <section aria-labelledby="faq-heading-agency">
        <h2 id="faq-heading-agency">FAQs</h2>
        <details>
          <summary>How do you manage communication?</summary>
          <p>Weekly async updates plus milestone reviews; shared project board for full transparency.</p>
        </details>
        <details>
          <summary>Do you offer ongoing retainers?</summary>
          <p>Yes. Optimization & enhancement retainers available post-launch based on roadmap priorities.</p>
        </details>
      </section>
      <p style={{marginTop:'2rem'}}><a href="/contact">Discuss your goals →</a></p>
      <section>
        <h2>Related Services</h2>
        <ul>
          <li><a href="/services/web-design">High-Quality Website Design</a></li>
          <li><a href="/services/custom-web-design">Custom Website Design Services</a></li>
          <li><a href="/services/responsive-web-design">Responsive Website Design</a></li>
        </ul>
      </section>
      <Script id="faq-agency" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
          { '@type': 'Question', name: 'How do you manage communication?', acceptedAnswer: { '@type': 'Answer', text: 'Weekly async updates plus milestone reviews; shared project board for full transparency.' } },
          { '@type': 'Question', name: 'Do you offer ongoing retainers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Optimization & enhancement retainers available post-launch based on roadmap priorities.' } }
        ] }) }} />
      <Script id="breadcrumb-agency" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vibewebstudio.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://vibewebstudio.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Professional Web Design Agency', item: 'https://vibewebstudio.com/services/professional-web-design-agency' }
      ] }) }} />
    </main>
  );
}
