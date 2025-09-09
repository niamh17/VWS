"use client";
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import CalInlineSection from '../../components/CalInlineSection';
import Footer from '../../components/Footer';

const Aurora = dynamic(() => import('../../components/Aurora'), { ssr: false });

export default function ContactPage() {
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
              data-netlify="true"
              netlify-honeypot="bot-field"
              className={styles.form}
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
                <button className={styles.submitBtn} type="submit" aria-label="Send message">Send message</button>
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
