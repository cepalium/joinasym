import type { DirectoryExpert } from '@/content/experts';
import { StatusPill, reveal } from '@/components/primitives';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

/** Monogram, not a portrait: the biography is what the brief is for. */
export function ExpertCard({ expert, delay = 0 }: { expert: DirectoryExpert; delay?: number }) {
  return (
    <article
      className="glass glass-interactive flex h-full flex-col gap-4 p-5"
      {...reveal({ delay })}
    >
      <div className="flex items-start gap-3.5">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-gilt/25 bg-gradient-to-br from-white/10 to-transparent font-[family-name:var(--font-display)] text-sm text-gilt"
        >
          {initials(expert.name)}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[1.0625rem] leading-tight font-medium text-warm">{expert.name}</h3>
          <p className="mt-1 text-sm text-gilt">{expert.role}</p>
        </div>
      </div>

      <div className="mt-auto border-t border-white/6 pt-3.5 text-xs text-warm">
        <p>{expert.previous_companies}</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span>
            {expert.location} · {expert.years} yrs
          </span>
          <StatusPill available={expert.available} />
        </div>
      </div>
    </article>
  );
}
