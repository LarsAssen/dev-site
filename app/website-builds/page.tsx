import type { Metadata } from 'next'
import Link from 'next/link'

import { ProjectEnquiryForm } from '@/components/forms/ProjectEnquiryForm'
import { PageHero } from '@/components/layout/PageHero'
import { FreelanceTeaser } from '@/components/sections/FreelanceTeaser'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { ArrowRight, Button } from '@/components/ui/Button'
import { Faq } from '@/components/ui/Faq'
import { Section } from '@/components/ui/Section'
import { DashedDivider, Pill, SectionHeading } from '@/components/ui/brand'
import { CheckList, ExclusionList, RuleList } from '@/components/ui/lists'
import { clientTypes, goodFitWhen, notAGoodFitWhen } from '@/content/audience'
import { generalFaqs, pricingFaqs } from '@/content/faqs'
import { launchPackage, problems, timeline } from '@/content/offer'
import { formatPrice, site } from '@/content/site'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Website builds',
  description:
    'The Website Launch Package: planning, design, build and launch of a complete website for a small service business. Full inclusions, timeline and pricing from NZD $1,500.',
  alternates: { canonical: '/website-builds/' },
  openGraph: {
    title: 'Website builds — Lars Assen',
    description:
      'A professional website that makes your business easier to understand and contact. Full inclusions, timeline and transparent pricing.',
    url: '/website-builds/',
  },
}

const buildFaqs = [...generalFaqs, ...pricingFaqs]

export default function WebsiteBuildsPage() {
  return (
    <>
      <Hero />
      <ProblemsSolved />
      <PackageSection />
      <InclusionsSection />
      <SuitableClients />
      <AdditionsAndExclusions />
      <ProcessSection tone="paper" />
      <TimelineSection />
      <PricingSection />
      <FaqSection />
      <EnquirySection />
      <FreelanceTeaser />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema(),
            faqSchema(buildFaqs, '/website-builds/'),
            breadcrumbSchema([
              { name: 'Home', href: '/' },
              { name: 'Website builds', href: '/website-builds/' },
            ]),
          ]),
        }}
      />
    </>
  )
}

/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <PageHero
      breadcrumb="Website builds"
      eyebrow={launchPackage.name}
      title="A professional website that makes your business easier to understand and contact."
      titleClassName="max-w-[19ch]"
      lead="I plan, design and build clear service-business websites without the drawn-out process, unnecessary complexity or confusing technical language."
      showElevationLine
    >
      <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
        <Button href="#enquiry" size="lg">
          Discuss your website
          <ArrowRight />
        </Button>
        <Link
          href="#included"
          className="text-sm text-linen underline decoration-linen/35 underline-offset-4 transition-colors duration-200 hover:decoration-dawn"
        >
          See what is included
        </Link>
      </div>
    </PageHero>
  )
}

