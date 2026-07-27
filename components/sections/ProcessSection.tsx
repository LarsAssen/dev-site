import { Section } from '@/components/ui/Section'
import { NumberedBadge, SectionHeading } from '@/components/ui/brand'
import { process } from '@/content/offer'

/**
 * The five-step process. Shown on the homepage and the Website Builds page so
 * the shape of the engagement is visible before anyone has to ask.
 */
export function ProcessSection({
  tone = 'midnight',
}: {
  tone?: 'midnight' | 'paper'
}) {
  const isDark = tone === 'midnight'

  return (
    <Section tone={tone} size="lg" id="process" aria-labelledby="process-title">
      <SectionHeading
        id="process-title"
        eyebrow="How it works"
        title="Five steps, and you always know which one you are on."
        lead="No long silences, no vague middle stage. Each step has a clear purpose and a clear end."
        tone={isDark ? 'dark' : 'light'}
      />

      <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {process.map((step, index) => (
          <li key={step.title} className="flex gap-5">
            <NumberedBadge n={index + 1} tone={isDark ? 'dark' : 'light'} />
            <div>
              <h3
                className={`text-xl ${isDark ? 'text-linen' : 'text-ink'}`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-2.5 ${isDark ? 'text-mist' : 'text-ink-muted'}`}
              >
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
