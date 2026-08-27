# URL, Sitemap, and Canonical Audit

**Audit date:** 2026-08-27
**Build:** Astro static build via `npm run build`
**Public canonical origin:** `https://marietta-childcare.com`

## Executive finding

The sitemap and all page canonicals were using the no-hyphen host `https://mariettachildcare.com`. The project’s deployed public domain is `https://marietta-childcare.com`, so the sitemap and canonical identity were incorrect across the site.

The route segment `/service-areas/` is correctly hyphenated in the final sitemap; no `/serviceareas/` route is emitted. The missing hyphen was in the public hostname.

One additional page-level issue was found: the `/services/` page explicitly supplied `canonical="/services"`, producing a canonical without the site’s trailing slash convention.

## Scope and denominator

The audit covered:

- Every generated HTML page in `dist/`.
- Every page URL in the generated sitemap child file referenced by `sitemap-index.xml`.
- Astro route source under `src/pages` and the shared SEO component.
- `astro.config.mjs`, `public/robots.txt`, and the service-area JSON-LD URL.
- Root-relative internal links rendered into the built HTML.

The final denominator is **57 generated HTML pages** and **57 sitemap page URLs** in **1 sitemap child file**. The sitemap index itself contains 1 child sitemap URL.

## Findings before remediation

| ID | Finding | Impact | Status |
|---|---|---|---|
| F-01 | `astro.config.mjs` declared `https://mariettachildcare.com` as the Astro site URL. | Astro-generated sitemap URLs used the wrong host. | Fixed |
| F-02 | `SeoHead.astro` used the same no-hyphen host as its fallback origin. | Every rendered canonical and Open Graph URL used the wrong host in the baseline build. | Fixed |
| F-03 | The baseline sitemap contained 57 page URLs on the no-hyphen host. | Search engines could treat the sitemap identity as a different host from the deployed site. | Fixed |
| F-04 | `/services/` supplied `/services` as an explicit canonical. | The page canonical omitted the trailing slash used by the generated public route and sitemap. | Fixed |
| F-05 | `public/robots.txt` referenced the no-hyphen sitemap host. | Crawlers could be directed to the wrong sitemap URL. | Fixed |
| F-06 | The service-area WebSite JSON-LD URL used the no-hyphen host. | Structured data exposed a conflicting site URL. | Fixed |

No broken root-relative internal links were found in the final built output. External BBMA links were treated as intentional out-of-scope destinations and were not rewritten.

## Changes made

- Changed the Astro `site` origin to `https://marietta-childcare.com`.
- Changed the shared SEO fallback origin to the hyphenated public host.
- Normalized all generated canonical paths in `SeoHead.astro` to trailing-slash routes, while preserving `/` as the root path.
- Changed the services index override to `canonical="/services/"`.
- Updated the robots sitemap reference to `https://marietta-childcare.com/sitemap-index.xml`.
- Updated the service-area JSON-LD URL and the site data/documentation domain value to the hyphenated domain.

## Final verification

| Check | Result | Evidence |
|---|---:|---|
| Production build | PASS | `npm run build`; Astro reports 57 pages built |
| Pages with exactly one expected canonical | 57/57 | Every generated HTML file has one canonical on `https://marietta-childcare.com` with its matching trailing-slash route |
| Sitemap page URLs matching generated routes and canonicals | 57/57 | `dist/sitemap-index.xml` resolves to `dist/sitemap-0.xml`; every child URL matches a generated page and canonical |
| Sitemap URLs still using no-hyphen host | 0 | Final sitemap XML inventory |
| Broken root-relative internal links | 0 | Final built HTML link inventory |
| Robots sitemap reference correct | PASS | `public/robots.txt` |
| Service-area JSON-LD URL correct | PASS | `dist/service-areas/index.html` |

## Complete generated-page inventory

Every row below is a required leaf in the 57-page denominator. `PASS` means the page has exactly one canonical equal to `https://marietta-childcare.com` plus the listed route.

