"use client";

import { useEffect, useRef, CSSProperties } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

export default function FadeIn({ children, delay = 0, style, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
