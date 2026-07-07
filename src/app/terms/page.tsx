import PageHeader from "@/components/PageHeader"
import Link from "next/link"

const CONTACT = "bshurd42@gmail.com"

function Section({
  num,
  label,
  children,
}: {
  num: string
  label: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t pt-6 pb-10" style={{ borderColor: "var(--color-rule-strong)" }}>
      <div
        className="mb-6"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-eyebrow)",
          letterSpacing: "var(--tracking-eyebrow)",
          textTransform: "uppercase",
          color: "var(--color-ink-muted)",
        }}
      >
        <span style={{ color: "var(--color-accent)" }}>[§ {num}]</span> {label}
      </div>
      {children}
    </section>
  )
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-4 max-w-2xl text-lg leading-relaxed"
      style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink-soft)" }}
    >
      {children}
    </p>
  )
}

export default function TermsPage() {
  return (
    <main>
      <PageHeader label="Legal" title="Terms of Service" meta="Effective June 10, 2026 · Rev 01" />
      <div className="mx-auto max-w-3xl px-6 pb-24 md:px-12">
        <Section num="01" label="The agreement">
          <Body>
            These terms govern your use of Fitore, a training-load and readiness tracker for
            martial-arts gyms. By signing in you accept them, together with the{" "}
            <Link
              href="/privacy"
              style={{
                color: "var(--color-ink)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Privacy Policy
            </Link>
            . If you do not accept them, do not use the service. Questions go to{" "}
            <a
              href={`mailto:${CONTACT}`}
              style={{
                color: "var(--color-ink)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              {CONTACT}
            </a>
            .
          </Body>
        </Section>

        <Section num="02" label="Accounts">
          <Body>
            You sign in with a Google account, and the account you use must be yours. You are
            responsible for what happens under your sign-in, and you must be at least 13 years
            old. Athletes under 18 may use Fitore only through their gym and with a parent or
            guardian&apos;s consent.
          </Body>
        </Section>

        <Section num="03" label="Gyms, coaches, and what they see">
          <Body>
            Athletes join a gym by redeeming an invite code from that gym&apos;s coach. Joining a gym
            shares your training data with its coaches and admins, as the Privacy Policy describes
            in plain terms, and that sharing is the purpose of the product. Coaches and admins
            agree to use athlete data only to run their gym and coach their athletes, and never to
            harass, embarrass, or discriminate. Invite codes are for the people a coach means to
            invite, and passing them around beyond that defeats their purpose and may get the
            memberships removed.
          </Body>
        </Section>

        <Section num="04" label="Not medical advice">
          <Body>
            Readiness and training load are arithmetic on the numbers you enter. They are not
            medical advice, not a diagnosis, and not a clearance to train or fight. A green score
            does not mean you are healthy and a red score does not mean you are hurt. Decisions
            about training, recovery, and injuries belong to you, your coach, and your doctor, and
            when your body tells you something different from the app, believe your body.
          </Body>
        </Section>

        <Section num="05" label="Your content">
          <Body>
            The sessions and check-ins you log are yours. You grant us the license needed to
            store, process, and display them so the service can work, and nothing more. We claim
            no ownership of your training history, and you can take a copy or delete it as the
            Privacy Policy describes.
          </Body>
        </Section>

        <Section num="06" label="Acceptable use">
          <Body>
            Do not probe or break the security of the service, scrape it, flood it, or reach for
            data that your role does not grant you. Do not enter content that is unlawful or
            abusive, and do not impersonate another person or gym. We may suspend or remove
            accounts that violate these terms.
          </Body>
        </Section>

        <Section num="07" label="The service itself">
          <Body>
            Fitore is provided as is, without warranties of any kind, and we do not promise it
            will be uninterrupted or free of errors. Features may change, and if we ever retire
            the service we will give you a reasonable chance to ask for a copy of your data first.
          </Body>
        </Section>

        <Section num="08" label="Liability">
          <Body>
            To the fullest extent the law allows, we are not liable for indirect, incidental, or
            consequential damages arising from the service, including training or competition
            decisions made with it. Our total liability for any claim will not exceed one hundred
            dollars or the amount you paid us in the past year, whichever is greater. Some
            jurisdictions limit these limitations, in which case ours reach only as far as the law
            permits.
          </Body>
        </Section>

        <Section num="09" label="Termination">
          <Body>
            You may stop using Fitore or ask us to delete your account at any time. We may suspend
            or terminate accounts that break these terms, after which the Privacy Policy governs
            what happens to the data.
          </Body>
        </Section>

        <Section num="10" label="Governing law">
          <Body>
            These terms are governed by the laws of the State of New Hampshire, and disputes
            belong in the state or federal courts of New Hampshire. Nothing here limits consumer
            rights you hold under the laws of your own state or country.
          </Body>
        </Section>

        <Section num="11" label="Changes">
          <Body>
            When these terms change, the revision mark and date at the top change with them, and
            meaningful changes will be called out in the app. Continuing to use Fitore after a
            change takes effect means you accept it.
          </Body>
        </Section>
      </div>
    </main>
  )
}
