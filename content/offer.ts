/* ==========================================================================
   THE OFFER
   ---------------------------------------------------------------------------
   The Complete Website Package: what it includes, what it costs, what it does
   not cover, and how the work runs. Edit the copy here and every page that
   uses it stays in step.

   Prices themselves live in content/site.ts, so there is one source of truth
   for the founding-client price, the standard price and the care plan.
   ========================================================================== */

export const completePackage = {
  name: 'Complete Website Package',
  summary:
    'A complete website planned, designed, built and launched. One defined project, one agreed scope and a clear finish line.',

  /** Grouped inclusions. Used on the Website Builds page. */
  inclusions: [
    {
      title: 'Planning and structure',
      items: [
        'An initial project discussion to understand your business, your customers and what the website needs to do',
        'A written project scope agreed before any design work starts',
        'Website planning and a page-by-page structure',
        'Navigation and content order planned around the questions your customers actually ask',
        'Clear calls to action and an enquiry path mapped from first visit through to getting in touch',
      ],
    },
    {
      title: 'Design and build',
      items: [
        'Up to six core pages, designed and built',
        'Responsive desktop, tablet and mobile design',
        'Website development, with your content organised into a readable, logical order',
        'Organisation and light editing of the content you supply, for clarity and consistency',
        'Accessible colour contrast, heading structure and keyboard navigation',
      ],
    },
    {
      title: 'Getting found and getting in touch',
      items: [
        'A contact or enquiry form that sends straight to your inbox',
        'Basic search-engine setup: page titles, descriptions and sitemap',
        'Analytics setup so you can see what visitors do',
        'Social sharing previews configured for links shared online',
      ],
    },
    {
      title: 'Review, launch and handover',
      items: [
        'Two structured revision rounds',
        'Pre-launch testing across browsers and devices',
        'Domain connection and the site taken live',
        'Launch support on the day and immediately after',
        'Basic handover guidance, including written notes on the everyday changes you are likely to want to make',
      ],
    },
  ],

  /** Flat version of the above, for the homepage summary. */
  highlights: [
    'Initial project discussion and written scope',
    'Website planning and page structure',
    'Up to six core pages',
    'Responsive desktop, tablet and mobile design',
    'Content organised and lightly edited',
    'Contact or enquiry form',
    'Basic search-engine setup and analytics',
    'Domain connection and pre-launch testing',
    'Two structured revision rounds',
    'Launch support and basic handover guidance',
  ],

  /** Illustrative only — the exact sitemap is agreed during planning. */
  typicalPages: [
    'Home',
    'About',
    'Services',
    'Individual service pages',
    'Frequently asked questions',
    'Contact',
  ],

  /** Priced separately, discussed before anything is agreed. */
  optionalAdditions: [
    'Additional pages beyond the core set',
    'A simple blog or news section',
    'A booking or scheduling integration',
    'Multi-location or service-area pages',
    'Basic logo and brand tidy-up for businesses without one',
    'Photography direction and sourcing guidance',
    'Content writing beyond organisation and light editing',
    'A further round of post-launch improvements',
  ],

  /** Not automatically part of the package. Stated plainly, not buried. */
  exclusions: [
    'Full branding or logo design',
    'Professional photography',
    'Extensive copywriting from scratch',
    'E-commerce, product catalogues and payment processing',
    'Custom applications and complex back-end systems',
    'Complex booking systems',
    'Membership platforms',
    'Unlimited revisions',
    'Marketing, advertising and social media management',
    'SEO campaigns',
    'Guaranteed search rankings',
    'Guaranteed enquiries, leads or sales',
  ],

  /** Third-party costs. Paid by the client, in the client's own name. */
  thirdPartyCosts:
    'Hosting, domain registration, premium software or plugin licences, paid stock photography and any paid integrations are paid separately by you, directly to the provider, unless something is explicitly included in writing. You own all of them outright.',

  /** What the project needs from you. Honest about the shared effort. */
  whatINeedFromYou: [
    'A rough idea of your services and who they are for — I can help shape the rest',
    'Any existing text, photos or logo files you already have',
    'One person as the main point of contact for decisions',
    'Feedback within a reasonable window at each review stage',
    'Access to your domain, or a willingness to set one up',
  ],
} as const

