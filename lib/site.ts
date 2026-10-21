/** Every brand-dependent string. Do not hardcode the name anywhere else. */
export const site = {
  name: 'Asym',
  /* The company is Asym; the site it trades under is asym.ae. */
  company: 'Asym',
  /* The lockup is the mark plus this. components/blocks/Mark.tsx draws the A,
     so spelling it again would read "AAsym". */
  wordmark: 'sym',
  title: "UAE's Premier Talent Network",
  /* Metadata only — the <meta> description and the social card. It is not
     rendered on the page; the headline carries the proposition instead. */
  description:
    'Asym connects UAE organisations with vetted senior specialists, shortlisted within 48 hours.',
  /* ⚠️ Set before a production build; metadata and the sitemap read it. */
  url: 'https://asym.ae',

  /* The only route off this page. Hosted as a Cloudflare static site, so there
     is no backend and no form — every call to action is a mailto. */
  email: 'support@asym.ae',
  office: 'Abu Dhabi, UAE',
} as const;

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Talent enquiry')}`;
