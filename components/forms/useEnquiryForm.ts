'use client'

import { useCallback, useRef, useState } from 'react'

import { isPlaceholder, site } from '@/content/site'

export type FieldErrors = Record<string, string>

type FieldRule = {
  name: string
  label: string
  required?: boolean
  type?: 'email' | 'text'
  /** Minimum characters, applied only when a value is present. */
  minLength?: number
}

export type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'error'; message: string }
  | { status: 'unconfigured' }

/** Deliberately permissive. Strict email regexes reject valid addresses. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validate(
  data: FormData,
  rules: FieldRule[],
): FieldErrors {
  const errors: FieldErrors = {}

  for (const rule of rules) {
    const raw = data.get(rule.name)
    const value = typeof raw === 'string' ? raw.trim() : ''

    if (rule.required && value === '') {
      errors[rule.name] = `${rule.label} is needed before this can be sent.`
      continue
    }

    if (value === '') continue

    if (rule.type === 'email' && !EMAIL_PATTERN.test(value)) {
      errors[rule.name] =
        'That does not look like a complete email address. Check it and try again.'
      continue
    }

    if (rule.minLength && value.length < rule.minLength) {
      errors[rule.name] = `Please add a little more detail — at least ${rule.minLength} characters.`
    }
  }

  return errors
}

export function useEnquiryForm({
  rules,
  subject,
}: {
  rules: FieldRule[]
  /** Included in the payload so you can tell the two forms apart in your inbox. */
  subject: string
}) {
  const [state, setState] = useState<FormState>({ status: 'idle' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const statusRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.currentTarget
      const data = new FormData(form)

      // Honeypot: if this is filled, a bot submitted the form. Show the normal
      // success state so the bot learns nothing, but send nothing.
      if ((data.get('_gotcha') as string)?.length) {
        setState({ status: 'success' })
        return
      }

      const nextErrors = validate(data, rules)
      setErrors(nextErrors)

      if (Object.keys(nextErrors).length > 0) {
        // Move focus to the first field with a problem so keyboard and screen
        // reader users are taken straight to it.
        const firstInvalid = rules.find((rule) => nextErrors[rule.name])
        if (firstInvalid) {
          const control = form.elements.namedItem(
            firstInvalid.name,
          ) as HTMLElement | null
          control?.focus()
        }
        return
      }

      // The form endpoint has not been connected yet. Tell the visitor exactly
      // what to do instead rather than pretending the message was sent.
      // FormNotice moves focus to the message once it has rendered.
      if (isPlaceholder(site.formEndpoint)) {
        setState({ status: 'unconfigured' })
        return
      }

      setState({ status: 'submitting' })
      data.append('_subject', subject)

      try {
        // Sent urlencoded rather than as multipart FormData. Every form service
        // accepts it for text-only forms, and Netlify Forms requires it for
        // submissions made with fetch rather than a normal form POST.
        const response = await fetch(site.formEndpoint, {
          method: 'POST',
          body: new URLSearchParams(data as unknown as Record<string, string>),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        setState({ status: 'success' })
        form.reset()
      } catch {
        setState({
          status: 'error',
          message:
            'Something went wrong sending that. Please try again in a moment, or email me directly and I will pick it up.',
        })
      }
    },
    [rules, subject],
  )

  return { state, errors, handleSubmit, statusRef, formRef, setState }
}
