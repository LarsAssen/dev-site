/* ==========================================================================
   STRUCTURED DATA
   ---------------------------------------------------------------------------
   Only facts that are actually true are described here. No aggregate ratings,
   no review counts and no award markup — those require real reviews to exist.
   ========================================================================== */

import { completePackage } from '@/content/offer'
import { currentPackagePrice, formatPrice, isPlaceholder, site } from '@/content/site'

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
    jobTitle: 'Website designer and software developer',
    ...(isPlaceholder(site.email) ? {} : { email: site.email }),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.location.region,
      addressCountry: site.location.countryCode,
    },
    knowsAbout: [
      'Website design',
      'Software development',
      'Front-end development',
      'Responsive web design',
      'Website information architecture',
    ],
  }
}

/** Describes the website-build service. Used on the Website Builds page. */
export function serviceSchema() {
  const price = currentPackagePrice()

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}/website-builds/#service`,
    name: completePackage.name,
    serviceType: 'Website design and development',
    description:
      'A complete website package for established service businesses and independent professionals: planning, written scope, responsive design, development, two structured revision rounds, testing and launch.',
    provider: { '@id': `${site.url}/#person` },
    areaServed: [
      { '@type': 'Country', name: 'New Zealand' },
      { '@type': 'AdministrativeArea', name: site.location.region },
    ],
    audience: {
      '@type': 'Audience',
      audienceType:
        'Established service businesses and independent professionals',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: site.pricing.currency,
      price,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: site.pricing.currency,
        price,
        valueAddedTaxIncluded: false,
        description: site.pricing.foundingClientPricing
          ? `Founding-client price of ${formatPrice(price)} for the first ${
              site.pricing.foundingClientProjects
            } suitable projects; ${formatPrice(
              site.pricing.standardPackagePrice,
            )} afterwards. Payable 50% before the project begins and 50% after final approval, before launch. Third-party costs such as hosting, domain registration and paid software are billed separately.`
          : `${formatPrice(
              price,
            )} for the defined package. Payable 50% before the project begins and 50% after final approval, before launch. Third-party costs such as hosting, domain registration and paid software are billed separately.`,
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
