# CLAUDE.md — Dr. Jang's Bread Factory

## Project Goal
Production portfolio site for Dr. Jang's Bread Factory (닥터장팩토리) — a Korean premium B2B bakery. Treat as an existing site needing refinement, not a redesign. The site communicates product quality, HACCP certification, manufacturing capability, and B2B partnership.

---

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

---

## Tooling
- **Server:** `node serve.mjs` in background → `http://localhost:3001`. Never screenshot `file:///`. Don't start a second instance if already running.
- **Screenshots:** `node screenshot.mjs http://localhost:3001 [label]` → saves to `./temporary screenshots/screenshot-N[-label].png`. Read the PNG with the Read tool after every shot.
- **Puppeteer:** installed in project root, Chrome cached at `~/.cache/puppeteer/`.
- **Formspree:** contact form endpoint `xaqlpywo` (Formspree Ajax, already wired up). This is the **production** endpoint — localhost submissions are blocked by Formspree by default, but do not use this ID for staging/automated testing.

---

## Output Defaults
- Single `index.html`, all styles inline
- Tailwind CSS via CDN
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Check `brand_assets/` first — use real assets if present, never placeholders where real ones exist

---

## Anti-Generic Guardrails
- No default Tailwind palette (no indigo-500, blue-600). Use project brand colors.
- No `transition-all`. Animate only `transform` and `opacity`.
- Pair display font with body font — never same font for both.
- Every clickable element needs hover, focus-visible, and active states.
- Surfaces need depth layers (base → elevated → floating), not flat z-planes.

---

## Hard Rules
- Do not add unrequested sections, features, or content
- Do not stop after one screenshot pass — minimum 2 rounds
- Read before editing — never guess at existing code
- Confirm before any destructive git action

---

## Mobile-First
Test at: 390px · 430px · 768px · 1024px · 1440px

No horizontal scroll · No cut-off text · No overlapping elements · No tiny tap targets · No broken layouts

---

## Site-Specific
- **Bilingual:** Korean-first (`lang-ko` default), English toggle. Korean font overrides use `html.lang-ko` selectors with `!important`. Korean UI text is 58.6% larger than English equivalents.
- **Priority order:** Products → Factory/certifications → Contact conversion → decorative polish
- **Improve, don't rebuild:** Read existing code first. Preserve what works. No rewrites without clear justification.
- **Code quality:** Simple, readable, no overengineering, no speculative abstractions.
