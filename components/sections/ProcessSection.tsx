import Link from 'next/link'

import { ArrowRight } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { NumberedBadge, SectionHeading } from '@/components/ui/brand'
import { process } from '@/content/offer'

/**
 * The five-step process.
 *
 * `full` prints each step with its explanation and is used on the Website
 * Builds page. `compact` prints the five names only and links through — the
 * homepage uses that, so the shape of the engagement is visible without
 * repeating the sales page word for word.
 */
export function ProcessSection({
  tone = 'midnight',
  variant = 'full',
}: {
  tone?: 'midnight' | 'paper'
  variant?: 'full' | 'compact'
}) {
  const isDark = tone === 'midnight'

  return (
    <Section tone={tone} size="lg" id="process" aria-labelledby="process-title">
      <SectionHeading
        id="process-title"
        eyebrow="How it works"
        title="Five steps, and you always know which one you are on."
        lead={
          variant === 'compact'
            ? 'No long silences and no vague middle stage.'
            : 'No long silences, no vague middle stage. Each step has a clear purpose and a clear end.'
        }
        tone={isDark ? 'dark' : 'light'}
      />

      {variant === 'compact' ? (
        <>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <li key={step.title} className="flex items-center gap-3">
                <NumberedBadge n={index + 1} tone={isDark ? 'dark' : 'light'} />
                <span
                  className={`text-lg ${isDark ? 'text-linen' : 'text-ink'}`}
                >
                  {step.title}
                </span>
              </li>
            ))}
          </ol>
          <Link
            href="/website-builds/#process"
            className={`mt-10 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition-colors duration-200 ${
              isDark
                ? 'text-dawn-bright decoration-dawn-bright/40 hover:text-linen'
                : 'text-ember-deep decoration-sand hover:decoration-ember-deep'
            }`}
          >
            See what happens at each step
            <ArrowRight />
          </Link>
        </>
      ) : (
        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <li key={step.title} className="flex gap-5">
              <NumberedBadge n={index + 1} tone={isDark ? 'dark' : 'light'} />
              <div>
                <h3 className={`text-xl ${isDark ? 'text-linen' : 'text-ink'}`}>
                  {step.title}
                </h3>
                <p className={`mt-2.5 ${isDark ? 'text-mist' : 'text-ink-muted'}`}>
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Section>
  )
}
