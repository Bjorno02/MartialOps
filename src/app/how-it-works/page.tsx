"use client"

import { motion, useInView } from "motion/react"
import { useRef, type ReactNode } from "react"
import {
  DotGrid,
  CornerBrackets,
  DashedRule,
  TickRuler,
  DoubleHeadedEagle,
} from "@/components/Ornaments"

function DiamondDivider() {
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-12">
      <div className="flex items-center gap-6 py-6">
        <DashedRule className="flex-1" />
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--color-ink-faint)",
            letterSpacing: "0.3em",
          }}
        >
          §
        </span>
        <DashedRule className="flex-1" />
      </div>
    </div>
  )
}

function SectionBlock({
  number,
  roman,
  marginalia,
  title,
  tldr,
  children,
}: {
  number: string
  roman: string
  marginalia: string
  title: string
  tldr: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-6xl px-5 py-20 md:px-12 md:py-28"
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Left gutter: reference notation, ruler, marginalia */}
        <div className="col-span-12 md:col-span-3">
          <div
            className="mb-8 flex items-baseline gap-3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--color-ink)",
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>[§</span>
            <span>{number}</span>
            <span style={{ color: "var(--color-accent)" }}>]</span>
            <span
              style={{
                color: "var(--color-ink-faint)",
                marginLeft: "6px",
              }}
            >
              /{roman}
            </span>
          </div>

          <TickRuler
            length={140}
            orientation="vertical"
            ticks={14}
            color="var(--color-rule-strong)"
            style={{ marginBottom: "24px" }}
          />

          <p
            className="max-w-[14ch] italic"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              lineHeight: 1.7,
              letterSpacing: "0.04em",
              color: "var(--color-ink-muted)",
            }}
          >
            {marginalia}
          </p>
        </div>

        {/* Right column: headline + body + TL;DR */}
        <div className="col-span-12 md:col-span-9">
          <h2
            className="mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              textTransform: "uppercase",
              color: "var(--color-ink)",
            }}
          >
            {title}
            <span style={{ color: "var(--color-accent)" }}>.</span>
          </h2>

          {/* Body with accent drop cap */}
          <div
            className="max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--color-ink)",
            }}
          >
            <div
              className="text-lg md:text-xl [&>p]:leading-[1.75] [&>p:first-child::first-letter]:float-left [&>p:first-child::first-letter]:pr-3 [&>p:first-child::first-letter]:pt-1 [&>p:first-child::first-letter]:leading-[0.82] [&>p:first-child::first-letter]:font-[family-name:var(--font-display)] [&>p:first-child::first-letter]:text-[5.5rem] [&>p:first-child::first-letter]:font-extrabold [&>p:first-child::first-letter]:uppercase [&>p:first-child::first-letter]:text-[color:var(--color-accent)]"
            >
              {children}
            </div>
          </div>

          {/* TL;DR — hairline-bordered editorial block */}
          <aside
            className="relative mt-16 max-w-2xl border-y py-6"
            style={{
              borderColor: "var(--color-rule-strong)",
            }}
          >
            <div
              className="absolute left-0 top-0"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--color-ink-muted)",
                backgroundColor: "var(--color-canvas)",
                padding: "0 10px 0 0",
                transform: "translateY(-50%)",
              }}
            >
              TL;DR · No. {number}
            </div>
            <p
              className="text-lg md:text-xl"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "var(--color-ink)",
                textWrap: "balance",
              }}
            >
              &ldquo;{tldr}&rdquo;
            </p>
          </aside>
        </div>
      </div>
    </motion.section>
  )
}

