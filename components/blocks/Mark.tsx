/**
 * The monogram: an asymmetric A, the crossbar dropped and the right stroke cut
 * short — the "asym" in the name, drawn rather than written. Gradient stops are
 * the gold ramp from globals.css; `id` is suffixed so two marks on one page do
 * not collide in the SVG id namespace.
 */
export function Mark({ className = '', id = 'a' }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id={`mark-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0d4a8" />
          <stop offset="48%" stopColor="#c98f45" />
          <stop offset="100%" stopColor="#8a5a24" />
        </linearGradient>
      </defs>
      <path d="M20 3 36 37h-7.6L20 18.4 11.6 37H4Z" fill={`url(#mark-${id})`} />
      <path d="M14.4 26.6h11.2l2.6 5.4H11.8Z" fill="#0a0a0c" />
      <path d="M20 3 36 37h-7.6L20 18.4Z" fill="#000" opacity="0.22" />
    </svg>
  );
}
