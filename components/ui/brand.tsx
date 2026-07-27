/* ==========================================================================
   TERRAIN GRAPHIC ELEMENTS
   ---------------------------------------------------------------------------
   The small, repeating visual devices from section 04 of the brand system.
   They carry the identity so the pages themselves can stay plain and readable.
   ========================================================================== */

/** 80 x 4px Ember bar. Precedes section headings. The brand's key element. */
export function AccentLine({ className = '' }: { className?: string }) {
  return <span className={`accent-line ${className}`} aria-hidden="true" />
}

/** Tracked-out mono label. Always uppercase — caps are for DM Mono only. */
export function Eyebrow({
  children,
  tone = 'light',
  className = '',
  id,
}: {
  children: React.ReactNode
  tone?: 'light' | 'dark'
  className?: string
  id?: string
}) {
  // Eyebrows are 12px, so the dark variant uses the lightened Dawn to stay
  // above 4.5:1 on Dusk as well as Midnight.
  const colour = tone === 'dark' ? 'text-dawn-bright' : 'text-ember-deep'
  return (
    <span id={id} className={`eyebrow ${colour} ${className}`}>
      {children}
    </span>
  )
}

/**
 * The standard section opener: accent line, mono eyebrow, one Playfair line,
 * then supporting copy in DM Sans. The brand system allows only one display
 * line per view, so `title` should stay to a single sentence.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'light',
  align = 'left',
  id,
  as: Tag = 'h2',
  className = '',
}: {
  eyebrow?: string
  title: React.ReactNode
  lead?: React.ReactNode
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  id?: string
  as?: 'h2' | 'h3'
  className?: string
}) {
  const isCentred = align === 'center'
  return (
    <div
      className={`${isCentred ? 'flex flex-col items-center text-center' : ''} ${className}`}
    >
      <AccentLine />
      {eyebrow ? (
        <Eyebrow tone={tone} className="mt-5 block">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Tag
        id={id}
        className={`${eyebrow ? 'mt-3' : 'mt-6'} text-3xl sm:text-4xl lg:text-[2.75rem] ${
          tone === 'dark' ? 'text-linen' : 'text-ink'
        }`}
      >
        {title}
      </Tag>
      {lead ? (
        <p
          className={`mt-5 text-lg measure ${isCentred ? 'mx-auto' : ''} ${
            tone === 'dark' ? 'text-mist' : 'text-ink-muted'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}

/** Mono numeral in a circle. Always uses a leading zero (01, not 1). */
export function NumberedBadge({
  n,
  tone = 'light',
  active = false,
}: {
  n: number
  tone?: 'light' | 'dark'
  active?: boolean
}) {
  const ring =
    tone === 'dark'
      ? active
        ? 'border-ember text-dawn-bright'
        : 'border-linen/30 text-dawn-bright'
      : active
        ? 'border-ember text-ember-deep'
        : 'border-hairline text-ink-muted'

  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${ring} font-mono text-sm font-medium tracking-[0.08em]`}
    >
      {String(n).padStart(2, '0')}
    </span>
  )
}

/** 1px rule with a 6px dash pattern. Separates blocks inside a section. */
export function DashedDivider({
  tone = 'light',
  className = '',
}: {
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div
      role="presentation"
      className={`dashed-rule ${tone === 'dark' ? 'dashed-rule-dark' : ''} ${className}`}
    />
  )
}

/** Content-type label. Semi-transparent fill, Dawn text, Dawn border at 40%. */
export function Pill({
  children,
  tone = 'dark',
  className = '',
}: {
  children: React.ReactNode
  tone?: 'light' | 'dark' | 'ember'
  className?: string
}) {
  const tones = {
    dark: 'bg-midnight/40 text-dawn-bright border-dawn/40',
    light: 'bg-ink/[0.04] text-ink-muted border-hairline',
    ember: 'bg-ember/10 text-ember-deep border-ember/40',
  }
  return (
    <span
      className={`eyebrow inline-flex items-center rounded-full border px-3 py-1 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

/**
 * Stylised topographic profile. Used once per page at most, as a quiet
 * horizontal band. Purely decorative and hidden from assistive technology.
 */
export function ElevationLine({
  className = '',
  strokeClassName = 'text-ember',
}: {
  className?: string
  strokeClassName?: string
}) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`${className} ${strokeClassName}`}
    >
      {/* Two offset contour lines, the lower one faded, reading as a ridge. */}
      <path
        d="M0 96 L118 84 L196 62 L268 74 L352 40 L426 58 L512 26 L588 46 L664 18 L742 44 L826 30 L908 60 L986 48 L1068 72 L1140 58 L1200 68"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M0 112 L118 104 L196 90 L268 98 L352 74 L426 86 L512 64 L588 78 L664 58 L742 76 L826 66 L908 88 L986 80 L1068 96 L1140 86 L1200 92"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.35"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/** Three coloured dots. A small brand signature in the footer. */
export function ThreeDotSignature({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-hidden="true"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      <span className="h-1.5 w-1.5 rounded-full bg-dawn" />
      <span className="h-1.5 w-1.5 rounded-full bg-canopy" />
    </span>
  )
}

/** Tick used in inclusion lists. Decorative — the list text carries meaning. */
export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  )
}

/** Cross used in "not included" lists. */
export function CrossIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
