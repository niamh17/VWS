"use client";
import React, { useState, useMemo } from 'react';
import styles from './PricingCalculator.module.css';

interface ToggleOption {
  id: string;
  label: string;
  desc: string;
  price: number;
  exclusiveGroup?: string; // only one in group if provided
}

const backendOptions: ToggleOption[] = [
  {
    id: 'simple-backend',
    label: 'Simple backend system',
    desc: 'Admin login to manage pages & content areas yourself. Edit copy, media & basic settings.',
    price: 300,
    exclusiveGroup: 'backend'
  },
  {
    id: 'complex-backend',
    label: 'Complex backend system',
    desc: 'Advanced features (e.g. restaurant booking, inventory, role permissions, workflows).',
    price: 500,
    exclusiveGroup: 'backend'
  }
];

const otherOptions: ToggleOption[] = [
  {
    id: 'social-ads',
    label: 'Social media ad campaigns',
    desc: 'Ongoing management: 3 campaigns / month included. Extra campaigns +$100 each (configure below).',
    price: 250
  },
  {
    id: 'brand-kits',
    label: 'Brand kit',
    desc: 'Font pairing, color system, logo exploration, business cards, email signature & usage guidelines.',
    price: 250
  }
];

export default function PricingCalculator() {
  const [pages, setPages] = useState(4); // base includes 4 pages
  const [extraCampaigns, setExtraCampaigns] = useState(0); // beyond 3 included
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleOption = (opt: ToggleOption) => {
    setSelected(prev => {
      const next = new Set(prev);
      const isActive = next.has(opt.id);
      if (isActive) {
        next.delete(opt.id);
      } else {
        if (opt.exclusiveGroup) {
          // remove others in same group
            backendOptions.filter(o=>o.exclusiveGroup===opt.exclusiveGroup).forEach(o=> next.delete(o.id));
        }
        next.add(opt.id);
      }
      return next;
    });
  };

  const baseWebsitePrice = useMemo(() => {
    // 4 page website starts at $350, each extra page +$100
    const basePages = 4;
    const basePrice = 350;
    const extra = pages > basePages ? (pages - basePages) * 100 : 0;
    return basePrice + extra;
  }, [pages]);

  const backendPrice = useMemo(() => {
    for (const opt of backendOptions) if (selected.has(opt.id)) return opt.price;
    return 0;
  }, [selected]);

  const otherPrice = useMemo(() => {
    let sum = 0;
    otherOptions.forEach(o => { if (selected.has(o.id)) sum += o.price; });
    return sum;
  }, [selected]);

  const campaignExtraPrice = useMemo(() => {
    // Each extra campaign after 3 included in base social ads selection
    const active = selected.has('social-ads');
    if (!active) return 0;
    return extraCampaigns * 100;
  }, [selected, extraCampaigns]);

  const total = baseWebsitePrice + backendPrice + otherPrice + campaignExtraPrice;

  const breakdown = useMemo(() => {
    const lines: string[] = [];
    lines.push(`Website (${pages} pages): $${baseWebsitePrice}`);
    if (backendPrice) {
      const active = backendOptions.find(o=>selected.has(o.id));
      if (active) lines.push(`${active.label}: $${backendPrice}`);
    }
    if (selected.has('social-ads')) {
      lines.push(`Social media ads (3 campaigns incl.): $250`);
      if (campaignExtraPrice) lines.push(`Extra campaigns (${extraCampaigns}): $${campaignExtraPrice}`);
    }
    if (selected.has('brand-kits')) lines.push(`Brand kit: $250`);
    return lines.join('\n');
  }, [pages, baseWebsitePrice, backendPrice, selected, campaignExtraPrice, extraCampaigns]);

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.tag}><p className={styles.tagText}>pricing</p></div>
          <h2 className={styles.title}>Project estimator</h2>
          <p className={styles.subtitle}>Quickly approximate investment levels. Exact quotes follow a discovery call & detailed scope.</p>
          <div className={styles.totalBox}>
            <p className={styles.totalLabel}>Estimated total</p>
            <p className={styles.totalPrice}>${total}</p>
            <p className={styles.breakdown}>{breakdown}</p>
            <p className={styles.disclaimer}>Non-binding estimate. Proposal depends on confirmed scope, integrations & timeline.</p>
          </div>
        </div>
        <div className={styles.calculator}>
          <div className={styles.group}>
            <h4 className={styles.groupTitle}>Website</h4>
            <div className={styles.row}>
              <div className={styles.field}>
                <h5>Pages</h5>
                <p>Base package includes 4 pages at $350. Each additional page adds $100.</p>
                <div className={styles.counter}>
                  <button aria-label="Decrease pages" onClick={() => setPages(p => Math.max(1, p-1))}>-</button>
                  <span>{pages}</span>
                  <button aria-label="Increase pages" onClick={() => setPages(p => p+1)}>+</button>
                </div>
              </div>
              <div className={styles.field}>
                <h5>Backend system</h5>
                <p>Select a backend scope. Simple includes self‑service content management. Complex layers on advanced features.</p>
                <div className={styles.toggleList}>
                  {backendOptions.map(opt => {
                    const active = selected.has(opt.id);
                    return (
                      <label key={opt.id} className={styles.toggle}>
                        <input type="radio" name="backend" checked={active} onChange={()=>toggleOption(opt)} />
                        <div>
                          <p className={styles.toggleLabel}>{opt.label} <span style={{color:'#ff4726'}}>{active?`+$${opt.price}`:''}</span></p>
                          <p className={styles.toggleDesc}>{opt.desc}</p>
                        </div>
                      </label>
                    );
                  })}
                  <label className={styles.toggle}>
                    <input type="radio" name="backend" checked={!backendOptions.some(o=>selected.has(o.id))} onChange={()=>{
                      // clear backend selections
                      setSelected(s=>{
                        const next = new Set(s);
                        backendOptions.forEach(o=>next.delete(o.id));
                        return next;});
                    }} />
                    <div>
                      <p className={styles.toggleLabel}>No backend</p>
                      <p className={styles.toggleDesc}>Static / marketing site only.</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <h4 className={styles.groupTitle}>Add-ons</h4>
            <div className={styles.row}>
              <div className={styles.field}>
                <h5>Marketing</h5>
                <div className={styles.toggleList}>
                  {otherOptions.filter(o=>o.id==='social-ads').map(opt => {
                    const active = selected.has(opt.id);
                    return (
                      <label key={opt.id} className={styles.toggle}>
                        <input type="checkbox" checked={active} onChange={()=>toggleOption(opt)} />
                        <div>
                          <p className={styles.toggleLabel}>{opt.label} <span style={{color:'#ff4726'}}>{active?`+$${opt.price}`:''}</span></p>
                          <p className={styles.toggleDesc}>{opt.desc}</p>
                          {active && (
                            <div style={{marginTop:8}}>
                              <p className={styles.toggleDesc} style={{marginBottom:6}}>Extra campaigns per month beyond 3 included:</p>
                              <div className={styles.counter}>
                                <button aria-label="Decrease extra campaigns" onClick={() => setExtraCampaigns(c => Math.max(0, c-1))}>-</button>
                                <span>{extraCampaigns}</span>
                                <button aria-label="Increase extra campaigns" onClick={() => setExtraCampaigns(c => c+1)}>+</button>
                              </div>
                            </div>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className={styles.field}>
                <h5>Brand & Identity</h5>
                <div className={styles.toggleList}>
                  {otherOptions.filter(o=>o.id==='brand-kits').map(opt => {
                    const active = selected.has(opt.id);
                    return (
                      <label key={opt.id} className={styles.toggle}>
                        <input type="checkbox" checked={active} onChange={()=>toggleOption(opt)} />
                        <div>
                          <p className={styles.toggleLabel}>{opt.label} <span style={{color:'#ff4726'}}>{active?`+$${opt.price}`:''}</span></p>
                          <p className={styles.toggleDesc}>{opt.desc}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