export default function HowItWorksPage() {
  const inversionRef = useRef<HTMLDivElement>(null)
  const inversionInView = useInView(inversionRef, {
    once: true,
    margin: "-80px",
  })

  return (
    <main className="relative">
      {/* ── Masthead meta strip ─────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-5 md:px-12">
        <div
          className="flex flex-wrap items-center justify-between gap-3 border-b py-4"
          style={{
            borderColor: "var(--color-rule)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-eyebrow)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color: "var(--color-ink-muted)",
          }}
        >
          <span>
            Fitore<span style={{ color: "var(--color-accent)" }}>.</span>
          </span>
          <span className="hidden md:inline">
            No. 01 · The Method · Apr 2026
          </span>
          <span>Rev 01 / Guide</span>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Faint eagle backdrop */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          style={{
            top: "15%",
            right: "4%",
            opacity: 0.055,
          }}
          aria-hidden="true"
        >
          <DoubleHeadedEagle size={260} color="var(--color-ink)" />
        </div>

        {/* Faint dot texture, bottom-right corner */}
        <DotGrid
          cols={18}
          rows={8}
          size={2}
          gap={11}
          color="var(--color-ink)"
          style={{
            position: "absolute",
            bottom: 80,
            right: 40,
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />

        <div className="mx-auto max-w-6xl px-5 pb-32 pt-24 md:px-12 md:pb-40 md:pt-32">
          {/* Eyebrow with bracket notation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 flex flex-wrap items-baseline gap-5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--color-ink-muted)",
            }}
          >
            <span style={{ color: "var(--color-ink)" }}>
              <span style={{ color: "var(--color-accent)" }}>[</span>Guide
              <span style={{ color: "var(--color-accent)" }}>]</span>
            </span>
            <span style={{ color: "var(--color-ink-faint)" }}>·</span>
            <span>The Method</span>
            <span>·</span>
            <span style={{ color: "var(--color-ink-faint)" }}>
              I. Readiness / II. Load
            </span>
          </motion.div>

          {/* Stacked theatrical headline */}
          <h1
            className="gradient-text-ink"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "var(--text-display-xxl)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              textTransform: "uppercase",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                How
              </motion.div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                It
              </motion.div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: "inline-block" }}
              >
                Works
              </motion.div>
              <motion.span
                style={{
                  color: "var(--color-accent)",
                  WebkitTextFillColor: "var(--color-accent)",
                  display: "inline-block",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.95,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 12,
                }}
              >
                .
              </motion.span>
            </div>
          </h1>

          {/* Positioning paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "20px",
              lineHeight: 1.7,
              color: "var(--color-ink-soft)",
              textWrap: "pretty",
            }}
          >
            Fitore tracks two numbers across your training: a{" "}
            <strong style={{ color: "var(--color-accent)" }}>Readiness</strong> score,
            which tells you what you can do today, and a{" "}
            <strong style={{ color: "var(--color-accent)" }}>Training Load</strong>{" "}
            score, which tells you what you actually did yesterday, last week, and the
            month before that.
          </motion.p>

          {/* Meta strip below hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-20 flex flex-wrap items-baseline gap-5 border-t pt-6"
            style={{
              borderColor: "var(--color-rule)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--color-ink-muted)",
            }}
          >
            <span>
              <span style={{ color: "var(--color-accent)" }}>[§</span> 01{" "}
              <span style={{ color: "var(--color-accent)" }}>]</span> Readiness Score
            </span>
            <span style={{ color: "var(--color-ink-faint)" }}>·</span>
            <span>
              <span style={{ color: "var(--color-accent)" }}>[§</span> 02{" "}
              <span style={{ color: "var(--color-accent)" }}>]</span> Training Load
            </span>
            <span
              className="ml-auto hidden md:inline"
              style={{ color: "var(--color-ink-faint)" }}
            >
              ↓ Read on
            </span>
          </motion.div>
        </div>
      </section>

      <DiamondDivider />

      {/* ── § 01 Readiness ────────────────────────────────── */}
      <SectionBlock
        number="01"
        roman="I"
        marginalia="A short questionnaire about sleep, soreness, stress, and injury that produces a score from 1 to 100."
        title="The Readiness Score"
        tldr="A 100 means you are rested and ready, and a 1 means it is probably time to call the doctor before you train again."
      >
        <p>
          Readiness works the way a school report card works. You feed it your sleep,
          your soreness, your stress, and whether you came home from training in one
          piece, and it gives you back a number somewhere between 1 and 100. A score of
          100 means you could probably try to chin Francis Ngannou and live to tell
          about it. A score of 1 means you should rest, eat well, and reconsider some of
          the recent decisions that brought you to a 1.
        </p>
      </SectionBlock>

      <DiamondDivider />

      {/* ── § 02 Training Load ────────────────────────────── */}
      <SectionBlock
        number="02"
        roman="II"
        marginalia="Duration multiplied by intensity multiplied by a type modifier produces a single number that captures the day's effort."
        title="The Training Load"
        tldr="A bigger number means you trained harder, and whether that was a good idea or not is a matter you can take up with yourself in the morning."
      >
        <p>
          Training load is also straightforward. You log how long you trained, how hard
          it felt on a scale of 1 to 10, and what type of session it was, and the system
          multiplies these together and applies a modifier based on training type. Five
          rounds of live sparring is not the same as five rounds of shadow boxing, and
          pretending otherwise is how people get hurt. The resulting number is your
          load, and it serves as an honest reflection of how much you actually put in.
        </p>
      </SectionBlock>

      <DiamondDivider />

      <motion.section
        ref={inversionRef}
        className="relative overflow-hidden"
        style={{
          backgroundColor: "var(--color-accent)",
          color: "var(--color-accent-ink)",
          borderBottom: "6px solid var(--color-canvas)",
        }}
        initial={{ opacity: 0 }}
        animate={inversionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <CornerBrackets
          color="rgba(242, 232, 213, 0.5)"
          size={28}
          thickness={1}
          inset={20}
        />

        <DotGrid
          cols={22}
          rows={10}
          size={2}
          gap={11}
          color="var(--color-accent-ink)"
          style={{
            position: "absolute",
            top: 60,
            right: 60,
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />

        <div className="mx-auto max-w-6xl px-5 py-32 md:px-12 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inversionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-14 flex items-baseline gap-4"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "rgba(242, 232, 213, 0.7)",
            }}
          >
            <span style={{ color: "var(--color-ink)" }}>[Credo]</span>
            <span style={{ color: "var(--color-ink-faint)" }}>·</span>
            <span>The Thesis</span>
          </motion.div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "var(--text-display-xxl)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
              textTransform: "uppercase",
              color: "var(--color-accent-ink)",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={inversionInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Two numbers
              </motion.div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.div
                initial={{ y: "100%" }}
                animate={inversionInView ? { y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.32,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block" }}
              >
                Will do
              </motion.div>
            </div>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inversionInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-16 flex items-center gap-4 border-t pt-6"
            style={{
              borderColor: "rgba(242, 232, 213, 0.3)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "rgba(242, 232, 213, 0.75)",
            }}
          >
            <span>Fitore Method · No. 01</span>
            <span style={{ color: "var(--color-ink)" }}>§</span>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
