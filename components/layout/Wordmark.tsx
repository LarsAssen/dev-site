import Link from 'next/link'

import { site } from '@/content/site'

/**
 * The wordmark follows the brand system's construction — Playfair Display 500,
 * all lowercase, tightened letter spacing, elevation mark to the left of the
 * word — applied to the personal name rather than the coaching wordmark.
 */
export function Wordmark({
  tone = 'light',
  className = '',
}: {
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 rounded-sm ${className}`}
      aria-label={`${site.name} — home`}
    >
      <ElevationMark
        className={tone === 'dark' ? 'text-ember' : 'text-ember'}
      />
      <span
        className={`font-display text-[1.375rem] leading-none tracking-[-0.012em] transition-colors duration-200 ${
          tone === 'dark'
            ? 'text-linen group-hover:text-dawn'
            : 'text-ink group-hover:text-ember-deep'
        }`}
      >
        lars assen
      </span>
    </Link>
  )
}

/** The elevation-line mark, reduced to a compact glyph for the wordmark. */
function ElevationMark({ className = '' }: { className?: string }) {
  return (
    <svg
      width="26"
      height="18"
      viewBox="0 0 26 18"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 14.5 6 9l4 3 5-8 4 6 5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
