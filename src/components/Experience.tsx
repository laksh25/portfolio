"use client";

import FadeIn from "./FadeIn";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 5vw", background: "var(--bg2)" }}>
      <FadeIn><div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent1)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>02 — Experience</div></FadeIn>
      <FadeIn delay={80}><h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, letterSpacing: "-1.5px", color: "var(--text)", marginBottom: "16px", lineHeight: 1.1 }}>Where I&apos;ve built things</h2></FadeIn>
      <FadeIn delay={120}>
        <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, var(--accent1), var(--accent2))", marginBottom: "64px", borderRadius: "1px" }}/>
      </FadeIn>

      <div style={{ maxWidth: "900px" }}>
        {EXPERIENCE.map((job, idx) => (
          <FadeIn key={idx} delay={160 + idx * 80}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 3fr", gap: "48px",
              padding: "48px 0",
              borderBottom: idx < EXPERIENCE.length - 1 ? "1px solid var(--border)" : "none",
            }} className="exp-item">
              {/* Left */}
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", marginBottom: "8px" }}>{job.period}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text)", marginBottom: "4px" }}>{job.company}</div>
                <span style={{
                  display: "inline-block", padding: "3px 10px",
                  background: "rgba(108,142,255,0.1)", border: "1px solid rgba(108,142,255,0.2)",
                  borderRadius: "3px", fontSize: "11px", color: "var(--accent3)",
                  fontFamily: "var(--font-mono)", marginTop: "8px",
                }}>{job.type}</span>
              </div>

              {/* Right */}
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.5px", marginBottom: "12px" }}>{job.title}</div>
                <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, marginBottom: "20px" }}>{job.desc}</p>
                <ul style={{ listStyle: "none", marginBottom: "20px" }}>
                  {job.achievements.map((ach, i) => (
                    <li key={i} style={{ fontSize: "14px", color: "var(--muted)", padding: "5px 0 5px 20px", position: "relative", lineHeight: 1.6 }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent1)", fontSize: "12px", top: "6px" }}>→</span>
                      <span dangerouslySetInnerHTML={{ __html: ach.replace(/<strong>/g, '<strong style="color:var(--text);font-weight:500">') }}/>
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {job.tech.map((t) => (
                    <span key={t} style={{ padding: "4px 10px", background: "var(--bg3)", borderRadius: "3px", fontSize: "11px", color: "var(--dim)", fontFamily: "var(--font-mono)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .exp-item { grid-template-columns: 1fr !important; gap: 16px !important; } }
      `}</style>
    </section>
  );
}
