import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "What Sarvam Associates collects through this website, why, who processes it, how long we keep it, your rights under the DPDP Act, and what we deliberately do not ask for.",
  path: "/privacy-policy",
});

/*
   Every item under "What we collect" is checked against the code that
   collects it: the consultation form (lib/forms), the planner schema
   (lib/plan/schema.ts), the OTP flow (lib/plan/otp.ts, lib/plan/sms.ts) and
   the analytics tag (components/seo/Analytics.tsx). Adding a field to any of
   those without updating this page makes the page untrue.

   Written to the Digital Personal Data Protection Act, 2023. The DPDP Rules,
   2025 bring the detailed notice requirements (Rule 3) into force 18 months
   after their November 2025 notification.
*/

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What this website collects, why, who handles it for us, and what it deliberately does not ask for."
      crumb="Privacy Policy"
      path="/privacy-policy"
      updated="October 2026"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${COMPANY.legalName}, ${COMPANY.addressLines.join(", ")}. We decide why and how the personal data collected through this website is used, which makes us its data fiduciary under the Digital Personal Data Protection Act, 2023.`,
          ],
        },
        {
          heading: "What we collect",
          paragraphs: [
            "Only what you give us, through two forms.",
            "The consultation form asks for:",
          ],
          bullets: [
            "Your name, mobile number and email address",
            "The area you'd like to discuss, your preferred contact method and callback time",
            "Anything you choose to write in the optional message box",
          ],
        },
        {
          heading: "If you use the financial plan tool",
          paragraphs: [
            "Building a plan needs more, because the plan is calculated from it:",
          ],
          bullets: [
            "Your name, date of birth, gender, marital status, email address and mobile number",
            "Your household income and monthly expenses",
            "Your goals — what each would cost today, when you need it, and what is already set aside for it",
            "Your loans, and your savings and investments by type and value",
            "Your risk profile, the inflation and return rates you choose, and whether you'd like help with a will or an insurance review",
          ],
        },
        {
          heading: "What we deliberately do not collect",
          paragraphs: [
            "This website never asks for your PAN, Aadhaar number, bank account or card details, folio or demat account numbers, or any password.",
            "Where identity verification is genuinely required — for account opening and KYC — it happens through regulated channels run by the product provider or registrar, never through a form on this website, and never over email or a messaging app. If anyone claiming to represent us asks for those details through this site, an email or WhatsApp, do not provide them and contact us directly.",
          ],
        },
        {
          heading: "Why we use it",
          bullets: [
            "To respond to your enquiry — to call or email you back about the consultation you requested.",
            "To calculate your plan, and so that someone from the practice can discuss it with you.",
            "To send a one-time code to your mobile number, so that only you can open your plan.",
            "To understand, in aggregate, how the website is used.",
          ],
          paragraphs: [
            "We do not add your details to a marketing list, and we do not send unsolicited campaigns to people who asked a question.",
          ],
        },
        {
          heading: "Consent",
          paragraphs: [
            "The plan tool asks for your consent before anything is saved. You can withdraw it at any time by emailing us; we will then delete what you gave us, except anything the law requires us to keep.",
          ],
        },
        {
          heading: "Who handles it for us",
          paragraphs: [
            "A small number of service providers process data on our behalf, only to run this website:",
          ],
          bullets: [
            "The hosting and database providers that run this website and store submissions",
            "The email provider that delivers enquiries to our inbox",
            "The SMS provider that sends your verification code",
            "Google, for aggregate website analytics",
          ],
        },
        {
          heading: "Who we share it with",
          paragraphs: [
            "Nobody else. We do not sell, rent or trade personal data, and we do not pass your details to any product provider unless and until you decide to invest and ask us to proceed.",
            "Some of our service providers may store data outside India.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "Enquiries and plans are kept only as long as we need them to respond to you and keep a reasonable record of the conversation. If you ask us to delete yours, we will.",
            "Verification codes expire after 10 minutes. Where you become a client, records are kept for the periods the law and regulators require, which are longer and are not within our discretion.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Under the Digital Personal Data Protection Act, 2023 you can:",
          ],
          bullets: [
            "Ask for a summary of the personal data we hold about you and how we use it",
            "Ask us to correct, complete or update it",
            "Ask us to erase it, unless the law requires us to keep it",
            "Withdraw your consent",
            "Nominate someone to exercise these rights for you in the event of your death or incapacity",
            "Have a grievance about how we handle your data addressed",
          ],
        },
        {
          heading: "How to exercise them",
          paragraphs: [
            `Email ${COMPANY.email}, or write to ${COMPANY.addressLines.join(", ")}. If you are not satisfied with our response to a grievance, you can complain to the Data Protection Board of India.`,
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "This website uses a few essential cookies and Google Analytics. It does not use advertising cookies and does not track you across other websites.",
          ],
          links: [
            {
              label: "The cookies we set",
              href: "/policies#privacy-data-protection-and-cookies",
            },
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "This website is served over HTTPS, so what you submit is encrypted in transit, and submissions can be seen only by the practice's own staff, behind a password. No system is perfectly secure, which is another reason this site never asks for financial account or identity documents.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "The plan tool is for adults — it only accepts a date of birth of 18 or over — and this website is not directed at children.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about this policy: ${COMPANY.email}, or write to us at ${COMPANY.addressLines.join(", ")}.`,
          ],
        },
      ]}
    />
  );
}
