"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from './page.module.css';
import CalInlineSection from '../../components/CalInlineSection';
import Footer from '../../components/Footer';

const Aurora = dynamic(() => import('../../components/Aurora'), { ssr: false });

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  return (
    <>
  <div className={`top-aurora-wrapper ${styles.contactAurora}`} aria-hidden="true">
        <Aurora colorStops={["#FFB871", "#FF6F32", "#FF3A14"]} amplitude={1.1} blend={0.6} speed={0.5} fps={40} maxDpr={1.1} />
      </div>

      {/* Contact header + details + form */}
      <section className={styles.section} aria-labelledby="contact-title">
        <div className={styles.inner}>
          <div className={styles.grid}>
            {/* Contact details */}
            <div className={styles.detailsPanel}>
              <div className={styles.panelHeader}>
                <div className={styles.tagWrap}><div className={styles.tag}><p className={styles.tagText}>Contact</p></div></div>
                <h1 id="contact-title" className={styles.h1}>Let’s talk</h1>
                <p className={styles.lede}>Tell us about your goals and we’ll get back within one business day.</p>
              </div>
              <div className={styles.details}>
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>Email</h2>
                  <p className={styles.cardText}><a className={styles.link} href="mailto:inquiry.vws@gmail.com">inquiry.vws@gmail.com</a></p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>Availability</h2>
                  <p className={styles.cardText}>Mon–Fri, 9am–5pm GMT</p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>Book a call</h2>
                  <p className={styles.cardText}>Prefer to skip the form? <a className={styles.linkAccent} href="#book">Pick a 15‑min slot</a>.</p>
                </div>
              </div>
            </div>

            {/* Contact form (Netlify-ready) */}
            <form
              name="contact"
              method="POST"
              action="/__forms.html"
              className={styles.form}
              onSubmit={async (e) => {
                e.preventDefault();
                if(status === 'submitting' || status === 'success') return;
                setStatus('submitting');
                try {
                  const form = e.currentTarget as HTMLFormElement;
                  const fd = new FormData(form);
                  // Netlify requires form-name field when posting programmatically
                  if(!fd.get('form-name')) fd.set('form-name', 'contact');
                  const body = new URLSearchParams(fd as any).toString();
                  // Prepare JSON payload for external webhook
                  const jsonPayload: Record<string,string> = {};
                  fd.forEach((value, key) => { if(key !== 'form-name') jsonPayload[key] = String(value); });
                  // Webhook URL (can be moved to env var like NEXT_PUBLIC_CONTACT_WEBHOOK)
                  const webhookUrl = 'https://hook.eu2.make.com/o4uqi50d4iug0dfjri3gy31abanthuon';
                  // Fire both requests in parallel. Netlify static form POST may 404/405 in local dev; treat that as non-fatal.
                  const netlifyPromise = fetch('/__forms.html', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body
                  }).then(r => ({ target: 'netlify', ok: r.ok, status: r.status }))
                    .catch(err => ({ target: 'netlify', ok: false, error: err }));

                  const webhookPromise = fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      form: 'contact',
                      submittedAt: new Date().toISOString(),
                      ...jsonPayload
                    })
                  }).then(r => ({ target: 'webhook', ok: r.ok, status: r.status }))
                    .catch(err => ({ target: 'webhook', ok: false, error: err }));

                  const [netlifyResult, webhookResult] = await Promise.all([netlifyPromise, webhookPromise]);

                  // Determine if we should consider this a success.
                  // Success criteria: webhook succeeded (primary delivery). Netlify submission is best-effort.
                  if(webhookResult.ok){
                    if(!netlifyResult.ok){
                      const statusInfo = 'status' in netlifyResult ? `status: ${netlifyResult.status}` : 'no status';
                      console.info('[contact] Webhook OK but Netlify form POST did not succeed ('+statusInfo+'). This can be normal in local dev.');
                    }
                    setStatus('success');
                    form.reset();
                  } else {
                    console.error('[contact] Webhook failed', webhookResult);
                    throw new Error('Webhook submission failed');
                  }
                } catch(err){
                  console.error('Form submission failed', err);
                  setStatus('error');
                }
              }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className={styles.hidden}><label>Don’t fill this out: <input name="bot-field" /></label></p>

              <div className={styles.fieldRow}>
                <div className={styles.field}> 
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input className={styles.input} id="name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className={styles.field}> 
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input className={styles.input} id="email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}> 
                  <label className={styles.label} htmlFor="company">Company</label>
                  <input className={styles.input} id="company" name="company" type="text" autoComplete="organization" />
                </div>
                <div className={styles.field}> 
                  <label className={styles.label} htmlFor="website">Website (optional)</label>
                  <input className={styles.input} id="website" name="website" type="url" placeholder="https://" autoComplete="url" />
                </div>
              </div>

              <div className={styles.field}> 
                <label className={styles.label} htmlFor="projectType">Project type</label>
                <select className={styles.select} id="projectType" name="projectType" defaultValue="Website">
                  <option>Website</option>
                  <option>Funnel</option>
                  <option>Brand/Design</option>
                  <option>Automation</option>
                  <option>Other</option>
                </select>
              </div>

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Estimated budget</legend>
                <div className={styles.pillGroup} role="radiogroup" aria-label="Budget">
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="b1" name="budget" value="<350" />
                    <label className={styles.pill} htmlFor="b1">&lt; $350</label>
                  </div>
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="b2" name="budget" value="500-1000" />
                    <label className={styles.pill} htmlFor="b2">$500–$1,000</label>
                  </div>
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="b3" name="budget" value="1000-1500" />
                    <label className={styles.pill} htmlFor="b3">$1,000–$1,500</label>
                  </div>
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="b4" name="budget" value=">1500" />
                    <label className={styles.pill} htmlFor="b4">$1,500+</label>
                  </div>
                </div>
              </fieldset>

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Timeline</legend>
                <div className={styles.pillGroup} role="radiogroup" aria-label="Timeline">
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="t1" name="timeline" value="ASAP" />
                    <label className={styles.pill} htmlFor="t1">ASAP</label>
                  </div>
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="t2" name="timeline" value="1-2 months" />
                    <label className={styles.pill} htmlFor="t2">1–2 months</label>
                  </div>
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="t3" name="timeline" value="3-6 months" />
                    <label className={styles.pill} htmlFor="t3">3–6 months</label>
                  </div>
                  <div className={styles.pillItem}>
                    <input className={styles.radio} type="radio" id="t4" name="timeline" value="Exploring" />
                    <label className={styles.pill} htmlFor="t4">Just exploring</label>
                  </div>
                </div>
              </fieldset>

              <div className={styles.field}> 
                <label className={styles.label} htmlFor="message">How can we help?</label>
                <textarea className={styles.textarea} id="message" name="message" rows={6} required />
              </div>

              <div className={styles.checkboxRow}>
                <input className={styles.checkbox} type="checkbox" id="consent" name="consent" />
                <label htmlFor="consent" className={styles.checkboxLabel}>I agree to be contacted about my inquiry.</label>
              </div>

              <div className={styles.actions}>
                <button
                  className={styles.submitBtn}
                  type="submit"
                  aria-label="Send message"
                  disabled={status === 'submitting' || status === 'success'}
                >
                  {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Sent ✓' : 'Send message'}
                </button>
              </div>
              <div aria-live="polite" className={styles.statusMsg}>
                {status === 'error' && <p className={styles.error}>Something went wrong. Please retry.</p>}
                {status === 'success' && <p className={styles.success}>Thanks—message received!</p>}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Booking section */}
  <CalInlineSection fullWidth />
      <Footer />
    </>
  );
}
