import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy: Husn",
  description:
    "How Husn collects, uses, and protects the information you share when visiting our website or booking a demo. This site does not collect or process patient health information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-6">
          <Link href="/" className="text-xl font-medium">Husn</Link>
          <nav className="hidden gap-6 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted md:flex">
            <Link href="/#how">How it works</Link>
            <Link href="/#founders">Founders</Link>
            <Link href="/blog/">Blog</Link>
          </nav>
          <Link href="/#demo" className="inline-flex items-center gap-2 rounded-[2px] bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90">Book a demo</Link>
        </div>
      </header>

      <main
        id="main"
        className="max-w-3xl mx-auto px-6 py-16 text-ink prose-tight"
      >
      <header className="mb-10 border-b border-ink/10 pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: 2026-08-10</p>
        <p className="mt-3 rounded-[2px] border border-ink/10 bg-ink/[0.03] px-4 py-3 text-sm text-ink-muted">
          Draft. This policy is written for the current stage of the
          business (a marketing website for a working MVP, no live product
          yet) and is pending founder/legal review before being treated as
          final.
        </p>
      </header>

      <section className="space-y-4 text-ink-muted leading-relaxed">
        <p>
          This policy describes how Husn collects, uses, and protects the
          information you share when you visit our website or book a demo.
          We&rsquo;ve written it in plain English; it is informational and
          does not replace legal advice. If anything is unclear, email us at{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          .
        </p>
        <p>
          <strong>This website does not collect or process Protected
          Health Information (PHI).</strong> No patient data is submitted
          through this site. Any patient information shown on this site
          (for example, in the illustrative product walkthrough) is
          synthetic and used only to demonstrate how Husn works. Husn is
          currently a working MVP in a demo environment; this policy will be
          expanded with HIPAA-specific terms, a Business Associate
          Agreement, and PHI-handling commitments before any pilot begins
          processing real patient data.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          1. Who we are (data controller)
        </h2>
        <p>
          Husn (&ldquo;Husn&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is
          the data controller for information collected through this landing
          page. The simplest way to reach us about privacy is by email:{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          . If you are in the EU/EEA and would prefer to write to a designated
          contact, that same address is the right destination, we are a
          small team and reply ourselves.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          2. What we collect
        </h2>
        <p>
          We collect only what you actively give us when you book a demo, and
          what is needed to run a basic website. Specifically:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Demo bookings.</strong> If you book a call, our scheduling
            provider (Calendly) receives your name, email, and chosen time
            slot.
          </li>
          <li>
            <strong>Page analytics.</strong> Aggregate, cookie-free metrics
            about which pages load and how visitors move through the site
            (provided by Plausible). This does not identify you.
          </li>
          <li>
            <strong>Product-research event analytics.</strong> If you accept
            our cookie banner, PostHog and Google Analytics record anonymous
            interaction events (clicks, scroll depth) so we can learn which
            messaging resonates. If you do not accept, neither is loaded.
          </li>
          <li>
            <strong>Standard server logs.</strong> Our hosting provider
            (GitHub Pages) processes connection metadata such as IP address
            and user agent for short periods to deliver the site and prevent
            abuse.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> collect special-category data, payment
          information, or patient health information of any kind through this
          website.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          3. Why we use it (purposes &amp; legal bases)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Schedule and conduct demo calls.</strong> Legal basis:
            performance of pre-contractual steps you requested, and your
            consent in booking.
          </li>
          <li>
            <strong>Understand traffic and improve messaging.</strong> Legal
            basis: legitimate interest (Plausible, cookie-free) and your
            consent (PostHog and Google Analytics, opt-in via banner).
          </li>
          <li>
            <strong>Keep the site secure and available.</strong> Legal basis:
            legitimate interest in protecting our infrastructure.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-ink mt-10">
          4. Sub-processors we use
        </h2>
        <p>
          Running even a simple landing page involves a handful of third-party
          services. Each one is bound by its own privacy commitments. The
          current list:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>GitHub Pages</strong>, web hosting.
          </li>
          <li>
            <strong>Calendly</strong>, demo-call scheduling.
          </li>
          <li>
            <strong>Plausible</strong>, cookie-free, aggregate page
            analytics.
          </li>
          <li>
            <strong>PostHog</strong> and <strong>Google Analytics</strong>,
            event analytics, loaded only with your consent.
          </li>
        </ul>
        <p>
          If we change this list materially, we will update this page. You can
          ask for the current version any time at{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          5. Cookies and the consent banner
        </h2>
        <p>
          The landing page itself does not require cookies to function. The
          banner you see on first visit asks one question: whether to enable
          PostHog and Google Analytics event analytics. If you decline (or
          ignore it), neither is loaded and no analytics cookies are set.
          Plausible runs either way because it does not use cookies and does
          not collect personal data. You can change your choice at any time
          by clearing your site data and revisiting the page.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          6. International transfers
        </h2>
        <p>
          Our sub-processors are based in the United States and the European
          Union. Where personal data is transferred outside the EU/EEA or UK,
          we rely on the providers&rsquo; Standard Contractual Clauses (SCCs)
          and any equivalent safeguards they publish. We aim to keep
          processing inside the EU/EEA wherever a provider offers that option.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          7. How long we keep things
        </h2>
        <p>
          Demo booking details and call notes are kept until we either launch
          a product and convert you into an early user, or for up to 12 months
          after your call, whichever happens first, unless you ask
          us to delete them earlier. Aggregate analytics are retained per each
          provider&rsquo;s defaults. Server logs are kept for short
          operational windows by GitHub Pages.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          8. Your rights
        </h2>
        <p>
          If you are in the EU/EEA, UK, or Switzerland, you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access the personal data we hold about you.</li>
          <li>Ask us to correct or erase it.</li>
          <li>
            Receive a portable copy or have it transmitted to another
            controller, where technically feasible.
          </li>
          <li>
            Object to processing based on legitimate interest, and withdraw
            consent at any time.
          </li>
          <li>
            Lodge a complaint with your local supervisory authority. We&rsquo;d
            appreciate a chance to address concerns first, but it&rsquo;s your
            right either way.
          </li>
        </ul>
        <p>
          To exercise any of these, email{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          . We will respond within a reasonable time, typically under 30 days.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          9. No automated decision-making
        </h2>
        <p>
          We do not make automated decisions about you that produce legal or
          similarly significant effects. There is no scoring, profiling, or
          automated rejection happening on this page, a human reads
          each demo request.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          10. Notice for California residents (CCPA/CPRA)
        </h2>
        <p>
          If you are a California resident, the California Consumer Privacy
          Act gives you specific rights:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Right to know</strong> what personal information we have
            collected about you.
          </li>
          <li>
            <strong>Right to delete</strong> that information, subject to
            limited exceptions.
          </li>
          <li>
            <strong>Right to correct</strong> inaccurate information.
          </li>
          <li>
            <strong>Right to opt out</strong> of sale or sharing of personal
            information, though we do not sell or share it for
            cross-context behavioral advertising in the first place.
          </li>
          <li>
            <strong>Right to non-discrimination</strong> for exercising any of
            the above.
          </li>
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>{" "}
          with &ldquo;CCPA request&rdquo; in the subject. We may need to
          confirm your identity before responding.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          11. Security
        </h2>
        <p>
          We work toward sensible security practices proportionate to our
          stage: encrypted transport (HTTPS), access controls on internal
          tooling, and limiting how many people on our side can see waitlist
          data. We do not claim certification under SOC 2, ISO 27001, or any
          other framework at this time.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          12. Children
        </h2>
        <p>
          This site is intended for working adults evaluating professional
          tooling. We do not knowingly collect information from anyone under
          16. If you believe a child has submitted data, contact us and we
          will delete it.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          13. Changes to this policy
        </h2>
        <p>
          As Husn evolves, this policy will change. We will update the
          &ldquo;Last updated&rdquo; date at the top, and if changes are
          material we will email anyone who has booked a demo or joined our
          mailing list before they take effect.
        </p>

        <h2 className="text-xl font-semibold text-ink mt-10">
          14. Contact
        </h2>
        <p>
          Questions, requests, complaints, or curiosity:{" "}
          <a
            href="mailto:hello@husn.io"
            className="text-accent hover:underline"
          >
            hello@husn.io
          </a>
          . A human will read it.
        </p>

        <p className="mt-10 text-sm text-ink-muted border-t border-ink/10 pt-6">
          This policy is informational and does not replace legal advice. For
          your DPA, sub-processor list, or any contractual question, email
          hello@husn.io.
        </p>
      </section>
      </main>

      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-[1140px] flex-col items-start justify-between gap-2 px-6 py-8 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted md:flex-row md:items-center">
          <span>Husn · referral records into EHR-ready context</span>
          <span>Husn · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
