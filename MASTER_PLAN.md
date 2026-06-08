# Marietta Childcare Site Cleanup - Master Plan

## Project Overview
Clean the full Astro static site so MariettaChildCare.com works as a polished Marietta, Georgia child care lead-gen microsite. The site should use light factual alignment from the public BBMA Marietta location page while keeping BBMA branding and the relationship private.

## Goals and Success Criteria
- Replace fragile Google Material Symbols usage with local SVG/icon rendering.
- Fix accordion affordances so open/closed states are visually clear and never appear upside down.
- Route all lead-generation actions to the local `/contact` page or verified local phone number.
- Remove placeholder claims, fake testimonials, dead links, stale dates, and mismatched contact details.
- Rewrite generated/template-like page copy into direct, visitor-first public web copy.
- Pass `npm run build` and source scans for forbidden placeholders/brand leaks.

## Constraints and Guardrails
- Keep project state in files, not only chat history.
- Update logs and current state after meaningful progress.
- Do not name BBMA, Big Blue, Passport to Learning, or related branded terms in public site output.
- Use source facts lightly only: 2040 MacLand Crossing Circle, Monday-Friday 6:30 AM-6:30 PM, `(770) 343-4847`, infants/toddlers/twos/threes/fours, Dowell/Hollydale/Cheatham Hill pickup, keypad entry, martial arts, dance classes, and parent communication app.
- Keep all schedule-tour flow local to MariettaChildCare.com.

## Deliverable Map
- Project operating layer and logs.
- Shared visual components for stable icons, CTAs, header, footer, and accordions.
- Cleaned Astro pages across home, contact, about, programs, FAQ, services, solutions, resources, and service areas.
- QA evidence from build, grep scans, and browser/read-through checks.

## Quality Standards
See `standards/STANDARDS.md`. Public copy must follow the Claude Writing Style public web copy gate: visitor-first, active, specific, no scaffolding language, no generic filler.

## File Map
Primary implementation lives in `src/components`, `src/layouts`, `src/pages`, `src/content/services`, and `src/styles/globals.css`. Project memory lives in `context` and `logs`.

## Status
Execution started
