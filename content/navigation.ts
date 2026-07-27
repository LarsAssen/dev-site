/* ==========================================================================
   NAVIGATION
   ---------------------------------------------------------------------------
   Hierarchy rule: complete website builds are the primary offer, so they own
   the navigation and the primary button. Freelance support is deliberately
   kept out of the main navigation row and surfaced instead in the footer, in
   a secondary homepage section, and under a labelled divider in the mobile
   menu. It stays findable for agencies without competing for attention.
   ========================================================================== */

export type NavItem = {
  label: string
  href: string
  /** Short description shown in the footer and mobile menu. */
  description?: string
}

/** The primary navigation row. Keep this to five items or fewer. */
export const primaryNav: NavItem[] = [
  { label: 'Website builds', href: '/website-builds/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

/** Secondary audience: agencies, designers and small teams. */
export const secondaryNav: NavItem[] = [
  {
    label: 'Freelance support',
    href: '/freelance-support/',
    description: 'Development capacity for agencies and small teams',
  },
]

export const utilityNav: NavItem[] = [
  { label: 'Privacy', href: '/privacy/' },
]

/** The primary call to action. Used in the header, footer and page sections. */
export const primaryCta = {
  label: 'Discuss your website',
  href: '/contact/',
} as const

/** The secondary call to action. Never given equal visual weight. */
export const secondaryCta = {
  label: 'See what is included',
  href: '/website-builds/#included',
} as const
