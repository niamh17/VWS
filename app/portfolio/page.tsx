export const metadata = { title: 'Portfolio | Vibe Web Studio', description: 'Selected website design & Next.js development work delivered by Vibe Web Studio.' };
export default function PortfolioPage(){
  return (<main style={{padding:'4rem 1rem', maxWidth: '960px', margin:'0 auto'}}>
    <nav aria-label="Breadcrumb" style={{fontSize:'0.75rem', marginBottom:'1rem'}}>
      <ol style={{display:'flex', gap:'.5rem', listStyle:'none', padding:0, margin:0}}>
        <li><a href="/">Home</a></li><li aria-hidden="true">/</li>
        <li aria-current="page">Portfolio</li>
      </ol>
    </nav>
    <h1>Portfolio</h1>
    <p>Case studies coming soon. Meanwhile explore our services or start a conversation.</p>
    <p style={{marginTop:'2rem'}}><a href="/contact">Discuss a project →</a></p>
  </main>);
}
