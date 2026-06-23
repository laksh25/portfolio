"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 5vw", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,13,26,0.95)" : "rgba(8,13,26,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}>
        <a href="#" style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px",
          letterSpacing: "-0.5px", color: "var(--text)", textDecoration: "none",
        }}>
          LG<span style={{ color: "var(--accent1)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "32px", listStyle: "none" }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: "13px", fontWeight: 500, color: "var(--muted)",
                  textDecoration: "none", letterSpacing: "0.05em",
                  textTransform: "uppercase", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="desktop-nav"
          style={{
            padding: "8px 20px", background: "transparent",
            border: "1px solid var(--accent1)", color: "var(--accent1)",
            borderRadius: "4px", fontSize: "13px", fontWeight: 500,
            textDecoration: "none", letterSpacing: "0.03em", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent1)"; e.currentTarget.style.color = "var(--bg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent1)"; }}
        >
          Get in touch
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-nav"
          aria-label="Toggle menu"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: "5px", padding: "4px",
          }}
        >
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1.5px",
              background: "var(--muted)", transition: "all 0.3s",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)"
                       : menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                       : menuOpen && i === 1 ? "opacity: 0" : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-nav" style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "var(--bg2)", borderBottom: "1px solid var(--border)",
          padding: "24px 5vw", display: "flex", flexDirection: "column", gap: "20px",
        }}>
          {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ color: "var(--muted)", textDecoration: "none", fontSize: "15px" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-nav  { display: none !important; } }
      `}</style>
    </>
  );
}
