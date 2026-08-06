# Lars Assen — website

Marketing site for a website design and development service aimed at established
service businesses and independent professionals, with a secondary freelance /
subcontract offer for agencies and small teams.

The single offer is the **Complete Website Package**. Health, fitness and
wellness businesses in the Wellington region are a current prospecting focus,
but the public positioning is deliberately broader than that — see
`currentFocus` in `content/audience.ts`, which is always rendered as a
supporting line rather than as a headline.

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

The site is set up for **lars-assen.com on Netlify**. `netlify.toml` already
holds the build command, publish directory, security headers and cache rules,
so there is nothing to configure in the dashboard.

**Before you start — the domain currently points at Squarespace.** Its DNS is
managed at Porkbun, with an apex `A` record and a `www` CNAME both aimed at
Squarespace. Nothing is published there (both return 404), so repointing takes
nothing down. Two things to be careful of when you edit the records:

- **Keep the `TXT` record** `v=spf1 include:beehiiv.com ~all` if you still send
  a newsletter from this domain. Deleting it will start sending your newsletter
  to spam folders.
- Replace only the `A` and `CNAME` records. There is no `MX` record, so no
  email is affected.

**1. Push the repo.** Done — the code is on `main` at
<https://github.com/LarsAssen/dev-site>. Ongoing changes are just:

```bash
git push
```

Every push to `main` triggers a fresh Netlify deploy once step 2 is done.

**2. Connect Netlify.** Add new site → Import an existing project → pick the
repo. It reads `netlify.toml`, so leave the build settings alone. First deploy
takes about a minute and gives you a `something.netlify.app` URL. Check that URL
works before touching any DNS.

**3. Point the domain at it.** Netlify → Domain management → Add a domain →
`lars-assen.com`, and set it as the primary domain so `www` redirects to the
apex (which is what `site.url` says, so the canonical tags agree).

Then at Porkbun → Details → DNS, edit the records Netlify tells you to set.
Porkbun supports `ALIAS` records, so prefer an `ALIAS` on the apex over an `A`
record if Netlify offers both — it survives Netlify changing their IPs. Use
whatever values the Netlify panel displays rather than any written here; they do
change. Leave the beehiiv `TXT` record alone.

SSL is issued automatically once DNS resolves. Usually under an hour, but
Porkbun's TTL may make it longer — if Netlify still says "awaiting external DNS"
after a couple of hours, re-check the records rather than re-adding the domain.

**4. Switch the forms on.** See *Connecting the forms* below — it needs a
Google App Password set as two Netlify environment variables. Send one test
enquiry and confirm it arrives before you start pointing people at the site.

### Deploying somewhere else instead

Vercel and Cloudflare Pages both work — build command `npm run build`, publish
directory `out`. `public/_headers` covers Cloudflare, which does not read
`netlify.toml`. On either, forms need a separate service; see below.

---

## Before you launch

Everything below is a placeholder written as `[Something in square brackets]`.
Search the project for `[` to find them all.

1. **`content/site.ts`** — phone and LinkedIn. The domain is set to
   `https://lars-assen.com`; if that ever changes, update it here, since the
   canonical tags, sitemap and Open Graph URLs are all built from it.
2. **Enquiry email** — see *Connecting the forms* below. Needs a Google App
   Password set as two Netlify environment variables.
3. **`app/privacy/page.tsx`** — name your host and set the review date. Check
   it against the Privacy Act 2020.
4. **`app/opengraph-image.tsx`** — the social-sharing card. Fine as-is, but
   worth swapping for a real image once you have one.

### Connecting the forms

Both enquiry forms POST a urlencoded body to `site.formEndpoint`, which is
`/api/enquiry` — proxied by `netlify.toml` to `netlify/functions/enquiry.ts`.
That function emails the submission on with the headers set explicitly:

| Header | Value |
| --- | --- |
| `To` | `websites@lars-assen.com` (override with `ENQUIRY_TO`) |
| `From` | `Website Enquiry <websites@lars-assen.com>` (override with `ENQUIRY_FROM`) |
| `Reply-To` | the visitor's own address, so replying answers them directly |

A plain function rather than Netlify Forms, because Netlify's built-in form
notifications send from a Netlify address and cannot set `From` or `Reply-To`.

Mail goes out through Resend, not through the site owner's own Google
Workspace mailbox.

