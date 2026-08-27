# Marietta Childcare Site Cleanup - Master To-Do Ledger

## Project Status Summary
Full-site visual cleanup, parent-first copy rewrite, and the light BBMA location-finder update are live on Netlify production.

## Current Phase
BBMA location-finder copy update complete

## Current Active Work
None active.

## Queue of Upcoming Tasks
- Monitor live site after domain/DNS changes if requested.

## In-Progress Work
- None.

## QA / Review Queue
- None active.

## Completed Work
- Project management files initialized on 2026-06-08 11:39:15.
- Added local site facts/data source and local SVG icon component.
- Replaced old generated program, FAQ, solution, service-area, and resource one-off pages with cleaned dynamic routes.
- Rewrote home, about, contact, blog/resources, programs index, FAQ index, solutions index, service-area index, and services routes.
- Removed unused Astro starter component/assets and added local privacy/terms pages.
- Removed stale unused content collection and starter-era components.
- Final `npm run build` passed with 58 static pages.
- Required forbidden-string scans passed across source and generated HTML.
- Browser QA completed for home, contact, about, programs, FAQ, one solution page, one resource page, and one service-area page at desktop and mobile widths.
- Rewrote shared page data and standalone page copy in a parent-first voice using Claude Writing Style gates.
- Removed repeated cautious copy tics from source: `ask about`, `families can`, `use a tour`, `current availability`, `clear answers`, `the center`.
- Rebuilt successfully with 58 static pages after the rewrite.
- Verified built `dist` has zero missing image references and zero `href="#"` links.
- Fixed mobile `PageHero` text clipping by constraining hero copy width on small screens.
- Static browser QA completed on representative desktop/mobile pages from `http://127.0.0.1:8088/`.
- Deployed parent-first rewrite and mobile hero fix to Netlify production deploy `6a27463277fdc71d2e1fdf52`.
- Verified production home, contact, downtown Marietta service-area page, unique deploy URL, and contact hero image return `200`.
- Added shared BBMA location data for Windy Hill, Marietta, Woodstock, Powder Springs, Acworth, Dallas / Paulding, and Dunwoody.
- Updated public copy to position the site as a light BBMA location-selection helper.
- Routed primary CTAs, header/nav/footer CTAs, LeadCTA links, and generated related lead links to `https://bbmacademy.com/#awb-open-oc__2662`.
- Added forced Netlify redirects for `/contact` and `/contact/`, then removed the stale local contact form route.
- Final BBMA location-finder `npm run build` passed with 57 static pages.
- Source and built-output scans passed for stale `/contact` hrefs, fake claims, missing icon markers, `expand_more`, and `href="#"`.
- Built asset/link audit found 57 HTML files, 0 missing image files, 0 hash links, 0 `/contact` hrefs, and 346 BBMA form links.
- Claude Writing Style metrics passed anti-pattern, hedge, em-dash, and public-generated-copy hard gates; entity/rhythm warnings were reviewed as local-SEO/page-card artifacts.
- Browser QA passed on home, about, programs, FAQ, one program page, one solution page, one resource page, service-area index, and Downtown Marietta at desktop and mobile widths.
- Deployed to Netlify production deploy `6a28c5d8433a4d59a6c5edfc`; verified `https://marietta-childcare.com/` returns `200` and `/contact` plus `/contact/` return `302` to the BBMA form.

## Blockers / Decisions Needed
- None active.

## Last Significant Progress
Completed and deployed the BBMA location-finder update to Netlify production.

## Immediate Next Actions
- None.

## Resume Instructions
Read `context/CURRENT_STATE.md`, then this file, then the active task files.
