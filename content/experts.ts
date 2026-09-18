/** The network. Feeds the featured rail on the single page — there are no
    detail routes, so nothing here links out. */

export type DirectoryExpert = {
  name: string;
  role: string;
  category: string;
  expertise: string[];
  years: number;
  pedigree: string;
  available: boolean;
  location: string;
};

export const directory: DirectoryExpert[] = [
  {
    name: 'Sarah Chen',
    role: 'Principal Software Architect',
    category: 'software-engineering',
    expertise: ['Cloud Infrastructure', 'Distributed Systems', 'FinTech'],
    years: 14,
    pedigree: 'Ex-Google · Ex-Stripe',
    available: true,
    location: 'Dubai, UAE',
  },
  {
    name: 'James Okafor',
    role: 'Management Consultant',
    category: 'consulting',
    expertise: ['Strategy', 'Organisational Design', 'M&A'],
    years: 11,
    pedigree: 'Ex-McKinsey · Ex-BCG',
    available: true,
    location: 'Riyadh, KSA',
  },
  {
    name: 'Layla Hassan',
    role: 'Head of Product',
    category: 'product-pm',
    expertise: ['Product Strategy', 'Growth', 'B2B SaaS'],
    years: 9,
    pedigree: 'Ex-Careem · Ex-Noon',
    available: false,
    location: 'Abu Dhabi, UAE',
  },
  {
    name: 'Marcus Weber',
    role: 'Data & AI Lead',
    category: 'data-ai',
    expertise: ['Machine Learning', 'LLMs', 'Data Architecture'],
    years: 12,
    pedigree: 'Ex-DeepMind · Ex-SAP',
    available: true,
    location: 'Dubai, UAE',
  },
  {
    name: 'Priya Sharma',
    role: 'UX Design Director',
    category: 'design',
    expertise: ['Design Systems', 'User Research', 'Brand'],
    years: 10,
    pedigree: 'Ex-Airbnb · Ex-Figma',
    available: true,
    location: 'Dubai, UAE',
  },
  {
    name: 'Tariq Al-Mansouri',
    role: 'CFO Advisory',
    category: 'functional',
    expertise: ['Financial Strategy', 'IPO Readiness', 'Treasury'],
    years: 18,
    pedigree: 'Ex-KPMG · Ex-Mubadala',
    available: true,
    location: 'Abu Dhabi, UAE',
  },
  {
    name: 'Nadia Petrov',
    role: 'Senior Backend Engineer',
    category: 'software-engineering',
    expertise: ['Golang', 'Kubernetes', 'API Design'],
    years: 8,
    pedigree: 'Ex-Uber · Ex-Deliveroo',
    available: true,
    location: 'Remote',
  },
  {
    name: 'Ahmed Al-Rashidi',
    role: 'Product Manager',
    category: 'product-pm',
    expertise: ['Fintech', 'Payments', 'Agile'],
    years: 7,
    pedigree: 'Ex-Tabby · Ex-Visa',
    available: false,
    location: 'Riyadh, KSA',
  },
  {
    name: 'Elena Vasquez',
    role: 'ML Engineer',
    category: 'data-ai',
    expertise: ['NLP', 'Computer Vision', 'PyTorch'],
    years: 6,
    pedigree: 'Ex-Meta AI · Ex-Snap',
    available: true,
    location: 'Remote',
  },
  {
    name: 'Khalid Bin Zayed',
    role: 'Strategy Director',
    category: 'consulting',
    expertise: ['Vision 2030', 'Public Sector', 'Transformation'],
    years: 15,
    pedigree: 'Ex-Oliver Wyman · Ex-PIF',
    available: true,
    location: 'Riyadh, KSA',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Brand & Visual Designer',
    category: 'design',
    expertise: ['Brand Identity', 'Motion Design', 'Figma'],
    years: 9,
    pedigree: 'Ex-Pentagram · Ex-AKQA',
    available: false,
    location: 'Remote',
  },
  {
    name: 'Omar Siddiqui',
    role: 'Legal & Compliance Lead',
    category: 'functional',
    expertise: ['Corporate Law', 'Regulatory', 'DIFC'],
    years: 13,
    pedigree: 'Ex-Clifford Chance · Ex-ADGM',
    available: true,
    location: 'Dubai, UAE',
  },
];
