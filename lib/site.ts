/** Every brand-dependent string. Do not hardcode the name anywhere else. */
export const site = {
  name: 'JoinAsym',
  title: "GCC's Premier Talent Network",
  /* Metadata only — the <meta> description and the social card. It is not
     rendered on the page; the headline carries the proposition instead. */
  description:
    'JoinAsym connects GCC organisations with vetted senior specialists, shortlisted within 48 hours.',
  /* ⚠️ Set before a production build; metadata and the sitemap read it. */
  url: 'https://joinasym.com',

  /* The only route off this page. Hosted as a Cloudflare static site, so there
     is no backend and no form — every call to action is a mailto. */
  email: 'support@joinasym.com',
  office: 'Abu Dhabi, UAE',
} as const;

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Talent enquiry')}`;
