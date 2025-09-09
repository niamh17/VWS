"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './page.module.css';
import StatsSection from '../../components/StatsSection';
import ServicesSection from '../../components/ServicesSection';
import LogoLoopSection from '../../components/LogoLoopSection';
import CtaSection from '../../components/CtaSection';
import Footer from '../../components/Footer';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const Aurora = dynamic(() => import('../../components/Aurora'), { ssr: false });

const Star = () => (
  <svg viewBox="0 0 24 24" className={styles.star} aria-hidden="true" fill="currentColor">
    <path d="M11.1 3.513c.35-.921 1.62-.921 1.97 0l1.77 4.66 4.97.297c.99.06 1.39 1.313.64 1.948l-3.8 3.246 1.17 4.83c.23.95-.81 1.688-1.64 1.17L12.1 17.89l-4.1 2.775c-.83.518-1.87-.22-1.64-1.17l1.17-4.83-3.8-3.246c-.75-.635-.35-1.889.64-1.948l4.97-.297 1.77-4.66Z"/>
  </svg>
);

export default function AboutPage(){
  const techLogos = [
    { node: <SiReact />, title: 'React', href: 'https://react.dev' },
    { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
    { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
    { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    { src: '/n8n.svg', alt: 'n8n', title: 'n8n', href: 'https://n8n.io' },
    { src: '/figma.svg', alt: 'Figma', title: 'Figma', href: 'https://www.figma.com' },
    { src: '/make.svg', alt: 'Make', title: 'Make', href: 'https://www.make.com' },
  ];
  return (
    <>
      <div className="top-aurora-wrapper" aria-hidden="true">
        <Aurora colorStops={["#FFB871", "#FF6F32", "#FF3A14"]} amplitude={0.9} blend={0.5} speed={0.5} fps={40} maxDpr={1.1} />
      </div>

  <section className={`${styles.section} ${styles.hero}`} aria-labelledby="about-hero-title">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>About us</p></div></div>
          <h1 id="about-hero-title" className={styles.h1}>Designing Brands with Purpose</h1>
          <p className={styles.lede}>Welcome to our agency, where imagination thrives and boundaries fade. In the digital realm where creativity meets technology, we are the architects of innovation.</p>

          <div className={styles.mediaWrap}>
            <div className={styles.media}>
              <Image
                src="https://framerusercontent.com/images/uORTg29YLvWi7IjuUFb7eftDLjY.png"
                alt="team"
                width={1600}
                height={1000}
                priority
              />
            </div>
            <div className={styles.statsBar}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}><Star /><div className={styles.statText}><p className={styles.statNum}>18</p><p className={styles.statLabel}>Years of experience</p></div></div>
                <div className={styles.statCard}><Star /><div className={styles.statText}><p className={styles.statNum}>125</p><p className={styles.statLabel}>Projects completed</p></div></div>
                <div className={styles.statCard}><Star /><div className={styles.statText}><p className={styles.statNum}>85</p><p className={styles.statLabel}>Happy customers</p></div></div>
                <div className={styles.statCard}><Star /><div className={styles.statText}><p className={styles.statNum}>24</p><p className={styles.statLabel}>Awards earned</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Mission section reused from homepage */}
  <StatsSection />

  {/* What we do (services) */}
  <ServicesSection tagText="What we do" subtitle="Services tailored to" title="Growth" theme="light" compact spacedTop />

  {/* Tech logos loop */}
  <LogoLoopSection logos={techLogos} title="The tech stack we use to build our solutions" withTopRail />
  {/* CTA + footer */}
  <CtaSection title="Let’s build something customers love" subtitle="Grab a quick 15‑minute slot and we’ll map the next best step for your growth." ctaHref="/#book" ctaLabel="Book a meeting" />
  <Footer />
    </>
  );
}
