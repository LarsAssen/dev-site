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
const FORM_NAME = 'website-project-enquiry'

/** The first three options are the primary offer and appear first. */
export const projectTypes = [
  'A new complete website',
  'Replacing an existing website',
  'Improving an existing website',
  'Landing page',
  'Freelance or agency support',
  'Something else',
] as const

const rules = [
  { name: 'name', label: 'Your name', required: true },
  { name: 'business', label: 'Business name', required: true },
  { name: 'email', label: 'Email address', required: true, type: 'email' as const },
  { name: 'projectType', label: 'Project type', required: true },
  {
    name: 'offering',
    label: 'A description of what your business offers',
    required: true,
    minLength: 20,
  },
  {
    name: 'goals',
    label: 'What you would like the website to accomplish',
    required: true,
    minLength: 20,
  },
]

export function ProjectEnquiryForm({
  defaultProjectType = '',
}: {
  defaultProjectType?: string
}) {
  const { state, errors, handleSubmit, statusRef } = useEnquiryForm({
    rules,
    subject: 'Website project enquiry',
  })

  if (state.status === 'success') {
    return (
      <SuccessMessage
        heading="Thank you — your enquiry has been sent."
        body="I read every enquiry myself. I will go through what you have sent, and reply within two working days to let you know whether the project is a good fit and what the next step looks like. If it is not something I can help with, I will say so plainly and point you somewhere more suitable where I can."
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
            name="business"
            label="Business name"
            required
            autoComplete="organization"
            error={errors.business}
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
        <TextField
          name="currentSite"
          label="Current website or social page"
          type="text"
          hint="A link to anything you have now, even if it is just a Facebook or Instagram page. Leave blank if you are starting from nothing."
          autoComplete="url"
          placeholder="example.co.nz"
          error={errors.currentSite}
        />
      </FieldSet>

      <DashedDivider />

      <FieldSet legend="About the project">
        <SelectField
          name="projectType"
          label="Type of project"
          required
          options={projectTypes}
          defaultValue={defaultProjectType}
          error={errors.projectType}
        />
        <TextAreaField
          name="offering"
          label="What does your business offer?"
          required
          rows={4}
          hint="A few sentences is plenty. Who you help and what you do for them."
          error={errors.offering}
        />
        <TextAreaField
          name="goals"
          label="What would you like the website to accomplish?"
          required
          rows={4}
          hint="For example: explain your services clearly, bring in more enquiries, replace a site that no longer fits, or look credible to people comparing options."
          error={errors.goals}
        />
      </FieldSet>

      <DashedDivider />

      <FieldSet
        legend="Practicalities"
        description="Rough answers are fine. These help me tell quickly whether the project is a good fit, and give you a straight answer sooner."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField
            name="timeframe"
            label="Desired timeframe"
            options={[
              'As soon as possible',
              'Within the next month',
              'One to three months',
              'Later than three months',
              'Not sure yet',
            ]}
            error={errors.timeframe}
          />
          <SelectField
            name="budget"
            label="Approximate budget"
            options={[
              'Under NZD $1,500',
              'NZD $1,500 to $2,500',
              'NZD $2,500 to $4,000',
              'Over NZD $4,000',
              'Not sure — happy to be guided',
            ]}
            error={errors.budget}
          />
        </div>
        <TextAreaField
          name="details"
          label="Anything else I should know"
          rows={4}
          hint="Existing content, photography, deadlines, or anything you are unsure about."
          error={errors.details}
        />
      </FieldSet>

      <FormNotice state={state} statusRef={statusRef} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SubmitButton
          type="submit"
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
