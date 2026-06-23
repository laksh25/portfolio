"use client";

import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 5vw",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <span
        style={{
          fontSize: "13px",
          color: "var(--dim)",
          fontFamily: "var(--font-mono)",
        }}
      >
        © {new Date().getFullYear()} Lakshay Gupta — built with Next.js
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        {FOOTER_LINKS.map((l) => (
          <a
            key={l.id}
            href={l.href}
            target="_blank"
            style={{
              fontSize: "13px",
              color: "var(--dim)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
