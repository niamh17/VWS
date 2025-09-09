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

## Netlify Forms (Next.js adapter v5)

This project uses the Netlify/OpenNext workaround for Forms required by `@netlify/plugin-nextjs@5+`:

1. A hidden static file `public/__forms.html` declares each form (currently only `contact`) with `data-netlify` so Netlify can detect it at deploy time.
2. The React form component omits `data-netlify` attributes and instead posts programmatically to `"/__forms.html"` using `fetch` with `application/x-www-form-urlencoded` encoded `FormData`.
3. A build guard (`scripts/check-netlify-forms.mjs`) fails the build on Netlify if any React code (outside `public/__forms.html`) still contains `data-netlify` / `netlify-honeypot` attributes. This prevents silent failures and re‑introducing deprecated markup.

Reference docs: https://ntl.fyi/next-runtime-forms-migration and https://opennext.js.org/netlify/forms

Temporarily skipping the migration check: set environment variable `NETLIFY_NEXT_VERIFY_FORMS=false` (not recommended long‑term). To disable the guard locally you can omit `NETLIFY=true` when running builds; the Netlify platform automatically sets `NETLIFY`.

If you add new forms:
- Duplicate a minimal definition inside `public/__forms.html`.
- Ensure the live React form contains a hidden `form-name` field matching the name.
- Use the same POST pattern (`fetch('/__forms.html', {...})`).

