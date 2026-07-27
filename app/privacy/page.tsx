import type { Metadata } from 'next'
import Link from 'next/link'

import { Section } from '@/components/ui/Section'
import { AccentLine, DashedDivider, Eyebrow } from '@/components/ui/brand'
import { isPlaceholder, site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What information this website collects, why, and what happens to it.',
  alternates: { canonical: '/privacy/' },
  robots: { index: false, follow: true },
}

/* --------------------------------------------------------------------------
   PLACEHOLDER NOTICE
   This is a plain-language starting point covering what the site actually
   does today: an enquiry form and, if you enable it, privacy-friendly
   analytics. It is not legal advice. Before launch, check it against the New
   Zealand Privacy Act 2020 and update it if you add anything that collects
   data — a booking tool, a chat widget, embedded video or ad tracking.
   -------------------------------------------------------------------------- */

export default function PrivacyPage() {
  const analyticsEnabled = site.analytics.provider !== ''

  return (
    <>
      <section className="bg-midnight text-linen">
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <AccentLine />
          <Eyebrow tone="dark" className="mt-5 block">
            Privacy
          </Eyebrow>
          <h1 className="mt-6 max-w-[20ch] text-[2.25rem] leading-[1.1] sm:text-5xl">
            What this website collects, and why.
          </h1>
        </div>
      </section>

      <Section size="lg">
        <div className="max-w-2xl">
          <p className="rounded-sm border border-ember/40 bg-ember/[0.06] p-5 text-sm text-ink-muted">
            <strong className="font-medium text-ember-deep">
              Placeholder —
            </strong>{' '}
            this page describes what the site does today and needs a review
            against the Privacy Act 2020 before launch, particularly if
            anything that collects data is added later.
          </p>

          <Clause title="The short version">
            <p>
              This website does not use advertising trackers, and there is no
              newsletter, no chat widget and no pop-up. The only information I
              receive is what you choose to type into an enquiry form.
            </p>
          </Clause>

          <Clause title="Enquiry forms">
            <p>
              When you submit the enquiry form on the contact page or the
              freelance form, the details you enter are sent to me by email so I
              can reply. That includes your name, your email address and
              whatever you write about your project.
            </p>
            <p>
              I use that information to respond to your enquiry and, if we work
              together, to run the project. I do not sell it, share it for
              marketing, or add you to any mailing list. Enquiries that do not
              turn into projects are deleted periodically.
            </p>
            <p>
              The form is delivered through a third-party form service, which
              processes the submission on my behalf.{' '}
              <span className="text-ember-deep">
                [Form service name and privacy policy URL]
              </span>
            </p>
          </Clause>

          <Clause title="Analytics">
            {analyticsEnabled ? (
              <p>
                This site uses a privacy-friendly analytics tool to count page
                views and see which pages are useful. It does not use cookies,
                does not follow you across other websites, and does not collect
                anything that identifies you personally.{' '}
                <span className="text-ember-deep">
                  [Analytics provider name and privacy policy URL]
                </span>
              </p>
            ) : (
              <p>
                No analytics or tracking scripts are currently running on this
                website. If that changes, this section will be updated to name
                the tool and explain what it records.
              </p>
            )}
          </Clause>

          <Clause title="Cookies">
            <p>
              This site does not set any cookies of its own, which is why there
              is no cookie banner. Your browser may store standard technical
              information, but nothing is written by this website to identify
              or track you.
            </p>
          </Clause>

          <Clause title="Hosting">
            <p>
              The site is served as static files by a hosting provider, which
              keeps standard server logs including IP addresses for security and
              operational purposes.{' '}
              <span className="text-ember-deep">
                [Hosting provider name and privacy policy URL]
              </span>
            </p>
          </Clause>

          <Clause title="Your information, your call">
            <p>
              You can ask me what information I hold about you, ask for a copy
              of it, or ask me to correct or delete it. Email me and I will deal
              with it — there is no process to go through.
            </p>
            <p>
              {isPlaceholder(site.email) ? (
                <span className="text-ember-deep">{site.email}</span>
              ) : (
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
                >
                  {site.email}
                </a>
              )}
            </p>
          </Clause>

          <DashedDivider className="my-10" />

          <p className="text-sm text-ink-muted">
            Last updated{' '}
            <span className="text-ember-deep">[Date last reviewed]</span>. If
            you have a question about any of this, please{' '}
            <Link
              href="/contact/"
              className="text-ink underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
            >
              get in touch
            </Link>
            .
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
    <section className="mt-12">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-ink-muted">{children}</div>
    </section>
  )
}
