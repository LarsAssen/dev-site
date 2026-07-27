import type { FaqEntry } from '@/lib/schema'

/**
 * Built on native <details>/<summary>, so it is keyboard operable, announced
 * correctly by screen readers and works with JavaScript disabled. No library
 * and no state management needed.
 */
export function Faq({
  items,
  tone = 'light',
}: {
  items: FaqEntry[]
  tone?: 'light' | 'dark'
}) {
  const isDark = tone === 'dark'
  const rule = isDark ? 'divide-hairline-dark' : 'divide-hairline'
  const edge = isDark ? 'border-hairline-dark' : 'border-hairline'

  return (
    <div className={`divide-y ${rule} border-y ${edge}`}>
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary
            className={`flex w-full items-start justify-between gap-6 py-5 text-left text-lg font-medium transition-colors duration-200 ${
              isDark
                ? 'text-linen hover:text-dawn'
                : 'text-ink hover:text-ember-deep'
            }`}
          >
            <span className="measure-tight">{item.question}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
              className="mt-1.5 shrink-0 text-ember transition-transform duration-200 ease-[var(--ease-out-soft)] group-open:rotate-45"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p
            className={`measure pb-6 ${isDark ? 'text-mist' : 'text-ink-muted'}`}
          >
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  )
}
