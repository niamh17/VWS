import React, { useState, useCallback } from 'react';
import styles from './ServicesSection.module.css';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  projectsLabel?: string;
  description: string;
  images: { url: string; alt: string; rotation: number }[];
}

// Image sources picked as royalty-free placeholders (Unsplash) – replace with brand assets as needed
const services: ServiceItem[] = [
  {
    id: 'landing-pages',
    number: '001',
    title: 'Landing pages',
    projectsLabel: '12 projects',
    description: 'Responsive, fast and SEO‑ready pages built to convert visitors into qualified leads.',
    images: [
      { url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=60', alt: 'Designers reviewing a landing layout', rotation: -3 },
      { url: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&w=400&q=60', alt: 'Analytics dashboard tracking conversions', rotation: 6 }
    ]
  },
  {
    id: 'social-ads',
    number: '002',
    title: 'Social media ads',
    projectsLabel: '48 campaigns',
    description: 'High‑performing creative & copy variations optimized per platform to scale ROAS.',
    images: [
      { url: 'https://images.unsplash.com/photo-1551816230-ef5deaed3a56?auto=format&fit=crop&w=400&q=60', alt: 'Hands holding smartphone social feed', rotation: -4 },
      { url: 'https://images.unsplash.com/photo-1603352527367-dbc271f37da4?auto=format&fit=crop&w=400&q=60', alt: 'Colorful ad creative storyboard', rotation: 5 }
    ]
  },
  {
    id: 'web-apps',
    number: '003',
    title: 'Web apps',
    projectsLabel: '9 builds',
    description: 'Custom full‑stack applications with clean UI, modular architecture and CI/CD baked in.',
    images: [
      { url: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=60', alt: 'Developer writing code', rotation: -5 },
      { url: 'https://images.unsplash.com/photo-1557825835-b452e0733e95?auto=format&fit=crop&w=400&q=60', alt: 'Modern web app dashboard UI', rotation: 7 }
    ]
  },
  {
    id: 'smart-funnels',
    number: '004',
    title: 'Smart funnels',
    projectsLabel: '27 funnels',
    description: 'Data‑driven funnels that nurture, segment and maximize customer lifetime value automatically.',
    images: [
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60', alt: 'Sticky notes planning funnel stages', rotation: -2 },
      { url: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=60', alt: 'Marketing analytics graphs', rotation: 6 }
    ]
  },
  {
    id: 'custom-backend',
    number: '005',
    title: 'Custom backend systems',
    projectsLabel: '6 systems',
    description: 'Secure & scalable APIs, background jobs and business automations powering operations & insights.',
    images: [
      { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=60', alt: 'Backend code in editor', rotation: -4 },
      { url: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=400&q=60', alt: 'Server infrastructure hardware', rotation: 5 }
    ]
  },
  {
    id: 'brand-kits',
    number: '006',
    title: 'Brand kits',
    projectsLabel: '14 kits',
    description: 'Complete visual identity systems: logos, color palettes, typography & usage guidelines in one exportable kit.',
    images: [
      { url: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd62?auto=format&fit=crop&w=400&q=60', alt: 'Color palette swatches and logo sketches', rotation: -3 },
      { url: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=60', alt: 'Typography and layout style samples', rotation: 5 }
    ]
  }
];

type ServicesProps = {
  tagText?: string;
  subtitle?: string;
  title?: string;
  description?: string;
  showHeader?: boolean;
  theme?: 'dark' | 'light';
  compact?: boolean;
  spacedTop?: boolean;
};

const ServicesSection: React.FC<ServicesProps> = ({
  tagText = 'services',
  subtitle = 'How can we help',
  title = 'Your business grow',
  description = 'Achieving goals for businesses and entrepreneurs around the globe.',
  showHeader = true,
  theme = 'dark',
  compact = false,
  spacedTop = false
}) => {
  const [openId, setOpenId] = useState<string>(services[0].id); // first open by default
  const toggle = useCallback((id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  }, []);

  return (
  <section className={`${styles.section} ${theme === 'light' ? styles.light : ''} ${compact ? styles.compact : ''} ${spacedTop ? styles.spacedTop : ''}`} id="services">
      <div className={styles.contentContainer}>
        {showHeader && (
          <div className={styles.headline}>
            <div className={styles.header}>
              <div className={styles.tagWrapper}><div className={styles.tag}><p className={styles.tagText}>{tagText}</p></div></div>
              <div className={styles.textContainer}>
                {subtitle ? <h2 className={styles.subtitle}>{subtitle}</h2> : null}
                {title ? <h2 className={styles.title}>{title}</h2> : null}
              </div>
            </div>
            {description ? <p className={styles.description}>{description}</p> : null}
          </div>
        )}
        <div className={styles.list}>
          {services.map((s) => {
            const open = openId === s.id;
            return (
              <div key={s.id} className={styles.item + (open ? ' ' + styles.itemOpen : '')}>
                <div
                  className={styles.question}
                  role="button"
                  tabIndex={0}
                  aria-expanded={open}
                  aria-controls={`svc-panel-${s.id}`}
                  onClick={() => toggle(s.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(s.id); } }}
                >
                  <div className={styles.number + (!open ? ' ' + styles.numberDim : '')}>{s.number}</div>
                  <h5 className={styles.serviceTitle}>{s.title}</h5>
                  <div className={styles.icon + (open ? ' ' + styles.iconOpen : '')} aria-hidden="true"><div className={styles.plusLine}/><div className={styles.plusLine}/></div>
                </div>
                {open && (
                  <div id={`svc-panel-${s.id}`} className={styles.answer}>
                    <div className={styles.answerInner}>
                      <div className={styles.images}>
                        {s.images.map((img,i)=>(
                          <div key={i} className={styles.imageWrap} style={{ transform:`rotate(${img.rotation}deg)` }}>
                            <img src={img.url} alt={img.alt} loading="lazy" />
                          </div>
                        ))}
                      </div>
                      <div className={styles.copyBlock}>
                        {s.projectsLabel && <p className={styles.projectsLabel}>{s.projectsLabel}</p>}
                        <p className={styles.serviceDescription}>{s.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
