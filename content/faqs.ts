/* ==========================================================================
   FREQUENTLY ASKED QUESTIONS
   Direct answers. Where the honest answer is "no" or "it depends", it says so.

   Prices are written out rather than interpolated, because these strings are
   also emitted as FAQPage structured data. If the founding-client price or the
   standard price changes in content/site.ts, update the answers here too.
   ========================================================================== */

import type { FaqEntry } from '@/lib/schema'

export const generalFaqs: FaqEntry[] = [
  {
    question: 'Do I need all my content ready before we start?',
    answer:
      'No. Most people do not have it ready, and waiting until you do is the main reason website projects stall. We work out the structure first, which tells you exactly what to write and how much. I will organise and lightly edit what you send, and I can point out the gaps as we go.',
  },
  {
    question: 'How long does the project take?',
    answer:
      'Most suitable projects take approximately three to five weeks. The timeline depends partly on how quickly the required content, account access, feedback and decisions are provided. The build itself is rarely the slow part. If your project looks likely to take longer, I will tell you before we start rather than partway through.',
  },
  {
    question: 'What is included in the package?',
    answer:
      'An initial project discussion, a written project scope, website planning and page structure, up to six core pages, responsive desktop, tablet and mobile design, development, your content organised and lightly edited, clear calls to action, a contact or enquiry form, basic search-engine setup, analytics setup, domain connection, pre-launch testing, two structured revision rounds, launch support and basic handover guidance. The full breakdown is on the Website Builds page.',
  },
  {
    question: 'How many pages do I get?',
    answer:
      'Up to six core pages. A typical set might be home, about, services, one or two individual service pages, frequently asked questions and contact, but the exact sitemap is agreed before work begins. Not every project needs six, and there is no advantage in padding one out to reach the number.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Two structured revision rounds are included. Each round should be provided as one consolidated list of feedback after reviewing the website. That covers things like replacing supplied images, adjusting wording, correcting information and reasonable layout refinements within the agreed design direction.',
  },
  {
    question: 'Do you write the website content?',
    answer:
      'I organise and lightly edit the content you provide. Extensive copywriting from scratch is not automatically included, but it can be discussed and quoted separately.',
  },
  {
    question: 'Can you improve an existing website instead of replacing it?',
    answer:
      'Sometimes. If the underlying site is sound and the problems are structural or visual, a focused set of improvements can be the better option. If it is old, slow or built on something awkward to work with, rebuilding is usually cheaper than repeatedly patching it. I will give you a straight answer after looking at what you have.',
  },
  {
    question: 'Can I update the website myself afterwards?',
    answer:
      'Yes, for the everyday things — text, images, prices, opening hours, adding a service. I set the site up so those changes are straightforward and I walk you through them at handover. Larger structural changes are worth a conversation first.',
  },
  {
    question: 'Are hosting and domain costs included?',
    answer:
      'No. Hosting, domain registration and any premium software or plugin licences are billed to you directly by those providers, so you own them outright and are never locked in through me. I will recommend options and set everything up, and the ongoing costs are usually modest.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes. Launch support and basic handover guidance are included with every project. An optional Website Care Plan is also available for NZD $150 per month where the platform and hosting setup are suitable. It covers routine maintenance checks and up to 30 minutes of minor content changes each month. New pages, redesign work, major functionality and marketing are quoted separately.',
  },
  {
    question: 'Do you only work with health and wellness businesses?',
    answer:
      'No. I work with established service businesses and independent professionals across several sectors. I am currently giving particular attention to health, fitness and wellness businesses, but I also consider other suitable projects.',
  },
  {
    question: 'Do you work with businesses outside Wellington?',
    answer:
      'Yes. I am based in the Wellington region and work with clients across New Zealand, and remotely elsewhere. Almost everything happens over video calls, email and shared links, which suits most projects better than travel does. If you are local and would rather meet in person first, that is easy to arrange.',
  },
  {
    question: 'Do you build online stores?',
    answer:
      'No. Selling products online brings payments, inventory, shipping, tax and ongoing operational work, and that is a different service to the one I am building. If you need a store, I would rather point you elsewhere than take it on badly.',
  },
  {
    question: 'Can you guarantee Google rankings?',
    answer:
      'No, and anyone who does is guessing. What I can do is build the site so search engines can read it properly: sensible page structure, real headings, fast loading, clear titles and descriptions, a sitemap and mobile-friendly pages. That is the groundwork. Rankings then depend on your market, your competition and time.',
  },
  {
    question: 'Can you guarantee more enquiries or sales?',
    answer:
      'No. I will not promise a number of enquiries, leads or sales, because the website is one part of your wider business and marketing system. What a clear website does is make your services easier to understand and make getting in touch obvious. What happens after that depends on your offer, your pricing, your market and how you follow up.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'You get the site live on your own domain and hosting, a walkthrough of how it works, and written notes covering the changes you are likely to want to make. Everything is in your name and your accounts. If you later want to work with someone else, nothing is tied to me.',
  },
]

/**
 * The four questions shown on the homepage — the ones people ask before they
 * are convinced, rather than the ones they ask once they are. The full set
 * lives on the Website Builds page, which the homepage links to.
 */
export const homepageFaqs: FaqEntry[] = [
  generalFaqs[0], // Do I need all my content ready?
  generalFaqs[1], // How long does the project take?
  generalFaqs[10], // Do you only work with health and wellness businesses?
  generalFaqs[8], // Are hosting and domain costs included?
]

export const pricingFaqs: FaqEntry[] = [
  {
    question: 'How much does a website cost?',
    answer:
      'The Complete Website Package is currently NZD $1,500 for the first three suitable founding-client projects. The standard package price after that will be NZD $2,500. Work outside the defined package is discussed and priced separately before it begins.',
  },
  {
    question: 'Why is the founding-client price lower?',
    answer:
      'I am offering the first three suitable projects at NZD $1,500 while I refine the delivery process and build the first collection of completed projects for this focused service. The full agreed package, process and professional standard still apply. The standard package price after the founding-client period will be NZD $2,500.',
  },
  {
    question: 'How do payments work?',
    answer:
      'A 50% initial payment is required before the project begins. The remaining 50% is due following final approval and before the website is launched.',
  },
  {
    question: 'What happens if I need something outside the package?',
    answer:
      'Anything outside the agreed scope is discussed and priced before work begins. Where possible, additional work is quoted at a fixed price so you can decide whether to proceed before it is added.',
  },
  {
    question: 'What if I need more than six pages?',
    answer:
      'That is fine — additional pages are quoted individually and agreed up front, so the project price stays fixed. Most service businesses need fewer pages than they expect, and we work that out during planning rather than guessing at the start.',
  },
]

export const freelanceFaqs: FaqEntry[] = [
  {
    question: 'How do you prefer to receive work?',
    answer:
      'A clear brief and a design file, or a written scope for improvement and QA work. I would rather spend the first hour asking questions than deliver something that misses the intent.',
  },
  {
    question: 'Do you work under our agency name?',
    answer:
      'Yes. White-label and subcontract arrangements are fine, including communicating through your project management tools and following your delivery process.',
  },
  {
    question: 'What is your availability?',
    answer:
      'It varies, because complete website builds are the main body of my work and take priority. Tell me your dates and required hours in your enquiry and I will give you a straight answer about whether I can commit to them.',
  },
  {
    question: 'What are your rates?',
    answer:
      'Rates depend on the engagement type, scope, duration and notice period. Send through the brief and working arrangement you have in mind, and I will respond with an appropriate rate or fixed price.',
  },
]
