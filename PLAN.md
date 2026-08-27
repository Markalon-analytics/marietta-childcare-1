# URL and Canonical Audit Plan

## Workstreams and dependencies

1. **Inventory (completed)** — inspect source routes and run a clean Astro build; established the 57-page and 57-sitemap-URL denominator.
2. **Diagnose (completed)** — compared source route paths, emitted sitemap URLs, rendered canonical tags, internal links, and `robots.txt`.
3. **Remediate (completed)** — patched the shared/configuration surfaces needed to correct host identity and canonical slash consistency.
4. **Verify and report (completed)** — rebuilt from the patched source, reran leaf-level checks, and wrote `url-canonical-audit.md` with findings and evidence.

## Requirement trace

| Requirement | Planned evidence |
|---|---|
| REQ-URL-01 | Sitemap URL inventory and post-fix route comparison in `url-canonical-audit.md` |
| REQ-CAN-01 | One canonical result per generated HTML page, with mismatch list |
| REQ-REPORT-01 | Completed Markdown audit report linked from this plan |

## Ownership and boundaries

The executor owns source URL/canonical implementation and audit artifacts in this repository. Do not edit unrelated user changes, deploy, alter external URLs, or delete material data.

## Risk-first checks

- Inspect the generated sitemap before changing the shared SEO component.
- Confirm whether Astro's `site` value and trailing-slash mode agree with the emitted route structure.
- Treat build output as decisive evidence; source-only pattern scans are supporting evidence.

## Acceptance logic

The remediation is accepted only if the final build succeeds, the final denominator is recorded, every generated HTML page has exactly one expected canonical, every sitemap URL maps to a generated page with the same canonical identity, and the report explains all exceptions.
