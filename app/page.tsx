import { directory } from '@/content/experts';
import { clients, disciplines, homeStats, homeSteps, pillars, testimonials } from '@/content/pages';
import { mailto } from '@/lib/site';
import { Button, Container, Display, Section, reveal } from '@/components/primitives';
import { ExpertCard } from '@/components/blocks/ExpertCard';

/** One framed plate in the hero collage: glass mat, image inset inside it. */
function Plate({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) {
  return (
    <figure className={`glass absolute overflow-hidden !rounded-[1.25rem] p-1.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full rounded-[0.9rem] object-cover"
      />
    </figure>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────
   Headline, two buttons, one line of proof. Nothing restates the headline —
   a subheading here would only say the same thing in smaller type. */
function Hero() {
  return (
    <Section className="overflow-hidden pt-10 pb-16">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Display as="h1" size="d1" className="display-hero max-w-[13ch]" {...reveal()}>
            Platform with Vetted{' '}
            <em className="not-italic text-transparent bg-gradient-to-br from-gold-lift via-gilt to-gold bg-clip-text">
              Professionals.
            </em>{' '}
            At Your Command.
          </Display>

          <div className="mt-8" {...reveal({ delay: 100 })}>
            <Button href={mailto} arrow>
              Talk to an Expert
            </Button>
          </div>
        </div>

        {/* Fixed aspect box so the absolutely-positioned plates keep their
            composition at every width. Each plate carries an explicit height —
            object-cover needs one to crop against. */}
        <div className="lg:col-span-5" {...reveal({ delay: 180 })}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[24rem]">
            <Plate
              src="/img/hero-abudhabi.jpg"
              alt="Etihad Towers, Abu Dhabi"
              width={1200}
              height={1500}
              className="top-0 right-0 h-[60%] w-[70%]"
            />
            <Plate
              src="/img/hero-skyline.jpg"
              alt="The Dubai skyline at dusk"
              width={1400}
              height={1750}
              className="bottom-[7%] left-0 h-[50%] w-[53%]"
            />
            <Plate
              src="/img/hero-riyadh.jpg"
              alt="Kingdom Centre, Riyadh, at night"
              width={1000}
              height={1000}
              className="right-[4%] bottom-0 h-[30%] w-[37%]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* The track is rendered twice and shifted by exactly half its width, so the
   loop is seamless; the second copy is hidden from screen readers. The strip
   runs outside the container — the edge fade needs the full viewport to fade
   into, not a gutter. */
function Clients() {
  return (
    <Section>
      <Container>
        <Display {...reveal()}>Trusted by the region&rsquo;s leaders</Display>
      </Container>

      <div className="mt-10 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] overflow-hidden">
        <div className="marquee">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-14 pr-14"
            >
              {clients.map((client) => (
                <li
                  key={client}
                  className="text-base tracking-[0.2em] whitespace-nowrap text-faint uppercase"
                >
                  {client}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stats() {
  return (
    <Section className="!pt-0">
      <Container>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {homeStats.map((stat, i) => (
            <div key={stat.label} className="glass px-6 py-5" {...reveal({ delay: i * 60 })}>
              <dt className="numeral numeral-fine text-[2.5rem]">{stat.value}</dt>
              <dd className="mt-2 text-sm tracking-wide text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}

/* Seven items, and the lead one takes double width: eight units, which fills a
   four-column grid exactly with no trailing gap. */
function Disciplines() {
  return (
    <Section>
      <Container>
        <Display {...reveal()}>Expertise across every function</Display>

        <div className="mt-9 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {disciplines.map((discipline, i) => (
            <article
              key={discipline.name}
              className={`glass glass-interactive flex flex-col p-6 ${i === 0 ? 'lg:col-span-2' : ''}`}
              {...reveal({ delay: (i % 3) * 70 })}
            >
              <span className="numeral text-lg">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="display mt-3 text-[length:var(--text-d3)] text-warm">
                {discipline.name}
              </h3>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted">
                {discipline.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Network() {
  return (
    <Section>
      <Container>
        <Display {...reveal()}>Meet the calibre</Display>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {directory.slice(0, 8).map((expert, i) => (
            <ExpertCard key={expert.name} expert={expert} delay={(i % 4) * 60} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* Image left, argument right. The glass plate over the photograph's corner is
   the one place the two systems are allowed to overlap, so it carries a number
   rather than a caption. */
function Deliver() {
  return (
    <Section>
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative" {...reveal()}>
          <figure className="glass overflow-hidden !rounded-[1.5rem] p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/deliver.jpg"
              alt="A glass-walled meeting room in a stone and timber office"
              width={1600}
              height={1200}
              className="w-full rounded-[1.1rem] object-cover"
            />
          </figure>

          <div className="glass glass-on-image absolute -right-3 -bottom-6 px-5 py-4 sm:-right-6">
            <p className="numeral text-[1.75rem]">98%</p>
            <p className="mt-1.5 text-xs text-muted">Client retention</p>
          </div>
        </div>

        <div>
          <Display {...reveal()}>From strategy to execution</Display>

          <ul className="mt-8 space-y-5">
            {pillars.map((pillar, i) => (
              <li
                key={pillar.title}
                className="border-l border-gold/45 pl-5"
                {...reveal({ delay: 120 + i * 80 })}
              >
                <h3 className="display text-[1.25rem] text-warm">{pillar.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/* The one light band on the site. It lands where the argument turns from who we
   are to how you engage us, and the tonal flip does that work on its own. */
function Process() {
  return (
    <Section className="on-light">
      <Container>
        <Display {...reveal()}>How it works</Display>

        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {homeSteps.map((step, i) => (
            <li key={step.number} className="relative" {...reveal({ delay: i * 100 })}>
              {/* The rule runs from each numeral to the next and stops at the
                  last — a line past the final step implies a fourth. */}
              {i < homeSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-20 hidden h-px w-[calc(100%-4.5rem)] bg-gradient-to-r from-gold/40 to-transparent md:block"
                />
              )}
              <p className="numeral text-[3.25rem]">{step.number}</p>
              <h3 className="display mt-4 text-[1.35rem] text-warm">{step.title}</h3>
              <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* One quote at a time, cycling on a 24s round. Names are withheld; the role and
   the organisation are what make a quote worth reading. CSS only — see .cycle
   in globals.css. */
function Voices() {
  return (
    <Section>
      <Container>
        <div className="cycle mx-auto mt-8 max-w-4xl" {...reveal({ delay: 80 })}>
          {testimonials.map((testimonial) => (
            <figure key={testimonial.company} className="text-center">
              <blockquote className="display text-[length:var(--text-quote)] text-warm">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                {testimonial.title} · {testimonial.company}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2" aria-hidden="true">
          {testimonials.map((testimonial) => (
            <span key={testimonial.company} className="cycle-dot" />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* Full-bleed photograph, single tuned scrim. Two stacked scrims left the
   skyline invisible; one gradient holds the type's contrast and keeps the
   picture. */
function Closing() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/cta-abudhabi.jpg"
        alt=""
        width={1920}
        height={1000}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/82 to-ink/55"
      />

      <Container className="py-20 text-center">
        <Display className="mx-auto max-w-[18ch]" {...reveal()}>
          Tell us what you need
        </Display>
        <div className="mt-8 flex justify-center" {...reveal({ delay: 150 })}>
          <Button href={mailto} arrow>
            Talk to an Expert
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Disciplines />
      <Network />
      <Deliver />
      <Process />
      <Clients />
      <Voices />
      <Closing />
    </>
  );
}
