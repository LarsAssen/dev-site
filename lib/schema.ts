/* ==========================================================================
   STRUCTURED DATA
   ---------------------------------------------------------------------------
   Only facts that are actually true are described here. No aggregate ratings,
   no review counts and no award markup — those require real reviews to exist.
   ========================================================================== */

import { formatPrice, isPlaceholder, site } from '@/content/site'

function absolute(path: string): string {
  return new URL(path, site.url).toString()
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: 'en-NZ',
    publisher: { '@id': `${site.url}/#person` },
  }
}

export function personSchema() {
  const sameAs = [site.links.linkedin, site.links.github].filter(
    (link) => !isPlaceholder(link),
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    url: `${site.url}/`,
    jobTitle: 'Website designer and developer',
    ...(isPlaceholder(site.email) ? {} : { email: site.email }),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.location.region,
      addressCountry: site.location.countryCode,
    },
    knowsAbout: [
      'Website design',
      'Front-end development',
      'Responsive web design',
      'Website information architecture',
    ],
  }
}

/** Describes the website-build service. Used on the Website Builds page. */
export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/website-builds/#service`,
    name: 'Website Launch Package',
    serviceType: 'Website design and development',
    description:
      'Planning, design, build and launch of a complete website for a small service business or independent professional.',
    provider: { '@id': `${site.url}/#person` },
    areaServed: [
      { '@type': 'Country', name: 'New Zealand' },
      { '@type': 'AdministrativeArea', name: site.location.region },
    ],
    audience: {
      '@type': 'Audience',
      audienceType:
        'Small service businesses and independent professionals',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: site.pricing.currency,
      price: site.pricing.launchPackageFrom,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: site.pricing.currency,
        minPrice: site.pricing.launchPackageFrom,
        valueAddedTaxIncluded: false,
        description: `Projects start from ${formatPrice(
          site.pricing.launchPackageFrom,
        )}. Third-party costs such as hosting, domain registration and paid software are billed separately.`,
      },
      availability: 'https://schema.org/LimitedAvailability',
    },
    url: absolute('/website-builds/'),
  }
}

export type FaqEntry = { question: string; answer: string }

export function faqSchema(faqs: FaqEntry[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${absolute(pageUrl)}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function breadcrumbSchema(
  trail: Array<{ name: string; href: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.href),
    })),
  }
}
