export const metadata = { title: 'HTML Sitemap | Vibe Web Studio', description: 'Human-readable HTML sitemap for Vibe Web Studio.' };

const links = [
  '/', '/about', '/contact', '/blog', '/websites', '/funnels', '/portfolio', '/services',
  '/services/web-design', '/services/professional-web-design-agency', '/services/custom-web-design', '/services/responsive-web-design', '/services/nextjs-development'
];

export default function HtmlSitemap(){
  return (<main style={{padding:'4rem 1rem', maxWidth:'720px', margin:'0 auto'}}>
    <nav aria-label="Breadcrumb" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
      <ol style={{display:'flex', gap:'.5rem', listStyle:'none', padding:0, margin:0}}>
        <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
        <li aria-current="page">HTML Sitemap</li>
      </ol>
    </nav>
    <h1>HTML Sitemap</h1>
    <ul style={{columns:2, gap:'2rem', listStyle:'none', padding:0}}>
      {links.map(l => <li key={l}><a href={l}>{l}</a></li>)}
    </ul>
  </main>);
}
