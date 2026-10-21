import type { Pillar, ProcessStep, Stat } from "./types";
import { COMPANY } from "./company";

/* ==========================================================================
   Homepage copy.

   Copy here follows the August 2026 revision document, which rewrote the hero,
   the three pillars and the four process steps against the original mockup.
   Where a rewritten line could not ship as written, the correction is applied
   and the original preserved in a comment directly above it.
   ========================================================================== */

export const HERO = {
  // Positioning rather than the company name — the wordmark already sits
  // directly above this in the header, so repeating it wastes the line.
  eyebrow: "Tax · Wealth · Protection · Mumbai",

  // Headline, replaced at the client's request (Oct 2026). The lead line is
  // set in italic, the tail in roman.
  //
  // History: the mockup's "Ab FD se zyada kamao — without the risk" shipped
  // as "…without the guesswork", because "without the risk" is an absolute
  // risk-free claim that brief §42 prohibits. Whatever replaces this line must
  // not reintroduce a return or safety promise — `npm run check:claims`
  // guards the worst of that wording.
  headlineLead: "Every rupee,",
  headlineTail: "planned with purpose.",

  // Verbatim from the revision document.
  subhead:
    "15+ years of helping individuals manage their money — now Sarvam Associates brings you premium investment solutions built for those who want better returns than a fixed deposit offers.",

  // Revision document: replaces the original "IN PARTNERSHIP WITH" line.
  trustLine: "Trusted by 500+ investors across Mumbai",

  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Solutions", href: "/investments" },
} as const;

/* --------------------------------------------------------------------------
   Trust strip.

   The mockup's fourth chip, "Nuvama Authorised Distribution Partner", is not
   shown — removed at the client's request (Oct 2026). Nuvama is now named
   only on the product pages of the products it issues.

   The mockup's "SEBI Registered Investment Advisor" chip is NOT retained.
   Sarvam operates as an AMFI-registered distributor; see REGISTRATIONS in
   ./company.ts for why the two cannot both be claimed.
   -------------------------------------------------------------------------- */

export const TRUST_CHIPS: { icon: string; strong: string; rest: string }[] = [
  {
    icon: "Award",
    strong: "15+ years",
    rest: "of tax, compliance and financial advisory",
  },
  {
    icon: "Users",
    strong: "500+ investors",
    rest: "across Mumbai",
  },
  {
    icon: "MapPin",
    strong: "Bhandup (West)",
    rest: "— a practice you can walk into",
  },
];

/* --------------------------------------------------------------------------
   Planning tools — the two self-serve pages, as cards on the homepage.

   Each line is taken from that page's own meta description, so a card never
   promises more than the page it opens.
   -------------------------------------------------------------------------- */

export const PLANNING_TOOLS: {
  href: string;
  icon: string;
  title: string;
  line: string;
  cta: string;
}[] = [
  {
    href: "/financial-plan",
    icon: "ClipboardList",
    title: "Build your financial plan",
    line: "Map your income, goals and holdings into a free illustrative plan in about ten minutes.",
    cta: "Start your plan",
  },
  {
    href: "/calculators",
    icon: "Calculator",
    title: "SIP & lump-sum calculator",
    line: "An illustration of how monthly or one-time investments compound at an assumed rate.",
    cta: "Open the calculator",
  },
];

/* --------------------------------------------------------------------------
   Why Sarvam — three pillars, verbatim from the revision document. Shown on
   /about.
   -------------------------------------------------------------------------- */

export const PILLARS: Pillar[] = [
  {
    index: 1,
    title: "One financial picture",
    // Verbatim from the revision document.
    description:
      "From ITR filing to SIP investing to PMS — one advisor who actually knows your full financial picture, not just one piece of it.",
  },
  {
    index: 2,
    title: "Institutional-grade access",
    // Verbatim from the revision document.
    description:
      "Institutional-grade investment products — available to you with the personal touch of a boutique advisor.",
  },
  {
    index: 3,
    title: "Advice you can audit",
    // SOURCE CORRECTION.
    // Revision document wording:
    //   "No commissions driving our advice. No products pushed just to hit a
    //    target. Just recommendations that actually serve you."
    // The first sentence is incompatible with the AMFI-distributor model the
    // user confirmed: distribution revenue IS trail commission. Claiming
    // otherwise while earning it is a live mis-selling exposure. The rewrite
    // keeps the intent — no target-driven selling — and replaces the false
    // claim with a disclosure commitment, which is both true and stronger.
    description:
      "No product pushed to hit a target. We tell you how we're paid, and we recommend what actually fits your goals — including when that means recommending nothing at all.",
  },
];

/* --------------------------------------------------------------------------
   Process — four steps, verbatim from the revision document
   -------------------------------------------------------------------------- */

export const PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "A 15-minute call with our wealth advisor where we get to know your goals, timeline, and what you're already invested in.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Personalised Plan",
    description:
      "We build a wealth strategy tailored to you using the right products for your profile.",
    icon: "PenLine",
  },
  {
    step: 3,
    title: "Seamless Onboarding",
    description:
      "We handle all the paperwork. Digital KYC, account setup — you're investing within days.",
    icon: "FileCheck",
  },
  {
    step: 4,
    title: "Ongoing Review",
    description:
      "Quarterly check-ins, annual rebalancing, and a direct line to your advisor whenever markets get interesting.",
    icon: "RefreshCw",
  },
];

/*
   Sarvam's own metrics, shown on /about.

   The mockup's "₹1Cr+ Assets Guided" figure is deliberately absent. It is
   internally inconsistent (₹1 Cr across "500+ investors" is ~₹20k each), so it
   is dropped rather than displayed.
*/
export const SARVAM_METRICS: Stat[] = [
  {
    id: "years",
    value: COMPANY.foundedYearsAgo,
    suffix: "+",
    label: "Years of financial advisory",
  },
  {
    id: "clients",
    value: 500,
    suffix: "+",
    label: "Investors across Mumbai",
  },
];

/* --------------------------------------------------------------------------
   CA services now have real pages on this site, built from the practice own
   copy. The data lives in ./services; re-exported here so existing imports
   keep resolving.
   -------------------------------------------------------------------------- */

export { SERVICES } from "./services";
