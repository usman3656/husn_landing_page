import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use: Husn",
  description:
    "The terms that apply when you visit the Husn website, request a demo, or use the Husn service.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main
      id="main"
      className="max-w-3xl mx-auto px-6 py-16 text-ink prose-tight"
    >
      <div className="mb-8 text-sm">
        <Link
          href="/"
          className="text-ink-muted hover:text-ink underline underline-offset-4"
        >
          &larr; Back to home
        </Link>
      </div>

      <header className="mb-10 border-b border-ink/10 pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
          Terms of Use
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: 2026-05-16</p>
      </header>

      <section className="space-y-4 text-ink-muted leading-relaxed">
        <p>
          These terms cover your use of the Husn landing page at
          husn.io, joining the waitlist, and booking a founder call. There
          is no Husn product yet, so these terms are intentionally light.
          When we launch a product, there will be a separate, fuller agreement.
          Questions:{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          1. Who these terms are with
        </h2>
        <p>
          By using this site, you are entering an agreement with Husn
          (&ldquo;Husn&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). If you
          are using the site on behalf of a company, you confirm you have
          authority to do so on its behalf.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          2. What this site is and isn&rsquo;t
        </h2>
        <p>
          The Husn landing page is informational. It describes what we are
          working on and lets you join a waitlist or book a call. It does not
          provide a service, deliverable, or guarantee of future access.
          Nothing on the page constitutes a contract to deliver software, a
          subscription, a promise to launch on a particular date, or
          investment advice.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          3. Using the site
        </h2>
        <p>
          You agree to use the site lawfully and not to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Submit information that is false, someone else&rsquo;s, or
            misleading.
          </li>
          <li>
            Try to interfere with the site, probe it for vulnerabilities
            without permission, or scrape it at volume.
          </li>
          <li>
            Use the site to send unsolicited messages, malware, or otherwise
            abusive content.
          </li>
          <li>
            Misrepresent your affiliation with Husn or imply we endorse you.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-ink mt-10">
          4. Demo requests, early-access signups, and pilots
        </h2>
        <p>
          When you book a demo, sign up for early access, or start a pilot,
          you&rsquo;re telling us you&rsquo;d like to hear from us. We may
          follow up by email, invite you to a call, or share occasional
          product updates. You can opt out any time by replying to any email
          or writing to{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          . Free pilots are time-boxed (typically 14 days) and convert to a
          paid plan only with your explicit agreement, we will not
          auto-charge you.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          5. Confidentiality of founder calls
        </h2>
        <p>
          During founder calls we will sometimes share early ideas, mockups,
          and roadmap thinking. Please treat that material as confidential and
          do not share it externally. In return, anything you share with us
          about your team, processes, or pain points we treat as confidential
          and use only to inform product research. We will not quote you
          publicly without your permission.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          6. Intellectual property
        </h2>
        <p>
          The Husn name, logo, copy, and visual design on this site are
          ours. You may reference us in normal commentary, link to the site,
          or share a screenshot in context. You may not republish substantial
          portions of the site or use our branding to imply partnership.
          Feedback you give us is not confidential to you: if you tell us
          &ldquo;you should build X,&rdquo; we are free to build it without
          obligation, though we will of course keep your underlying business
          information confidential per Section 5.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          7. Not for individual performance management
        </h2>
        <p>
          This matters to us, so it gets its own section: any product Husn
          eventually offers is <strong>not</strong> licensed for use in
          individual performance management. That means we will not permit
          customers to use Husn outputs to evaluate, rank, score,
          discipline, or otherwise manage the performance of named
          individuals. Our purpose is operational alignment for teams,
          giving program teams shared context, not surveillance. When
          we publish a real product agreement, this restriction will be a
          binding term of service; until then, it is a public statement of how
          we intend to operate, and we will decline customers who tell us they
          want to use the product otherwise.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          8. Privacy
        </h2>
        <p>
          The{" "}
          <Link
            href="/privacy"
            className="text-accent hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          explains how we handle the limited data this site collects. By using
          the site you acknowledge it.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          9. Third-party services
        </h2>
        <p>
          The site relies on Vercel, Resend, Cal.com, Plausible, and PostHog.
          We do not control those providers. When you interact with their
          components, for example, picking a slot on Cal.com,
          their own terms also apply to that interaction.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          10. Disclaimers
        </h2>
        <p>
          The site is provided &ldquo;as is.&rdquo; We work to keep it
          accurate and available, but we do not warrant that it will be
          uninterrupted, error-free, or up to date. Statements about the
          future product are aspirational and subject to change.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          11. Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, Husn is not liable for
          indirect, incidental, consequential, or special damages arising
          from your use of this site. Because we are not charging for
          anything at this stage, our total aggregate liability for any claim
          arising out of these terms is limited to USD 100. Nothing in these
          terms limits liability that cannot be limited under applicable law,
          including for fraud or gross negligence.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          12. Changes to these terms
        </h2>
        <p>
          We may update these terms as we move toward a product. The
          &ldquo;Last updated&rdquo; date at the top reflects the current
          version. If you have joined the waitlist, we will email you about
          material changes before they take effect.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          13. Governing law and disputes
        </h2>
        <p>
          These terms are governed by the laws applicable at Husn&rsquo;s
          principal place of business, without regard to conflict-of-laws
          rules. If you are a consumer in the EU/EEA, this does not deprive
          you of mandatory protections under your local law. We&rsquo;d much
          rather resolve disputes by email first, please write to{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>{" "}
          before escalating.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          14. Contact
        </h2>
        <p>
          For anything related to these terms, email{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          . A human will read it.
        </p>

        <p className="mt-10 text-sm text-ink-muted border-t border-ink/10 pt-6">
          These Terms are informational and do not replace legal advice. For
          your MSA, DPA, or any contractual question, email hello@husn.io.
        </p>
      </section>
    </main>
  );
}
