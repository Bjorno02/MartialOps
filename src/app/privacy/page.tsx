import PageHeader from "@/components/PageHeader"

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

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader label="Legal" title="Privacy Policy" meta="Effective June 10, 2026 · Rev 01" />
      <div className="mx-auto max-w-3xl px-6 pb-24 md:px-12">
        <Section num="01" label="What this covers">
          <Body>
            Fitore is a training log for martial-arts gyms. Athletes record their sessions and
            their daily check-ins, and coaches watch the load and readiness of their gym. This
            policy explains what the app collects, who can see it, and how to get it corrected or
            removed. Questions go to{" "}
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

        <Section num="02" label="What we collect">
          <Body>
            When you sign in with Google we receive your name, your email address, and your
            profile picture, and nothing else from your Google account. Everything after that is
            what you choose to enter: training sessions with their date, duration, intensity, and
            type, and daily check-ins with your sleep, soreness, stress, and whether you are
            carrying an injury. We also keep your gym memberships, your role in each gym, and the
            invite code you used to join.
          </Body>
          <Body>
            The app computes two numbers from your entries, a readiness score and a training load.
            They are arithmetic on what you typed in and contain nothing gathered from anywhere
            else. Our servers also keep short-lived technical records, including your IP address,
            for rate limiting and for diagnosing errors.
          </Body>
        </Section>

        <Section num="03" label="Who sees your data">
          <Body>
            This is the part to read slowly. When you join a gym, the coaches and admins of that
            gym can see your name, your email, your check-ins, your readiness, and your training
            sessions. That visibility is the product working as intended, and it is the reason a
            coach invited you. Other athletes in the gym do not see your individual numbers.
          </Body>
          <Body>
            If you leave a gym, its coaches stop seeing anything new. Your training history stays
            in your own account, and if you rejoin that gym later with a new code, your past
            sessions become visible to its coaches again. Deleting your account removes the
            history entirely.
          </Body>
        </Section>

        <Section num="04" label="Wellness data">
          <Body>
            Sleep, soreness, stress, and injury status describe your body, so we treat them with
            more care than a page view. You enter them voluntarily, one check-in at a time, and by
            entering them you consent to our using them to compute your readiness and show it to
            you and to your gym&apos;s coaches. We use them for nothing else. We never sell them, never
            share them for marketing, and never use them for advertising of any kind.
          </Body>
        </Section>

        <Section num="05" label="Services we rely on">
          <Body>
            Google handles sign-in. Vercel hosts the application and keeps standard server logs.
            Our database provider stores the data described above. Upstash provides rate limiting
            and sees request identifiers such as IP addresses. Sentry collects error reports and
            diagnostic session replays when something breaks, which can include your IP address
            and request details. Each of these providers processes data under its own policy and
            only to run this service for us. There are no advertising networks and no third-party
            analytics trackers, and fonts are served from our own servers.
          </Body>
        </Section>

        <Section num="06" label="Cookies">
          <Body>
            Fitore sets a session cookie that keeps you signed in, a cookie that remembers which
            gym you are viewing, and a theme preference stored in your browser. All three exist so
            the app works, and none of them track you across other websites. Because there is no
            cross-site tracking and no sale of data, the app treats Do Not Track and Global
            Privacy Control signals the same as any other visit, since there is nothing for them
            to opt you out of.
          </Body>
        </Section>

        <Section num="07" label="Retention and deletion">
          <Body>
            Your data stays as long as your account does. To delete your account and everything in
            it, email {CONTACT} from the address you signed in with, and we will remove it within
            45 days except where the law requires us to keep a record. Error logs and technical
            records expire on their own schedule, measured in days and weeks rather than years.
          </Body>
        </Section>

        <Section num="08" label="Your rights">
          <Body>
            You can ask what we hold about you, have it corrected, have it deleted, or receive a
            copy in a usable format. Email {CONTACT} and we will answer within 45 days. We do not
            sell personal data, we do not run targeted advertising, and we do not profile anyone
            for decisions with legal effect, so there is nothing in that category to opt out of.
            We will never treat you worse for exercising a right.
          </Body>
          <Body>
            New Hampshire residents hold these rights under the New Hampshire Data Privacy Act,
            RSA 507-H. If we decline a request we will say why, you may appeal by replying to us,
            and we will answer the appeal in writing within 60 days. If the appeal fails you may
            complain to the New Hampshire Attorney General&apos;s Consumer Protection Bureau. Visitors
            from California and the European Union receive the same rights by policy, and EU
            residents may additionally object to or restrict processing, withdraw consent at any
            time, and complain to their local supervisory authority. The service runs on servers
            in the United States.
          </Body>
        </Section>

        <Section num="09" label="Children">
          <Body>
            Fitore is not for children under 13, and we do not knowingly hold their data,
            consistent with COPPA. Athletes between 13 and 17 may use the app only through their
            gym and with the consent of a parent or guardian, who may exercise any of the rights
            above on the athlete&apos;s behalf. If a child under 13 has an account, email us and we
            will delete it.
          </Body>
        </Section>

        <Section num="10" label="Security">
          <Body>
            Traffic is encrypted, every request that touches gym data checks your membership and
            role first, and rate limits blunt abuse. No system is perfectly secure, and if a
            breach ever touches your personal data we will notify you in accordance with federal
            and New Hampshire law.
          </Body>
        </Section>

        <Section num="11" label="Changes">
          <Body>
            When this policy changes, the revision mark and date at the top change with it, and
            meaningful changes will be called out in the app. The version posted here is the one
            in force.
          </Body>
        </Section>
      </div>
    </main>
  )
}
