import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Internal paths open in place; anything else opens in a new tab. */
  links?: { label: string; href: string }[];
}

/** Stable anchor for a section, so other pages can link to it. */
export function sectionId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Shared shell for the legal pages.
 *
 * Body copy is set at full body size on a narrow measure. Legal text that
 * nobody can read is not disclosure, and brief §47 calls out tiny disclaimer
 * text specifically.
 */
export function LegalPage({
  title,
  intro,
  sections,
  updated,
  crumb,
  path,
  footer,
  toc = false,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  updated: string;
  crumb: string;
  path: string;
  footer?: ReactNode;
  /** List the sections as anchor links above the body. For long pages. */
  toc?: boolean;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: crumb, path },
        ]}
      />

      <PageHero
        eyebrow="Legal"
        title={title}
        lede={intro}
        crumbs={[{ label: crumb }]}
      />

      <section className="bg-paper section-sm">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="text-muted border-line mb-10 border-b pb-6 text-xs tracking-[0.08em] uppercase">
              Last updated {updated}
            </p>

            {toc && (
              <nav
                aria-label="On this page"
                className="border-line bg-mist rounded-card mb-12 border p-6"
              >
                <p className="text-eyebrow text-muted mb-4 uppercase">
                  On this page
                </p>
                <ol className="grid gap-2 sm:grid-cols-2">
                  {sections.map((section) => (
                    <li key={section.heading}>
                      <a
                        href={`#${sectionId(section.heading)}`}
                        className="link-underline text-navy text-sm"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  key={section.heading}
                  id={sectionId(section.heading)}
                  className="scroll-mt-28"
                >
                  <h2 className="font-display text-navy text-xl font-semibold lg:text-2xl">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-body mt-4 text-sm leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-body flex gap-3 text-sm leading-relaxed"
                        >
                          <span
                            aria-hidden
                            className="bg-muted/60 mt-2.5 size-1 shrink-0 rounded-full"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.links && (
                    <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          {link.href.startsWith("/") ? (
                            <Link
                              href={link.href}
                              className="link-underline text-accent-ink text-sm font-medium"
                            >
                              {link.label}
                            </Link>
                          ) : (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link-underline text-accent-ink inline-flex items-center gap-1 text-sm font-medium"
                            >
                              {link.label}
                              <ArrowUpRight
                                aria-hidden
                                strokeWidth={1.75}
                                className="size-3.5"
                              />
                              <span className="sr-only">
                                (opens in a new tab)
                              </span>
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {footer && <div className="mt-12">{footer}</div>}
          </div>
        </div>
      </section>
    </>
  );
}
