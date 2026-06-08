# Marietta Childcare Site Cleanup - Master To-Do Ledger

## Project Status Summary
Full-site visual cleanup and parent-first copy rewrite are live on Netlify production.

## Current Phase
Production deploy complete

## Current Active Work
Ready for production review.

## Queue of Upcoming Tasks
- Review production and decide whether any follow-up refinements are needed.

## In-Progress Work
- None.

## QA / Review Queue
- Optional stakeholder copy review before production deploy.

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

## Blockers / Decisions Needed
- None active.

## Last Significant Progress
Completed production deploy of the parent-first rewrite and verified live routes/assets.

## Immediate Next Actions
- Review `https://mariettachildcare.netlify.app/`.

## Resume Instructions
Read `context/CURRENT_STATE.md`, then this file, then the active task files.
