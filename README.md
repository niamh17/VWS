# Arc Site

Minimal Next.js project scaffold with an initial Hero section translated from provided Framer-exported HTML.

## Scripts
- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm start` – Start production server

## Favicon / PWA Icons
Currently a single `favicon.png` (≈262 KB) is referenced for all favicon sizes (see `app/layout.tsx`). For better performance generate optimized variants:

1. Export high‑res source (prefer SVG if available).
2. Produce:
	- 16x16, 32x32 (classic tab icons)
	- 48x48 (optional)
	- 180x180 (Apple touch)
	- 192x192, 512x512 (manifest)
3. Optimize (example):
	- Use Sharp: `npx sharp-cli favicon.png --resize 32 32 -o favicon-32.png`
	- Use an optimizer (e.g. `oxipng -o 4 favicon-32.png` or `squoosh-cli`).
4. Update `metadata.icons` + `site.webmanifest` to point to new files.
5. Add `mask-icon` (monochrome SVG) for Safari pinned tabs (optional).

## Notes
The Hero section is a simplified semantic JSX version of the supplied markup. Many decorative / duplicate nodes were intentionally removed. Class names preserved for future styling.
