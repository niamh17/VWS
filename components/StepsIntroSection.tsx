import React from 'react';
import styles from './StepsIntroSection.module.css';

/* StepsIntroSection: intro + calendar + 4-step plan */

const StepsIntroSection: React.FC = () => {
  // Build a simple month matrix (start at 1, assume 30 days for the visual sample or dynamic based on real month)
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // We will start the grid on Sunday (0)
  const firstWeekday = new Date(year, month, 1).getDay();
  const dates: Array<number | null> = [];
  for(let i=0;i<firstWeekday;i++){ dates.push(null); }
  for(let d=1; d<=daysInMonth; d++){ dates.push(d); }
  while(dates.length % 7 !== 0){ dates.push(null); }

  // Event definitions (sample mapping from snippet emojis & labels)
  const events: Record<number, { label: string; emoji: string; variant?: 'blue' }[]> = {
    1: [{ label: 'Reel Spotlight', emoji: '🎬' }],
    5: [{ label: 'DM Outreach', emoji: '🙌' }],
    17: [{ label: 'Collab Reminder', emoji: '🤝', variant: 'blue' }],
    30: [{ label: 'Campaign Launch', emoji: '🔥' }]
  };
  // Ring highlight days (sample chosen from snippet: 1,5,17,30.)
  const ringDays = new Set([1,5,17,30]);

  // Discuss animation JSON moved to public/lottie/discuss.json for cleaner JSX
  const discussLottie = "/lottie/discuss.json";

  return (
    <section className={styles.section} aria-labelledby="steps-intro-kicker steps-intro-title" id="smart-steps-intro">
      <div className={styles.inner}>
        <div className={styles.headline}>
          <div className={styles.metaRow}>
            <div className={styles.kickerRow} id="steps-intro-kicker">
              <span className={styles.dotWrap} aria-hidden="true">
                <span className={styles.dotOuter}></span>
              </span>
              <span>Smart Steps</span>
            </div>
            <h3 className={styles.title} id="steps-intro-title">Everything you need to grow.</h3>
          </div>
          <p className={styles.desc}>From strategy to execution, we offer a full suite of marketing services designed to grow your brand, reach your audience, and drive real results.</p>
        </div>
        {/* Planning calendar block */}
        <div className={styles.planning} aria-labelledby="planning-title" role="group">
          <div className={styles.planningHead}>
            <h4 id="planning-title" className={styles.planningTitle}>Plan your growth</h4>
            <p className={styles.planningSubtitle}>Clear steps to scale smart and fast.</p>
          </div>
          <div className={styles.calendarCard} aria-label="Planning calendar">
            <div className={styles.dowRow} aria-hidden="true">
              {['S','M','T','W','TH','F','S'].map(d => <div key={d} className={styles.dow}>{d}</div>)}
            </div>
            <div className={styles.calendarScroll}>
              <div className={styles.calendarInner}>
                <div className={styles.datesGrid} role="grid" aria-readonly="true">
                  {dates.map((value, idx)=> {
                    if(value == null){
                      return <div key={idx} className={styles.dateCell} aria-hidden="true" />;
                    }
                    const dayEvents = events[value] || [];
                    const ring = ringDays.has(value);
                    return (
                      <div
                        key={idx}
                        className={styles.dateCell}
                        role="gridcell"
                        aria-label={`Day ${value}${dayEvents.length ? ': ' + dayEvents.map(e=>e.label).join(', ') : ''}`}
                      >
                        <span className={styles.dateNumber}>{String(value).padStart(2,'0')}</span>
                        {ring && <span className={styles.dateRing} aria-hidden="true" />}
                        {dayEvents.map((ev,i)=> (
                          <span key={i} className={`${styles.eventPill} ${ev.variant === 'blue' ? styles.blue : ''}`}>
                            <span className={styles.eventEmoji} aria-hidden="true">{ev.emoji}</span>
                            <span className={styles.eventLabel}>{ev.label}</span>
                          </span>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-step process block */}
        <div className={styles.process} aria-labelledby="process-title" role="group">
          <div className={styles.processHead}>
            <h4 id="process-title" className={styles.processTitle}>Our 4-step plan</h4>
            <p className={styles.processSubtitle}>A simple path to smart, scalable growth.</p>
          </div>
          <div className={styles.processSurface}>
            <ol className={styles.stepsList}>
              <li className={styles.stepItem}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.iconWrap} aria-hidden="true">
                  <dotlottie-player autoplay loop speed="1" style={{ width: '50px', height: '50px' }} background="transparent" src="/lottie/discuss.json" />
                </div>
                <h5 className={styles.stepLabel}>Discuss</h5>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.iconWrap} aria-hidden="true">
                  <dotlottie-player
                    autoplay
                    loop
                    speed="1"
                    background="transparent"
                    style={{ width: '50px', height: '50px' }}
                    src="/lottie/plan.json"
                  />
                </div>
                <h5 className={styles.stepLabel}>Plan</h5>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.iconWrap} aria-hidden="true">
                  <dotlottie-player
                    autoplay
                    loop
                    speed="1"
                    background="transparent"
                    style={{ width: '50px', height: '50px' }}
                    src="/lottie/produce.json"
                  />
                </div>
                <h5 className={styles.stepLabel}>Produce</h5>
              </li>
              <li className={styles.stepItem}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.iconWrap} aria-hidden="true">
                  <dotlottie-player
                    autoplay
                    loop
                    speed="1"
                    background="transparent"
                    style={{ width: '50px', height: '50px' }}
                    src="/lottie/succeed.json"
                  />
                </div>
                <h5 className={styles.stepLabel}>Succeed</h5>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsIntroSection;
