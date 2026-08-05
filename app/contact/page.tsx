import type { Metadata } from 'next'
import Link from 'next/link'

import { ProjectEnquiryForm } from '@/components/forms/ProjectEnquiryForm'
import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/ui/Section'
import { DashedDivider, NumberedBadge } from '@/components/ui/brand'
import { isPlaceholder, site } from '@/content/site'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell me about your website project. I read every enquiry myself and reply within two working days with an honest answer about whether it is a good fit.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact — Lars Assen',
    description: 'Tell me about your website project.',
    url: '/contact/',
  },
}

const whatHappensNext = [
  {
    title: 'You send the form',
    body: 'It goes straight to my inbox. Nothing is added to a mailing list and nobody else sees it.',
  },
  {
    title: 'I read it properly',
    body: 'Usually the same day. If something is unclear I will ask, rather than guessing at a quote.',
  },
  {
    title: 'You get an honest answer',
    body: 'Within two working days: whether the project is a good fit, a rough price, and what the next step would be. If it is not something I should take on, I will say so and point you somewhere better.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact"
        title="Tell me about your website project."
        titleClassName="max-w-[18ch]"
        lead="The form below is the fastest route. It asks for the things I need in order to give you a useful answer rather than a vague one."
      />

      <Section size="lg">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          {/* Context column */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="eyebrow text-ember-deep">What happens next</h2>
            <ol className="mt-6 space-y-7">
              {whatHappensNext.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <NumberedBadge n={index + 1} />
                  <div>
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="mt-1.5 text-ink-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <DashedDivider className="my-8" />

            <h2 className="eyebrow text-ember-deep">Or reach me directly</h2>
            <div className="mt-4 space-y-2 text-ink-muted">
              {isPlaceholder(site.email) ? (
                <p>{site.email}</p>
              ) : (
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
                  >
                    {site.email}
                  </a>
                </p>
              )}
              {isPlaceholder(site.phone) ? null : <p>{site.phone}</p>}
              <p className="text-sm">
                Based in the {site.location.region}, working with clients across{' '}
                {site.location.country} and remotely elsewhere.
              </p>
            </div>

            <DashedDivider className="my-8" />

            {/* The secondary audience gets one quiet line, not a second form. */}
            <p className="text-sm text-ink-muted">
              Enquiring about freelance or subcontract work on behalf of an
              agency or team? There is a{' '}
              <Link
                href="/freelance-support/#freelance-enquiry"
                className="text-ink underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
              >
                separate form for that
              </Link>{' '}
              which asks the right questions.
            </p>
          </div>

          {/* Form column */}
          <div>
            <h2 className="sr-only">Website project enquiry form</h2>
            <ProjectEnquiryForm />
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Contact', href: '/contact/' },
            ]),
          ),
        }}
      />
    </>
  )
}
