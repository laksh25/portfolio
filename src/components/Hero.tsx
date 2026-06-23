"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_ROLES, HERO_STATS } from "@/lib/data";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const stateRef = useRef({ ri: 0, ci: 0, deleting: false });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { ri, ci, deleting } = stateRef.current;
      const current = HERO_ROLES[ri];

      if (!deleting) {
        const next = current.slice(0, ci + 1);
        setTyped(next);
        stateRef.current.ci++;
        if (ci + 1 === current.length) {
          stateRef.current.deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        const next = current.slice(0, ci - 1);
        setTyped(next);
        stateRef.current.ci--;
        if (ci - 1 === 0) {
          stateRef.current.deleting = false;
          stateRef.current.ri = (ri + 1) % HERO_ROLES.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 32 : 62);
    };

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 5vw 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
          linear-gradient(rgba(168,255,120,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(168,255,120,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(108,142,255,0.08) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,255,120,0.06) 0%, transparent 70%)",
          bottom: 0,
          left: "10%",
          pointerEvents: "none",
        }}
      />

      <div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent1)",
              letterSpacing: "0.1em",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "var(--accent1)",
              }}
            />
            Available for new opportunities
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            Lakshay Gupta
          </h1>

          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 4vw, 44px)",
              fontWeight: 300,
              color: "var(--muted)",
              letterSpacing: "-1px",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: "transparent",
                background:
                  "linear-gradient(90deg, var(--accent1), var(--accent2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                fontWeight: 500,
              }}
            >
              {typed}
            </span>
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "1em",
                background: "var(--accent1)",
                verticalAlign: "middle",
              }}
              className="cursor-blink"
            />
          </div>

          <p
            style={{
              fontSize: "17px",
              color: "var(--muted)",
              maxWidth: "560px",
              lineHeight: 1.8,
              marginBottom: "48px",
            }}
          >
            I build{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>
              fast, scalable, and delightful
            </strong>{" "}
            web experiences — from pixel-perfect UIs to distributed backends.
            Currently focused on React/Next.js, TypeScript, and Node.js at
            scale.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                padding: "14px 32px",
                background: "var(--accent1)",
                color: "#080D1A",
                border: "none",
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
              View my work
            </a>
            <a
              href="#contact"
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
              Let&apos;s talk
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "5vw",
            display: "flex",
            gap: "48px",
            zIndex: 1,
          }}
          className="hero-stats"
        >
          {HERO_STATS.map(({ num, label }) => (
            <div key={label} style={{ textAlign: "right" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "var(--text)",
                  lineHeight: 1,
                  letterSpacing: "-1px",
                }}
              >
                {num.replace(/[+k]/g, "")}
                <span style={{ color: "var(--accent1)" }}>
                  {num.match(/[+k]/)?.[0] ?? ""}
                </span>
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Main content */}

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "5vw",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "12px",
          color: "var(--dim)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "var(--font-mono)",
          zIndex: 1,
        }}
        className="scroll-hint"
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, var(--accent1), transparent)",
          }}
          className="scroll-line-anim"
        />
        scroll
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stats { position: static !important; margin-top: 48px; justify-content: flex-start !important; }
          .scroll-hint { display: none !important; }
        }
      `}</style>
      {/* margin-top: 48px; justify-content: flex-start !important; */}
    </section>
  );
}
