import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { COMPANY, REGISTRATIONS } from "@/lib/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Policies & Regulatory Disclosures",
  description:
    "How Sarvam Associates is registered, how it is paid, the AMFI code of conduct it works under, how to raise a complaint, and how your data is handled.",
  path: "/policies",
});

/*
   Sources, so each statement can be traced and re-checked when rules change:

   - AMFI Master Circular for Mutual Fund Distributors, AMFI/MFD-CIR/32/2025-26
     dated 14 Jan 2026 — tagline (1.3.6), naming (1.3), and the Code of
     Conduct in Chapter 7: fiduciary duty 1(a)–(e), confidentiality 2(f),
     commission disclosure 4(c), affiliated funds 4(d), Regular Plans 4(f),
     no indicative returns 4(g), application forms 4(i), complaints 4(j).
   - AMFI "FAQs on Do's & Don'ts for MFDs" — distributors may give only
     incidental advice; financial planning is reserved to SEBI-registered
     investment advisers (Q2–Q3).
   - SEBI circular SEBI/HO/IMD/IMD-PoD-1/CIR/2024/32 (2 May 2024) — PMS
     distributors must be registered with APMI from 1 Jan 2025.
   - Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025.

   Commitments on this page restate obligations the practice already has
   under that code. Anything beyond them — a response time for complaints,
   for instance — is the practice's to set, and is deliberately not invented
   here.
*/

const registrationParagraphs = [
  `${COMPANY.legalName} — ${REGISTRATIONS.mfdTagline}${
    REGISTRATIONS.hasArn ? `, ${REGISTRATIONS.arn}` : ""
  }.`,
  "Product providers — asset management companies, portfolio managers, issuers and insurers — manufacture and issue the products. We distribute them as an authorised distribution partner; we do not manage any portfolio and do not issue any product.",
  ...(REGISTRATIONS.hasAprn
    ? [
        `Portfolio Management Services are distributed under APMI registration ${REGISTRATIONS.aprn}.`,
      ]
    : []),
  ...(REGISTRATIONS.hasIrdai
    ? [
        `Insurance is offered as ${REGISTRATIONS.irdai.category}, IRDAI registration ${REGISTRATIONS.irdai.registration}.`,
      ]
    : []),
  "We are not registered with SEBI as an Investment Adviser. When we suggest a mutual fund scheme, the suggestion is incidental to distributing it: it is limited to the schemes we distribute, and based on your risk profile and how well the scheme suits your goal. We do not offer investment advice or financial planning in the sense the SEBI (Investment Advisers) Regulations, 2013 use those terms.",
];

