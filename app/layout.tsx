import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { site } from '@/lib/site';
import { Header, Footer } from '@/components/blocks/Chrome';
import { Reveal } from '@/components/motion/Reveal';
import './globals.css';

/* next/font downloads both at build time and serves them from our own origin —
   no Google request at runtime, no layout shift.

   ⚠️ Fraunces, not a Didone. A Didone's hairlines are an asset at poster sizes
   and a liability everywhere else — at card-heading size on near-black they
   simply drop out. Fraunces keeps the editorial voice at a fraction of the
   stroke contrast, so the same face works at 6rem and at 1.35rem. */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.title}`,
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
};

/** `colorScheme: dark` is a fact, not a preference — there is no light theme. */
export const viewport: Viewport = {
  // ⚠️ Must track --color-ink. Next needs a literal, so they cannot share.
  themeColor: '#0a0a0c',
  colorScheme: 'dark',
};

/**
 * Inline and synchronous, before first paint. It does one thing: add `js` to
 * <html>, which is what arms the hidden state in globals.css. Set any later and
 * [data-reveal] elements flash visible before hiding.
 *
 * ⚠️ It must not touch anything below <html>. <html> carries
 * suppressHydrationWarning; its descendants do not, and this runs before React
 * hydrates. Marking elements here is what caused the hydration mismatch — the
 * observer lives in components/motion/Reveal.tsx for that reason.
 *
 * Under reduced motion the class is never added, so the CSS never hides
 * anything and the page renders complete.
 */
const armReveal = `if (!matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: armReveal }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Reveal />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