| Route | Canonical | Result |
|---|---|---|
| `/` | `https://marietta-childcare.com/` | PASS |
| `/about/` | `https://marietta-childcare.com/about/` | PASS |
| `/blog/` | `https://marietta-childcare.com/blog/` | PASS |
| `/faq/` | `https://marietta-childcare.com/faq/` | PASS |
| `/faq/curriculum/` | `https://marietta-childcare.com/faq/curriculum/` | PASS |
| `/faq/enrollment-process/` | `https://marietta-childcare.com/faq/enrollment-process/` | PASS |
| `/faq/hours-and-schedule/` | `https://marietta-childcare.com/faq/hours-and-schedule/` | PASS |
| `/faq/how-much-childcare-cost/` | `https://marietta-childcare.com/faq/how-much-childcare-cost/` | PASS |
| `/faq/nutrition-meals/` | `https://marietta-childcare.com/faq/nutrition-meals/` | PASS |
| `/faq/parent-communication/` | `https://marietta-childcare.com/faq/parent-communication/` | PASS |
| `/faq/safety-security/` | `https://marietta-childcare.com/faq/safety-security/` | PASS |
| `/faq/sick-child-policy/` | `https://marietta-childcare.com/faq/sick-child-policy/` | PASS |
| `/faq/teacher-qualifications/` | `https://marietta-childcare.com/faq/teacher-qualifications/` | PASS |
| `/faq/transition-to-kindergarten/` | `https://marietta-childcare.com/faq/transition-to-kindergarten/` | PASS |
| `/privacy-policy/` | `https://marietta-childcare.com/privacy-policy/` | PASS |
| `/programs/` | `https://marietta-childcare.com/programs/` | PASS |
| `/programs/after-school/` | `https://marietta-childcare.com/programs/after-school/` | PASS |
| `/programs/full-time-care/` | `https://marietta-childcare.com/programs/full-time-care/` | PASS |
| `/programs/infant-care/` | `https://marietta-childcare.com/programs/infant-care/` | PASS |
| `/programs/part-time-care/` | `https://marietta-childcare.com/programs/part-time-care/` | PASS |
| `/programs/pre-k/` | `https://marietta-childcare.com/programs/pre-k/` | PASS |
| `/programs/preschool/` | `https://marietta-childcare.com/programs/preschool/` | PASS |
| `/programs/school-break-care/` | `https://marietta-childcare.com/programs/school-break-care/` | PASS |
| `/programs/special-needs/` | `https://marietta-childcare.com/programs/special-needs/` | PASS |
| `/programs/summer-camp/` | `https://marietta-childcare.com/programs/summer-camp/` | PASS |
| `/programs/toddler-program/` | `https://marietta-childcare.com/programs/toddler-program/` | PASS |
| `/resources/child-development/` | `https://marietta-childcare.com/resources/child-development/` | PASS |
| `/resources/choosing-childcare/` | `https://marietta-childcare.com/resources/choosing-childcare/` | PASS |
| `/resources/nutrition-guide/` | `https://marietta-childcare.com/resources/nutrition-guide/` | PASS |
| `/resources/parenting-tips/` | `https://marietta-childcare.com/resources/parenting-tips/` | PASS |
| `/resources/school-readiness/` | `https://marietta-childcare.com/resources/school-readiness/` | PASS |
| `/service-areas/` | `https://marietta-childcare.com/service-areas/` | PASS |
| `/service-areas/cobb-county/` | `https://marietta-childcare.com/service-areas/cobb-county/` | PASS |
| `/service-areas/downtown-marietta/` | `https://marietta-childcare.com/service-areas/downtown-marietta/` | PASS |
| `/service-areas/east-marietta/` | `https://marietta-childcare.com/service-areas/east-marietta/` | PASS |
| `/service-areas/kennesaw/` | `https://marietta-childcare.com/service-areas/kennesaw/` | PASS |
| `/service-areas/marietta-county/` | `https://marietta-childcare.com/service-areas/marietta-county/` | PASS |
| `/service-areas/north-marietta/` | `https://marietta-childcare.com/service-areas/north-marietta/` | PASS |
| `/service-areas/smyrna/` | `https://marietta-childcare.com/service-areas/smyrna/` | PASS |
| `/service-areas/south-marietta/` | `https://marietta-childcare.com/service-areas/south-marietta/` | PASS |
| `/service-areas/west-marietta/` | `https://marietta-childcare.com/service-areas/west-marietta/` | PASS |
| `/services/` | `https://marietta-childcare.com/services/` | PASS |
| `/services/after-school/` | `https://marietta-childcare.com/services/after-school/` | PASS |
| `/services/infant-care/` | `https://marietta-childcare.com/services/infant-care/` | PASS |
| `/services/preschool/` | `https://marietta-childcare.com/services/preschool/` | PASS |
| `/services/toddlers/` | `https://marietta-childcare.com/services/toddlers/` | PASS |
| `/solutions/` | `https://marietta-childcare.com/solutions/` | PASS |
| `/solutions/budget-conscious/` | `https://marietta-childcare.com/solutions/budget-conscious/` | PASS |
| `/solutions/multilingual-families/` | `https://marietta-childcare.com/solutions/multilingual-families/` | PASS |
| `/solutions/new-parents/` | `https://marietta-childcare.com/solutions/new-parents/` | PASS |
| `/solutions/premium-enrichment/` | `https://marietta-childcare.com/solutions/premium-enrichment/` | PASS |
| `/solutions/single-parents/` | `https://marietta-childcare.com/solutions/single-parents/` | PASS |
| `/solutions/special-needs-children/` | `https://marietta-childcare.com/solutions/special-needs-children/` | PASS |
| `/solutions/summer-childcare/` | `https://marietta-childcare.com/solutions/summer-childcare/` | PASS |
| `/solutions/transition-to-school/` | `https://marietta-childcare.com/solutions/transition-to-school/` | PASS |
| `/solutions/working-parents/` | `https://marietta-childcare.com/solutions/working-parents/` | PASS |
| `/terms/` | `https://marietta-childcare.com/terms/` | PASS |

## Exceptions and exclusions

- `/contact` is intentionally handled by the existing Netlify redirect to the external BBMA tour URL; it is not a generated HTML page and is not in the sitemap.
- External BBMA URLs are destinations owned by another site and were not canonicalized to the Marietta Childcare origin.
- Historical logs and prior project notes may contain the former no-hyphen hostname as historical evidence; no remaining occurrence exists in the active site source, `public/`, or final sitemap output.
