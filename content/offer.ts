/* ==========================================================================
   THE OFFER
   ---------------------------------------------------------------------------
   The Website Launch Package: what it includes, what it costs, what it does
   not cover, and how the work runs. Edit the copy here and every page that
   uses it stays in step.
   ========================================================================== */

export const launchPackage = {
  name: 'Website Launch Package',
  summary:
    'A complete website, planned, designed, built and launched. One project, one price, a clear finish line.',

  /** Grouped inclusions. Used on the Website Builds page. */
  inclusions: [
    {
      title: 'Planning and structure',
      items: [
        'A working session to understand your business, your customers and what the website needs to do',
        'A page-by-page site structure agreed before any design work starts',
        'Navigation and content order planned around the questions your customers actually ask',
        'A clear enquiry path mapped from first visit through to getting in touch',
      ],
    },
    {
      title: 'Design and build',
      items: [
        'Approximately four to six core pages, designed and built',
        'Responsive layouts checked on phones, tablets and desktop',
        'Your content organised into a readable, logical order',
        'Light copy editing for clarity, structure and consistency',
        'Accessible colour contrast, heading structure and keyboard navigation',
      ],
    },
    {
      title: 'Getting found and getting in touch',
      items: [
        'A contact or enquiry form that sends straight to your inbox',
        'Basic search-engine setup: page titles, descriptions and sitemap',
        'Analytics installed so you can see what visitors do',
        'Social sharing previews configured for links shared online',
      ],
    },
    {
      title: 'Launch and handover',
      items: [
        'Domain connected and the site taken live',
        'Two rounds of revisions included',
        'Launch checks across browsers and devices',
        'A handover walkthrough so you understand what you have',
        'Written notes covering how to make the everyday changes yourself',
      ],
    },
  ],

  /** Flat version of the above, for the homepage summary. */
  highlights: [
    'Website planning and structure',
    'Approximately four to six core pages',
    'Responsive design and build',
    'Content organised and lightly edited',
    'Contact or enquiry form',
    'Basic search-engine setup',
    'Analytics installed',
    'Domain connected',
    'Two rounds of revisions',
    'Launch support and handover guidance',
  ],

  /** Priced separately, discussed before anything is agreed. */
  optionalAdditions: [
    'Additional pages beyond the core set',
    'A simple blog or news section',
    'A booking or scheduling integration',
    'Multi-location or service-area pages',
    'Basic logo and brand tidy-up for businesses without one',
    'Photography direction and sourcing guidance',
    'Content writing beyond light editing',
    'A second round of post-launch improvements',
  ],

  /** Stated plainly so there are no surprises later. */
  exclusions: [
    'Hosting, domain registration and any premium software or plugin licences',
    'Paid stock photography, fonts or third-party integrations',
    'Ongoing content updates unless we agree a separate arrangement',
    'Online stores, payment processing and product catalogues',
    'Booking systems that need custom back-end development',
    'Ongoing marketing, advertising or social media management',
    'General IT support, email hosting and device troubleshooting',
  ],

  /** What the project needs from you. Honest about the shared effort. */
  whatINeedFromYou: [
    'A rough idea of your services and who they are for — I can help shape the rest',
    'Any existing text, photos or logo files you already have',
    'One person as the main point of contact for decisions',
    'Feedback within a reasonable window at each review stage',
    'Access to your domain, or a willingness to set one up',
  ],
} as const

export const timeline = {
  headline: 'Most projects take three to five weeks',
  body: 'That assumes content and feedback arrive at a steady pace. Projects that need photography, new copy or several decision-makers take longer, and I will say so before we start rather than partway through.',
  phases: [
    { label: 'Discuss and plan', duration: 'Week 1' },
    { label: 'Design and build', duration: 'Weeks 2 to 3' },
    { label: 'Review and revisions', duration: 'Week 4' },
    { label: 'Launch and handover', duration: 'Week 4 to 5' },
  ],
} as const

export const process = [
  {
    title: 'Discuss',
    body: 'You tell me about your business, your customers and what is not working now. I tell you honestly whether I am the right person for it. No pressure and no obligation either way.',
  },
  {
    title: 'Plan',
    body: 'We agree the pages, the structure and the order the information should appear in. This is the step most websites skip, and it is why so many of them end up confusing.',
  },
  {
    title: 'Build',
    body: 'I design and build the site, working on real pages rather than static mockups. You see progress as it happens instead of waiting weeks for a reveal.',
  },
  {
    title: 'Review',
    body: 'You go through it properly and send your notes. Two rounds of revisions are included, and I will tell you if a request will affect the scope before I act on it.',
  },
  {
    title: 'Launch',
    body: 'I connect your domain, run the final checks and take the site live. Then I walk you through what you have and how to keep it current.',
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
