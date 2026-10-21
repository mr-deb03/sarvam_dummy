import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getProductsByCategory } from "@/lib/content";
import { CATEGORIES } from "@/lib/content/categories";
import { formatMinimum } from "@/lib/content/display";
import { PLANNING_TOOLS } from "@/lib/content/homepage";
import { SERVICES, serviceHref } from "@/lib/content/services";
import { cn } from "@/lib/utils";

/**
 * Everything the practice offers, as one grid of cards.
 *
 * The homepage is the short version of the site: one card per offering, one
 * line each, and the detail left to the page the card opens. Three groups —
 * services, investment solutions, planning tools — so a visitor can find
 * their own need without reading anyone else's.
 *
 * The facilitation disclaimer sits directly under the investment cards. The
 * full "who does what" split lives on /about; this keeps the distributor /
 * manufacturer roles stated on the homepage too. It is the generic platform
 * wording: the partner is named only on its own product pages.
 */
export function Offerings() {
  return (
    <section id="services" className="bg-mist section scroll-mt-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="What we do"
            title="Tax, investments and planning — under one roof."
            size="md"
          />
        </Reveal>

        <OfferingGroup
          title="Services"
          link={{ label: "All services", href: "/services" }}
          gridClassName="sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <OfferingCard
              key={service.slug}
              href={serviceHref(service.slug)}
              icon={service.icon}
              title={service.name}
              line={service.description}
              footer="Read more"
            />
          ))}
        </OfferingGroup>

        <OfferingGroup
          title="Investment solutions"
          link={{ label: "Compare all solutions", href: "/investments" }}
          gridClassName="sm:grid-cols-2 lg:grid-cols-3"
          after={<Disclaimer ids={["platform-facilitation"]} className="mt-6" />}
        >
          {CATEGORIES.map((category) => {
            const cheapest = getProductsByCategory(category.slug)
              .map((p) => p.minInvestment)
              .filter((m) => m !== null)
              .sort((a, b) => a.amount - b.amount)[0];

            return (
              <OfferingCard
                key={category.slug}
                href={`/investments/${category.slug}`}
                icon={category.icon}
                title={category.name}
                line={category.tagline}
                footer={
                  cheapest ? (
                    <>
                      From{" "}
                      <span className="text-navy font-semibold">
                        {formatMinimum(cheapest)}
                      </span>
                    </>
                  ) : (
                    <span className="text-navy font-semibold">On enquiry</span>
                  )
                }
              />
            );
          })}
        </OfferingGroup>

        <OfferingGroup
          title="Planning tools"
          gridClassName="sm:grid-cols-2"
        >
          {PLANNING_TOOLS.map((tool) => (
            <OfferingCard
              key={tool.href}
              href={tool.href}
              icon={tool.icon}
              title={tool.title}
              line={tool.line}
              footer={tool.cta}
            />
          ))}
        </OfferingGroup>
      </div>
    </section>
  );
}

function OfferingGroup({
  title,
  link,
  gridClassName,
  after,
  children,
}: {
  title: string;
  link?: { label: string; href: string };
  gridClassName: string;
  after?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mt-14 lg:mt-16">
      <Reveal className="border-line mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b pb-4">
        <h3 className="text-eyebrow text-navy uppercase">{title}</h3>
        {link && (
          <Link
            href={link.href}
            className="link-underline text-accent-ink text-sm font-medium"
          >
            {link.label}
          </Link>
        )}
      </Reveal>

      <Reveal preset="stagger">
        <ul className={cn("grid gap-4", gridClassName)}>{children}</ul>
      </Reveal>

      {after}
    </div>
  );
}

function OfferingCard({
  href,
  icon,
  title,
  line,
  footer,
}: {
  href: string;
  icon: string;
  title: string;
  line: string;
  footer: ReactNode;
}) {
  return (
    <RevealItem as="li">
      <Link
        href={href}
        className="group border-line bg-card rounded-card hover:border-navy/25 flex h-full flex-col border p-6 transition-[border-color,transform] duration-400 ease-[var(--ease-editorial)] hover:-translate-y-0.5"
      >
        <CategoryIcon name={icon} className="text-navy size-5" />

        <h4 className="font-display text-card-title text-navy mt-5">
          {title}
        </h4>
        <p className="text-body mt-2 mb-6 text-sm">{line}</p>

        <div className="border-line mt-auto flex items-center justify-between border-t pt-4">
          <span className="text-muted text-xs">{footer}</span>
          <ArrowRight
            aria-hidden
            strokeWidth={1.75}
            className="text-muted group-hover:text-navy size-4 transition-all duration-400 ease-[var(--ease-editorial)] group-hover:translate-x-1"
          />
        </div>
      </Link>
    </RevealItem>
  );
}
