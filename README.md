# The Widow and the Whistleblower

Draft preview site for the podcast **The Widow and the Whistleblower**, co-hosted by Lilly Wilbur and Katie Kuhnhausen.

Descriptive line on Home: Because every life in custody matters, and silence is not an option.

This build is a placeholder for owner review. It is not published, it has no domain, and nothing on the contact page is sent anywhere. The show will eventually cover deaths in custody in the Washington State Department of Corrections. That subject is **not** written as public page copy yet.

## Edit copy

All on-site text lives in [`src/content/site.ts`](src/content/site.ts).

Keep these exact:

- `The Widow and the Whistleblower` (show name: capital W on Widow and Whistleblower, lowercase "and" and "the", no subtitle)
- `site.tagline` (hero line, social/OG description, and cover alt only). The apostrophe in that line is curly. The former title appears nowhere else and never as the show name.
- `Because every life in custody matters, and silence is not an option.` (descriptive line on Home)
- `Lilly Wilbur`
- `Katie Kuhnhausen`

Replace each `[PLACEHOLDER - copy pending from Marketing]` field in place. The contact address is lilly@theinspiringwanderess.com. Source `url` values stay `[PLACEHOLDER - public URL pending verification]` until a link is verified. A source becomes a real link only when `url` is an absolute `https` URL.

Do not add addresses, phone numbers, other email addresses, attorney or law-firm names, case records, medical examiners, or the names of any deceased people.

`npm run check:copy` blocks emails, phone numbers, and stray URLs. It runs as part of `npm run build`.

## Cover art

The cover is not chosen. Home, the favicon, the apple touch icon, and the social image all use one placeholder. `site.cover` in [`src/content/site.ts`](src/content/site.ts) is the only path list. Replace these files in place when a cover is ready:

- `public/cover-1200.jpg` (home image, `og:image`, and `twitter:image`)
- `public/cover-600.jpg`
- `public/cover-1200.webp`
- `public/cover-600.webp`
- `public/favicon-32.png`
- `public/apple-touch-icon.png`

## Run locally

```bash
npm install
npm run dev
```

Open http://127.0.0.1:43123

```bash
npm run build
npm run preview
```

## Deploy to Vercel

The site is a static Vite build. Output is `dist`. No environment variables.

1. Create a Git repository for this project and push `main`.
2. In Vercel, import that repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy. Do not attach a public domain until the draft is approved. A Vercel preview URL is enough for review.

`vercel.json` already does two things:

- Sends `X-Robots-Tag: noindex, nofollow, noarchive` on every response.
- Rewrites routes to `index.html` so episode pages work as a single-page app.

`index.html` also includes `<meta name="robots" content="noindex, nofollow, noarchive">`. Every page shows a **Draft preview** marker.

From a machine logged into the Vercel CLI:

```bash
npx vercel
```

Accept the Vite defaults when asked (build `npm run build`, output `dist`). Use `npx vercel --prod` only when someone intends a production deployment of this draft.
