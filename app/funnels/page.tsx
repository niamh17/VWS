"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import styles from './pageStyles.module.css';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { motion as m, useReducedMotion } from 'framer-motion';

// Reuse Aurora background like homepage
const Aurora = dynamic(() => import('../../components/Aurora'), { ssr: false });

export default function FunnelsPage() {
  const prefersReduced = useReducedMotion();
  const ease: any = [0.22, 1, 0.36, 1];
  const fadeUp = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease } }
  };
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } }
  };
  const slowContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } }
  };
  return (
    <>
      <div className="top-aurora-wrapper" aria-hidden="true">
        <Aurora
          colorStops={["#FFB871", "#FF6F32", "#FF3A14"]}
          amplitude={0.9}
          blend={0.5}
          speed={0.5}
          fps={40}
          maxDpr={1.1}
        />
      </div>

      {/* Hero */}
      <section className={`${styles.section} ${styles.hero}`} aria-labelledby="funnels-hero-title">
        <div className={styles.inner}>
          <m.div className={styles.heroCol} initial="hidden" animate="show" variants={container}>
            <m.h1 id="funnels-hero-title" className={styles.h1} variants={fadeUp}>High Conversion Funnels, Built Fast and Built to Win</m.h1>
            <m.p className={styles.lede} variants={fadeUp}>Turn clicks into customers in 21 days. We plan, write, and ship complete revenue funnels (conversion page + irresistible offer + smart automations) so your ad spend stops leaking and your pipeline fills.</m.p>
            <m.div className={styles.ctaRow} variants={fadeUp}>
              <Link href="#book" className={styles.primaryBtn} aria-label="Start my funnel">
                <span className={styles.flipWrap} aria-hidden="true">
                  <span className={styles.flipMeasure}>Start my funnel</span>
                  <span className={styles.flipFront}>Start my funnel</span>
                  <span className={styles.flipBack}>Start my funnel</span>
                </span>
              </Link>
              <Link href="#plan" className={styles.secondaryBtn} aria-label="See the 21-day plan">
                <span className={styles.flipWrap} aria-hidden="true">
                  <span className={styles.flipMeasure}>See the 21-day plan</span>
                  <span className={styles.flipFront}>21‑day plan</span>
                  <span className={styles.flipBack}>See the 21-day plan</span>
                </span>
              </Link>
            </m.div>
            <m.div className={styles.metaStrip} variants={fadeIn}>
              <div className={styles.metaTitle}>Trusted by founders and teams who want speed, clarity, and measurable growth.</div>
              {/* Desktop / large view grid (unchanged) */}
              <m.div className={styles.trustGrid} aria-label="trusted testimonials" variants={container} initial="hidden" animate="show">
                <m.div className={styles.trustItem} variants={fadeUp}>“Fast and focused”</m.div>
                <m.div className={styles.trustItem} variants={fadeUp}>“Clear plan, real results”</m.div>
                <m.div className={styles.trustItem} variants={fadeUp}>“CPA dropped 32%”</m.div>
                <m.div className={styles.trustItem} variants={fadeUp}>“Shipped in 3 weeks”</m.div>
              </m.div>
              {/* Mobile infinite carousel */}
              <div className={styles.trustCarousel} aria-label="trusted testimonials carousel">
                <div className={styles.trustTrack} role="list">
                  <div className={styles.trustItem} role="listitem">“Fast and focused”</div>
                  <div className={styles.trustItem} role="listitem">“Clear plan, real results”</div>
                  <div className={styles.trustItem} role="listitem">“CPA dropped 32%”</div>
                  <div className={styles.trustItem} role="listitem">“Shipped in 3 weeks”</div>
                  {/* Duplicate set for seamless loop */}
                  <div className={styles.trustItem} role="listitem">“Fast and focused”</div>
                  <div className={styles.trustItem} role="listitem">“Clear plan, real results”</div>
                  <div className={styles.trustItem} role="listitem">“CPA dropped 32%”</div>
                  <div className={styles.trustItem} role="listitem">“Shipped in 3 weeks”</div>
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Why most funnels stall */}
      <section className={styles.section} aria-labelledby="why-heading">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>Why funnels stall</p></div></div>
          <m.h2 id="why-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-20% 0% -10% 0%' }}>Why most funnels stall (and how yours won’t)</m.h2>
          <m.div className={styles.cardGrid} variants={slowContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0% -10% 0%' }}>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>Vague promises = vague results.</h3><p className={styles.cardBody}>We replace generalities with specific, testable claims that speak to what buyers already want.</p></m.div>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>“Pretty but slow” pages kill intent.</h3><p className={styles.cardBody}>We engineer for speed from day one.</p></m.div>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>Too much talk, not enough proof.</h3><p className={styles.cardBody}>We show the mechanism, place proof where doubts spike, and make the next step obvious.</p></m.div>
          </m.div>
        </div>
      </section>

      {/* What you get */}
      <section className={styles.section} aria-labelledby="stack-heading">
        <div className={styles.inner}>
      <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>What you get</p></div></div>
          <m.h2 id="stack-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>The Vibe Funnel Stack</m.h2>
          <m.div className={styles.listGrid} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0% -10% 0%' }}>
            <div className={styles.listCol}>
              <m.ul className={styles.checkList} variants={container}>
                <m.li variants={fadeUp}><strong>Offer & Audience Sprint (Day 0 to 2):</strong> Nail the dominant desire, audience awareness, and a promise we can defend.</m.li>
                <m.li variants={fadeUp}><strong>Conversion Page(s) in Next.js:</strong> Above the fold clarity, risk reversal, social proof, urgency, and accessibility, purpose built to pass speed checks.</m.li>
                <m.li variants={fadeUp}><strong>Persuasion-First Copywriting:</strong> Headlines and body matched to market awareness; long-form only when the sell needs it.</m.li>
                <m.li variants={fadeUp}><strong>Proof System:</strong> Testimonials, “how it works,” side by side comparisons, trust badges.</m.li>
              </m.ul>
            </div>
            <div className={styles.listCol}>
              <m.ul className={styles.checkList} variants={container}>
                <m.li variants={fadeUp}><strong>Email & DM Automations:</strong> 5 to 7 message nurture + follow up logic; CRM/Zapier wiring so no lead gets left behind.</m.li>
                <m.li variants={fadeUp}><strong>Analytics & CRO Toolkit:</strong> GA4, Tag Manager, heatmaps/session recordings, and a live CRO dashboard.</m.li>
                <m.li variants={fadeUp}><strong>Headless CMS + 1 hour training:</strong> Update offers, copy, and sections without dev tickets.</m.li>
                <m.li variants={fadeUp}><strong>Accessibility & Trust Pack:</strong> WCAG minded UI, SSL, badges, and checkout reassurance to remove purchase anxiety.</m.li>
              </m.ul>
            </div>
          </m.div>
          <div className={styles.centerCta}><Link href="#full-stack" className={styles.secondaryBtn}>Show me the full stack</Link></div>
        </div>
      </section>

      {/* Mechanism */}
      <section className={styles.section} aria-labelledby="mechanism-heading">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>The mechanism</p></div></div>
          <m.h2 id="mechanism-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>How your funnel works</m.h2>
          <m.ul className={styles.bullets} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <m.li variants={fadeUp}><strong>Lead with desire, not features.</strong> Open on the single promise your market already craves.</m.li>
            <m.li variants={fadeUp}><strong>Show the mechanism.</strong> Make “how it works” tangible so belief keeps pace with the promise.</m.li>
            <m.li variants={fadeUp}><strong>Stack specific proof.</strong> Place testimonials, demonstrations, and comparisons at likely objection points.</m.li>
            <m.li variants={fadeUp}><strong>Make action easy.</strong> Short form, plain language, one obvious next step.</m.li>
          </m.ul>
        </div>
      </section>

      {/* 21-Day Plan */}
      <section className={styles.section} id="plan" aria-labelledby="plan-heading">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>Timeline</p></div></div>
          <m.h2 id="plan-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>21 Day Launch Plan</m.h2>
          <m.div className={styles.timeline} variants={slowContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0% -10% 0%' }}>
            <m.div className={styles.tlItem} variants={fadeUp}><div className={styles.tlDate}>Days 0 to 2</div><div className={styles.tlBody}>Offer & Audience: Desire mapping, objection inventory, headline hypotheses.</div></m.div>
            <m.div className={styles.tlItem} variants={fadeUp}><div className={styles.tlDate}>Days 3 to 5</div><div className={styles.tlBody}>Prototype: Clickable layout + first pass copy for your sign off.</div></m.div>
            <m.div className={styles.tlItem} variants={fadeUp}><div className={styles.tlDate}>Days 6 to 10</div><div className={styles.tlBody}>Build: Next.js page(s), schema, tracking, speed budget.</div></m.div>
            <m.div className={styles.tlItem} variants={fadeUp}><div className={styles.tlDate}>Days 11 to 14</div><div className={styles.tlBody}>Proof & Automations: Guarantees, testimonials, email sequence, CRM wiring.</div></m.div>
            <m.div className={styles.tlItem} variants={fadeUp}><div className={styles.tlDate}>Days 15 to 21</div><div className={styles.tlBody}>Launch & Test: Go live with an A/B plan, dashboard access, and a 90 day CRO backlog.</div></m.div>
          </m.div>
          <div className={styles.centerCta}><Link href="#timeline" className={styles.primaryBtn}>See my timeline</Link></div>
        </div>
      </section>

      {/* Bonuses */}
      <section className={styles.section} aria-labelledby="bonuses-heading">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>Bonuses</p></div></div>
          <m.h2 id="bonuses-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Limited bonuses with build slots</m.h2>
          <m.ul className={styles.bullets} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <m.li variants={fadeUp}>SEO KickStart + 90 day growth plan (on page fixes, keyword map, monthly rank report).</m.li>
            <m.li variants={fadeUp}>Headless CMS training (recorded) + docs so your team ships changes fast.</m.li>
            <m.li variants={fadeUp}>Custom CRO dashboard with heatmaps + session recordings, plus a 90-day insights report.</m.li>
          </m.ul>
          <m.p className={styles.note} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>We cap new builds each month to protect speed and quality.</m.p>
        </div>
      </section>

    {/* Guarantees */}
      <section className={styles.section} aria-labelledby="guarantees-heading">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>Guarantees</p></div></div>
          <m.h2 id="guarantees-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Guarantees that derisk your decision</m.h2>
          <m.div className={styles.cardGridTwoCentered} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>Core Web Vitals Pass Guarantee</h3><p className={styles.cardBody}>If your funnel page doesn’t pass at launch, we fix it free until it does.</p></m.div>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>30-Day Lift Plan</h3><p className={styles.cardBody}>If Variant A doesn’t beat your current control in the first test window, we build a fresh variant free and extend CRO support.</p></m.div>
          </m.div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section} aria-labelledby="benefits-heading">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>Benefits</p></div></div>
          <m.h2 id="benefits-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>What this means for you</m.h2>
          <m.div className={styles.cardGrid} variants={slowContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>More qualified leads, faster.</h3><p className={styles.cardBody}>Clear promise + mechanism = “I’m in” moments on the first screen.</p></m.div>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>Lower CPA from speed.</h3><p className={styles.cardBody}>Faster pages convert better, and we budget for speed.</p></m.div>
            <m.div className={styles.card} variants={fadeUp}><h3 className={styles.cardTitle}>Less risk, more control.</h3><p className={styles.cardBody}>Proof, guarantees, analytics, and CMS access give you levers you can actually pull.</p></m.div>
          </m.div>
        </div>
  </section>

      {/* FAQs */}
      <section className={styles.section} aria-labelledby="faqs-heading">
        <div className={styles.inner}>
          <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>FAQs</p></div></div>
          <m.h2 id="faqs-heading" className={styles.h2} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>FAQs</m.h2>
          <m.div className={styles.faqs} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <m.details className={styles.faqItem} variants={fadeUp}>
              <summary>Do funnels need long copy?</summary>
              <p>Sometimes. If awareness is low or competition is high, longer copy wins because it carries the proof and mechanism required to persuade.</p>
            </m.details>
            <m.details className={styles.faqItem} variants={fadeUp}>
              <summary>What if I don’t have testimonials yet?</summary>
              <p>We’ll deploy acceptable proof substitutes (comparisons, demonstrations, expert approval) and place them where they matter most.</p>
            </m.details>
            <m.details className={styles.faqItem} variants={fadeUp}>
              <summary>Will this be easy to edit later?</summary>
              <p>Yes. Headless CMS + training means your team can update copy, offers, and sections without code.</p>
            </m.details>
          </m.div>
        </div>
      </section>

  <Footer />
    </>
  );
}
