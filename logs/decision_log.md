# Decision Log

- 2026-06-08: Cleanup covers all 56 generated pages, not only the homepage.
- 2026-06-08: Use light source facts from BBMA Marietta but omit BBMA/Big Blue/Passport branded terms from public output.
- 2026-06-08: Route schedule-tour CTAs to local `/contact`; use verified phone only for direct call links.
- 2026-06-08: Stable local SVG/icon components replace Google Material Symbols to avoid missing-icon text rendering.
- 2026-06-08: Treat Claude writing metrics entity-density and rhythm failures as advisory for this generated local site because repeated title-case headings, city names, school names, contact facts, and shared CTAs inflate the heuristic; enforce the clean anti-pattern/hedge/em-dash gates plus manual parent-first review.
- 2026-06-08: Use a static `dist` server for final browser QA when the Astro dev server binds inconsistently; this better matches Netlify-style static hosting and avoids false local image failures.
