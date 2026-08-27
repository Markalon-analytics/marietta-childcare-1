# Marietta Childcare Site Cleanup - Master Plan

## Project Overview
Clean the full Astro static site so MariettaChildCare.com works as a polished Marietta, Georgia child care lead-gen microsite. The current direction is a light BBMA location-finder layer: parents should understand they are comparing nearby Big Blue Marble Academy options without the site becoming a full corporate clone.

## Goals and Success Criteria
- Replace fragile Google Material Symbols usage with local SVG/icon rendering.
- Fix accordion affordances so open/closed states are visually clear and never appear upside down.
- Route primary lead-generation actions to the official BBMA form link.
- Remove placeholder claims, fake testimonials, dead links, stale dates, and mismatched contact details.
- Rewrite generated/template-like page copy into direct, visitor-first public web copy.
- Pass `npm run build` and source scans for forbidden placeholders, stale local contact routing, and unsupported claims.

## Constraints and Guardrails
- Keep project state in files, not only chat history.
- Update logs and current state after meaningful progress.
- Use BBMA and Big Blue Marble Academy naturally in high-impact public copy, while keeping MariettaChildCare.com as a practical location-selection microsite.
- Use official BBMA location facts for Windy Hill, Marietta, Woodstock, Powder Springs, Acworth, Dallas / Paulding, and Dunwoody.
- Keep schedule-tour and enrollment actions pointed to `https://bbmacademy.com/#awb-open-oc__2662`.
- Do not invent availability, pricing, ratings, awards, ratios, guarantees, teacher credentials, or unsupported facility claims.

## Deliverable Map
- Project operating layer and logs.
- Shared visual components for stable icons, CTAs, header, footer, and accordions.
- Cleaned Astro pages across home, about, programs, FAQ, services, solutions, resources, and service areas.
- Netlify redirect for `/contact` and `/contact/` to the official BBMA form.
- QA evidence from build, grep scans, and browser/read-through checks.

## Quality Standards
See `standards/STANDARDS.md`. Public copy must follow the Claude Writing Style public web copy gate: visitor-first, active, specific, no scaffolding language, no generic filler.

## File Map
Primary implementation lives in `src/components`, `src/layouts`, `src/pages`, `src/content/services`, and `src/styles/globals.css`. Project memory lives in `context` and `logs`.

## Status
Execution started
