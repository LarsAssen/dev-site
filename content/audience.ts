/* ==========================================================================
   WHO THE SERVICE IS FOR
   ---------------------------------------------------------------------------
   The core positioning is broad: established service businesses and
   independent professionals, across sectors. Health, fitness and wellness is
   a current area of focus, not a restriction — see `currentFocus` below, which
   is always shown as a supporting line rather than as the headline.
   ========================================================================== */

/** The broad positioning statement. Used as the lead on both audience sections. */
export const audiencePositioning =
  'I work with established service businesses and independent professionals whose current website no longer represents the quality of the service they provide.'

/** A current prospecting focus, stated without narrowing the offer. */
export const currentFocus =
  'I am currently giving particular attention to established health, fitness and wellness businesses in the Wellington region, while continuing to consider suitable service-business projects elsewhere.'

export const clientTypes = [
  {
    label: 'Health and wellness professionals',
    body: 'Therapists, nutrition professionals and clinics who need a calm, credible presence and a straightforward way to be contacted.',
  },
  {
    label: 'Physiotherapists and allied health',
    body: 'Practices whose visitors arrive with a specific problem and need to see quickly that it is something you treat.',
  },
  {
    label: 'Personal trainers and fitness studios',
    body: 'People whose enquiries currently come through social media and who want something they actually own.',
  },
  {
    label: 'Massage, bodywork and movement studios',
    body: 'Yoga, Pilates, massage and bodywork businesses where the treatments, the timetable and the first step all need to be obvious.',
  },
  {
    label: 'Coaches and consultants',
    body: 'Independent practitioners who need to explain a service that is easy to describe in person and hard to describe on a page.',
  },
  {
    label: 'Professional-service firms',
    body: 'Small teams whose current site was built quickly years ago and no longer reflects the standard of their work.',
  },
  {
    label: 'Tradespeople and local services',
    body: 'Businesses judged on trust and proximity, where a clear service list and an obvious phone number do most of the work.',
  },
  {
    label: 'Training and education providers',
    body: 'Providers who need courses, dates, prerequisites and the enrolment step set out plainly rather than buried in a PDF.',
  },
  {
    label: 'Creative and specialist independents',
    body: 'Photographers, makers and studios who need their work presented properly rather than compressed into a feed.',
  },
] as const

/** A short qualifying list. Being clear about fit saves everyone time. */
export const goodFitWhen = [
  'You run an established service business and sell your time, expertise or craft rather than products',
  'You need up to about six core pages, not forty',
  'You want one person handling the whole project rather than a team you never meet',
  'You can spare a few hours across the project for decisions and feedback',
  'You would rather have a clear, well-organised website than an elaborate one',
  'You want to understand what you are getting before you commit to it',
] as const

export const notAGoodFitWhen = [
  'You need an online store, product catalogue or payment processing',
  'You need a large custom application or a complex back-end system',
  'You are looking for ongoing marketing, advertising or social media management',
  'You need someone on call for general IT and technical support',
  'You want the cheapest possible website rather than a considered one',
] as const

/* ==========================================================================
   SECONDARY AUDIENCE — agencies, designers and small teams
   ========================================================================== */

export const freelanceServices = [
  {
    title: 'Landing-page development',
    body: 'Single-page campaign and product pages built from your designs, responsive and ready to hand over.',
  },
  {
    title: 'Marketing website implementation',
    body: 'Multi-page marketing sites built to spec, with consistent components and sensible structure.',
  },
  {
    title: 'Responsive front-end work',
    body: 'Turning fixed-width designs into layouts that hold up across real devices and content lengths.',
  },
  {
    title: 'Design-to-web implementation',
    body: 'Faithful builds from Figma or equivalent, with the small decisions the design file did not cover raised rather than guessed.',
  },
  {
    title: 'Defined existing-site improvements',
    body: 'A scoped list of fixes and changes to a live site, agreed up front and delivered against.',
  },
  {
    title: 'Website QA',
    body: 'Cross-browser, cross-device and accessibility checks with a written, prioritised list of what needs attention.',
  },
  {
    title: 'Launch support',
    body: 'Pre-launch checks, redirects, metadata, analytics verification and a hand on deck during go-live.',
  },
  {
    title: 'Rapid prototypes',
    body: 'Working prototypes for pitches, internal review or user testing, built quickly and labelled as such.',
  },
  {
    title: 'Short-term delivery capacity',
    body: 'Extra hands for a fixed period when your own team is at capacity or covering an absence.',
  },
] as const

export const engagementModels = [
  {
    title: 'Fixed-scope project',
    body: 'A defined deliverable with an agreed price and end date. Best when the requirements are already clear.',
  },
  {
    title: 'Hourly or day-rate block',
    body: 'A pre-agreed block of time drawn down as needed. Useful for improvement work and QA.',
  },
  {
    title: 'Part-time contract',
    body: 'A set number of days per week over a defined period, for teams with a steady stream of work.',
  },
  {
    title: 'Subcontract or white-label',
    body: 'Delivery under your agency name, working to your standards and communicating through your process.',
  },
] as const

export const freelanceExclusions = [
  'Ongoing WooCommerce or e-commerce operations',
  'Product catalogue administration',
  'General IT support',
  'On-call emergency maintenance',
  'Open-ended WordPress support retainers',
  'Undefined general digital assistance',
  'Large custom back-end systems without an appropriate team around them',
] as const
