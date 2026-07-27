import Link from 'next/link'

import { ArrowRight } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/brand'

/**
 * The secondary offer.
 *
 * Deliberately built as a single narrow bordered panel rather than a section
 * with a full heading treatment, so it reads as an aside for a different
 * audience and never competes with the website-build offer above it. It uses
 * a text link with an arrow, not a button.
 */
export function FreelanceTeaser() {
  return (
    <Section tone="paper" size="sm" as="aside">
      <div className="mx-auto max-w-3xl rounded-sm border border-hairline bg-paper-sunk/60 p-7 sm:p-9">
        <Eyebrow>For agencies &amp; teams</Eyebrow>
        <h2 className="mt-3 font-sans text-xl font-medium leading-snug text-ink">
          Need support with an existing website project?
        </h2>
        <p className="mt-3 measure text-ink-muted">
          I am also available for selected freelance and subcontract website
          work with agencies, designers and small teams. This can include
          landing pages, responsive implementation, defined website
          improvements, quality assurance and launch support.
        </p>
        <Link
          href="/freelance-support/"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ember-deep underline decoration-sand underline-offset-4 transition-colors duration-200 hover:decoration-ember-deep"
        >
          View freelance support
          <ArrowRight />
        </Link>
      </div>
    </Section>
  )
}
