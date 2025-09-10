export const metadata = {
  title: 'Services | Vibe Web Studio',
  description: 'Custom, high-quality, responsive, and Next.js powered website design & development services.'
};

export default function ServicesIndex() {
  return (
    <main className="container" style={{padding:'4rem 1rem', maxWidth: '960px', margin: '0 auto'}}>
      <nav aria-label="Breadcrumb" style={{fontSize:'0.875rem', marginBottom:'1rem'}}>
        <ol style={{listStyle:'none', padding:0, margin:0, display:'flex', gap:'.5rem'}}>
          <li><a href="/">Home</a></li>
          <li aria-hidden="true">/</li>
          <li>Services</li>
        </ol>
      </nav>
      <h1 style={{fontSize:'2.25rem', lineHeight:1.15}}>Our Web Design & Development Services</h1>
      <p>Explore our core service offerings spanning high-quality custom website design, responsive builds, professional agency processes, and Next.js development performance engineering.</p>
      <ul style={{marginTop:'2rem', lineHeight:1.6}}>
        <li><a href="/services/web-design">High-Quality Website Design</a></li>
        <li><a href="/services/professional-web-design-agency">Professional Web Design Agency</a></li>
        <li><a href="/services/custom-web-design">Custom Website Design Services</a></li>
        <li><a href="/services/responsive-web-design">Responsive Website Design</a></li>
        <li><a href="/services/nextjs-development">Next.js Web Development Agency</a></li>
      </ul>
    </main>
  );
}
