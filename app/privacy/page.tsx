import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHero } from '@/components/layout/PageHero'
import { Section } from '@/components/ui/Section'
import { DashedDivider } from '@/components/ui/brand'
import { isPlaceholder, site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What information this website collects, why, and what happens to it. No trackers, no cookies, no mailing list.',
  alternates: { canonical: '/privacy/' },
  robots: { index: false, follow: true },
}

/* ==========================================================================
   PRIVACY
   ---------------------------------------------------------------------------
   This page describes what the site actually does, so it has to be kept in
   step with the build. As it stands that is:

     · two enquiry forms, posting to netlify/functions/enquiry.ts
     · which sends through Resend, to a Google Workspace mailbox
     · static hosting on Netlify (see netlify.toml)
     · fonts downloaded at build time and self-served (app/layout.tsx)
     · no analytics until a provider is set in content/site.ts

   Revisit it whenever any of that changes, or when anything new that touches
   visitor information is added — a booking tool, a chat widget, an embedded
   map or video, a different host or mail provider. Update LAST_REVIEWED when
   you do. Written against the Privacy Act 2020; it is a plain-language policy,
   not legal advice.
   ========================================================================== */

/** Shown under the page title. Change it whenever the wording below changes. */
const LAST_REVIEWED = '12 August 2026'

/** Named here so the page can point at the tool it actually loads rather than
 *  describing analytics in the abstract. Add an entry if site.analytics gains
 *  another provider. */
const analyticsProviders = {
  plausible: { name: 'Plausible', policy: 'https://plausible.io/privacy' },
  fathom: {
    name: 'Fathom Analytics',
    policy: 'https://usefathom.com/legal/privacy',
  },
} as const

