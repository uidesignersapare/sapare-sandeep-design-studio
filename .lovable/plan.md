

# Implementation Plan

## 1. Update Projects Data & Add Links

Update `WorkSection.tsx` project data:
- Add `link` field to each project with the provided URLs
- Update all categories to "WEB DESIGN · 2025"
- Update descriptions/tags to match the new spec
- Wrap each card in an `<a>` tag that opens the link in a new tab
- Replace project images with website screenshots fetched from each URL

## 2. Redesign Work Section with Sticky Card Stacking Effect

Rebuild `WorkSection.tsx` with a CSS sticky-based card stacking animation:
- Use a tall container with each card wrapped in a sticky-positioned div
- Each card has `position: sticky; top: 0` so it pins while the next card scrolls up and overlays it
- Previous cards scale down slightly as new cards stack on top
- Use Framer Motion's `useScroll` + `useTransform` for smooth scale-down and parallax on images
- Cards: large rounded corners, dark gradient overlay, background image, category label, title, description, tags, circular orange arrow button
- "View All →" button links to `/projects`

## 3. Create /projects Page

**New file: `src/pages/Projects.tsx`**
- Display all 4 projects in a filterable grid
- Category filter tabs at top: "All", "Web Design" (expandable as categories grow)
- Responsive grid: 3 cols desktop, 2 tablet, 1 mobile
- Each card shows image, title, category, and links to the external project URL
- Include Navbar and Footer
- Smooth fade-in animations on cards

**Update `src/App.tsx`**: Add route for `/projects`

## 4. Enhance Scroll Animations Across All Sections

Since GSAP isn't installed and Framer Motion is already in use, implement all scroll animations using **Framer Motion's** `whileInView`, `useScroll`, and `useTransform`:

- **Hero**: Already has fade-in; add stagger delay to buttons
- **Services**: Add stagger animation to cards (already partially done, refine delays)
- **Projects**: Handled by the sticky stacking redesign above
- **About**: Text fades from left (already done); add individual stagger to stat cards
- **Tools**: Add scale-up animation on each tool chip (already partially done)
- **Contact**: Add stagger to contact buttons
- **Footer**: Add fade-in on viewport entry

Most sections already have basic `whileInView` animations. The main enhancements are:
- Adding stagger effects to grouped items
- Adding the sticky card stack to projects
- Refining timing/easing for a more premium feel

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/WorkSection.tsx` | Major rewrite: sticky stacking cards, updated data, external links |
| `src/pages/Projects.tsx` | New: all-projects page with filters |
| `src/App.tsx` | Add `/projects` route |
| `src/components/AboutSection.tsx` | Minor: stagger stat cards |
| `src/components/ContactSection.tsx` | Minor: stagger contact buttons |
| `src/components/Footer.tsx` | Minor: add fade-in animation |
| `src/components/ServicesSection.tsx` | Minor: refine stagger timing |
| `src/components/ToolsSection.tsx` | Minor: refine scale animation |

