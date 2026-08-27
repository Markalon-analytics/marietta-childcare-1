# Memory Log

## Standing Rules Generated from Experience
- Keep project state in `MASTER_TODO.md`, `context/CURRENT_STATE.md`, and logs before relying on chat history.
- Public site output should now be lightly BBMA-branded: name BBMA and Big Blue Marble Academy where it helps parents choose a nearby location, but avoid heavy corporate phrasing.
- Lead actions should point to `https://bbmacademy.com/#awb-open-oc__2662`; `/contact` and `/contact/` should redirect externally.
- Phone links should appear only where they clearly refer to a specific listed BBMA location.
- Existing generated copy repeats "Marietta Childcare's..." and must be rewritten as direct visitor-facing service copy, not polished in place.
- Parent-first copy should favor "you," "your child," "your week," age, schedule, commute, meals, updates, pickup, and start date over generic "families can" or "ask about" scaffolding.
- For this Astro static site, final QA should use built `dist` plus a static server when the dev server is unstable; verify image files from rendered HTML instead of trusting a single browser capture.

## Learnings
- 2026-06-08 11:39:15: Initialized project management layer for full-site visual and copy cleanup.
- 2026-06-08 11:45:00: Source facts may be used lightly, but branded source identity must stay private in public copy.
- 2026-06-08 18:42:00: Parent-first rewrite completed locally. Hard scans and build passed; writing metrics passed anti-pattern/hedge/em-dash gates, with entity/rhythm warnings reviewed as local-SEO/template artifacts.
- 2026-06-09 00:12:00: Direction changed from neutral microsite to light BBMA location finder. Use the seven official Marietta-area BBMA search-result locations and route CTAs to the official BBMA form.
