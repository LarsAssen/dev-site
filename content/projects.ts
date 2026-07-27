/* ==========================================================================
   PROJECTS
   ---------------------------------------------------------------------------
   HOW TO ADD A PROJECT
   ---------------------------------------------------------------------------
   1. Drop your images into /public/work/<slug>/
   2. Copy the commented example at the bottom of this file into the
      `projects` array and fill it in.
   3. FIRST PROJECT ONLY — rename the folder
        app/work/_case-study-template/  ->  app/work/[slug]/
      to switch the individual case-study pages on. See that file for why it
      starts out disabled. Later projects need nothing but step 2.

   The Work page, the homepage work section, the sitemap and the individual
   case-study pages are all generated from this array.

   HONESTY RULE
   ---------------------------------------------------------------------------
   `status` must describe what the project actually was. Use 'client' only for
   paid client work. Concept, self-initiated, prototype and exploration pieces
   are labelled as such wherever they appear on the site — the label is printed
   automatically, so it cannot be forgotten.
   ========================================================================== */

export type ProjectStatus =
  | 'client'
  | 'concept'
  | 'self-initiated'
  | 'prototype'
  | 'exploration'

/** The visible label printed on every card and case study. */
export const statusLabels: Record<ProjectStatus, string> = {
  client: 'Client project',
  concept: 'Concept project',
  'self-initiated': 'Self-initiated project',
  prototype: 'Prototype',
  exploration: 'Design exploration',
}

export type ProjectImage = {
  /** Path relative to /public, e.g. '/work/example/home.png' */
  src: string
  /** Describe the content for people who cannot see it. Never leave empty. */
  alt: string
  width: number
  height: number
  /** Optional caption printed beneath the image. */
  caption?: string
}

export type Testimonial = {
  /** Only ever a real quote, given by a real client, with their permission. */
  quote: string
  name: string
  role: string
}

export type Project = {
  /** URL segment. Lowercase, hyphenated. Must be unique. */
  slug: string
  title: string
  /** e.g. 'Personal trainer' or 'Landing page for a design studio'. */
  projectType: string
  status: ProjectStatus
  /** Year or month the work was completed, e.g. '2026'. */
  completed: string
  /** One or two sentences. Shown on cards and in search results. */
  summary: string
  /** Card and social-share image. */
  cover: ProjectImage
  /** What you actually did, e.g. ['Site structure', 'Design', 'Build']. */
  services: string[]

  /* --- Case study body. Omit any section you do not want to publish. --- */
  challenge?: string
  role?: string
  solution?: string
  /** The specific choices worth explaining, and why they were made. */
  keyDecisions?: Array<{ decision: string; reasoning: string }>
  /** Describe what changed. Do not publish numbers you cannot evidence. */
  outcome?: string
  images?: ProjectImage[]
  testimonial?: Testimonial
  /** Live URL, if the project is public and the client is happy to be linked. */
  link?: { href: string; label: string }

  /** Set true to show this project on the homepage work section. */
  featured?: boolean
}

/* --------------------------------------------------------------------------
   No projects are published yet. The Work page and homepage handle this state
   deliberately — they explain that the first collection is being built rather
   than showing placeholder cards.
   -------------------------------------------------------------------------- */
export const projects: Project[] = []

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function featuredProjects(limit = 3): Project[] {
  const featured = projects.filter((project) => project.featured)
  return (featured.length > 0 ? featured : projects).slice(0, limit)
}

/* --------------------------------------------------------------------------
   TEMPLATE — copy this into the array above and fill it in.

export const exampleProject: Project = {
  slug: 'harbour-physio',
  title: 'A clearer service structure for a physiotherapy clinic',
  projectType: 'Health and wellness clinic',
  status: 'client',
  completed: '2026',
  summary:
    'A five-page website replacing a single-page site that did not explain the clinic’s treatments or make booking obvious.',
  cover: {
    src: '/work/harbour-physio/cover.png',
    alt: 'The clinic home page shown on a laptop and a phone.',
    width: 1600,
    height: 1000,
  },
  services: ['Site structure', 'Design', 'Build', 'Copy editing', 'Launch'],
  challenge:
    'Describe the situation the client was in and the specific problem the website had to solve.',
  role: 'Describe exactly what you were responsible for, and what you were not.',
  solution: 'Describe what you built and why it addressed the problem.',
  keyDecisions: [
    {
      decision: 'Put treatments before the practitioner biographies',
      reasoning:
        'Visitors were arriving with a specific injury and wanted to know it could be treated before reading about anyone’s qualifications.',
    },
  ],
  outcome:
    'Describe what changed in plain terms. Only include figures the client has shared and agreed to publish.',
  images: [
    {
      src: '/work/harbour-physio/services.png',
      alt: 'The services page listing six treatments with short descriptions.',
      width: 1600,
      height: 1000,
      caption: 'Each treatment answers one question: is this what I need?',
    },
  ],
  testimonial: {
    quote: 'Only ever a real quote, with permission to publish it.',
    name: 'Client name',
    role: 'Role, Business name',
  },
  link: { href: 'https://example.com', label: 'View the live site' },
  featured: true,
}
-------------------------------------------------------------------------- */
