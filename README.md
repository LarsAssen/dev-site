# Lars Assen — website

Marketing site for a website design and development service aimed at small
service businesses and independent professionals, with a secondary freelance /
subcontract offer for agencies and small teams.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. It compiles to
a fully static site, so it can be hosted anywhere.

---

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build → static site in `out/` |
| `npm run preview` | Serves the built `out/` folder locally |
| `npm run typecheck` | TypeScript check, no build |

## Deploying

`npm run build` writes a complete static site to `out/`. Upload that folder, or
point Netlify / Vercel / Cloudflare Pages at the repo with build command
`npm run build` and publish directory `out`.

---

## Before you launch

Everything below is a placeholder written as `[Something in square brackets]`.
Search the project for `[` to find them all.

1. **`content/site.ts`** — your email address, domain, phone, LinkedIn.
2. **`content/site.ts` → `formEndpoint`** — see *Connecting the forms* below.
3. **`app/privacy/page.tsx`** — name your form service, host and analytics tool,
   and set the review date. Check it against the Privacy Act 2020.
4. **`content/faqs.ts`** — payment terms, and your freelance rates.
5. **`app/opengraph-image.tsx`** — the social-sharing card. Fine as-is, but
   worth swapping for a real image once you have one.

### Connecting the forms

Both enquiry forms POST to whatever URL is in `site.formEndpoint`. Any form
service that accepts a form-data POST works — Formspree, Netlify Forms, Basin,
Web3Forms. Create an endpoint, paste in the URL, done.

Until you do, the forms still validate properly and then tell the visitor to
email you directly, rather than silently swallowing the message.

---

## Editing the content

Almost all copy lives in `content/`, separate from the components:

| File | What is in it |
| --- | --- |
| `site.ts` | Contact details, pricing, links, form endpoint |
| `navigation.ts` | Menu items and the primary/secondary calls to action |
| `offer.ts` | Package inclusions, exclusions, process, timeline, problems |
| `audience.ts` | Client types, fit criteria, freelance services and exclusions |
| `faqs.ts` | All FAQ questions and answers |
| `projects.ts` | Portfolio projects (currently empty — see below) |

Turning founding-client pricing off is one line: set
`pricing.foundingClientPricing` to `false` in `content/site.ts`. The wording on
the homepage and the Website Builds page changes to match.

---

## Adding your first project

1. Put images in `public/work/<slug>/`.
2. Copy the commented template at the bottom of `content/projects.ts` into the
   `projects` array and fill it in.
3. **First project only:** rename the folder
   `app/work/_case-study-template/` → `app/work/[slug]/`.

That third step switches on the individual case-study pages. It starts disabled
because a static export cannot build a dynamic route that produces zero pages,
and there are no projects yet. Everything else — the Work page, the homepage
work section and the sitemap — updates from the array automatically.

Set `status` honestly. `'client'` is only for paid client work; `'concept'`,
`'self-initiated'`, `'prototype'` and `'exploration'` all print a visible label
on the card and case study, so unpaid work can never read as a client project.

---

## Design system

The visual language comes from the Terrain brand system: the six-colour palette,
Playfair Display / DM Sans / DM Mono, and the graphic devices (ember accent
line, numbered badges, dashed rules, elevation line, three-dot signature).

Tokens are declared once in `app/globals.css` under `@theme`. Four extra tones
are derived there — `ember-deep`, `ember-deeper`, `dawn-bright` and the neutrals
— purely to meet WCAG AA contrast, since full-strength Ember on Linen is 3.4:1
and Dawn on Dusk is 4.3:1. Both are below the 4.5:1 minimum for text. Ember is
still used at full strength for accent lines, rules and focus rings, where 3:1
is the requirement.

**Type rules from the brand system, applied here:**

- Playfair Display for one display line per view, sentence case, never caps.
- DM Sans for all body and interface text.
- DM Mono for eyebrows, labels and numerals — always uppercase, tracked +0.14em.

Fonts are self-hosted at build time via `next/font`, so no request goes to
Google when someone loads the site.

### Hierarchy rules to preserve

The site sells one thing. If you change the layout, keep these intact:

- The `primary` button variant is reserved for the main website enquiry. Nothing
  else on the site should use it.
- Freelance support stays out of the main navigation. It lives in the footer, in
  a bordered aside on the homepage, and under a labelled divider in the mobile
  menu.
- The hero never mentions freelance work, and never gives two offers equal
  buttons.

---

## Accessibility

Checked and currently passing:

- Every text/background pairing across all seven pages meets WCAG AA (864 text
  nodes verified — 4.5:1 body, 3:1 large text).
- One `<h1>` per page, headings in order, no skipped levels.
- Skip link, `<main>` landmark, labelled navigation regions.
- Every form control has a real `<label>`; errors are tied to their field with
  `aria-describedby` and announced via `role="alert"`.
- Mobile menu is keyboard operable, closes on Escape and returns focus.
- Visible focus ring on everything focusable.
- No horizontal scroll at 375px.
- `prefers-reduced-motion` respected.

Worth re-checking after any significant layout change.

---

## Deliberately not included

No testimonials, client logos, fabricated metrics, chatbots, pop-ups, countdown
timers, newsletter forms, blog, pricing calculators or e-commerce. The trust on
this site comes from clear scope, transparent pricing and stated boundaries.

Do not add placeholder testimonials. The Work page is built to look finished
while empty, precisely so that is never tempting.
