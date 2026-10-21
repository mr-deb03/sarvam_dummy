import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS } from "@/lib/content/homepage";

/**
 * The four steps, titles only.
 *
 * The homepage only needs to show that there is a short, known path. What each
 * step involves — and what we ask for — is on /how-it-works, which carries the
 * full ProcessTimeline.
 */
export function ProcessStrip() {
  return (
    <section className="section-sm">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title="Four steps, no surprises."
            size="md"
            action={
              <ButtonLink href="/how-it-works" variant="secondary" withArrow>
                See each step
              </ButtonLink>
            }
          />
        </Reveal>

        <Reveal preset="stagger" className="mt-10">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <RevealItem
                key={step.step}
                as="li"
                className="border-line rounded-card flex items-center gap-4 border p-5"
              >
                <span
                  aria-hidden
                  className="border-accent/50 text-accent-ink rounded-pill grid size-9 shrink-0 place-items-center border text-xs tabular-nums"
                >
                  {String(step.step).padStart(2, "0")}
                </span>
                <span className="font-display text-navy font-semibold">
                  {step.title}
                </span>
              </RevealItem>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
