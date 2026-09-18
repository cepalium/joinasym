import Link from 'next/link';
import { mailto, site } from '@/lib/site';
import { Container } from '@/components/primitives';
import { Mark } from '@/components/blocks/Mark';

function Wordmark({ id, className = '' }: { id: string; className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <Mark id={id} className="h-7 w-7" />
      <span className="display text-[1.35rem] text-warm">{site.name}</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/6 bg-[color-mix(in_oklab,var(--color-ink)_72%,transparent)] backdrop-blur-xl">
        <Container className="flex h-16 items-center justify-between gap-8">
          <Wordmark id="hdr" />

          <a href={mailto} className="btn btn-primary group !px-5 !py-2.5 !text-sm">
            Talk to an Expert
          </a>
        </Container>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-ink-deep">
      <Container className="flex flex-wrap items-start justify-between gap-10 py-12">
        <div>
          <Wordmark id="ftr" />
          <p className="mt-3 text-sm text-muted">{site.title}</p>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div>
            <h2 className="eyebrow">Enquiries</h2>
            <a href={mailto} className="mt-3 block text-warm transition-colors hover:text-gilt">
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="eyebrow">Office</h2>
            <p className="mt-3 text-warm">{site.office}</p>
          </div>
        </div>
      </Container>

      <Container>
        <hr className="rule" />
        <p className="py-5 text-sm text-faint">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
