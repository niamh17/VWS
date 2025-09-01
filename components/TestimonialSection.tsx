"use client";
import Image from 'next/image';
import styles from './TestimonialSection.module.css';

// Data shaped to mirror new layout (featured + two secondary + availability)
const featured = {
  name: 'Maya Lennox',
  company: 'Colish',
  avatar: 'https://framerusercontent.com/images/7E6dhqT7tFSsdAd7Cb7r4uz5zQ.png',
  quote: 'Funnelz unlocked growth opportunities we didn’t even know were possible - we wish we went with them sooner!',
  rating: 5
};

const secondary = [
  {
    name: 'Eniola Kabubi',
    company: 'Ganache',
    avatar: 'https://framerusercontent.com/images/qraUvX5kJo7QEaaW1f6j02VtZ5o.png',
    quote: 'I would highly recommend for companies looking to seriously grow quick!'
  },
  {
    name: 'Aliyah Hassan',
    company: 'Hydrox',
    avatar: 'https://framerusercontent.com/images/XyDEk97IVtnsjY1hCEvEgMs1WXg.jpg',
    quote: 'Funnelz made our ad strategy crystal clear and focused on what truly mattered.'
  }
];

const Star = () => (
  <svg viewBox="0 0 24 24" className={styles.star} aria-hidden="true" fill="currentColor">
    <path d="M11.1 3.513c.35-.921 1.62-.921 1.97 0l1.77 4.66 4.97.297c.99.06 1.39 1.313.64 1.948l-3.8 3.246 1.17 4.83c.23.95-.81 1.688-1.64 1.17L12.1 17.89l-4.1 2.775c-.83.518-1.87-.22-1.64-1.17l1.17-4.83-3.8-3.246c-.75-.635-.35-1.889.64-1.948l4.97-.297 1.77-4.66Z" />
  </svg>
);

export default function TestimonialSection(){
  const month = new Date().toLocaleString('en-US',{ month:'long' });
  return (
    <section className={styles.testimonialSection} id="mission" aria-labelledby="testimonial-heading-a testimonial-heading-b">
      <div className={styles.inner}>
        {/* Headline styled like Services section */}
        <div className={styles.headlineCol}>
          <div className={styles.header}>
            <div className={styles.tagWrapper}><div className={styles.tag}><p className={styles.tagText}>Client success</p></div></div>
            <div className={styles.textContainer}>
              <h2 id="testimonial-heading-a" className={styles.subtitle}>No fluff</h2>
              <h2 id="testimonial-heading-b" className={styles.title}>Just results</h2>
            </div>
          </div>
        </div>
        <p className={styles.headlineAside}>We promise to deliver beyond your expectations for your business.</p>

        {/* Grid */}
        <div className={styles.cardsGrid}>
          {/* Featured dark card spanning two rows */}
          <figure className={`${styles.card} ${styles.featured}`} aria-label={`Testimonial from ${featured.name}`}>
            <div className={styles.quoteMark} aria-hidden="true">&quot;</div>
            <blockquote className={styles.featuredQuote}>{featured.quote}</blockquote>
            <div className={styles.authorRow}>
              <div className={styles.avatarLg}>
                <Image src={featured.avatar+"?scale-down-to=512"} alt="" fill sizes="64px" />
              </div>
              <div className={styles.authorMeta}>
                <div className={styles.authorName}>{featured.name}</div>
                <div className={styles.authorCompany}>{featured.company}</div>
                <div className={styles.starRow} aria-label={`${featured.rating} out of 5 stars`}>
                  {Array.from({length:featured.rating}).map((_,i)=><Star key={i} />)}
                </div>
              </div>
            </div>
          </figure>

          {/* Secondary testimonial top middle */}
          <figure className={`${styles.card} ${styles.lightCard} ${styles.midCard}`} aria-label={`Testimonial from ${secondary[0].name}`}>
            <div className={styles.quoteMarkLight} aria-hidden="true">&quot;</div>
            <blockquote className={styles.quote}>{secondary[0].quote}</blockquote>
            <div className={styles.authorRowSmall}>
              <div className={styles.avatarSm}>
                <Image src={secondary[0].avatar+"?scale-down-to=512"} alt="" fill sizes="44px" />
              </div>
              <div className={styles.authorMetaSmall}>
                <div className={styles.authorName}>{secondary[0].name}</div>
                <div className={styles.authorCompanyMuted}>{secondary[0].company}</div>
              </div>
            </div>
          </figure>

          {/* CTA bar top right */}
            <div className={styles.ctaBar} role="group" aria-label="Hear from our clients">
              <button className={styles.ctaBtn} type="button">
                <span className={styles.ctaIcon} aria-hidden="true" />
                Hear from our clients
              </button>
            </div>

          {/* Secondary testimonial right column lower */}
          <figure className={`${styles.card} ${styles.lightCard} ${styles.rightCard}`} aria-label={`Testimonial from ${secondary[1].name}`}>
            <div className={styles.quoteMarkLight} aria-hidden="true">&quot;</div>
            <blockquote className={styles.quote}>{secondary[1].quote}</blockquote>
            <div className={styles.authorRowSmall}>
              <div className={styles.avatarSm}>
                <Image src={secondary[1].avatar+"?scale-down-to=512"} alt="" fill sizes="44px" />
              </div>
              <div className={styles.authorMetaSmall}>
                <div className={styles.authorName}>{secondary[1].name}</div>
                <div className={styles.authorCompanyMuted}>{secondary[1].company}</div>
              </div>
            </div>
          </figure>

          {/* Availability tag card bottom middle */}
          <div className={`${styles.card} ${styles.availabilityCard}`} aria-label={`Availability for ${month}`}>
            <div className={styles.availabilityPill}>
              <span className={styles.availDot} aria-hidden="true" />
              <span className={styles.availText}>Available for {month}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
