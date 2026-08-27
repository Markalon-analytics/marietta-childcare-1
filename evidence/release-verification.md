# Release Verification

**Release commit:** `0d27a30` — `Fix sitemap and canonical URLs`
**Repository:** `origin/main` at `https://github.com/Markalon-analytics/marietta-childcare-1.git`
**Published target:** `https://marietta-childcare.com`

## Local release checks

- `npm run build`: PASS — 57 Astro pages built.
- `git diff --cached --check`: PASS before commit.
- Direct Netlify CLI publish was not used because the authenticated CLI account could not resolve the existing project; the connected GitHub-to-Netlify deployment path was used instead.

## Live checks after publish

- Homepage: HTTP 200; canonical is `https://marietta-childcare.com/`.
- Sitemap child file: HTTP 200; 57 page URLs found.
- Live sitemap coverage: 57/57 URLs returned HTTP 200 and each page canonical matched its sitemap URL.
- Live pages with the old no-hyphen host: 0.
- `robots.txt`: sitemap reference is `https://marietta-childcare.com/sitemap-index.xml`.
- `/contact/`: HTTP 302 to the official BBMA tour URL.
