import { getPost, blogPosts, getAdjacent } from '../../../lib/blogPosts';
import styles from '../Blog.module.css';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

export function generateStaticParams(){
  return blogPosts.map(p => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if(!post) return { title: 'Post not found' };
  const keywords = [post.primaryKeyword, ...post.secondaryKeywords];
  return {
    title: `${post.title} – Vibe Web Studio Blog`,
    description: post.excerpt,
    keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article'
    },
    other: {
      'article:published_time': post.date,
      'article:modified_time': post.updated || post.date
    }
  };
}

export default function BlogPostPage({ params }: Props){
  const post = getPost(params.slug);
  if(!post) return notFound();
  const { prev, next } = getAdjacent(post.slug);
  // Simple markdown-lite to JSX (only ## and ### headings)
  const parts = post.content.split(/\n\n+/).map((block,i)=>{
    if(block.startsWith('## ')) return <h2 key={i}>{block.replace(/^## /,'')}</h2>;
    if(block.startsWith('### ')) return <h3 key={i}>{block.replace(/^### /,'')}</h3>;
    if(/^\d+\./.test(block.trim())){
      // ordered list detection
      const items = block.split(/\n/).map(l=> l.replace(/^\d+\.\s*/,'')).filter(Boolean);
      return <ol key={i}>{items.map((it,j)=><li key={j}>{it}</li>)}</ol>;
    }
    if(block.trim().startsWith('1. ')) return null;
    if(block.includes('\n')){
      const lines = block.split(/\n/).filter(Boolean);
      return <p key={i}>{lines.join(' ')}</p>;
    }
    return <p key={i}>{block}</p>;
  });
  return (
    <>
  <section className={`${styles.section} ${styles.postSection}`} aria-labelledby="post-title">
        <div className={styles.inner}>
          <header className={styles.postHeader}>
            <p className={styles.postMeta}>{new Date(post.date).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})} · {post.readingMinutes} min read · {post.primaryKeyword}</p>
            <h1 id="post-title" className={styles.postTitle}>{post.title}</h1>
          </header>
          <article className={styles.postBody} itemScope itemType="https://schema.org/Article">
            {parts}
            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="keywords" content={[post.primaryKeyword, ...post.secondaryKeywords].join(', ')} />
          </article>
          <footer className={styles.postFooter}>
            <div style={{display:'flex', gap:'12px'}}>
              {prev && <Link className={styles.adjLink} href={`/blog/${prev.slug}`} aria-label={`Previous: ${prev.title}`}>← {prev.title}</Link>}
              {next && <Link className={styles.adjLink} href={`/blog/${next.slug}`} aria-label={`Next: ${next.title}`}>{next.title} →</Link>}
            </div>
            <Link href="/blog" className={styles.adjLink}>All posts</Link>
          </footer>
        </div>
      </section>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context':'https://schema.org', '@type':'Article', headline: post.title, datePublished: post.date,
        keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(', '), url:`${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${post.slug}`
      })}} />
    </>
  );
}
