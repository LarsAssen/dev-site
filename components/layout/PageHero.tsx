import Link from 'next/link'

import { AccentLine, ElevationLine, Eyebrow } from '@/components/ui/brand'

/**
 * The header for every page except the homepage.
 *
 * Deliberately shorter and quieter than the homepage hero, which is the only
 * one that gets full height, the largest headline and the facts row. That
 * difference is what tells someone at a glance whether they are at the front
 * door or in a room — without it, every page opens identically and navigating
 * feels like nothing happened.
 *
 * The breadcrumb does the same job in words, and mirrors the BreadcrumbList
 * structured data each page already emits.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
  tone = 'midnight',
  showElevationLine = false,
  titleClassName = 'max-w-[20ch]',
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
  /** The current page. "Home" is prepended automatically. */
  breadcrumb: string
  tone?: 'midnight' | 'dusk'
  showElevationLine?: boolean
  titleClassName?: string
  /** Buttons or supporting content placed under the lead. */
  children?: React.ReactNode
}) {
  const isDusk = tone === 'dusk'

  return (
    <section
      className={`relative overflow-hidden ${
        isDusk ? 'bg-dusk' : 'bg-midnight'
      } text-linen`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8">
        <Breadcrumb current={breadcrumb} />

        <AccentLine className="mt-8" />
        <Eyebrow tone="dark" className="mt-5 block">
          {eyebrow}
        </Eyebrow>

        <h1
          className={`mt-4 text-[2rem] leading-[1.12] sm:text-[2.75rem] lg:text-5xl ${titleClassName}`}
        >
          {title}
        </h1>

        {lead ? (
          <p className="mt-6 measure text-lg text-mist">{lead}</p>
        ) : null}

        {children}
      </div>

      {showElevationLine ? (
        <ElevationLine
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full opacity-[0.14]"
          strokeClassName="text-dawn"
        />
      ) : null}
    </section>
  )
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="eyebrow text-mist transition-colors duration-200 hover:text-dawn-bright"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-mist/50">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </li>
        <li>
          <span aria-current="page" className="eyebrow text-dawn-bright">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  )
}
