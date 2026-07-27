import { CheckIcon, CrossIcon } from './brand'

/** A list of things that are included. Ticks are decorative; text carries it. */
export function CheckList({
  items,
  tone = 'light',
  columns = 1,
  className = '',
}: {
  items: readonly string[]
  tone?: 'light' | 'dark'
  columns?: 1 | 2
  className?: string
}) {
  return (
    <ul
      className={`grid gap-x-10 gap-y-3.5 ${
        columns === 2 ? 'sm:grid-cols-2' : ''
      } ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon
            className={`mt-0.5 ${tone === 'dark' ? 'text-dawn' : 'text-canopy'}`}
          />
          <span className={tone === 'dark' ? 'text-linen' : 'text-ink'}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

/** A list of things that are deliberately out of scope. */
export function ExclusionList({
  items,
  tone = 'light',
  columns = 1,
  className = '',
}: {
  items: readonly string[]
  tone?: 'light' | 'dark'
  columns?: 1 | 2
  className?: string
}) {
  return (
    <ul
      className={`grid gap-x-10 gap-y-3.5 ${
        columns === 2 ? 'sm:grid-cols-2' : ''
      } ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CrossIcon
            className={`mt-0.5 ${tone === 'dark' ? 'text-mist' : 'text-ink-muted'}`}
          />
          <span className={tone === 'dark' ? 'text-mist' : 'text-ink-muted'}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

/** A plain bulleted list using the brand's small Ember rule as the marker. */
export function RuleList({
  items,
  tone = 'light',
  className = '',
}: {
  items: readonly string[]
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <ul className={`space-y-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="mt-3 h-px w-5 shrink-0 bg-ember"
          />
          <span className={tone === 'dark' ? 'text-mist' : 'text-ink-muted'}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
