"use client";

import FadeIn from "./FadeIn";
import { SKILLS } from "@/lib/data";

const FACTS = [
  { icon: "📍", label: "Location", value: "New Delhi, India — open to remote" },
  {
    icon: "🎓",
    label: "Education",
    value: "Masters of Computer Application, BVICAM Delhi",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 5vw" }}>
      <FadeIn>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--accent1)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          01 — About
        </div>
      </FadeIn>
      <FadeIn delay={80}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px,4vw,48px)",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            color: "var(--text)",
            marginBottom: "16px",
            lineHeight: 1.1,
          }}
        >
          Engineering at the
          <br />
          intersection of craft &amp; scale
        </h2>
      </FadeIn>
      <FadeIn delay={120}>
        <div
          style={{
            width: "40px",
            height: "2px",
            background:
              "linear-gradient(90deg, var(--accent1), var(--accent2))",
            marginBottom: "64px",
            borderRadius: "1px",
          }}
        />
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
          maxWidth: "1100px",
        }}
        className="about-grid"
      >
        {/* Left: bio + facts */}
        <FadeIn delay={160}>
          <div>
            {[
              <>
                I&apos;m a senior full-stack engineer with a{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  strong frontend bias
                </strong>{" "}
                — I care deeply about the visual, interactive layer that users
                actually touch. I&apos;ve spent 5 years building products that
                serve millions of users, at companies ranging from seed-stage
                startups to public-scale platforms.
              </>,
              <>
                My approach: architect thoughtfully, ship iteratively, obsess
                over performance. I think in systems — whether that&apos;s a
                component library, an API contract, or a CI/CD pipeline — and I
                write the kind of code that&apos;s easy to delete.
              </>,
              <>
                When I&apos;m not in an editor, I&apos;m likely exploring new
                technologies / concepts in frontend architecture, or mentoring
                engineers on my team.
              </>,
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--muted)",
                  fontSize: "16px",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
              >
                {para}
              </p>
            ))}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginTop: "36px",
              }}
            >
              {FACTS.map(({ icon, label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px 20px",
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(168,255,120,0.08)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--dim)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        color: "var(--text)",
                        fontWeight: 500,
                        marginTop: "2px",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right: skills */}
        <FadeIn delay={220}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--text)",
                marginBottom: "28px",
                letterSpacing: "-0.5px",
              }}
            >
              Core capabilities
            </h3>
            {SKILLS.map(({ category, items }) => (
              <div key={category} style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--accent2)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "12px",
                  }}
                >
                  {category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {items.map(({ label, primary }) => (
                    <span
                      key={label}
                      style={{
                        padding: "6px 14px",
                        background: primary
                          ? "rgba(168,255,120,0.05)"
                          : "var(--bg3)",
                        border: `1px solid ${primary ? "rgba(168,255,120,0.3)" : "var(--border)"}`,
                        borderRadius: "3px",
                        fontSize: "13px",
                        color: primary ? "var(--accent1)" : "var(--text)",
                        fontFamily: "var(--font-mono)",
                        cursor: "default",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent1)";
                        e.currentTarget.style.color = "var(--accent1)";
                        e.currentTarget.style.background =
                          "rgba(168,255,120,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = primary
                          ? "rgba(168,255,120,0.3)"
                          : "var(--border)";
                        e.currentTarget.style.color = primary
                          ? "var(--accent1)"
                          : "var(--text)";
                        e.currentTarget.style.background = primary
                          ? "rgba(168,255,120,0.05)"
                          : "var(--bg3)";
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}