/* -------------------------------------------------------------------------- */
function ProblemsSolved() {
  return (
    <Section size="lg" aria-labelledby="problems-title">
      <SectionHeading
        id="problems-title"
        eyebrow="What this solves"
        title="The problems that bring most people here."
        lead="You do not need every one of these to be true. One is usually enough to make a website worth replacing."
      />

      <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => (
          <div key={problem.title}>
            <span aria-hidden="true" className="block h-px w-8 bg-ember" />
            <h3 className="mt-4 text-lg">{problem.title}</h3>
            <p className="mt-2 text-ink-muted">{problem.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function PackageSection() {
  return (
    <Section tone="sunk" size="lg" aria-labelledby="package-title">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <SectionHeading
          id="package-title"
          eyebrow={launchPackage.name}
          title="One package, one price, a clear finish line."
          lead="Rather than an open-ended hourly arrangement, this is a defined piece of work with a written scope. You know what you are getting, what it costs and when it ends before anything starts."
        />

        <div className="flex flex-col justify-center rounded-sm bg-midnight p-7 text-linen sm:p-9">
          {site.pricing.foundingClientPricing ? (
            <Pill className="self-start">Founding client pricing</Pill>
          ) : null}
          <p className="mt-6 font-display text-4xl leading-none">
            From {formatPrice(site.pricing.launchPackageFrom)}
          </p>
          <p className="mt-4 text-sm text-mist">
            Fixed price agreed in writing before work begins. Third-party costs
            such as hosting and domain registration are separate.
          </p>
          <Button
            href="#enquiry"
            variant="onDark"
            size="lg"
            className="mt-7 w-full"
          >
            Discuss your website
          </Button>
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function InclusionsSection() {
  return (
    <Section size="lg" id="included" aria-labelledby="included-title">
      <SectionHeading
        id="included-title"
        eyebrow="Detailed inclusions"
        title="Everything that is in the package."
        lead="Set out in full so there is nothing to discover later."
      />

      <div className="mt-14 space-y-12">
        {launchPackage.inclusions.map((group, index) => (
          <div key={group.title}>
            {index > 0 ? <DashedDivider className="mb-12" /> : null}
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
              <h3 className="text-xl">{group.title}</h3>
              <CheckList items={group.items} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-sm border border-hairline bg-paper-sunk/50 p-7 sm:p-10">
        <h3 className="eyebrow text-ember-deep">What I need from you</h3>
        <p className="mt-3 measure text-ink-muted">
          A website is a shared piece of work. This is the part that has to
          come from your side, and it is less than most people expect.
        </p>
        <RuleList items={launchPackage.whatINeedFromYou} className="mt-6" />
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function SuitableClients() {
  return (
    <Section tone="sunk" size="lg" aria-labelledby="suitable-title">
      <SectionHeading
        id="suitable-title"
        eyebrow="Who this is for"
        title="Built for small service businesses, not for everyone."
        lead="A narrow focus means I have thought about your situation before you describe it."
      />

      <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {clientTypes.map((type) => (
          <div key={type.label}>
            <h3 className="text-lg">{type.label}</h3>
            <p className="mt-2 text-ink-muted">{type.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="rounded-sm border border-hairline bg-paper p-7 sm:p-9">
          <h3 className="eyebrow text-ember-deep">This is a good fit when…</h3>
          <CheckList items={goodFitWhen} className="mt-6" />
        </div>
        <div className="rounded-sm border border-hairline bg-paper p-7 sm:p-9">
          <h3 className="eyebrow text-ink-muted">
            This is not the right service when…
          </h3>
          <ExclusionList items={notAGoodFitWhen} className="mt-6" />
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function AdditionsAndExclusions() {
  return (
    <Section size="lg" aria-labelledby="scope-title">
      <SectionHeading
        id="scope-title"
        eyebrow="Scope"
        title="What sits outside the package."
        lead="Some things are available as additions, others I do not take on at all. Both lists are here so you can rule the project in or out without a phone call."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="text-xl">Optional additions</h3>
          <p className="mt-2 measure text-ink-muted">
            Quoted individually and agreed up front, so the project price stays
            fixed.
          </p>
          <CheckList items={launchPackage.optionalAdditions} className="mt-6" />
        </div>

        <div>
          <h3 className="text-xl">Not included</h3>
          <p className="mt-2 measure text-ink-muted">
            Stated plainly rather than buried in a proposal footnote.
          </p>
          <ExclusionList items={launchPackage.exclusions} className="mt-6" />
        </div>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function TimelineSection() {
  return (
    <Section tone="dusk" size="lg" aria-labelledby="timeline-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeading
          id="timeline-title"
          eyebrow="Timeline"
          title={timeline.headline}
          lead={timeline.body}
          tone="dark"
        />

        <ol className="self-center">
          {timeline.phases.map((phase, index) => (
            <li
              key={phase.label}
              className="flex items-baseline justify-between gap-6 border-b border-hairline-dark py-5 first:border-t"
            >
              <span className="flex items-baseline gap-4">
                <span className="eyebrow text-dawn-bright">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-linen">{phase.label}</span>
              </span>
              <span className="eyebrow shrink-0 text-dawn-bright">
                {phase.duration}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function PricingSection() {
  return (
    <Section size="lg" id="pricing" aria-labelledby="pricing-title">
      <SectionHeading
        id="pricing-title"
        eyebrow="Pricing"
        title={
          site.pricing.foundingClientPricing
            ? 'Founding client pricing, while the first projects are being built.'
            : 'Clear pricing, agreed before the work starts.'
        }
        lead={
          site.pricing.foundingClientPricing
            ? `Founding client projects currently start from ${formatPrice(
                site.pricing.launchPackageFrom,
              )}. This rate is available for a limited number of early projects while I develop the portfolio and refine the delivery process.`
            : `Complete website projects start from ${formatPrice(
                site.pricing.launchPackageFrom,
              )}.`
        }
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <PriceNote title="What the price covers">
          The full package as listed above: planning, design, build, content
          organisation, launch and handover, with two rounds of revisions.
        </PriceNote>
        <PriceNote title="What moves the price">
          Mainly the number of pages, how much content already exists, and
          whether anything needs to connect to another system. Additions are
          quoted before they are started.
        </PriceNote>
        <PriceNote title="What is billed separately">
          Hosting, domain registration, premium software or plugin licences,
          paid stock photography and any paid integrations. These are paid by
          you directly to the provider, in your own name.
        </PriceNote>
      </div>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
        <Button href="#enquiry" size="lg">
          Discuss your website
          <ArrowRight />
        </Button>
        <p className="text-sm text-ink-muted">
          A fixed price in writing before any work begins.
        </p>
      </div>
    </Section>
  )
}

function PriceNote({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-sm border border-hairline bg-paper-sunk/50 p-7">
      <span aria-hidden="true" className="block h-px w-8 bg-ember" />
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-ink-muted">{children}</p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
function FaqSection() {
  return (
    <Section tone="sunk" size="lg" id="faq" aria-labelledby="build-faq-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="build-faq-title"
            eyebrow="Questions"
            title="Everything people ask before starting."
          />
        </div>
        <Faq items={buildFaqs} />
      </div>
    </Section>
  )
}

/* -------------------------------------------------------------------------- */
function EnquirySection() {
  return (
    <Section size="lg" id="enquiry" aria-labelledby="enquiry-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="enquiry-title"
            eyebrow="Start a project"
            title="Tell me about your website project."
            lead="The more you can tell me here, the more useful my first reply will be. If you are not sure about something, leave it blank and say so."
          />
          <DashedDivider className="my-8" />
          <p className="text-sm text-ink-muted">
            I read every enquiry myself and reply within two working days,
            including when the answer is that I am not the right fit.
          </p>
        </div>

        <div>
          <ProjectEnquiryForm defaultProjectType="A new complete website" />
        </div>
      </div>
    </Section>
  )
}
