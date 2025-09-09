import React from 'react';
import styles from './page.module.css';
import { showcaseGroups } from '../../lib/showcaseSites';

export const metadata = {
	title: 'Websites | Vibe Web Studio',
	description: 'Showcase of live, in-progress, and template website projects.'
};

interface LinkGridProps {
	title: string;
	tagline?: string;
	items: { url: string; status: string; title?: string; image?: string }[];
	variant?: 'live' | 'building' | 'template';
}

const LinkGrid: React.FC<LinkGridProps> = ({ title, tagline, items, variant = 'live' }) => {
	return (
		<section className={styles.section} aria-labelledby={title.replace(/\s+/g,'-').toLowerCase()}>
			<div className={styles.sectionHead}>
				<h2 id={title.replace(/\s+/g,'-').toLowerCase()} className={styles.sectionTitle}>{title}</h2>
				{tagline && <p className={styles.sectionTagline}>{tagline}</p>}
			</div>
					<ul className={`${styles.grid} ${styles[variant]}`}> 
						{items.map((site) => {
							const display = (site.title || site.url).replace(/^https?:\/\//,'').replace(/\/$/,'');
							return (
								<li key={site.url} className={styles.card}>
									<div className={styles.cardInner}>
										{site.image && (
											<span className={styles.thumbWrap} aria-hidden="true">
												<img src={site.image} alt="" className={styles.thumb} loading="lazy" />
											</span>
										)}
										<div className={styles.row}>
											<span className={styles.url}>{display}</span>
											<a href={site.url} target="_blank" rel="noopener noreferrer" className={styles.previewBtn} aria-label={`Preview ${display}`}>
												<span>Preview</span>
												<svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
											</a>
										</div>
										<span className={styles.status} data-status={site.status}>{site.status}</span>
									</div>
								</li>
							);
						})}
					</ul>
		</section>
	);
};

export default function WebsitesPage() {
	const { live, building, templates } = showcaseGroups;
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<h1 className={styles.pageTitle}>Showcase</h1>
				<p className={styles.lead}>A snapshot of shipped and in-progress builds plus custom code templates.</p>
			</header>
			<div className={styles.sectionsWrap}>
				<LinkGrid title="Live" tagline="Launched & driving results" items={live} variant="live" />
				<LinkGrid title="Building" tagline="Currently being crafted" items={building} variant="building" />
				<LinkGrid title="Custom Code Templates" tagline="Reusable starting points" items={templates} variant="template" />
			</div>
		</main>
	);
}