**Why not Workspace SMTP.** It was tried and does not work here.
`websites@lars-assen.com` is an *alias* of the Workspace user
`larssen@lars-assen.com`, and aliases cannot authenticate to SMTP, so the login
has to be the real user. That makes the sender and the recipient the same
Google account — and Gmail then deduplicates the message by `Message-ID`,
filing it under **Sent** and never delivering it to the inbox. Sending from
outside the Workspace makes an enquiry genuinely inbound mail, so it lands in
the inbox like any other message.

**Setup:**

1. **Create a Resend account** at [resend.com](https://resend.com) and add
   `lars-assen.com` under Domains.
2. **Add the DNS records Resend shows you**, at Porkbun. There are usually
   three: a DKIM `TXT` on `resend._domainkey`, and an `MX` plus `TXT` on a
   `send.` subdomain used for the Return-Path.
   ⚠️ **Do not touch the existing apex `TXT` record**
   `v=spf1 include:_spf.google.com ~all` — that is Google Workspace's SPF and
   your incoming mail depends on it. Resend's SPF belongs on the `send.`
   subdomain, so there is normally no conflict. If Resend ever asks for an SPF
   record on the apex specifically, **merge its include into the existing
   record** rather than adding a second one; a domain may only have one SPF
   record and two will break both senders.
3. **Create an API key** and add it in Netlify under Site configuration →
   Environment variables as `RESEND_API_KEY`. See `.env.example`.

Then redeploy and send one real test enquiry before pointing anyone at the site.

Until `RESEND_API_KEY` is set, the function returns 503 and both forms show
"That did not send — please email me directly" rather than silently swallowing
the message. If a send fails, the function returns 502 with the failure code in
the response body, and writes the full submission and the error to the Netlify
function log so an enquiry can still be recovered and answered.

**Reading a failure** — the `code` in the 502 response body says which:
`401` the API key is wrong or missing; `403` the domain is not verified in
Resend, or `ENQUIRY_FROM` is on a domain that is not; `422` the payload was
rejected, usually a malformed address; `ETIMEDOUT` Netlify could not reach
Resend inside the 8s budget.

The domain has no `DMARC` record. Not required, but worth adding once the new
sender is verified, since it improves deliverability for both senders.

**To use a hosted form service instead**, set `formEndpoint` to a Formspree,
Basin or Web3Forms endpoint. Nothing else in the project changes, though you
lose control of the `From` header. Setting it back to a value in square
brackets restores the "not connected yet" notice.

---

## Editing the content

Almost all copy lives in `content/`, separate from the components:

| File | What is in it |
| --- | --- |
| `site.ts` | Contact details, pricing, links, form endpoint |
| `navigation.ts` | Menu items and the primary/secondary calls to action |
| `offer.ts` | Package inclusions, exclusions, process, timeline, revisions, payment, care plan, developer-led points |
| `audience.ts` | Positioning, current focus, client types, fit criteria, freelance services and exclusions |
| `faqs.ts` | All FAQ questions and answers |
| `projects.ts` | Portfolio projects (currently empty — see below) |

All prices live in `content/site.ts` → `pricing`: `foundingClientPrice`,
`standardPackagePrice` and `carePlanMonthly`. Components read them through
`formatPrice()` and `currentPackagePrice()`, so a price change is one edit.

Turning founding-client pricing off is one line: set
`pricing.foundingClientPricing` to `false` in `content/site.ts`. The homepage,
the Website Builds page and the Service structured data all switch to the
standard price.

**One exception:** the FAQ answers in `content/faqs.ts` spell prices out as
literal text, because those strings are also emitted as FAQPage structured
data. If a price changes, update those answers by hand.

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

### Page depth, and why the homepage is short

The homepage summarises and routes; Website Builds convinces. That split is
deliberate and easy to undo by accident.

Three content selections exist purely to enforce it — `homepageProblems` in
`content/offer.ts`, `homepageFaqs` in `content/faqs.ts`, and the `compact`
variant of `ProcessSection`. Each shows a subset and links to the full version.
If you swap the homepage back to the full arrays, roughly half of it becomes a
word-for-word repeat of the sales page, which is what made the site feel like a
single-page site cut into pieces.

The homepage is also the only page with the tall hero and the facts row.
Everything else uses the shorter `PageHero`. That contrast is what tells someone
whether they are at the front door or in a room.

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

- Every text/background pairing across all seven pages meets WCAG AA (843 text
  nodes verified — 4.5:1 body, 3:1 large text).
- One `<h1>` per page, headings in order, no skipped levels.
- Skip link, `<main>` landmark, labelled navigation regions, and a breadcrumb
  on every page except the homepage with the current page marked
  `aria-current="page"`.
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
