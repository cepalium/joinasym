import Link from 'next/link';
import { Container, Display, Section } from '@/components/primitives';

export default function NotFound() {
  return (
    <Section className="pt-24">
      <Container>
        <p className="numeral">404</p>
        <Display className="mt-6">Page Not Found</Display>
        <p className="mt-4 text-muted">
          Sorry, the page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold/90"
        >
          Go Home
        </Link>
      </Container>
    </Section>
  );
}