/** Payment structure. Stated in full rather than as a vague "deposit". */
export const payment = {
  headline: 'Half before the work starts, half before it goes live',
  body: 'A 50% initial payment is required before the project begins. The remaining 50% is due following final approval and before the website is launched, transferred or made publicly available.',
  steps: [
    {
      share: '50%',
      label: 'Before the project begins',
      body: 'Paid once the scope is agreed in writing. This books the project in and is what the planning week starts from.',
    },
    {
      share: '50%',
      label: 'After final approval, before launch',
      body: 'Paid once you have reviewed the finished website and approved it, and before it is launched or transferred.',
    },
  ],
} as const

/** Revision policy. Explained calmly — this is not a contract page. */
export const revisions = {
  headline: 'Two structured revision rounds',
  definition:
    'A revision round is one consolidated list of feedback provided after reviewing the website. Sending it as one list rather than in fragments is what keeps the project moving and the price fixed.',
  reasonable: [
    'Replacing supplied images',
    'Adjusting wording',
    'Correcting information',
    'Reasonable spacing or layout adjustments',
    'Design refinements within the agreed direction',
  ],
  outside: [
    'New pages or new functionality',
    'Replacing the agreed design direction',
    'Rewriting all the website copy',
    'Major changes to the business or the offer',
    'Anything outside the agreed scope',
  ],
} as const

/** How work beyond the package is handled. No hourly rate is published. */
export const outOfScope = {
  headline: 'Work outside the package',
  body: 'Work outside the agreed package is discussed and priced before it begins. Where possible, additional work is quoted at a fixed price, so you can decide whether to proceed before anything is added.',
} as const

/**
 * The optional Website Care Plan. Deliberately secondary to the package — it
 * appears in full on the Website Builds page and as a single line elsewhere.
 */
export const carePlan = {
  eyebrow: 'Optional support after launch',
  name: 'Website Care Plan',
  intro:
    'Keep your website maintained after launch without having to manage the routine technical work yourself. The exact maintenance responsibilities depend on the website platform and hosting arrangement.',
  included: [
    'Routine platform, theme or plugin updates where applicable',
    'Backup checks',
    'Basic security and uptime checks',
    'Contact-form checks',
    'Up to 30 minutes of minor content changes each month',
    'Reasonable email support for website-related questions',
  ],
  notIncluded: [
    'New pages',
    'Redesign work',
    'New functionality',
    'Copywriting projects',
    'SEO campaigns',
    'Advertising or marketing',
    'Large content changes',
    'Hosting, domain and paid licence fees',
    'Third-party tools or services unless explicitly agreed',
  ],
  note: 'Unused content-editing time does not roll over. Availability and exact responsibilities depend on the platform and hosting setup.',
  cta: 'Ask about website care',
} as const

export const timeline = {
  headline: 'Most projects take three to five weeks',
  body: 'Most suitable projects are completed within approximately three to five weeks. That assumes the required content, account access, feedback and decisions are provided without long delays. Projects that need photography, new copy or several decision-makers take longer, and I will say so before we start rather than partway through.',
  phases: [
    { label: 'Planning, structure and content organisation', duration: 'Week 1' },
    { label: 'Design and development', duration: 'Weeks 2 to 3' },
    { label: 'Review and revisions', duration: 'Week 4' },
    { label: 'Final checks, payment, launch and handover', duration: 'Weeks 4 to 5' },
  ],
  /** Said plainly so nobody reads the table above as a promised launch date. */
  caveat:
    'I will not commit to an exact launch date before you have provided the content and access the build depends on. Once those are in, the date gets firm quickly.',
} as const