export default function PrivacyPage() {
  const analytics =
    site.analytics.provider === ''
      ? null
      : analyticsProviders[site.analytics.provider]

  return (
    <>
      <PageHero
        breadcrumb="Privacy"
        eyebrow="Privacy"
        title="What this website collects, and why."
        lead="No trackers, no cookies and no mailing list. The only information this site collects is what you choose to type into an enquiry form — below is exactly what happens to it."
      >
        <p className="eyebrow mt-8 block text-mist">
          Last reviewed &middot; {LAST_REVIEWED}
        </p>
      </PageHero>

      <Section size="lg">
        <div className="max-w-2xl">
          <Clause title="The short version">
            <p>
              There is no advertising, no tracking, no newsletter, no chat
              widget and no pop-up. If you send me an enquiry, I use it to
              reply to you and to run the project if we go ahead. Nothing else
              happens to it. The rest of this page is the detail behind that.
            </p>
          </Clause>

          <Clause title="Who you are dealing with">
            <p>
              This website belongs to {site.name}, a one-person web design and
              development business based in the {site.location.region},{' '}
              {site.location.country}. There is no team and no agency behind
              it, so anything you send comes to me and is handled by me.
            </p>
            <p>
              If you have a question about any of this, or you want something
              done about information I hold, the address is{' '}
              <EmailAddress />.
            </p>
          </Clause>

          <Clause title="What the enquiry forms collect">
            <p>
              Two forms on this site send me a message: the project enquiry
              form on the contact page, and the separate one on the freelance
              support page. Between them they ask for your name, your business
              or company name, your email address, and a description of the
              work. The rest — a link to your current website, timing, budget,
              anything else you want to add — is optional, and a form works
              perfectly well with those left blank.
            </p>
            <p>
              I ask for those things so I can give you a straight answer rather
              than a vague one. What you send is used to reply to you and, if
              we work together, to run the project. It is not sold, not shared
              for marketing, and not added to any mailing list — there is no
              mailing list to be added to.
            </p>
            <p>
              If you would rather not use a form at all, emailing me directly
              works just as well.
            </p>
          </Clause>

          <Clause title="Where a submission goes">
            <p>
              When you press send, the form posts to a small function on this
              site, which formats your answers into an email and hands it to{' '}
              <TextLink href="https://resend.com/legal/privacy-policy">
                Resend
              </TextLink>{' '}
              to deliver. Resend passes the message to my inbox and keeps a
              delivery record; it does not use the contents for anything else.
              The mailbox it lands in is{' '}
              <TextLink href="https://policies.google.com/privacy">
                Google Workspace
              </TextLink>
              .
            </p>
            <p>
              If delivery fails, the submission is written to the site&rsquo;s
              server log instead of vanishing, so that your enquiry is not lost
              and I can still answer it. Those logs are held by the host for a
              short period and then discarded.
            </p>
            <p>
              Resend, Google and the site&rsquo;s host all operate from the
              United States, so an enquiry leaves New Zealand the moment it is
              sent. Each is bound by its own published privacy terms, linked
              above and below.
            </p>
          </Clause>

          <Clause title="Hosting and server logs">
            <p>
              The site is served as static files by{' '}
              <TextLink href="https://www.netlify.com/privacy/">
                Netlify
              </TextLink>
              . Like any web server, it records standard request information —
              IP address, the page requested, the time, and which browser asked
              for it — for security, abuse prevention and keeping the site up.
            </p>
            <p>
              I do not use those logs to build a picture of individual
              visitors, and nothing in them is connected to anything else I
              hold.
            </p>
          </Clause>

          <Clause title="Analytics">
            {analytics ? (
              <>
                <p>
                  This site uses {analytics.name} to count page views and see
                  which pages are actually useful. It does not set cookies,
                  does not follow you from one website to another, and does not
                  collect anything that identifies you personally. What it
                  records is aggregate: how many people reached a page, and
                  roughly where in the world they came from.
                </p>
                <p>
                  Its privacy policy is at{' '}
                  <TextLink href={analytics.policy}>
                    {analytics.policy.replace('https://', '')}
                  </TextLink>
                  .
                </p>
              </>
            ) : (
              <p>
                No analytics or tracking script runs on this website at all —
                not Google Analytics, not a privacy-friendly alternative,
                nothing. I have no idea who visits or how many. If that
                changes, this section will name the tool and say what it
                records, and the date at the top of the page will change with
                it.
              </p>
            )}
          </Clause>

          <Clause title="Cookies, and what the pages load">
            <p>
              This site sets no cookies of its own, which is why there is no
              cookie banner. Nothing is written to your browser to recognise
              you, and there is nothing to log in to.
            </p>
            <p>
              The pages also do not pull anything in from elsewhere. The fonts
              are downloaded when the site is built and served from this
              domain, the images come from the same place, and there are no
              embedded maps, videos or social widgets. Opening a page here does
              not quietly tell a third party that you visited.
            </p>
          </Clause>

          <Clause title="How long any of it is kept">
            <p>
              Enquiries that do not turn into projects are deleted once it is
              clear nothing is going ahead. Correspondence and records tied to
              paid work are kept for seven years, which is how long Inland
              Revenue requires business records to be held. After that they go
              too.
            </p>
          </Clause>

          <Clause title="Keeping it secure">
            <p>
              The site is served over HTTPS. There is no database, no accounts
              and nothing stored on the website itself — once an enquiry has
              been emailed on, the copies that exist are the one in my mailbox
              and the sending service&rsquo;s delivery record. I am the only
              person with access to that mailbox.
            </p>
          </Clause>

          <Clause title="Your information, your call">
            <p>
              You can ask me what information I hold about you, ask for a copy
              of it, or ask me to correct or delete it. Email me and I will
              deal with it — there is no form to fill in and no process to go
              through.
            </p>
            <p>
              The Privacy Act 2020 gives me twenty working days to respond to a
              request like that. In practice it will be the same week.
            </p>
            <p>
              <EmailAddress />
            </p>
          </Clause>

          <Clause title="If you are not happy with how I have handled it">
            <p>
              Tell me first — most things are a misunderstanding and I would
              rather fix it directly. If that does not resolve it, you can
              complain to the Office of the Privacy Commissioner, which can
              look into it independently. Their site is{' '}
              <TextLink href="https://www.privacy.org.nz">
                privacy.org.nz
              </TextLink>
              .
            </p>
          </Clause>

          <Clause title="Changes to this page">
            <p>
              If anything about the site changes in a way that affects what is
              written here — an analytics tool, a booking widget, a different
              host or mail provider — I will update this page and change the
              review date at the top. There is no archive of previous versions;
              what is on this page is what applies.
            </p>
          </Clause>

          <DashedDivider className="my-10" />

          <p className="text-sm text-ink-muted">
            Any question about this page is a fair question. Please{' '}
            <TextLink href="/contact/">get in touch</TextLink> and I will answer
            it.
          </p>
        </div>
      </Section>
    </>
  )
}

function Clause({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-ink-muted">{children}</div>
    </section>
  )
}

/** One underline treatment for every link in the body copy. Internal paths go
 *  through next/link; anything else is a plain anchor. */
function TextLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const className =
    'text-ink underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep'

  return href.startsWith('/') ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} rel="noopener" className={className}>
      {children}
    </a>
  )
}

/** Falls back to plain text while the address in content/site.ts is still a
 *  placeholder, so the page never renders a broken mailto. */
function EmailAddress() {
  if (isPlaceholder(site.email)) {
    return <span className="text-ember-deep">{site.email}</span>
  }
  return <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
}
