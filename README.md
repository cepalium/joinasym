# joinasym.com

Single-page marketing site for JoinAsym. Next.js static export, no backend.

## Commands

```bash
npm install
npm run dev        # localhost:3000
npm run build      # static export to out/
npm run preview    # serve out/ on localhost:4321
npm run check      # typecheck + lint + build
```

## Deploy

Push to `main` (or merge a PR into it). Two things happen automatically:

1. **GitHub Actions** (`.github/workflows/ci.yml`) runs a secret scan, lint,
   typecheck and build. This is the required check — a broken build can't merge.
2. **Cloudflare Workers Builds** watches the same `main` branch, runs
   `npm run build` and deploys `out/` to the `joinasym` Worker. Every PR also
   gets its own preview URL.

Nothing to upload by hand. `wrangler.jsonc` is what keeps this a plain static
asset deploy — without it Cloudflare detects Next.js and builds through
OpenNext, which is wrong for a static export.

Set `site.url` in `lib/site.ts` before a production build — metadata and the
sitemap read it.

### Pre-commit hook

Husky runs on every `git commit`: lint-staged (ESLint + Prettier on staged
files), a full typecheck, and a gitleaks secret scan (`brew install gitleaks`).
It can be skipped with `--no-verify`, which is why CI runs the same checks.

## Layout

```
app/page.tsx              every section of the page, one function each
app/layout.tsx            fonts, metadata, the pre-paint reveal script
app/globals.css           all design tokens: colour, type, glass, motion
app/icon.svg              favicon (keep in step with components/blocks/Mark.tsx)
components/primitives/    Container, Section, Display, Button, StatusPill
components/blocks/        Chrome (header/footer), ExpertCard, Mark
components/motion/        Reveal — scroll reveal, must stay in an effect
content/pages.ts          all page copy
content/experts.ts        the expert directory
lib/site.ts               name, email, office, URL
public/img/               photography + CREDITS.txt
```

## Notes

- **No backend.** Every call to action is a `mailto:`. There is no form, and a
  static export has no route handlers, so keep it that way.
- **Two optical sizes.** Fraunces' `opsz` axis sets stroke contrast. `.display`
  is the sturdy default; `.display-fine` is reserved for the page title, the
  section titles and the stat figures. Mixing them elsewhere makes the page look
  like it uses two typefaces.
- **Reveal runs in an effect, not in the head script.** The head script only
  adds `js` to `<html>`. Anything that marks `[data-reveal]` elements before
  React hydrates causes a hydration mismatch on the whole tree.
- **Photography is Unsplash**, free for commercial use. Replace with licensed
  brand photography before launch. Credits in `public/img/CREDITS.txt`.
- **The client logos and the three testimonials are placeholder content**
  inherited from the original build. They name real organisations as clients and
  quote officers who do not exist. Replace or remove them before launch.
