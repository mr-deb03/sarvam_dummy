import { CtaSection } from "@/components/sections/CtaSection";
import { Hero } from "@/components/sections/Hero";
import { Offerings } from "@/components/sections/Offerings";
import { ProcessStrip } from "@/components/sections/ProcessStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WebSiteJsonLd } from "@/components/seo/JsonLd";
import { VERIFIED_TESTIMONIALS } from "@/lib/content/testimonials";

/**
 * Client stories stay off the page until real, consented quotes exist. Setting
 * `placeholder: false` on an entry in the content file brings the section back.
 */
const SHOW_TESTIMONIALS = VERIFIED_TESTIMONIALS.length > 0;

export default function HomePage() {
  return (
    <>
      <WebSiteJsonLd />

      {/* Deliberately short: who we are, what we offer, how it starts. Each
          card opens the full detail, so none of it has to be read here. */}
      <Hero />
      <TrustStrip />
      <Offerings />
      <ProcessStrip />
      {SHOW_TESTIMONIALS && <Testimonials />}

      <CtaSection secondary={{ label: "Explore solutions", href: "/investments" }} />
    </>
  );
}
