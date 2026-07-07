"use client"

import { motion } from "motion/react"
import { DoubleHeadedEagle, DotGrid } from "@/components/Ornaments"

type Props = { gymName: string; userName: string | null | undefined }

export default function HomeHero({ gymName, userName }: Props) {
  const now = new Date()
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <section className="relative overflow-hidden">
      {/* Large faint double-headed eagle — right side, decorative */}
      <div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          top: "30%",
          right: "5%",
          opacity: 0.06,
        }}
        aria-hidden="true"
      >
        <DoubleHeadedEagle size={240} color="var(--color-ink)" />
      </div>

      {/* Faint dot grid — bottom-left */}
      <DotGrid
        cols={18}
        rows={8}
        size={2}
        gap={11}
        color="var(--color-ink)"
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          opacity: 0.08,
          pointerEvents: "none",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
        {/* Masthead meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 flex flex-wrap items-center gap-3 border-b pb-4"
          style={{
            borderColor: "var(--color-rule-strong)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-eyebrow)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--color-ink-muted)",
          }}
        >
          <span>{dateStr}</span>
          {userName && (
            <>
              <span style={{ color: "var(--color-ink-faint)" }}>·</span>
              <span>{userName}</span>
            </>
          )}
          <span
            className="flex items-center gap-2 md:ml-auto"
            style={{ color: "var(--color-ink-faint)" }}
          >
            <span>Your Training</span>
            <span style={{ color: "var(--color-accent)" }}>·</span>
            <span>Quantified</span>
          </span>
        </motion.div>

        {/* Eyebrow with bracket reference */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex flex-wrap items-baseline gap-4"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-eyebrow)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--color-ink-muted)",
          }}
        >
          <span style={{ color: "var(--color-ink)" }}>
            <span style={{ color: "var(--color-accent)" }}>[</span>Home
            <span style={{ color: "var(--color-accent)" }}>]</span>
          </span>
          <span style={{ color: "var(--color-ink-faint)" }}>·</span>
          <span>Welcome back</span>
        </motion.div>

        {/* Stacked wordmark with gradient fill */}
        <h1
          className="gradient-text-ink"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "var(--text-display-xl)",
            lineHeight: "var(--leading-display)",
            letterSpacing: "var(--tracking-display)",
            textTransform: "uppercase",
            wordBreak: "break-word",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "inline-block" }}
            >
              {gymName}
            </motion.div>
            <motion.span
              style={{
                color: "var(--color-accent)",
                display: "inline-block",
                WebkitTextFillColor: "var(--color-accent)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.55,
                duration: 0.45,
                type: "spring",
                stiffness: 260,
                damping: 12,
              }}
            >
              .
            </motion.span>
          </div>
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 max-w-xl"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "18px",
            lineHeight: 1.7,
            color: "var(--color-ink-soft)",
          }}
        >
          You can log today&apos;s session, take your daily check-in, and step into
          the coach dashboard if that is part of what you do here.
        </motion.p>
      </div>
    </section>
  )
}
