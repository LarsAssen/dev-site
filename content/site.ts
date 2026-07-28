/* ==========================================================================
   SITE CONFIGURATION
   ---------------------------------------------------------------------------
   Everything in this file is safe to edit without touching any component.
   Values wrapped in square brackets are placeholders — replace them with your
   real details before launch. Search the project for "[" to find any you miss.
   ========================================================================== */

export const site = {
  name: 'Lars Assen',
  /** Shown under the wordmark in the header and footer. */
  role: 'Website design & development',

  /** Used for canonical URLs, sitemap, Open Graph and structured data.
   *  No trailing slash. Must match the domain the site is actually served on,
   *  or search engines will see the canonical tags pointing somewhere else. */
  url: 'https://lars-assen.com',

  /** Appears in the footer, on the contact page and in structured data. */
  email: 'juniorassen@hotmail.com',

  /** Optional. Leave as-is to hide the phone line from the contact page. */
  phone: '[Phone number, optional]',

  location: {
    region: 'Wellington region',
    country: 'New Zealand',
    countryCode: 'NZ',
    /** Shown as "Based in the Wellington region, New Zealand." */
    label: 'Wellington region, New Zealand',
  },

  /** Currency and pricing. Used on the homepage and Website Builds page. */
  pricing: {
    currency: 'NZD',
    launchPackageFrom: 1500,
    /** Set to false once founding-client pricing ends. The wording across the
     *  site changes with it — no other edits needed. */
    foundingClientPricing: true,
  },

  /** Social and professional links. Any entry whose href still contains a
   *  square bracket is hidden from the footer automatically. */
  links: {
    linkedin: '[LinkedIn URL]',
    github: '[GitHub URL, optional]',
  },

  /** Where the enquiry forms POST.
   *
   *  ON NETLIFY — set this to '/' and you are done. Both forms already carry
   *  the markup Netlify's build-time form detection looks for, so submissions
   *  land in Forms in the Netlify dashboard with no third-party signup.
   *
   *  ON ANY OTHER HOST — paste an endpoint from a form service that accepts a
   *  urlencoded POST and returns 2xx: Formspree, Basin, Web3Forms, or similar.
   *
   *  Either way it is this one line. Nothing else changes.
   *
   *  While this is still a placeholder the forms stay usable: they validate
   *  normally and then tell the visitor to email you directly, rather than
   *  silently failing. Leave it as-is until the site is actually deployed. */
  formEndpoint: '[Form endpoint URL]',

  /** Analytics. Left empty deliberately — no tracking script is loaded until
   *  you add one. If you do add one, the privacy page already describes it. */
  analytics: {
    /** e.g. a Plausible or Fathom site id. Empty string = no analytics. */
    provider: '' as '' | 'plausible' | 'fathom',
    siteId: '[Analytics site ID]',
  },
} as const

/** True when a config value is still an unfilled placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith('[') && value.trim().endsWith(']')
}

/** Formats a price as "NZD $1,500". */
export function formatPrice(amount: number): string {
  return `${site.pricing.currency} $${amount.toLocaleString('en-NZ')}`
}
