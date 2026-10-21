/* ==========================================================================
   Company facts — the single source for NAP (name / address / phone).

   The footer, the contact page and the JSON-LD LocalBusiness node all read
   from here, so the three can never disagree. NAP consistency is the single
   highest-leverage local-SEO factor for a Bhandup practice competing on
   "CA near me", and three hand-typed copies of an address always drift.
   ========================================================================== */

export const COMPANY = {
  name: "Sarvam Associates",
  /** Sub-brand used for the wealth arm in the source material. */
  wealthBrand: "Sarvam Wealth",
  legalName: "Sarvam Associates",

  tagline: "Tax, compliance and wealth — under one roof.",
  foundedYearsAgo: 15,

  email: "info@sarvamassociates.com",

  /**
   * NOT PRESENT IN ANY SOURCE FILE.
   *
   * All three source documents give only the email address. Brief §25 requires
   * a phone number in the consultation section, and JSON-LD LocalBusiness wants
   * `telephone`. Until this is supplied, contact surfaces render email-only and
   * the schema node omits `telephone` rather than inventing one.
   */
  phone: null as string | null,

  address: {
    line1: "1/2, Om Shiv Premises",
    line2: "J.M. Road",
    locality: "Bhandup (West)",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400078",
    country: "IN",
  },

  /** Formatted once, reused everywhere. */
  get addressLines(): string[] {
    const a = this.address;
    return [
      `${a.line1}, ${a.line2}`,
      `${a.locality}, ${a.city} — ${a.postalCode}`,
    ];
  },

  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/SarvamAssociates/",
      icon: "Facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/Sarvam.Associates/",
      icon: "Instagram",
    },
    {
      name: "LinkedIn",
      // Handle reproduced verbatim from the source. NOTE the transposition in
      // the client's own slug: "assoicates", not "associates". This is the live
      // URL so it must not be "corrected" here, but it is worth them fixing on
      // LinkedIn — a wrong sameAs breaks search-entity reconciliation.
      href: "https://www.linkedin.com/company/sarvam-assoicates/",
      icon: "Linkedin",
    },
  ],

  /** The existing practice site the CA services link out to. */
  legacySite: "https://sarvamassociates.com",
} as const;

/* ==========================================================================
   Regulatory identity

   The user confirmed Sarvam operates as an AMFI-registered mutual fund
   DISTRIBUTOR. All "SEBI Registered Investment Advisor" wording that appeared
   in the source mockups has been removed site-wide: an entity cannot generally
   be both a fee-charging RIA and a commission-earning distributor, and no RIA
   registration number exists in any source document.
   ========================================================================== */

export const REGISTRATIONS = {
  /**
   * REQUIRED BEFORE LAUNCH — currently a placeholder.
   *
   * AMFI requires the ARN to appear on distributor marketing material. It is
   * absent from all three source files. `hasArn` below is false while this
   * remains a placeholder, and every surface that would print it renders
   * nothing rather than printing "ARN-XXXXXX" to the public.
   */
  arn: "ARN-XXXXXX",

  /** Guards public rendering of the ARN until a real value is supplied. */
  get hasArn(): boolean {
    return !this.arn.includes("XXXXXX");
  },

  /**
   * The tagline AMFI requires beside an MFD's name in every form of
   * communication, websites included (AMFI Master Circular for MFDs,
   * 14 Jan 2026, para 1.3.6 and Code of Conduct 5(g)). Exact wording.
   */
  mfdTagline: "AMFI-registered Mutual Fund Distributor",

  /**
   * REQUIRED BEFORE LAUNCH — placeholder. APMI registration number (APRN).
   * Since 1 Jan 2025 SEBI requires anyone distributing PMS to be registered
   * with APMI (SEBI circular SEBI/HO/IMD/IMD-PoD-1/CIR/2024/32). The site
   * lists PMS products, so this must be held. Hidden until supplied.
   */
  aprn: "APRN-XXXXXX",

  get hasAprn(): boolean {
    return !this.aprn.includes("XXXXXX");
  },

  /**
   * REQUIRED BEFORE LAUNCH — placeholder. The IRDAI registration under which
   * insurance is solicited, and its category (e.g. corporate agent, broker,
   * POSP). Hidden until supplied.
   */
  irdai: { category: "XXXXXX", registration: "XXXXXX" },

  get hasIrdai(): boolean {
    return (
      !this.irdai.category.includes("XXXXXX") &&
      !this.irdai.registration.includes("XXXXXX")
    );
  },

  /** How Sarvam describes its own role. Used in the footer and product pages. */
  roleStatement:
    "Sarvam Associates is an AMFI-registered mutual fund distributor and an authorised distribution partner for the investment products shown on this site.",
} as const;

/* ==========================================================================
   Institutional partner

   Named ONLY on the product pages of the products it issues — through the
   `nuvama-facilitation` disclaimer and the product's structured data. The
   client asked (Oct 2026) for the name to be removed everywhere else; site-
   wide copy speaks of "product providers" instead.

   The distinction below is the compliance-critical part: Nuvama MANUFACTURES
   and issues the products; Sarvam DISTRIBUTES them. Wherever the name does
   appear, the two must never be blurred.
   ========================================================================== */

export const PARTNER = {
  name: "Nuvama Wealth",
  legalName: "Nuvama Wealth Management Ltd",
  role: "Product manufacturer and platform",
  sarvamRole: "Authorised distribution partner",
} as const;

export type Company = typeof COMPANY;
