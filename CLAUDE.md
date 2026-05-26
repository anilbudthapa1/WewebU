# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**WeWebU** — Australian digital agency website ([wewebu.com.au](https://wewebu.com.au))  
Services offered: Website Design & Development · Web Application Development · Google Business Promotion

Static HTML/CSS/JS site. No build step, no framework, no package manager — open `index.html` directly in a browser.

## File Structure

```
index.html          — Single-page site (all sections in one file)
css/style.css       — All styles, using CSS custom properties (design tokens in :root)
js/main.js          — AOS init, sticky nav, mobile menu, GSAP hero, counters, form
```

## External CDNs (no local install needed)

| Library | Purpose | Version |
|---------|---------|---------|
| Google Fonts | Space Grotesk + DM Sans | latest |
| AOS | Scroll-triggered animations | 2.3.4 |
| Animate.css | Hero entrance animations | 4.1.1 |
| GSAP | Hero title tween | 3.12.5 |

Icons are inline SVGs (no icon library CDN).

## Sections (in order)

`#hero` → `#services` → `#why` → `#process` → `#work` → `#testimonials` → `#contact` → footer

## Key CSS Conventions

- All colours, spacing, and radii are CSS custom properties defined in `:root` (see top of `style.css`).
- Responsive breakpoints: `1024px` (tablet), `768px` (mobile), `480px` (small mobile).
- The `.gradient-text` utility class applies the indigo→purple gradient to text.
- Service card colours use `.svc-blue`, `.svc-purple`, `.svc-green` modifier classes.
- AOS attributes (`data-aos`, `data-aos-delay`) are on section children, not section wrappers.

## Contact Form

The form in `#contact` currently simulates submission with a `setTimeout`. To wire up a real backend, replace the timeout block in `js/main.js` (search for `"Simulate submission"`) with a `fetch()` POST to your preferred endpoint (Formspree, Netlify Forms, custom API, etc.).

## Deployment

Drop the three files/folders (`index.html`, `css/`, `js/`) onto any static host:
- Netlify / Vercel drag-and-drop
- GitHub Pages
- cPanel file manager at the domain root of `wewebu.com.au`

## Content to Update Before Going Live

- Footer phone number (currently placeholder — add real number)
- Social media links in footer (`href="#"` placeholders)
- Portfolio section (swap mock browser cards with real screenshots)
- Testimonials (replace placeholder clients with real ones)
- Form action (wire up real submission endpoint)
