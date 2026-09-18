import type { ReactNode } from 'react';

/** Small, dumb, reusable. All Server Components — no JavaScript ships. */

export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
}

type Reveal = { delay?: number };

/** Spread into any element to stagger it into view. */
export function reveal({ delay = 0 }: Reveal = {}) {
  return {
    'data-reveal': true,
    style: delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined,
  };
}

type TextProps = React.HTMLAttributes<HTMLElement> & { children: ReactNode };

/* ⚠️ Written out, never interpolated. Tailwind scans source text, so a class
   built from a template literal is silently never generated. */
const SIZES = {
  d1: 'text-[length:var(--text-d1)]',
  d2: 'text-[length:var(--text-d2)]',
  d3: 'text-[length:var(--text-d3)]',
  quote: 'text-[length:var(--text-quote)]',
};

export function Display({
  children,
  as: Tag = 'h2',
  size = 'd2',
  className = '',
  ...rest
}: TextProps & { as?: 'h1' | 'h2' | 'h3' | 'p'; size?: keyof typeof SIZES }) {
  // d1 is the page title and d2 the section titles; both take the fine optical
  // size. d3 and quote stay on the sturdy default.
  const fine = size === 'd1' || size === 'd2' ? 'display-fine' : '';

  return (
    <Tag className={`display ${fine} ${SIZES[size]} text-warm ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function Lead({ children, className = '', ...rest }: TextProps) {
  return (
    <p
      className={`max-w-[54ch] text-[length:var(--text-lead)] leading-[1.55] text-muted ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}

/** The one arrow on the site. Shifts on hover via the parent's `group`. */
function Arrow() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M0 5h14M10 1l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'glass';
  className?: string;
  arrow?: boolean;
}) {
  return (
    <a href={href} className={`btn group btn-${variant} ${className}`}>
      {children}
      {arrow && <Arrow />}
    </a>
  );
}

export function StatusPill({ available }: { available: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] tracking-wide ${
        available ? 'border-success/35 text-success' : 'border-line text-faint'
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${available ? 'bg-success' : 'bg-faint'}`}
      />
      {available ? 'Available' : 'Engaged'}
    </span>
  );
}
