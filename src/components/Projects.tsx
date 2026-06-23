"use client";

import FadeIn from "./FadeIn";
import { PROJECTS } from "@/lib/data";
import classes from "./Projects.module.css";

const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const BADGE_STYLES = {
  featured: {
    background: "rgba(168,255,120,0.1)",
    color: "var(--accent1)",
    border: "1px solid rgba(168,255,120,0.2)",
  },
  live: {
    background: "rgba(120,255,214,0.1)",
    color: "var(--accent2)",
    border: "1px solid rgba(120,255,214,0.2)",
  },
  oss: {
    background: "rgba(108,142,255,0.1)",
    color: "var(--accent3)",
    border: "1px solid rgba(108,142,255,0.2)",
  },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 5vw" }}>
      <div style={{ maxWidth: "600px", marginBottom: "64px" }}>
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
            03 — Projects
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
            Things I&apos;ve shipped
          </h2>
        </FadeIn>
        <FadeIn delay={120}>
          <div
            style={{
              width: "40px",
              height: "2px",
              background:
                "linear-gradient(90deg, var(--accent1), var(--accent2))",
              marginBottom: "32px",
              borderRadius: "1px",
            }}
          />
        </FadeIn>
        <FadeIn delay={160}>
          <p
            style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.7 }}
          >
            A selection of products and platforms. I&apos;ve architected and
            delivered — spanning healthcare, developer tooling, and education
            technology, with a focus on scalability, performance, and
            exceptional user experiences.
          </p>
        </FadeIn>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gap: "20px",
        }}
        className={`projects-grid ${classes["projects-grid"]}`}
      >
        {PROJECTS.map((project, idx) => (
          <FadeIn
            key={project.title}
            delay={200 + idx * 80}
            style={project.featured ? { gridColumn: "1 / -1" } : undefined}
          >
            <div
              className={`${classes.project} ${project.featured ? classes["featured-project"] : ""}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.transform = "translateY(-4px)";
                (
                  e.currentTarget.querySelector(".top-border") as HTMLElement
                ).style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "none";
                (
                  e.currentTarget.querySelector(".top-border") as HTMLElement
                ).style.transform = "scaleX(0)";
              }}
            >
              {/* Top accent line */}
              <div
                className="top-border"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, var(--accent1), var(--accent2))",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.3s",
                }}
              />

              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 12px",
                    borderRadius: "3px",
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    marginBottom: "20px",
                    letterSpacing: "0.05em",
                    ...BADGE_STYLES[project.badge.variant],
                  }}
                >
                  {project.badge.label}
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.5px",
                    marginBottom: "12px",
                  }}
                >
                  {project.title}
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    marginBottom: "24px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {project.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "4px 10px",
                        background: "var(--bg3)",
                        borderRadius: "3px",
                        fontSize: "11px",
                        color: "var(--muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      style={{
                        fontSize: "13px",
                        color: "var(--muted)",
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "color 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--muted)")
                      }
                    >
                      {link.icon === "external" && <ExternalIcon />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Visual panel */}
              {project.visual === "metrics" && (
                <div
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: project.featured ? "200px" : "140px",
                    marginBottom: project.featured ? 0 : "20px",
                    order: project.featured ? 0 : -1,
                  }}
                >
                  {project.visual === "metrics" && project.metrics && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                        width: "100%",
                      }}
                    >
                      {project.metrics.map(({ val, label, accent }) => (
                        <div
                          key={label}
                          style={{
                            background: "var(--bg2)",
                            border: "1px solid var(--border)",
                            borderRadius: "6px",
                            padding: "16px",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "28px",
                              fontWeight: 700,
                              color: accent ?? "var(--accent1)",
                              letterSpacing: "-1px",
                            }}
                          >
                            {val}
                          </div>
                          <div
                            style={{
                              fontSize: "11px",
                              color: "var(--dim)",
                              marginTop: "4px",
                            }}
                          >
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
