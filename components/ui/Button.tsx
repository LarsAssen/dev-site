import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark' | 'onDarkGhost'
type Size = 'md' | 'lg'

/* Visual hierarchy is enforced here rather than at each call site.
   `primary` is the Ember-filled button reserved for the main website enquiry.
   Nothing else on the site should use it. */
const variants: Record<Variant, string> = {
  // Uses the darkened Ember so that Linen label text clears 4.5:1. Full-
  // strength Ember on this button would sit at 3.4:1.
  primary:
    'bg-ember-deep text-linen border border-ember-deep hover:bg-ember-deeper hover:border-ember-deeper',
  secondary:
    'bg-transparent text-ink border border-ink/25 hover:border-ink/60 hover:bg-ink/[0.04]',
  ghost:
    'bg-transparent text-ink-muted border border-transparent px-0 hover:text-ember-deep underline underline-offset-4 decoration-sand hover:decoration-ember-deep',
  onDark:
    'bg-linen text-midnight border border-linen hover:bg-dawn hover:border-dawn',
  onDarkGhost:
    'bg-transparent text-linen border border-linen/35 hover:border-linen/80 hover:bg-linen/10',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-sm transition-colors duration-200 ease-[var(--ease-out-soft)] disabled:opacity-55 disabled:cursor-not-allowed'

type ButtonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps & { href: string } & Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    'href' | 'className' | 'children'
  >) {
  const isGhost = variant === 'ghost'
  return (
    <Link
      href={href}
      className={`${base} ${isGhost ? '' : sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  )
}

export function SubmitButton({
  variant = 'primary',
  size = 'lg',
  className = '',
  children,
  ...rest
}: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

/** An arrow used inside buttons and inline links. Decorative only. */
export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}
