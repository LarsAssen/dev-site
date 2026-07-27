/* ==========================================================================
   LAYOUT PRIMITIVES
   One container width and one vertical rhythm, used by every page section.
   ========================================================================== */

type Tone = 'paper' | 'sunk' | 'midnight' | 'dusk' | 'canopy'

const tones: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  sunk: 'bg-paper-sunk text-ink',
  midnight: 'bg-midnight text-linen',
  dusk: 'bg-dusk text-linen',
  canopy: 'bg-canopy text-linen',
}

const spacing = {
  sm: 'py-14 sm:py-16',
  md: 'py-16 sm:py-20 lg:py-24',
  lg: 'py-20 sm:py-28 lg:py-32',
}

export function Container({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}

export function Section({
  tone = 'paper',
  size = 'md',
  id,
  className = '',
  containerClassName = '',
  children,
  as: Tag = 'section',
  'aria-labelledby': ariaLabelledBy,
}: {
  tone?: Tone
  size?: keyof typeof spacing
  id?: string
  className?: string
  containerClassName?: string
  children: React.ReactNode
  as?: 'section' | 'div' | 'aside'
  'aria-labelledby'?: string
}) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${tones[tone]} ${spacing[size]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  )
}
