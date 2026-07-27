'use client'

import { useId } from 'react'

/* ==========================================================================
   FORM FIELDS
   ---------------------------------------------------------------------------
   Every field has a real <label> tied to its control, an optional hint that is
   announced via aria-describedby, and an error state that is announced the
   same way. Required fields are marked in text, not by colour alone.
   ========================================================================== */

const controlBase =
  'w-full rounded-sm border bg-paper px-4 py-3 text-ink transition-colors duration-200 placeholder:text-ink-muted/60 hover:border-ink/40'
const controlIdle = 'border-hairline'
const controlInvalid = 'border-ember-deep bg-ember/[0.04]'

type FieldShellProps = {
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: (props: {
    id: string
    describedBy: string | undefined
    invalid: boolean
    className: string
  }) => React.ReactNode
}

function FieldShell({
  label,
  hint,
  error,
  required,
  children,
}: FieldShellProps) {
  const id = useId()
  const hintId = `${id}-hint`
  const errorId = `${id}-error`
  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(' ') ||
    undefined

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-ink"
      >
        {label}
        {required ? (
          <span className="ml-1.5 font-normal text-ink-muted">(required)</span>
        ) : (
          <span className="ml-1.5 font-normal text-ink-muted">(optional)</span>
        )}
      </label>

      {hint ? (
        <p id={hintId} className="mt-1 text-sm text-ink-muted">
          {hint}
        </p>
      ) : null}

      <div className="mt-2">
        {children({
          id,
          describedBy,
          invalid: Boolean(error),
          className: `${controlBase} ${error ? controlInvalid : controlIdle}`,
        })}
      </div>

      {error ? (
        <p
          id={errorId}
          className="mt-2 flex items-start gap-2 text-sm text-ember-deep"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
            className="mt-0.5 shrink-0"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5v5M12 16.2v.1" />
          </svg>
          {error}
        </p>
      ) : null}
    </div>
  )
}

type BaseProps = {
  name: string
  label: string
  hint?: string
  error?: string
  required?: boolean
}

export function TextField({
  name,
  label,
  hint,
  error,
  required,
  type = 'text',
  autoComplete,
  placeholder,
}: BaseProps & {
  type?: 'text' | 'email' | 'url' | 'tel'
  autoComplete?: string
  placeholder?: string
}) {
  return (
    <FieldShell label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid, className }) => (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          className={className}
        />
      )}
    </FieldShell>
  )
}

export function TextAreaField({
  name,
  label,
  hint,
  error,
  required,
  rows = 5,
  placeholder,
}: BaseProps & { rows?: number; placeholder?: string }) {
  return (
    <FieldShell label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid, className }) => (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          className={`${className} resize-y`}
        />
      )}
    </FieldShell>
  )
}

export function SelectField({
  name,
  label,
  hint,
  error,
  required,
  options,
  defaultValue = '',
}: BaseProps & {
  options: readonly string[]
  defaultValue?: string
}) {
  return (
    <FieldShell label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid, className }) => (
        <select
          id={id}
          name={name}
          required={required}
          defaultValue={defaultValue}
          aria-describedby={describedBy}
          aria-invalid={invalid || undefined}
          className={`${className} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 fill=%22none%22 stroke=%22%234e5a69%22 stroke-width=%221.5%22 stroke-linecap=%22round%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_0.9rem_center] bg-no-repeat pr-12`}
        >
          <option value="" disabled>
            Choose one
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </FieldShell>
  )
}

/**
 * A honeypot field. Real people never see or fill it; simple bots usually do.
 * Cheaper and less hostile than a CAPTCHA.
 */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
      <label htmlFor="company-website-hp">
        Leave this field empty
        <input
          id="company-website-hp"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </div>
  )
}

/** Groups related fields with a visible legend. */
export function FieldSet({
  legend,
  description,
  children,
}: {
  legend: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="eyebrow text-ember-deep">{legend}</legend>
      {description ? (
        <p className="mt-2 measure text-sm text-ink-muted">{description}</p>
      ) : null}
      <div className="mt-6 space-y-6">{children}</div>
    </fieldset>
  )
}
