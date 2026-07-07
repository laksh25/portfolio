"use client";

import FadeIn from "./FadeIn";
import { CONTACT_LINKS } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 5vw" }}>
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
          05 — Contact
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
          Let&apos;s build something
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

      <FadeIn delay={160}>
        <div
          style={{
            maxWidth: "700px",
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "56px",
          }}
          className="contact-wrapper"
        >
          <p
            style={{
              fontSize: "16px",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            I&apos;m selectively open to{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              senior/staff IC roles
            </strong>
            . I move fast in interviews, value async communication, and will
            always give you a straight answer. If you&apos;re working on
            something genuinely hard — reach out.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "40px",
            }}
            className="contact-grid"
          >
            {CONTACT_LINKS.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 20px",
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border2)";
                  e.currentTarget.style.background = "var(--bg2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg3)";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(168,255,120,0.08)",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "18px",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--dim)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "var(--text)",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="mailto:laksh25ay@gmail.com"
              target="_blank"
              style={{
                padding: "14px 32px",
                background: "var(--accent1)",
                color: "#080D1A",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "none";
              }}
            >
              Send me an email
            </a>
            <a
              href="https://drive.google.com/file/d/1GpDzjgOjSX03IUZiSfp26Rxl_Yk2XmiL/view?usp=sharing"
              target="_blank"
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border2)",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent2)";
                e.currentTarget.style.color = "var(--accent2)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.transform = "none";
              }}
            >
              Download resume
            </a>
          </div>
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 768px) {
          .contact-wrapper { padding: 32px 24px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
