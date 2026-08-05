import Link from 'next/link'

import {
  DashedDivider,
  Eyebrow,
  ThreeDotSignature,
} from '@/components/ui/brand'
import { primaryNav, secondaryNav, utilityNav } from '@/content/navigation'
import { isPlaceholder, site } from '@/content/site'

import { FooterCta } from './FooterCta'
import { Wordmark } from './Wordmark'

export function SiteFooter() {
  const year = new Date().getFullYear()
  const socialLinks = [
    { label: 'LinkedIn', href: site.links.linkedin },
    { label: 'GitHub', href: site.links.github },
  ].filter((link) => !isPlaceholder(link.href))

  return (
    <footer className="bg-midnight text-linen">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Closing call to action. The last thing on every page is the primary
            offer, never the freelance one. */}
        <FooterCta />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark tone="dark" />
            <p className="mt-4 max-w-[34ch] text-sm text-mist">
              {site.role} for established service businesses and independent
              professionals. Based in the {site.location.region}, working with
              clients across {site.location.country} and remotely elsewhere.
            </p>
            <ThreeDotSignature className="mt-6" />
          </div>

          <FooterColumn title="Pages">
            {primaryNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Freelance support is given its own footer column so agencies can
              find it, without it appearing in the main navigation. */}
          <FooterColumn title="For agencies & teams">
            {secondaryNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            {utilityNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            {isPlaceholder(site.email) ? (
              <li className="text-sm text-mist">{site.email}</li>
            ) : (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-mist transition-colors duration-200 hover:text-dawn"
                >
                  {site.email}
                </a>
              </li>
            )}
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  rel="me noopener"
                  className="text-sm text-mist transition-colors duration-200 hover:text-dawn"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <DashedDivider tone="dark" className="mt-14" />

        <div className="mt-6 flex flex-col gap-2 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. {/* [Business registration details, if needed] */}
          </p>
          <p className="eyebrow text-mist">
            {site.location.region} &middot; {site.location.country}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <Eyebrow tone="dark">{title}</Eyebrow>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-mist transition-colors duration-200 hover:text-dawn"
      >
        {children}
      </Link>
    </li>
  )
}
