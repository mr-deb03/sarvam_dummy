import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HERO } from "@/lib/content/homepage";
import heroImage from "@/public/image/hero-growth.jpg";
import { HeroBackdrop } from "./HeroVisual";

/**
 * Homepage hero — headline and calls to action beside a photograph.
 *
 * Ivory rather than dark: warm neutral is the dominant ground in this design
 * language, and a dark hero would push the palette's 20% dark share into the
 * first screen.
 *
 * The <h1> is plain server-rendered markup at full opacity — never wrapped in
 * a motion component. An LCP element that starts at opacity 0 is not counted
 * as painted until hydration runs, which pushes LCP by hundreds of
 * milliseconds. The photo is the likely LCP element on desktop, so it is
 * preloaded.
 *
 * The photo says growth without saying a number: a seedling coming up through
 * a pile of coins. Deliberately not a chart — a rising line beside the
 * headline reads as a return claim — and the coins show no legible
 * denomination. Photo by micheile henderson on Unsplash, Unsplash License —
 * unsplash.com/photos/lZ_4nPFKcV8. To use a different photo, replace
 * public/image/hero-growth.jpg; any aspect works, since it is cropped to the
 * frame.
 */
export function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden">
      <HeroBackdrop />

      <div className="container-page relative z-2 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <Eyebrow className="mb-8">{HERO.eyebrow}</Eyebrow>

            <h1 className="font-display text-display-lg text-navy">
              <span className="block italic">{HERO.headlineLead}</span>
              <span className="block">{HERO.headlineTail}</span>
            </h1>

            <p className="text-body-lg text-body measure mt-8">
              {HERO.subhead}
            </p>
            <p className="text-muted mt-5 flex items-center gap-3 text-sm">
              <span
                aria-hidden
                className="bg-accent size-1.5 shrink-0 rounded-full"
              />
              {HERO.trustLine}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href={HERO.primaryCta.href} size="lg" withArrow>
                {HERO.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={HERO.secondaryCta.href}
                variant="tertiary"
                size="lg"
                withArrow
              >
                {HERO.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          {/* Landscape on phones and tablets, portrait beside the text on
              desktop. The seedling sits left of centre in the original, so
              the focal point is pulled left to keep it in the portrait crop. */}
          <div className="rounded-panel bg-mist relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[4/5]">
            <Image
              src={heroImage}
              alt="A green seedling growing out of a pile of coins"
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1280px) 460px, (min-width: 1024px) 38vw, 100vw"
              className="object-cover object-[12%_50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
