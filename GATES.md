# URL and Canonical Audit Gates

| Gate | Requirement | Observable check | Expected result | State |
|---|---|---|---|---|
| G-01 | REQ-URL-01 | `npm run build`; parse all sitemap XML URLs and compare each path to generated HTML routes | No sitemap URL points to a missing or unhyphenated route; `/service-areas/` remains hyphenated | MET: 57/57 |
| G-02 | REQ-CAN-01 | Parse every generated HTML file and inspect canonical count, host, path, and trailing slash | Exactly one absolute canonical per page, matching its generated public route | MET: 57/57 |
| G-03 | REQ-CAN-01 | Compare sitemap URLs to page canonicals | Every sitemap URL has a corresponding page with the same canonical URL | MET: 57/57 |
| G-04 | REQ-REPORT-01 | Review `url-canonical-audit.md` for denominator, leaf results, findings, changes, exceptions, and evidence | Report is substantive and traceable to the final build | MET |

## Critical-assumption results

| ID | Falsifier evidence | Result |
|---|---|---|
| ASSUMP-01 | Baseline and final sitemap inventories plus project deployment record | VALIDATED |
| ASSUMP-02 | Final per-page canonical inventory: 57/57 match | VALIDATED |

## Evidence protocol

Run from the repository root. The decisive check is the final `npm run build` followed by inventory parsing of `dist/**/*.html` and generated sitemap XML. Source scans are supplementary. Gate states must be updated after remediation and before handoff.
