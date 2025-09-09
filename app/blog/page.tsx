import { getAllPosts, CORE_KEYWORDS } from '../../lib/blogPosts';
import styles from './Blog.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – Websites, Funnels & CRO Insights',
  description: 'Actionable articles on conversion-focused websites, high-converting sales funnels, landing page CRO & funnel analytics tracking.',
  keywords: CORE_KEYWORDS,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog – Websites, Funnels & CRO Insights',
    description: 'Actionable breakdowns on building a conversion-focused website & high-converting sales funnel.',
    url: '/blog',
    siteName: 'Vibe Web Studio',
    type: 'website'
  }
};

export default function BlogIndex(){
  const posts = getAllPosts();
  return (
    <>
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="blog-title">
        <div className={styles.inner}>
          <h1 id="blog-title" className={styles.h1}>Insights on Websites & Funnels</h1>
          <p className={styles.lede}>Deep dives, playbooks and short tactical posts about shipping a conversion-focused website, a high-converting sales funnel and staying fast.</p>
          <div className={styles.postsList}>
            {posts.map(p=> (
              <article key={p.slug} className={styles.card} itemScope itemType="https://schema.org/Article">
                <p className={styles.cardMeta}>{new Date(p.date).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})} · {p.readingMinutes} min</p>
                <h2 className={styles.cardTitle} itemProp="headline"><Link href={`/blog/${p.slug}`} className={styles.readMore}>{p.title}</Link></h2>
                <p className={styles.cardExcerpt}>{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className={styles.readMore} aria-label={`Read: ${p.title}`}>Read post →</Link>
                <meta itemProp="datePublished" content={p.date} />
                <meta itemProp="keywords" content={[p.primaryKeyword, ...p.secondaryKeywords].join(', ')} />
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Schema.org ItemList JSON-LD */}
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: posts.map((p,i)=>({ '@type':'ListItem', position:i+1, url:`${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${p.slug}` }))
      })}} />
    </>
  );
}
