// Data source for the /websites showcase page
// Grouped into: live, building, templates.

export interface ShowcaseSite {
	url: string;
	status: 'live' | 'building' | 'template';
	title?: string; // Optional human-friendly label
	image?: string; // relative path under /public
}

export const liveSites: ShowcaseSite[] = [
	{ url: 'https://www.dek-studio.com/', status: 'live', image: '/dek-studio.png', title: 'DEK Studio' },
	{ url: 'https://hiltopglobal.com/', status: 'live', image: '/hiltopglobal.png', title: 'Hiltop Global' },
	{ url: 'https://www.islandjerky.lk/', status: 'live', image: '/islandjerky.png', title: 'Island Jerky' },
	{ url: 'https://digitalkade.lk/', status: 'live', image: '/digitalkade.png', title: 'Digital Kade' },
	{ url: 'https://www.carrush.lk/', status: 'live', image: '/carrush.png', title: 'Car Rush' },
	{ url: 'https://www.cararenaceylon.com/', status: 'live', image: '/cararenaceylon.png', title: 'Car Arena Ceylon' },
	{ url: 'https://www.jacobday.co/', status: 'live', image: '/jacobday.png', title: 'Jacob Day' },
	{ url: 'https://mouttakicoaching.com/', status: 'live', image: '/mouttakicoaching.png', title: 'Mouttaki Coaching' },
	{ url: 'https://yboagency.com/', status: 'live', image: '/yboagency.png', title: 'YBO Agency' },
	{ url: 'https://www.arcai.agency/', status: 'live', image: '/arcai.agency.png', title: 'ARCAI Agency' },
	{ url: 'https://essentialmarketing.netlify.app/', status: 'live', image: '/essentialmarketing.png', title: 'Essential Marketing' },
	{ url: 'https://luxaryrestaurant-demo.netlify.app/', status: 'live', image: '/luxaryrestaurant-demo.png', title: 'Luxury Restaurant Demo' },
];

export const buildingSites: ShowcaseSite[] = [
	{ url: 'https://www.fitbite.shop/', status: 'building', image: '/fitbite.png', title: 'Fitbite' },
	{ url: 'https://ceylontealandwebsite.netlify.app/', status: 'building', image: '/ceylontealandwebsite.png', title: 'Ceylon Tea Land' },
		{ url: 'https://cosmic-dusk-c32013.netlify.app/', status: 'building', image: '/cosmic-dusk.png', title: 'Jewelry Store' },
	{ url: 'https://vibewebstudio.netlify.app/', status: 'building', image: '/vibewebstudio.png', title: 'Vibe Web Studio' },
	{ url: 'https://hijabboutiquestore.netlify.app/', status: 'building', image: '/hijabboutiquestore.png', title: 'Hijab Boutique Store' },
		{ url: 'https://mellifluous-jalebi-dd6aef.netlify.app/', status: 'building', image: '/mellifluous-jalebi.png', title: 'Joe Coaching' },
	{ url: 'https://ceylonmotors.netlify.app/', status: 'building', image: '/ceylonmotors.png', title: 'Ceylon Motors' },
	{ url: 'https://www.nexusart.site/', status: 'building', image: '/nexusart.png', title: 'Nexus Art' },
	{ url: 'https://arcaiportfolio.netlify.app/', status: 'building', image: '/arcaiportfolio.png', title: 'ARCAI Portfolio' },
		{ url: 'https://jade-babka-7cf696.netlify.app/', status: 'building', image: '/jade-babka.png', title: 'Travel Agency' },
		{ url: 'https://splendid-starship-b1d071.netlify.app/', status: 'building', image: '/splendid-starship.png', title: 'Gym Coach Website' },
		{ url: 'https://prismatic-mooncake-640ca9.netlify.app/', status: 'building', image: '/prismatic-mooncake.png', title: 'Bakery Website' },
		{ url: 'https://aquamarine-cranachan-4c051d.netlify.app/', status: 'building', image: '/aquamarine-cranachan.png', title: 'Airport Transfers' },
		{ url: 'https://silly-bombolone-0213cb.netlify.app/', status: 'building', image: '/silly-bombolone.png', title: 'Real Estate Agency' },
		{ url: 'https://starlit-dragon-c0ffbd.netlify.app/', status: 'building', image: '/starlit-dragon.png', title: 'Real Estate Agency' },
		{ url: 'https://venerable-semifreddo-9d54ad.netlify.app/', status: 'building', image: '/venerable-semifreddo.png', title: 'Casino Website' },
];

export const templateSites: ShowcaseSite[] = [
	{ url: 'https://deluxe-entremet-7938e8.netlify.app', status: 'template', title: 'Custom Code Template 1', image: '/deluxe-entremet.png' },
	{ url: 'https://heartfelt-pegasus-f2c3b1.netlify.app', status: 'template', title: 'Custom Code Template 2', image: '/heartfelt-pegasus.png' },
];

export interface ShowcaseGroups {
	live: ShowcaseSite[];
	building: ShowcaseSite[];
	templates: ShowcaseSite[];
}

export const showcaseGroups: ShowcaseGroups = {
	live: liveSites,
	building: buildingSites,
	templates: templateSites,
};