export const process = [
  {
    title: 'Discuss',
    body: 'You tell me about your business, your customers and what is not working now. I tell you honestly whether I am the right person for it. No pressure and no obligation either way.',
  },
  {
    title: 'Plan',
    body: 'We agree the pages, the structure and the order the information should appear in, and I put the scope in writing. This is the step most websites skip, and it is why so many of them end up confusing.',
  },
  {
    title: 'Build',
    body: 'I design and build the site, working on real pages rather than static mockups. You see progress as it happens instead of waiting weeks for a reveal.',
  },
  {
    title: 'Review',
    body: 'You go through it properly and send your notes as one consolidated list. Two structured revision rounds are included, and I will tell you if a request falls outside the scope before I act on it.',
  },
  {
    title: 'Launch',
    body: 'I run the pre-launch checks, connect your domain and take the site live. Then I walk you through what you have and how to keep it current.',
  },
] as const

/** The problems the service exists to solve. Practical, not dramatic. */
export const problems = [
  {
    title: 'The website is out of date',
    body: 'It was built years ago, it no longer matches the work you do now, and you are quietly hoping people do not look at it too closely.',
  },
  {
    title: 'Nobody can tell what you offer',
    body: 'The services are there somewhere, but they are buried, worded inconsistently, or spread across pages in an order that made sense to whoever built it.',
  },
  {
    title: 'It falls apart on a phone',
    body: 'Most people will find you on a phone. If the text is small, the buttons are hard to hit and the menu does not work properly, they leave.',
  },
  {
    title: 'There is no obvious way to get in touch',
    body: 'An email address in the footer is not an enquiry path. People need to know what happens next and be able to start it in one click.',
  },
  {
    title: 'Everything lives on social media',
    body: 'Your profile does a job, but you do not control it, it is hard to search, and it cannot explain your services properly to someone deciding whether to call you.',
  },
  {
    title: 'Replacing it feels like a big job',
    body: 'You have put it off because you are not sure what you need, what it should cost, or how much of your time it will take.',
  },
] as const

/**
 * The three problems shown on the homepage. The full six appear on the
 * Website Builds page.
 *
 * The homepage summarises and routes; Website Builds does the convincing.
 * Keeping this list short is what stops the two pages reading as the same
 * page twice. If you swap one out, take one out too — three is the point.
 */
export const homepageProblems = [
  problems[0], // The website is out of date
  problems[1], // Nobody can tell what you offer
  problems[3], // There is no obvious way to get in touch
] as const

/** What visitors should be able to work out quickly on any good website. */
export const websiteJobs = [
  'What the business offers',
  'Who it helps',
  'Why it can be trusted',
  'What to do next',
] as const

/**
 * The development background, used as a commercial point rather than a CV.
 * Shown on the homepage and echoed more fully on the About page.
 */
export const developerLed = {
  eyebrow: 'Developer-led from start to finish',
  title: 'Design backed by real development experience.',
  body: [
    'I bring a professional software-development background to every website project. That means I understand both the visible website and the systems behind it, not only how to arrange content on a page.',
    'I handle the planning, design, development, testing and launch directly. When something behaves unexpectedly, needs to connect properly or requires a technical decision, the person solving it is the same person responsible for the rest of the project.',
  ],
  points: [
    {
      title: 'Technical judgement',
      body: 'I evaluate what the website actually needs, choose a sensible solution and avoid adding tools or complexity without a clear reason.',
    },
    {
      title: 'Reliable implementation',
      body: 'Responsive behaviour, forms, analytics, accessibility and launch details are treated as part of the build rather than afterthoughts.',
    },
    {
      title: 'Maintainable structure',
      body: 'The website should remain understandable, editable and sensible after it has been handed over.',
    },
    {
      title: 'Direct problem-solving',
      body: 'You are not passed from a salesperson to an account manager and then to an anonymous developer.',
    },
  ],
} as const
