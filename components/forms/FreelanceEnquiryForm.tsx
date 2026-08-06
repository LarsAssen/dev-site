'use client'

import { SubmitButton } from '@/components/ui/Button'
import { DashedDivider } from '@/components/ui/brand'

import { FormNotice, SuccessMessage } from './FormStatus'
import {
  FieldSet,
  HoneypotField,
  SelectField,
  TextAreaField,
  TextField,
} from './fields'
import { useEnquiryForm } from './useEnquiryForm'

/** Identifies which form a submission came from. Sent with the payload and
 *  used in the email subject line, so the two forms are easy to tell apart. */
const FORM_NAME = 'freelance-enquiry'

const projectTypes = [
  'Landing-page development',
  'Marketing website implementation',
  'Responsive front-end work',
  'Design-to-web implementation',
  'Defined existing-site improvements',
  'Website QA',
  'Launch support',
  'Rapid prototype',
  'Short-term delivery capacity',
  'Something else',
] as const

const rules = [
  { name: 'name', label: 'Your name', required: true },
  { name: 'company', label: 'Company', required: true },
  { name: 'email', label: 'Email address', required: true, type: 'email' as const },
  { name: 'projectType', label: 'Project type', required: true },
  {
    name: 'summary',
    label: 'A project summary',
    required: true,
    minLength: 20,
  },
]

export function FreelanceEnquiryForm() {
  const { state, errors, handleSubmit, statusRef } = useEnquiryForm({
    rules,
    subject: 'Freelance / subcontract enquiry',
  })

  if (state.status === 'success') {
    return (
      <SuccessMessage
        heading="Thank you — your enquiry has been sent."
        body="I will review the scope and dates and come back to you within two working days with a straight answer on availability and rate. If I cannot commit to the timeline you need, I will tell you rather than leaving it open."
      />
    )
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-10"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <HoneypotField />

      <FieldSet legend="About you">
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            name="name"
            label="Your name"
            required
            autoComplete="name"
            error={errors.name}
          />
          <TextField
            name="company"
            label="Company"
            required
            autoComplete="organization"
            error={errors.company}
          />
        </div>
        <TextField
          name="email"
          label="Email address"
          type="email"
          required
          autoComplete="email"
          error={errors.email}
        />
      </FieldSet>

      <DashedDivider />

      <FieldSet legend="About the work">
        <SelectField
          name="projectType"
          label="Project type"
          required
          options={projectTypes}
          error={errors.projectType}
        />
        <TextAreaField
          name="summary"
          label="Project summary"
          required
          rows={5}
          hint="What needs building, what state it is in now, and what a finished handover looks like."
          error={errors.summary}
        />
        <TextField
          name="reference"
          label="Current website or design link"
          hint="A live URL, a Figma file, or a brief. Note if it needs access granted."
          placeholder="https://"
          error={errors.reference}
        />
      </FieldSet>

      <DashedDivider />

      <FieldSet
        legend="Timing and commercials"
        description="These four answers are what let me give you a yes or no quickly rather than after three emails."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField
            name="startDate"
            label="Required start date"
            hint="A date or a rough window."
            placeholder="Early September, or flexible"
            error={errors.startDate}
          />
          <SelectField
            name="duration"
            label="Approximate project duration"
            options={[
              'Under one week',
              'One to two weeks',
              'Two to four weeks',
              'One to three months',
              'Ongoing / open-ended',
            ]}
            error={errors.duration}
          />
          <SelectField
            name="weeklyHours"
            label="Expected weekly hours"
            options={[
              'Up to 8 hours',
              '8 to 16 hours',
              '16 to 24 hours',
              '24 to 32 hours',
              'Full time',
              'Varies week to week',
            ]}
            error={errors.weeklyHours}
          />
          <TextField
            name="budget"
            label="Budget or rate range"
            hint="A fixed budget, an hourly range or a day rate."
            error={errors.budget}
          />
        </div>
        <TextAreaField
          name="details"
          label="Anything else"
          rows={3}
          error={errors.details}
        />
      </FieldSet>

      <FormNotice state={state} statusRef={statusRef} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton
          type="submit"
          variant="secondary"
          disabled={state.status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {state.status === 'submitting' ? 'Sending…' : 'Send project enquiry'}
        </SubmitButton>
        <p className="text-sm text-ink-muted">
          I reply within two working days.
        </p>
      </div>
    </form>
  )
}
