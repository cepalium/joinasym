import nextConfig from 'eslint-config-next';

// `next lint` was removed in Next.js 16 — this replaces it directly.
const config = [...nextConfig, { ignores: ['out/**', '.next/**', 'node_modules/**'] }];

export default config;
