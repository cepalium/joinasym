/** The network. Feeds the featured rail on the single page — there are no
    detail routes, so nothing here links out. */

export type DirectoryExpert = {
  name: string;
  role: string;
  years: number;
  previous_companies: string;
  available: boolean;
  location: string;
};

export const directory: DirectoryExpert[] = [
  {
    name: 'Sultan A.',
    role: 'Senior Partner',
    years: 14,
    previous_companies: 'Ex-McKinsey · Ex-CitiBank',
    available: true,
    location: 'Abu Dhabi, UAE',
  },
  {
    name: 'Pranav K.',
    role: 'Senior Partner',
    years: 17,
    previous_companies: 'Ex-Strategy& · INSEAD',
    available: true,
    location: 'Dubai, UAE',
  },
  {
    name: 'Tuan N.',
    role: 'Data & AI Lead',
    years: 7,
    previous_companies: 'Ex-McKinsey · Ex-QuantumBlack',
    available: false,
    location: 'Abu Dhabi, UAE',
  },
  {
    name: 'Afaque A.',
    role: 'Data Architect',
    years: 9,
    previous_companies: 'Ex-Databricks · Ex-QuantumBlack',
    available: true,
    location: 'Dubai, UAE',
  },
  {
    name: 'Shiladitya B.',
    role: 'Engagement Manager',
    years: 10,
    previous_companies: 'Ex-McKinsey · Ex-Petronas',
    available: true,
    location: 'Abu Dhabi, UAE',
  },
  {
    name: 'Zaynab H.',
    role: 'Principal Data Scientist',
    years: 10,
    previous_companies: 'Ex-ADNOC · Ex-BCG',
    available: true,
    location: 'Abu Dhabi, UAE',
  },
  {
    name: 'Andrew B.',
    role: 'Lead Platform Engineer',
    years: 12,
    previous_companies: 'Ex-E&',
    available: true,
    location: 'Dubai, UAE',
  },
  {
    name: 'Tu H.',
    role: 'Senior Data & AI Engineer',
    years: 5,
    previous_companies: 'Ex-Heineken · DeakinU',
    available: false,
    location: 'Abu Dhabi, UAE',
  },
];
