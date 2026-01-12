# 50 Pages Content Creation Prompt

## Objective
Create 50 high-quality pages for the Marietta Childcare website with SEO-optimized, entity-focused content.

## Reference Sources
Analyze and extract information from:
- **Location Page:** https://bbmacademy.com/location/marietta/
- **Main Site:** https://bbmacademy.com

## Context & Approach
This website is a location-specific microsite for Marietta Childcare. Content should be:
- **Adapted from reference sources** but tailored specifically to Marietta Childcare
- **Locally relevant** to the Marietta, Georgia area
- **Accurate and authentic** to childcare services offered
- **Never explicitly mention** that this is a microsite or reference to bbmacademy.com

## Writing Standards
**All content MUST adhere to:**
- Entity-Optimized SEO Content Writing Prompt
- File: `src/data/admin/prompts/writing style guide/Entity-Optimized_SEO_Content_Writing_Prompt.md`

Key requirements:
- Zero ambiguity rule: Explicit entity naming, no pronouns for primary entities
- 3-5 knowledge triples per paragraph
- High-density triples (40-50%), bridge triples (15-20%), informational triples (20-25%)
- Local triples for geographic anchoring (5-10%)
- Clear subject-predicate-object sentence structure

## Implementation Guidelines
- Use `multi_edit` tool to avoid token limits on large edits
- Create pages in appropriate directory structure
- Include schema markup where applicable
- Maintain consistent brand voice across all pages
- Apply local business triple distribution (30% local, 25% high-density, 20% transactional, 15% informational, 10% evaluative)

## Navigation & Internal Linking Strategy

### Main Navigation Updates
Update the main navigation menu to include:
- **Home** - Homepage
- **About Us** - Company mission, values, history
- **Programs** - Age-specific curriculum programs
- **Enrollment** - Enrollment process and requirements
- **Contact** - Contact information and inquiry form

### Internal Linking Requirements
**Each page MUST include 5-8 contextually relevant internal links:**

1. **Link Placement:** Distribute links naturally throughout page content
2. **Anchor Text:** Use descriptive, keyword-rich anchor text (not "click here")
3. **Relevance:** Links must be contextually appropriate to the page topic
4. **Link Types to Include:**
   - 2-3 links to related program pages
   - 1-2 links to enrollment or process pages
   - 1-2 links to relevant informational content
   - 1 link to contact/inquiry page

5. **Examples of Contextual Links:**
   - From "Infant Care" page → link to "Toddler Programs"
   - From "Curriculum" page → link to "Teacher Qualifications"
   - From "Parent Resources" page → link to "Enrollment Process"
   - From any service page → link to "Schedule a Tour" or "Contact Us"

### Navigation Component Updates
- Ensure Nav.astro component reflects all main navigation items
- Add breadcrumb navigation for multi-level page structures
- Include footer navigation with links to key pages
- Maintain consistent navigation across all 50 pages