const SECTIONS: LegalSection[] = [
  {
    heading: "How we are registered",
    paragraphs: registrationParagraphs,
    links: [
      { label: "Check a distributor on AMFI", href: "https://www.amfiindia.com" },
      { label: "SEBI", href: "https://www.sebi.gov.in" },
    ],
  },
  {
    heading: "How we are paid",
    paragraphs: [
      "For mutual funds, we are paid trail commission by the asset management company (AMC) whose scheme you invest in. It comes out of the scheme's expenses, which is why the Regular Plan of a scheme — the plan you hold when you invest through a distributor — has a higher expense ratio than its Direct Plan.",
      "Distributors cannot deal in Direct Plans, so every mutual fund investment made through us is in a Regular Plan. If you would rather hold a Direct Plan, you can invest in it yourself, directly with the AMC.",
      "Before we recommend a scheme, we tell you the commission we would receive on it and on the competing schemes we considered. Ask at any point and we will tell you again.",
      "For other products — portfolio management services, alternative investment funds, bonds and insurance — we are paid by the product provider, and we tell you what we will receive before you invest.",
      "We never pass commission back to you as a rebate, and we do not offer gifts or other inducements to invest.",
      "We distribute the schemes of the mutual funds we are empanelled with, and the list is available on request. What we can tell you is limited to the products we distribute; you are free to consider products we do not offer before you decide.",
    ],
  },
  {
    heading: "Our code of conduct",
    paragraphs: [
      "As an AMFI-registered distributor we are bound by AMFI's Code of Conduct for Mutual Fund Distributors. In practice, that means:",
    ],
    bullets: [
      "Your interest comes first. A product is recommended because it suits you, never because of what it pays us.",
      "We understand your financial position, experience and objectives before recommending a scheme, and keep a record of that assessment.",
      "We point out each scheme's risk factors and ask you to read its Scheme Information Document, Statement of Additional Information and Key Information Memorandum before you invest.",
      "We do not quote an expected or indicative return for any mutual fund scheme, and never promise one. Mutual fund investments can fall in value, including the amount you put in.",
      "We do not encourage frequent switching to earn more commission, and we do not split applications.",
      "Your application forms carry your own contact details. We never enter ours in their place.",
      "Your information stays confidential: it is used to serve you, disclosed only where the law requires, and never shared with group companies for cross-marketing.",
      "Where a conflict of interest cannot be avoided, we tell you about it.",
    ],
  },
  {
    heading: "If you have a complaint",
    paragraphs: [
      `Write to us first, at ${COMPANY.email} or ${COMPANY.addressLines.join(", ")}. Tell us what happened, which product or scheme it concerns, and any folio or reference number. We acknowledge every complaint, keep a record of it until it is resolved, and help you take it up with the product provider where the issue lies with them.`,
      "If you are not satisfied with the outcome, you can escalate:",
    ],
    bullets: [
      "Mutual funds — the AMC's investor service team. Contact details are in the scheme documents and on the AMC's website.",
      "SEBI SCORES — SEBI's online complaints system, for complaints about mutual funds and portfolio management services that the entity concerned has not resolved.",
      "SMART ODR — the online dispute resolution portal for the Indian securities market, offering conciliation and, if needed, arbitration.",
      "Insurance — the insurer's grievance officer first, then IRDAI's Bima Bharosa portal or the Insurance Ombudsman.",
    ],
    links: [
      { label: "SEBI SCORES", href: "https://scores.sebi.gov.in" },
      { label: "SMART ODR", href: "https://smartodr.in" },
      { label: "Bima Bharosa", href: "https://bimabharosa.irdai.gov.in" },
      { label: "Insurance Ombudsman", href: "https://www.cioins.co.in" },
    ],
  },
  {
    heading: "Protecting yourself",
    bullets: [
      "Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.",
      "No market-linked product can promise a return. Treat anyone who promises one with suspicion.",
      "Your money always goes to the mutual fund, product provider or insurer — never to Sarvam Associates or to any individual, and never in cash.",
      "KYC is done once, through a SEBI-registered KYC Registration Agency, and then applies across mutual funds.",
      "We will never ask for an OTP, PIN, password or card details — not by phone, email, WhatsApp or this website.",
      "Check any distributor's registration on AMFI's website before you invest through them.",
    ],
  },
  {
    heading: "Privacy, data protection and cookies",
    paragraphs: [
      "We handle personal data under the Digital Personal Data Protection Act, 2023. What we collect, why, who processes it for us and how to exercise your rights is set out in our Privacy Policy.",
      "This website sets only these cookies:",
    ],
    bullets: [
      "sa_plan — set when you verify your mobile number to open a plan you generated, so you can come back to it. Expires after 7 days.",
      "sa_admin — set only for the practice's own staff when they sign in to the admin panel. Expires after 8 hours.",
      "Google Analytics (_ga and _ga_…) — counts visits in aggregate. Never loaded on the admin panel or on a generated plan.",
      "No advertising cookies, and nothing that follows you to other websites.",
    ],
    links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
  },
  {
    heading: "Our other policies",
    paragraphs: [
      `These policies are reviewed when the rules behind them change. Questions about any of them: ${COMPANY.email}.`,
    ],
    links: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <LegalPage
      title="Policies and regulatory disclosures"
      intro="How we are registered, how we are paid, the rules we work under, and what to do if something goes wrong — in plain language."
      crumb="Policies"
      path="/policies"
      updated="October 2026"
      toc
      sections={SECTIONS}
    />
  );
}
